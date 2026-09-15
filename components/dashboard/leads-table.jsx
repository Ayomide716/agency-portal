"use client";

import * as React from "react";
import {
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Mail,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LEAD_SOURCES, LEAD_STATUSES, statusVariant } from "@/lib/data";
import { cn, formatCurrency, formatDate, initialsOf } from "@/lib/utils";

const PAGE_SIZE = 8;

const columns = [
  { key: "name", label: "Lead", sortable: true },
  { key: "company", label: "Company", sortable: true },
  { key: "email", label: "Email", sortable: false },
  { key: "status", label: "Status", sortable: true },
  { key: "source", label: "Source", sortable: true },
  { key: "value", label: "Value", sortable: true, align: "right" },
  { key: "dateAdded", label: "Date added", sortable: true, align: "right" },
];

export function LeadsTable({ leads, title = "Leads", description }) {
  const [query, setQuery] = React.useState("");
  const [status, setStatus] = React.useState("all");
  const [source, setSource] = React.useState("all");
  const [sort, setSort] = React.useState({ key: "dateAdded", direction: "desc" });
  const [page, setPage] = React.useState(1);

  const filtered = React.useMemo(() => {
    const needle = query.trim().toLowerCase();

    const rows = leads.filter((lead) => {
      const matchesQuery =
        !needle ||
        lead.name.toLowerCase().includes(needle) ||
        lead.company.toLowerCase().includes(needle) ||
        lead.email.toLowerCase().includes(needle) ||
        lead.owner.toLowerCase().includes(needle) ||
        lead.id.toLowerCase().includes(needle);

      const matchesStatus = status === "all" || lead.status === status;
      const matchesSource = source === "all" || lead.source === source;

      return matchesQuery && matchesStatus && matchesSource;
    });

    const direction = sort.direction === "asc" ? 1 : -1;

    return rows.sort((a, b) => {
      const left = a[sort.key];
      const right = b[sort.key];
      if (typeof left === "number" && typeof right === "number") {
        return (left - right) * direction;
      }
      return String(left).localeCompare(String(right)) * direction;
    });
  }, [leads, query, status, source, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visible = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  // Any change to the filter set puts the reader back on the first page.
  React.useEffect(() => {
    setPage(1);
  }, [query, status, source]);

  const toggleSort = (key) => {
    setSort((current) =>
      current.key === key
        ? { key, direction: current.direction === "asc" ? "desc" : "asc" }
        : { key, direction: "asc" }
    );
  };

  const filtersActive = query !== "" || status !== "all" || source !== "all";

  const resetFilters = () => {
    setQuery("");
    setStatus("all");
    setSource("all");
  };

  const exportCsv = () => {
    const header = [
      "ID",
      "Name",
      "Company",
      "Title",
      "Email",
      "Status",
      "Source",
      "Value",
      "Owner",
      "Date added",
    ];
    const escape = (cell) => `"${String(cell).replace(/"/g, '""')}"`;
    const body = filtered.map((lead) =>
      [
        lead.id,
        lead.name,
        lead.company,
        lead.title,
        lead.email,
        lead.status,
        lead.source,
        lead.value,
        lead.owner,
        lead.dateAdded,
      ]
        .map(escape)
        .join(",")
    );

    const csv = [header.map(escape).join(","), ...body].join("\n");
    const url = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8;" })
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = `apex-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="rounded-xl border border-border bg-card">
      <div className="flex flex-col gap-4 border-b border-border p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h2 className="text-base font-semibold text-zinc-100">{title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {description ??
                `${filtered.length} of ${leads.length} leads match the current view.`}
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={exportCsv} className="shrink-0">
            <Download />
            Export CSV
          </Button>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, company, email or owner…"
              aria-label="Search leads"
              className="pl-9 pr-9"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-zinc-200"
              >
                <X className="size-3.5" />
              </button>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="hidden items-center gap-1.5 text-xs text-muted-foreground sm:flex">
              <SlidersHorizontal className="size-3.5" />
              Filters
            </div>

            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-[150px]" aria-label="Filter by status">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All statuses</SelectItem>
                {LEAD_STATUSES.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={source} onValueChange={setSource}>
              <SelectTrigger className="w-[160px]" aria-label="Filter by source">
                <SelectValue placeholder="Source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All sources</SelectItem>
                {LEAD_SOURCES.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {filtersActive ? (
              <Button variant="ghost" size="sm" onClick={resetFilters}>
                <X />
                Reset
              </Button>
            ) : null}
          </div>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            {columns.map((column) => (
              <TableHead
                key={column.key}
                className={column.align === "right" ? "text-right" : undefined}
              >
                {column.sortable ? (
                  <button
                    type="button"
                    onClick={() => toggleSort(column.key)}
                    aria-label={`Sort by ${column.label}`}
                    className={cn(
                      "inline-flex items-center gap-1.5 transition-colors hover:text-zinc-200",
                      sort.key === column.key && "text-emerald-400",
                      column.align === "right" && "flex-row-reverse"
                    )}
                  >
                    {column.label}
                    <ArrowUpDown className="size-3" />
                  </button>
                ) : (
                  column.label
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {visible.length === 0 ? (
            <TableRow className="hover:bg-transparent">
              <TableCell colSpan={columns.length} className="py-16 text-center">
                <p className="text-sm font-medium text-zinc-300">
                  No leads match these filters
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Try a different search term or clear the filters.
                </p>
                {filtersActive ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={resetFilters}
                    className="mt-4"
                  >
                    Clear filters
                  </Button>
                ) : null}
              </TableCell>
            </TableRow>
          ) : (
            visible.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="size-8">
                      <AvatarFallback>{initialsOf(lead.name)}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-zinc-100">
                        {lead.name}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        {lead.title}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap text-sm text-zinc-300">
                  {lead.company}
                </TableCell>
                <TableCell>
                  <a
                    href={`mailto:${lead.email}`}
                    className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-emerald-400"
                  >
                    <Mail className="size-3.5 shrink-0" />
                    <span className="max-w-[210px] truncate">{lead.email}</span>
                  </a>
                </TableCell>
                <TableCell>
                  <Badge variant={statusVariant[lead.status]}>{lead.status}</Badge>
                </TableCell>
                <TableCell className="whitespace-nowrap text-sm text-zinc-400">
                  {lead.source}
                </TableCell>
                <TableCell className="whitespace-nowrap text-right font-mono text-sm text-zinc-200">
                  {formatCurrency(lead.value)}
                </TableCell>
                <TableCell className="whitespace-nowrap text-right text-sm text-muted-foreground">
                  {formatDate(lead.dateAdded)}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <div className="flex flex-col items-center justify-between gap-3 border-t border-border px-5 py-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          {filtered.length === 0
            ? "No results"
            : `Showing ${(currentPage - 1) * PAGE_SIZE + 1}–${Math.min(
                currentPage * PAGE_SIZE,
                filtered.length
              )} of ${filtered.length}`}
        </p>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage <= 1}
            onClick={() => setPage((value) => Math.max(1, value - 1))}
          >
            <ChevronLeft />
            Previous
          </Button>
          <span className="px-1 text-sm tabular-nums text-zinc-400">
            {currentPage} / {pageCount}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage >= pageCount}
            onClick={() => setPage((value) => Math.min(pageCount, value + 1))}
          >
            Next
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
}

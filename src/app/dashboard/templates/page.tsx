"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { PageHeader } from "~/components/layout/page-header";
import { DataTable, type Column } from "~/components/data-table/data-table";
import { api } from "~/trpc/react";

interface TemplateRow {
  id: string;
  name: string;
  content: string;
  [key: string]: unknown;
}

const columns: Column<TemplateRow>[] = [
  { header: "Name", accessorKey: "name" },
  {
    header: "Content",
    cell: (row) => (
      <span className="max-w-xs truncate">
        {row.content.slice(0, 80)}
        {row.content.length > 80 ? "..." : ""}
      </span>
    ),
  },
  {
    header: "Actions",
    cell: (row) => (
      <Link
        href={`/dashboard/templates/${row.id}/edit`}
        className="text-primary hover:underline"
      >
        Edit
      </Link>
    ),
  },
];

export default function TemplatesPage() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState<string | undefined>();

  const templates = api.template.listPaged.useQuery({ page, query });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Templates"
        description="Manage message templates"
        action={
          <Link href="/dashboard/templates/create">
            <Button>Add Template</Button>
          </Link>
        }
      />

      <DataTable
        columns={columns}
        data={(templates.data?.items as TemplateRow[]) ?? []}
        searchPlaceholder="Search templates..."
        onSearch={(q) => {
          setQuery(q || undefined);
          setPage(1);
        }}
        pagination={
          templates.data
            ? {
                page: templates.data.page,
                totalPages: templates.data.totalPages,
                onPageChange: setPage,
              }
            : undefined
        }
      />
    </div>
  );
}

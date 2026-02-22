"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { PageHeader } from "~/components/layout/page-header";
import { DataTable, type Column } from "~/components/data-table/data-table";
import { Badge } from "~/components/ui/badge";
import { api } from "~/trpc/react";

interface VoiceRow {
  id: string;
  name: string;
  cloneProvider: string;
  description: string | null;
  [key: string]: unknown;
}

const columns: Column<VoiceRow>[] = [
  { header: "Name", accessorKey: "name" },
  {
    header: "Provider",
    cell: (row) => <Badge variant="secondary">{row.cloneProvider}</Badge>,
  },
  {
    header: "Description",
    cell: (row) => row.description ?? "-",
  },
  {
    header: "Actions",
    cell: (row) => (
      <Link
        href={`/dashboard/voices/${row.id}/edit`}
        className="text-primary hover:underline"
      >
        Edit
      </Link>
    ),
  },
];

export default function VoicesPage() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState<string | undefined>();

  const voices = api.voiceClone.listPaged.useQuery({ page, query });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Voice Clones"
        description="Manage your cloned voices"
        action={
          <Link href="/dashboard/voices/create">
            <Button>Create Voice</Button>
          </Link>
        }
      />

      <DataTable
        columns={columns}
        data={(voices.data?.items as VoiceRow[]) ?? []}
        searchPlaceholder="Search voices..."
        onSearch={(q) => {
          setQuery(q || undefined);
          setPage(1);
        }}
        pagination={
          voices.data
            ? {
                page: voices.data.page,
                totalPages: voices.data.totalPages,
                onPageChange: setPage,
              }
            : undefined
        }
      />
    </div>
  );
}

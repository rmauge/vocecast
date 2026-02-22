"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { PageHeader } from "~/components/layout/page-header";
import { DataTable, type Column } from "~/components/data-table/data-table";
import { api } from "~/trpc/react";

interface ClientRow {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  [key: string]: unknown;
}

const columns: Column<ClientRow>[] = [
  { header: "First Name", accessorKey: "firstName" },
  { header: "Last Name", accessorKey: "lastName" },
  { header: "Email", accessorKey: "email" },
  { header: "Phone", accessorKey: "phoneNumber" },
  {
    header: "Actions",
    cell: (row) => (
      <Link
        href={`/dashboard/clients/${row.id}/edit`}
        className="text-primary hover:underline"
      >
        Edit
      </Link>
    ),
  },
];

export default function ClientsPage() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState<string | undefined>();

  const clients = api.clients.listPaged.useQuery({ page, query });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Clients"
        description="Manage your client database"
        action={
          <Link href="/dashboard/clients/create">
            <Button>Add Client</Button>
          </Link>
        }
      />

      <DataTable
        columns={columns}
        data={(clients.data?.items as ClientRow[]) ?? []}
        searchPlaceholder="Search clients..."
        onSearch={(q) => {
          setQuery(q || undefined);
          setPage(1);
        }}
        pagination={
          clients.data
            ? {
                page: clients.data.page,
                totalPages: clients.data.totalPages,
                onPageChange: setPage,
              }
            : undefined
        }
      />
    </div>
  );
}

"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { CellActions } from "./cell-actions";
import { Button } from "~/components/ui/button";
import { ArrowUpDownIcon } from "lucide-react";

export type TeacherType =
  | {
      id: string;
      firtName: string;
      lastName: string;
      phoneNumber: string;
      emailAddress: string;
      streetAddress: string;
      streetAddressLine: string | null;
      city: string;
      state: string;
      postalCode: string | null;
      classId: string | null;
      createdAt: Date;
      updatedAt: Date | null;
      classes: {
        id: string;
        name: string;
        teacherId: string | null;
        studentId: string | null;
        classSize: number | null;
        createdAt: Date;
        updatedAt: Date | null;
      } | null;
    }
  | undefined;
export const columns: ColumnDef<TeacherType>[] = [
  {
    accessorKey: "firtName",
    header: "FirstName",
  },
  {
    accessorKey: "emailAddress",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellActions data={row.original} />,
  },
];

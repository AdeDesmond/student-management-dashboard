"use client";
import { PlusIcon } from "lucide-react";
import axios from "axios";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { type TeacherType } from "./column";
import { EditIcon, MoreHorizontal, TrashIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import Link from "next/link";

interface CellActionsProps {
  data: TeacherType;
}

export const CellActions = ({ data }: CellActionsProps) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open Menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>
            <Button asChild>
              <Link href={`/teacher/${data?.id}`}>
                <PlusIcon className="mr-2 h-4 w-4" />
                More Info
              </Link>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => {}}>
            <EditIcon className="mr-2 h-4 w-4" />
            Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <TrashIcon className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

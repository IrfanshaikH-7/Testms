'use client'
import { Button } from "@/components/ui/button";
import { Student } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react";
  

export const columns: ColumnDef<Student>[] = [
    {
        header: 'Student ID',
        accessorKey: "id"
    },
    {
        header: 'Name',
        accessorKey: 'name'
    },
    {
        header: 'Interests',
        accessorKey:'interest'
    },
    {
        id: 'action',
        cell: ({row})=> {
            const person = row.original;
            const name = person.name
            const id = person.id
            return (
                
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='ghost' className="w-8 h-8 p-0">
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={()=> {
                            navigator.clipboard.writeText(name)
                        }}>
                            Copy Student name
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={()=> {
                            navigator.clipboard.writeText(id)
                        }}>
                            Copy Student ID
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]

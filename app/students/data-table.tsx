"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { useRouter } from "next/navigation"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from "react"
import ProfileButton from "@/components/ProfileButton"
import { Profile } from "@prisma/client"
import { useModel } from "@/hooks/emp-store"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    employees: Profile[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
    employees

}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })
    console.log(employees)
    const updateEmps = useModel((state:any) => state.updateEmps)
    updateEmps(employees)
    
    const router = useRouter()

    useEffect(() => {
        router.refresh()
    },[])
    return (
        <section className="h-screen w-full flex flex-col justify-end items-end px-12 gap-1">
            <div className="flex justify-between items-center w-full ">
              <Link href='/register' className="self-start p-4 border rounded-md hover:bg-neutral-800">
                register new Student
            </Link>  
            <div className="border">
                <ProfileButton />
            </div>
            </div>
            
            <div className="rounded-md border h-4/6 w-full overflow-y-scroll no-scrollbar">
                <Table >
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {/* Pagitantion */}
            <div className="flex self-start item-center justify-center space-x-2 py-4">
                    <Button variant='outline' size='sm' onClick={() => {
                        table.previousPage()
                    }}
                    disabled={!table.getCanPreviousPage()}
                    >
                    Previous
                    </Button>
                    <Button variant='outline' size='sm' onClick={() => {
                        table.nextPage()
                    }}
                    disabled={!table.getCanNextPage()}
                    >
                    Next
                    </Button>
            </div>
        </section>
    )
}

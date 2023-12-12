'use client'
import { Button } from "@/components/ui/button";
import { Profile, Student } from "@prisma/client";
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
import { useModel } from "@/hooks/emp-store";
import { profile } from "console";




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
        accessorKey: 'interest'
    },

    {
        id: 'action',
        cell: ({ row }) => {
            const person = row.original;
            const name = person.name
            const id = person.id
            const getProfile = () => {
                const { profiles } = useModel();
                // const profile = profiles.find(profiles => profiles.roletag == "GUEST")
                const profile = profiles
                
                return profile
            }
            const GotProfile = getProfile()
            console.log("profilesss", {GotProfile})


            return (

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='ghost' className="w-8 h-8 p-0">
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    {

                    }
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        {
                            GotProfile.map((emp) => (
                                <DropdownMenuItem
                                    id={emp.id}
                                    onClick={() => {
                                        navigator.clipboard.writeText(emp.name)
                                        console.log({
                                            name: emp.name,
                                            student: name
                                        })
                                    }} >
                                    {emp.name}
                                </DropdownMenuItem>
                            ))
                        }


                        <DropdownMenuItem onClick={() => {
                            navigator.clipboard.writeText(name)
                        }}>
                            {/* {profile[0].name} */}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {
                            navigator.clipboard.writeText(id)
                        }}>

                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]

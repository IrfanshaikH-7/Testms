'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchGuests } from "@/lib/ServerActions";
import { Button } from "./ui/button";
interface DropProps {
    id: string,
    name: string
}

const DropdownComponent = ({id, name}: DropProps) => {
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
                        <DropdownMenuItem onClick={() => {
                            navigator.clipboard.writeText(name)
                        }}>
                            Copy Student name
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {
                            navigator.clipboard.writeText(id)
                        }}>
                            Copy Student ID
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
  )
}

export default DropdownComponent

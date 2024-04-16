"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { ArrowUpDown, MoreHorizontal } from "lucide-react"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type TelegramGroups = {
  TelegramGroupName: string
  Faculty: string
  TelegramLink: string
}

export const columns: ColumnDef<TelegramGroups>[] = [
  {
    accessorKey: "TelegramGroupName",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "Faculty",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Faculty
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>)
      },
  },
  {
    accessorKey: "TelegramLink",
    header: () => <div className="">Group Link</div>,
    cell: ({row}) =>  {
        if(row.getValue("TelegramLink")){
            return(<Link href={row.getValue("TelegramLink")} target='_blank'><Button>click</Button></Link>)}
            else{
                return(<p>No group</p>)
            }
    }
},
    {
        id: "actions",
        cell: ({ row }) => {
          const telegramGroups = row.original
     
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(telegramGroups.TelegramLink)}
                >
                  Copy Telegram Group Link
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
]

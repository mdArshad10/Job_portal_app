import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";

const CompaniesTable = () => {
  const compaines = [
    {
      name: "alkdjl;afkj",
      description: "akdlkfadlkfjal;dk",
      createdAt: "2022-01-01",
      logo: "https://github.com/shadcn.png",
    },
  ];
  return (
    <Table>
      <TableCaption>List of the recent registered Company</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Logo</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {compaines.length <= 0 ? (
          <span>You haven't registered any company yet.</span>
        ) : (
          compaines.map((company, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <Avatar>
                    <AvatarImage
                      src={
                        company.logo
                          ? company.logo
                          : "https://github.com/shadcn.png"
                      }
                      alt="@shadcn"
                    />
                  </Avatar>
                </TableCell>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.createdAt}</TableCell>
                <TableCell className="flex justify-end">
                  <Popover>
                    <PopoverTrigger asChild>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      <div className="flex items-center gap-2 w-fit cursor-pointer">
                        <Edit2 className="w-4" />
                        <span>Edit</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
};

export default CompaniesTable;

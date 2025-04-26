import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Badge from "../ui/badge/Badge";
import Image from "next/image";

interface User {
    id: number;
    joinedAt: string;
    name: string;
    email: string;
    wallet:string;
    kycStatus: string;
    transaction: "Add/Subtract";
    status: string;
    action: string;
  }

  const tableData: User[] = [
    {
      id: 1,
      joinedAt: "2025-03-12 01:30 PM",
      name: "John Doe",
      email: "john.doe@example.com",
      wallet:"wallet",
      kycStatus: "Verified",
      transaction: "Add/Subtract",
      status: "Active",
      action: "Details",
    },
    {
      id: 2,
      joinedAt: "2023-12-15 01:30 PM",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      wallet:"wallet",
      kycStatus: "Pending",
      transaction: "Add/Subtract",
      status: "Inactive",
      action: "Details",
    },
    {
      id: 3,
      joinedAt: "2024-01-20 01:30 PM",
      name: "Samuel Green",
      email: "sam.green@example.com",
      wallet:"wallet",
      kycStatus: "Verified",
      transaction: "Add/Subtract",
      status: "Active",
      action: "Details",
    },
    {
      id: 4,
      joinedAt: "2024-02-10 01:30 PM",
      name: "Emily Johnson",
      email: "emily.j@example.com",
      wallet:"wallet",
      kycStatus: "Rejected",
      transaction: "Add/Subtract",
      status: "Banned",
      action: "Details",
    },
    {
      id: 5,
      joinedAt: "2024-03-05 01:30 PM",
      name: "Michael Lee",
      email: "michael.lee@example.com",
      wallet:"wallet",
      kycStatus: "Verified",
      transaction: "Add/Subtract",
      status: "Active",
      action: "Details",
    },
  ];
  

export default function UsersTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Joined At
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                   Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Email
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Wallet
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  KYC Status
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  	Add / Subtract
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Status
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      
                      <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {user.joinedAt}
                        </span>
                       
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {user.name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {user.email}
                  </TableCell>
                  

                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="sm"
                      color={
                        user.wallet === "wallet"
                          ? "success"
                          : user.wallet === "wallet"
                          ? "warning"
                          : "error"
                      }
                    >
                      {user.wallet}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="sm"
                      color={
                        user.kycStatus === "Verified"
                          ? "success"
                          : user.kycStatus === "Pending"
                          ? "warning"
                          : "error"
                      }
                    >
                      {user.kycStatus}
                    </Badge>
                  </TableCell>
                 
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="sm"
                      color={
                        user.transaction === "Add/Subtract"
                          ? "success"
                          : user.transaction === "Add/Subtract"
                          ? "warning"
                          : "error"
                      }
                    >
                      {user.transaction}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="sm"
                      color={
                        user.status === "Active"
                          ? "success"
                          : user.status === "Pending"
                          ? "warning"
                          : "error"
                      }
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {user.action}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

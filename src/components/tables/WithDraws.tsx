"use client"
import { TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { Table } from "@/components/ui/table";
import {  Edit, Trash2 } from "lucide-react";
import React, { useState } from "react";
import Badge from "../ui/badge/Badge";


type WithDraw = {
    id: number;
    initiatedAt: Date; 
    trx: string;       
    user: string;      
    gateway: string;   
    amount: number;    
    finalAmount: number;
    charge: number;
    afterCharge: number;
    conversion: number;
    status: string; 
  };
  

  const withdrawData: WithDraw[] = [
    {
      id: 1,
      initiatedAt: new Date("2025-04-20T12:34:00"),
      trx: "TRX123456",
      user: "John Doe",
      gateway: "PayPal",
      amount: 150.00,
      finalAmount: 148.00,
      charge: 2.00,
      afterCharge: 850.00,
      conversion: 1.0,
      status: "Active",
    },
    {
      id: 2,
      initiatedAt: new Date("2025-04-19T09:22:00"),
      trx: "TRX789012",
      user: "Jane Smith",
      gateway: "Stripe",
      amount: 300.00,
      finalAmount: 297.00,
      charge: 3.00,
      afterCharge: 1150.00,
      conversion: 1.0,
      status: "Inactive",
    },
    {
      id: 3,
      initiatedAt: new Date("2025-04-18T15:45:00"),
      trx: "TRX456789",
      user: "Alice Johnson",
      gateway: "Razorpay",
      amount: 220.00,
      finalAmount: 217.50,
      charge: 2.50,
      afterCharge: 975.50,
      conversion: 1.0,
      status: "Active",
    },
    {
      id: 4,
      initiatedAt: new Date("2025-04-17T11:10:00"),
      trx: "TRX321654",
      user: "Bob Martin",
      gateway: "Payoneer",
      amount: 400.00,
      finalAmount: 395.00,
      charge: 5.00,
      afterCharge: 1320.00,
      conversion: 1.0,
      status: "Inactive",
    }
  ];
  

export default function WithDrawTable() {
    const [data, setData] = useState<WithDraw[]>(withdrawData);

    const handleDelete = (id: number) => {
        setData((prev) => prev.filter((item) => item.id !== id));
      };
    
      const handleEdit = (item: WithDraw) => {
        alert(`Edit Withdraw ID: ${item.id}`);
      };
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Initiated At</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Trx</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">User</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Gateway</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Amount</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Final Amount</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Charge</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">After Charge</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Conversion</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Status</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Action</TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {withdrawData.map((wd) => (
                <TableRow key={wd.id}>
                <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-800 dark:text-white/90">
                {wd.initiatedAt.toLocaleString()}

                </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400">{wd.trx}</TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400">{wd.user}</TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400">{wd.gateway}</TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400">{wd.amount}</TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400">{wd.finalAmount}</TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400">{wd.charge}</TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400">{wd.afterCharge}</TableCell>
                  <TableCell className="px-5 py-4 text-center text-theme-sm text-gray-500 dark:text-gray-400">{wd.conversion}</TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="sm"
                      color={
                        wd.status === "Active"
                          ? "success"
                          : wd.status === "Inactive"
                          ? "warning"
                          : "error"
                      }
                    >
                      {wd.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-5 py-4 flex gap-2 items-center justify-center">
                    <button onClick={() => handleEdit(wd)} className="text-blue-500 hover:text-blue-700">
                      <Edit size={18} />
                    </button>
                    <button onClick={() => handleDelete(wd.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 size={18} />
                    </button>
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

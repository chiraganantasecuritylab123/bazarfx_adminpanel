import { TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { Table } from "@/components/ui/table";
import React from "react";

interface Transaction {
  id: number;
  initiatedAt: string;
  trx: string;
  agent: string;
  amount: string;
  postBalance: string;
  charge: string;
  details: string;
}

const transactionData: Transaction[] = [
  {
    id: 1,
    initiatedAt: "2025-04-20 12:34",
    trx: "TRX123456",
    agent: "John Doe",
    amount: "$150.00",
    postBalance: "$850.00",
    charge: "$2.00",
    details: "Payment for service",
  },
  {
    id: 2,
    initiatedAt: "2025-04-19 09:22",
    trx: "TRX789012",
    agent: "Jane Smith",
    amount: "$300.00",
    postBalance: "$1,150.00",
    charge: "$3.00",
    details: "Subscription renewal",
  },
];

export default function TransactionTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Initiated At</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Trx</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Agent</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Amount</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Post Balance</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Charge</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Details</TableCell>
              </TableRow>
            </TableHeader>
          </Table>

          {/* Container for the table body that will be scrollable */}
          <div className="overflow-y-auto max-h-[300px]">  {/* Set max height to control scroll */}
            <Table>
              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {transactionData.map((tx) => (
                  <TableRow key={tx.id}>
                    <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-800 dark:text-white/90">{tx.initiatedAt}</TableCell>
                    <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400">{tx.trx}</TableCell>
                    <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400">{tx.agent}</TableCell>
                    <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400">{tx.amount}</TableCell>
                    <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400">{tx.postBalance}</TableCell>
                    <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400">{tx.charge}</TableCell>
                    <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400">{tx.details}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}


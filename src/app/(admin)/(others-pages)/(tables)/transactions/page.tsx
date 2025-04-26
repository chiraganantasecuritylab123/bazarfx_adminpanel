import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import TransactionTable from "@/components/tables/TransactionTable";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Basic Table | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Basic Table  page for TailAdmin  Tailwind CSS Admin Dashboard Template",
};

export default function Transactions() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Transaction" />
      <div className="space-y-6">
        <ComponentCard title="Transaction 1">
          <TransactionTable />
        </ComponentCard>
      </div>
    </div>
  );
}

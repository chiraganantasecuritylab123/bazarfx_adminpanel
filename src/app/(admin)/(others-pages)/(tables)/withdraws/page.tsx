import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import WithDrawTable from "@/components/tables/WithDraws";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Basic Table | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Basic Table  page for TailAdmin  Tailwind CSS Admin Dashboard Template",
};

export default function WithDraws() {
  return (
    <div>
      <PageBreadcrumb pageTitle="WithDraw" />
      <div className="space-y-6">
        <ComponentCard title="WithDraw 1">
            <WithDrawTable/>
        </ComponentCard>
      </div>
    </div>
  );
}

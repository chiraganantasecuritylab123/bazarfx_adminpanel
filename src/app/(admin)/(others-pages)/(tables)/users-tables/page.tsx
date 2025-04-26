"use client";

import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import UsersTable from "@/components/tables/UserTables";
import { Metadata } from "next";
import React, { useRef } from "react";



export default function BasicTables() {
      const inputRef = useRef<HTMLInputElement>(null);
    
  return (
    <div>
      <PageBreadcrumb pageTitle="Users Table" />
      <div className="space-y-6">
        <ComponentCard title="User Table 1">
        <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"
        />
          <UsersTable />
        </ComponentCard>
      </div>
    </div>
  );
}

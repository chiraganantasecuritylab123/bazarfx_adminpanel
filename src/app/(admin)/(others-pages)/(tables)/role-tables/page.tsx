"use client";

import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import RoleTables from "@/components/tables/RoleTables";
import React, { useRef } from "react";

export default function RoleTable() {
      const inputRef = useRef<HTMLInputElement>(null);
    
  return (
    <div>
      <PageBreadcrumb pageTitle="Role Table" />
      <div className="space-y-6">
        <ComponentCard title="Role Table 1">
            <RoleTables/>        
        </ComponentCard>
      </div>
    </div>
  );
}

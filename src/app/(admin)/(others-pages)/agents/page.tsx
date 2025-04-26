"use client";

import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import AgentTables from "@/components/tables/AgentTables";
import React, { useRef } from "react";

export default function AgentTable() {
      const inputRef = useRef<HTMLInputElement>(null);
    
  return (
    <div>
      <PageBreadcrumb pageTitle="Agent" />
      <div className="space-y-6">
        <ComponentCard title="Agent 1">
            <AgentTables/>        
        </ComponentCard>
      </div>
    </div>
  );
}

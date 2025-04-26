"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import Select from "@/components/form/Select";

interface Props {
  onClose: () => void;
}

export default function InvestmentCommissionForm({ onClose }: Props) {
  const [fixedCommissionStatus, setFixedCommissionStatus] = useState<string>("");
  const [fixedAmount, setFixedAmount] = useState<string>("");
  const [percentageCommissionStatus, setPercentageCommissionStatus] = useState<string>("");
  const [percentageCommission, setPercentageCommission] = useState<string>("");

  const [performanceThresholdStatus, setPerformanceThresholdStatus] = useState<string>("");
  const [performanceThresholdAmount, setPerformanceThresholdAmount] = useState<string>("");
  const [performanceBonus, setPerformanceBonus] = useState<string>("");

  const [monthlyCommissionStatus, setMonthlyCommissionStatus] = useState<string>("");
  const [monthlyTeamInvestmentAmount, setMonthlyTeamInvestmentAmount] = useState<string>("");
  const [monthlyBonus, setMonthlyBonus] = useState<string>("");

  const handleFixedCommissionStatusChange = (value: string) => setFixedCommissionStatus(value);
  const handlePercentageCommissionStatusChange = (value: string) => setPercentageCommissionStatus(value);
  const handlePerformanceThresholdStatusChange = (value: string) => setPerformanceThresholdStatus(value);
  const handleMonthlyCommissionStatusChange = (value: string) => setMonthlyCommissionStatus(value);

  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pb-7 bg-black/50">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 mt-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <X />
        </button>

        <h2 className="text-xl font-semibold mb-4">Agent Investment Commission Setting</h2>

        <form className="space-y-6 overflow-y-auto max-h-[80vh]" style={{ scrollbarWidth: "none" }}>
 
          <h3 className="text-base  mb-2">Fixed & Percentage Commission Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fixedCommissionStatus">Fixed Commission Status</Label>
              <Select
                // id="fixedCommissionStatus"
                options={[
                  { value: "", label: "Select Fixed Commission Status" },
                  { value: "active", label: "Active" },
                  { value: "inactive", label: "Inactive" },
                ]}
                onChange={handleFixedCommissionStatusChange}
                value={fixedCommissionStatus}
              />
            </div>
            <div>
              <Label htmlFor="fixedAmount">Fixed Amount</Label>
              <Input
                id="fixedAmount"
                placeholder="1000"
                type="number"
                value={fixedAmount}
                onChange={(e) => setFixedAmount(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="percentageCommissionStatus">Percentage Commission Status</Label>
              <Select
                // id="percentageCommissionStatus"
                options={[
                  { value: "", label: "Select Percentage Commission Status" },
                  { value: "active", label: "Active" },
                  { value: "inactive", label: "Inactive" },
                ]}
                onChange={handlePercentageCommissionStatusChange}
                value={percentageCommissionStatus}
              />
            </div>
            <div>
              <Label htmlFor="percentageCommission">Percentage Commission</Label>
              <Input
                id="percentageCommission"
                placeholder="5%"
                type="number"
                value={percentageCommission}
                onChange={(e) => setPercentageCommission(e.target.value)}
              />
            </div>
          </div>
          <hr/>
          <h3 className="text-base mb-2">Performance-Based Commission Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="performanceThresholdStatus">Performance Threshold Status</Label>
              <Select
                // id="performanceThresholdStatus"
                options={[
                  { value: "", label: "Select Threshold Status" },
                  { value: "active", label: "Active" },
                  { value: "inactive", label: "Inactive" },
                ]}
                onChange={handlePerformanceThresholdStatusChange}
                value={performanceThresholdStatus}
              />
            </div>
            
            <div>
              <Label htmlFor="performanceThresholdAmount">Performance Threshold Amount</Label>
              <Input
                id="performanceThresholdAmount"
                placeholder="5000"
                type="number"
                value={performanceThresholdAmount}
                onChange={(e) => setPerformanceThresholdAmount(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="performanceBonus">Performance Bonus</Label>
              <Input
                id="performanceBonus"
                placeholder="2000"
                type="number"
                value={performanceBonus}
                onChange={(e) => setPerformanceBonus(e.target.value)}
              />
            </div>
          </div>
          <hr/>

          <h3 className="text-base  mb-2">Monthly Team Investment Commission Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="monthlyCommissionStatus">Monthly Commission Status</Label>
              <Select
                // id="monthlyCommissionStatus"
                options={[
                  { value: "", label: "Select Monthly Commission Status" },
                  { value: "active", label: "Active" },
                  { value: "inactive", label: "Inactive" },
                ]}
                onChange={handleMonthlyCommissionStatusChange}
                value={monthlyCommissionStatus}
              />
            </div>
            <div>
              <Label htmlFor="monthlyTeamInvestmentAmount">Monthly Team Investment Amount</Label>
              <Input
                id="monthlyTeamInvestmentAmount"
                placeholder="10000"
                type="number"
                value={monthlyTeamInvestmentAmount}
                onChange={(e) => setMonthlyTeamInvestmentAmount(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="monthlyBonus">Monthly Bonus</Label>
              <Input
                id="monthlyBonus"
                placeholder="500"
                type="number"
                value={monthlyBonus}
                onChange={(e) => setMonthlyBonus(e.target.value)}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-3">

          <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

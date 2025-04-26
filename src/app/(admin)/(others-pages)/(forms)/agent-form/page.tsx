"use client";
import React, { useState, useEffect } from "react";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import Select from "@/components/form/Select";
import { X } from "lucide-react";

interface Agent {
  id?: number;
  name: string;
  email: string;
  balance?: number;
  joinedAt?: string;
  status: "Active" | "Inactive";
}

interface AgentFormProps {
  agent: Agent | null;
  onClose: () => void;
  onSubmit: (agent: Agent) => void;
  onDelete?: (id: number) => void;
}

export default function AgentForm({
  agent,
  onClose,
  onSubmit,
  onDelete,
}: AgentFormProps) {
  const [name, setName] = useState( "");
  const [email, setEmail] = useState("");
  const [balance, setBalance] = useState<number | undefined>(agent?.balance);
  const [joinedAt, setJoinedAt] = useState<string>(agent?.joinedAt || "");
  const [status, setStatus] = useState<"Active" | "Inactive">(agent?.status || "Active");
  

  useEffect(() => {
    if (agent) {
      setName(agent.name || "");
      setEmail(agent.email || "");
      setBalance(agent.balance || undefined);
      setJoinedAt(agent.joinedAt || "");
      setStatus(agent.status || "Active");
    }
  }, [agent]);
  
  console.log('agent---- :>> ', agent);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || balance === undefined) return;

    const newAgent: Agent = {
      id: agent?.id, 
      name,
      email,
      balance,
      joinedAt: joinedAt || undefined,
      status,
    };

    onSubmit(newAgent); 
  };

    // const handleDelete = () => {
    //   if (agent?.id && onDelete) {
    //     onDelete(agent.id); 
    //   }
    // };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pb-7 bg-black/50">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 mt-6 relative">
      <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <X />
        </button>
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          {agent ? "Edit Agent" : "Add Agent"}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-h-[70vh] overflow-y-auto pr-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none"          
          }}
        >
        <div>
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="Enter agent name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Label>User Name</Label>
            <Input
              type="text"
              placeholder="Enter agent name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="info@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <Label>Phone</Label>
            <Input
              type="number"
              placeholder="Enter balance"
              value={balance || ""}
              onChange={(e) => setBalance(Number(e.target.value))}
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              type="string"
              placeholder="Enter Password"
              value={balance || ""}
              onChange={(e) => setBalance(Number(e.target.value))}
            />
          </div>
          <div>
            <Label>Confirm Password</Label>
            <Input
              type="string"
              placeholder="Enter Password"
              value={balance || ""}
              onChange={(e) => setBalance(Number(e.target.value))}
            />
          </div>

          {/* <div>
            <Label>Password</Label>
            <Input
              type="date"
              value={joinedAt}
              onChange={(e) => setJoinedAt(e.target.value)}
            />
          </div> */}

          {/* <div>
            <Label>Confirm Password</Label>
            <Select
              value={status}
              options={[
                { label: "Active", value: "Active" },
                { label: "Inactive", value: "Inactive" },
              ]}
              onChange={(value: string) => setStatus(value as "Active" | "Inactive")}
            />
          </div> */}

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
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              {agent ? "Update" : "Add"}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

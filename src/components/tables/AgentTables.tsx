"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Edit, Trash2 } from "lucide-react";
import Badge from "../ui/badge/Badge";
import AgentForm from "@/app/(admin)/(others-pages)/(forms)/agent-form/page";
import InvestmentCommissionForm from "@/app/(admin)/(others-pages)/(forms)/commision-form/page";

interface Agent {
  id?: number;
  joinedAt?: string;
  name: string;
  email: string;
  balance?: number;
  status: "Active" | "Inactive";
}

export default function AgentTables() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editAgent, setEditAgent] = useState<Agent | null>(null);
  const [showCommissionModal, setShowCommissionModal] = useState(false);


  useEffect(() => {
    const sampleData: Agent[] = [
      {
        id: 1,
        joinedAt: "2025-04-01",
        name: "John Doe",
        email: "john@example.com",
        balance: 250,
        status: "Active",
      },
      {
        id: 2,
        joinedAt: "2025-04-10",
        name: "Jane Smith",
        email: "jane@example.com",
        balance: 120,
        status: "Inactive",
      },
    ];
    setTimeout(() => setAgents(sampleData), 300);
  }, []);

  const handleAddOrUpdate = (agent: Agent) => {
    if (agent.id) {
      setAgents((prev) =>
        prev.map((a) => (a.id === agent.id ? agent : a))
      );
    } else {
      const newId = agents.length + 1;
      setAgents([...agents, { ...agent, id: newId }]);
    }
    setShowModal(false);
    setEditAgent(null);
  };

  const handleDelete = (id: number) => {
    setAgents((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className="w-full">
      <div className="flex justify-start gap-4 mb-4 items-center">
      <button
        onClick={() => setShowCommissionModal(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Investment Commission Setting
      </button>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Agent
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <div className="min-w-[600px]">
            <Table>
              <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                <TableRow>
                  <TableCell isHeader className="px-5 py-3 text-gray-500 font-medium text-start text-theme-xs">
                    Joined At
                  </TableCell>
                  <TableCell isHeader className="px-5 py-3 text-gray-500 font-medium text-start text-theme-xs">
                    Name
                  </TableCell>
                  <TableCell isHeader className="px-5 py-3 text-gray-500 font-medium text-start text-theme-xs">
                    Email
                  </TableCell>
                  <TableCell isHeader className="px-5 py-3 text-gray-500 font-medium text-start text-theme-xs">
                    Balance
                  </TableCell>
                  <TableCell isHeader className="px-5 py-3 text-gray-500 font-medium text-start text-theme-xs">
                    Status
                  </TableCell>
                  <TableCell isHeader className="px-5 py-3 text-gray-500 font-medium text-start text-theme-xs">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHeader>

              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {agents.map((agent) => (
                  <TableRow key={agent.id}>
                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm">{agent.joinedAt}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm">{agent.name}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm">{agent.email}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm">${agent.balance}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      <Badge
                        size="sm"
                        color={agent.status === "Active" ? "success" : "warning"}
                      >
                        {agent.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-theme-sm whitespace-nowrap">
                    <button
                      onClick={() => {
                        setEditAgent(agent); 
                        setShowModal(true);  
                      }}
                      className="text-blue-600 hover:text-blue-800 mr-3"
                      // title="Edit"
                    >
                      <Edit size={18} />
                    </button>

                      <button
                        onClick={() => agent.id && handleDelete(agent.id)}
                        className="text-red-600 hover:text-red-800"
                        // title="Delete"
                      >
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

      {showCommissionModal && (
        <InvestmentCommissionForm onClose={() => setShowCommissionModal(false)} />
      )}

      {showModal && (
      <AgentForm
        key={editAgent?.id || "new"} 
        agent={editAgent}
        onClose={() => {
          setShowModal(false);
          setEditAgent(null);
        }}
        onSubmit={handleAddOrUpdate}
      />
    )}
    </div>
  );
}

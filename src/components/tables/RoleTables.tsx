"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "@/components/ui/badge/Badge";
import { Edit, Trash2 } from 'lucide-react';

import RoleModal from "@/app/(admin)/(others-pages)/(forms)/role-form/page";

interface Role {
    id?: number;
    name: string;
    permissions: string[];
  }
  

const permissionsList = ["Read", "Write", "Delete", "Update","Admin","User","Client","Abcd","Xyz"];

export default function RoleTables() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editRole, setEditRole] = useState<Role | null>(null);

  useEffect(() => {
    const fakeData: Role[] = [
      { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
      { id: 2, name: "Editor", permissions: ["Read", "Update"] },
    ];
    setTimeout(() => setRoles(fakeData), 300);
  }, []);

  const handleAddOrUpdate = (newRole: Role) => {
    if (newRole.id) {
      setRoles((prev) =>
        prev.map((role) => (role.id === newRole.id ? newRole : role))
      );
    } else {
      const id = roles.length + 1;
      setRoles([...roles, { ...newRole, id }]);
    }
    setShowModal(false);
    setEditRole(null);
  };

  const handleDelete = (id: number) => {
    setRoles((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="w-full">
      <div className="flex justify-between mb-4 items-center">
       
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Role
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <div className="min-w-[600px]">
            <Table>
              <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                <TableRow>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Name
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Permissions
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Actions
                  </TableCell>
                </TableRow>
              </TableHeader>

              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {roles.map((role) => (
                  <TableRow key={role.id}>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      {role.name}
                    </TableCell>
                    <TableCell className="px-2 py-4 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        <div className="flex flex-wrap gap-6 max-h-20 overflow-y-auto pr-2">
                            {role.permissions.map((perm, i) => (
                            <Badge key={i}>{perm}</Badge>
                            ))}
                        </div>
                    </TableCell>

                    <TableCell className="px-4 py-3 text-start text-theme-sm align-top whitespace-nowrap">
                        <button
                            onClick={() => {
                            setEditRole(role);
                            setShowModal(true);
                            }}
                            className="text-blue-600 hover:text-blue-800 mr-3"
                            title="Edit"
                        >
                            <Edit size={18} />
                        </button>

                        <button
                            onClick={() => {
                            if (role.id !== undefined) {
                                handleDelete(role.id);
                            }
                            }}
                            className="text-red-600 hover:text-red-800"
                            title="Delete"
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

      {showModal && (
        <RoleModal
          role={editRole}
          onClose={() => {
            setShowModal(false);
            setEditRole(null);
          }}
          onSubmit={handleAddOrUpdate}
          permissionsList={permissionsList}
        />
      )}
    </div>
  );
}

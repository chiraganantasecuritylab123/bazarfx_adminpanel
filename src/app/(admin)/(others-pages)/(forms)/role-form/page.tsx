"use client";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import React, { useState, useEffect } from "react";

interface Role {
  id?: number;
  name: string;
  permissions: string[];
}

interface RoleModalProps {
    role: Role | null;
    onClose: () => void;
    onSubmit: (role: Role) => void;
    permissionsList: string[];
  }

export default function RoleModal({
  role,
  onClose,
  onSubmit,
  permissionsList,
}: RoleModalProps) {
  const [name, setName] = useState("");
  const [permissions, setPermissions] = useState<string[]>([]);

  useEffect(() => {
    if (role) {
      setName(role.name);
      setPermissions(role.permissions);
    } else {
      setName("");
      setPermissions([]);
    }
  }, [role]);

  const togglePermission = (perm: string) => {
    if (permissions.includes(perm)) {
      setPermissions((prev) => prev.filter((p) => p !== perm));
    } else {
      setPermissions((prev) => [...prev, perm]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newRole: Role = {
      id: role?.id,
      name,
      permissions,
    };

    onSubmit(newRole);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          {role ? "Edit Role" : "Add Role"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Role Name
            </Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded border border-gray-300 px-3 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />
          </div>

          <div>
            <Label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Permissions
            </Label>
            <div className="flex flex-wrap gap-4">
                {permissionsList.map((perm) => (
                <Label
                    key={perm}
                    className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300 w-[45%] sm:w-[30%] md:w-[30%]"
                >
                    <input
                    type="checkbox"
                    checked={permissions.includes(perm)}
                    onChange={() => togglePermission(perm)}
                    className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span>{perm}</span>
                </Label>
                ))}
            </div>
           </div>


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
              {role ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { Table, Button } from "antd";
import { useRouter } from "next/navigation";

const Applicants = () => {
  const router = useRouter();

  // Dummy data for applicants
  const applicants = [
    {
      key: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      status: "Pending",
    },
    {
      key: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      status: "Shortlisted",
    },
    {
      key: "3",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      status: "Rejected",
    },
  ];

  // Table columns
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <span
          className={`px-3 py-1 rounded-md text-white ${
            text === "Shortlisted"
              ? "bg-green-500"
              : text === "Rejected"
              ? "bg-red-500"
              : "bg-yellow-500"
          }`}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            type="default"
            onClick={() => console.log(`Shortlisted ${record.name}`)}
          >
            Shortlist
          </Button>
          <Button danger onClick={() => console.log(`Rejected ${record.name}`)}>
            Reject
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">
        Applicant for Job
      </h1>
      <Table
        columns={columns}
        dataSource={applicants}
        pagination={{ pageSize: 5 }}
        className="bg-white rounded-lg shadow"
      />
      <Button
        className="mt-4"
        type="default"
        onClick={() => router.push("/admin")}
      >
        Back to Dashboard
      </Button>
    </div>
  );
};

export default Applicants;

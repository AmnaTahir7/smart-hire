"use client";
import React from "react";
import { Table, Button } from "antd";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  // Dummy data for jobs
  const jobs = [
    {
      key: "1",
      title: "Software Engineer",
      department: "Engineering",
      applicants: 10,
    },
    {
      key: "2",
      title: "Marketing Specialist",
      department: "Marketing",
      applicants: 5,
    },
    {
      key: "3",
      title: "Product Manager",
      department: "Product",
      applicants: 7,
    },
  ];
  // Table columns
  const columns = [
    {
      title: "Job Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Applicants",
      dataIndex: "applicants",
      key: "applicants",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button
          type="primary"
          onClick={() => router.push(`/admin/jobs/${record.key}`)}
        >
          View Applicants
        </Button>
      ),
    },
  ];

  const logoutSession = () => {
    router.push("/loginUser");
  };
  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold text-blue-600">Admin Dashboard</h1>
          <Button onClick={logoutSession}>Logout</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 mb-5">
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-sm font-semibold text-gray-700">Total Jobs</h2>
            <p className="text-2xl font-bold text-blue-500">24</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-sm font-semibold text-gray-700">
              Total Applicants
            </h2>
            <p className="text-2xl font-bold text-green-500">120</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-sm font-semibold text-gray-700">
              Pending Reviews
            </h2>
            <p className="text-2xl font-bold text-yellow-500">8</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-sm font-semibold text-gray-700">
              Interviews Scheduled
            </h2>
            <p className="text-2xl font-bold text-purple-500">4</p>
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={jobs}
          pagination={{ pageSize: 5 }}
          className="bg-white rounded-lg shadow"
        />
      </div>
    </>
  );
}

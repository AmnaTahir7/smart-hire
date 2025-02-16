"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "antd";

export default function JobDetails() {
  const router = useRouter();
  //   const { id } = router.query;

  // Dummy data for job details (this would usually come from an API)
  const jobDetails = {
    1: {
      title: "Software Engineer",
      department: "Engineering",
      status: "Pending Review",
      description:
        "Responsible for developing, testing, and maintaining web applications. Strong knowledge of React.js is required.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Proficient in JavaScript, React.js, and Node.js",
        "Experience with RESTful APIs and database management",
      ],
    },
    2: {
      title: "Marketing Specialist",
      department: "Marketing",
      status: "Interview Scheduled",
      description:
        "Focus on developing and executing marketing campaigns to drive growth and engagement. Experience in digital marketing is a must.",
      requirements: [
        "Bachelor's degree in Marketing or related field",
        "Proficient in Google Ads, SEO, and social media platforms",
        "Experience with analytics tools like Google Analytics",
      ],
    },
    3: {
      title: "Product Manager",
      department: "Product",
      status: "Rejected",
      description:
        "Manage product lifecycle, gather requirements, and work with engineering teams. Strong communication skills are required.",
      requirements: [
        "Bachelor's degree in Business or related field",
        "Experience in managing software development projects",
        "Excellent communication and leadership skills",
      ],
    },
  };

  const job = jobDetails[1];

  if (!job) {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold text-red-600">Job not found</h1>
        <Button type="link" onClick={() => router.back()}>
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600">{job.title}</h1>
        <p className="text-gray-500 mt-2">{job.department}</p>
        <p className="mt-4 text-gray-700">{job.description}</p>
        <h2 className="text-xl font-bold mt-6">Requirements</h2>
        <ul className="list-disc list-inside mt-2">
          {job.requirements.map((req, index) => (
            <li key={index} className="text-gray-600">
              {req}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex justify-end">
          <Button
            type="primary"
            onClick={() => router.back()}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md"
          >
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}

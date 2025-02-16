"use client";
import React, { useState } from "react";
import { Input, Button, Form, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function UserProfile() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    console.log("Profile updated:", values);
    message.success("Profile updated successfully!");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Please fill all required fields.");
  };

  const uploadProps = {
    beforeUpload: (file) => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error("You can only upload image files.");
      }
      return isImage || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      if (info.file.status === "uploading") {
        setLoading(true);
      } else if (info.file.status === "done" || info.file.status === "error") {
        setLoading(false);
        message.success(`${info.file.name} uploaded successfully.`);
      }
    },
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">User Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <Form
          form={form}
          name="profile"
          initialValues={{
            name: "John Doe",
            email: "johndoe@example.com",
            phone: "123-456-7890",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[
              { required: true, message: "Please enter your full name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              { required: true, message: "Please enter your email address!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              { required: true, message: "Please enter your phone number!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Profile Picture">
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />} loading={loading}>
                Upload Profile Picture
              </Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2"
            >
              Update Profile
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

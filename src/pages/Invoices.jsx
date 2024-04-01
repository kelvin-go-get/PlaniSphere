import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoice,
  faClock,
  faMoneyBillAlt,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../Layout";
import Profile from "../assets/profile.png";
import { Bar } from "react-chartjs-2";
import {
  BarChart,
  Bar as RechartsBar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const invoices = [
  {
    id: "INV001",
    date: "2024-03-01",
    dueDate: "2024-03-15",
    amount: 1500,
    status: "Pending",
    client: "Client A",
  },
  {
    id: "INV002",
    date: "2024-03-05",
    dueDate: "2024-03-20",
    amount: 2500,
    status: "Pending",
    client: "Client B",
  },
  {
    id: "INV003",
    date: "2024-03-10",
    dueDate: "2024-03-25",
    amount: 1800,
    status: "Paid",
    client: "Client C",
  },
  {
    id: "INV004",
    date: "2024-03-15",
    dueDate: "2024-03-30",
    amount: 2000,
    status: "Paid",
    client: "Client D",
  },
  {
    id: "INV004",
    date: "2024-03-15",
    dueDate: "2024-03-30",
    amount: 2000,
    status: "Paid",
    client: "Client D",
  },
  {
    id: "INV004",
    date: "2024-03-15",
    dueDate: "2024-03-30",
    amount: 2000,
    status: "Paid",
    client: "Client D",
  },
];

const InvoicesPage = () => {
  // Data for the chart
  const chartData = [
    {
      name: "Pending",
      count: invoices.filter((invoice) => invoice.status === "Pending").length,
    },
    {
      name: "Paid",
      count: invoices.filter((invoice) => invoice.status === "Paid").length,
    },
  ];

  return (
    <Layout>
      <div className="pl-[10px] pt-[4px] pr-[30px] flex-col justify-center items-center pb-[100px]">
        <div
          className="flex justify-between 
          rounded-lg
        mb-[20px] items-center shadow-xl p-5 mx-auto text-center"
        >
          <div className="justify-center ">
            <h1 className="text-4xl font-bold  text-center mb-8">Invoices</h1>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Profile}
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <h2 className="text-lg font-bold ">John Doe</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {invoices.map((invoice, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-lg flex flex-col justify-between bg-white"
            >
              <div>
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon
                    icon={faFileInvoice}
                    className="text-gray-500 mr-2"
                  />
                  <span className="text-lg font-semibold">
                    Invoice #{invoice.id}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <div>
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-gray-400 mr-1"
                    />
                    {invoice.date}
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-gray-400 mr-1"
                    />
                    Due {invoice.dueDate}
                  </div>
                </div>
                <div className="text-lg font-semibold text-gray-800">
                  {invoice.client}
                </div>
                <div className="text-gray-600">Amount: ${invoice.amount}</div>
              </div>
              <div className="mt-4">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faMoneyBillAlt}
                    className="text-gray-500 mr-2"
                  />
                  <span
                    className={`text-sm ${
                      invoice.status === "Paid"
                        ? "text-green-600"
                        : "text-orange-500"
                    }`}
                  >
                    {invoice.status}
                  </span>
                </div>
                {invoice.status === "Paid" && (
                  <div className="flex items-center mt-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-green-600 mr-2"
                    />
                    <span className="text-sm text-gray-600">
                      Payment received
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="mt-8 mb-4 shadow-lg rounded-lg bg-white shadow-blue-400">
          <h2 className="text-xl font-semibold mb-4">
            Invoice Status Overview
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <RechartsBar dataKey="count" fill="#4285f4" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Layout>
  );
};

export default InvoicesPage;

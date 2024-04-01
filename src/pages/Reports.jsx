import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faUser,
  faChartPie,
  faMoneyBillAlt,
  faClipboardList,
  faTasks,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../Layout";

import { PieChart, Pie as RechartsPie, Cell } from "recharts";
import Profile from "../assets/profile.png";

const ReportsPage = () => {
  // Dummy data for pie charts
  const pieChartData = [
    { name: "Completed", value: 25 },
    { name: "In Progress", value: 45 },
    { name: "Pending", value: 30 },
  ];

  // Colors for Recharts pie chart
  const COLORS = ["#36A2EB", "#FFCE56", "#FF6384"];

  return (
    <Layout>
      <div className="pl-[10px] pt-[4px] pr-[30px] flex-col justify-center items-center">
        <div className="flex justify-between rounded-lg mb-[20px] items-center shadow-xl p-5 mx-auto text-center">
          <div className="justify-center ">
            <h1 className="text-4xl font-bold  text-center mb-8">Reports</h1>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Booked Events */}
          <div className="p-4 border rounded-lg shadow-lg flex flex-col justify-between bg-white">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="text-blue-500 mr-2"
              />
              <span className="text-lg font-semibold">Booked Events</span>
            </div>
            <div className="text-gray-600">
              Total Events: <span className="font-semibold">50</span>
            </div>
            <div className="text-gray-600">
              Completed Events: <span className="font-semibold">30</span>
            </div>
            <div className="text-gray-600">
              In Progress Events: <span className="font-semibold">15</span>
            </div>
            <div className="text-gray-600">
              Pending Events: <span className="font-semibold">5</span>
            </div>
          </div>

          {/* Leads */}
          <div className="p-4 border rounded-lg shadow-lg flex flex-col justify-between bg-white">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faUser} className="text-green-500 mr-2" />
              <span className="text-lg font-semibold">Leads</span>
            </div>
            <div className="text-gray-600">
              Total Leads: <span className="font-semibold">100</span>
            </div>
            <div className="text-gray-600">
              Active Leads: <span className="font-semibold">70</span>
            </div>
            <div className="text-gray-600">
              Converted Leads: <span className="font-semibold">20</span>
            </div>
            <div className="text-gray-600">
              Lost Leads: <span className="font-semibold">10</span>
            </div>
          </div>

          {/* Budgets */}
          <div className="p-4 border rounded-lg shadow-lg flex flex-col justify-between bg-white">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faMoneyBillAlt}
                className="text-purple-500 mr-2"
              />
              <span className="text-lg font-semibold">Budgets</span>
            </div>
            <div className="text-gray-600">
              Total Budgets: <span className="font-semibold">$50000</span>
            </div>
            <div className="text-gray-600">
              Remaining Budgets: <span className="font-semibold">$10000</span>
            </div>
            {/* Add relevant data */}
          </div>

          {/* Activity */}
          <div className="p-4 border rounded-lg shadow-lg flex flex-col justify-between bg-white">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faClipboardList}
                className="text-yellow-500 mr-2"
              />
              <span className="text-lg font-semibold">Activity</span>
            </div>
            {/* Add relevant data */}
          </div>

          {/* Account */}
          <div className="p-4 border rounded-lg shadow-lg flex flex-col justify-between bg-white">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faTasks} className="text-red-500 mr-2" />
              <span className="text-lg font-semibold">Account</span>
            </div>
            {/* Add relevant data */}
          </div>

          {/* Proposal */}
          <div className="p-4 border rounded-lg shadow-lg flex flex-col justify-between bg-white">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faFileInvoice}
                className="text-orange-500 mr-2"
              />
              <span className="text-lg font-semibold">Proposal</span>
            </div>
            <div className="text-gray-600">
              Total Proposals: <span className="font-semibold">50</span>
            </div>
            <div className="text-gray-600">
              Approved Proposals: <span className="font-semibold">30</span>
            </div>
            <div className="text-gray-600">
              Pending Proposals: <span className="font-semibold">15</span>
            </div>
            <div className="text-gray-600">
              Rejected Proposals: <span className="font-semibold">5</span>
            </div>
          </div>

          {/* Invoices */}
          <div className="p-4 border rounded-lg shadow-lg flex flex-col justify-between bg-white">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faFileInvoice}
                className="text-pink-500 mr-2"
              />
              <span className="text-lg font-semibold">Invoices</span>
            </div>
            {/* Add relevant data */}
          </div>
        </div>

        {/* Recharts Pie Chart */}
        <div className="flex justify-center items-centermt-8 shadow-lg rounded-lg mt-4 bg-white">
          <h2 className="text-xl font-semibold">Pie Chart</h2>
          <PieChart width={400} height={400}>
            <RechartsPie
              dataKey="value"
              isAnimationActive={false}
              data={pieChartData}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </RechartsPie>
          </PieChart>
        </div>
      </div>
    </Layout>
  );
};

export default ReportsPage;

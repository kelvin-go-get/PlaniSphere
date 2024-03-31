import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faChartPie,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../Layout";
import Profile from "../assets/profile.png";

function Dashboard() {
  // Bar Chart Data
  const barChartData = [
    {
      name: "Monday",
      activities: { last7days: 30, lastMonth: 40, lastYear: 50 },
    },
    {
      name: "Tuesday",
      activities: { last7days: 50, lastMonth: 60, lastYear: 70 },
    },
    {
      name: "Wednesday",
      activities: { last7days: 20, lastMonth: 30, lastYear: 40 },
    },
    {
      name: "Thursday",
      activities: { last7days: 80, lastMonth: 90, lastYear: 100 },
    },
    {
      name: "Friday",
      activities: { last7days: 60, lastMonth: 70, lastYear: 80 },
    },
  ];

  const barChartColors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AF19FF",
  ];

  // Pie Chart Data
  const pieChartData1 = [
    { name: "Next 7 Days", value: 30 },
    { name: "Next Month", value: 40 },
    { name: "Next Year", value: 30 },
  ];

  const pieChartData2 = [
    { name: "Category A", value: 40 },
    { name: "Category B", value: 30 },
    { name: "Category C", value: 20 },
    { name: "Category D", value: 10 },
  ];

  const pieChartData3 = [
    { name: "Next 7 Days", value: 25 },
    { name: "Next Month", value: 35 },
    { name: "Next Year", value: 20 },
  ];

  const pieColors = ["#36A2EB", "#FF6384", "#FFCE56"];

  const [timePeriod1, setTimePeriod1] = useState("last7days");
  const [timePeriod2, setTimePeriod2] = useState("next7days");
  const [timePeriod3, setTimePeriod3] = useState("next7days");

  const handleTimePeriodChange1 = (event) => {
    setTimePeriod1(event.target.value);
  };

  const handleTimePeriodChange2 = (event) => {
    setTimePeriod2(event.target.value);
  };

  const handleTimePeriodChange3 = (event) => {
    setTimePeriod3(event.target.value);
  };

  const renderBarChart = () => {
    const data = barChartData.map((entry) => ({
      name: entry.name,
      activities: entry.activities[timePeriod1],
    }));

    return (
      <BarChart
        width={1300}
        height={300}
        data={data}
        margin={{ top: 5, right: 0, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="activities">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={barChartColors[index % barChartColors.length]}
            />
          ))}
        </Bar>
      </BarChart>
    );
  };

  const renderPieChart = (data, explanation) => {
    return (
      <div>
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={pieColors[index % pieColors.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <p className="text-sm text-gray-500 mt-2">{explanation}</p>
      </div>
    );
  };

  return (
    <Layout>
      <div>
        <div className="pl-[10px] pr-[30px] pt-1 flex-col justify-center items-center">
          <div className="flex justify-between  rounded-lg mb-[20px] items-center shadow-xl p-5 mx-auto text-center">
            <div className="justify-center ">
              <h1 className="text-2xl  font-bold mb-4">Welcome, John!</h1>
              <p className="text-lg font-light ">We're glad you're back.</p>
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

          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 shadow-lg shadow-blue-500 justify-center items-center">
              <h2 className="text-lg font-semibold mb-4">
                <FontAwesomeIcon
                  icon={faChartBar}
                  className="mr-2 text-blue-900 w-[30px] h-[30px]"
                />
                All Activities
              </h2>
              <select
                value={timePeriod1}
                onChange={handleTimePeriodChange1}
                className="p-1 text-blue-600 border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="last7days">Last 7 Days</option>
                <option value="lastMonth">Last Month</option>
                <option value="lastYear">Last Year</option>
              </select>
              {renderBarChart()}
            </div>

            <div className="flex gap-4 mb-[100px]">
              <div className="p-6 shadow-lg shadow-blue-600 hover:shadow-blue-500  hover:shadow-lg flex flex-col cursor-pointer hover:scale-105 hover:font-semibold">
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold mb-4 flex items-center">
                    <FontAwesomeIcon
                      icon={faChartPie}
                      className="mr-2 text-blue-500 w-[40px] h-[40px]"
                    />
                    Upcoming
                  </h2>
                  <div className="relative inline-block ml-2 pt-2">
                    <select
                      value={timePeriod2}
                      onChange={handleTimePeriodChange2}
                      className="p-1 text-blue-600 border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="next7days">Next 7 Days</option>
                      <option value="nextMonth">Next Month</option>
                      <option value="nextYear">Next Year</option>
                    </select>
                  </div>
                </div>

                {renderPieChart(
                  pieChartData1,
                  "Explanation of colors: Upcoming tasks are marked in blue."
                )}
              </div>

              <div className="p-6 shadow-lg shadow-blue-600 hover:shadow-blue-500  hover:shadow-lg flex flex-col cursor-pointer hover:scale-105 hover:font-semibold">
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold mb-4 flex items-center">
                    <FontAwesomeIcon
                      icon={faChartPie}
                      className="mr-2 text-red-500 w-[40px] h-[40px]"
                    />
                    Overdue
                  </h2>
                  <div className="relative inline-block ml-2 pt-2">
                    <select
                      value={timePeriod3}
                      onChange={handleTimePeriodChange3}
                      className="p-1 text-blue-600 border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="next7days">Next 7 Days</option>
                      <option value="nextMonth">Next Month</option>
                      <option value="nextYear">Next Year</option>
                    </select>
                  </div>
                </div>

                {renderPieChart(
                  pieChartData2,
                  "Explanation of colors: Overdue tasks are marked in red."
                )}
              </div>

              <div className="p-6 shadow-lg shadow-blue-600 hover:shadow-blue-500  hover:shadow-lg flex flex-col cursor-pointer hover:scale-105 hover:font-semibold">
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold mb-4 flex items-center">
                    <FontAwesomeIcon
                      icon={faChartPie}
                      className="mr-2 text-yellow-500 w-[40px] h-[40px]"
                    />
                    Waiting
                  </h2>

                  <div className="relative inline-block ml-2 pt-2">
                    <select
                      value={timePeriod3}
                      onChange={handleTimePeriodChange3}
                      className="p-1 text-blue-600  border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="next7days">Next 7 Days</option>
                      <option value="nextMonth">Next Month</option>
                      <option value="nextYear">Next Year</option>
                    </select>
                  </div>
                </div>

                {renderPieChart(
                  pieChartData3,
                  "Explanation of colors: Waiting tasks are marked in yellow."
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;

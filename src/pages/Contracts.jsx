import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileContract, faClock } from "@fortawesome/free-solid-svg-icons";
import Layout from "../Layout";
import Profile from "../assets/profile.png";

const contracts = [
  {
    id: "CON001",
    date: "2024-03-01",
    dueDate: "2024-06-01",
    amount: 5000,
    status: "Active",
    client: "Client A",
    terms: "1 year",
    feedback: "Positive",
  },
  {
    id: "CON002",
    date: "2024-03-05",
    dueDate: "2024-07-01",
    amount: 8000,
    status: "Expired",
    client: "Client B",
    terms: "6 months",
    feedback: "Neutral",
  },
  {
    id: "CON003",
    date: "2024-03-10",
    dueDate: "2024-09-01",
    amount: 10000,
    status: "Active",
    client: "Client C",
    terms: "2 years",
    feedback: "Positive",
  },
  {
    id: "CON004",
    date: "2024-03-15",
    dueDate: "2024-06-01",
    amount: 7000,
    status: "Active",
    client: "Client D",
    terms: "1 year",
    feedback: "Negative",
  },
];

const ContractsPage = () => {
  return (
    <Layout>
      <div className="pl-[10px] pt-[4px] pr-[30px] flex-col justify-center items-center">
        <div className="flex justify-between rounded-lg mb-[20px] items-center shadow-xl p-5 mx-auto text-center">
          <div className="justify-center ">
            <h1 className="text-4xl font-bold  text-center mb-8">Contracts</h1>
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
          {contracts.map((contract, index) => (
            <div
              key={index}
              className={`p-4 border rounded-lg shadow-lg flex flex-col justify-between ${
                contract.status === "Active"
                  ? "bg-green-100 border-green-400"
                  : "bg-gray-100 border-gray-400"
              }`}
            >
              <div>
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon
                    icon={faFileContract}
                    className={`text-gray-500 mr-2 ${
                      contract.status === "Active"
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                  />
                  <span className="text-lg font-semibold">
                    Contract #{contract.id}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <div>
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-gray-400 mr-1"
                    />
                    {contract.date}
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-gray-400 mr-1"
                    />
                    Due {contract.dueDate}
                  </div>
                </div>
                <div className="text-lg font-semibold text-gray-800">
                  {contract.client}
                </div>
                <div className="text-gray-600">Amount: ${contract.amount}</div>
                <div className="text-gray-600">Terms: {contract.terms}</div>
              </div>
              <div className="mt-4">
                <div className="text-gray-600">
                  Feedback: {contract.feedback}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ContractsPage;

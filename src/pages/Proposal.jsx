import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faClipboardCheck,
  faSignature,
  faCheckCircle,
  faArchive,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../Layout";
import Profile from "../assets/profile.png";

const proposals = [
  {
    title: "Proposal 1",
    status: "Signed",
    client: "Client A",
    total: "$1000",
    signatures: 3,
    unread: true,
  },
  {
    title: "Proposal 2",
    status: "Need Signatures",
    client: "Client B",
    total: "$1500",
    signatures: 2,
    unread: false,
  },
  {
    title: "Proposal 3",
    status: "Active",
    client: "Client C",
    total: "$2000",
    signatures: 1,
    unread: true,
  },
  {
    title: "Proposal 4",
    status: "Archived",
    client: "Client D",
    total: "$2500",
    signatures: 4,
    unread: false,
  },
];

const ProposalPage = () => {
  return (
    <Layout>
      <div className="pl-[10px] pt-[4px] pr-[30px] flex-col justify-center items-center">
        <div
          className="flex justify-between 
          rounded-lg
        mb-[20px] items-center shadow-xl p-5 mx-auto text-center"
        >
          <div className="justify-center ">
            <h1 className="text-4xl font-bold  text-center mb-8">Proposals</h1>
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
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          <div className="bg-white w-64 border-r">
            <div className="p-4 border-b">
              <h1 className="text-[18px] font-semibold">Quick Views</h1>
              <div className="flex flex-col mt-4">
                <button className="py-2 px-4 flex items-center justify-between bg-blue-500 text-white rounded-lg mb-2">
                  <FontAwesomeIcon icon={faClipboardCheck} className="mr-2" />
                  Signed
                  <span className="text-xs font-semibold ml-auto bg-gray-200 text-gray-600 px-2 rounded-full">
                    2
                  </span>
                </button>
                <button className="py-2 px-4 flex items-center justify-between bg-blue-500 text-white rounded-lg mb-2">
                  <FontAwesomeIcon icon={faSignature} className="mr-2" />
                  Need Signatures
                  <span className="text-xs font-semibold ml-auto bg-gray-200 text-gray-600 px-2 rounded-full">
                    1
                  </span>
                </button>
                <button className="py-2 px-4 flex items-center justify-between bg-blue-500 text-white rounded-lg mb-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                  Active
                  <span className="text-xs font-semibold ml-auto bg-gray-200 text-gray-600 px-2 rounded-full">
                    1
                  </span>
                </button>
                <button className="py-2 px-4 flex items-center justify-between bg-blue-500 text-white rounded-lg mb-2">
                  <FontAwesomeIcon icon={faArchive} className="mr-2" />
                  Archived
                  <span className="text-xs font-semibold ml-auto bg-gray-200 text-gray-600 px-2 rounded-full">
                    1
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col flex-1">
            <div className="p-4 bg-white mb-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Proposals</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">Name</th>
                      <th className="text-left py-2 px-4">Status</th>
                      <th className="text-left py-2 px-4">Client</th>
                      <th className="text-left py-2 px-4">Total</th>
                      <th className="text-left py-2 px-4">Signatures</th>
                    </tr>
                  </thead>
                  <tbody>
                    {proposals.map((proposal, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2 px-4">
                          <div className="flex items-center">
                            {proposal.unread && (
                              <FontAwesomeIcon
                                icon={faCircle}
                                className="text-yellow-500 mr-2"
                              />
                            )}
                            {proposal.title}
                          </div>
                        </td>
                        <td className="py-2 px-4">{proposal.status}</td>
                        <td className="py-2 px-4">{proposal.client}</td>
                        <td className="py-2 px-4">{proposal.total}</td>
                        <td className="py-2 px-4">{proposal.signatures}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProposalPage;

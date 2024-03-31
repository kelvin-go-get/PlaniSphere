import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCircle,
  faStar,
  faPaperPlane,
  faInbox,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../Layout";
import Profile from "../assets/profile.png";

const emails = [
  {
    sender: "John Doe",
    subject: "Meeting Reminder",
    time: "2 hours ago",
    unread: true,
  },
  {
    sender: "Jane Smith",
    subject: "Project Update",
    time: "Yesterday",
    unread: false,
  },
  {
    sender: "Michael Johnson",
    subject: "Important Announcement",
    time: "3 days ago",
    unread: true,
  },
  {
    sender: "Emily Davis",
    subject: "Weekly Newsletter",
    time: "Last week",
    unread: false,
  },
];

const CommunicationPage = () => {
  return (
    <Layout>
      <div className="pl-[10px] pt-[4px] pr-[30px] flex-col justify-center items-center">
        <div
          className="flex justify-between 
          rounded-lg
        mb-[20px] items-center shadow-xl p-5 mx-auto text-center"
        >
          <div className="justify-center ">
            <h1 className="text-4xl font-bold  text-center mb-8">
              Communications
            </h1>
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
              <h1 className="text-lg font-bold">Quick Views</h1>
            </div>

            <div className="p-4 border-b">
              <button className="flex items-center space-x-2 text-sm text-gray-600">
                <FontAwesomeIcon icon={faInbox} className="text-lg" />
                <span>Inbox</span>
                <span className="flex items-center justify-center w-5 h-5 text-xs text-white bg-blue-500 rounded-full">
                  2
                </span>
              </button>
            </div>
            <div className="p-4 border-b">
              <button className="flex items-center space-x-2 text-sm text-gray-600">
                <FontAwesomeIcon icon={faStar} className="text-lg" />
                <span>Starred</span>
                <span className="flex items-center justify-center w-5 h-5 text-xs text-white bg-yellow-500 rounded-full">
                  1
                </span>
              </button>
            </div>
            <div className="p-4 border-b">
              <button className="flex items-center space-x-2 text-sm text-gray-600">
                <FontAwesomeIcon icon={faPaperPlane} className="text-lg" />
                <span>Sent</span>
                <span className="flex items-center justify-center w-5 h-5 text-xs text-white bg-green-500 rounded-full">
                  3
                </span>
              </button>
            </div>
            <div className="p-4 border-b">
              <button className="flex items-center space-x-2 text-sm text-gray-600">
                <FontAwesomeIcon icon={faFileAlt} className="text-lg" />
                <span>Drafts</span>
                <span className="flex items-center justify-center w-5 h-5 text-xs text-white bg-gray-500 rounded-full">
                  0
                </span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col">
            <div className="flex gap-4 items-center justify-center py-4 ">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-[30px] h-[30px] text-yellow-400"
              />
              <h1 className="text-lg font-bold">Emails</h1>
            </div>
            <div className="flex ">
              <div className="flex-1 p-6 bg-white ml-4 rounded-lg shadow-lg">
                {emails.map((email, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between py-4 ${
                      email.unread ? "bg-white" : "bg-gray-100"
                    }`}
                  >
                    <div className="flex-1 px-4">
                      <div className="flex items-center">
                        <div className="mr-2 flex gap-2">
                          <input
                            type="checkbox"
                            checked={email.starred}
                            className="form-checkbox text-blue-500 h-5 w-5"
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            className={`ml-2 text-yellow-500 ${
                              email.starred
                                ? "text-yellow-500"
                                : "text-gray-400"
                            }`}
                          />
                        </div>

                        <div className="pl-2">
                          <div className="font-semibold">{email.sender}</div>
                          <div className="text-sm text-gray-600">
                            {email.subject}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pl-[700px] pr-2 text-sm text-gray-500">
                      {email.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CommunicationPage;

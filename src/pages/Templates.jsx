import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import Profile from "../assets/profile.png";

const TemplatesPage = () => {
  // Sample data for templates
  const templates = [
    {
      id: 1,
      title: "Meeting Agenda",
      description: "A template for organizing meeting agendas.",
      thumbnail: "https://via.placeholder.com/150",
      category: "Meetings",
      author: "John Doe",
      createdAt: "2024-03-30",
    },
    {
      id: 2,
      title: "Project Proposal",
      description: "A template for creating project proposals.",
      thumbnail: "https://via.placeholder.com/150",
      category: "Projects",
      author: "Jane Smith",
      createdAt: "2024-03-25",
    },
    {
      id: 3,
      title: "Weekly Planner",
      description: "A template for planning your week.",
      thumbnail: "https://via.placeholder.com/150",
      category: "Planning",
      author: "Alice Johnson",
      createdAt: "2024-03-20",
    },
  ];

  return (
    <Layout>
      <div className="pl-[10px] pt-[4px] pr-[30px] flex-col justify-center items-center">
        <div className="flex justify-between rounded-lg mb-[20px] items-center shadow-xl p-5 mx-auto text-center">
          <div className="justify-center ">
            <h1 className="text-4xl font-bold  text-center mb-8">Templates</h1>
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
          {templates.map((template) => (
            <Link
              to={`/templates/${template.id}`} // Use the Link component with the template's id in the URL
              key={template.id}
              className="border rounded-lg overflow-hidden shadow-md block hover:bg-gray-50"
            >
              <div>
                <img
                  src={template.thumbnail}
                  alt={template.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">
                    {template.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    {template.description}
                  </p>
                  <div className="flex items-center mb-2">
                    <span className="inline-block bg-gray-200 text-xs px-2 py-1 rounded-md mr-2">
                      {template.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      by {template.author}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      Created on: {template.createdAt}
                    </span>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs">
                      View Template
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TemplatesPage;

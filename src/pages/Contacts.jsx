import React from "react";
import Layout from "../Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faGlobe,
  faMapMarkerAlt,
  faEdit, // Import the faEdit icon
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import ProfilePic from "../assets/profile.png";

// Define the contacts array
const contacts = [
  {
    id: 1,
    name: "John Doe",
    role: "Event Planner Manager",
    company: "PlaniSphere",
    email: "john.doe@example.com",
    phone: "+1234567890",
    website: "www.example.com",
    address: "123 Street, City, Country",
  },
  // Add more contacts as needed
];

const ContactsPage = () => {
  // Define handleEdit and handleDelete functions if needed

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between rounded-lg mb-[20px] items-center shadow-xl p-5 mx-auto text-center">
          <div className="justify-center">
            <h1 className="text-4xl font-bold text-center mb-8">Contacts</h1>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={ProfilePic}
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <h2 className="text-lg font-bold ">John Doe</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {contacts.map((contact) => (
            <div key={contact.id} className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center mb-4">
                <img
                  src={ProfilePic}
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h2 className="font-bold text-lg">{contact.name}</h2>
                  <p className="text-gray-500 text-sm">{contact.role}</p>
                  <p className="text-gray-500 text-sm">{contact.company}</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-gray-600 mr-2 text-lg"
                />
                <p className="text-sm">{contact.email}</p>
                <FontAwesomeIcon
                  icon={faEdit}
                  className="ml-auto cursor-pointer text-blue-500 text-sm"
                  onClick={() => handleEdit("email")}
                />
              </div>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-gray-600 mr-2 text-lg"
                />
                <p className="text-sm">{contact.phone}</p>
                <FontAwesomeIcon
                  icon={faEdit}
                  className="ml-auto cursor-pointer text-blue-500 text-sm"
                  onClick={() => handleEdit("phone")}
                />
              </div>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-gray-600 mr-2 text-lg"
                />
                <p className="text-sm">{contact.website}</p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-gray-600 mr-2 text-lg"
                />
                <p className="text-sm">{contact.address}</p>
              </div>
              <div className="flex justify-end mt-2">
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="text-red-500 cursor-pointer text-lg"
                  onClick={() => handleDelete(contact.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ContactsPage;

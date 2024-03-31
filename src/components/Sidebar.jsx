import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import {
  faTachometerAlt,
  faCalendarAlt,
  faTasks,
  faCog,
  faEnvelope,
  faUserFriends,
  faCommentAlt,
  faChartBar,
  faFileContract,
  faFileInvoice,
  faFileSignature,
  faFileAlt,
  faFileCode,
  faEnvelopeOpenText,
  faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-700  w-64 py-6 px-4 flex-shrink-0 shadow-lg">
      <h1 class="text-4xl font-bold mb-6 relative inline-block">
        <span class="text-blue-800">Plani</span>
        <span class="text-blue-600">Sphere</span>
        <span class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs bg-white px-2">
          TM
        </span>
      </h1>

      <ul className="space-y-2 text-white">
        <Link
          to="/"
          className="flex items-center py-3 px-4 rounded transition duration-300 hover:bg-blue-800 hover:text-black shadow-md border border-transparent hover:border-blue-900 hover:scale-105 hover:font-semibold"
        >
          <FontAwesomeIcon icon={faTachometerAlt} className="mr-3 text-xl" />
          <span className="text-lg">Dashboard</span>
        </Link>
        <Link
          to="/events"
          className="flex items-center py-3 px-4 rounded transition duration-300 hover:bg-blue-800 hover:text-black shadow-md border border-transparent hover:border-blue-900 hover:scale-105 hover:font-semibold"
        >
          <FontAwesomeIcon icon={faCalendarPlus} className="mr-3 text-xl" />
          <span className="text-lg">Events</span>
        </Link>
        {/* Add other Link components */}
        <Link
          to="/calendar"
          className="flex items-center py-3 px-4 rounded transition duration-300 hover:bg-blue-800 hover:text-black shadow-md border border-transparent hover:border-blue-900 hover:scale-105 hover:font-semibold"
        >
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-3 text-xl" />
          <span className="text-lg">Calendar</span>
        </Link>

        <Link
          to="/contacts"
          className="flex items-center py-3 px-4 rounded transition duration-300 hover:bg-blue-800 hover:text-black shadow-md border border-transparent hover:border-blue-900 hover:scale-105 hover:font-semibold"
        >
          <FontAwesomeIcon icon={faUserFriends} className="mr-3 text-xl" />
          <span className="text-lg">Contacts</span>
        </Link>
        <Link
          to="/communications"
          className="flex items-center py-3 px-4 rounded transition duration-300 hover:bg-blue-800 hover:text-black shadow-md border border-transparent hover:border-blue-900 hover:scale-105 hover:font-semibold"
        >
          <FontAwesomeIcon icon={faCommentAlt} className="mr-3 text-xl" />
          <span className="text-lg">Communications</span>
        </Link>
        <Link
          to="/leads"
          className="flex items-center py-3 px-4 rounded transition duration-300 hover:bg-blue-800 hover:text-black shadow-md border border-transparent hover:border-blue-900 hover:scale-105 hover:font-semibold"
        >
          <FontAwesomeIcon icon={faChartBar} className="mr-3 text-xl" />
          <span className="text-lg">Leads</span>
        </Link>
        <Link
          to="/proposals"
          className="flex items-center py-3 px-4 rounded transition duration-300 hover:bg-blue-800 hover:text-black shadow-md border border-transparent hover:border-blue-900 hover:scale-105 hover:font-semibold"
        >
          <FontAwesomeIcon icon={faFileContract} className="mr-3 text-xl" />
          <span className="text-lg">Proposals</span>
        </Link>
        <Link
          to="/invoices"
          className="flex items-center py-3 px-4 rounded transition duration-300 hover:bg-blue-800 hover:text-black shadow-md border border-transparent hover:border-blue-900 hover:scale-105 hover:font-semibold"
        >
          <FontAwesomeIcon icon={faFileInvoice} className="mr-3 text-xl" />
          <span className="text-lg">Invoices</span>
        </Link>
        <Link
          to="/contracts"
          className="flex items-center py-3 px-4 rounded transition duration-300 hover:bg-blue-800 hover:text-black shadow-md border border-transparent hover:border-blue-900 hover:scale-105 hover:font-semibold"
        >
          <FontAwesomeIcon icon={faFileSignature} className="mr-3 text-xl" />
          <span className="text-lg">Contracts</span>
        </Link>
        <Link
          to="/reports"
          className="flex items-center py-3 px-4 rounded transition duration-300 hover:bg-blue-800 hover:text-black shadow-md border border-transparent hover:border-blue-900 hover:scale-105 hover:font-semibold"
        >
          <FontAwesomeIcon icon={faFileAlt} className="mr-3 text-xl" />
          <span className="text-lg">Reports</span>
        </Link>
        <Link
          to="/templates"
          className="flex items-center py-3 px-4 rounded transition duration-300 hover:bg-blue-800 hover:text-black shadow-md border border-transparent hover:border-blue-900 hover:scale-105 hover:font-semibold"
        >
          <FontAwesomeIcon icon={faFileCode} className="mr-3 text-xl" />
          <span className="text-lg">Templates</span>
        </Link>
        <SubscribeItem />
      </ul>
    </div>
  );
}

function SubscribeItem() {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <li className="relative">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center py-3 px-4 rounded transition duration-300 border-transparent">
          <FontAwesomeIcon icon={faEnvelopeOpenText} className="mr-3 text-xl" />
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="text-lg text-blue-600 focus:outline-none p-2 w-[150px]
            "
            required
          />
          <button type="submit" className="ml-2 focus:outline-none">
            <FontAwesomeIcon
              icon={faCalendarPlus}
              className="text-xl text-white bg-blue-500 p-2 rounded-md hover:bg-blue-600"
            />
          </button>
        </div>
      </form>
    </li>
  );
}

export default Sidebar;

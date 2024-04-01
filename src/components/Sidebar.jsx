import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
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
  const location = useLocation();
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
    <div className="bg-gradient-to-b from-blue-900 to-blue-700  w-64 py-6 px-4 flex-shrink-0 shadow-lg">
      <h1 className="text-4xl font-bold mb-6 relative inline-block">
        <span className="text-blue-800">Plani</span>
        <span className="text-blue-600">Sphere</span>
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs bg-white px-2">
          TM
        </span>
      </h1>

      <ul className="space-y-2 text-white">
        <SidebarLink
          to="/"
          icon={faTachometerAlt}
          label="Dashboard"
          current={location.pathname === "/"}
        />
        <SidebarLink
          to="/events"
          icon={faCalendarPlus}
          label="Events"
          current={location.pathname === "/events"}
        />
        {/* Add other SidebarLink components */}
        <SidebarLink
          to="/calendar"
          icon={faCalendarAlt}
          label="Calendar"
          current={location.pathname === "/calendar"}
        />
        <SidebarLink
          to="/contacts"
          icon={faUserFriends}
          label="Contacts"
          current={location.pathname === "/contacts"}
        />
        <SidebarLink
          to="/communications"
          icon={faCommentAlt}
          label="Communications"
          current={location.pathname === "/communications"}
        />
        <SidebarLink
          to="/leads"
          icon={faChartBar}
          label="Leads"
          current={location.pathname === "/leads"}
        />
        <SidebarLink
          to="/proposals"
          icon={faFileContract}
          label="Proposals"
          current={location.pathname === "/proposals"}
        />
        <SidebarLink
          to="/invoices"
          icon={faFileInvoice}
          label="Invoices"
          current={location.pathname === "/invoices"}
        />
        <SidebarLink
          to="/contracts"
          icon={faFileSignature}
          label="Contracts"
          current={location.pathname === "/contracts"}
        />
        <SidebarLink
          to="/reports"
          icon={faFileAlt}
          label="Reports"
          current={location.pathname === "/reports"}
        />
        <SidebarLink
          to="/templates"
          icon={faFileCode}
          label="Templates"
          current={location.pathname === "/templates"}
        />
        <SubscribeItem
          email={email}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </ul>
    </div>
  );
}

function SidebarLink({ to, icon, label, current }) {
  return (
    <li>
      <Link
        to={to}
        className={`flex items-center py-3 px-4 rounded transition duration-300 shadow-md border border-transparent hover:border-blue-900 hover:scale-105 hover:font-semibold ${
          current
            ? "bg-blue-800 text-black"
            : "hover:bg-blue-800 hover:text-black"
        }`}
      >
        <FontAwesomeIcon icon={icon} className="mr-3 text-xl" />
        <span className="text-lg">{label}</span>
      </Link>
    </li>
  );
}

function SubscribeItem({ email, handleChange, handleSubmit }) {
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
            className="text-lg text-blue-600 focus:outline-none p-2 w-[150px]"
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

import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/DashBoard";
import EventsPage from "./pages/Events";
import EventsCalendar from "./pages/EventsCalendar";
import ContactsPage from "./pages/Contacts";
import CommunicationPage from "./pages/Communications";
import LeadsPage from "./pages/Leads";
import ProposalPage from "./pages/Proposal";
import InvoicesPage from "./pages/Invoices";
import ContractsPage from "./pages/Contracts";
import ReportsPage from "./pages/Reports";
import TemplatesPage from "./pages/Templates";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/calendar" element={<EventsCalendar />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/communications" element={<CommunicationPage />} />
        <Route path="/leads" element={<LeadsPage />} />
        <Route path="/proposals" element={<ProposalPage />} />
        <Route path="/invoices" element={<InvoicesPage />} />
        <Route path="/contracts" element={<ContractsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/templates" element={<TemplatesPage />} />
      </Routes>
    </>
  );
}

export default App;

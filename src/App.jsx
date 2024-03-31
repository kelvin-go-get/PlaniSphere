import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/DashBoard";
import EventsPage from "./pages/Events";
import EventsCalendar from "./pages/EventsCalendar";
import ContactsPage from "./pages/Contacts";
import CommunicationPage from "./pages/Communications";
import LeadsPage from "./pages/Leads";

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
      </Routes>
    </>
  );
}

export default App;

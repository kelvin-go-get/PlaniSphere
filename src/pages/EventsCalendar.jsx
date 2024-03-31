import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Layout from "../Layout";
import Profile from "../assets/profile.png";

const localizer = momentLocalizer(moment);

const EventsCalendar = ({ leaves = [], holidays = [] }) => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filters, setFilters] = useState({
    calendarView: "event",
    status: "open leads",
    type: "appointments",
    personal: false,
  });

  useEffect(() => {
    const getAbsentiesList = () => {
      const absentiesList = [];
      for (let i = 0; i < leaves.length; i++) {
        let start_at = new Date(leaves[i].start_at);
        let end_at = new Date(leaves[i].end_at);
        absentiesList.push({
          id: i,
          title: "Leave",
          start: start_at,
          end: end_at,
          allDay: true,
          type: "leave",
          venue: leaves[i].venue,
          host: leaves[i].host,
        });
      }
      return absentiesList;
    };

    const getHolidaysList = () => {
      const holidaysList = [];
      for (let i = 0; i < holidays.length; i++) {
        let color = "#4285f4"; // Google Calendar's blue color
        holidaysList.push({
          id: `holiday-${i}`,
          title: holidays[i].name,
          start: new Date(holidays[i].date),
          end: new Date(holidays[i].date),
          allDay: true,
          color: color,
          type: "holiday",
        });
      }
      return holidaysList;
    };

    // Add "Party" event
    const partyEvent = {
      id: "party-event",
      title: "Party",
      start: new Date(2024, 3, 6, 8, 0, 0), // April 6, 2024, 8 am
      end: new Date(2024, 3, 6, 21, 0, 0), // April 6, 2024, 9 pm
      allDay: false,
      color: "#4285f4", // Blue color
      venue: "Sample Venue",
      host: "Sample Host",
    };

    const list = [...getAbsentiesList(), ...getHolidaysList(), partyEvent];
    setEvents(list);
    setFilteredEvents(list);
  }, [leaves, holidays]);

  useEffect(() => {
    const filtered = events.filter((event) => {
      let match = true;
      if (filters.calendarView !== "event") {
        match = match && event.type === filters.calendarView;
      }
      if (filters.status !== "open leads") {
        match = match && event.status === filters.status;
      }
      if (filters.type !== "appointments") {
        match = match && event.type === filters.type;
      }
      if (filters.personal) {
        match = match && event.personal;
      }
      return match;
    });
    setFilteredEvents(filtered);
  }, [filters, events]);

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const EventDetails = ({ event }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
      setExpanded(!expanded);
    };

    return (
      <div onClick={toggleExpanded} style={{ cursor: "pointer" }}>
        <h3>{event.title}</h3>
        {expanded && (
          <div className="flex flex-col z-20 h-[100px] w-[300px]">
            <p>
              Start Time: {moment(event.start).format("MMMM Do YYYY, h:mm a")}
            </p>
            <p>End Time: {moment(event.end).format("MMMM Do YYYY, h:mm a")}</p>
            <p>Venue: {event.venue}</p>
            <p>Host: {event.host}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <Layout>
      <div className="pl-[10px] pr-[30px] pt-1 flex-col justify-center items-center">
        <div
          className="flex justify-between 
          rounded-lg
        mb-[20px] items-center shadow-xl p-5 mx-auto text-center"
        >
          <div className="justify-center ">
            <h1 className="text-4xl font-bold  text-center mb-8">Calendar</h1>
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
        <div className="flex">
          {/* Side view for filters */}
          <div className="bg-white rounded-lg shadow-md p-4 mr-4">
            <h3 className="text-lg font-semibold mb-2">Set Calendar View</h3>
            <select
              value={filters.calendarView}
              onChange={(e) =>
                handleFilterChange("calendarView", e.target.value)
              }
              className="w-full mb-2"
            >
              <option value="event">By Event</option>
              <option value="venue">By Venue</option>
            </select>

            <h3 className="text-lg font-semibold mb-2">Filter by Status</h3>
            <select
              value={filters.status}
              onChange={(e) => handleFilterChange("status", e.target.value)}
              className="w-full mb-2"
            >
              <option value="open leads">Open Leads</option>
              <option value="holds">Holds</option>
              <option value="booked events">Booked Events</option>
              <option value="archived events">Archived Events</option>
            </select>

            <h3 className="text-lg font-semibold mb-2">Filter by Type</h3>
            <select
              value={filters.type}
              onChange={(e) => handleFilterChange("type", e.target.value)}
              className="w-full mb-2"
            >
              <option value="appointments">Appointments</option>
              <option value="to do">To Do</option>
              <option value="budget payments">Budget Payments</option>
              <option value="event dates">Event Dates</option>
              <option value="invoice due dates">Invoice Due Dates</option>
              <option value="scheduled invoice payment due dates">
                Scheduled Invoice Payment Due Dates
              </option>
            </select>

            <h3 className="text-lg font-semibold mb-2">Personal</h3>
            <select
              value={filters.type}
              onChange={(e) => handleFilterChange("type", e.target.value)}
              className="w-full mb-2"
            >
              <option value="personal-appointments">
                Personal Appointments
              </option>
              <option value="personal-to-do">Personal To Do List</option>
              <option value="personal-budget">Personal Budget Payments</option>
              <option value="personal-events">Personal Event Dates</option>
              <option value="personal-invoice">
                Personal Invoice Due Dates
              </option>
              <option value="personal-scheduled-invoice">
                Scheduled Personal Invoice Payments
              </option>
            </select>

            <h3 className="text-lg font-semibold mb-2">Open Leads</h3>
            <select
              value={filters.type}
              onChange={(e) => handleFilterChange("type", e.target.value)}
              className="w-full mb-2"
            >
              <option value="leads-appointments">Appointment Leads</option>
              <option value="leads-to-do">Leads To Do List</option>
              <option value="leads-budget">Lead Budget Payments</option>
              <option value="leads-events">Lead Event Dates</option>
              <option value="leads-invoice">Lead Invoice Due Dates</option>
              <option value="leads-scheduled-invoice">
                Scheduled Lead Invoice Payments
              </option>
            </select>

            <h3 className="text-lg font-semibold mb-2">Booked Events</h3>
            <select
              value={filters.type}
              onChange={(e) => handleFilterChange("type", e.target.value)}
              className="w-full mb-2"
            >
              <option value="booked-appointments">Booked Appointments</option>
              <option value="booked-to-do">Booked To Do List</option>
              <option value="booked-budget">Booked Budget Payments</option>
              <option value="booked-events">Booked Event Dates</option>
              <option value="booked-invoice">Booked Invoice Due Dates</option>
              <option value="booked-scheduled-invoice">
                Scheduled Booked Invoice Payments
              </option>
            </select>
          </div>

          {/* Calendar */}
          <div className="flex-grow">
            <div style={{ height: "600px", padding: "20px" }}>
              <Calendar
                localizer={localizer}
                events={filteredEvents}
                startAccessor="start"
                endAccessor="end"
                defaultDate={moment().toDate()}
                eventPropGetter={(event) => {
                  const eventData = events.find((ot) => ot.id === event.id);
                  const backgroundColor = eventData && eventData.color;
                  return { style: { backgroundColor } };
                }}
                components={{
                  event: EventDetails,
                }}
                style={{
                  borderRadius: "5px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

EventsCalendar.defaultProps = {
  leaves: [],
  holidays: [
    {
      name: "New Year's Day",
      date: "2024-01-01",
    },
    {
      name: "Labour Day",
      date: "2024-05-01",
    },
    {
      name: "Madaraka Day",
      date: "2024-06-01",
    },
    {
      name: "Mashujaa Day",
      date: "2024-10-20",
    },
    {
      name: "Jamhuri Day",
      date: "2024-12-12",
    },
  ],
};

export default EventsCalendar;

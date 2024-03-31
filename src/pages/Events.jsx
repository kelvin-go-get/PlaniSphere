import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faUser,
  faComment,
  faRetweet,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import Layout from "../Layout";
import Profile from "../assets/profile.png";

function EventsPage() {
  return (
    <Layout>
      <div className="pl-[10px] pt-[4px] pr-[30px] flex-col justify-center items-center">
        <div
          className="flex justify-between 
          rounded-lg
        mb-[20px] items-center shadow-xl p-5 mx-auto text-center"
        >
          <div className="justify-center ">
            <h1 className="text-4xl font-bold  text-center mb-8">Events</h1>
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
        <div className="max-w-6xl mx-auto pt-1">
          <div className="gap-6">
            {/* Search bar and filtering */}
            <div className="bg-white rounded-lg shadow-lg  p-6">
              <input
                type="text"
                placeholder="Search events..."
                className="w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700 bg-transparent mb-4"
              />
              <select className="border border-blue-500 text-blue-500 rounded px-3 py-1 focus:outline-none focus:border-blue-700 bg-transparent">
                <option value="">Filter by...</option>
                <option value="upcoming">Upcoming</option>
                <option value="active">Active</option>
                <option value="archived">Archived</option>
              </select>
            </div>
            <div className="max-w-6xl mx-auto mt-[50px] mb-[20px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-white rounded-lg shadow-lg p-6 shadow-blue-300">
                  <h2 className="text-lg text-blue-500 font-bold mb-4 flex items-center">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                    Event 1
                  </h2>
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <p className="text-xl font-bold text-blue-500">12</p>
                      <p className="text-sm text-gray-500">Booked</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xl font-bold text-blue-500">6</p>
                      <p className="text-sm text-gray-500">Active</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xl font-bold text-blue-500">3</p>
                      <p className="text-sm text-gray-500">Archived</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div
                  className="bg-white rounded-lg shadow-lg shadow-blue-300 p-6"
                  onClick={() => handleCardClick("Event 2")}
                >
                  <h2 className="text-lg text-blue-500 font-bold mb-4 flex items-center">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                    Event 2
                  </h2>
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <p className="text-xl font-bold text-blue-500">10</p>
                      <p className="text-sm text-gray-500">Booked</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xl font-bold text-blue-500">8</p>
                      <p className="text-sm text-gray-500">Active</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xl font-bold text-blue-500">5</p>
                      <p className="text-sm text-gray-500">Archived</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div
                  className="bg-white rounded-lg shadow-lg shadow-blue-300 p-6"
                  onClick={() => handleCardClick("Event 3")}
                >
                  <h2 className="text-lg text-blue-500 font-bold mb-4 flex items-center">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                    Event 3
                  </h2>
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <p className="text-xl font-bold text-blue-500">15</p>
                      <p className="text-sm text-gray-500">Booked</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xl font-bold text-blue-500">4</p>
                      <p className="text-sm text-gray-500">Active</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xl font-bold text-blue-500">7</p>
                      <p className="text-sm text-gray-500">Archived</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* QUICK VIEWS */}
            <div className="bg-blue-500 text-white py-6 px-2 shadow-lg shadow-black mb-[50px]">
              <h1 className="text-4xl font-bold text-center mb-8">
                Quick Views
              </h1>
              <div className="max-w-3xl mx-auto">
                {/* Chat */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="mr-2 text-blue-500"
                    />
                    <h2 className="text-lg font-bold text-blue-500">
                      John Doe
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    Wow! The event that Planisphere planned was fantastic!
                  </p>
                  <div className="flex justify-between mt-4">
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="text-blue-500 mr-2 cursor-pointer"
                      />
                      <span className="text-gray-500">12</span>
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={faComment}
                        className="text-blue-500 mr-2 cursor-pointer"
                      />
                      <span className="text-gray-500">24</span>
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={faRetweet}
                        className="text-blue-500 mr-2 cursor-pointer"
                      />
                      <span className="text-gray-500">36</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="mr-2 text-blue-500"
                    />
                    <h2 className="text-lg font-bold text-blue-500">
                      Jane Smith
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    I agree, John! The event was amazing. Kudos to Planisphere!
                  </p>
                  {/* Thread functionality */}
                  <div className="ml-8 mt-4 bg-blue-100 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="mr-2 text-blue-500"
                      />
                      <h2 className="text-lg font-bold text-blue-500">
                        John Doe
                      </h2>
                    </div>
                    <p className="text-gray-700">
                      Indeed, Jane! It was a memorable experience.
                    </p>
                    {/* Thread icons */}
                    <div className="flex justify-between mt-4">
                      <div className="flex items-center">
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="text-blue-500 mr-2 cursor-pointer"
                        />
                        <span className="text-gray-500">12</span>
                      </div>
                      <div className="flex items-center">
                        <FontAwesomeIcon
                          icon={faComment}
                          className="text-blue-500 mr-2 cursor-pointer"
                        />
                        <span className="text-gray-500">24</span>
                      </div>
                      <div className="flex items-center">
                        <FontAwesomeIcon
                          icon={faRetweet}
                          className="text-blue-500 mr-2 cursor-pointer"
                        />
                        <span className="text-gray-500">36</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default EventsPage;

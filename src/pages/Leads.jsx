import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faTimes,
  faCheck,
  faClock,
  faHandHolding,
  faPlus,
  faUserPlus,
  faPhoneAlt,
  faCheckCircle,
  faCalendarAlt,
  faSearch,
  faFunnelDollar,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../Layout";
import Profile from "../assets/profile.png";

const LeadsPage = () => {
  return (
    <Layout>
      <div className="pl-[10px] pt-[4px] pr-[30px] flex-col justify-center items-center">
        <div className="flex justify-between rounded-lg mb-[20px] items-center shadow-xl p-5 mx-auto text-center">
          <div className="justify-center ">
            <h1 className="text-4xl font-bold  text-center mb-8">Leads</h1>
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
          {/* Main Content */}
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="flex gap-4 items-center justify-center">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="w-[30px] h-[30px] text-green-500 text-center justify-center"
                />
                <h1>Lead Status</h1>
              </div>

              <div className="flex gap-2 mb-4 mt-4 items-center justify-center">
                <div className="flex gap-[20px] mt-2">
                  <div className="flex flex-col w-[250px] items-center justify-center shadow-lg rounded-lg p-4">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="w-8 h-8 text-green-500 "
                    />
                    <span className="text-sm font-semibold">Captured</span>
                    <span className="text-[18px] font-semibold">12</span>
                  </div>
                  <div className="flex flex-col items-center w-[250px] justify-center shadow-lg rounded-lg p-4">
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="w-8 h-8 text-red-500"
                    />
                    <span className="text-sm font-semibold">Lost</span>
                    <span className="text-[18px] font-semibold">5</span>
                  </div>
                  <div className="flex flex-col items-center w-[250px] justify-center shadow-lg rounded-lg p-4">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="w-8 h-8 text-green-500"
                    />
                    <span className="text-sm font-semibold">Won</span>
                    <span className="text-[18px] font-semibold">8</span>
                  </div>
                  <div className="flex flex-col items-center w-[250px] justify-center shadow-lg rounded-lg p-4">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="w-8 h-8 text-yellow-500"
                    />
                    <span className="text-sm font-semibold">Open</span>
                    <span className="text-[18px] font-semibold">20</span>
                  </div>
                  <div className="flex flex-col items-center w-[250px] shadow-lg justify-center  rounded-lg p-4">
                    <FontAwesomeIcon
                      icon={faHandHolding}
                      className="w-8 h-8 text-gray-500"
                    />
                    <span className="text-sm font-semibold">Holds</span>
                    <span className="text-[18px] font-semibold">3</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Long Cards */}
            {/* Sidebar */}
            <div className="flex">
              <div className="bg-white w-64 border-r shadow-lg ml-2 p-6">
                <div className="border-b">
                  <div className="flex justify-between">
                    <h1 className="text-[18px] font-semibold">Quick Views</h1>
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                </div>
                <div className="flex flex-col mt-8 gap-6">
                  <div className="flex gap-2">
                    <FontAwesomeIcon
                      icon={faFunnelDollar}
                      className="w-[20px] h-[20px]"
                    />
                    <h1 className=" text-gray-600 rounded-lg ">All</h1>
                  </div>

                  <div className="flex gap-2">
                    <FontAwesomeIcon
                      icon={faFunnelDollar}
                      className="w-[20px] h-[20px]"
                    />
                    <h1 className=" text-gray-600 rounded-lg ">Open + Holds</h1>
                  </div>
                  <div className="flex gap-2">
                    <FontAwesomeIcon
                      icon={faFunnelDollar}
                      className="w-[20px] h-[20px]"
                    />
                    <h1 className=" text-gray-600 rounded-lg ">Open</h1>
                  </div>
                  <div className="flex gap-2">
                    <FontAwesomeIcon
                      icon={faFunnelDollar}
                      className="w-[20px] h-[20px]"
                    />
                    <h1 className=" text-gray-600 rounded-lg ">Holds</h1>
                  </div>
                  <div className="flex gap-2">
                    <FontAwesomeIcon
                      icon={faFunnelDollar}
                      className="w-[20px] h-[20px]"
                    />
                    <h1 className=" text-gray-600 rounded-lg ">
                      Lost (Closed)
                    </h1>
                  </div>
                  <div className="flex gap-2">
                    <FontAwesomeIcon
                      icon={faFunnelDollar}
                      className="w-[20px] h-[20px]"
                    />
                    <h1 className=" text-gray-600 rounded-lg ">Captured</h1>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-6">
                <div className="flex gap-4">
                  <div className="bg-gray-300 rounded-lg p-6">
                    <div className="flex gap-2">
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="w-[30px] h-[30px] text-blue-600"
                      />
                      <h1 className="text-[18px] font-semibold">
                        New Pipeline
                      </h1>
                    </div>
                    <p className="mt-4 text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla varius tortor eget ex ullamcorper, ac faucibus velit
                      vulputate. Praesent sed libero ac tortor imperdiet
                      volutpat. Proin auctor odio vel eros venenatis feugiat.
                    </p>
                  </div>
                  <div className="bg-gray-300 rounded-lg p-6">
                    <div className="flex gap-2">
                      <FontAwesomeIcon
                        icon={faUserPlus}
                        className="w-[30px] h-[30px] text-blue-600"
                      />
                      <h1 className="text-[18px] font-semibold">New Lead</h1>
                    </div>
                    <p className="mt-4 text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla varius tortor eget ex ullamcorper, ac faucibus velit
                      vulputate. Praesent sed libero ac tortor imperdiet
                      volutpat. Proin auctor odio vel eros venenatis feugiat.
                    </p>
                  </div>
                  <div className="bg-gray-300 rounded-lg p-6">
                    <div className="flex gap-2">
                      <FontAwesomeIcon
                        icon={faPhoneAlt}
                        className="w-[30px] h-[30px] text-blue-600"
                      />
                      <h1 className="text-[18px] font-semibold">
                        First Contact
                      </h1>
                    </div>
                    <p className="mt-4 text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla varius tortor eget ex ullamcorper, ac faucibus velit
                      vulputate. Praesent sed libero ac tortor imperdiet
                      volutpat. Proin auctor odio vel eros venenatis feugiat.
                    </p>
                  </div>
                  <div className="bg-gray-300 rounded-lg p-6">
                    <div className="flex gap-2">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="w-[30px] h-[30px] text-blue-600"
                      />
                      <h1 className="text-[18px] font-semibold">
                        Lead Qualified
                      </h1>
                    </div>
                    <p className="mt-4 text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla varius tortor eget ex ullamcorper, ac faucibus velit
                      vulputate. Praesent sed libero ac tortor imperdiet
                      volutpat. Proin auctor odio vel eros venenatis feugiat.
                    </p>
                  </div>
                  <div className="bg-gray-300 rounded-lg p-6">
                    <div className="flex gap-2">
                      <FontAwesomeIcon
                        icon={faCalendarAlt}
                        className="w-[30px] h-[30px] text-blue-600"
                      />
                      <h1 className="text-[18px] font-semibold">
                        Appointments
                      </h1>
                    </div>
                    <p className="mt-4 text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla varius tortor eget ex ullamcorper, ac faucibus velit
                      vulputate. Praesent sed libero ac tortor imperdiet
                      volutpat. Proin auctor odio vel eros venenatis feugiat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LeadsPage;

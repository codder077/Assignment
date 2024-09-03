import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <div
      className="rounded-2xl p-4 sm:p-6 shadow-lg"
      style={{ width: "100%", maxWidth: "500px", height: "auto", background: "#4f4f4f" }}
    >
      <div className="bg-black p-2 rounded-full flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          {["About Me", "Experiences", "Recommended"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-1 px-4 rounded-full ${
                activeTab === tab ? "bg-gray-700" : "bg-transparent"
              } text-white focus:outline-none hover:shadow-lg hover:shadow-gray-800 transition-shadow`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div
        className="bg-gray-700 text-gray-300 rounded-lg p-4"
        style={{ height: "auto", overflowY: "auto" }}
      >
        {activeTab === "About Me" && (
          <p>
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
            <br />
            I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM.
          </p>
        )}
        {activeTab === "Experiences" && (
          <p>
            Hello, I am Dishan Vijya, currently in my Pre Final year at IIIT UNA in the Computer Science and Engineering Branch.
            Here are some of my experiences:
            <br />
            1. Open Source 
            <br />
            2. Freelancing
            <br />
            3. Projects 
            <br />
            GitHub link: https://github.com/codder077
          </p>
        )}
        {activeTab === "Recommended" && (
          <p>I recommend checking out these resources...</p>
        )}
      </div>
    </div>
  );
};

export default Tabs;

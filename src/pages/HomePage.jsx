import React from "react";
import Tabs from "../components/Tabs";
import Gallery from "../components/Gallery";

const HomePage = () => {
  return (
    <div className="flex min-h-screen text-white p-8 justify-center lg:justify-end">
      <div className="w-full max-w-3xl lg:pr-8 flex flex-col space-y-8">
        <Tabs />
        <hr className="border-gray-600" />
        <Gallery />
        <hr className="border-gray-600" />
      </div>
    </div>
  );
};

export default HomePage;

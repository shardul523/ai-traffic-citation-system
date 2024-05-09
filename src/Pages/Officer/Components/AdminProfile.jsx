import React, { useState } from "react";
function AdminProfile() {

  return (
    <div>
      <div className="bg-[#000814] w-full flex flex-col md:flex-row items-center justify-center">
        <div className="bg-[#111827] w-full h-full p-6 shadow-md rounded-xl sm:px-12">
          <img
            src="https://source.unsplash.com/150x150/?portrait?3"
            alt=""
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />
          <div className="space-y-4 text-center divide-y dark:divide-gray-700">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl text-gray-100">
                Officer Name
              </h2>
              <p className="px-5 text-xs sm:text-base text-gray-100">
                Virtual ID: <span>1234 5678 9098</span>
              </p>
              <p className="px-5 text-xs sm:text-base text-gray-100">
                Email ID: <span>officer@gmail.com</span>
              </p>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;

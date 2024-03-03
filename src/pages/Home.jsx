import React from "react";
import Navigation from "../components/Navigation";
import { CloseCircleOutline } from "react-ionicons";

const Home = () => {
  const handleCloseFilters = () => {};

  return (
    <div className="font-inter bg-slate-100 dark:bg-slate-800">
      <Navigation />
      <div className="md:sticky relative mx-1 mt-10 md:top-10 md:[500px] ">
        <div className="w-full bg-white dark:bg-indigo-200 rounded-lg border">
          <div className="flex justify-between items-center p-4">
            <span className="text-gray-800 font-semibold text-sm ml-2">
              Filter Jobs
            </span>
            <CloseCircleOutline
              cssClasses={"cursor-pointer"}
              color="#ed5a85"
              onClick={handleCloseFilters}
            />
          </div>
          <div className="w-full flex md:flex-col flex-row justify-between gap-4 mt-5 ">
            <div className="flex flex-col gap-4 ml-4">
              <span className="text-gray-800 font-semibold text-md ">
                Contract Status
              </span>
              <div className="w-full flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Full Time"
                  className="w-[16px] h-[16px] border border-gray-300  rounded-md"
                />
                <span className="text-gray-800 font-medium text-sm">
                  Full Time
                </span>
              </div>
              <div className="w-full flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Part Time"
                  className="w-[16px] h-[16px] border border-gray-300  rounded-md"
                />
                <span className="text-gray-800 font-medium text-sm">
                  Part Time
                </span>
              </div>
              <div className="w-full flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Intership"
                  className="w-[16px] h-[16px] border border-gray-300  rounded-md"
                />
                <span className="text-gray-800 font-medium text-sm">
                  Intership
                </span>
              </div>
              
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-gray-800 font-semibold text-md mr-3">
                Location Status
              </span>
              <div className="w-full flex items-center gap-2">
                <input type="checkbox" value="On-Site" className="w-[16px] h-[16px]" />
                <span className="text-gray-800 font-medium text-sm">On-Site</span>
              </div>
              <div className="w-full flex items-center gap-2">
                <input type="checkbox" value="Remote" className="w-[16px] h-[16px]" />
                <span className="text-gray-800 font-medium text-sm">Remote</span>
              </div>
              <div className="w-full flex items-center gap-2">
                <input type="checkbox" value="Hybrid" className="w-[16px] h-[16px]" />
                <span className="text-gray-800 font-medium text-sm">Hybrid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

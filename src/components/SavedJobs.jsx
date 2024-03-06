import React from "react";
import { TrashOutline, BusinessOutline } from "react-ionicons";
import { useGlobalState } from "../context/GlobalState";

const SavedJobs = () => {
    const { savedJobs } = useGlobalState();
  return (
    <div className="w-full bg-white dark:bg-indigo-200 mt-5 rounded-lg border">
      <div className="w-full flex flex-col gap-2">
        <span className="text-gray-800 font-semibold text-sm"></span>
        <div className="flex flex-col w-full gap-5">
          <span className="text-gray-800 font-semibold text-sm ml-2">
            Saved Jobs
          </span>
          {!savedJobs.length && (
            <p className="text-slate-400 text-sm text-center">
              You don't have any saved Job
            </p>
          )}
          {savedJobs.map((job) => {
            return (
              <div
                key={job.id}
                className="flex items-center justify-between border-gray-200 order-b gap-4 p-4 text-gray-800"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-gray-800 font-semibold text-md">
                    {job.title}
                  </span>
                  <div>
                    <BusinessOutline
                      width={"18px"}
                      height={"18px"}
                      color="#555"
                    />
                    <span className="text-gray-800 font-semibold text-sm">
                      {job.company}
                    </span>
                  </div>
                </div>
                <button
                  className="text-white font-semibold text-sm rounded-md bg-indigo-500 w-20 h-8"
                  onClick={() => navigate(`/job/${job.id}`)}
                >
                  Apply
                </button>
                <button>
                  <TrashOutline width={"18px"} height={"18px"} color="#555" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SavedJobs;

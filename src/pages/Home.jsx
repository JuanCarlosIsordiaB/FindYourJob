import React from "react";
import Navigation from "../components/Navigation";
import { useGlobalState } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";
import Filter from "../components/Filter";
import SavedJobs from "../components/SavedJobs";
import Search from "../components/Search";

const Home = () => {
  const { savedJobs } = useGlobalState();
  const navigate = useNavigate();

  return (
    <div className="font-inter bg-slate-100 dark:bg-slate-800">
      <Navigation />
      <div className="md:sticky relative mx-1 mt-10 md:top-10 md:[500px] ">
        <Filter />
        <SavedJobs />
        <Search />
      </div>
    </div>
  );
};

export default Home;

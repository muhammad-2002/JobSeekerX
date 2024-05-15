import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Heading from "../Heading/Heading";
import JobCard from "../JobCard/JobCard";

const TabCatagory = () => {
  const {
    data: jobs = [],
    isLoading,
    refetch,
    isError,
    error,
  } = useQuery({
    queryFn: () => geData(),
    queryKey: ["jobs"],
  });
  const geData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API}/jobs`);
    return data;
  };

  if (isLoading) return <p>loading</p>;
  return (
    <div className="">
      <div>
        <Heading
          heading={"Job by Category"}
          description={
            "Crafting digital solutions through code, transforming complex problems into elegant algorithms"
          }
        ></Heading>
      </div>
      <Tabs>
        <div className="container px-10 py-4 mx-auto">
          <div className="flex items-center justify-center font-bold">
            <TabList>
              <Tab>All Job</Tab>
              <Tab>On-Site Job</Tab>
              <Tab>Remote Job</Tab>
              <Tab>Hybrid</Tab>
              <Tab>Part-Time</Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className="grid grid-cols-1 gap-6 my-7 md:grid-cols-2">
              {jobs.map((j) => (
                <JobCard key={j._id} j={j}></JobCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 gap-6 my-7 md:grid-cols-2">
              {jobs
                .filter((j) => j.category === "On-Site Jobs")
                .map((j) => (
                  <JobCard key={j._id} j={j}></JobCard>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 gap-6 my-7 md:grid-cols-2">
              {jobs
                .filter((j) => j.category === "Remote Jobs")
                .map((j) => (
                  <JobCard key={j._id} j={j}></JobCard>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 gap-6 my-7 md:grid-cols-2">
              {jobs
                .filter((j) => j.category === "Hybrid Jobs")
                .map((j) => (
                  <JobCard key={j._id} j={j}></JobCard>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 gap-6 my-7 md:grid-cols-2">
              {jobs
                .filter((j) => j.category === "Part-Time Jobs")
                .map((j) => (
                  <JobCard key={j._id} j={j}></JobCard>
                ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default TabCatagory;

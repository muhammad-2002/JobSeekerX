import React from "react";
import Banner from "../../Components/Banner/Banner";
import TabCatagory from "../../Components/TabCatagory/TabCatagory";
import TrustedPeople from "../../Components/Trusted/TrustedPeople";
import OurClient from "../../Components/ourClient/OurClient";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TabCatagory></TabCatagory>
      <TrustedPeople></TrustedPeople>
      <OurClient></OurClient>
    </div>
  );
};

export default Home;

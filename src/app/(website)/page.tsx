import React from "react";
import HomeHero from "./components/HomeHero";
import Barbershops from "./components/Barbershops";
import OnlineShop from "./components/OnlineShop";
import AboutOurCommunity from "./components/AboutOurCommunity";
import ContributeInBeardContests from "./components/ContributeInBeardContests";
import DigitalStaps from "./components/DigitalStaps";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";

function page() {
  return (
    <div>
      <HomeHero />
      <Barbershops />
      <OnlineShop />
      <AboutOurCommunity />
      <ContributeInBeardContests />
      <DigitalStaps />
      <ContactUs />
      <Download />
      <FAQ />
    </div>
  );
}

export default page;

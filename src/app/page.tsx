"use client";
import React from "react";

import Navbar from "@/components/Navbar";
import Areyoustarving from "@/components/Areyoustarving";
import Greys from "@/components/Greys";
import HowDoes from "@/components/HowDoes";
import Propular from "@/components/Propular";
import Featured from "@/components/Featured";
import Search from "@/components/Search";
import DailyDiscounts from "@/components/DailyDiscounts";
import InstallTheApp from "@/components/InstallTheApp";
import BestDeals from "@/components/BestDeals";
import AreYouReady from "@/components/AreYouReady";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Areyoustarving />
      <Greys />
      <HowDoes />
      <Propular />
      <Featured />
      <Search />
      <DailyDiscounts />
      <InstallTheApp />
      <BestDeals />
      <AreYouReady />
      <Footer />
    </div>
  );
}

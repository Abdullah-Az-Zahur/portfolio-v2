"use client";
import { useAppSelector } from "@/redux/hooks";
import Bio from "../../../components/About/Bio";
import React from "react";

const AboutPage = () => {
  const { tabs, activeTab } = useAppSelector((state) => state.tabs);
  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;
  return <div>{activeTabContent || <Bio />}</div>;
};

export default AboutPage;

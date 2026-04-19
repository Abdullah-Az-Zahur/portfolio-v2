"use client";
import { useAppSelector } from "@/redux/hooks";
import BioInfo from "./PersonalInfo/Bio/BioInfo";

const AboutClient = () => {
  const { tabs, activeTab } = useAppSelector((state) => state.tabs);
  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;
  return <div>{activeTabContent || <BioInfo />}</div>;
};

export default AboutClient;

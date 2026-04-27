"use client";
import { useAppSelector } from "@/store/hooks";
import { aboutSidebarCategories } from "./aboutSidebarCategories";
import BioInfo from "./PersonalInfo/Bio/BioInfo";

const aboutTabContentMap = aboutSidebarCategories.reduce<
  Record<string, React.ReactNode>
>((accumulator, category) => {
  category.groups.forEach((group) => {
    group.items.forEach((item) => {
      accumulator[item.id] = item.content;
    });
  });

  return accumulator;
}, {});

const AboutClient = () => {
  const { activeTab } = useAppSelector((state) => state.tabs);
  const activeTabContent = activeTab ? aboutTabContentMap[activeTab] : null;

  return <div>{activeTabContent ?? <BioInfo />}</div>;
};

export default AboutClient;

"use client"
import { useAppSelector } from '@/redux/hooks';
import React from 'react';
import Bio from './Bio';

const AboutClient = () => {
      const { tabs, activeTab } = useAppSelector((state) => state.tabs);
  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;
    return (
        <div>
            {activeTabContent || <Bio />}
        </div>
    );
};

export default AboutClient;
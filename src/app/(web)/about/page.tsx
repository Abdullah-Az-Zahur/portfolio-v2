'use client';
import { useTabs } from '@/contexts/Context';
import Bio from '../../../components/About/Bio';
import React from 'react';

const AboutPage = () => { // Renamed to start with an uppercase letter
    const { activeTab, tabs } = useTabs(); // Use the useTabs hook
    const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

    return (
        <div>
            {activeTabContent || <Bio />}
        </div>
    );
};

export default AboutPage;
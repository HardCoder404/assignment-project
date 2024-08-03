"use client"
import React, { useState } from 'react';
import { ChartNoAxesColumn, Award, File } from "lucide-react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('skillTest');
    const router = useRouter();

    const handleClick = (section, path) => {
        setActiveSection(section);
        router.push(path);
    };

    return (
        <div>
            <aside
                id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
                aria-label="Sidebar"
            >
                <div className="h-full mt-10 px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <div
                                onClick={() => handleClick('dashboard', '/dashboard')}
                                className={`flex items-center text-lg font-bold gap-3 p-2 py-5 cursor-pointer rounded-r-full ${activeSection === 'dashboard' ? 'text-blue-700 bg-gray-100 dark:bg-gray-700' : 'text-gray-600 hover:text-blue-700 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                            >
                                <ChartNoAxesColumn size={24} strokeWidth={3} />
                                Dashboard
                            </div>
                        </li>
                        <li>
                            <div
                                onClick={() => handleClick('skillTest', '/')}
                                className={`flex items-center text-lg font-bold gap-3 p-2 py-5 cursor-pointer rounded-r-full ${activeSection === 'skillTest' ? 'text-blue-700 bg-gray-100 dark:bg-gray-700' : 'text-gray-600 hover:text-blue-700 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                            >
                                <Award size={24} strokeWidth={2} />
                                Skill Test
                            </div>
                        </li>
                        <li>
                            <div
                                onClick={() => handleClick('internship', '/internship')}
                                className={`flex items-center text-lg font-bold gap-3 p-2 py-5 cursor-pointer rounded-r-full ${activeSection === 'internship' ? 'text-blue-700 bg-gray-100 dark:bg-gray-700' : 'text-gray-600 hover:text-blue-700 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                            >
                                <File size={24} strokeWidth={2} />
                                Internship
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
}

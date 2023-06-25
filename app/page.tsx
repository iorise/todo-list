"use client";

import Content from "@/components/content/content";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { useState, useEffect } from "react";

const HomePage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const handleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setIsSidebarOpen(true);
  }, []);
  return (
    <div className="overflow-hidden relative">
      <Navbar handleSidebarOpen={handleSidebarOpen} />
      <main className="flex gap-0 md:gap-52">
        <div
          className={`sidebar-container h-auto ${
            isSidebarOpen ? "open z-10" : "z-10"
          }`}
        >
          <Sidebar onItemClick={handleSidebarItemClick} />
        </div>
        <div
          className={`w-full absolute md:z-0 md:relative content-container px-5 ${
            isSidebarOpen ? "sidebar-open" : "sidebar-closed"
          }`}
        >
          <Content selectedItem={selectedItem} />
        </div>
      </main>
    </div>
  );
};

export default HomePage;

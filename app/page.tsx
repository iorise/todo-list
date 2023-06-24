"use client";

import Content from "@/components/content/content";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { useState} from "react";

const HomePage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const handleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);

  };
  return (
    <div className="overflow-hidden relative h-screen">
      <Navbar handleSidebarOpen={handleSidebarOpen} />
      <main className="flex gap-0 md:gap-52">
        <div className={`sidebar-container ${isSidebarOpen ? "open" : ""}`}>
          <Sidebar onItemClick={handleSidebarItemClick} />
        </div>
        <div
          className={`w-screen absolute -z-10 md:relative content-container mr-10 ${
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

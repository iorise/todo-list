import { BiCalendarWeek, BsInbox, IoTodayOutline } from "@/assets/icons";
import React, { useState } from "react";
import Profile from "./Profile";

type SidebarProps = {
  onItemClick: (item: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onItemClick }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [projects, setProjects] = useState<string[]>([]);

  const handleItem = (item: string) => {
    if (item !== activeItem) {
      onItemClick(item);
      setActiveItem(item);
    }
  };

  const handleNewProject = () => {
    setProjects([...projects, "New Project"]);
  };

  return (
    <div className="md:ml-10 mt-10 w-72 h-screen bg-slate-100">
      <ul className="flex flex-col gap-2 text-xl overflow-y-auto">
        <li onClick={() => handleItem("Inbox")}>
          <button
            className={`flex items-center text-center gap-3 p-2 w-full ${
              activeItem === "Inbox" ? "bg-gray-200 font-medium rounded-lg" : ""
            }`}
          >
            <BsInbox /> Inbox
          </button>
        </li>
        <li onClick={() => handleItem("Today")}>
          <button
            className={`flex items-center text-center gap-3 p-2 w-full ${
              activeItem === "Today" ? "bg-gray-200 font-medium rounded-lg" : ""
            }`}
          >
            <IoTodayOutline /> Today
          </button>
        </li>
        <li onClick={() => handleItem("Project")}>
          <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title">
              <button className="flex items-center text-center gap-3 p2">
                <BiCalendarWeek /> Project
              </button>
            </div>
            <div className="collapse-content h-96 overflow-y-auto">
              <ul>
                {projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
              <button className="w-full m-auto mt-5" onClick={handleNewProject}>
                Add Project
              </button>
            </div>
          </div>
        </li>
        <li>
          <Profile />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

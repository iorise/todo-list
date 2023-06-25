import { BiCalendarWeek, BsInbox, IoTodayOutline } from "@/assets/icons";
import React, { useState } from "react";

type SidebarProps = {
  onItemClick: (item: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onItemClick }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItem = (item: string) => {
    if (item !== activeItem) {
      onItemClick(item);
      setActiveItem(item);
    }
  };

  return (
    <div className="md:ml-10 mt-10 w-72 sidebar ">
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
      </ul>
    </div>
  );
};

export default Sidebar;

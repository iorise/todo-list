import React, { useState } from "react";
import Inbox from "./Inbox";
import Today from "./Today";

type ContentProps = {
  selectedItem: string;
};

const Content: React.FC<ContentProps> = ({ selectedItem }) => {
  const [tasks, setTasks] = useState([]);
  const path = "tasks";
  return (
    <div className="w-full pt-16 mr-12">
      <main>
        {selectedItem === "Inbox" && <Inbox />}
        {selectedItem === "Today" && <Today path={path} />}
      </main>
    </div>
  );
};

export default Content;

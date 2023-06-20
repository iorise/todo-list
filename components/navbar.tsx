import { AiOutlineHome, GiHamburgerMenu } from "@/assets/icons";
import AddNewTaskModal from "./addNewTaskModal";

interface Task {
  title: string;
  description: string;
}

export default function Navbar() {
  const handleAddTask = (task: Task) => {
    console.log("Adding task:", task);
  };
  return (
    <nav>
      <div className="navbar text-2xl px-10">
        <div className="flex-1 gap-5">
          <button className="btn">
            <GiHamburgerMenu />
          </button>
          <button>
            <AiOutlineHome />
          </button>
        </div>
        <div className="flex-0">
          <AddNewTaskModal  addTask={handleAddTask} />
        </div>
      </div>
    </nav>
  );
}

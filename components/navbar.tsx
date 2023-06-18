import { AiOutlineHome, GiHamburgerMenu, VscAdd } from "@/assets/icons";
import AddProjectModal from "./addProjectModal";


export default function Navbar() {
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
          <AddProjectModal />
        </div>
      </div>
    </nav>
  );
}

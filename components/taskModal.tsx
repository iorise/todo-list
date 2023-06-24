import { useState } from "react";
import useGetTasks, { Task } from "@/hooks/useGetTasks";

interface TaskModalProps {
  path: string;
}

export default function TaskModal({ path }: TaskModalProps) {
  const { tasks } = useGetTasks(path);
  const [modal, setModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  function handleChange() {
    setModal(!modal);
  }

  function handleTaskClick(task: Task) {
    setSelectedTask(task);
    setModal(true);
  }

  return (
    <div>
      <div className="font-semibold text-xl w-full">
        <ul>
          {tasks.map((task) => (
            <li
              className="cursor-pointer mt-5 border-b-4 w-full"
              key={task.tasks}
              onClick={() => handleTaskClick(task)}
            >
              {task.title}
            </li>
          ))}
        </ul>
      </div>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      {selectedTask && (
        <div className="modal">
          <div className="modal-box">
            <form>
              <h2 className="text-lg font-semibold">Title</h2>
              <p>{selectedTask.title}</p>
              <h2 className="text-lg font-semibold mt-5">Description</h2>
              <p>{selectedTask.description}</p>
              <h2 className="text-lg font-semibold mt-5">Due date</h2>
              <p>{selectedTask.date}</p>
              <h2 className="text-lg font-semibold mt-5">Priority</h2>
              <p>{selectedTask.priority}</p>
            </form>
            <div className="modal-action">
              <button
                className="btn btn-info text-white"
                onClick={handleChange}
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

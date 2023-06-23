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

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const filteredTasks = tasks.filter((task) => {
    const taskDate = new Date(task.date);
    taskDate.setHours(0, 0, 0, 0);
    return taskDate.getTime() === today.getTime();
  });

  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold">Today</h1>
      </div>
      <div className="font-semibold text-xl pt-10">
        <ul>
          {filteredTasks.map((task) => (
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
              <h2 className="text-lg">Title</h2>
              <p>{selectedTask.title}</p>
              <h2 className="text-lg">Description</h2>
              <p>{selectedTask.description}</p>
              <h2 className="text-lg">Due date</h2>
              <p>{selectedTask.date}</p>
              <h2 className="text-lg">Priority</h2>
              <p>{selectedTask.priority}</p>
            </form>
            <div className="modal-action">
              <button className="btn btn-info" onClick={handleChange}>
                Okay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

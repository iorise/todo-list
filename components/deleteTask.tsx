"use client";
import { VscAdd } from "@/assets/icons";
import { useEffect, useState } from "react";
import useCreateTasks from "@/hooks/useCreateTasks";
import { FiEdit, FiTrash2 } from "@/assets/icons";

type Task = {
  id: string;
  title: string;
  description: string;
  date: string;
  priority: string;
};

interface DeleteTaskProps {
  task: Task;
}

export default function DeleteTask({ task }: DeleteTaskProps) {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const createTask = useCreateTasks();

  function handleChange() {
    setModal(!modal);
  }
  const handleDelete = async () => {
    setLoading(true);
    const path = `/tasks`;

    await createTask.removeTask(path);
    setLoading(false);
    setModal(false);
  };

  return (
    <div>
      <button className="btn btn-error btn-sm" onClick={handleChange}>
        <FiTrash2 />
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg border-b-4 mb-5">
            Are you sure to delete {task.title}
          </h3>

          <div className="modal-action">
            <button className="btn" onClick={handleChange}>
              No
            </button>
            <button type="button" className="btn" onClick={handleDelete}>
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

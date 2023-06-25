"use client";
import { VscAdd } from "@/assets/icons";
import { useEffect, useState } from "react";
import useCreateTasks from "@/hooks/useCreateTasks";
import { v4 as uuidv4 } from "uuid";

export default function AddNewTask() {
  const createTasks = useCreateTasks();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMutating, setIsMutating] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("low");
  const [formValid, setFormValid] = useState(false);
  const [titleValid, setTitleValid] = useState(true);
  const [descriptionValid, setDescriptionValid] = useState(true);
  const [dateValid, setDateValid] = useState(true);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setDate("");
    setPriority("low");
    setTitleValid(true);
    setDescriptionValid(true);
    setDateValid(true);
  };

  const createTask = async () => {
    const path = "/tasks";
    const value = {
      id: uuidv4(),
      title: title,
      description: description,
      date: date,
      priority: priority,
    };
    setLoading(true);
    await createTasks.pushTask(path, value);
    setModal(false);
    resetForm();
    setLoading(false);
  };

  function handleChange() {
    setModal(!modal);
    resetForm();
    setFormValid(false);
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title) {
      setTitleValid(false);
    } else {
      setTitleValid(true);
    }

    if (!description) {
      setDescriptionValid(false);
    } else {
      setDescriptionValid(true);
    }

    if (!date) {
      setDateValid(false);
    } else {
      setDateValid(true);
    }

    if (title && description && date) {
      setFormValid(true);
      setIsMutating(true);
      createTask();
      setIsMutating(false);
    } else {
      setFormValid(false);
      return;
    }
  };

  return (
    <div>
      <button onClick={handleChange}>
        <VscAdd />
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg border-b-4 mb-5">New Task</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control grid grid-cols-2">
              <div className="left">
                <label className="label text-lg">Title</label>
                <input
                  type="text"
                  className={`input input-bordered ${
                    !titleValid ? "input-error" : ""
                  }`}
                  placeholder="Title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    setTitleValid(true);
                  }}
                />
                {!titleValid && (
                  <p className="text-red-500 text-sm font-light mt-1">
                    please provide a title.
                  </p>
                )}
                <label className="label text-lg">Description</label>
                <textarea
                  className={`input input-bordered h-32 ${
                    !descriptionValid ? "input-error" : ""
                  }`}
                  placeholder="Desc"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                    setDescriptionValid(true);
                  }}
                ></textarea>
                {!descriptionValid && (
                  <p className="text-red-500 text-sm font-light mt-1">
                    Please provide a description.
                  </p>
                )}
              </div>
              <div className="right">
                <label className="label text-lg">Date</label>
                <input
                  type="date"
                  className={`input input-bordered ${
                    !dateValid ? "input-error" : ""
                  }`}
                  placeholder="date"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                    setDateValid(true);
                  }}
                />
                {!dateValid && (
                  <p className="text-red-500 text-sm font-light mt-1">
                    Please provide a date.
                  </p>
                )}
                <label className="label text-lg">Priority</label>
                <select
                  onChange={(e) => setPriority(e.target.value)}
                  className="input input-bordered"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <label className="label text-lg">Project</label>
                <select></select>
              </div>
            </div>
          </form>
          <div className="modal-action">
            <button className="btn" onClick={handleChange}>
              Close
            </button>
            {!isMutating ? (
              <button type="submit" className="btn" onClick={handleSubmit}>
                Add Task
              </button>
            ) : (
              <button
                type="button"
                className="btn loading"
                onClick={handleSubmit}
              >
                Adding...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

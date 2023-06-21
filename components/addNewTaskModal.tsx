"use client";
import { VscAdd } from "@/assets/icons";
import { useState } from "react";
import { push, set } from "firebase/database"
import useCreateTasks from "@/hooks/useCreateTasks";
import { title } from "process";



export default function AddNewTask(){
  const createTasks = useCreateTasks()
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [priority, setPriority] = useState("low")

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setDate("");
    setPriority("low");
  };
  

  const createTask = async () => {
    const path = "/tasks"
    const value = {
      title: title,
      description: description,
      date: date,
      priority: priority
    }

    await createTasks.pushTask(path, value)
    setModal(false)
    resetForm()
  }


  function handleChange() {
    setModal(!modal);
    resetForm()
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
                  className="input input-bordered"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label className="label text-lg">Description</label>
                <textarea
                  className="input input-bordered h-32"
                  placeholder="Desc"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="right">
                <label className="label text-lg">Date</label>
                <input
                  type="date"
                  className="input input-bordered"
                  placeholder="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <label className="label text-lg">Priority</label>
                <select
                onChange={(e) => setPriority(e.target.value)} className="input input-bordered">
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
            <button type="submit" className="btn" onClick={createTask} >Add Task</button>
          </div>
        </div>
      </div>
    </div>
  );
}

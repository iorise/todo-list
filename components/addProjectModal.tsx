"use client";
import { VscAdd } from "@/assets/icons";
import { useState } from "react";

export default function AddProjectModal() {
  const [modal, setModal] = useState(false);
  function handleChange() {
    setModal(!modal);
  }
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
          <h3 className="font-bold text-lg">New Task</h3>
          <form>
            <div className="form-control grid grid-cols-2">
              <div className="left">
                <label className="label text-lg">Title</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Title"
                />
                <label className="label text-lg">Description</label>
                <input
                  type="text"
                  className="input input-bordered h-20"
                  placeholder="Desc"
                />
              </div>
              <div className="right">
                <label className="label text-lg">Date</label>
                <input
                  type="date"
                  className="input input-bordered"
                  placeholder="date"
                />
                <label className="label text-lg">Priority</label>
                <select className="input input-bordered">
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
            <button className="btn">Add Task</button>
          </div>
        </div>
      </div>
    </div>
  );
}

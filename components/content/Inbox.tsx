import TaskModal from "../taskModal";

const Inbox = () => {
  const path = "tasks";

  return (
    <div>
      <h1 className="text-5xl font-bold">Inbox</h1>
      <div className="pt-10">
        <TaskModal path={path} />
      </div>
    </div>
  );
};

export default Inbox;

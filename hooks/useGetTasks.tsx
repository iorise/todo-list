import { useRef, useState, useEffect } from "react";
import {
  getDatabase,
  ref,
  child,
  onValue,
  off,
  DataSnapshot,
} from "firebase/database";
import { firebaseApp } from "@/config/firebaseConfig";

export interface Task {
  id: string;
  tasks: string;
  title: string;
  description: string;
  date: string;
  priority: string;
}

interface useGetTaskResult {
  isLoading: boolean;
  tasks: Task[];
}

const useGetTasks = (path: string): useGetTaskResult => {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([]);
  const databaseRef = useRef(ref(getDatabase(firebaseApp)));

  useEffect(() => {
    const tasksRef = child(databaseRef.current, path);
    const handleData = (snapshot: DataSnapshot) => {
      const tasksData = snapshot.val();
      if (tasksData) {
        const tasksList = Object.values<Task>(tasksData);
        setTasks(tasksList);
        setIsLoading(false);
      }
    };

    onValue(tasksRef, handleData);

    return () => {
      off(tasksRef, "value", handleData);
    };
  }, [path]);

  if (isLoading) {
    return { isLoading: true, tasks: [] };
  }

  return { isLoading: false, tasks };
};

export default useGetTasks;

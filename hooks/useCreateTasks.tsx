import { useState, useRef } from "react";
import { push, set, ref, child, remove } from "firebase/database";
import { db } from "@/utils/auth";

interface Task {
  id: string;
  title: string;
  description: string;
  date: string;
  priority: string;
}

interface useCreateTaskResult {
  isLoading: boolean;
  tasks: Task[];
}

const useCreateTasks = () => {
  const [isLoading, setLoading] = useState(false);
  const error = useRef<string | null>(null);
  const success = useRef<string | null>(null);

  const pushTask = async (path: string, value: Task): Promise<void> => {
    try {
      const rootReference = ref(db);
      const dbPath = child(rootReference, path);
      const dbPush = push(dbPath);
      await set(dbPush, value);
      success.current = "true";
    } catch (pushError: any) {
      if (pushError instanceof Error) {
        error.current = pushError.message;
      }
    }
  };

  const removeTask = async (path: string): Promise<void> => {
    try {
      const rootReference = ref(db);
      const dbPath = child(rootReference, path);
      await remove(dbPath);
      success.current = "true";
    } catch (removeError: any) {
      if (removeError instanceof Error) {
        error.current = removeError.message;
      }
    }
  };

  return { pushTask, removeTask, isLoading, tasks: [] };
};

export default useCreateTasks;

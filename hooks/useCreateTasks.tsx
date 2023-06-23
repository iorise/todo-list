import { useState, useRef } from "react";
import { push, set, ref, child } from "firebase/database";
import { db } from "@/utils/auth";

interface Task {
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
    } catch (pushError) {
      if (pushError instanceof Error) {
        error.current = pushError.message;
      }
    }
  };
  return { pushTask, isLoading, tasks: [] };
};

export default useCreateTasks;

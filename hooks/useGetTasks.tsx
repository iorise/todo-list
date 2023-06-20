import { useRef, useState, useEffect} from "react"
import { getDatabase, ref, child, get } from "firebase/database";
import { firebaseApp } from "@/config/firebaseConfig";

interface Task {
    title: string
}

interface useGetTaskResult {
    isLoading: boolean
    tasks: Task[]
}

const useGetTasks = (): useGetTaskResult => {
    const [isLoading, setIsLoading] = useState(true)
    const [isLoaded, setIsLoaded] = useState(false)
    const snapshot = useRef<Task[] | null>(null);
    const error = useRef(null)

    const getTasks = async () => {
       
        const db = getDatabase(firebaseApp)
        const rootReference = ref(db)
        const dbGet = await get(child(rootReference, "tasks"))
        const dbTasks = dbGet.val()
        snapshot.current = dbTasks
        setIsLoading(false)
        setIsLoaded(true)
    }

    useEffect(() => {
        getTasks()
    }, [])

    if (isLoading) {
        return { isLoading: true, tasks: [] };
      }

    const tasks: Task[] = Object.values(snapshot || {})


  return { isLoading: false, tasks }
}

export default useGetTasks
import Image from "next/image";
import HeaderHome from "@/components/ui/header/header-home";
import TaskTable from "@/components/ui/table_task/table-task";
import { TaskManager } from '@/app/temp-data/TaskManager';

export default function Home() {
  const taskManager = new TaskManager();

  return (
    <>
      <HeaderHome />
      <body>
        <TaskTable tasks={taskManager.tasks} />
      </body>
    </>
  );
}

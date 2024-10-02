import Image from "next/image";
import HeaderHome from "@/components/ui/header/header-home";
import TaskTable from "@/components/ui/table_task/table-task";
import { TaskManager } from '@/app/temp-data/TaskManager';
import style from "@/app/styles/style.module.css"

export default function Home() {
  const taskManager = new TaskManager();

  return (
    <>
      <HeaderHome />
      <body className={style.home}>
        <TaskTable tasks={taskManager.tasks} />
      </body>
    </>
  );
}

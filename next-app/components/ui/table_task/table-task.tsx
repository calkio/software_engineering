import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Task, TaskManager } from "@/app/temp-data/TaskManager"
import ButtonEditTask from './button-edit-task'

interface TaskTableProps {
  tasks: Task[];
}

const TableTask: React.FC<TaskTableProps> = ({ tasks }) => {
  return (
    <Table>
      <TableCaption>Все задачи</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Название</TableHead>
          <TableHead>Описание</TableHead>
          <TableHead className="w-[100px]">Статус</TableHead>
          <TableHead className="text-center w-[200px]">Редактировать</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell>{task.title}</TableCell>
            <TableCell>{task.description}</TableCell>
            <TableCell>{task.status}</TableCell>
            <TableCell className="text-right">
            <ButtonEditTask task={task} />
        </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Всего задач</TableCell>
          <TableCell className="text-right">{tasks.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export default TableTask

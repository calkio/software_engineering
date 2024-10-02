"use client";

import React from 'react'
import { Task } from "@/app/temp-data/TaskManager"
import { Button } from '../button'

const editTask = (task: Task) => {
  console.log('Редактируем задачу:', task.id);
}

interface ButtonEditTaskProps {
  task: Task
}

const ButtonEditTask: React.FC<ButtonEditTaskProps> = ({ task }) => {
  return (
    <Button
      onClick={() => editTask(task)}>
      Редактировать
    </Button>
  )
}

export default ButtonEditTask

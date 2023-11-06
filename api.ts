import { ITask } from "./types/tasks";
import { ITaskPost } from "./types/tasks";
const baseUrl2 = 'http://localhost:3001';
const baseUrl = 'https://task-manager-backend-vo3i.onrender.com/api';

export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/tasks`, { cache: 'no-store' });
  const todos = await res.json();
  // return todos;
  return todos.data.tasks;
}

export const addTodo = async (todo: ITaskPost): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
  const newTodo = await res.json();
  return newTodo.data.task;
}

export const editTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks/${todo._id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
  const updatedTodo = await res.json();
  return updatedTodo;
}

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/tasks/${id}`, {
    method: 'DELETE',
  })
}
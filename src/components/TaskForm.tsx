import { useState } from 'react'
import type { FormEvent } from 'react'

type TaskFormProps = {
  onAddTask: (title: string) => void
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const [newTask, setNewTask] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onAddTask(newTask)
    setNewTask('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        className="task-form__input"
        type="text"
        placeholder="Add a new task..."
        aria-label="New task"
      />
      <button className="button button--primary" type="submit">
        Add Task
      </button>
    </form>
  )
}

export default TaskForm

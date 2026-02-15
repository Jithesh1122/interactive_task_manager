import type { Task } from '../App'

type TaskItemProps = {
  task: Task
  onToggleTask: (taskId: number) => void
  onDeleteTask: (taskId: number) => void
}

function TaskItem({ task, onToggleTask, onDeleteTask }: TaskItemProps) {
  return (
    <li className="task-item">
      <label className="task-item__label">
        <input
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
          type="checkbox"
          aria-label={`Toggle ${task.title}`}
        />
        <span className={task.completed ? 'task-item__title is-completed' : 'task-item__title'}>
          {task.title}
        </span>
      </label>
      <button className="button button--danger" onClick={() => onDeleteTask(task.id)} type="button">
        Delete
      </button>
    </li>
  )
}

export default TaskItem

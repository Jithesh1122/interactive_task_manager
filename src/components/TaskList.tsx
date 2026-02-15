import type { Task } from '../App'
import TaskItem from './TaskItem'

type TaskListProps = {
  tasks: Task[]
  onToggleTask: (taskId: number) => void
  onDeleteTask: (taskId: number) => void
}

function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
  if (!tasks.length) {
    return <p className="task-list__empty">No tasks yet. Add your first task above.</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggleTask={onToggleTask} onDeleteTask={onDeleteTask} />
      ))}
    </ul>
  )
}

export default TaskList

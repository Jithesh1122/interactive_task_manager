import { useEffect, useMemo, useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskSummary from './components/TaskSummary'
import ThemeToggle from './components/ThemeToggle'

type Theme = 'light' | 'dark'

export type Task = {
  id: number
  title: string
  completed: boolean
}

const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const initialTasks: Task[] = [
  { id: 1, title: 'Drink medicine', completed: false },
  { id: 2, title: 'Eat fruits', completed: true },
]

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const summary = useMemo(() => {
    const total = tasks.length
    const completed = tasks.filter((task) => task.completed).length
    return { total, completed, pending: total - completed }
  }, [tasks])

  const addTask = (title: string) => {
    const trimmedTitle = title.trim()
    if (!trimmedTitle) return

    setTasks((currentTasks) => [
      {
        id: Date.now(),
        title: trimmedTitle,
        completed: false,
      },
      ...currentTasks,
    ])
  }

  const deleteTask = (taskId: number) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId))
  }

  const toggleTaskCompletion = (taskId: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  return (
    <main className="dashboard">
      <section className="panel">
        <header className="panel__header">
          <div>
            <p className="eyebrow">Interactive Task Dashboard</p>
            <h1>Tasks</h1>
          </div>
          <ThemeToggle
            theme={theme}
            onToggle={() => setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))}
          />
        </header>

        <TaskForm onAddTask={addTask} />
        <TaskSummary total={summary.total} completed={summary.completed} pending={summary.pending} />
        <TaskList tasks={tasks} onToggleTask={toggleTaskCompletion} onDeleteTask={deleteTask} />
      </section>
    </main>
  )
}

export default App

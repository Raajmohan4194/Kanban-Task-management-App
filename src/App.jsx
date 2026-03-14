import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Board from './components/Board'
import TaskForm from './components/TaskForm'
import SearchBar from './components/SearchBar'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

const COLUMNS = ['Todo', 'In Progress', 'Done']
const STORAGE_KEY = 'kanban-tasks'
const THEME_KEY = 'kanban-theme'

function App() {
  const [tasks, setTasks] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterPriority, setFilterPriority] = useState('all')
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [editingTask, setEditingTask] = useState(null)

  // Load tasks from local storage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem(STORAGE_KEY)
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks))
      } catch (error) {
        console.error('Failed to parse saved tasks:', error)
      }
    }

    const savedTheme = localStorage.getItem(THEME_KEY)
    if (savedTheme) {
      setIsDarkTheme(JSON.parse(savedTheme))
    }
  }, [])

  // Save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  // Save theme preference to local storage
  useEffect(() => {
    localStorage.setItem(THEME_KEY, JSON.stringify(isDarkTheme))
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme'
  }, [isDarkTheme])

  const addTask = (taskData) => {
    const newTask = {
      id: uuidv4(),
      title: taskData.title,
      description: taskData.description,
      status: 'Todo',
      priority: taskData.priority || 'medium',
      color: taskData.color || '#3498db',
      createdAt: new Date().toISOString(),
    }
    setTasks([...tasks, newTask])
    setEditingTask(null)
  }

  const updateTask = (taskId, updatedData) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedData } : task
      )
    )
    setEditingTask(null)
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
    setEditingTask(null)
  }

  const moveTask = (taskId, newStatus) => {
    updateTask(taskId, { status: newStatus })
  }

  // Filter and search tasks
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesPriority =
      filterPriority === 'all' || task.priority === filterPriority

    return matchesSearch && matchesPriority
  })

  return (
    <div className={`app ${isDarkTheme ? 'dark' : 'light'}`}>
      <header className="app-header">
        <div className="header-content">
          <h1>📋 Kanban Task Manager</h1>
          <ThemeToggle isDark={isDarkTheme} onToggle={setIsDarkTheme} />
        </div>
      </header>

      <main className="app-main">
        <div className="sidebar">
          <TaskForm
            onAddTask={addTask}
            onUpdateTask={updateTask}
            editingTask={editingTask}
            onCancelEdit={() => setEditingTask(null)}
          />

          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            filterPriority={filterPriority}
            onFilterChange={setFilterPriority}
          />
        </div>

        <Board
          columns={COLUMNS}
          tasks={filteredTasks}
          onMoveTask={moveTask}
          onDeleteTask={deleteTask}
          onEditTask={setEditingTask}
        />
      </main>

      <footer className="app-footer">
        <p>Total Tasks: {tasks.length} | Completed: {tasks.filter(t => t.status === 'Done').length}</p>
      </footer>
    </div>
  )
}

export default App

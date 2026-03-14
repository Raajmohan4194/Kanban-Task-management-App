import { useState } from 'react'
import TaskCard from './TaskCard'
import './Column.css'

const COLUMNS = ['Todo', 'In Progress', 'Done']

function Column({ name, tasks, onMoveTask, onDeleteTask, onEditTask }) {
  const [draggedTask, setDraggedTask] = useState(null)

  const handleDragStart = (e, task) => {
    setDraggedTask(task)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDrop = (e) => {
    e.preventDefault()
    if (draggedTask) {
      onMoveTask(draggedTask.id, name)
      setDraggedTask(null)
    }
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
  }

  const getNextColumn = () => {
    const currentIndex = COLUMNS.indexOf(name)
    return currentIndex < COLUMNS.length - 1 ? COLUMNS[currentIndex + 1] : null
  }

  const getPreviousColumn = () => {
    const currentIndex = COLUMNS.indexOf(name)
    return currentIndex > 0 ? COLUMNS[currentIndex - 1] : null
  }

  return (
    <div
      className="column"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
    >
      <div className="column-header">
        <h2>{name}</h2>
        <span className="task-count">{tasks.length}</span>
      </div>

      <div className="column-content">
        {tasks.length === 0 ? (
          <div className="empty-state">No tasks yet</div>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDragStart={handleDragStart}
              onDelete={() => onDeleteTask(task.id)}
              onEdit={() => onEditTask(task)}
              onMove={(newStatus) => onMoveTask(task.id, newStatus)}
              nextColumn={getNextColumn()}
              previousColumn={getPreviousColumn()}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Column

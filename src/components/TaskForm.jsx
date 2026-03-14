import { useState, useEffect } from 'react'
import './TaskForm.css'

const PRIORITIES = ['low', 'medium', 'high']
const COLORS = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6']

function TaskForm({ onAddTask, onUpdateTask, editingTask, onCancelEdit }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('medium')
  const [color, setColor] = useState('#3498db')

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title)
      setDescription(editingTask.description)
      setPriority(editingTask.priority)
      setColor(editingTask.color)
    } else {
      resetForm()
    }
  }, [editingTask])

  const resetForm = () => {
    setTitle('')
    setDescription('')
    setPriority('medium')
    setColor('#3498db')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title.trim()) {
      alert('Please enter a task title')
      return
    }

    const taskData = {
      title: title.trim(),
      description: description.trim(),
      priority,
      color,
    }

    if (editingTask) {
      onUpdateTask(editingTask.id, taskData)
    } else {
      onAddTask(taskData)
    }

    resetForm()
  }

  const handleCancel = () => {
    resetForm()
    onCancelEdit()
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>{editingTask ? 'Edit Task' : 'Create New Task'}</h2>

      <div className="form-group">
        <label htmlFor="title">Task Title *</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title..."
          maxLength={100}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description..."
          rows={4}
          maxLength={300}
        />
        <small>{description.length}/300</small>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            {PRIORITIES.map((p) => (
              <option key={p} value={p}>
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="color">Color</label>
          <div className="color-picker">
            {COLORS.map((c) => (
              <button
                key={c}
                type="button"
                className={`color-option ${color === c ? 'selected' : ''}`}
                style={{ backgroundColor: c }}
                onClick={() => setColor(c)}
                title={`Color ${c}`}
                aria-label={`Select color ${c}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary">
          {editingTask ? 'Update Task' : 'Add Task'}
        </button>
        {editingTask && (
          <button
            type="button"
            className="btn-secondary"
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}

export default TaskForm

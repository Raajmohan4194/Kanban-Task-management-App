import './TaskCard.css'

function TaskCard({
  task,
  onDragStart,
  onDelete,
  onEdit,
  onMove,
  nextColumn,
  previousColumn,
}) {
  const getPriorityColor = (priority) => {
    const colors = {
      low: '#2ecc71',
      medium: '#f39c12',
      high: '#e74c3c',
    }
    return colors[priority] || '#3498db'
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <div
      className="task-card"
      draggable
      onDragStart={(e) => onDragStart(e, task)}
      style={{ borderLeftColor: getPriorityColor(task.priority) }}
    >
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
        <button
          className="delete-btn"
          onClick={onDelete}
          title="Delete task"
          aria-label="Delete task"
        >
          ✕
        </button>
      </div>

      {task.description && (
        <p className="task-description">{task.description}</p>
      )}

      <div className="task-footer">
        <div className="task-meta">
          <span
            className="priority-badge"
            style={{ backgroundColor: getPriorityColor(task.priority) }}
            title={`Priority: ${task.priority}`}
          >
            {task.priority.charAt(0).toUpperCase()}
          </span>
          <span className="task-date">{formatDate(task.createdAt)}</span>
        </div>

        <div className="task-actions">
          <button
            className="action-btn edit-btn"
            onClick={onEdit}
            title="Edit task"
            aria-label="Edit task"
          >
            ✎
          </button>

          {previousColumn && (
            <button
              className="action-btn move-btn"
              onClick={() => onMove(previousColumn)}
              title={`Move to ${previousColumn}`}
              aria-label={`Move to ${previousColumn}`}
            >
              ←
            </button>
          )}

          {nextColumn && (
            <button
              className="action-btn move-btn"
              onClick={() => onMove(nextColumn)}
              title={`Move to ${nextColumn}`}
              aria-label={`Move to ${nextColumn}`}
            >
              →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default TaskCard

import Column from './Column'
import './Board.css'

function Board({ columns, tasks, onMoveTask, onDeleteTask, onEditTask }) {
  return (
    <div className="board">
      {columns.map((columnName) => (
        <Column
          key={columnName}
          name={columnName}
          tasks={tasks.filter((task) => task.status === columnName)}
          onMoveTask={onMoveTask}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
          columns={columns}
        />
      ))}
    </div>
  )
}

export default Board

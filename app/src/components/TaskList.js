import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

const TaskList = ({ tasks, toggleTask }) => (
  <ul>
    {tasks.map(task => (
      <Task key={task.id} {...task} onClick={() => toggleTask(task.id)} />
    ))}
  </ul>
)

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTask: PropTypes.func.isRequired
}

export default TaskList
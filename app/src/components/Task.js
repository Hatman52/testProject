import React from 'react';
import PropTypes from 'prop-types'

const Task = ({ onClick, completed, text, dueDate }) => (
    <li
      onClick={() => {
        if (new Date() <= new Date(dueDate)) {
          onClick()
        }
      }}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        color: (new Date() <= new Date(dueDate)) ? 'black' : 'red'
      }}
    >
      {text}, due date:{dueDate}{(new Date() <= new Date(dueDate)) ? '' : ', this task is past it\'s due!'}
    </li>
  )
  
  Task.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }

export default Task;
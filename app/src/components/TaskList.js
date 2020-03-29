import React from 'react'
import Task from './Task'
import { toggleTask } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { VisibilityFilters } from '../actions'

const TaskList = () => {
  const getVisibleTasks = (tasks, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
          return tasks
        case VisibilityFilters.SHOW_COMPLETED:
          return tasks.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
          return tasks.filter(t => !t.completed)
        default:
          throw new Error('Unknown filter: ' + filter)
    }
  }

  const dispatch = useDispatch()
  const tasks = useSelector(state => getVisibleTasks(state.tasks, state.visibilityFilter));

  return (<ul>
    {tasks.map(task => (
      <Task key={task.id} {...task} onClick={() => dispatch(toggleTask(task.id))} />
    ))}
  </ul>)
}

export default TaskList
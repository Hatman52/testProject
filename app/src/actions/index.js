let nextTaskId = 0
export const addTask = task => ({
  type: 'ADD_TASK',
  id: nextTaskId++,
  text: task.text,
  date: task.date
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTask = id => ({
  type: 'TOGGLE_TASK',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
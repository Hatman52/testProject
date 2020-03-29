import React from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../actions'

const AddTask = () => {
  const dispatch = useDispatch()
  let textInput
  let dateInput

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!textInput.value.trim() || !dateInput.value.trim()) {
            return
          }
          dispatch(addTask({ text: textInput.value, date: dateInput.value }))
          textInput.value = ''
          dateInput.value = ''
        }}
      >
        <input ref={node => (textInput = node)} />
        <input ref={node => (dateInput = node)} type='date'/>
        <button type="submit">Add Task</button>
      </form>
    </div>
  )
}

export default AddTask
import React from 'react'
import { setVisibilityFilter } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

const Link = ({ filter, children }) => {
  const dispatch = useDispatch()
  const active = useSelector(state => filter === state.visibilityFilter);
  return (<button
    onClick={() => dispatch(setVisibilityFilter(filter))}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>)
}

export default Link
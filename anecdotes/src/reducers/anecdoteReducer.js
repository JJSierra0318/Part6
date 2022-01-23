import anecdoteService from '../services/anecdotes'
import { setNotification } from './notificationReducer'

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    case 'LIKE':
      const id = action.data.id
      const changedAnecdote = action.data
      return state.map(anecdote => anecdote.id === id ? changedAnecdote : anecdote)
    default:
      return state
  }
}

export const intializeAnecdotes = (anecdotes) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
    dispatch(setNotification(`new anecdote '${content}'`, 5))
  }
}

export const handleLike = anecdote => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.like(anecdote)
    dispatch({
      type: 'LIKE',
      data: updatedAnecdote
    })
    dispatch(setNotification(`you voted '${anecdote.content}'`, 5))
  }
}

export default anecdoteReducer
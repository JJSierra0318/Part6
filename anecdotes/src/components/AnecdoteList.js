import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleLike } from '../reducers/anecdoteReducer'

const compareVotes = (a, b) => {
  if (parseInt(a.votes) < parseInt(b.votes)) {
    return 1
  }
  if (parseInt(a.votes) > parseInt(b.votes)) {
    return -1
  }
  return 0
}

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      {anecdote.content}
      <div>
      has {anecdote.votes} <button onClick={ handleClick }>vote</button>
      </div> 
    </div>
  )
}

const Anecdotes = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort(compareVotes).map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => dispatch(handleLike(anecdote.id))}
        />)}
    </div>
  )
}

export default Anecdotes
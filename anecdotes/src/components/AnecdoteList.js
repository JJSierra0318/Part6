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
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  return (
    <div>
      {anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase())).sort(compareVotes).map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => {
            dispatch(handleLike(anecdote))
          }}
        />)}
    </div>
  )
}

export default Anecdotes
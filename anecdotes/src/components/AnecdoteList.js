import React from 'react'
import { connect } from 'react-redux'
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

const Anecdotes = (props) => {
  
  const anecdotes = props.anecdotes
  const filter = props.filter

  return (
    <div>
      {anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase())).sort(compareVotes).map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => props.handleLike(anecdote)}
        />)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  handleLike,
}

const connectedAnecdotes = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Anecdotes)

export default connectedAnecdotes
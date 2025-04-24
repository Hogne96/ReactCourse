import { useState } from 'react'

const Button = ({ handleClick, text}) => {
  return (
    <button onClick={handleClick}> {text} </button>
  )
}

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max)
}

const MostVotes = ({votes, anecdotes}) => {
  console.log('votes:', votes)
  const maxVotes = Math.max(...votes)
  console.log('maxVotes:', maxVotes)
  const indexOfMax = votes.indexOf(maxVotes)
  return (
    <div>
      <p>{anecdotes[indexOfMax]}</p>
      <p>Votes: {maxVotes}</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    '0. If it hurts, do it more often.',
    '1. Adding manpower to a late software project makes it later!',
    '2. The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    '3. Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    '4. Premature optimization is the root of all evil.',
    '5. Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    '6. Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    '7. The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const [selected, setSelected] = useState(0)

  const handleClickNext = ()  => {
    const randomNumber = getRandomNumber(anecdotes.length)
    console.log('randomNumber:', randomNumber)
    setSelected(randomNumber)
  }

  const handleClickVote = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {votes[selected]}</p>
      <Button handleClick={handleClickNext} text='Next anecdote'/>
      <Button handleClick={handleClickVote} text='Vote' />
      <h1>Anecdote with most votes</h1>
      <MostVotes votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App
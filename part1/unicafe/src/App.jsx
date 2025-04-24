import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}> {text} </button>
)}

const StaticLine = ({text, good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100
  if (text === 'good') {
    if (good === 0 && neutral === 0 && bad === 0) {
      return (
        <p>Not feedback given</p>
      )
    }
      return (
        <p>{good}</p>
      )
    }
  if (text === 'neutral') {
    if (good === 0 && neutral === 0 && bad === 0) {
      return (
        <p></p>
      )
    }
    return (
      <p>{neutral}</p>
    )
  }
  if (text === 'bad') {
    if (good === 0 && neutral === 0 && bad === 0) {
      return (
        <p></p>
      )
    }
    return (
      <p>{bad}</p>
    )
  }
  if (text === 'neutral') {
    if (neutral !== 0) {
      return (
        <p>{neutral}</p>
      )
    }
    return (
      <p></p>
    )
  }
  if (text === 'bad') {
    if (bad !== 0) {
      return (
        <p>{bad}</p>
      )
    }
    return (
      <p></p>
    )
  }
  if (text === 'all') {
    if (all === 0) {
      return (
        <p></p>
      )
    }
    return (
      <p>{all} </p>
    )
  }
  if (text === 'average') {
    if (good === 0 && neutral === 0 && bad === 0) {
      return (
        <p></p>
      )
    }
    if (all === 0) {
      return (
        <p>0</p>
      )
    }
    return (
      <p>{average} </p>
    )
  }
  if (text === 'positive') {
    if (good === 0 && neutral === 0 && bad === 0) {
      return (
        <p></p>
      )
    }
    if (all === 0) {
      return (
        <p>0</p>
      )
    }
    return (
      <p>{positive} % </p>
    )
  }
}

const handleMissingData = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>Not feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
          <tr>
            <td>Good:</td>
            <td>
              <StaticLine text="good" good={good} neutral={neutral} bad={bad}/>
            </td>
          </tr>
          <tr>
            <td>Neutral:</td>
            <td>
              <StaticLine text="neutral" good={good} neutral={neutral} bad={bad}/>
            </td>
          </tr>
          <tr>
            <td>Bad:</td>
            <td>
              <StaticLine text="bad" good={good} neutral={neutral} bad={bad}/></td>
          </tr>
          <tr>
            <td>All:</td>
            <td>
              <StaticLine text="all" good={good} neutral={neutral} bad={bad}/>
            </td>
          </tr>
          <tr>
            <td>Average:</td>
            <td>
              <StaticLine text="average" good={good} neutral={neutral} bad={bad}/>
            </td>
          </tr>
          <tr>
            <td>Positive:</td>
            <td>
              <StaticLine text="positive" good={good} neutral={neutral} bad={bad}/>
            </td>
          </tr>
        </tbody>
    </table>
    
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  console.log('App render:', { good, neutral, bad })

  const handleClickGood = () => { setGood(good + 1) }
  
  const handleClickNeutral = () => { setNeutral(neutral + 1) }

  const handleClickBad = () => { setBad(bad + 1) }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClickGood} text='good'/>
      <Button handleClick={handleClickNeutral} text='neutral'/>
      <Button handleClick={handleClickBad} text='bad'/>
    
      <h1>Statics</h1>
      {handleMissingData({good, neutral, bad})}
    </div>
  )
}

export default App
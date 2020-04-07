import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const avg = (good - bad)/all
  const percentPositive = (good/all) * 100

  if (all !== 0) {
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={all} />
            <Statistic text="avg" value={avg} />
            <Statistic text="positive" value={percentPositive + " %"} />
          </tbody>
        </table>
      </>
    )
  }

  return (
    <>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} handleClick={() => setGood(good + 1)}/>
      <Button text={"neutral"} handleClick={() =>setNeutral(neutral + 1)}/>
      <Button text={"bad"} handleClick={() =>setBad(bad + 1)}/>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

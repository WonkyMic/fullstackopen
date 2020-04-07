import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handler, text}) => <button onClick={handler}>{text}</button>

const Results = ({points, anecdotes}) => {
  if ( points.reduce((a, b) => a + b, 0) > 0 ) {
    const index = points.indexOf(Math.max(...points))
    return(
      <>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[index]}</p>
        <p>has {points[index]} votes</p>
      </>
    )
  }

  return(
    <>
      <h1>Anecdote with most votes</h1>
      <p>You must vote!</p>
    </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const randAnectodte = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const vote = () => {
    const copyPoints = [...points]
    copyPoints[selected] += 1
    setPoints(copyPoints)
  }

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <Button handler={vote} text={"vote"}/>
      <Button handler={randAnectodte} text={"next anecdote"}/>
      <Results points={points} anecdotes={anecdotes}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
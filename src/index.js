import React, { useState } from 'react';
import ReactDOM from 'react-dom'


const Button = ({ text, name, func }) => {
  return (
    <button onClick={() => func(name + 1)}>{text}</button>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <td>{text} {value}</td>
  )
}

const Statistics = ({ feedbacks }) => {
  const { good, neutral, bad, all } = feedbacks
  const calculateAverage = (good, bad, all) => {
    return (((good * 1) + (bad * -1)) / all).toFixed(1)
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <Statistic text='good' value={good} />
          </tr>
          <tr>
            <Statistic text='neutral' value={neutral} />
          </tr>
          <tr>
            <Statistic text='bad' value={bad} />
          </tr>
          <tr>
            <Statistic text='average' value={calculateAverage(good, bad, all)} />
          </tr>
          <tr>
            <Statistic text='positive' value={((good * 100) / all).toFixed(1) + ' %'} />
          </tr>
        </tbody>
      </table>
    </div>
  )

}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let all = good + neutral + bad

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button text='good' name={good} func={setGood} />
      <Button text='neutral' name={neutral} func={setNeutral} />
      <Button text='bad' name={bad} func={setBad} />
      <h2>Statistics</h2>
      {
        all ? <Statistics feedbacks={{ good, bad, neutral, all }} /> : <p>No feedback given</p>
      }
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

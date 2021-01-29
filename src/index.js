import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => (
  <h1>{course}</h1>
)

const Part = ({ part }) => {
  const { name, exercise } = part
  return (
    <p>{name} {exercise}</p>
  )
}
const Content = ({ parts }) => {
  const [one, two, three] = parts
  return (
    <div>
      <Part part={one} />
      <Part part={two} />
      <Part part={three} />

    </div>
  )
}
const Total = ({ parts }) => {
  console.log(parts)
  return (
    <p> Number of exercises {parts.length} </p>
  )
}


const App = () => {
  const course = {
    course: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

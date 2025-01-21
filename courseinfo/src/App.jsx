const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },

      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },

      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

//***************//
const Course = (props) => {
  const { course } = props
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts ={course.parts} />
    </>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = ({ parts }) => {
  
  return (
    <div>
      {
        parts.map(
          part => <Part key={part.id} part={part} />
        )
      }
    </div>
      
  )
}

const Total = ({parts}) => {
  
  const total = parts.reduce((sum, currentValue)=> sum+currentValue.exercises, 0)
  return (
    <p>Number of exercises {total}</p>
  )
}

const Part = ({part}) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}


export default App
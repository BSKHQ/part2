const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Content courses={courses} />
    </div>
  )
}

//***************//
const Content = ({ courses }) => {
  return (
    courses.map(
      course => <Course key={course.id} course={course} />
    )
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <CourseTitle title={course.name} />
      <CourseParts parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const CourseTitle = ({ title }) => {
  return (
    <h2>{title}</h2>
  )
}



const CourseParts = ({ parts }) => {
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

const Total = ({ parts }) => {
  const total = parts.reduce((sum, currentValue) => sum + currentValue.exercises, 0)
  return (
    <b>total of {total} exercises</b>
  )
}

const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}


export default App
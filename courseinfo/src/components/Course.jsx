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

export default Course
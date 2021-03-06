import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>{props.content.name} {props.content.exercises}</p>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part content={props.content[0]} />
            <Part content={props.content[1]} />
            <Part content={props.content[2]} />
        </div>
    )
}
            
            

const Total = (props) => {
    return (
        <div>
            <p>
            Yhteensä {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises} tehtävää
            </p>
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
            {
                name: 'Reacting perusteet',
                exercises: 10
            },
            {
                name: 'Tiedonvälitys propseilla',
                exercises: 7
            },
            {
                name: 'Komponenttien tila',
                exercises: 14
            },
        ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Content content={course.parts} />
            <Total total={course.parts} />
        </div>
    )
}



export default App

import React from 'react';


function List () {
    const persons =
    [
        {
        id:1,
        name:'Khadim',
        Age:  23,
        Skill: 'React'     
        },
        {
        id:2,
        name:'Ali',
        Age: 45,
        Skill: 'Angular'
        },
        {
        id: 2,
        name: 'Amjad',
        Age: 45,
        Skill: '.Net'
        }
    ]
    const personsList= persons.map( persons =>
    <h2>I am {persons.name} I am {persons.Age} years old. I know {persons.Skill}</h2>
    )

    return(
        <>
        <br/><h1>List of persons:</h1><br/>
        <div>{personsList}</div><br/><br/>
        </>
    )
    
}

export default List;
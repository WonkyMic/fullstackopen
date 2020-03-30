import React from 'react';

export function Total(props) {
    const {parts} = props    
    let numberOfExercies = 0
    parts.forEach(part => {
        numberOfExercies+=part.exercises
    })
    return (
        <p>
            Number of exercises {numberOfExercies}
        </p>
    )
}
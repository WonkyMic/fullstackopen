import React from 'react';
import {Part} from './Part'

export function Content(props) {
    const {parts} = props
    let elements=[]; 
    parts.forEach(part => {
        elements.push(
            <Part name={part.name} exercises={part.exercises}/>
        )
    });
    
    return (
        <>{elements}</>
    )
}


import React from 'react';

export function Part(props) {
    const {name, exercises} = props    
    return (
        <p>
            {name} {exercises}
        </p>
    )
}
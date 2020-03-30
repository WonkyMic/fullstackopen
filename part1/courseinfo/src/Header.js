import React from 'react';

export function Header(props) {
    const {course} = props    
    return (
        <h1>{course.name}</h1>
    )
}
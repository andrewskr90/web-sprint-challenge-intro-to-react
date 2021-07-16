import React from 'react'

// Write your Character component here

export default function Character(props) {
    return (
        <div>
            <h2>{props.data.name}</h2>
            <button onClick={() => props.open(props.key)}>Details</button>
        </div>
    )
}
import React from 'react'

export default function Details(props) {
    return (<div>
        <ul>
        <ls>Name: {props.currentCharacterData.name}</ls>
        </ul>
        <button onClick={props.close()}>Close</button>
    </div>)
}
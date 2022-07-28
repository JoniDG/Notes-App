import React from 'react'

export const Note = ({ title, body }) => {
    return (
        <li>
            <h3>{title}</h3>
            <small>
                {body}
            </small>
        </li>
    )
}

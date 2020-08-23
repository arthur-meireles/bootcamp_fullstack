import React from 'react'
import Card from './Card.js'

export default function Candidates({candidates}) {
    return (
        <div>
            {candidates.map(({ id, name, votes }) => {
					return (
						<Card id={id}>
							{name} ({votes})
						</Card>
					);
				})}
        </div>
    )
}

import React from 'react'
import { StyledCard } from './styles/Card.styled'

export default function Card({item: {id, title, body, image}}) {
  return (
    <StyledCard key={id} layout={id % 2 === 0 && 'row-reverse'}>
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>

        <div>
            <img src={`./images/${image}`}/>
        </div>
    </StyledCard>
  )
}

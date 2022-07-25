import React from 'react'
import styled from 'styled-components'

function Button( { color, title, txtColor, width, margin, event } ) {
  return (
    <Btn onClick={event} className='btn-h' style={{backgroundColor: color, color: txtColor, width: width, margin: margin}}>
            {title}
    </Btn>
  )
}

const Btn = styled.div`
    padding: 0.5rem 1rem;
    margin: 0.5rem 0rem;
    font-size: 1rem;
    display: inline;
    border-radius: 5px;
`

export default Button
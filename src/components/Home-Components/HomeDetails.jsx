import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import { useNavigate } from 'react-router-dom';

function HomeDetails( props ) {
    const navigate = useNavigate()

    const navigateToCatalog = (e) => {
        e.preventDefault();
        navigate('/catalog')
    }
  return (
    <Wrapper className='home-w'>
        <div className='home-text'>
            <span className='fir-name org'>
                FASHION 
            </span> <br />
            <span className='sec-name'>
                CHANGING <br /> ALWAYS 
            </span>
         </div>
            <Button event={navigateToCatalog} title="VIEW CATALOG" color="#DE9403" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    height: 100%;
    color: white;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default HomeDetails
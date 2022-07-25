import React  from 'react'
import styled from 'styled-components'
import { Spinner } from 'reactstrap';
import {  Link  } from 'react-router-dom'
import ErrorComp from '../ErrorComp';

function Products({data, isLoad, errorMessage}) {
    
  return (
    <div className='searchDiv'>
        {isLoad ? ( 
            <Spinner color="secondary">
                Loading...
            </Spinner>
        ) : (
            <div>
                {!!errorMessage && (
                    <p> <ErrorComp title={errorMessage} img="https://vectorforfree.com/wp-content/uploads/2020/07/Error-404.png" /></p>
                )} 
                {(data.length === 0 && !errorMessage) &&  (
                    <ErrorComp title="Nothing to show " img="https://vectorforfree.com/wp-content/uploads/2020/07/Error-404.png" />
                )}
                <Grid>
                { data.map((item) => {
                        return(
                            <Card key={item._id} className='crd'>
                                <Link to={'/product/'+ item.id}>
                                    <p>{item.data().title} </p>
                                    <Gradient className='gradient'></Gradient>
                                    <img src={item.data().image} alt="i" />
                                </Link>
                            </Card>
                        )})}
                </Grid>
            </div>
        )}
    </div>
  )
}

const Grid = styled.div`
    display: Grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
    padding: 1rem 3rem;
    grid-gap: 3rem
`

const Card = styled.div`
     ${'' /* flex-basis: 30% ; */}
      margin: 0rem 1rem;
      position: relative;
      height: 18rem;
      ${'' /* width: 100%; */}

     img{
        width: 100%;
        object-fit: cover;
        height: 18rem;
      }
      p{
          position: absolute;
          color: white; 
          z-index: 1;
          font-weight: 800;
          text-align: center;
          transform: translate(-40%, 0);
          left: 50%;
          bottom: 20%;
      }
`

const Gradient = styled.div `
    position: absolute;
    height: 100%;
    width: 100%;
    ${'' /* border-radius: 20px; */}
    background: #00000085;
`

export default Products
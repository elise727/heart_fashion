import React from 'react'
import { collection, getDocs,query, where} from "firebase/firestore";
import { Container, Col } from 'reactstrap'
import {  useEffect, useState  } from 'react'
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {  Splide, SplideSlide  } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

function PopularDesign() {
    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        let list = [];
        try {
            const q = await query(collection(db, "dress"), where("category", "array-contains", 'popular') );
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
            list.push(doc.data())
        });
        setItems(list)
        } 
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchItems()
    }, []);

  return (
    <div>
        <Container className=' mb-2 py-4'>
              <Col className='px-5 column'
              md="6" xs="12" xl="6">
               <div className='my-5'>
                   <h3 className='sec-name hr'>Popular Designs</h3>
               </div>
              </Col>
                <CardWrapper>
                    <Splide options={{
                        perPage: 1,
                        arrows: true,
                        pagination: undefined,
                        drag: 'free',
                    }}>

                {items.map((item) => {
                    return(
                        <SplideSlide key={item.index}>
                            <Card key={item.index} className='crd'>
                                <p>{item.title} </p>
                                <Gradient className='gradient'></Gradient>
                                <img src={item.image} alt="i" />
                            </Card>
                        </SplideSlide>
                    );

                })}
                    </Splide>
                </CardWrapper>
                <div className='py-5'>
              <Link to="/catalog" className='px-5 my-5 cNav'>
                  see catalog >>>
              </Link>
                </div>
      </Container>
    </div>
  )
}

const Card = styled.div`
      flex-basis: 30% ;
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

const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 0rem 2rem;

`
const Gradient = styled.div `
    position: absolute;
    height: 100%;
    width: 100%;
    ${'' /* border-radius: 20px; */}
    background: #00000085;
`

export default PopularDesign
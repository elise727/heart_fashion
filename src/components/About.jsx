import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Button from './Button'
import {  useParams, useNavigate  } from 'react-router-dom'
import abt from '../img/abt-img.png'

function About() {
    const params = useParams()
    const navigate = useNavigate()

    const navigateToAbout = (e) => {
        e.preventDefault();
        navigate('/about')
    }
  return (
    <div>
      <Container className='px-5 py-4'>
          <Row>
              <Col className='px-3 py-4 column'
              md="6" xs="12" xl="6">
               <div>
                   <h3 className='sec-name hr'>ABOUT US</h3>
                   <p className="para">
                   Heartfashion business model shrinks the gap between fashion creation and the customer, bringing customers closer than ever to the products they want.
                   </p>

                   {params.about === 'about' && (
                    <p className="para">
                    We acknowledge that “Unity in Diversity is God’s ultimate mystery in His Heavenly Game”. At HeartFashion, we use the wealth of Cultural diversity to come up with creative designs that speak to the World’s unity. We break the walls of differences helping our customers around the world to express their unique lifestyles through fashion and design.
We put your needs first and seek to give you a look that transcends your cultural niche whilst speaking to the ends of the earth.
HeartFashion is beyond a global clothing brand, we give each of our clients not just a look of elegance but unity, love, and excellence.
                    </p>
                   )}

                   {params.about !== 'about' && (
                   <Button event={navigateToAbout} title="read more" color="#212529" txtColor="white"  />
                   )}
               </div>
              </Col>
              <Col className='px-3 py-4 column'
              md="6" xs="12" xl="6">
                <img className='img-sz' src={abt} alt="" srcset="" />
              </Col>
          </Row>
      </Container>
    </div>
  )
}

export default About

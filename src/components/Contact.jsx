import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import Address from './Address'
import { Container, Row, Col } from 'reactstrap'
import ContactForm from './Form/ContactForm'

function Contact() {
  return (
      <div className='con-bg py-5'>
    <Container className='px-5 '>
        <Row className="row">
                <h2 className='sec-name hr'>CONTACT US</h2>
            <Col md="6" xl="6" className="div-holder px-4 py-3">
                <p className="phone-number my-0">
                    <BsFillTelephoneFill className="addressIcon"></BsFillTelephoneFill>
                    +1 (916) 580 1702
                </p>
                <p className="address">
                    <FaLocationArrow className="addressIcon"></FaLocationArrow>
                    3500 American River Dr, Sacramento, CA 95864
                </p>
                <Address className="address101" />
            </Col>
            <Col md="6" xl="6" className="div-holder px-4 py-3 jst">
                <ContactForm />
            </Col>
        </Row>
    </Container>
      </div>
  )
}

export default Contact
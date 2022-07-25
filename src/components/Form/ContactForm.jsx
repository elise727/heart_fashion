import { Form, 
         Row, 
         Col, 
         FormGroup,
         Input,
         Alert
        } from 'reactstrap' 
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


function ContactForm({msg}) {
    const [message, setMessage] = useState('');
    const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);
    const [values, setValues] = useState({
        user_name: '',
        user_email: '',
        message: ''
    })
    const handleChange = (e) => {
        setValues(value => ({
            ...value,
            [e.target.name]: e.target.value
        }))
    }

    const sendEmail = (e) => {
      e.preventDefault();
        emailjs.send('service_8gnhgfr', 'template_sv7ylmz', values, 'k-gFGvA4OlTTTNde4')
        .then((result) => {
            console.log(result.text);
            setMessage('Your Message was successfully sent')
            setValues({
                user_name: '',
                user_email: '',
                message: ''
            })
           console.log(values)
        }, (error) => {
            console.log(error.text);
        });
    };
  
  return (
      <Form onSubmit={sendEmail}>
      {!!message && (
        <Alert
        isOpen={visible}
         toggle={onDismiss}
          fade={false}
            color="success"
            >
            {message}
        </Alert>
      ) }
  <Row >
    <Col md={12} >
      <FormGroup>
        <Input
        required
          id="user_name"
          name="user_name"
          value={values.user_name}
          placeholder="Full Name"
          type="text"
        className='mx-1 my-2'
        onChange={handleChange}
        />
      </FormGroup>
    </Col>
    <Col>
      <FormGroup>
       
        <Input
          id="email"
          required
          name="user_email"
          value={values.user_email}
          placeholder="Email"
          type="email"
        className='mx-1 my-2'   
        onChange={handleChange}      
        />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup>
    <Input
      style={{minHeight: 'calc(8.0em + 0.75rem + 2px)'}}
      id="message"
      name="message"
      required
       value={values.message}
      placeholder='Message..'
      type="textarea"
        className='mx-1 my-2'
        onChange={handleChange}
    />
  </FormGroup>
  <div style={{width: '100%'}}>
    <button type='submit' className='btn c-btn btn-h mx-1 my-2'>
        submit
    </button>
  </div>
</Form>
  )
}

export default ContactForm
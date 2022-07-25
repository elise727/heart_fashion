import React, {useState, useEffect} from 'react'
import { db } from '../firebase';
import { collection, getDocs, where, query, } from "firebase/firestore";
import styled from 'styled-components'
import Head from './Head'
import { Container, Row, Col, Spinner } from 'reactstrap';
import { useParams } from 'react-router-dom';
import ErrorComp from './ErrorComp';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


function Item() {
    const [designs, setDesign] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [isMatch, setIsMatch] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const params = useParams()
    
    // const checkDesign =  () => {
    //         designs.filter(ite)
    //     }



    const fetchDesign = async () => {
        let dressList = []
        try {
            setIsLoading(true)
            
            const querySnapshot = await getDocs(collection(db, "dress"));
            querySnapshot.forEach((doc) => {
            dressList.push(doc)
            });
            setDesign(dressList)
            setIsLoading(false)
        } catch (err) {
            setIsLoading(false)
            console.log(err)
        }
    } 

    const search = (d) => {
        const result = d.filter(item => item.id === params.title)
         
                return result
          
    }

    useEffect(() => {
        fetchDesign()
        // checkDesign()
    }, [params.title])
  return (
    <div>
     {search(designs).map(item => item.data().title) && (
         <Head title={search(designs).map(item => item.data().title)} />
     )}
    <Container className='py-5 searchDiv itemCon'>
            {isLoading ? (
                 <Spinner color="secondary">
                    Loading...
                </Spinner> 
                ) : (
                    <div>
                        {search(designs).length === 0 && (
                            <div className='jst fl-col'>
                            <ErrorComp title="invalid Url please return to catalog page" img="https://vectorforfree.com/wp-content/uploads/2020/07/Error-404.png" />
                            <Link to={'/catalog'}>
                                Catalog
                            </Link>
                            </div>
                        )} 
                      
                        {search(designs).map(item => {
                            return(
                                <Row>
                                    <Col md="6" xs="12" xl="6" className='px-5 py-3'>
                                        <ImageHolder className="imageHolder">
                                        <Gradient className='gradient'></Gradient>
                                        <img src={item.data().image} alt="i" />
                                        </ImageHolder>
                                    </Col>
                                    <Col md="6" xs="12" xl="6" className='px-5 py-3 jst'>
                                        <div className='jst-col'>
                                            <h2 className='sec-name'>{item.data().title}</h2>
                                            <p className='para'>{item.data().description}</p>
                                        </div>
                                    </Col>
                                </Row>
                            )
                        })}
                    </div>
                    )}
    </Container>
    {isLoading ? '' : <Footer />}
    
    </div>
  )
}

const ImageHolder = styled.div `
    position: relative;

    img{
        width: 100%;
        object-fit: contain;
        height: 27rem;
    }
`

const Gradient = styled.div `
    position: absolute;
    height: 100%;
    width: 100%;
    ${'' /* border-radius: 20px; */}
    background: #65656514;
`

export default Item
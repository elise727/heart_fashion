import React , {  useEffect, useState  }  from 'react'
import {  db  } from '../firebase'
import { collection,  getDocs,} from "firebase/firestore";
import Head from '../components/Head'
import Search from '../components/SearchInput'
import Products from '../components/products/Products'
import Footer from '../components/Footer'
import Pagniation from '../components/Pagniation';

function Catalog() {
    const [designs, setDesign] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage ] = useState(1);
    const [postsPerPage] = useState(8)
    const [error, setError] = useState('')
    const fetchDesign = async () => {
        let dressList = []
        try {
            setIsLoading(true)
            console.log('loading')
            const docSnap = await getDocs(collection(db, "dress"));
            docSnap.forEach((doc) => {
                console.log("docSnap", doc.data())
                dressList.push(doc)
            });
            setDesign(dressList)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setError('Something went wrong!')
            console.log("No such document!", error)
        }
    } 
   

    

    useEffect(() => {
        fetchDesign()
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = designs.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => {
        setIsLoading(true)
        setCurrentPage(pageNumber)
        setIsLoading(false)
    } 

  return (

    <div>
        <Head title={'CATALOG'} />
        <Search />
        <Products data={currentPost} isLoad={isLoading} errorMessage={error} />
        <Pagniation 
        totalPost={designs.length} 
        postsPerPage={postsPerPage} 
        paginate={paginate} 
        />

        <Footer />
    </div>
    
  )
}



export default Catalog
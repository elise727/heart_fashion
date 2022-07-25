import React, {  useEffect, useState  } from 'react'
import Head from './Head'
import Products from './products/Products';
import {  db  } from '../firebase'
import { useParams } from 'react-router-dom';
import { collection,  getDocs,} from "firebase/firestore";
import SearchInput from './SearchInput';
import Footer from './Footer';
import Pagniation from './Pagniation';

function SearchedItems() {
    const [designs, setDesign] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage ] = useState(1);
    const [postsPerPage] = useState(8)
    const params = useParams()
    
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
        return d.filter(item => item.data().title.toLowerCase().includes(params.search.toLocaleLowerCase())) 
        
    }

    useEffect(() => {
        fetchDesign()
    }, [params.search])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = search(designs).slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className=''>
    <Head title={params.search} />
    <SearchInput />
    <Products errorMessage={errorMessage} data={currentPost} isLoad={isLoading} />
    {isLoading ? '' : 
    <div>
    <Pagniation 
        totalPost={designs.length} 
        postsPerPage={postsPerPage} 
        paginate={paginate} 
        />
     <Footer />
    </div>
     }
    </div>
  )
}

export default SearchedItems
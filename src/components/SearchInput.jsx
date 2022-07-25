import React, {  useEffect, useState  } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
    const [searchValue, setSearchValue ] = useState('')
    const navigate = useNavigate()

    const buttonSearch = (e) => {
        e.preventDefault();
        if(!searchValue){
            console.log('search Input empty')
            navigate('/catalog')
        }else{
            navigate('/searched/'+ searchValue)
        }
        // search(designs)
    }

    useEffect(() => {
        // console.log(searchValue)
    }, [])
  return (
     <form className="SearchForm" onSubmit={buttonSearch}>
       <input type="text" onChange={(e) => {setSearchValue(e.target.value)}} className="searchInput" placeholder="search products..." name="searchedItem" />
       <button type="submit">
        <FiSearch />
       </button>
     </form>
  )
}

export default SearchInput

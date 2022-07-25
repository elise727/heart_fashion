import React, {useState} from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
function Pagniation({ postsPerPage, totalPost, paginate }) {
    const pageNumber = []
    const [isLoading, setIsLoading] = useState(false)

    for(let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++){
        // setIsLoading(true)
        pageNumber.push(i)
        // setIsLoading(false)
    }

   
  return (
    <nav>
        <Pagination className="pagination jst m-5">
            {pageNumber.map(number => (
                <PaginationItem className='page-item ' key={number}>
                    <PaginationLink   onClick={() => paginate(number)} className='page-link act'>{number}
                    </PaginationLink>
                </PaginationItem>
            ))}
        </Pagination>
    </nav>
  )
}

export default Pagniation
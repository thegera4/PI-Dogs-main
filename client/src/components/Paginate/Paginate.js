import React from 'react'
import './Paginate.css'

const Paginate = ({ currentPage, paginate, allDogs,dogsPerPage }) => {
  const pages = [];
  const PREV_NEXT= Math.ceil(allDogs/dogsPerPage);
    
  for(let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++) {
    pages.push(i);
  }

  const handlePrevClick = ()=>{
    if(currentPage > 1){
      paginate(currentPage - 1);
    }
  }
  const handleNextClick = ()=>{
    if(currentPage < PREV_NEXT){
      paginate(currentPage + 1);
    } 
  }
  const handlePageClick = (page)=>{
    paginate(page);
  }
 
  return (
    <nav>
      <ul className="pagination"> 
        <li className="page-item">
          <button 
            className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={handlePrevClick} 
            disabled={currentPage === pages[0]}>
              Prev
          </button>
        </li>
        {pages.map(page => (
          <li key={page} className="page-item">
            <button
              className={`page-link ${currentPage === page ? 'active' : ''}`}
              onClick={() => handlePageClick(page)}>
                {page}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button 
            className={`next ${currentPage === PREV_NEXT ? 'disabled' : ''}`}
            onClick={handleNextClick} 
            disabled={currentPage === pages[pages.length-1]}>
              Next
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Paginate
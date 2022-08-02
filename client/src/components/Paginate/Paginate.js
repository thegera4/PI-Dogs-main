import React from 'react'
import './Paginate.css'

const Paginate = (props) => {
  const { currentPage, maxPageLimit, minPageLimit, allDogs,dogsPerPage} = props;
  const pages = [];
  let pageIncrementEllipses = null;
  let pageDecremenEllipses = null;
  const PREV_NEXT= Math.ceil(allDogs/dogsPerPage);
    
  for(let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++) {
    pages.push(i);
  }

  const handlePrevClick = ()=>{
    props.onPrevClick();
  }
  const handleNextClick = ()=>{
    props.onNextClick();
  }
  const handlePageClick = (e)=>{
    props.onPageChange(Number(e.target.id));
  }
  const pageNumbers = pages.map(page => {
    if(page <= maxPageLimit  && page > minPageLimit) {
      return(
        <li key={page} id={page} onClick={handlePageClick} 
            className={`${currentPage===page ? 'active' : null} numbers`}>
            {page}
        </li>
      );
    }else{
      return null;
    }
  });
  if(pages.length > maxPageLimit){
    pageIncrementEllipses = <li className='dots'>&hellip;</li>
  }
  if(minPageLimit >=1){
    pageDecremenEllipses = <li className='dots'>&hellip;</li> 
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
        {pageDecremenEllipses}
        {pageNumbers}
        {pageIncrementEllipses}
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
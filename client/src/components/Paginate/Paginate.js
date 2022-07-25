import React from 'react'
import './Paginate.css'

function Paginate({dogsPerPage, allDogs, paginate, currentPage}) {
  const pageNumbers = [];
  for(let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++) {
    pageNumbers.push(i);
  }
  return(
    <nav>
      <ul className="pagination">
        {pageNumbers?.map(number => {
          return(
            <li key={number} className="page-item">
              <button 
                onClick={() => paginate(number)} 
                className={`page-link ${currentPage === number ? 'active' : null}`}>
                  {number}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Paginate
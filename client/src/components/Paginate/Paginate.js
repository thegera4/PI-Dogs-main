import React from 'react'
import './Paginate.css'

function Paginate({dogsPerPage, allDogs, paginate, currentPage}) {
  const pageNumbers = [];
  const maxPageLimit = 5;
  const minPageLimit = 0;

  for(let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  const arrays = Math.ceil(pageNumbers.length / 5)
 


  /*const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / maxPageLimit) * maxPageLimit;
    return new Array(maxPageLimit).fill().map((_, idx) => start + idx + 1);
  };*/

  console.log(arrays)
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
        {/*
          pageNumbers.map(number => {
            if(number <= maxPageLimit && number > minPageLimit){
              return(
                <li key={number} className="page-item">
                  <button 
                    onClick={() => paginate(number)} 
                    className={`page-link ${currentPage === number ? 'active' : null}`}>
                      {number}
                  </button>
                </li>
              )
            } else{
              return null;
            }
        }
        )*/}
        {/*getPaginationGroup().map((number) => (
        <li key={number} className="page-item">
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`page-link ${currentPage === number ? 'active' : null}`}>
            <span>{number}</span>
          </button>
        </li>
      ))*/}
      </ul>
    </nav>
  )
}

export default Paginate
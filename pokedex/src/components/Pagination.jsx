import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import './css/pagination.css'

const Pagination = ({ rightLastPage, leftLastPage, right, left, pages, totalPages }) => {
  return (
    <div className='flex-top'>
      <h1>Pokedex</h1>
      <div className='pagination-container'>
        <button onClick={leftLastPage}>
          <FontAwesomeIcon icon={faAngleDoubleLeft} />
        </button>
        <button onClick={left}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <div>{pages} de {totalPages}</div>
        <button onClick={right}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
        <button onClick={rightLastPage}>
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </button>
      </div>
    </div>
  )
}

export default Pagination

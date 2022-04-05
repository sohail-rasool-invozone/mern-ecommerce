import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating d-flex align-items-center justify-content-between mb-2'>
      <div>
        <span>
          {value >= 1 ? (
            <FaStar style={{ color: `${color}` }} />
          ) : value >= 0.5 ? (
            <FaStarHalfAlt style={{ color: `${color}` }} />
          ) : (
            <FaRegStar style={{ color: `${color}` }} />
          )}
        </span>
        <span>
          {value >= 2 ? (
            <FaStar style={{ color: `${color}` }} />
          ) : value >= 1.5 ? (
            <FaStarHalfAlt style={{ color: `${color}` }} />
          ) : (
            <FaRegStar style={{ color: `${color}` }} />
          )}
        </span>
        <span>
          {value >= 3 ? (
            <FaStar style={{ color: `${color}` }} />
          ) : value >= 2.5 ? (
            <FaStarHalfAlt style={{ color: `${color}` }} />
          ) : (
            <FaRegStar style={{ color: `${color}` }} />
          )}
        </span>
        <span>
          {value >= 4 ? (
            <FaStar style={{ color: `${color}` }} />
          ) : value >= 3.5 ? (
            <FaStarHalfAlt style={{ color: `${color}` }} />
          ) : (
            <FaRegStar style={{ color: `${color}` }} />
          )}
        </span>
        <span>
          {value >= 5 ? (
            <FaStar style={{ color: `${color}` }} />
          ) : value >= 4.5 ? (
            <FaStarHalfAlt style={{ color: `${color}` }} />
          ) : (
            <FaRegStar style={{ color: `${color}` }} />
          )}
        </span>
      </div>
      {text && <span>{text}</span>}
    </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825',
}

export default Rating

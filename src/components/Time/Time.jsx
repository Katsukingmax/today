import React from 'react'
import './Time.css'
import nextButtonImg from '../../assets/nextbutton.PNG'
import { useNavigate } from 'react-router-dom'
const Time = () => {
  const navigate = useNavigate();

  const goToInterestPage = () => {
    navigate('/interest');
  }

  return (
    <div>
      <div>
        <h1>How much time do you have?</h1>
        <input
          type="radio"
          name="time"
          value="lessThanAnHour"
        />
        Less than 1 hour
        <input
          type="radio"
          name="time"
          value="twoToFive"
        />
        Between 2 hours and 5 hours

        <input
          type="radio"
          name="time"
          value="fiveToEight"
        />
        Between 5 hours and 8 hours

        <input
          type="radio"
          name="time"
          value="moreThanEight"
        />
        More than 8 hours
      </div>
      <button onClick={goToInterestPage} id='btn'>
        <img src={nextButtonImg} alt="Go to next page" id='btn' />
      </button>
    </div>
  )
}

export default Time

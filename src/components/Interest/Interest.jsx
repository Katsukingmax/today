import React from 'react'
import './Interest'

const Interest = () => {
  const [interest, setInterest]=useState('');
  const handleChange=(e)=>{
    setInterest(e.target.value);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();

    const interestData{
      interest: interest
    };

    localStorage.setItem('interestData', JSON.stringify(interestData));

    console.log('Interest data stored in local storage: ', intereData);
    alert('Your interest "${feeling}" has been saved locally!');
  };
  
  return (
    <div>
      <h1>What are you interested in</h1>
      <form onSubmit={handleSubmit}></>
      
    </div>
  )
}

export default Interest

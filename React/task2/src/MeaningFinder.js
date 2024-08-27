import React, { useState } from 'react';

const MeaningFinder = () => {
  const [name, setName] = useState('');

  
 
  const validate=()=>{
    if (name === ""){
        alert("Please enter your name!!")
    }
    else{
        btnclick();
    }
  }
  
    
    const btnclick = async () => {
        
      const response = await fetch(`https://api.agify.io/?name=${name}`);
      const data = await response.json();
      console.log(data); 
  };
  const input = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Meaning Finder</h1>
      <input type="text" value={name} onChange={input} placeholder="Enter a name"
        style={{ padding: '10px', width: '300px', fontSize: '16px' }}/>
      <button onClick={validate} style={{ padding: '10px 20px', marginLeft: '10px', fontSize: '16px' ,backgroundColor: 'pink'}}>
        Find </button>
    </div>
  );
};

export default MeaningFinder;

import './App.css';
import Home from './Home';
import {useState} from 'react';

function App() {
  let name = "Sharmili"
  let e_mail = "itssharmili@gmail.com"
  const[email,setEmail] = useState('');
  const[address,setAddress] = useState('');
  const validate=()=>{
    if(email == ""){
      alert("Email is empty");
    }else if(address == ""){
      alert("Address is empty");
    }else{
      alert("Everything is fine");
    }
  }
  return (
    <div className="App">
      <h1>This is React App</h1>
      <h1>Name: {name} <br></br> Email: {e_mail}</h1>
      <Home/>
      <h1>Email</h1>
      <input type='text' onChange={(e)=>setEmail(e.target.value)}></input><br></br>
      {email}<br></br>
      <h1>Address</h1>
      <input type='text' onChange={(e)=>setAddress(e.target.value)}></input><br></br>
      {address}
      <br></br>
      <button onClick={validate}>Touch Me</button>
    </div>
  );
}

export default App;

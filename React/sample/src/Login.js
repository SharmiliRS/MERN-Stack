import {useState} from 'react';
export default function Login(){
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const validate=()=>{
        if(email == ""){
          alert("Email is empty");
        }else if(password == ""){
          alert("Password is empty");
        }else{
          alert("Everything is fine");
          postApi();
        }
      }
      async function postApi(){
        let data = {
            "email":email,
            "password":password
        };
            let res = await fetch("https://reqres.in/api/login",
            {"method":"POST",body: JSON.stringify(data),headers:{"content-type":"application/json"}
        });
            let userdata = await res.json();
            if(res.ok){
                alert("you r crt");
            }else{
                alert("you r wrong");
            }
            console.log(userdata);
            
    }
    
   
    
    return(
    <div>
        <h1>Login</h1>
    <p>Email</p>
    <input type="text" onChange={(e)=>setEmail(e.target.value)}></input>
    <p>Password</p>
    <input type="password" onChange={(e)=>setPassword(e.target.value)}></input><br></br>
    <button onClick={validate}>Submit</button>
    </div>
    )
    
}

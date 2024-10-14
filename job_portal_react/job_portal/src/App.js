import './App.css';
import { useRef, useState } from 'react';
function App() {
  const [jobList,setJobList] = useState([]);
  const [id,setId] = useState([]);
  const cnameRef = useRef();
  const nameRef = useRef();
  const reqRef = useRef();

  const getData = async()=>{
        let res = await fetch("http://localhost:8080/listJob",{method : "GET"});
        let json = await res.json();
        console.log(json);
        setJobList(json);
  }
 // update
 const createJob = async() => {
  let data = {
    "name": nameRef.current.value,
    "company_name": cnameRef.current.value,
    "requirements" : cnameRef.current.value,
  }
  let res = await fetch("http://localhost:8080/createJob",{method:"POST", body:JSON.stringify(data), headers:{"content-type":"application/json"}});
  let json = await res.json();
  console.log(json);
  getData();
  
}

const deleteJob=async(id)=>{
let res = await fetch("http://localhost:8080/deleteJob?id=" + id,{"method" : "delete"})
if(res.ok){
  alert("delete")
}else{
  alert("Error While deleting")
}
}
const  updateJob=async()=>{
  let data = {
    "id":id,
    "name": nameRef.current.value,
    "company_name": cnameRef.current.value,
    "requirements": reqRef.current.value
  }
  let res = await fetch("http://localhost:8080/updateJob",{method:"POST",
    body:JSON.stringify(data), 
    headers:{"content-type":"application/json"}});
 let json = await res.json();
 console.log(json);
 getData();
}
  const loadDataForUpdate=(id)=>{
    let matchJob = jobList.filter((j)=>id===j._id)
    console.log(matchJob);
    setId(id);
    nameRef.current.value = matchJob[0].name;
    cnameRef.current.value = matchJob[0].company_name;
    reqRef.current.value = matchJob[0].requirements;
 
  }
  
return (
  <div className="App"><div>
    <button onClick={getData}>get Job list</button>

  </div>
  <div>
    {
      jobList.map((obj,index)=>{
        return(<div>
          <h1 key={index}>{obj.name}</h1>
          <button onClick={()=>deleteJob(obj._id)}>delete</button>
          <button onClick={()=>loadDataForUpdate(obj._id)}>Retrieve</button>

          </div>
        )
      })
}
  </div>
  <div>
    <h1>Create Form</h1>
    <div><p>Name</p> <input type='name' ref={nameRef}></input></div>
    <div><p>Company Name </p><input type='name' ref={cnameRef}></input></div>
    <div><p>Requirements</p> <input type='name' ref={reqRef}></input></div>
    <div><button onClick={createJob}>Click</button></div>
    <div><button onClick={updateJob}>Update</button></div>
  </div>
  </div>
);
}

export default App;
  

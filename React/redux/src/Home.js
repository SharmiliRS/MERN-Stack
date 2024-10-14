import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { useState } from "react";


function Home(){
    const counterVal = useSelector((state) => state.counter);
    const [status,setStatus] = useState(true);
    
    const dispatch = useDispatch();
    const add=()=>{
        dispatch({
            type:"add"
        })
    }
    const sub=()=>{
        dispatch({
            type:"sub"
        })
    }
    const text=()=>{
        dispatch({
            type:"saveDetails",
            data:{name:"Sharmili",email:"rssharmili@gmail.com"}
        })
    }
    return(
        <div>
            <Header sample = "Sharmi" currentpage = "home"/>
            <h1>This is a homepage</h1>
            <h2>From Redux {counterVal}</h2>

            <input type = "button" value="add" onClick={add}></input>
            <input type = "button" value="sub" onClick={sub}></input>
            <input type = "button" value="text" onClick={text}></input>
            {
                (status)?<p className="para">Heyyy guysss</p>:null
            }
        </div>
        
    )
};
export default Home;
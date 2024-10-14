import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";


function About(){
    const counterVal = useSelector((state) => state.counter);
    const myDetails = useSelector((state => state.myDetails));
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
    return(
        <div>
            <Header/>

            <h1>This is a About</h1>
            <h2>From Redux {counterVal}</h2>
            <h2>{myDetails.name}</h2>
            <input type = "button" value="add" onClick={add}></input>
            <input type = "button" value="sub" onClick={sub}></input>
        </div>
        
    )
};
export default About;
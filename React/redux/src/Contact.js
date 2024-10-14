import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";

function Contact(){
    const counterVal = useSelector((state) => state.counter);
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
        <h1>This is a contact</h1>
        <h2>From Redux {counterVal}</h2>
            <input type = "button" value="add" onClick={add}></input>
            <input type = "button" value="sub" onClick={sub}></input>
        </div>
    )
};
export default Contact;
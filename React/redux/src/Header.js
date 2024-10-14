import { NavLink } from "react-router-dom";
function Header(props){
    return(
        /*<ul
        >
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>*/
        <nav className="link">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <p>{props.sample}</p>
        </nav>
            

    ) 
}
export default Header;
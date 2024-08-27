import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const config = createBrowserRouter([
  {path:"/home",element:<Home/>},
  {path:"/about",element:<About/>}
]);

function App() {
  // fetching outside url
  const getUser = async ()=>{
    let res = await fetch('https://reqres.in/api/users');
    let serverRes = await res.json();
    console.log(serverRes['datawer']);
  }
  return (
    <div>
     {/*<RouterProvider config = {config}/>*/}
      <Home/>
      <About/>
      <button onClick={getUser}>Click to get user</button>
    </div>
  );
}

export default App;
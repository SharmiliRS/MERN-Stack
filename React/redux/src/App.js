
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Provider} from 'react-redux';
import { myStore } from './redux/config';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Web from './Web';

let routerConfig = createBrowserRouter([
  {"path" : "/","element":<Header/>},
  {"path" : "/home","element":<Home/>},
  {"path" : "/about","element":<About/>},
  {"path" : "/contact","element":<Contact/>},
  {"path" : "/web","element":<Web/>},
])
function App() {
  return (
    <Provider store = {myStore}>
    <div className="App">
      <RouterProvider router = {routerConfig}/>
    </div>
    </Provider>
  );
}

export default App;

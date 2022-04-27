import './App.css';
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom"
import Login from './pages/Login';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}>Login</Route>
      <Route path='home' element={<Home/>}>Home</Route>
      <Route path='*' element={<PageNotFound/>}>PageNotFound</Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;




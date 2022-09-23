// import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Singup } from './pages/Singup';
import {Routes,Route} from "react-router-dom";
import { Private } from './components/Private';
import { Tasks } from './pages/Tasks';
import Navbar2 from "./components/Navbar2";


function App() {
  return (
    <div className="App">
      <Navbar2/>
      {/* <Navbar/> */}
      <Routes>
       
        <Route path="/home" element={<Private><Home/></Private>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Singup/>}></Route>
        <Route path='/task' element={<Private><Tasks /></Private>}></Route>
        <Route path="*" element={<h2>page not found</h2>}></Route>

      </Routes>

    </div>
  );
}

export default App;

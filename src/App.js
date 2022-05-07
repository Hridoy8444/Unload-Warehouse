import logo from './logo.svg';
import './App.css';
import Header from './Page/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home/Home';
import Login from './Page/Login/Login';
import SignUp from './Page/Login/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;

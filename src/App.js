import logo from './logo.svg';
import './App.css';
import Header from './Page/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home/Home';
import Login from './Page/Login/Login';
import SignUp from './Page/Login/SignUp/SignUp';
import ItemDetail from './Page/ItemDetail/ItemDetail';
import RequireAuth from './Page/RequireAuth.js/RequireAuth';
import ManageItem from './Page/ManageItem/ManageItem';
import AddItem from './Page/AddItem/AddItem';
import Footer from './Page/Shared/Footer/Footer';
import MyItem from './Page/MyItem/MyItem';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/manage' element={<RequireAuth>
          <ManageItem></ManageItem>
        </RequireAuth>}></Route>
        <Route path='/item/:itemId' element={<RequireAuth>
          <ItemDetail></ItemDetail>
        </RequireAuth>}></Route>
        <Route path='/additem' element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='/myitem' element={<RequireAuth>
          <MyItem></MyItem>
        </RequireAuth>}></Route>
        
      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;

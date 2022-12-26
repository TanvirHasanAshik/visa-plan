import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './component/CheckOut/CheckOut';
import CountryDetails from './component/CountryDetails/CountryDetails';
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login';
import RequireAuth from './component/RequireAuth/RequireAuth';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';
import Nav from './component/Shared/Header/Nav/Nav';

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='countryDetails/:countryId' element={<CountryDetails></CountryDetails>}></Route>
        <Route path='/serviceDetails/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/enjoyService/checkOut/:serviceName' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;

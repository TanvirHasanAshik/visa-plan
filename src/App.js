import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home/Home';
import Nav from './component/Shared/Header/Nav/Nav';

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;

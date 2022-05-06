import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './containers/Blogs/Blogs';
import Home from './containers/Home/Home/Home';
import Footer from './containers/Shared/Footer/Footer';
import Header from './containers/Shared/Header/Header';
function App() {
  return (
    <div className='bg-success'>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

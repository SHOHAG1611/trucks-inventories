import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './containers/Blogs/Blogs';
// import Details from './containers/Details/Details';
import Home from './containers/Home/Home/Home';
import Login from './containers/Login/Login/Login';
import Register from './containers/Login/Register/Register';
import ManageInventories from './containers/ManageInventories/ManageInventories';
import Footer from './containers/Shared/Footer/Footer';
import Header from './containers/Shared/Header/Header';
import PageNotFound from './containers/Shared/PageNotFound/PageNotFound';
import AddItem from './containers/AddItem/AddItem';
import MyItems from './containers/MyItems/MyItems';
import RequireAuth from './containers/Login/RequireAuth/RequireAuth';
import ItemDeteils from './containers/ItemDeteils/ItemDeteils';
function App() {
  return (
    <div style={{backgroundColor:'#778899'}}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='truck/:detailId' element={
          <RequireAuth>
            <ItemDeteils></ItemDeteils>
          </RequireAuth>
        }></Route>
        <Route path='manageInventories' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>}>
        </Route>
        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>}>
        </Route>
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

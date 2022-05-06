import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './containers/Shared/Footer/Footer';
import Header from './containers/Shared/Header/Header';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

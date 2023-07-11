import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Detail from './components/detail';
import Product from './components/product';
import User from './components/user';
import Wrong from './components/wrong';
function App() {
  return (
   <>
      <div className='App'>
        <Home/>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/detail' element={<Detail/>}>
            <Route path='user' element={<User/>}/>
            <Route path='product' element={<Product/>}/>
          </Route>
          <Route path='*' element={<Wrong/>}/>
        </Routes>

      </div>
   </>
  );
}

export default App;

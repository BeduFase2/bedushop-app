import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import NotFound from './components/NotFound';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ProductForm from './components/ProductForm';
import Products from './components/Products';
import Reviews from './components/Reviews';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<SignIn />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/product" element={<ProductForm />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/reviews/:id" element={<Reviews />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
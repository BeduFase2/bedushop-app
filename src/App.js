import { Routes, Route } from 'react-router-dom';
import './App.css';

import SignIn from './components/SignIn';
import Home from './components/Home';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="wrapper">
      <div className="card frame">
        <Routes>
          <Route exact path="/login" element={<SignIn />}></Route>
          <Route exact path="/register" element={<SignUp />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
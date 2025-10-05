
import './App.css';
 import Landing from './pges/Landing';
 import { isMobile } from "react-device-detect";
import Login from './pges/Login';
import {Routes, Route} from 'react-router-dom';
 import Splash from './pges/Splash';
function App() {
  return (
   <>
    {/* {isMobile ? <Login /> : <Landing />} */}
    <Routes>
      <Route path="/" element={isMobile ? <Splash /> : <Landing />} />
      <Route path="/login" element={<Login />} />
    </Routes>
   </>
  );
}

export default App;

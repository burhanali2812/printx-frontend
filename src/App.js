
import './App.css';
 import Landing from './pges/Landing';
 import { isMobile } from "react-device-detect";
import Login from './pges/Login';
import {Routes, Route} from 'react-router-dom';
 import Splash from './pges/Splash';
import SignUp from './pges/SignUp';
import MobileNav from './component/MobileNav';
function App() {
  return (
   <>
    {/* {isMobile ? <Login /> : <Landing />} */}
    <Routes>
      <Route path="/" element={isMobile ? <Splash /> : <Landing />} />
      <Route path='/splash' element={<Splash />} />
      <Route path="/login" element={<MobileNav />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
   </>
  );
}

export default App;

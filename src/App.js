
import './App.css';
import Landing from './pges/Landing';
import { isMobile } from "react-device-detect";
import Login from './pges/Login';
import Splash from './pges/Splash';
function App() {
  return (
   <>
    {/* {isMobile ? <Login /> : <Landing />} */}
    <Splash />
   </>
  );
}

export default App;

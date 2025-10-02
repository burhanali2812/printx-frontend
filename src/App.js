import logo from './logo.svg';
import './App.css';
import Landing from './pges/Landing';
import { isMobile } from "react-device-detect";
import Login from './pges/Login';
function App() {
  return (
   <>
    {isMobile ? <Login /> : <Landing />}
   </>
  );
}

export default App;

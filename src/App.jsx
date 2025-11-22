import { useEffect } from 'react';
import AppRoutes from './AppRoutes/AppRoutes'
// import AOS from "aos";

import './App.css'
import "aos/dist/aos.css";

function App() {
  //   useEffect(() => {
  //   AOS.init({
  //     duration: 800,      // animation speed
  //     once: true,         // run animation only once
  //     offset: 100,        // distance before trigger
  //   });
  // }, []);

  return (
    <>
    <AppRoutes/>
    </>
  )
}

export default App

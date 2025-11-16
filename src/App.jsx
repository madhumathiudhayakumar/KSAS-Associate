import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import AppRoutes from './AppRoutes/AppRoutes'
import { useEffect } from 'react';
// import AutoScrollHeader from './components/AutoScrollHeader'
// import Footer from './components/Footer'
// import Navbar from './components/Navbar'
// import HomeScreen from './screens/HomeScreen'

function App() {
    useEffect(() => {
    AOS.init({
      duration: 800,      // animation speed
      once: true,         // run animation only once
      offset: 100,        // distance before trigger
    });
  }, []);

  return (
    <>
    <AppRoutes/>
      {/* <div className="flex flex-col min-h-screen">

        <Navbar />

        <main className="flex-grow mt-16">
          <HomeScreen />
        </main>

        <Footer />
      </div> */}
    </>
  )
}

export default App

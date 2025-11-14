import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TermsAndCondition from "../screens/TermsAndConditions";

const AppRoutes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          {/* <main className="flex-grow mt-16"> */}
            <Route path="/" element={<HomeScreen/>} />
             <Route path="/terms-condition" element={<TermsAndCondition />} /> 
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />  
          {/* </main> */}
        </Routes>
                  <Footer />
      </Router>
    </div>
  )
}
export default AppRoutes;
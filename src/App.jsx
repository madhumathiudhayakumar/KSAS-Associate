import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HomeScreen from './screens/HomeScreen'

function App() {

  return (
    <>
       <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Page Content */}
      <main className="flex-grow mt-16">
        <HomeScreen/>
      </main>

      <Footer />
    </div>
    </>
  )
}

export default App

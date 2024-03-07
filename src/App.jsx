import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App

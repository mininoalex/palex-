import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Timeline from './pages/Timeline'
import Footer from './components/Footer'
import DinoDetail from './components/DinoDetail'
import './styles/main.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/dino/:id" element={<DinoDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

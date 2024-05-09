import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import PropertyDetails from './pages/PropertyDetails';
import Header from './components/Header'
import Footer from './components/Footer'
 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Header />
           
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/*" element={<Error />} />
                    <Route path="/property-details" element={<PropertyDetails />} />
                </Routes>
             <Footer />
        </Router>
    </React.StrictMode>

)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';

function App() {
return (
<Router>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/courses" element={<Courses />} />
<Route path="/signup" element={<SignUp />} />
</Routes>
</Router>
);
}

export default App;
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import { useEffect, useState } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <Link to="/" className="nav-logo">
        <span className="nav-logo-bracket">&lt;</span>
        KB
        <span className="nav-logo-bracket">/&gt;</span>
      </Link>
      <div className="nav-links">
        {location.pathname === '/' ? (
          <>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </>
        ) : (
          <Link to="/">Home</Link>
        )}
        <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
          Blog
        </Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <footer className="footer">
        <p>© 2026 Kevin Barragan · Built with React</p>
      </footer>
    </div>
  );
}

export default App;

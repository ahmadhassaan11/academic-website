import React, { useEffect } from 'react';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Apply incoming section links after React mounts. Subsequent anchors use
    // native browser navigation, including keyboard focus and scroll behavior.
    const section = document.getElementById(window.location.hash.slice(1));
    if (section) {
      section.scrollIntoView();
      section.focus({ preventScroll: true });
    }
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Home />
      <Footer />
    </div>
  );
}

export default App;

import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

import Sidebar     from './components/Sidebar.jsx';
import TopHeader   from './components/TopHeader.jsx';
import Footer      from './components/Footer.jsx';

import Dashboard   from './views/Dashboard.jsx';
import ProductHub  from './views/ProductHub.jsx';
import Industries  from './views/Industries.jsx';
import Contact     from './views/Contact.jsx';

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <Sidebar onCollapse={setCollapsed} />
      <main
        ref={mainRef}
        className={`main-area ${collapsed ? 'sidebar-collapsed' : ''}`}
      >
        <TopHeader collapsed={collapsed} />
        <div className="page-content">
          <div key={location.pathname} className="view-animate">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<ProductHub />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

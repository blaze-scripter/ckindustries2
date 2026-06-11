import React, { useState, useRef } from 'react';
import './index.css';

import Sidebar     from './components/Sidebar.jsx';
import TopHeader   from './components/TopHeader.jsx';
import Footer      from './components/Footer.jsx';

import Dashboard   from './views/Dashboard.jsx';
import ProductHub  from './views/ProductHub.jsx';
import Industries  from './views/Industries.jsx';
import Contact     from './views/Contact.jsx';

const VIEWS = {
  dashboard:  Dashboard,
  products:   ProductHub,
  industries: Industries,
  contact:    Contact,
};

export default function App() {
  const [active,    setActive]    = useState('dashboard');
  const [collapsed, setCollapsed] = useState(false);
  const [animKey,   setAnimKey]   = useState(0);
  const mainRef = useRef(null);

  const navigate = (view) => {
    if (view === active) return;
    setActive(view);
    setAnimKey(k => k + 1);
    if (mainRef.current) mainRef.current.scrollTop = 0;
  };

  const View = VIEWS[active] || Dashboard;

  return (
    <div className="app-shell">
      <Sidebar active={active} setActive={navigate} onCollapse={setCollapsed} />
      <main
        ref={mainRef}
        className={`main-area ${collapsed ? 'sidebar-collapsed' : ''}`}
      >
        <TopHeader active={active} setActive={navigate} collapsed={collapsed} />
        <div className="page-content">
          <div key={animKey} className="view-animate">
            <View setActive={navigate} />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

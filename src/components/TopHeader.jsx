import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, Bell, FileText, Phone } from 'lucide-react';

export default function TopHeader({ collapsed }) {
  const [q, setQ] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const LABELS = {
    '/':  'Dashboard',
    '/products':   'Product Hub',
    '/industries': 'Industry Applications',
    '/contact':    'Contact Us',
  };

  const getActiveLabel = () => {
    const path = location.pathname;
    if (LABELS[path]) return LABELS[path];
    if (path.startsWith('/products')) return LABELS['/products'];
    if (path.startsWith('/industries')) return LABELS['/industries'];
    if (path.startsWith('/contact')) return LABELS['/contact'];
    return 'Dashboard';
  };

  return (
    <header className={`top-header ${collapsed ? 'sidebar-collapsed' : ''}`}>

      {/* ── CK Logo — proper natural aspect ratio ── */}
      <div className="hidden sm:flex items-center gap-3" style={{ flexShrink: 0, marginRight: 14 }}>
        <div style={{
          background: '#fff',
          border: '1px solid #e5e7eb',
          borderRadius: 10,
          padding: '4px',
          height: 48,
          width: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
        }}>
          <img
            src="/ck-logo.svg"
            alt="CK Industries"
            style={{ height: '100%', width: '100%', objectFit: 'contain', display: 'block', borderRadius: 6 }}
          />
        </div>
        <div style={{ height: 22, width: 1, background: '#e5e7eb' }} />
      </div>

      {/* ── Breadcrumb ── */}
      <div className="hidden sm:flex items-center gap-1.5" style={{ flexShrink: 0, marginRight: 8 }}>
        <span style={{ fontSize: 13, color: 'var(--text-3)' }}>CK Industries</span>
        <span style={{ fontSize: 13, color: 'var(--text-3)' }}>/</span>
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-1)' }}>{getActiveLabel()}</span>
      </div>

      {/* ── Search ── */}
      <div className="header-search">
        <Search size={14} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search products, grades, specs…"
        />
      </div>

      {/* ── Right actions ── */}
      <div className="flex items-center gap-2" style={{ marginLeft: 'auto' }}>
        <button className="header-btn hidden sm:flex" style={{ gap: 6 }}>
          <FileText size={14} />
          <span>MSDS / TDS</span>
        </button>

        <button className="header-icon-btn" style={{ position: 'relative' }}>
          <Bell size={16} />
          <span style={{
            position: 'absolute', top: 7, right: 7,
            width: 7, height: 7, borderRadius: '50%',
            background: '#ef4444', border: '1.5px solid #fff',
          }} />
        </button>

        <button className="btn-gold" onClick={() => navigate('/contact')} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Phone size={13} /> Contact Us
        </button>
      </div>
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard, Package, Factory, Phone,
  ChevronRight, Menu, X,
} from 'lucide-react';

const NAV = [
  { id: 'dashboard',  label: 'Dashboard',            icon: LayoutDashboard },
  { id: 'products',   label: 'Product Hub',           icon: Package         },
  { id: 'industries', label: 'Industry Applications', icon: Factory         },
  { id: 'contact',    label: 'Contact Us',            icon: Phone           },
];

export default function Sidebar({ active, setActive, onCollapse }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => { onCollapse?.(collapsed); }, [collapsed]);

  const toggle = () => setCollapsed(c => !c);

  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(o => !o)}
        className="fixed z-50 lg:hidden w-9 h-9 flex-center rounded-lg text-white"
        style={{ top: '13px', left: '16px', background: 'var(--navy)' }}
      >
        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? '' : '-translate-x-full lg:translate-x-0'}`}
        style={{ transition: 'width .3s cubic-bezier(.4,0,.2,1), transform .3s cubic-bezier(.4,0,.2,1)' }}
      >
        {/* ── Logo ── */}
        <div className="sidebar-logo" style={{ gap: 12 }}>
          <div style={{
            background: '#fff',
            borderRadius: 10,
            flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '4px',
            height: 48,
            width: 48,
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
          }}>
            <img
              src="/ck-logo.svg"
              alt="CK Industries"
              style={{ height: '100%', width: '100%', objectFit: 'contain', display: 'block', borderRadius: 6 }}
            />
          </div>
          <div className="sidebar-logo-text" style={{ opacity: collapsed ? 0 : 1, width: collapsed ? 0 : 'auto', overflow: 'hidden' }}>
            <div className="sidebar-logo-name">CK Industries</div>
            <div className="sidebar-logo-sub">Est. 2017</div>
          </div>
          <button
            onClick={toggle}
            className="hidden lg:flex ml-auto w-6 h-6 flex-center rounded-md transition-colors"
            style={{ color: 'rgba(255,255,255,.3)', flexShrink: 0 }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,.7)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.3)'}
          >
            <ChevronRight size={14} style={{ transform: collapsed ? 'rotate(0)' : 'rotate(180deg)', transition: 'transform .3s' }} />
          </button>
        </div>

        {/* ── Nav ── */}
        <nav style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '8px 0' }}>
          <div className="sidebar-section-label">Navigation</div>
          {NAV.map(({ id, label, icon: Icon }) => (
            <div
              key={id}
              className={`nav-item ${active === id ? 'active' : ''}`}
              onClick={() => { setActive(id); setMobileOpen(false); }}
            >
              <Icon className="nav-item-icon" size={17} />
              <span className="nav-item-label" style={{ opacity: collapsed ? 0 : 1, transition: 'opacity .2s' }}>{label}</span>
              {active === id && !collapsed && <span className="nav-item-dot" />}
              <div className="nav-tooltip">{label}</div>
            </div>
          ))}
        </nav>

        {/* ── Brand footer (no user profile) ── */}
        <div style={{
          padding: '16px 18px',
          borderTop: '1px solid rgba(255,255,255,.07)',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8, background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, padding: '3px',
          }}>
            <img src="/ck-logo.svg" alt="CK" style={{ height: '100%', width: '100%', objectFit: 'contain', borderRadius: 4 }} />
          </div>
          <div style={{ opacity: collapsed ? 0 : 1, transition: 'opacity .2s', overflow: 'hidden' }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: 'rgba(255,255,255,.7)', whiteSpace: 'nowrap' }}>CK Industries</div>
            <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,.3)', whiteSpace: 'nowrap' }}>ck-industries.in</div>
          </div>
        </div>
      </aside>
    </>
  );
}

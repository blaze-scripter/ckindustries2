import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight, Zap, Truck, Award, Globe, Users, Droplets, BarChart3, Shield, Clock, TrendingUp } from 'lucide-react';

const TICKERS = [
  { tag: 'NEW',       text: 'MAXSYNTH 5W-30 DEXOS3 certified — Now in 20L pails' },
  { tag: 'UPDATE',    text: 'BS-VI Phase 2 compliant diesel range now shipping nationwide' },
  { tag: 'PARTNER',   text: 'Strategic alliance with HPCL — 300 new distribution outlets' },
];

const STATS = [
  { value: '8+',    label: 'Years in Operation', icon: Award,    color: '#d4a853' },
  { value: '200+',  label: 'Product Grades',      icon: Droplets, color: '#60a5fa' },
  { value: '5000+', label: 'B2B Clients',          icon: Users,    color: '#34d399' },
  { value: '18',    label: 'States Covered',       icon: Globe,    color: '#a78bfa' },
];

const FEATURES = [
  { icon: Shield,     title: 'Certified Formulations',   desc: 'ISO 9001, API, ACEA & BIS certified across all product categories.', color: '#3b82f6' },
  { icon: Clock,      title: '48-Hour Bulk Dispatch',     desc: 'National warehouse network for rapid bulk logistics.',               color: '#f59e0b' },
  { icon: BarChart3,  title: 'Volume Price Advantage',    desc: 'Tiered commercial pricing for OEMs, distributors & fleets.',        color: '#10b981' },
  { icon: TrendingUp, title: 'R&D-Backed Innovation',     desc: 'In-house formulation lab developing next-gen lubricant blends.',    color: '#8b5cf6' },
  { icon: Globe,      title: 'South India Coverage',     desc: 'Active supply across Telangana, Andhra Pradesh, Karnataka & Maharashtra.',  color: '#ef4444' },
  { icon: Zap,        title: 'Technical Support Desk',    desc: 'Dedicated lubrication engineers for on-site consultation.',         color: '#06b6d4' },
];


export default function Dashboard() {
  const navigate = useNavigate();
  const [tickIdx, setTickIdx] = useState(0);
  const [tickVisible, setTickVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setTickVisible(false);
      setTimeout(() => { setTickIdx(i => (i + 1) % TICKERS.length); setTickVisible(true); }, 380);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="hero-section dot-bg flex flex-col lg:flex-row items-center justify-between gap-10" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Glow orbs */}
        <div style={{ position: 'absolute', top: -60, right: -60, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,168,83,.1), transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -40, left: '40%', width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(96,165,250,.06), transparent)', pointerEvents: 'none' }} />

        {/* Left: Copy */}
        <div style={{ position: 'relative', zIndex: 1, flex: 1, maxWidth: 580 }}>
          {/* Ticker */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(212,168,83,.1)', border: '1px solid rgba(212,168,83,.2)',
            borderRadius: 99, padding: '5px 14px 5px 8px',
            marginBottom: 28,
          }}>
            <span style={{
              background: 'var(--gold)', color: 'var(--navy)',
              fontSize: 10, fontWeight: 700, letterSpacing: '.06em',
              padding: '2px 8px', borderRadius: 99, textTransform: 'uppercase',
              flexShrink: 0,
            }}>
              {TICKERS[tickIdx].tag}
            </span>
            <span
              className={tickVisible ? 'ticker-in' : ''}
              style={{ fontSize: 12.5, color: 'rgba(255,255,255,.65)', transition: 'opacity .3s' }}
            >
              {TICKERS[tickIdx].text}
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 44, fontWeight: 800, lineHeight: 1.1,
            color: '#fff', marginBottom: 16, letterSpacing: '-.02em',
          }}>
            Powering Your<br />
            <span style={{ color: 'var(--gold)' }}>Business Forward.</span>
          </h1>

          <p style={{ fontSize: 15, color: 'rgba(255,255,255,.5)', lineHeight: 1.7, marginBottom: 32, maxWidth: 480 }}>
            India's trusted B2B lubricants partner for manufacturing, heavy industry,
            and commercial fleets — engineered for extreme performance.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
            <button
              className="btn-gold"
              style={{ height: 42, padding: '0 22px', fontSize: 14 }}
              onClick={() => navigate('/products')}
            >
              Explore Products <ArrowRight size={15} />
            </button>
            <button
              style={{
                height: 42, padding: '0 22px',
                border: '1.5px solid rgba(255,255,255,.15)',
                borderRadius: 9, background: 'transparent',
                color: 'rgba(255,255,255,.65)', fontSize: 14, fontWeight: 500,
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7,
                fontFamily: 'inherit', transition: 'all .18s',
              }}
              onClick={() => navigate('/contact')}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.07)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,.65)'; }}
            >
              Contact Us <ChevronRight size={15} />
            </button>
          </div>

          {/* Cert badges */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['ISO 9001:2015', 'API SP', 'ACEA A3/B4', 'BS-VI'].map(c => (
              <span key={c} style={{
                fontSize: 11, fontWeight: 600, padding: '5px 11px', borderRadius: 7,
                background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)',
                color: 'rgba(255,255,255,.45)',
              }}>{c}</span>
            ))}
          </div>
        </div>

        {/* Right: Logo Display — prominently visible */}
        <div
          className="hidden lg:flex"
          style={{
            position: 'relative', zIndex: 1,
            flexShrink: 0,
            flexDirection: 'column', alignItems: 'center', gap: 16,
          }}
        >
          {/* Logo container with frosted glass effect */}
          <div style={{
            background: 'rgba(255,255,255,0.96)',
            borderRadius: 20,
            padding: 20,
            boxShadow: '0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.15)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0,
          }}>
            <img
              src="/ck-logo.svg"
              alt="CK Industries"
              style={{
                height: 180,
                width: 'auto',
                display: 'block',
                borderRadius: 4,
                objectFit: 'contain'
              }}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,.5)', letterSpacing: '.06em', textTransform: 'uppercase' }}>Since 1985</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', marginTop: 2 }}>India's Industrial Lubricants Leader</div>
          </div>
        </div>
      </section>

      {/* ── Stats Row ──────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map(({ value, label, icon: Icon, color }) => (
          <div key={label} className="card card-hover stat-card" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 42, height: 42, borderRadius: 11, background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon size={19} style={{ color }} />
            </div>
            <div>
              <div className="stat-value">{value}</div>
              <div className="stat-label">{label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Segment Cards ──────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* Industrial */}
        <div
          className="card card-hover"
          style={{ cursor: 'pointer', overflow: 'hidden', position: 'relative' }}
          onClick={() => navigate('/products')}
        >
          <div style={{
            background: 'linear-gradient(135deg, var(--navy) 0%, #0d2347 100%)',
            padding: '28px 28px 24px', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: -20, right: -20, width: 160, height: 160, borderRadius: '50%', background: 'radial-gradient(circle, rgba(96,165,250,.1), transparent)', pointerEvents: 'none' }} />
            <div style={{ width: 40, height: 40, borderRadius: 11, background: 'rgba(96,165,250,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
              <Zap size={19} color="#60a5fa" />
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)', marginBottom: 6 }}>B2B Segment</div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Industrial &amp; Manufacturing</h2>
            <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.45)', lineHeight: 1.65 }}>
              Hydraulic oils, gear oils, metalworking fluids, and compressor lubricants to reduce downtime and maximize uptime.
            </p>
          </div>
          <div style={{ padding: '16px 28px 20px', background: '#fff' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {['Hydraulic & Gear Oils', 'Compressor & Turbine Oils', 'Metalworking & Cutting Fluids'].map(i => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-2)' }}>
                  <ChevronRight size={13} color="#60a5fa" style={{ flexShrink: 0 }} />{i}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 600, color: '#3b82f6', cursor: 'pointer' }}>
              Explore Industrial Range <ArrowRight size={14} />
            </div>
          </div>
        </div>

        {/* Fleet */}
        <div
          className="card card-hover"
          style={{ cursor: 'pointer', overflow: 'hidden', position: 'relative' }}
          onClick={() => navigate('/products')}
        >
          <div style={{
            background: 'linear-gradient(135deg, #1a0808 0%, #3d1212 100%)',
            padding: '28px 28px 24px', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: -20, right: -20, width: 160, height: 160, borderRadius: '50%', background: 'radial-gradient(circle, rgba(248,113,113,.1), transparent)', pointerEvents: 'none' }} />
            <div style={{ width: 40, height: 40, borderRadius: 11, background: 'rgba(248,113,113,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
              <Truck size={19} color="#f87171" />
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)', marginBottom: 6 }}>B2B Segment</div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Commercial Fleets &amp; Motorists</h2>
            <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.45)', lineHeight: 1.65 }}>
              BS-VI compliant HDEO, extended-drain fleet lubricants, DEF fluids, and transmission oils to maximize fleet uptime.
            </p>
          </div>
          <div style={{ padding: '16px 28px 20px', background: '#fff' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {['Heavy-Duty Diesel Engine Oils', 'BS-VI / Euro 6 Compliant Grades', 'DEF (AdBlue) & Coolants'].map(i => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-2)' }}>
                  <ChevronRight size={13} color="#f87171" style={{ flexShrink: 0 }} />{i}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 600, color: '#ef4444', cursor: 'pointer' }}>
              Explore Fleet Range <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Why CK Industries ────────────────────────────── */}
      <section className="card" style={{ padding: '28px 32px' }}>
        <div className="flex-between" style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ background: '#fff', borderRadius: 10, padding: 4, border: '1px solid var(--border)', height: 56, width: 56, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="/ck-logo.svg"
                alt="CK Industries"
                style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 6 }}
              />
            </div>
            <div>
              <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 18, fontWeight: 700, color: 'var(--text-1)' }}>Why CK Industries?</h2>
              <p className="stat-label" style={{ marginTop: 3 }}>Built for the demands of modern Indian industry</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} style={{ display: 'flex', gap: 14, padding: '14px 16px', borderRadius: 10, border: '1px solid var(--border)', background: 'var(--surface-2)', transition: 'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.boxShadow = 'var(--shadow-card)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface-2)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ width: 36, height: 36, borderRadius: 9, background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={17} style={{ color }} />
              </div>
              <div>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text-1)', marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: 12.5, color: 'var(--text-3)', lineHeight: 1.55 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

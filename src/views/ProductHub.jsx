import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, Package, Truck, Award, ShieldCheck, Zap, ThermometerSnowflake,
  Download, ExternalLink, Star, Shield, Droplets, CheckCircle,
} from 'lucide-react';

/* ─── Sub-brand definitions ─────────────────────────────────── */
const SUB_BRANDS = {
  oils: [
    {
      id: 'act',
      name: 'ACT',
      tagline: 'We Believe In Quality',
      logo: '/logo-act.jpg',
      bg: 'linear-gradient(135deg, #1a0800 0%, #3d1200 100%)',
      accent: '#f97316',
      desc: 'Premium automotive & industrial engine oils engineered for extreme Indian operating conditions.',
      products: ['Engine Oils', 'Gear Oils', 'Transmission Fluids'],
    },
    {
      id: 'apex',
      name: 'APEX Tristar',
      tagline: 'Advanced Performance Lubricants',
      logo: '/logo-apex.jpg',
      bg: 'linear-gradient(135deg, #1a0a00 0%, #7c2d00 100%)',
      accent: '#fb923c',
      desc: 'High-performance synthetic & semi-synthetic lubricants for modern engines and high-rev applications.',
      products: ['Synthetic Engine Oils', 'Racing Lubricants', 'Specialty Fluids'],
    },
  ],
  greases: [
    {
      id: 'nandi',
      name: 'Nandi',
      tagline: 'The Power of Reliability',
      logo: '/logo-nandi.jpg',
      bg: 'linear-gradient(135deg, #080f1e 0%, #1e1030 100%)',
      accent: '#ef4444',
      desc: 'Industrial greases and specialty lubricants trusted by manufacturing plants across India.',
      products: ['Industrial Greases', 'Bearing Lubricants', 'Specialty Compounds'],
    },
    {
      id: 'ganga',
      name: 'Ganga',
      tagline: 'Pure Performance, Every Time',
      logo: '/logo-ganga.jpg',
      bg: 'linear-gradient(135deg, #001a2e 0%, #003d6e 100%)',
      accent: '#3b82f6',
      desc: 'High-temp complex greases, EP greases, and food-grade lubricants for critical applications.',
      products: ['High-Temp Greases', 'EP Gear Greases', 'Food-Grade Lubricants'],
    },
  ],
};

/* ─── Products catalogue ─────────────────────────────────────── */
const PRODUCTS = [
  {
    cat: 'oils', brand: 'act',
    name: 'ACT Performance Shock Oil',
    sub: 'Shock Absorber Oil — For Bikes',
    viscosity: 'SAE 10',
    spec: 'API SH / JASO MB',
    productImg: '/act-shock-oil.jpg',
    headerBg: 'linear-gradient(135deg, #1a0800, #5a1a00)',
    desc: 'High-performance shock absorber oil engineered for bikes. Ensures smooth ride, precise damping, and long suspension life in all road conditions.',
    highlights: ['Smooth ride guaranteed', 'Optimal damping control', 'All-weather stability', 'Re-packed & marketed by CK Industries'],
    volumes: ['100ml', '250ml', '500ml'],
    accentColor: '#f97316', iconColor: '#f97316', icon: Shield,
    badge: 'BIKE SHOCK',
  },
  {
    cat: 'oils', brand: 'act',
    name: 'ACT Scooter Oil 10W30',
    sub: 'Scooter Engine Oil — API-SN',
    viscosity: '10W-30',
    spec: 'API SN / JASO MB / BS-VI',
    productImg: '/act-scooter-oil.png',
    headerBg: 'linear-gradient(135deg, #1c1c1c, #3a3a3a)',
    desc: 'Purpose-formulated engine oil for 4-stroke scooters. Delivers optimal lubrication at start-up and sustained protection through city stop-start riding.',
    highlights: ['API-SN certified', 'BS-VI compatible', 'City & highway optimized', 'Low-smoke formula'],
    volumes: ['800ml'],
    accentColor: '#d1d5db', iconColor: '#d1d5db', icon: Zap,
    badge: 'SCOOTER',
  },
  {
    cat: 'oils', brand: 'act',
    name: 'ACT 4T Synthetic 20W-40',
    sub: '4-Stroke Motorcycle Engine Oil — SN',
    viscosity: '20W-40',
    spec: 'API SN / JASO MA2 / BS-VI',
    productImg: '/act-4t-oil.jpg',
    headerBg: 'linear-gradient(135deg, #4a0000, #8b0000)',
    desc: 'Synthetic-based 4-stroke engine oil for motorcycles. JASO MA2 certified for wet clutch compatibility — ideal for commuter and performance bikes.',
    highlights: ['JASO MA2 wet clutch safe', 'Synthetic-based formula', 'BS-VI approved', 'Hero, Honda, Bajaj compatible'],
    volumes: ['1 Ltr'],
    accentColor: '#ef4444', iconColor: '#ef4444', icon: Star,
    badge: '4T SYNTH',
  },
  {
    cat: 'oils', brand: 'apex',
    name: 'APEX Tristar 5W-30 Full Syn',
    sub: 'Full Synthetic — Petrol / Hybrid',
    viscosity: '5W-30',
    spec: 'API SP / ILSAC GF-6A / DEXOS1 Gen3',
    productImg: '/APEX1.png',
    desc: 'PAO-ester blend for modern turbocharged GDI and hybrid powertrains.',
    highlights: ['DEXOS3 certified', 'Fuel Economy +3.5%', '15,000 km OCI'],
    volumes: ['1L', '4L', '5L', '20L Pail'],
    headerBg: 'linear-gradient(135deg, #1a0a00, #7c3500)',
    accentColor: '#fbbf24', iconColor: '#fbbf24', icon: Star,
    badge: 'PERFORMANCE',
  },
  {
    cat: 'oils', brand: 'apex',
    name: 'APEX Tristar Racing 0W-40',
    sub: 'Full Synthetic — High Performance',
    viscosity: '0W-40',
    spec: 'API SN+ / ACEA A3/B4 / BMW LL-04',
    productImg: '/apex2.png',
    desc: 'Competition-grade full synthetic for high-revving engines and European OEMs.',
    highlights: ['BMW, Mercedes, VW approved', 'Thermal stability 150°C', 'Race-derived additive pack'],
    volumes: ['1L', '4L', '20L Pail'],
    headerBg: 'linear-gradient(135deg, #1a0a00, #5a2200)',
    accentColor: '#fdba74', iconColor: '#fdba74', icon: Star,
    badge: 'RACE SPEC',
  },
  {
    cat: 'oils', brand: 'apex',
    name: 'APEX Industrial HD 46',
    sub: 'Synthetic Hydraulic Oil — HV-LP',
    viscosity: 'VG 46',
    spec: 'DIN 51524 HVLP / Denison HF-0',
    productImg: '/apex3.png',
    desc: 'High-VI synthetic hydraulic fluid for CNC machines and mobile hydraulics.',
    highlights: ['VI > 155', 'All-seal compatible', 'Anti-wear zinc chemistry'],
    volumes: ['20L Pail', '60L Drum', '210L Barrel'],
    headerBg: 'linear-gradient(135deg, #0a1f2e, #1a5080)',
    accentColor: '#38bdf8', iconColor: '#38bdf8', icon: Droplets,
    badge: 'INDUSTRIAL',
  },

  /* ── Greases & Oils (Nandi) — order: All Purpose Grease → Hydraulic Oil → Red Gel Grease ── */
  {
    cat: 'greases', brand: 'nandi',
    name: 'Nandi All Purpose Grease',
    sub: 'Multi-Vehicle AP-3 Grease',
    spec: 'NLGI AP-3 / Multi-Vehicle Grade',
    productImg: '/nandi1.png',
    desc: 'Premium all-purpose lithium-base grease formulated for multi-vehicle use. Superior protection for all types of machinery across automotive and industrial applications.',
    highlights: ['Multi-vehicle AP-3 grade', 'Superior machinery protection', 'High water resistance', 'Extended bearing life'],
    volumes: ['100gm Tin', '200gm Tin', '1/2 kg', '1 kg', '3 kg', '5 kg', '10 kg', '18 kg', '20 kg', '175 kg Barrel'],
    alsoAvailable: true,
    headerBg: 'linear-gradient(135deg, #1a0808, #7f1d1d)',
    accentColor: '#fb7185', iconColor: '#fb7185', icon: Droplets,
    badge: 'ALL PURPOSE',
  },
  {
    cat: 'greases', brand: 'nandi',
    name: 'Nandi Hydraulic Oil',
    sub: 'Anti-Wear Hydraulic Oil AW-68',
    spec: 'ISO VG 68 / DIN 51524 HLP / IS 3098',
    productImg: '/nandi2.png',
    desc: 'Anti-wear hydraulic oil recommended for all types of hydraulic systems. Ensures smooth operation and extended bearing life under varied pressure and temperature conditions.',
    highlights: ['Anti-wear additive pack', 'Smooth hydraulic operation', 'Extended bearing life', 'All hydraulic system compatible'],
    volumes: ['1 Ltr', '5 Ltr', '10 Ltr', '20 Ltr', '26 Ltr', '50 Ltr Can', '210 Ltr Barrel'],
    alsoAvailable: true,
    headerBg: 'linear-gradient(135deg, #1a0000, #6b0000)',
    accentColor: '#f87171', iconColor: '#f87171', icon: Zap,
    badge: 'HYDRAULIC',
  },
  {
    cat: 'greases', brand: 'nandi',
    name: 'Nandi Red Gel Grease',
    sub: 'Premium Industrial Grease Plus — NLGI 2.5',
    spec: 'NLGI 2.5 / Red Gel Complex Base',
    productImg: '/nandi3.png',
    desc: 'Premium red gel grease with superior heat resistance and anti-wear protection. Designed for high-load industrial bearings and automotive chassis components.',
    highlights: ['Superior heat resistance', 'Anti-wear protection', 'Smooth operation', 'Extended bearing life'],
    volumes: ['100gm Tin', '200gm Tin', '1/2 kg', '1 kg', '3 kg', '5 kg', '10 kg', '18 kg', '20 kg', '175 kg Barrel'],
    alsoAvailable: true,
    headerBg: 'linear-gradient(135deg, #1c0800, #5a2400)',
    accentColor: '#fb923c', iconColor: '#fb923c', icon: Shield,
    badge: 'RED GEL',
  },

  /* ── Greases & Oils (Ganga) — order: All Purpose Grease → Hydraulic Oil → Red Gel Grease ── */
  {
    cat: 'greases', brand: 'ganga',
    name: 'Ganga All Purpose Grease',
    sub: 'Multi-Vehicle AP-3 Grease',
    spec: 'NLGI AP-3 / Advanced Multi-Vehicle Grade',
    productImg: '/ganga1.png',
    desc: 'Advanced all-purpose grease delivering unmatched protection for all types of vehicles and industrial machinery. Premium performance, every time.',
    highlights: ['Advanced multi-vehicle formula', 'Unmatched grease solutions', 'For all fleet types', 'Long-lasting film strength'],
    volumes: ['100gm Tin', '200gm Tin', '1/2 kg', '1 kg', '3 kg', '5 kg', '10 kg', '18 kg', '20 kg', '175 kg Barrel'],
    alsoAvailable: true,
    headerBg: 'linear-gradient(135deg, #001a12, #065f46)',
    accentColor: '#34d399', iconColor: '#34d399', icon: Droplets,
    badge: 'ALL PURPOSE',
  },
  {
    cat: 'greases', brand: 'ganga',
    name: 'Ganga Hydraulic Oil',
    sub: 'Anti-Wear Hydraulic Oil 68',
    spec: 'ISO VG 68 / DIN 51524 HLP / Anti-Wear Grade',
    productImg: '/ganga2.png',
    desc: 'Maximum anti-wear hydraulic oil for heavy-duty systems. Powers unmatched reliability in hydraulic circuits, presses, and industrial machinery.',
    highlights: ['Maximum anti-wear protection', 'Heavy-duty system rated', 'Unmatched reliability', 'Wide temperature range'],
    volumes: ['1 Ltr', '5 Ltr', '10 Ltr', '20 Ltr', '26 Ltr', '50 Ltr Can', '210 Ltr Barrel'],
    alsoAvailable: true,
    headerBg: 'linear-gradient(135deg, #001020, #003060)',
    accentColor: '#60a5fa', iconColor: '#60a5fa', icon: Zap,
    badge: 'HYDRAULIC',
  },
  {
    cat: 'greases', brand: 'ganga',
    name: 'Ganga Red Gel Grease',
    sub: 'Premium Automotive & Industrial Grease Plus',
    spec: 'NLGI 2 / Red Gel Complex / Automotive Grade',
    productImg: '/ganga3.png',
    desc: 'Premium red gel grease engineered for automotive and industrial applications. Superior heat resistance and anti-wear protection for the most demanding conditions.',
    highlights: ['Superior heat resistance', 'Anti-wear protection', 'Automotive & industrial rated', 'Extended bearing life'],
    volumes: ['100gm Tin', '200gm Tin', '1/2 kg', '1 kg', '3 kg', '5 kg', '10 kg', '18 kg', '20 kg', '175 kg Barrel'],
    alsoAvailable: true,
    headerBg: 'linear-gradient(135deg, #001a30, #0a4a7a)',
    accentColor: '#7dd3fc', iconColor: '#7dd3fc', icon: Shield,
    badge: 'RED GEL',
  },
];

/* ─── Sub-brand badge ───────────────────────────────────────── */
function BrandBadge({ logo, name, accent, compact }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: compact ? 6 : 8,
      background: '#fff',
      border: `1.5px solid ${accent}40`,
      borderRadius: compact ? 8 : 10,
      padding: compact ? '3px 8px' : '5px 12px',
      boxShadow: `0 2px 8px ${accent}15`,
    }}>
      <img
        src={logo}
        alt={name}
        style={{ height: compact ? 18 : 22, width: 'auto', objectFit: 'contain', display: 'block' }}
      />
    </div>
  );
}

/* ─── Product card ──────────────────────────────────────────── */
function ProductCard({ p, brandInfo }) {
  const { name, sub, spec, desc, highlights, volumes, alsoAvailable, headerBg, accentColor, iconColor, badge, icon: Icon, productImg } = p;
  const brand = brandInfo;
  const [packOpen, setPackOpen] = useState(false);

  return (
    <div className="card card-hover" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      {/* ── Header: product photo OR gradient ── */}
      {productImg ? (
        <div style={{ position: 'relative', overflow: 'hidden', background: headerBg, aspectRatio: '1 / 1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={productImg}
            alt={name}
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', opacity: 0.95, padding: '16px' }}
          />
          {/* Badge top-left */}
          <div style={{ position: 'absolute', top: 12, left: 12 }}>
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '.08em',
              textTransform: 'uppercase', padding: '3px 9px', borderRadius: 99,
              background: accentColor, color: '#fff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
            }}>{badge}</span>
          </div>
          {/* Brand logo top-right */}
          <div style={{ position: 'absolute', top: 12, right: 12 }}>
            <div style={{ background: '#fff', borderRadius: 6, padding: '3px 8px', height: 22, display: 'flex', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
              <img src={brand.logo} alt={brand.name} style={{ height: 14, width: 'auto', objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      ) : (
        <div style={{ background: headerBg, padding: '18px 20px 16px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', bottom: -20, right: -20, width: 120, height: 120, borderRadius: '50%', background: `radial-gradient(circle, ${accentColor}18, transparent)`, pointerEvents: 'none' }} />
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10, position: 'relative', zIndex: 1, marginBottom: 10 }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: 99, background: `${accentColor}22`, color: accentColor, border: `1px solid ${accentColor}35` }}>{badge}</span>
                <div style={{ background: '#fff', borderRadius: 5, padding: '2px 6px', height: 18, display: 'flex', alignItems: 'center' }}>
                  <img src={brand.logo} alt={brand.name} style={{ height: 12, width: 'auto', objectFit: 'contain' }} />
                </div>
              </div>
              <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 14.5, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 3 }}>{name}</h3>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,.4)', fontWeight: 400 }}>{sub}</p>
            </div>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: `${accentColor}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `1px solid ${accentColor}28` }}>
              <Icon size={16} style={{ color: iconColor }} />
            </div>
          </div>
        </div>
      )}

      {/* ── Body ── */}
      <div style={{ padding: '14px 18px 18px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {productImg && (
          <div>
            <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 14.5, fontWeight: 700, color: 'var(--text-1)', marginBottom: 2 }}>{name}</h3>
            <p style={{ fontSize: 11.5, color: 'var(--text-3)' }}>{sub}</p>
          </div>
        )}
        <div style={{ fontSize: 11, fontFamily: "'SF Mono','Fira Code',monospace", color: 'var(--text-3)', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 6, padding: '5px 9px' }}>{spec}</div>
        <p style={{ fontSize: 12.5, color: 'var(--text-2)', lineHeight: 1.6, flex: 1 }}>{desc}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {highlights.map(h => (
            <div key={h} className="highlight-row">
              <ChevronRight size={11} style={{ color: '#22c55e', flexShrink: 0, marginTop: 1 }} />
              <span style={{ fontSize: 12 }}>{h}</span>
            </div>
          ))}
        </div>

        {/* ── Collapsible packaging list ── */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 8 }}>
          <button
            onClick={() => setPackOpen(o => !o)}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: 'none', border: 'none', cursor: 'pointer', padding: '2px 0 6px',
              fontFamily: 'inherit',
            }}
          >
            <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-3)' }}>
              {alsoAvailable ? 'Also Available In' : 'Available Sizes'}
            </span>
            <ChevronRight
              size={13}
              style={{
                color: 'var(--text-3)',
                transform: packOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform .2s ease',
              }}
            />
          </button>
          {packOpen && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, paddingBottom: 4, animation: 'fadeIn .18s ease' }}>
              {volumes.map(v => <span key={v} className="volume-chip">{v}</span>)}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', gap: 7, marginTop: 2 }}>
          <button style={{
            flex: 1, height: 34, borderRadius: 8, border: 'none', cursor: 'pointer',
            background: headerBg, color: '#fff', fontSize: 12, fontWeight: 600,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
            fontFamily: 'inherit', transition: 'opacity .18s',
          }} onMouseEnter={e => e.currentTarget.style.opacity = '.85'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            <ExternalLink size={11} /> View TDS
          </button>
          <button style={{
            height: 34, padding: '0 12px', borderRadius: 8, border: '1.5px solid var(--border)',
            background: '#fff', cursor: 'pointer', color: 'var(--text-2)', fontSize: 12, fontWeight: 500,
            display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'inherit', transition: 'all .18s',
          }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#9ca3af'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}>
            <Download size={11} /> MSDS
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Sub-brand showcase strip ──────────────────────────────── */
function SubBrandStrip({ brands }) {
  return (
    <div style={{ display: 'flex', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
      {brands.map(b => (
        <div key={b.id} style={{
          display: 'flex', alignItems: 'center', gap: 16,
          background: '#fff', border: '1.5px solid var(--border)',
          borderRadius: 14, padding: '14px 20px',
          flex: '1 1 220px', minWidth: 220,
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Accent stripe */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: b.accent, borderRadius: '14px 0 0 14px' }} />
          {/* Logo */}
          <div style={{
            background: '#f8f8f8', border: `1.5px solid ${b.accent}30`,
            borderRadius: 10, padding: '8px 14px', height: 52,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, minWidth: 90,
          }}>
            <img
              src={b.logo}
              alt={b.name}
              style={{ height: 34, width: 'auto', objectFit: 'contain', display: 'block' }}
            />
          </div>
          <div>
            <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 14, fontWeight: 700, color: 'var(--text-1)', marginBottom: 2 }}>{b.name}</div>
            <div style={{ fontSize: 11.5, color: 'var(--text-3)', marginBottom: 6 }}>{b.tagline}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {b.products.map(p => (
                <span key={p} style={{ fontSize: 10.5, fontWeight: 500, padding: '2px 7px', borderRadius: 5, background: `${b.accent}12`, color: b.accent, border: `1px solid ${b.accent}25` }}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


/* ─── Main component ────────────────────────────────────────── */
export default function ProductHub() {
  const navigate = useNavigate();
  const [cat, setCat] = useState('oils');

  const isOils = cat === 'oils';
  const currentBrands = isOils ? SUB_BRANDS.oils : SUB_BRANDS.greases;
  const currentProducts = PRODUCTS.filter(p => p.cat === cat);

  const getBrand = (brandId) => currentBrands.find(b => b.id === brandId);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* ── Page Header ── */}
      <div className="card" style={{ padding: '22px 28px' }}>
        <div className="flex-between" style={{ gap: 16, flexWrap: 'wrap', marginBottom: 20 }}>
          <div>
            <h1 className="page-title">Product Hub</h1>
            <p className="page-subtitle">{PRODUCTS.length} grades across 4 sub-brands — Oils & Greases</p>
          </div>
          <button className="btn-gold" onClick={() => navigate('/contact')}>
            Contact Us <ChevronRight size={15} />
          </button>
        </div>

        {/* Main category tabs */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {[
            { id: 'oils',    label: 'Engine & Industrial Oils', count: PRODUCTS.filter(p=>p.cat==='oils').length },
            { id: 'greases', label: 'Greases & Coolants',        count: PRODUCTS.filter(p=>p.cat==='greases').length },
          ].map(({ id, label, count }) => (
            <button
              key={id}
              onClick={() => setCat(id)}
              style={{
                padding: '10px 22px', borderRadius: 10, border: 'none',
                cursor: 'pointer', fontFamily: 'inherit', transition: 'all .18s',
                fontWeight: 600, fontSize: 13.5,
                background: cat === id ? 'var(--navy)' : 'var(--surface-2)',
                color: cat === id ? '#fff' : 'var(--text-2)',
                display: 'flex', alignItems: 'center', gap: 8,
              }}
            >
              {label}
              <span style={{
                fontSize: 11, fontWeight: 700, padding: '2px 7px', borderRadius: 99,
                background: cat === id ? 'rgba(255,255,255,.15)' : 'var(--border)',
                color: cat === id ? '#fff' : 'var(--text-3)',
              }}>{count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Sub-brand Showcase ── */}
      <div className="card" style={{ padding: '22px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{ width: 4, height: 18, borderRadius: 9, background: isOils ? '#f97316' : '#3b82f6' }} />
          <h2 style={{ fontFamily: "'Sora',sans-serif", fontSize: 14, fontWeight: 700, color: 'var(--text-1)' }}>
            {isOils ? 'Oil Sub-Brands' : 'Grease Sub-Brands'} — CK Industries
          </h2>
          <span style={{ fontSize: 12, color: 'var(--text-3)', marginLeft: 4 }}>
            {isOils ? '2 brands · ACT & APEX Tristar' : '2 brands · Nandi & Ganga'}
          </span>
        </div>
        <SubBrandStrip brands={currentBrands} />
      </div>

      {/* ── Products by brand ── */}
      {currentBrands.map(brand => {
        const brandProducts = currentProducts.filter(p => p.brand === brand.id);
        if (!brandProducts.length) return null;
        return (
          <div key={brand.id}>
            {/* Brand header */}
            <div style={{
              background: brand.bg, borderRadius: 'var(--radius)',
              padding: '16px 24px', marginBottom: 14,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                {/* Brand logo pill */}
                <div style={{
                  background: '#fff', borderRadius: 10, padding: '6px 14px',
                  height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 4px 16px ${brand.accent}30`, minWidth: 80,
                }}>
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    style={{ height: 30, width: 'auto', objectFit: 'contain', display: 'block' }}
                  />
                </div>
                <div>
                  <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 16, fontWeight: 700, color: '#fff' }}>{brand.name}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,.45)', marginTop: 1 }}>{brand.desc}</div>
                </div>
              </div>
              <span style={{
                fontSize: 12, fontWeight: 600, padding: '5px 12px', borderRadius: 8,
                background: `${brand.accent}20`, color: brand.accent, border: `1px solid ${brand.accent}35`,
                flexShrink: 0,
              }}>
                {brandProducts.length} products
              </span>
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {brandProducts.map(p => (
                <ProductCard key={p.name} p={p} brandInfo={brand} />
              ))}
            </div>
          </div>
        );
      })}

      {/* ── Footer CTA ── */}
      <div style={{ textAlign: 'center', padding: '20px', background: 'var(--surface-2)', borderRadius: 'var(--radius)', border: '1.5px dashed var(--border)' }}>
        <p style={{ fontSize: 13.5, color: 'var(--text-2)', marginBottom: 14 }}>
          Need a custom specification? Our technical engineers will recommend the exact lubricant for your application.
        </p>
        <button className="btn-gold" onClick={() => navigate('/contact')}>
          Get a Technical Specification <ArrowRight size={15} />
        </button>
      </div>

    </div>
  );
}

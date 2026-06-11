import React from 'react';
import {
  Phone, Mail, MapPin, Clock, Truck, Award,
  ArrowRight, Globe, MessageSquare,
} from 'lucide-react';

const CONTACTS = [
  { icon: Phone,         label: 'Enquiry Helpline',     value: '+91 90302 19096',          note: 'Mon–Sat 9am–6pm IST',            color: '#d4a853' },
  { icon: Mail,          label: 'Business Email',        value: 'jsrckindustries@gmail.com', note: 'Enquiries & order confirmations', color: '#3b82f6' },
  { icon: MessageSquare, label: 'WhatsApp Business',     value: '+91 90302 19096',          note: 'Fastest response channel',        color: '#22c55e' },
  { icon: Truck,         label: 'Logistics & Dispatch',  value: 'jsrckindustries@gmail.com', note: 'Bulk freight & tracking',         color: '#f97316' },
  { icon: Award,         label: 'Trade & Distribution',  value: 'jsrckindustries@gmail.com', note: 'Distributor onboarding & pricing',color: '#8b5cf6' },
  { icon: Globe,         label: 'Website',               value: 'www.ck-industries.in',      note: 'Full product catalogue online',   color: '#64748b' },
];

const CERTIFICATIONS = [
  { label: 'ISO 9001:2015',  desc: 'Quality Management System'   },
  { label: 'API SP / CI-4+', desc: 'American Petroleum Institute' },
  { label: 'ACEA A3/B4/E7',  desc: 'European Automobile Mfrs'    },
  { label: 'BIS / IS Mark',  desc: 'Bureau of Indian Standards'   },
  { label: 'REACH',          desc: 'EU Chemical Compliance'       },
  { label: 'NSF H1',         desc: 'Food-Grade Lubricants'        },
];

const SUB_BRANDS = [
  { logo: '/logo-act.jpg',   name: 'ACT',          desc: 'Engine & gear oils',              accent: '#f97316' },
  { logo: '/logo-apex.jpg',  name: 'APEX Tristar',  desc: 'Synthetic & performance oils',    accent: '#fb923c' },
  { logo: '/logo-nandi.jpg', name: 'Nandi',         desc: 'Industrial greases & hydraulics', accent: '#ef4444' },
  { logo: '/logo-ganga.jpg', name: 'Ganga',         desc: 'High-temp & all-purpose greases', accent: '#3b82f6' },
];

const SUPPLY_STATES = [
  { name: 'Telangana',       flag: '🏙️', color: '#f97316' },
  { name: 'Andhra Pradesh',  flag: '🌊', color: '#3b82f6' },
  { name: 'Karnataka',       flag: '🌿', color: '#22c55e' },
  { name: 'Maharashtra',     flag: '🦁', color: '#8b5cf6' },
];

export default function Contact() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* ── Header ── */}
      <div className="card" style={{ padding: '24px 28px' }}>
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">Reach our technical, trade, and logistics teams across India</p>
      </div>

      {/* ── Hero ── */}
      <div className="hero-section dot-bg flex flex-col md:flex-row items-center justify-between gap-6" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -40, right: -40, width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,168,83,.1), transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(212,168,83,.7)', marginBottom: 10 }}>Get In Touch</div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 26, fontWeight: 800, color: '#fff', marginBottom: 10, letterSpacing: '-.02em' }}>
            Trusted Lubricant Partner Since 2017
          </h2>
          <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.5)', lineHeight: 1.65, maxWidth: 480 }}>
            Whether you need a technical specification, distributor inquiry, or product
            information — reach us directly on WhatsApp or email. We respond fast.
          </p>
          <a
            href="https://wa.me/919030219096"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 18,
              background: '#22c55e', color: '#fff', fontWeight: 700, fontSize: 13.5,
              padding: '10px 20px', borderRadius: 10, textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(34,197,94,0.35)', transition: 'opacity .18s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <MessageSquare size={15} /> WhatsApp Us Now
          </a>
        </div>
        <div style={{ position: 'relative', zIndex: 1, flexShrink: 0 }} className="hidden lg:block">
          <div style={{ background: 'rgba(255,255,255,.95)', borderRadius: 20, padding: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.35)', height: 160, width: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/ck-logo.svg" alt="CK Industries" style={{ height: '100%', width: '100%', objectFit: 'contain', display: 'block', borderRadius: 8 }} />
          </div>
        </div>
      </div>

      {/* ── Contact Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {CONTACTS.map(({ icon: Icon, label, value, note, color }) => (
          <div key={label} className="card card-hover" style={{ padding: '18px 20px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{ width: 40, height: 40, borderRadius: 11, background: `${color}12`, border: `1px solid ${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon size={18} style={{ color }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 4 }}>{label}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-1)', marginBottom: 3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</div>
              <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{note}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Supply Coverage Banner ── */}
      <div className="card" style={{ padding: '22px 28px', background: 'linear-gradient(135deg, #080f1e 0%, #0d1829 100%)', border: '1.5px solid rgba(255,255,255,0.07)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
          <MapPin size={16} style={{ color: 'var(--gold)' }} />
          <h2 style={{ fontFamily: "'Sora',sans-serif", fontSize: 15, fontWeight: 700, color: '#fff' }}>
            We Supply Across South India
          </h2>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,.45)', marginBottom: 16, lineHeight: 1.6 }}>
          CK Industries distributes its full range of lubricants, greases, and hydraulic oils across the following states:
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {SUPPLY_STATES.map(({ name, flag, color }) => (
            <div
              key={name}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: `${color}14`, border: `1.5px solid ${color}30`,
                borderRadius: 12, padding: '12px 20px',
                flex: '1 1 160px',
              }}
            >
              <span style={{ fontSize: 22 }}>{flag}</span>
              <div>
                <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 13.5, fontWeight: 700, color: '#fff' }}>{name}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.4)', marginTop: 1 }}>Active distribution</div>
              </div>
              <div style={{ marginLeft: 'auto', width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Hours + Sub-brands ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        <div className="card" style={{ padding: '22px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <Clock size={15} style={{ color: 'var(--gold)' }} />
            <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 14, fontWeight: 700, color: 'var(--text-1)' }}>Business Hours</h3>
          </div>
          {[
            { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM IST',  open: true  },
            { day: 'Saturday',        time: '10:00 AM – 4:00 PM IST', open: true  },
            { day: 'Sunday',          time: 'Closed',                  open: false },
          ].map(({ day, time, open }) => (
            <div key={day} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontSize: 13.5, color: 'var(--text-2)', fontWeight: 500 }}>{day}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: open ? 'var(--text-1)' : '#9ca3af' }}>{time}</span>
            </div>
          ))}
          <div style={{ marginTop: 14, fontSize: 12.5, color: 'var(--text-3)', lineHeight: 1.55 }}>
            📞 Quick enquiry: +91 90302 19096 (WhatsApp 24×7)
          </div>
        </div>

        <div className="card" style={{ padding: '22px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <Award size={15} style={{ color: 'var(--gold)' }} />
            <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 14, fontWeight: 700, color: 'var(--text-1)' }}>Our Sub-Brands</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {SUB_BRANDS.map(({ logo, name, desc, accent }) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 12px', borderRadius: 9, border: '1px solid var(--border)', background: 'var(--surface-2)' }}>
                <div style={{ background: '#fff', borderRadius: 7, padding: '4px 10px', height: 34, display: 'flex', alignItems: 'center', minWidth: 70, border: `1px solid ${accent}25` }}>
                  <img src={logo} alt={name} style={{ height: 22, width: 'auto', objectFit: 'contain' }} />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-1)' }}>{name}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--text-3)' }}>{desc}</div>
                </div>
                <div style={{ marginLeft: 'auto', width: 8, height: 8, borderRadius: '50%', background: accent, flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Certifications ── */}
      <div className="card" style={{ padding: '22px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <Award size={15} style={{ color: 'var(--gold)' }} />
          <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 14, fontWeight: 700, color: 'var(--text-1)' }}>Certifications & Compliance</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CERTIFICATIONS.map(({ label, desc }) => (
            <div key={label} style={{ textAlign: 'center', padding: '14px 10px', background: 'var(--surface-2)', borderRadius: 10, border: '1.5px solid var(--border)' }}>
              <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 13, fontWeight: 700, color: 'var(--navy)', marginBottom: 4 }}>{label}</div>
              <div style={{ fontSize: 11, color: 'var(--text-3)', lineHeight: 1.4 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

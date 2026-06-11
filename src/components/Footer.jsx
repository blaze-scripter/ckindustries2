import React from 'react';
import { FileText, Shield, Phone, Globe, Mail, ExternalLink } from 'lucide-react';

const COLS = [
  {
    heading: 'Compliance & Safety',
    links: [
      { label: 'MSDS Repository',             icon: FileText },
      { label: 'Product Data Sheets (PDS)',    icon: FileText },
      { label: 'ISO 9001:2015 Certificate',    icon: Shield   },
      { label: 'BIS / IS Compliance',          icon: Shield   },
      { label: 'REACH Declaration',            icon: Shield   },
    ],
  },
  {
    heading: 'Technical Resources',
    links: [
      { label: 'Lubricant Selection Guide',    icon: FileText },
      { label: 'Oil Drain Interval Calculator',icon: FileText },
      { label: 'Viscosity Grade Chart',        icon: FileText },
      { label: 'API / ACEA Cross-Reference',   icon: FileText },
    ],
  },
  {
    heading: 'Corporate',
    links: [
      { label: 'About Us',                     icon: Globe    },
      { label: 'Distributor Programme',        icon: Globe    },
      { label: 'Careers',                      icon: Globe    },
      { label: 'Privacy Policy',               icon: Shield   },
      { label: 'Legal Notice',                 icon: Shield   },
    ],
  },
  {
    heading: 'Contact & Support',
    links: [
      { label: 'Helpline: 1800-XXX-XXXX',   icon: Phone   },
      { label: 'technical@ck-industries.in',   icon: Mail    },
      { label: 'enquiry@ck-industries.in',     icon: Mail    },
      { label: 'Distributor Locator',        icon: Globe   },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Brand strip at top */}
      <div style={{
        padding: '28px 40px 24px',
        borderBottom: '1px solid rgba(255,255,255,.07)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ background: '#fff', borderRadius: 12, padding: '8px 14px', height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', minWidth: 80 }}>
            <img
              src="/ck-logo.jpg"
              alt="CK Industries"
              style={{ height: 34, width: 'auto', objectFit: 'contain', display: 'block' }}
            />
          </div>
          <div>
            <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 700, color: '#fff', letterSpacing: '.04em' }}>CK INDUSTRIES</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,.35)', marginTop: 3 }}>India's Trusted Industrial Lubricants Partner · Est. 1985</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['ISO 9001:2015', 'API Certified', 'ACEA A3/B4', 'BIS', 'REACH'].map(c => (
            <span key={c} className="cert-badge">{c}</span>
          ))}
        </div>
      </div>

      {/* Links Grid */}
      <div style={{ padding: '28px 40px 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
        {COLS.map(({ heading, links }) => (
          <div key={heading}>
            <div className="footer-heading">{heading}</div>
            {links.map(({ label, icon: Icon }) => (
              <button key={label} className="footer-link">
                <Icon size={13} style={{ color: 'rgba(255,255,255,.25)', flexShrink: 0 }} />
                <span style={{ flex: 1 }}>{label}</span>
                <ExternalLink size={10} style={{ color: 'rgba(255,255,255,.15)', flexShrink: 0 }} />
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom strip */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,.07)',
        padding: '16px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 12,
        background: 'rgba(0,0,0,.15)',
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {['ISO 9001:2015', 'API Certified', 'ACEA A3/B4', 'BIS', 'REACH'].map(c => (
            <span key={c} className="cert-badge">{c}</span>
          ))}
        </div>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,.2)' }}>
          © 2025 CK Industries — GST: XXAABCX1234X1Z5
        </span>
      </div>
    </footer>
  );
}

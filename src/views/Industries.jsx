import React from 'react';
import { ArrowRight, ChevronRight, Truck, Factory, Zap, Cpu, Anchor, Wind, Wrench, Flame } from 'lucide-react';

const INDUSTRIES = [
  {
    icon: Truck,    color: '#f97316',
    title: 'Automotive & Fleet',
    desc: 'Engine oils, transmission fluids, brake fluids and greases for passenger cars, trucks, and logistics fleets.',
    products: ['MAXSYNTH 5W-30 SP', 'ENDUROMAX 15W-40 CI-4+', 'GUARDEX Coolant-X 50/50'],
    metric: '3,200+ fleet clients',
  },
  {
    icon: Factory,  color: '#64748b',
    title: 'Steel & Metal Processing',
    desc: 'Rolling oils, cutting fluids, and hydraulic oils for rolling mills, presses, and heat treatment equipment.',
    products: ['MAXSYNTH Industrial HD 46', 'Chain & Drive EP 220', 'Rust Preventive RP-15'],
    metric: '85+ steel plant accounts',
  },
  {
    icon: Flame,    color: '#ef4444',
    title: 'Power Generation',
    desc: 'Turbine oils, steam cylinder oils, and transformer oils for thermal, hydro, and gas-based power plants.',
    products: ['Turbine Oil T-46 (R&O)', 'Steam Cylinder Oil 460', 'MAXSYNTH Industrial HD 100'],
    metric: '12 power stations',
  },
  {
    icon: Zap,      color: '#d97706',
    title: 'Mining & Construction',
    desc: 'Open-gear lubricants, rock-drill oils, and heavy-duty hydraulics for excavators and drilling rigs.',
    products: ['ENDUROMAX Gear EP 85W-140', 'Open Gear Compound OGC-460', 'Mining Hydraulic HV-46'],
    metric: '40+ mining sites',
  },
  {
    icon: Anchor,   color: '#3b82f6',
    title: 'Marine & Shipping',
    desc: 'Marine diesel engine oils, stern tube lubricants, and hydraulic oils for inland and coastal fleets.',
    products: ['Marine Diesel Oil SAE 40', 'Stern Tube Oil STO-100', 'Marine Hydraulic MH-46'],
    metric: '200+ vessels equipped',
  },
  {
    icon: Cpu,      color: '#22c55e',
    title: 'Pharmaceutical & Food',
    desc: 'NSF H1 food-grade lubricants, white mineral oils, and USDA approved greases for pharma & food processing.',
    products: ['FoodSafe Gear Oil FG-220', 'FoodSafe Grease H1 NLGI 2', 'White Mineral Oil WMO-15'],
    metric: 'NSF H1 & USDA certified',
  },
  {
    icon: Wind,     color: '#ec4899',
    title: 'Textile & Spinning',
    desc: 'Spindle oils, knitting machine oils, and gear lubricants for high-speed textile machinery.',
    products: ['Spindle Oil SO-10', 'GUARDEX Protek 10W-40', 'Knitting Machine Oil KMO-32'],
    metric: '180+ textile mills',
  },
  {
    icon: Wrench,   color: '#14b8a6',
    title: 'Compressors & HVAC',
    desc: 'Rotary screw, reciprocating, and centrifugal compressor oils plus refrigeration lubricants.',
    products: ['Compressor Oil CP-100', 'Refrigerant Oil POE-32', 'MAXSYNTH Industrial HD 46'],
    metric: 'Compatible R-22 to R-407C',
  },
];

export default function Industries({ setActive }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* Header */}
      <div className="card" style={{ padding: '24px 28px' }}>
        <h1 className="page-title">Industry Applications</h1>
        <p className="page-subtitle">Sector-specific lubricant solutions — from precision pharmaceuticals to heavy mining</p>
      </div>

      {/* Hero banner */}
      <div
        className="hero-section dot-bg flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', top: -40, right: -40, width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,168,83,.1), transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 520 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(212,168,83,.7)', marginBottom: 10 }}>Application Engineering</div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 26, fontWeight: 800, color: '#fff', marginBottom: 10, letterSpacing: '-.02em' }}>
            The Right Lubricant for Every Industry
          </h2>
          <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.5)', lineHeight: 1.65, marginBottom: 0 }}>
            Our application engineers work with OEMs and plant teams to identify the optimal lubricant specification for each machine, environment, and operating cycle.
          </p>
        </div>
        <button
          className="btn-gold"
          style={{ height: 42, padding: '0 22px', fontSize: 14, flexShrink: 0, zIndex: 1, position: 'relative' }}
          onClick={() => setActive('contact')}
        >
          Contact Our Team <ArrowRight size={15} />
        </button>
      </div>

      {/* Industry Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
        {INDUSTRIES.map(({ icon: Icon, color, title, desc, products, metric }) => (
          <div
            key={title}
            className="card card-hover industry-card"
            onClick={() => setActive('products')}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: `${color}12`, border: `1px solid ${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={20} style={{ color }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 15, fontWeight: 700, color: 'var(--text-1)' }}>{title}</h3>
                  <ChevronRight size={16} className="industry-arrow" style={{ color: 'var(--text-3)' }} />
                </div>
                <span style={{ fontSize: 12, color: 'var(--text-3)', fontWeight: 500 }}>{metric}</span>
              </div>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 14 }}>{desc}</p>
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12 }}>
              <div className="section-label" style={{ marginBottom: 8 }}>Recommended Products</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {products.slice(0, 3).map(p => (
                  <span key={p} style={{
                    fontSize: 11.5, fontWeight: 500, padding: '3px 10px', borderRadius: 6,
                    background: `${color}0f`, color, border: `1px solid ${color}25`,
                  }}>{p}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="card flex-between" style={{ padding: '22px 28px', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-1)' }}>Don't see your industry listed?</div>
          <div style={{ fontSize: 13, color: 'var(--text-3)', marginTop: 3 }}>We serve 30+ niche industrial segments — contact our engineering team.</div>
        </div>
        <button className="btn-primary" onClick={() => setActive('contact')} style={{ height: 40 }}>
          Contact Technical Team <ArrowRight size={14} />
        </button>
      </div>

    </div>
  );
}

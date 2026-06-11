import React, { useState, useMemo } from 'react';
import { ShoppingCart, Package, Plus, Minus, X, FileText, Truck, AlertCircle, CheckCircle2, ChevronDown, ChevronUp, Calculator, Phone } from 'lucide-react';

const CATALOG = [
  { id:'ms530',  cat:'Automotive',       name:'MAXSYNTH Ultra 5W-30',      spec:'API SP / DEXOS 1 Gen 3',        vols:['1L','5L','20L Pail'],                   prices:{'1L':520,'5L':2400,'20L Pail':8800} },
  { id:'ms040',  cat:'Automotive',       name:'MAXSYNTH Racing 0W-40',     spec:'API SN+ / BMW LL-04',           vols:['1L','4L','20L Pail'],                   prices:{'1L':680,'4L':2600,'20L Pail':11500} },
  { id:'gp1040', cat:'Automotive',       name:'GUARDEX Protek 10W-40',     spec:'API SN / ACEA A3/B4',          vols:['1L','4L','5L','20L Pail'],              prices:{'1L':380,'4L':1400,'5L':1700,'20L Pail':6200} },
  { id:'em1540', cat:'Heavy-Duty Diesel',name:'ENDUROMAX 15W-40 CI-4+',   spec:'API CI-4+ / ACEA E7',          vols:['5L','20L Pail','210L Barrel','1000L IBC'],prices:{'5L':1800,'20L Pail':6500,'210L Barrel':62000,'1000L IBC':285000} },
  { id:'em2050', cat:'Heavy-Duty Diesel',name:'ENDUROMAX 20W-50',         spec:'API SL / JASO MA2',             vols:['1L','2L','5L','20L Pail'],              prices:{'1L':280,'2L':540,'5L':1250,'20L Pail':4800} },
  { id:'ms46',   cat:'Industrial Gear',  name:'MAXSYNTH Industrial HD 46', spec:'DIN 51524 HVLP / Denison HF-0',vols:['20L Pail','60L Drum','210L Barrel'],    prices:{'20L Pail':7200,'60L Drum':20000,'210L Barrel':68000} },
  { id:'emgear', cat:'Industrial Gear',  name:'ENDUROMAX Gear EP 85W-140', spec:'API GL-5 / MIL-L-2105D',       vols:['1L','5L','20L Pail','210L Barrel'],     prices:{'1L':310,'5L':1400,'20L Pail':5200,'210L Barrel':52000} },
  { id:'gxgrease',cat:'High-Temp Grease',name:'GUARDEX HT Grease NLGI 2', spec:'DIN 51825 KP2K / IP 296',      vols:['500g Cartridge','5kg Pail','50kg Drum'],prices:{'500g Cartridge':180,'5kg Pail':1400,'50kg Drum':13000} },
  { id:'gxcool', cat:'High-Temp Grease', name:'GUARDEX Coolant-X 50/50',   spec:'ASTM D3306 / IS 5592',         vols:['1L','5L','20L Pail'],                   prices:{'1L':220,'5L':980,'20L Pail':3600} },
];

const CATS = ['All','Automotive','Heavy-Duty Diesel','Industrial Gear','High-Temp Grease'];

const TIERS = [
  { label:'Standard',  min:0,      max:49999,  pct:0  },
  { label:'Silver',    min:50000,  max:149999, pct:5  },
  { label:'Gold',      min:150000, max:499999, pct:9  },
  { label:'Platinum',  min:500000, max:Infinity,pct:14 },
];

const inr = n => new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(n);

function Row({ p, cartItem, onToggle, onVol, onQty }) {
  const [open, setOpen] = useState(false);
  const selected = !!cartItem;
  const vol = cartItem?.vol || p.vols[0];
  const qty = cartItem?.qty || 1;
  const price = p.prices[vol] || 0;

  return (
    <div
      className={`product-row ${selected ? 'selected' : ''}`}
      style={{ borderColor: selected ? 'var(--gold)' : 'var(--border)' }}
    >
      <div className="product-row-header" onClick={() => setOpen(o => !o)}>
        {/* Checkbox */}
        <button
          onClick={e => { e.stopPropagation(); onToggle(p.id, vol); }}
          style={{
            width: 20, height: 20, borderRadius: 5, flexShrink: 0, cursor: 'pointer',
            border: selected ? '2px solid var(--gold)' : '2px solid #d1d5db',
            background: selected ? 'var(--gold)' : '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all .15s',
          }}
        >
          {selected && <span style={{ color: 'var(--navy)', fontSize: 11, fontWeight: 800 }}>✓</span>}
        </button>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text-1)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</div>
          <div style={{ fontSize: 11.5, color: 'var(--text-3)', fontFamily: "'SF Mono', 'Fira Code', monospace", marginTop: 2 }}>{p.spec}</div>
        </div>

        <span style={{
          fontSize: 11.5, fontWeight: 500, padding: '3px 9px', borderRadius: 6,
          background: 'var(--surface-2)', color: 'var(--text-3)', border: '1px solid var(--border)',
          flexShrink: 0, display: 'none',
        }} className="sm-show">{p.cat}</span>

        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-1)' }}>{inr(price)}</div>
          <div style={{ fontSize: 11.5, color: 'var(--text-3)' }}>per {vol}</div>
        </div>

        {open
          ? <ChevronUp size={15} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
          : <ChevronDown size={15} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
        }
      </div>

      {open && (
        <div className="product-row-expanded">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
            {/* Pack size */}
            <div>
              <label className="form-label">Pack Size</label>
              <select
                value={vol}
                onChange={e => { onVol(p.id, e.target.value); if (!cartItem) onToggle(p.id, e.target.value); }}
                onClick={e => e.stopPropagation()}
                className="portal-input"
                style={{ cursor: 'pointer' }}
              >
                {p.vols.map(v => <option key={v} value={v}>{v} — {inr(p.prices[v])}</option>)}
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label className="form-label">Quantity</label>
              <div className="qty-stepper" onClick={e => e.stopPropagation()}>
                <button className="qty-btn" onClick={() => { onQty(p.id, Math.max(1, qty - 1)); if (!cartItem) onToggle(p.id, vol); }}>−</button>
                <input
                  type="number" min="1"
                  value={qty}
                  onChange={e => onQty(p.id, Math.max(1, parseInt(e.target.value)||1))}
                  className="qty-display"
                  onClick={e => e.stopPropagation()}
                />
                <button className="qty-btn" onClick={() => { onQty(p.id, qty + 1); if (!cartItem) onToggle(p.id, vol); }}>+</button>
              </div>
            </div>

            {/* Line total */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <label className="form-label">Line Total</label>
              <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 22, fontWeight: 800, color: 'var(--text-1)', lineHeight: 1 }}>
                {inr(price * qty)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function OrderPortal() {
  const [cat, setCat] = useState('All');
  const [cart, setCart] = useState({});
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ company:'', name:'', phone:'', email:'', notes:'' });

  const filtered = CATALOG.filter(p => cat === 'All' || p.cat === cat);

  const toggle = (id, vol) => setCart(c => {
    if (c[id]) { const n={...c}; delete n[id]; return n; }
    return { ...c, [id]: { vol: vol || CATALOG.find(p=>p.id===id)?.vols[0], qty: 1 } };
  });
  const setVol = (id, vol) => setCart(c => c[id] ? { ...c, [id]: { ...c[id], vol } } : c);
  const setQty = (id, qty) => setCart(c => c[id] ? { ...c, [id]: { ...c[id], qty } } : c);

  const subtotal = useMemo(() =>
    Object.entries(cart).reduce((s, [id, { vol, qty }]) => {
      const p = CATALOG.find(p => p.id===id);
      return s + (p?.prices[vol]||0) * qty;
    }, 0), [cart]);

  const tier = TIERS.find(t => subtotal >= t.min && subtotal <= t.max) || TIERS[0];
  const disc = Math.round(subtotal * tier.pct / 100);
  const total = subtotal - disc;
  const count = Object.keys(cart).length;

  if (done) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 480 }}>
      <div className="card" style={{ padding: '52px 48px', textAlign: 'center', maxWidth: 480 }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#f0fdf4', border: '2px solid #22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <CheckCircle2 size={32} color="#22c55e" />
        </div>
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 22, fontWeight: 700, color: 'var(--text-1)', marginBottom: 10 }}>Quote Request Submitted!</h2>
        <p style={{ fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.65, marginBottom: 20 }}>
          Our B2B sales team will send a detailed quotation to <strong>{form.email||'your email'}</strong> within <strong>4 business hours</strong>.
        </p>
        <div style={{ background: 'var(--surface-2)', borderRadius: 10, padding: '12px 20px', fontSize: 13, color: 'var(--text-2)', marginBottom: 24 }}>
          Reference: <strong style={{ color: 'var(--text-1)' }}>CKL-{Date.now().toString().slice(-8)}</strong>
        </div>
        <button className="btn-gold" style={{ width: '100%', height: 40, justifyContent: 'center' }}
          onClick={() => { setDone(false); setCart({}); setForm({company:'',name:'',phone:'',email:'',notes:''}); }}>
          Place Another Order
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* Header */}
      <div className="card" style={{ padding: '24px 28px' }}>
        <div className="flex-between" style={{ flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h1 className="page-title">B2B Order Portal</h1>
            <p className="page-subtitle">Configure your bulk order — volume pricing applied automatically</p>
          </div>
          {count > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#fff7ed', border: '1.5px solid #fed7aa', borderRadius: 9, padding: '7px 14px', fontSize: 13, fontWeight: 600, color: '#c2410c' }}>
              <ShoppingCart size={14} /> {count} product{count!==1?'s':''} selected
            </div>
          )}
        </div>

        {/* Category Filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
          {CATS.map(c => (
            <button key={c} onClick={() => setCat(c)}
              style={{
                padding: '6px 16px', borderRadius: 99, fontSize: 13, fontWeight: 500,
                border: 'none', cursor: 'pointer', fontFamily: 'inherit', transition: 'all .18s',
                background: cat === c ? 'var(--navy)' : 'var(--surface-2)',
                color: cat === c ? '#fff' : 'var(--text-2)',
              }}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20, alignItems: 'start' }}>

        {/* Product List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Package size={14} style={{ color: 'var(--text-3)' }} />
            <span className="section-label">Select Products ({filtered.length} available)</span>
          </div>
          {filtered.map(p => (
            <Row key={p.id} p={p} cartItem={cart[p.id]} onToggle={toggle} onVol={setVol} onQty={setQty} />
          ))}
        </div>

        {/* Right Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* Discount Tiers */}
          <div className="card" style={{ padding: '18px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 14 }}>
              <Calculator size={13} style={{ color: 'var(--text-3)' }} />
              <span className="section-label">Volume Pricing Tiers</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {TIERS.map(t => (
                <div key={t.label} className={`tier-row ${tier.label===t.label ? 'active' : ''}`}>
                  <span style={{ fontWeight: 700, fontSize: 13, color: tier.label===t.label ? 'var(--gold)' : 'var(--text-2)' }}>{t.label}</span>
                  <span style={{ fontSize: 12, color: tier.label===t.label ? '#d97706' : 'var(--text-3)' }}>{t.pct>0?`${t.pct}% off`:'List price'}</span>
                  <span style={{ fontSize: 11.5, color: 'var(--text-3)' }}>
                    {t.max===Infinity ? `≥ ${inr(t.min)}` : `${inr(t.min)}+`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="card" style={{ padding: '18px 20px' }}>
            <div className="section-label" style={{ marginBottom: 14 }}>Order Summary</div>
            {count === 0 ? (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <ShoppingCart size={28} style={{ color: '#e5e7eb', margin: '0 auto 8px' }} />
                <div style={{ fontSize: 13, color: 'var(--text-3)' }}>No products selected</div>
                <div style={{ fontSize: 12, color: '#d1d5db', marginTop: 4 }}>Check products from the catalog</div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
                {Object.entries(cart).map(([id, { vol, qty }]) => {
                  const p = CATALOG.find(p => p.id===id);
                  const lt = (p?.prices[vol]||0)*qty;
                  return (
                    <div key={id} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <button onClick={() => toggle(id)} style={{ background:'none', border:'none', cursor:'pointer', color:'#d1d5db', paddingTop: 1, flexShrink: 0 }}
                        onMouseEnter={e=>e.currentTarget.style.color='#ef4444'}
                        onMouseLeave={e=>e.currentTarget.style.color='#d1d5db'}>
                        <X size={13} />
                      </button>
                      <div style={{ flex:1, minWidth:0 }}>
                        <div style={{ fontSize:12.5, fontWeight:500, color:'var(--text-1)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{p?.name}</div>
                        <div style={{ fontSize:12, color:'var(--text-3)' }}>{qty}× {vol}</div>
                      </div>
                      <div style={{ fontSize:13, fontWeight:700, color:'var(--text-1)', flexShrink:0 }}>{inr(lt)}</div>
                    </div>
                  );
                })}
              </div>
            )}

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display:'flex', justifyContent:'space-between', fontSize:13.5, color:'var(--text-2)' }}>
                <span>Subtotal</span><span style={{ fontWeight:600 }}>{inr(subtotal)}</span>
              </div>
              {tier.pct > 0 && (
                <div style={{ display:'flex', justifyContent:'space-between', fontSize:13.5, color:'#16a34a' }}>
                  <span style={{ display:'flex', alignItems:'center', gap:6 }}>
                    <span style={{ fontSize:11, fontWeight:700, background:'#f0fdf4', color:'#15803d', border:'1px solid #bbf7d0', borderRadius:5, padding:'1px 7px' }}>{tier.label}</span>
                    {tier.pct}% off
                  </span>
                  <span style={{ fontWeight:600 }}>−{inr(disc)}</span>
                </div>
              )}
              <div style={{ display:'flex', justifyContent:'space-between', borderTop:'1px solid var(--border)', paddingTop:10, marginTop:2 }}>
                <span style={{ fontFamily:"'Sora',sans-serif", fontSize:15, fontWeight:800, color:'var(--text-1)' }}>Total</span>
                <span style={{ fontFamily:"'Sora',sans-serif", fontSize:20, fontWeight:800, color:'var(--text-1)' }}>{inr(total)}</span>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:5, fontSize:11.5, color:'var(--text-3)' }}>
                <AlertCircle size={11} /> Excl. GST & freight. Final quote via email.
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="card" style={{ padding: '18px 20px' }}>
            <div className="form-section-title" style={{ marginBottom: 14 }}>Request Commercial Quote</div>
            <form onSubmit={e => { e.preventDefault(); if(count>0) setDone(true); }} style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {[
                { id:'company', label:'Company Name',      type:'text',  ph:'ABC Industries Pvt. Ltd.' },
                { id:'name',    label:'Contact Person',    type:'text',  ph:'Full Name' },
                { id:'phone',   label:'Phone / WhatsApp',  type:'tel',   ph:'+91 XXXXX XXXXX' },
                { id:'email',   label:'Business Email',    type:'email', ph:'procurement@company.com' },
              ].map(({ id, label, type, ph }) => (
                <div key={id}>
                  <label className="form-label">{label}</label>
                  <input type={type} placeholder={ph} value={form[id]} required
                    onChange={e => setForm(f=>({...f,[id]:e.target.value}))}
                    className="portal-input" />
                </div>
              ))}
              <div>
                <label className="form-label">Additional Notes</label>
                <textarea placeholder="Delivery location, urgency, special packaging…" value={form.notes} rows={2}
                  onChange={e => setForm(f=>({...f,notes:e.target.value}))}
                  className="portal-input portal-textarea" style={{ height: 'auto' }} />
              </div>

              <button type="submit"
                style={{
                  height: 42, borderRadius: 9, border: 'none', cursor: count>0?'pointer':'not-allowed',
                  background: count>0 ? 'linear-gradient(135deg, var(--gold), var(--gold-bright))' : 'var(--surface-3)',
                  color: count>0 ? 'var(--navy)' : 'var(--text-3)',
                  fontSize: 14, fontWeight: 700, fontFamily: 'inherit',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  transition: 'all .18s',
                  boxShadow: count>0 ? '0 2px 10px rgba(212,168,83,.3)' : 'none',
                }}
              >
                <FileText size={15} /> Submit Quote Request
              </button>

              <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:6, fontSize:12.5, color:'var(--text-3)' }}>
                <Phone size={12} />
                Or call: <a href="tel:+911800XXXXXX" style={{ color:'#3b82f6', fontWeight:500, textDecoration:'none' }}>1800-XXX-XXXX</a> (B2B Helpline)
              </div>
            </form>
          </div>

          {/* Logistics note */}
          <div style={{ background:'#eff6ff', border:'1.5px solid #bfdbfe', borderRadius: 'var(--radius-sm)', padding:'14px 16px', display:'flex', gap:10, fontSize:13, color:'#1d4ed8', lineHeight:1.55 }}>
            <Truck size={15} style={{ flexShrink:0, marginTop:1, color:'#3b82f6' }} />
            <div><strong>48-Hour Bulk Dispatch</strong> — Orders &gt;20L dispatched from our nearest hub (Delhi / Mumbai / Bengaluru). Freight on actuals or ex-works.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

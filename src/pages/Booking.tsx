import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sx } from '../lib/sx';
import { Logo } from '../components/Logo';
import { Icon } from '../components/Icon';
import { Checkbox } from '../components/Checkbox';
import { packages, addons } from '../data/content';

export default function Booking() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<'package' | 'quote'>('package');

  return (
    <div className="ep-page ep-mobile-tabbar-space">
      <header className="ep-desktop-only" style={sx('display:flex;align-items:center;gap:20px;padding:26px 56px;border-bottom:1px solid #EFEAE2')}>
        <Logo height={20} />
        <span style={sx('width:1px;height:18px;background:#E3DDD3')} />
        <span style={sx('font-size:13.5px;font-weight:700')}>Booking request</span>
        <span style={sx('font-size:13.5px;color:#5D6D78')}>Fern &amp; Fig Catering</span>
        <span style={sx('flex:1')} />
        <span style={sx('font-size:11px;font-weight:600;color:#5D6D78')}>Draft saved 2 min ago</span>
        <button onClick={() => navigate('/vendor')} className="ep-link-plain" style={sx('font-size:13.5px;font-weight:600;color:#5D6D78')}>Cancel</button>
      </header>

      <header className="ep-mobile-only" style={sx('display:flex;align-items:center;gap:14px;padding:14px 18px;border-bottom:1px solid #EFEAE2')}>
        <button onClick={() => navigate('/vendor')} className="ep-link-plain" style={sx('display:flex')}><Icon name="chevL" size={16} strokeWidth={2} /></button>
        <span style={sx('font-size:14.5px;font-weight:800')}>Booking request</span>
      </header>

      <div className="ep-split" style={sx('display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,1fr);gap:64px;padding:56px 56px 104px')}>
        <main style={sx('max-width:680px')}>
          <h1 className="ep-desktop-only" style={sx("margin:0;font-family:'Manrope',sans-serif;font-size:44px;line-height:1.02;letter-spacing:-0.04em;font-weight:800")}>Tell them about the day.</h1>
          <p className="ep-desktop-only" style={sx('margin:14px 0 0;max-width:520px;font-size:16px;line-height:1.6;color:#4A5A66')}>Fern &amp; Fig has 48 hours to accept. Nothing is charged until they do.</p>
          <p className="ep-mobile-only" style={sx('margin:16px 18px 0;font-size:14px;line-height:1.55;color:#4A5A66')}>Fern &amp; Fig has 48 hours to accept. Nothing is charged until they do.</p>

          <div className="ep-form-section" style={sx('margin-top:44px;padding-top:16px;border-top:2px solid #16212B')}>
            <div style={sx('font-size:11px;font-weight:800;letter-spacing:0.13em;text-transform:uppercase;color:#5D6D78')}>01 · Event details</div>
            <div className="ep-form-grid" style={sx('display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:20px')}>
              <label><span style={sx('display:block;font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>Event type</span><input defaultValue="Wedding reception" style={sx('width:100%;margin-top:7px;border:1px solid #E3DDD3;border-radius:12px;padding:12px;outline:none;font-weight:600')} /></label>
              <label><span style={sx('display:block;font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>Date</span><input defaultValue="Sat, Jun 20, 2026" style={sx('width:100%;margin-top:7px;border:1px solid #E3DDD3;border-radius:12px;padding:12px;outline:none;font-weight:600')} /></label>
              <label><span style={sx('display:block;font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>Service starts</span><input defaultValue="5:30 PM" style={sx('width:100%;margin-top:7px;border:1px solid #E3DDD3;border-radius:12px;padding:12px;outline:none;font-weight:600')} /></label>
              <label><span style={sx('display:block;font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>Guests</span><input defaultValue="120" style={sx('width:100%;margin-top:7px;border:1px solid #E3DDD3;border-radius:12px;padding:12px;outline:none;font-weight:600')} /></label>
            </div>
            <label style={sx('display:block;margin-top:16px')}><span style={sx('display:block;font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>Venue</span><input defaultValue="The Glasshouse, 1180 Lakeshore Rd E, Mississauga, ON" style={sx('width:100%;margin-top:7px;border:1px solid #E3DDD3;border-radius:12px;padding:12px;outline:none;font-weight:600')} /></label>
            <label style={sx('display:flex;align-items:center;gap:10px;margin-top:14px;font-size:13.5px;cursor:pointer')}>
              <Checkbox checked />The venue has a commercial kitchen on site
            </label>
          </div>

          <div style={sx('margin-top:48px;padding-top:16px;border-top:2px solid #16212B')}>
            <div style={sx('font-size:11px;font-weight:800;letter-spacing:0.13em;text-transform:uppercase;color:#5D6D78')}>02 · How you want to book</div>
            <div style={sx('display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:20px')}>
              <button
                onClick={() => setMode('package')}
                className="ep-link-plain"
                style={{ textAlign: 'left', padding: mode === 'package' ? 22 : 18, background: mode === 'package' ? '#FEF7F0' : '#FFFFFF', border: mode === 'package' ? '2px solid #16212B' : '1px solid #E3DDD3', borderRadius: 16 }}
              >
                <div style={sx('font-size:15px;font-weight:800')}>Book a published package</div>
                <div style={sx('margin-top:6px;font-size:13px;line-height:1.5;color:#5A6A75')}>Fixed price, accepted or declined in 48h.</div>
              </button>
              <button
                onClick={() => setMode('quote')}
                className="ep-link-plain ep-hover-border"
                style={{ textAlign: 'left', padding: mode === 'quote' ? 22 : 18, background: mode === 'quote' ? '#FEF7F0' : '#FFFFFF', border: mode === 'quote' ? '2px solid #16212B' : '1px solid #E3DDD3', borderRadius: 16 }}
              >
                <div style={sx('font-size:15px;font-weight:800')}>Ask for a custom quote</div>
                <div style={sx('margin-top:6px;font-size:13px;line-height:1.5;color:#5A6A75')}>Send a brief, get a written price back.</div>
              </button>
            </div>
            <div style={sx('margin-top:26px')}>
              {packages.map((p, i) => (
                <label key={p.name} style={sx('display:flex;align-items:center;gap:16px;padding:16px 0;border-top:1px solid #EBE6DE;cursor:pointer')}>
                  <span style={sx('width:16px;height:16px;flex:none;border:1.5px solid #16212B;border-radius:50%;position:relative')}>
                    <span style={{ position: 'absolute', inset: 3, borderRadius: '50%', background: i === 0 ? '#FF6B6B' : 'transparent' }} />
                  </span>
                  <span style={sx('flex:1;min-width:0')}>
                    <span style={sx('display:block;font-size:15.5px;font-weight:700')}>{p.name}</span>
                    <span style={sx('display:block;margin-top:3px;font-size:13px;color:#5D6D78')}>{p.min} · {p.desc}</span>
                  </span>
                  <span style={sx('flex:none;font-size:16px;font-weight:800')}>{p.price}<span style={sx('font-size:11.5px;font-weight:600;color:#5D6D78')}>/guest</span></span>
                </label>
              ))}
            </div>
          </div>

          <div style={sx('margin-top:48px;padding-top:16px;border-top:2px solid #16212B')}>
            <div style={sx('font-size:11px;font-weight:800;letter-spacing:0.13em;text-transform:uppercase;color:#5D6D78')}>03 · Add-ons</div>
            <div style={sx('margin-top:18px')}>
              {addons.map((a) => (
                <label key={a.name} style={sx('display:flex;align-items:center;gap:14px;padding:12px 0;border-top:1px solid #F1ECE4;cursor:pointer')}>
                  <Checkbox checked={a.checked} />
                  <span style={sx('flex:1;font-size:14.5px;font-weight:600')}>{a.name}</span>
                  <span style={sx('font-size:14.5px;font-weight:700')}>{a.price}</span>
                </label>
              ))}
            </div>
          </div>

          <div style={sx('margin-top:48px;padding-top:16px;border-top:2px solid #16212B')}>
            <div style={sx('font-size:11px;font-weight:800;letter-spacing:0.13em;text-transform:uppercase;color:#5D6D78')}>04 · Anything they should know</div>
            <textarea rows={4} defaultValue="Two guests are coeliac and four are vegan. We'd like the bread service moved to after the toasts." style={sx('width:100%;margin-top:18px;border:1px solid #E3DDD3;border-radius:12px;padding:14px;outline:none;line-height:1.6;resize:vertical')} />
            <div style={sx('display:flex;gap:14px;margin-top:14px;font-size:13px;color:#5D6D78')}>
              <span>Attach a floor plan or inspiration</span>
              <button className="ep-link-plain" style={sx('font-size:13px;font-weight:700;border-bottom:1px solid #16212B')}>Upload</button>
            </div>
          </div>
        </main>

        <aside className="ep-desktop-only" style={sx('position:sticky;top:70px;align-self:start')}>
          <div style={sx('border:1px solid #16212B;border-radius:16px;overflow:hidden')}>
            <div style={sx('display:flex;gap:14px;padding:22px;background:#FEF7F0;border-bottom:1px solid #EDE5DA')}>
              <span style={sx('width:58px;height:58px;flex:none;border-radius:12px;background:#16212B;color:#FFFFFF;display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:800;letter-spacing:-0.02em')}>F&amp;F</span>
              <div>
                <div style={sx('font-size:15px;font-weight:800')}>Fern &amp; Fig Catering</div>
                <div style={sx('margin-top:3px;font-size:12.5px;color:#5D6D78')}>Etobicoke · 4.9 ★ · replies in 3h</div>
              </div>
            </div>
            <div style={sx('padding:18px')}>
              <div style={sx('font-size:10.5px;font-weight:800;letter-spacing:0.11em;text-transform:uppercase;color:#5D6D78')}>Your request</div>
              <div style={sx('margin-top:12px;font-size:14px;line-height:1.9;color:#33424E')}>
                {mode === 'package' ? 'Plated three-course' : 'Custom quote request'}<br />Sat, Jun 20 · 5:30 PM<br />120 guests · Mississauga
              </div>
              <div style={sx('margin-top:18px;padding-top:14px;border-top:1px solid #EBE6DE')}>
                <div style={sx('display:flex;justify-content:space-between;padding:6px 0;font-size:14px')}><span style={sx('color:#5A6A75')}>$68 × 120 guests</span><span style={sx('font-weight:600')}>$8,160.00</span></div>
                <div style={sx('display:flex;justify-content:space-between;padding:6px 0;font-size:14px')}><span style={sx('color:#5A6A75')}>Bar service</span><span style={sx('font-weight:600')}>$680.00</span></div>
                <div style={sx('display:flex;justify-content:space-between;padding:6px 0;font-size:14px')}><span style={sx('color:#5A6A75')}>HST (13%)</span><span style={sx('font-weight:600')}>$1,149.20</span></div>
                <div style={sx('display:flex;justify-content:space-between;padding:12px 0 0;margin-top:6px;border-top:1px solid #16212B;font-size:16px;font-weight:800')}><span>Total</span><span>$9,989.20</span></div>
              </div>
              <div style={sx('margin-top:16px;padding:18px;background:#F1F8F4;border-radius:12px')}>
                <div style={sx('display:flex;justify-content:space-between;font-size:13.5px;font-weight:800')}><span>Deposit today</span><span>$2,497.30</span></div>
                <div style={sx('margin-top:5px;font-size:12.5px;color:#456A5C')}>Balance $7,491.90 due Jun 6, 2026</div>
              </div>
              <button onClick={() => navigate('/checkout')} className="ep-btn-primary" style={sx('width:100%;margin-top:16px;padding:14px 0;font-size:15px')}>Send request</button>
              <p style={sx('margin:10px 0 0;font-size:11.5px;line-height:1.55;color:#5D6D78;text-align:center;display:flex;align-items:center;justify-content:center;gap:6px')}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', display: 'block' }}>
                  <path d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10" />
                  <path d="M12 18.5C13.381 18.5 14.5 17.381 14.5 16C14.5 14.619 13.381 13.5 12 13.5C10.619 13.5 9.5 14.619 9.5 16C9.5 17.381 10.619 18.5 12 18.5Z" />
                  <path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" />
                </svg>
                <span>Card is authorised, not charged, until the vendor accepts.</span>
              </p>
            </div>
          </div>
        </aside>
      </div>

      <div className="ep-mobile-only" style={sx('position:fixed;left:0;right:0;bottom:0;z-index:40;padding:14px 18px 20px;background:#FFFFFF;border-top:1px solid #EFEAE2')}>
        <div style={sx('display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px;font-size:13.5px')}>
          <span style={sx('font-weight:800')}>Deposit today</span>
          <span style={sx('font-weight:800')}>$2,497.30</span>
        </div>
        <button onClick={() => navigate('/checkout')} className="ep-btn-primary" style={sx('width:100%;height:50px;font-size:15px')}>Send request</button>
      </div>
    </div>
  );
}

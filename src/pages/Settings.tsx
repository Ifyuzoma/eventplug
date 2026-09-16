import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sx } from '../lib/sx';
import { Logo } from '../components/Logo';
import { Icon } from '../components/Icon';
import { Checkbox } from '../components/Checkbox';
import { photos } from '../data/photos';
import { settingsNav, notifRows } from '../data/content';

const NAV_ICONS = ['user', 'lock', 'bell', 'card', 'shield'] as const;

export default function Settings() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  return (
    <div className="ep-page ep-mobile-tabbar-space">
      <header className="ep-desktop-only" style={sx('display:flex;align-items:center;gap:28px;padding:26px 56px;border-bottom:1px solid #EFEAE2')}>
        <Logo height={20} />
        <nav style={sx('display:flex;gap:24px;font-size:14px;font-weight:600')}>
          <button onClick={() => navigate('/events')} className="ep-link-plain" style={sx('color:#5D6D78')}>My events</button>
          <button onClick={() => navigate('/inbox')} className="ep-link-plain" style={sx('color:#5D6D78')}>Messages</button>
          <span style={sx('font-weight:800;border-bottom:2px solid #FF6B6B;padding-bottom:3px')}>Settings</span>
        </nav>
        <span style={sx('flex:1')} />
        <span style={sx('width:34px;height:34px;flex:none;border-radius:50%;background:#FFD166;color:#16212B;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;letter-spacing:-0.01em')}>A</span>
      </header>

      <div className="ep-mobile-only" style={sx('padding:16px 20px 4px')}>
        <h1 style={sx("margin:0;font-family:'Manrope',sans-serif;font-size:30px;letter-spacing:-0.04em;font-weight:800")}>Settings</h1>
      </div>
      <div className="ep-mobile-only" style={sx('display:flex;gap:8px;padding:12px 20px;overflow-x:auto')}>
        {settingsNav.map((label, i) => (
          <button
            key={label}
            onClick={() => setActive(i)}
            className={i === active ? 'ep-chip ep-chip-on' : 'ep-chip'}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="ep-settings-grid" style={sx('display:grid;grid-template-columns:236px minmax(0,1fr);gap:56px;padding:48px 56px 104px;max-width:1180px')}>
        <aside className="ep-desktop-only">
          <div style={sx('display:flex;flex-direction:column;gap:2px')}>
            {settingsNav.map((label, i) => (
              <button
                key={label}
                onClick={() => setActive(i)}
                className="ep-link-plain ep-hover-row"
                style={{ textAlign: 'left', background: i === active ? '#16212B' : 'transparent', color: i === active ? '#FFFFFF' : '#33424E', borderRadius: 12, padding: '11px 14px', fontSize: 14, fontWeight: 700 }}
              >
                <span style={sx('display:flex;align-items:center;gap:11px')}><Icon name={NAV_ICONS[i]} size={17} strokeWidth={1.6} />{label}</span>
              </button>
            ))}
          </div>
          <button className="ep-link-plain" style={sx('margin-top:24px;padding:11px 14px;font-size:14px;font-weight:700;color:#B04455')}>Delete account</button>
        </aside>
        <main style={sx('max-width:640px')}>
          <h1 style={sx("margin:0;font-family:'Manrope',sans-serif;font-size:38px;letter-spacing:-0.04em;font-weight:800")}>Profile</h1>
          <div style={sx('display:flex;align-items:center;gap:20px;margin-top:30px;padding-bottom:28px;border-bottom:1px solid #EBE6DE')}>
            <img src={photos.jakeNackosProfile} alt="Profile" style={sx('width:76px;height:76px;flex:none;border-radius:50%;object-fit:cover;display:block')} />
            <div>
              <button className="ep-btn-outline" style={sx('padding:9px 18px;font-size:13px')}>Replace photo</button>
              <div style={sx('margin-top:8px;font-size:12px;color:#5D6D78')}>JPG or PNG, at least 400 × 400</div>
            </div>
          </div>
          <div style={sx('display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:28px')}>
            <label><span style={sx('display:block;font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>First name</span><input defaultValue="Claire" style={sx('width:100%;margin-top:7px;border:1px solid #E3DDD3;border-radius:12px;padding:12px;outline:none;font-weight:600')} /></label>
            <label><span style={sx('display:block;font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>Last name</span><input defaultValue="Whitfield" style={sx('width:100%;margin-top:7px;border:1px solid #E3DDD3;border-radius:12px;padding:12px;outline:none;font-weight:600')} /></label>
            <label><span style={sx('display:block;font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>Email</span><input defaultValue="claire@whitfield.co" style={sx('width:100%;margin-top:7px;border:1px solid #E3DDD3;border-radius:12px;padding:12px;outline:none;font-weight:600')} /></label>
            <label><span style={sx('display:block;font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>Mobile</span><input defaultValue="+1 416 555 0134" style={sx('width:100%;margin-top:7px;border:1px solid #E3DDD3;border-radius:12px;padding:12px;outline:none;font-weight:600')} /></label>
          </div>
          <label style={sx('display:block;margin-top:16px')}><span style={sx('display:block;font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>City</span><input defaultValue="Toronto, ON" style={sx('width:100%;margin-top:7px;border:1px solid #E3DDD3;border-radius:12px;padding:12px;outline:none;font-weight:600')} /></label>

          <h2 style={sx("margin:56px 0 0;font-family:'Manrope',sans-serif;font-size:28px;letter-spacing:-0.035em;font-weight:800")}>Notifications</h2>
          <p style={sx('margin:10px 0 0;font-size:14.5px;color:#5A6A75')}>Booking and payment alerts cannot be turned off entirely. They affect money and dates.</p>
          <div style={sx('margin-top:24px')}>
            <div style={sx('display:grid;grid-template-columns:minmax(0,1fr) 74px 74px 74px;gap:10px;padding-bottom:10px;border-bottom:1px solid #16212B')}>
              <span />
              <span style={sx('text-align:center;font-size:10.5px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>Email</span>
              <span style={sx('text-align:center;font-size:10.5px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>SMS</span>
              <span style={sx('text-align:center;font-size:10.5px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>Push</span>
            </div>
            {notifRows.map((r) => (
              <div key={r.label} style={sx('display:grid;grid-template-columns:minmax(0,1fr) 74px 74px 74px;gap:10px;align-items:center;padding:14px 0;border-bottom:1px solid #F1ECE4')}>
                <span style={sx('font-size:14.5px;font-weight:600')}>{r.label}</span>
                <span style={sx('display:flex;justify-content:center')}><Checkbox checked={r.email} /></span>
                <span style={sx('display:flex;justify-content:center')}><Checkbox checked={r.sms} /></span>
                <span style={sx('display:flex;justify-content:center')}><Checkbox checked={r.push} /></span>
              </div>
            ))}
          </div>
          <div style={sx('display:flex;align-items:center;gap:16px;margin-top:36px')}>
            <button className="ep-btn-primary" style={sx('padding:14px 28px;font-size:15px')}>Save changes</button>
            <span style={sx('font-size:11px;font-weight:600;color:#5D6D78')}>Last saved Mar 2, 9:14 AM</span>
          </div>
        </main>
      </div>
    </div>
  );
}

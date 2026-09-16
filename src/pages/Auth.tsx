import { useNavigate } from 'react-router-dom';
import { sx } from '../lib/sx';
import { Logo } from '../components/Logo';
import { Checkbox } from '../components/Checkbox';
import { photos } from '../data/photos';

export default function Auth() {
  const navigate = useNavigate();

  return (
    <div className="ep-page ep-split" style={sx('display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);min-height:100vh')}>
      <div className="ep-mobile-pad" style={sx('display:flex;flex-direction:column;padding:44px 64px 40px')}>
        <Logo height={22} />
        <div style={sx('flex:1;display:flex;flex-direction:column;justify-content:center;max-width:420px;padding:48px 0')}>
          <div style={sx('display:flex;gap:26px;padding-bottom:18px;border-bottom:1px solid #EBE6DE')}>
            <span style={sx('position:relative;font-size:14px;font-weight:800;padding-bottom:18px;margin-bottom:-19px;border-bottom:2px solid #FF6B6B')}>Log in</span>
            <button className="ep-link-plain" style={sx('font-size:14px;font-weight:600;color:#5D6D78')}>Create account</button>
          </div>
          <h1 style={sx("margin:36px 0 0;font-family:'Manrope',sans-serif;font-size:46px;line-height:1;letter-spacing:-0.04em;font-weight:800")}>Welcome back.</h1>
          <p style={sx('margin:12px 0 0;font-size:15.5px;color:#5A6A75')}>Two saved events and one quote waiting.</p>
          <label style={sx('display:block;margin-top:34px')}><span style={sx('display:block;font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>Email</span><input defaultValue="claire@whitfield.co" style={sx('width:100%;margin-top:7px;border:1px solid #E3DDD3;border-radius:12px;padding:14px;outline:none;font-weight:600')} /></label>
          <label style={sx('display:block;margin-top:16px')}><span style={sx('display:block;font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>Password</span><input type="password" defaultValue="password123" style={sx('width:100%;margin-top:7px;border:1px solid #E3DDD3;border-radius:12px;padding:14px;outline:none;font-weight:600')} /></label>
          <div style={sx('display:flex;align-items:center;margin-top:14px')}>
            <label style={sx('display:flex;align-items:center;gap:9px;font-size:13.5px;cursor:pointer')}><Checkbox checked />Keep me signed in</label>
            <span style={sx('flex:1')} />
            <button className="ep-link-plain" style={sx('font-size:13.5px;font-weight:700;color:#16212B')}>Forgot password?</button>
          </div>
          <button onClick={() => navigate('/events')} className="ep-btn-primary" style={sx('margin-top:28px;padding:16px 0;font-size:16px')}>Log in</button>
          <div style={sx('display:flex;align-items:center;gap:14px;margin:26px 0')}>
            <span style={sx('flex:1;height:1px;background:#EBE6DE')} />
            <span style={sx('font-size:10.5px;font-weight:800;letter-spacing:0.11em;text-transform:uppercase;color:#5D6D78')}>or</span>
            <span style={sx('flex:1;height:1px;background:#EBE6DE')} />
          </div>
          <div style={sx('display:grid;grid-template-columns:1fr 1fr;gap:10px')}>
            <button className="ep-link-plain ep-hover-border" style={sx('background:none;border:1px solid #E3DDD3;border-radius:999px;padding:13px 0;font-size:14px;font-weight:700')}>Google</button>
            <button className="ep-link-plain ep-hover-border" style={sx('background:none;border:1px solid #E3DDD3;border-radius:999px;padding:13px 0;font-size:14px;font-weight:700')}>Apple</button>
          </div>
          <p style={sx('margin:30px 0 0;font-size:14px;color:#5A6A75')}>Are you a vendor? <button className="ep-link-plain" style={sx('font-size:14px;font-weight:700;border-bottom:1px solid #16212B')}>Log in to your dashboard</button></p>
        </div>
        <div style={sx('font-size:11px;font-weight:600;color:#5D6D78')}>© 2026 eventplug · Toronto, ON</div>
      </div>
      <div className="ep-desktop-only" style={sx('position:relative;background:#111E26')}>
        <img src={photos.victoriaShes} alt="Celebration" style={sx('width:100%;height:100%;object-fit:cover;display:block')} />
        <div style={sx('position:absolute;inset:0;background:linear-gradient(0deg,rgba(10,17,22,0.82) 0%,rgba(10,17,22,0.1) 62%);pointer-events:none')} />
        <div style={sx('position:absolute;left:48px;right:48px;bottom:52px;pointer-events:none')}>
          <h2 style={sx("margin:0;max-width:460px;font-family:'Manrope',sans-serif;font-size:40px;line-height:1.06;letter-spacing:-0.035em;font-weight:800;color:#FFFFFF")}>Less planning stress. More celebrating.</h2>
          <div style={sx('display:flex;gap:44px;margin-top:32px')}>
            <div><div style={sx("font-family:'Manrope',sans-serif;font-size:30px;font-weight:800;color:#FFD166")}>1,248</div><div style={sx('margin-top:4px;font-size:13px;color:#B9C7D0')}>verified Ontario vendors</div></div>
            <div><div style={sx("font-family:'Manrope',sans-serif;font-size:30px;font-weight:800;color:#FFD166")}>4.9 ★</div><div style={sx('margin-top:4px;font-size:13px;color:#B9C7D0')}>from 11,400 reviews</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

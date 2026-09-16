import { useNavigate } from 'react-router-dom';
import { sx } from '../lib/sx';
import { Logo } from '../components/Logo';
import { Icon } from '../components/Icon';
import { photos } from '../data/photos';
import { nextSteps, receiptLines } from '../data/content';

export default function Confirmed() {
  const navigate = useNavigate();

  return (
    <div className="ep-page">
      <div className="ep-desktop-only">
        <header style={sx('display:flex;align-items:center;gap:20px;padding:26px 56px;border-bottom:1px solid #EFEAE2')}>
          <Logo height={20} />
          <span style={sx('flex:1')} />
          <span style={sx('font-size:11.5px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#5D6D78')}>Booking EP-4821</span>
          <button onClick={() => navigate('/events')} className="ep-link-plain" style={sx('font-size:13.5px;font-weight:700;border-bottom:1px solid #16212B')}>Booking page</button>
        </header>

        <section className="ep-split" style={sx('display:grid;grid-template-columns:minmax(0,1.08fr) minmax(0,0.92fr);background:#0F5C52;color:#FFFFFF')}>
          <div style={sx('padding:82px 48px 96px 56px')}>
            <div style={sx('display:flex;align-items:center;gap:9px;font-size:11px;font-weight:800;letter-spacing:0.13em;text-transform:uppercase;color:#B4DFCB')}>Confirmed 12:04 PM, Mar 2</div>
            <h1 style={sx("margin:22px 0 0;font-family:'Manrope',sans-serif;font-size:60px;line-height:0.98;letter-spacing:-0.045em;font-weight:800;text-wrap:pretty")}>Saturday, June 20<br />is yours.</h1>
            <p style={sx('margin:22px 0 0;max-width:430px;font-size:16.5px;line-height:1.6;color:#CDE6D9')}>Fern &amp; Fig Catering are holding the date for 180 guests at The Glasshouse. Your card is authorised, not charged, until Sam accepts the menu.</p>
            <div style={sx('display:flex;flex-wrap:wrap;margin-top:46px;border-top:1px solid rgba(255,255,255,0.24)')}>
              <div style={sx('padding:20px 40px 0 0')}>
                <div style={sx('font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#B4DFCB')}>Deposit held</div>
                <div style={sx("margin-top:8px;font-family:'Manrope',sans-serif;font-size:30px;font-weight:800;letter-spacing:-0.035em")}>$2,497.30</div>
              </div>
              <div style={sx('padding:20px 40px 0;border-left:1px solid rgba(255,255,255,0.24)')}>
                <div style={sx('font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#B4DFCB')}>Balance, Jun 6</div>
                <div style={sx("margin-top:8px;font-family:'Manrope',sans-serif;font-size:30px;font-weight:800;letter-spacing:-0.035em")}>$7,491.90</div>
              </div>
            </div>
          </div>
          <div style={sx('position:relative;min-height:440px')}>
            <img src={photos.eugeniaPan} alt="Table setting" style={sx('width:100%;height:100%;object-fit:cover;display:block')} />
          </div>
        </section>

        <div style={sx('padding:0 56px')}>
          <div style={sx('position:relative;z-index:2;margin-top:-40px;display:flex;align-items:center;gap:16px;width:min(540px,100%);background:#FFFFFF;border:1px solid #16212B;border-radius:16px;padding:18px 22px')}>
            <span style={sx('width:46px;height:46px;flex:none;border-radius:50%;background:#16212B;color:#FFFFFF;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;letter-spacing:-0.01em')}>F&amp;F</span>
            <div style={sx('min-width:0;flex:1')}>
              <div style={sx('font-size:15px;font-weight:800;letter-spacing:-0.015em')}>Fern &amp; Fig Catering</div>
              <div style={sx('margin-top:3px;font-size:12.5px;color:#5D6D78')}>Sam H. usually replies in under 3 hours</div>
            </div>
            <button onClick={() => navigate('/inbox')} className="ep-btn-outline" style={sx('flex:none;padding:10px 18px;font-size:13px;white-space:nowrap')}>Message Sam</button>
          </div>
        </div>
      </div>

      <div className="ep-mobile-only" style={sx('background:#0F5C52;color:#FFFFFF;padding:28px 20px 32px')}>
        <span style={sx('width:56px;height:56px;border-radius:50%;background:#FFFFFF;color:#0F5C52;display:flex;align-items:center;justify-content:center')}>
          <Icon name="check" size={26} strokeWidth={1.8} />
        </span>
        <h1 style={sx("margin:20px 0 0;font-family:'Manrope',sans-serif;font-size:32px;line-height:1.05;letter-spacing:-0.04em;font-weight:800")}>Saturday, June 20 is yours.</h1>
        <p style={sx('margin:12px 0 0;font-size:14px;line-height:1.55;color:#CDE6D9')}>Fern &amp; Fig are holding the date for 180 guests at The Glasshouse. Sam has 48 hours to confirm the menu.</p>
        <div style={sx('display:flex;margin-top:22px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.28)')}>
          <div style={sx('flex:1')}>
            <div style={sx('font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#B4DFCB')}>Held</div>
            <div style={sx("margin-top:6px;font-family:'Manrope',sans-serif;font-size:22px;font-weight:800;letter-spacing:-0.035em")}>$2,497.30</div>
          </div>
          <div style={sx('flex:1;padding-left:16px;border-left:1px solid rgba(255,255,255,0.28)')}>
            <div style={sx('font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#B4DFCB')}>Jun 6</div>
            <div style={sx("margin-top:6px;font-family:'Manrope',sans-serif;font-size:22px;font-weight:800;letter-spacing:-0.035em")}>$7,491.90</div>
          </div>
        </div>
        <div style={sx('margin-top:20px;padding:16px 18px;background:#FFFFFF;color:#16212B;border-radius:16px')}>
          <div style={sx('font-size:13.5px;font-weight:800')}>Tasting, Apr 4 at 2:00 PM</div>
          <div style={sx('margin-top:4px;font-size:12px;color:#5A6A75')}>Two seats, studio kitchen, Etobicoke</div>
        </div>
        <div style={sx('display:flex;gap:10px;margin-top:20px')}>
          <button onClick={() => navigate('/events')} className="ep-link-plain" style={sx('flex:1;height:48px;background:#FFFFFF;color:#0F5C52;border-radius:999px;font-size:14px;font-weight:700')}>Booking page</button>
          <button onClick={() => navigate('/inbox')} className="ep-link-plain" style={sx('width:110px;height:48px;background:none;border:1px solid rgba(255,255,255,0.5);color:#FFFFFF;border-radius:999px;font-size:14px;font-weight:700')}>Message</button>
        </div>
      </div>

      <section className="ep-mobile-pad" style={sx('padding:74px 56px 0')}>
        <span style={sx('font-size:11px;font-weight:800;letter-spacing:0.13em;text-transform:uppercase;color:#5D6D78')}>What happens next</span>
        <div className="ep-4col" style={sx('display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:40px 52px;margin-top:24px')}>
          {nextSteps.map((s) => (
            <div key={s.n} style={sx('padding-top:20px;border-top:2px solid #16212B')}>
              <div style={sx("font-family:'Manrope',sans-serif;font-size:15px;font-weight:800;letter-spacing:0.02em;color:#16212B")}>{s.n}</div>
              <div style={sx('margin-top:12px;font-size:17px;font-weight:800;letter-spacing:-0.02em')}>{s.t}</div>
              <p style={sx('margin:8px 0 0;font-size:14px;line-height:1.6;color:#5A6A75')}>{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ep-split" style={sx('display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);gap:56px;padding:78px 56px 104px')}>
        <div>
          <h2 style={sx("margin:0;font-family:'Manrope',sans-serif;font-size:28px;letter-spacing:-0.03em;font-weight:800")}>Receipt</h2>
          <div style={sx('margin-top:20px;border-top:1px solid #16212B')}>
            {receiptLines.map((r) => (
              <div key={r.k} style={sx('display:flex;align-items:baseline;gap:20px;padding:15px 0;border-bottom:1px solid #EFEAE2')}>
                <span style={sx('flex:1;font-size:14.5px;color:#33424E')}>{r.k}</span>
                <span style={sx('font-size:14.5px;font-weight:700;font-variant-numeric:tabular-nums')}>{r.v}</span>
              </div>
            ))}
            <div style={sx('display:flex;align-items:baseline;gap:20px;padding:18px 0')}>
              <span style={sx('flex:1;font-size:15px;font-weight:800')}>Total</span>
              <span style={sx("font-family:'Manrope',sans-serif;font-size:26px;font-weight:800;letter-spacing:-0.035em;font-variant-numeric:tabular-nums")}>$9,989.20</span>
            </div>
          </div>
          <p style={sx('margin:14px 0 0;font-size:12.5px;line-height:1.6;color:#5D6D78')}>HST registration 82914 6621 RT0001. A PDF copy is in your documents and in your email.</p>
        </div>
        <div>
          <div style={sx('display:flex;flex-direction:column')}>
            <button className="ep-link-plain ep-hover-red" style={sx('display:flex;align-items:center;gap:12px;padding:15px 0;border-top:1px solid #16212B;font-size:14.5px;font-weight:700;text-align:left')}><Icon name="calendar" size={16} strokeWidth={1.6} />Add Jun 20 to your calendar</button>
            <button className="ep-link-plain ep-hover-red" style={sx('display:flex;align-items:center;gap:12px;padding:15px 0;border-top:1px solid #EFEAE2;font-size:14.5px;font-weight:700;text-align:left')}><Icon name="doc" size={16} strokeWidth={1.6} />Download the receipt</button>
            <button onClick={() => navigate('/events')} className="ep-link-plain ep-hover-red" style={sx('display:flex;align-items:center;gap:12px;padding:15px 0;border-top:1px solid #EFEAE2;font-size:14.5px;font-weight:700;text-align:left')}><Icon name="list" size={16} strokeWidth={1.6} />Open the booking page</button>
            <button onClick={() => navigate('/search')} className="ep-link-plain ep-hover-red" style={sx('display:flex;align-items:center;gap:12px;padding:15px 0;border-top:1px solid #EFEAE2;border-bottom:1px solid #EFEAE2;font-size:14.5px;font-weight:700;text-align:left')}><Icon name="search" size={16} strokeWidth={1.7} />Book a DJ for the same date</button>
          </div>
          <div style={sx('margin-top:26px;padding:20px 22px;background:#FEF7F0;border:1px solid #F0E7DC;border-radius:16px')}>
            <div style={sx('font-size:13.5px;font-weight:800')}>Free to cancel until Apr 21</div>
            <p style={sx('margin:7px 0 0;font-size:13px;line-height:1.6;color:#5A6A75')}>Full deposit back until 60 days out. Half after that. Nothing inside 14 days, which is when Sam has already bought the food.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

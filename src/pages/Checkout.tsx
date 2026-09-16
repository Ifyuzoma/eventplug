import { useNavigate } from 'react-router-dom';
import { sx } from '../lib/sx';
import { Logo } from '../components/Logo';
import { Icon } from '../components/Icon';
import { schedule } from '../data/content';

export default function Checkout() {
  const navigate = useNavigate();

  return (
    <div className="ep-page ep-mobile-tabbar-space">
      <header className="ep-desktop-only" style={sx('display:flex;align-items:center;gap:20px;padding:26px 56px;border-bottom:1px solid #EFEAE2')}>
        <Logo height={20} />
        <span style={sx('width:1px;height:18px;background:#E3DDD3')} />
        <span style={sx('font-size:13.5px;font-weight:700')}>Secure deposit</span>
        <span style={sx('flex:1')} />
        <span style={sx('font-size:11px;font-weight:600;color:#5D6D78')}>Encrypted · PCI DSS · Stripe</span>
      </header>

      <header className="ep-mobile-only" style={sx('display:flex;align-items:center;gap:14px;padding:14px 18px;border-bottom:1px solid #EFEAE2')}>
        <button onClick={() => navigate('/booking')} className="ep-link-plain" style={sx('display:flex')}><Icon name="chevL" size={16} strokeWidth={2} /></button>
        <span style={sx('font-size:14.5px;font-weight:800')}>Pay deposit</span>
      </header>

      <div className="ep-mobile-only" style={sx('padding:20px 18px 0')}>
        <div style={sx("font-family:'Manrope',sans-serif;font-size:38px;line-height:0.92;font-weight:800;letter-spacing:-0.045em")}>$2,497.30</div>
        <div style={sx('margin-top:7px;font-size:12.5px;color:#5A6A75')}>25% of $9,989.20 · balance Jun 6</div>
        <div style={sx('margin-top:20px;border:1px solid #16212B;border-radius:16px;overflow:hidden')}>
          <div style={sx('display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid #EBE6DE')}>
            <span style={sx('width:34px;height:22px;flex:none;border-radius:4px;background:#16212B')} />
            <span style={sx('flex:1;font-size:13.5px;font-weight:700')}>Visa •••• 4417</span>
            <span style={sx('color:#0F5C52')}><Icon name="check" size={16} strokeWidth={1.9} /></span>
          </div>
          <div style={sx('display:flex;align-items:center;gap:12px;padding:14px 16px;color:#5D6D78')}>
            <span style={sx('width:34px;height:22px;flex:none;border:1px dashed #C9C0B4;border-radius:4px')} />
            <span style={sx('flex:1;font-size:13.5px;font-weight:600')}>Add a card</span>
          </div>
        </div>
        <div style={sx('margin-top:20px;padding-top:14px;border-top:2px solid #16212B')}>
          <div style={sx('display:flex;justify-content:space-between;gap:12px;padding:9px 0;font-size:13px')}><span style={sx('color:#5A6A75')}>Catering $68 × 120</span><span style={sx('font-weight:700;font-variant-numeric:tabular-nums')}>$8,160.00</span></div>
          <div style={sx('display:flex;justify-content:space-between;gap:12px;padding:9px 0;font-size:13px')}><span style={sx('color:#5A6A75')}>Bar service + 2 bartenders</span><span style={sx('font-weight:700;font-variant-numeric:tabular-nums')}>$680.00</span></div>
          <div style={sx('display:flex;justify-content:space-between;gap:12px;padding:9px 0;font-size:13px')}><span style={sx('color:#5A6A75')}>HST (13%)</span><span style={sx('font-weight:700;font-variant-numeric:tabular-nums')}>$1,149.20</span></div>
          <div style={sx('display:flex;justify-content:space-between;gap:12px;margin-top:8px;padding-top:11px;border-top:1px solid #EFEAE2;font-size:14px;font-weight:800')}>
            <span>Total</span><span style={sx('font-variant-numeric:tabular-nums')}>$9,989.20</span>
          </div>
        </div>
        <div style={sx('display:flex;align-items:flex-start;gap:9px;margin-top:18px;font-size:11.5px;line-height:1.55;color:#5A6A75')}>
          <span style={sx('flex:none;margin-top:1px;color:#5D6D78')}><Icon name="lock" size={14} strokeWidth={1.7} /></span>
          <span>Authorised, not charged, until Fern &amp; Fig accept. Free to cancel until Apr 21.</span>
        </div>
      </div>

      <div className="ep-mobile-only" style={sx('position:fixed;left:0;right:0;bottom:0;z-index:40;padding:14px 18px 20px;background:#FFFFFF;border-top:1px solid #EFEAE2')}>
        <button onClick={() => navigate('/confirmed')} className="ep-btn-primary" style={sx('width:100%;height:50px;font-size:15px')}>Authorise $2,497.30</button>
      </div>

      <div className="ep-desktop-only ep-split" style={sx('display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);gap:64px;padding:60px 56px 104px;max-width:1320px')}>
        <main style={sx('max-width:640px')}>
          <h1 style={sx("margin:0;font-family:'Manrope',sans-serif;font-size:44px;line-height:1.02;letter-spacing:-0.04em;font-weight:800")}>Hold Saturday, June 20.</h1>
          <p style={sx('margin:14px 0 0;max-width:500px;font-size:16px;line-height:1.6;color:#4A5A66')}>We authorise the deposit now and only capture it when Fern &amp; Fig accepts, usually within a few hours.</p>

          <div style={sx('margin-top:44px;padding-top:16px;border-top:2px solid #16212B')}>
            <div style={sx('font-size:11px;font-weight:800;letter-spacing:0.13em;text-transform:uppercase;color:#5D6D78')}>Payment method</div>
            <div style={sx('display:flex;gap:10px;margin-top:20px')}>
              <button className="ep-link-plain" style={sx('flex:1;padding:18px;background:#FEF7F0;border:2px solid #16212B;border-radius:16px;font-size:14px;font-weight:700')}>Credit / debit</button>
              <button className="ep-link-plain ep-hover-border" style={sx('flex:1;padding:14px;background:#FFFFFF;border:1px solid #E3DDD3;border-radius:16px;font-size:14px;font-weight:700;color:#4A5A66')}>Interac e-Transfer</button>
              <button className="ep-link-plain ep-hover-border" style={sx('flex:1;padding:14px;background:#FFFFFF;border:1px solid #E3DDD3;border-radius:16px;font-size:14px;font-weight:700;color:#4A5A66')}>Pay in 4</button>
            </div>
            <label style={sx('display:block;margin-top:20px')}><span style={sx('display:block;font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>Card number</span><input defaultValue="4242 4242 4242 4242" style={sx('width:100%;margin-top:7px;border:1px solid #E3DDD3;border-radius:12px;padding:13px;outline:none;font-weight:600;letter-spacing:0.04em')} /></label>
            <div style={sx('display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-top:14px')}>
              <label><span style={sx('display:block;font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>Expiry</span><input defaultValue="09 / 28" style={sx('width:100%;margin-top:7px;border:1px solid #E3DDD3;border-radius:12px;padding:13px;outline:none;font-weight:600')} /></label>
              <label><span style={sx('display:block;font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>CVC</span><input defaultValue="•••" style={sx('width:100%;margin-top:7px;border:1px solid #E3DDD3;border-radius:12px;padding:13px;outline:none;font-weight:600')} /></label>
              <label><span style={sx('display:block;font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>Postal code</span><input defaultValue="M6K 1X9" style={sx('width:100%;margin-top:7px;border:1px solid #E3DDD3;border-radius:12px;padding:13px;outline:none;font-weight:600')} /></label>
            </div>
            <label style={sx('display:block;margin-top:14px')}><span style={sx('display:block;font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>Name on card</span><input defaultValue="Claire Whitfield" style={sx('width:100%;margin-top:7px;border:1px solid #E3DDD3;border-radius:12px;padding:13px;outline:none;font-weight:600')} /></label>
          </div>

          <div style={sx('margin-top:48px;padding-top:16px;border-top:2px solid #16212B')}>
            <div style={sx('font-size:11px;font-weight:800;letter-spacing:0.13em;text-transform:uppercase;color:#5D6D78')}>Payment schedule</div>
            <div style={sx('margin-top:20px')}>
              {schedule.map((p) => (
                <div key={p.label} style={sx('display:flex;align-items:center;gap:18px;padding:15px 0;border-top:1px solid #F1ECE4')}>
                  <span style={{ width: 9, height: 9, flex: 'none', borderRadius: '50%', background: p.dot }} />
                  <span style={sx('flex:1;font-size:14.5px;font-weight:600')}>{p.label}</span>
                  <span style={sx('font-size:13px;color:#5D6D78')}>{p.when}</span>
                  <span style={sx('width:110px;text-align:right;font-size:15px;font-weight:800')}>{p.amount}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={sx('margin-top:40px;padding:24px;background:#FEF7F0;border:1px solid #F0E7DC;border-radius:16px')}>
            <div style={sx('font-size:13.5px;font-weight:800')}>Cancellation</div>
            <p style={sx('margin:8px 0 0;font-size:13.5px;line-height:1.65;color:#4A5A66')}>Full refund if you cancel within 48 hours of the vendor accepting, or any time before Apr 21, 2026. After that, the deposit is non-refundable and the balance is waived. Vendor cancellations are always refunded in full.</p>
          </div>
        </main>

        <aside style={sx('position:sticky;top:70px;align-self:start')}>
          <div style={sx('border:1px solid #16212B;border-radius:16px;overflow:hidden')}>
            <div style={sx('display:flex;gap:14px;padding:22px;background:#FEF7F0;border-bottom:1px solid #EDE5DA')}>
              <span style={sx('width:58px;height:58px;flex:none;border-radius:12px;background:#16212B;color:#FFFFFF;display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:800;letter-spacing:-0.02em')}>F&amp;F</span>
              <div>
                <div style={sx('font-size:15px;font-weight:800')}>Fern &amp; Fig Catering</div>
                <div style={sx('margin-top:3px;font-size:12.5px;color:#5D6D78')}>Plated three-course · 120 guests</div>
              </div>
            </div>
            <div style={sx('padding:18px')}>
              <div style={sx('display:flex;justify-content:space-between;padding:6px 0;font-size:14px')}><span style={sx('color:#5A6A75')}>Catering $68 × 120</span><span style={sx('font-weight:600')}>$8,160.00</span></div>
              <div style={sx('display:flex;justify-content:space-between;padding:6px 0;font-size:14px')}><span style={sx('color:#5A6A75')}>Bar service + 2 bartenders</span><span style={sx('font-weight:600')}>$680.00</span></div>
              <div style={sx('display:flex;justify-content:space-between;padding:6px 0;font-size:14px')}><span style={sx('color:#5A6A75')}>Platform fee</span><span style={sx('font-weight:600')}>$0.00</span></div>
              <div style={sx('display:flex;justify-content:space-between;padding:6px 0;font-size:14px')}><span style={sx('color:#5A6A75')}>HST (13%)</span><span style={sx('font-weight:600')}>$1,149.20</span></div>
              <div style={sx('display:flex;justify-content:space-between;padding:12px 0 0;margin-top:6px;border-top:1px solid #16212B;font-size:16px;font-weight:800')}><span>Event total</span><span>$9,989.20</span></div>
              <div style={sx('margin-top:18px;padding:20px;background:#111E26;border-radius:12px;color:#FFFFFF')}>
                <div style={sx('display:flex;justify-content:space-between;align-items:baseline')}><span style={sx('font-size:13px;color:#9FB0BB')}>Authorised today</span><span style={sx("font-family:'Manrope',sans-serif;font-size:26px;font-weight:800;letter-spacing:-0.03em")}>$2,497.30</span></div>
              </div>
              <button onClick={() => navigate('/confirmed')} className="ep-btn-primary" style={sx('width:100%;margin-top:16px;padding:15px 0;font-size:15px')}>Authorise deposit</button>
              <p style={sx('margin:10px 0 0;font-size:11.5px;line-height:1.55;color:#5D6D78;text-align:center')}>By continuing you accept the eventplug booking terms and this vendor's cancellation policy.</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

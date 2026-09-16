import { useNavigate } from 'react-router-dom';
import { sx } from '../lib/sx';
import { Logo } from '../components/Logo';
import { Icon } from '../components/Icon';
import { StarRow } from '../components/StarRow';
import { photos } from '../data/photos';
import { packages, addons, vendorFacts, vendorBars, vendorReviews } from '../data/content';

export default function Vendor() {
  const navigate = useNavigate();

  return (
    <div className="ep-page ep-mobile-tabbar-space">
      <div className="ep-desktop-only">
        <header style={sx('display:flex;align-items:center;gap:26px;padding:26px 56px;border-bottom:1px solid #EFEAE2')}>
          <Logo height={20} />
          <button onClick={() => navigate('/search')} className="ep-link-plain ep-hover-fg" style={sx('font-size:13.5px;font-weight:600;color:#5D6D78')}>← Catering in Toronto</button>
          <span style={sx('flex:1')} />
          <button className="ep-link-plain" style={sx('font-size:14px;font-weight:600')}>Save</button>
          <button className="ep-link-plain" style={sx('font-size:14px;font-weight:600')}>Share</button>
          <button onClick={() => navigate('/inbox')} className="ep-link-plain" style={sx('font-size:14px;font-weight:600')}>Messages</button>
          <span style={sx('width:34px;height:34px;flex:none;border-radius:50%;background:#FFD166;color:#16212B;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;letter-spacing:-0.01em')}>A</span>
        </header>

        <div style={sx('display:grid;grid-template-columns:minmax(0,2fr) minmax(0,1fr);grid-template-rows:216px 216px;gap:4px;padding:4px 4px 0')}>
          <img src={photos.eugeniaPan} alt="Signature dish" style={sx('grid-row:span 2;width:100%;height:100%;object-fit:cover;display:block')} />
          <img src={photos.chadMontanoWork} alt="Team at work" style={sx('width:100%;height:100%;object-fit:cover;display:block')} />
          <img src={photos.odiseoCastrejon} alt="Event photo" style={sx('width:100%;height:100%;object-fit:cover;display:block')} />
        </div>
        <div style={sx('display:flex;justify-content:flex-end;padding:10px 48px 0')}>
          <button className="ep-btn-outline" style={sx('padding:8px 18px;font-size:12.5px')}>All 34 photos</button>
        </div>
      </div>

      <div className="ep-mobile-only" style={sx('position:relative;height:230px')}>
        <img src={photos.eugeniaPan} alt="Signature dish" style={sx('width:100%;height:100%;object-fit:cover;display:block')} />
        <button onClick={() => navigate('/search')} className="ep-link-plain" style={sx('position:absolute;top:16px;left:16px;width:40px;height:40px;display:flex;align-items:center;justify-content:center;background:#FFFFFF;border-radius:50%')}>
          <Icon name="chevL" size={16} strokeWidth={2} />
        </button>
        <button className="ep-link-plain" style={sx('position:absolute;top:16px;right:16px;width:40px;height:40px;display:flex;align-items:center;justify-content:center;background:#FFFFFF;border-radius:50%')}>
          <Icon name="heart" size={16} strokeWidth={1.8} />
        </button>
      </div>

      <div className="ep-split" style={sx('display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);gap:64px;padding:40px 56px 104px')}>
        <main>
          <div style={sx('font-size:11px;font-weight:800;letter-spacing:0.13em;text-transform:uppercase;color:#5D6D78')}>Catering · Etobicoke, ON</div>
          <h1 className="ep-vendor-h1" style={sx("margin:14px 0 0;font-family:'Manrope',sans-serif;font-size:56px;line-height:1;letter-spacing:-0.045em;font-weight:800")}>Fern &amp; Fig Catering</h1>
          <div style={sx('display:flex;align-items:center;gap:22px;margin-top:18px;font-size:14px')}>
            <span style={sx('font-weight:700')}>4.9 ★ <span style={sx('font-weight:500;color:#5D6D78')}>128 reviews</span></span>
            <span style={sx('width:1px;height:14px;background:#E3DDD3')} />
            <span style={sx('color:#5A6A75')}>412 events since 2019</span>
            <span style={sx('width:1px;height:14px;background:#E3DDD3')} />
            <span style={sx('color:#2C7A57;font-weight:700')}>Replies in under 3 hours</span>
          </div>
          <p style={sx('margin:28px 0 0;max-width:620px;font-size:17px;line-height:1.65;color:#33424E')}>We cook seasonal Ontario food for weddings and milestone parties. The kind of menu where the vegetables are as considered as the protein. Two chefs and a front-of-house lead come to every event. We travel across the GTA, Hamilton and into Niagara, and we will tell you honestly if your venue's kitchen cannot support the menu you want.</p>

          <h2 style={sx("margin:52px 0 0;font-family:'Manrope',sans-serif;font-size:26px;letter-spacing:-0.03em;font-weight:800")}>Packages</h2>
          <p style={sx('margin:8px 0 22px;font-size:14px;color:#5A6A75')}>Published prices for 120 guests on Sat, Jun 20. Book one instantly, or send a brief for something custom.</p>
          {packages.map((p) => (
            <div key={p.name} style={sx('display:grid;grid-template-columns:minmax(0,1fr) 150px;gap:24px;align-items:start;padding:22px 0;border-top:1px solid #EBE6DE')}>
              <div>
                <div style={sx('display:flex;align-items:center;gap:12px')}>
                  <h3 style={sx('margin:0;font-size:19px;font-weight:800;letter-spacing:-0.02em')}>{p.name}</h3>
                  <span style={sx('font-size:10px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#2C7A57;border:1px solid #B4DFCB;border-radius:8px;padding:3px 6px')}>{p.tag}</span>
                </div>
                <p style={sx('margin:8px 0 0;max-width:470px;font-size:14.5px;line-height:1.6;color:#5A6A75')}>{p.desc}</p>
                <div style={sx('margin-top:10px;font-size:11px;font-weight:600;letter-spacing:0.06em;color:#5D6D78')}>{p.min}</div>
              </div>
              <div style={sx('text-align:right')}>
                <div style={sx("font-family:'Manrope',sans-serif;font-size:26px;font-weight:800;letter-spacing:-0.03em")}>{p.price}</div>
                <div style={sx('font-size:12px;color:#5D6D78')}>{p.unit}</div>
                <button onClick={() => navigate('/booking')} className="ep-btn-primary" style={sx('margin-top:14px;width:100%;padding:11px 0;font-size:13.5px')}>Select</button>
              </div>
            </div>
          ))}

          <h2 style={sx("margin:52px 0 0;font-family:'Manrope',sans-serif;font-size:26px;letter-spacing:-0.03em;font-weight:800")}>Add-ons</h2>
          <div style={sx('margin-top:18px')}>
            {addons.map((a) => (
              <div key={a.name} style={sx('display:flex;align-items:baseline;gap:16px;padding:13px 0;border-top:1px solid #F1ECE4')}>
                <span style={sx('font-size:15px;font-weight:600')}>{a.name}</span>
                <span style={sx('flex:1;border-bottom:1px dotted #D6CFC4;transform:translateY(-4px)')} />
                <span style={sx('font-size:15px;font-weight:700')}>{a.price}</span>
              </div>
            ))}
          </div>

          <h2 style={sx("margin:52px 0 0;font-family:'Manrope',sans-serif;font-size:26px;letter-spacing:-0.03em;font-weight:800")}>The details</h2>
          <div style={sx('display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 44px;margin-top:18px')}>
            {vendorFacts.map((f) => (
              <div key={f.k} style={sx('padding:14px 0;border-top:1px solid #F1ECE4')}>
                <div style={sx('font-size:10.5px;font-weight:800;letter-spacing:0.11em;text-transform:uppercase;color:#5D6D78')}>{f.k}</div>
                <div style={sx('margin-top:5px;font-size:15px;font-weight:600')}>{f.v}</div>
              </div>
            ))}
          </div>

          <h2 style={sx("margin:56px 0 0;font-family:'Manrope',sans-serif;font-size:26px;letter-spacing:-0.03em;font-weight:800")}>What 128 hosts said</h2>
          <div className="ep-split" style={sx('display:grid;grid-template-columns:minmax(0,0.58fr) minmax(0,1fr);gap:48px;margin-top:20px;padding-top:24px;border-top:1px solid #16212B;align-items:start')}>
            <div>
              <div style={sx('display:flex;align-items:flex-end;gap:16px')}>
                <span style={sx("font-family:'Manrope',sans-serif;font-size:64px;line-height:0.82;font-weight:800;letter-spacing:-0.05em")}>4.9</span>
                <div style={sx('padding-bottom:4px')}>
                  <StarRow filled={5} size={18} />
                  <div style={sx('margin-top:7px;font-size:12.5px;color:#5D6D78')}>128 reviews · 96% would book again</div>
                </div>
              </div>
              <div style={sx('display:flex;flex-direction:column;gap:11px;margin-top:26px')}>
                {vendorBars.map((b) => (
                  <div key={b.label} style={sx('display:flex;align-items:center;gap:14px')}>
                    <span style={sx('flex:1;font-size:13.5px;color:#33424E')}>{b.label}</span>
                    <span style={sx('width:96px;height:4px;flex:none;background:#EDE7DE;border-radius:999px;overflow:hidden')}>
                      <span style={{ display: 'block', height: 4, width: b.w, background: '#16212B' }} />
                    </span>
                    <span style={sx('width:26px;flex:none;text-align:right;font-size:12.5px;font-weight:700;font-variant-numeric:tabular-nums')}>{b.val}</span>
                  </div>
                ))}
              </div>
              <p style={sx('margin:24px 0 0;font-size:12.5px;line-height:1.6;color:#5D6D78')}>Only hosts who paid through eventplug can review, and Sam reviews them back.</p>
            </div>
            <div>
              {vendorReviews.map((r) => (
                <div key={r.name} style={sx('padding:0 0 26px')}>
                  <div style={sx('display:flex;align-items:center;gap:12px')}>
                    <span style={sx('width:38px;height:38px;flex:none;border-radius:50%;background:#16212B;color:#FFFFFF;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;letter-spacing:-0.01em')}>{r.init}</span>
                    <div style={sx('min-width:0')}>
                      <div style={sx('font-size:14.5px;font-weight:800;letter-spacing:-0.015em')}>{r.name}</div>
                      <div style={sx('margin-top:2px;font-size:12px;color:#5D6D78')}>{r.when}</div>
                    </div>
                    <span style={sx('flex:1')} />
                    <StarRow filled={r.stars} size={14} />
                  </div>
                  <p style={sx('margin:12px 0 0;font-size:15px;line-height:1.65;color:#33424E;text-wrap:pretty')}>{r.text}</p>
                  {r.reply && (
                    <div style={sx('margin:14px 0 0 22px;padding:14px 18px;background:#FEF7F0;border-left:2px solid #16212B;border-radius:0 12px 12px 0')}>
                      <div style={sx('font-size:12px;font-weight:800;letter-spacing:0.02em')}>Sam replied</div>
                      <p style={sx('margin:6px 0 0;font-size:14px;line-height:1.6;color:#4A5A66')}>{r.reply}</p>
                    </div>
                  )}
                </div>
              ))}
              <button className="ep-btn-outline" style={sx('padding:12px 24px;font-size:13.5px')}>Read all 128 reviews</button>
            </div>
          </div>
        </main>

        <aside className="ep-desktop-only" style={sx('position:sticky;top:70px;align-self:start')}>
          <div style={sx('border:1px solid #16212B;border-radius:16px;background:#FFFFFF')}>
            <div style={sx('padding:24px 24px 20px;border-bottom:1px solid #EBE6DE')}>
              <div style={sx('display:flex;align-items:baseline;gap:8px')}>
                <span style={sx("font-family:'Manrope',sans-serif;font-size:30px;font-weight:800;letter-spacing:-0.035em")}>$68</span>
                <span style={sx('font-size:13px;color:#5D6D78')}>per guest · min. 60</span>
              </div>
              <div style={sx('margin-top:4px;font-size:12.5px;color:#2C7A57;font-weight:700')}>Free on Sat, Jun 20</div>
            </div>
            <div style={sx('padding:22px 24px 4px')}>
              <label style={sx('display:block;margin-bottom:12px')}>
                <span style={sx('display:block;font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>Event date</span>
                <input defaultValue="Sat, Jun 20, 2026" style={sx('width:100%;margin-top:6px;border:1px solid #E3DDD3;border-radius:12px;padding:11px 12px;outline:none;font-weight:600')} />
              </label>
              <div style={sx('display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px')}>
                <label>
                  <span style={sx('display:block;font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>Guests</span>
                  <input defaultValue="120" style={sx('width:100%;margin-top:6px;border:1px solid #E3DDD3;border-radius:12px;padding:11px 12px;outline:none;font-weight:600')} />
                </label>
                <label>
                  <span style={sx('display:block;font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>Service</span>
                  <input defaultValue="Plated" style={sx('width:100%;margin-top:6px;border:1px solid #E3DDD3;border-radius:12px;padding:11px 12px;outline:none;font-weight:600')} />
                </label>
              </div>
            </div>
            <div style={sx('padding:6px 22px 18px')}>
              <div style={sx('display:flex;justify-content:space-between;padding:7px 0;font-size:14px')}><span style={sx('color:#5A6A75')}>Plated three-course × 120</span><span style={sx('font-weight:600')}>$8,160</span></div>
              <div style={sx('display:flex;justify-content:space-between;padding:7px 0;font-size:14px')}><span style={sx('color:#5A6A75')}>Service &amp; staffing</span><span style={sx('font-weight:600')}>Included</span></div>
              <div style={sx('display:flex;justify-content:space-between;padding:7px 0;font-size:14px')}><span style={sx('color:#5A6A75')}>HST (13%)</span><span style={sx('font-weight:600')}>$1,060.80</span></div>
              <div style={sx('display:flex;justify-content:space-between;padding:12px 0 0;margin-top:6px;border-top:1px solid #EBE6DE;font-size:15px;font-weight:800')}><span>Total</span><span>$9,220.80</span></div>
              <div style={sx('display:flex;justify-content:space-between;padding:7px 0;font-size:13px;color:#5D6D78')}><span>Deposit due today (25%)</span><span style={sx('font-weight:700;color:#16212B')}>$2,305.20</span></div>
            </div>
            <div style={sx('display:flex;flex-direction:column;gap:9px;padding:0 22px 22px')}>
              <button onClick={() => navigate('/booking')} className="ep-btn-primary" style={sx('padding:14px 0;font-size:15px')}>Request to book</button>
              <button onClick={() => navigate('/inbox')} className="ep-btn-outline" style={sx('padding:13px 0;font-size:14px')}>Message vendor</button>
              <p style={sx('margin:6px 0 0;font-size:12px;line-height:1.55;color:#5D6D78;text-align:center')}>You are not charged until Fern &amp; Fig accepts. Free cancellation for 48 hours.</p>
            </div>
          </div>
          <div style={sx('margin-top:16px;padding:20px 20px;background:#FEF7F0;border:1px solid #F0E7DC;border-radius:16px')}>
            <div style={sx('font-size:13.5px;font-weight:800')}>Need something custom?</div>
            <p style={sx('margin:6px 0 12px;font-size:13px;line-height:1.55;color:#5A6A75')}>Send one brief with dietary needs, venue and budget, and get a written quote back.</p>
            <button onClick={() => navigate('/booking')} className="ep-link-plain" style={sx('font-size:13px;font-weight:700;border-bottom:1px solid #16212B')}>Request a quote →</button>
          </div>
        </aside>
      </div>

      <div className="ep-mobile-only" style={sx('position:fixed;left:0;right:0;bottom:0;z-index:40;display:flex;align-items:center;gap:12px;padding:14px 18px 20px;background:#FFFFFF;border-top:1px solid #EFEAE2')}>
        <div>
          <div style={sx('font-size:17px;font-weight:800')}>$8,160</div>
          <div style={sx('font-size:11px;color:#5D6D78')}>120 guests · est.</div>
        </div>
        <button onClick={() => navigate('/booking')} className="ep-btn-primary" style={sx('flex:1;height:50px;font-size:15px')}>Request to book</button>
      </div>
    </div>
  );
}

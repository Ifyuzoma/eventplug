import { useNavigate } from 'react-router-dom';
import { sx } from '../lib/sx';
import { Logo } from '../components/Logo';
import { Checkbox } from '../components/Checkbox';
import { sortChips, filterGroups, results } from '../data/content';

const MOBILE_CHIPS = ['Free that day', '$40–85', 'Plated'];

export default function Search() {
  const navigate = useNavigate();

  return (
    <div className="ep-page">
      <div className="ep-desktop-only">
        <header style={sx('display:flex;align-items:center;gap:20px;padding:26px 56px;border-bottom:1px solid #EFEAE2')}>
          <Logo height={20} />
          <div style={sx('display:flex;align-items:center;flex:1 1 300px;min-width:0;max-width:660px;border:1px solid #16212B;border-radius:999px;padding-right:4px')}>
            <span style={sx('flex:0 1 auto;min-width:0;padding:10px 16px;font-size:14px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-right:1px solid #EBE6DE')}>Wedding catering</span>
            <span style={sx('flex:0 1 auto;min-width:0;padding:10px 14px;font-size:14px;color:#4A5A66;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-right:1px solid #EBE6DE')}>Toronto, ON</span>
            <span style={sx('flex:0 1 auto;min-width:0;padding:10px 14px;font-size:14px;color:#4A5A66;white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}>Sat, Jun 20 · 120 guests</span>
            <span style={sx('flex:1;min-width:6px')} />
            <button className="ep-btn-primary" style={sx('flex:none;width:34px;height:34px;border-radius:50%;font-size:15px')}>↵</button>
          </div>
          <button onClick={() => navigate('/inbox')} className="ep-link-plain" style={sx('flex:none;font-size:14px;font-weight:600;white-space:nowrap')}>Messages</button>
          <button onClick={() => navigate('/events')} className="ep-link-plain" style={sx('flex:none;font-size:14px;font-weight:600;white-space:nowrap')}>My events</button>
          <span style={sx('width:34px;height:34px;flex:none;border-radius:50%;background:#FFD166;color:#16212B;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;letter-spacing:-0.01em')}>A</span>
        </header>

        <div style={sx('display:flex;align-items:center;gap:10px;padding:14px 48px;border-bottom:1px solid #EFEAE2;background:#FEF7F0')}>
          {sortChips.map((c) => (
            <button key={c} className="ep-hover-border" style={sx('flex:none;background:#FFFFFF;border:1px solid #E3DDD3;border-radius:999px;padding:8px 15px;font-size:13px;font-weight:600')}>{c}</button>
          ))}
          <span style={sx('flex:1')} />
          <span style={sx('font-size:11.5px;font-weight:600;color:#5D6D78')}>Sort</span>
          <button className="ep-link-plain" style={sx('font-size:13px;font-weight:700;border-bottom:1px solid #16212B')}>Best match</button>
        </div>

        <div className="ep-split" style={sx('display:grid;grid-template-columns:248px minmax(0,1fr);gap:48px;padding:38px 56px 96px')}>
          <aside>
            <div style={sx('display:flex;align-items:baseline;justify-content:space-between')}>
              <span style={sx('font-size:11px;font-weight:800;letter-spacing:0.13em;text-transform:uppercase;color:#5D6D78')}>Refine</span>
              <button className="ep-link-plain" style={sx('font-size:12.5px;font-weight:600')}>Reset</button>
            </div>
            <div style={sx('margin-top:22px;padding-top:18px;border-top:1px solid #16212B')}>
              <div style={sx('font-size:13px;font-weight:800;letter-spacing:-0.01em')}>Budget per guest</div>
              <div style={sx('display:flex;align-items:baseline;justify-content:space-between;margin-top:12px;font-size:11.5px;font-weight:600;color:#5A6A75')}><span>$25</span><span>$120+</span></div>
              <div style={sx('position:relative;height:3px;margin-top:8px;background:#EBE6DE')}>
                <div style={sx('position:absolute;left:12%;right:32%;top:0;bottom:0;background:#16212B')} />
                <div style={sx('position:absolute;left:12%;top:-5px;width:13px;height:13px;margin-left:-6px;border-radius:50%;background:#FFFFFF;border:2px solid #16212B')} />
                <div style={sx('position:absolute;left:68%;top:-5px;width:13px;height:13px;margin-left:-6px;border-radius:50%;background:#FFFFFF;border:2px solid #16212B')} />
              </div>
              <div style={sx('margin-top:10px;font-size:12.5px;color:#5D6D78')}>$40 – $85 · 62 vendors</div>
            </div>
            {filterGroups.map((g) => (
              <div key={g.title} style={sx('margin-top:26px;padding-top:18px;border-top:1px solid #EBE6DE')}>
                <div style={sx('font-size:13px;font-weight:800;letter-spacing:-0.01em')}>{g.title}</div>
                <div style={sx('display:flex;flex-direction:column;gap:2px;margin-top:12px')}>
                  {g.items.map((i) => (
                    <label key={i.name} style={sx('display:flex;align-items:center;gap:10px;padding:5px 0;font-size:13.5px;cursor:pointer')}>
                      <Checkbox checked={i.on} />
                      <span>{i.name}</span><span style={sx('flex:1')} />
                      <span style={sx('font-size:11px;font-weight:600;color:#5D6D78')}>{i.count}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <div style={sx('margin-top:26px;padding-top:18px;border-top:1px solid #EBE6DE')}>
              <div style={sx('font-size:13px;font-weight:800')}>Availability</div>
              <label style={sx('display:flex;align-items:center;gap:10px;margin-top:12px;font-size:13.5px;cursor:pointer')}>
                <Checkbox checked />Free on my date
              </label>
              <label style={sx('display:flex;align-items:center;gap:10px;margin-top:8px;font-size:13.5px;cursor:pointer')}>
                <Checkbox checked={false} />Instant book only
              </label>
            </div>
          </aside>

          <main>
            <div style={sx('display:flex;align-items:flex-end;justify-content:space-between;padding-bottom:20px')}>
              <div>
                <h1 style={sx("margin:0;font-family:'Manrope',sans-serif;font-size:36px;letter-spacing:-0.035em;font-weight:800")}>Catering in Toronto</h1>
                <p style={sx('margin:8px 0 0;font-size:14px;color:#5A6A75')}>62 vendors free on Sat, Jun 20 · prices shown for 120 guests</p>
              </div>
              <div style={sx('display:flex;gap:2px;padding:3px;border:1px solid #E3DDD3;border-radius:999px')}>
                <button className="ep-link-plain" style={sx('border-radius:999px;padding:7px 16px;font-size:12.5px;font-weight:700;background:#16212B;color:#FFFFFF')}>List</button>
                <button className="ep-link-plain" style={sx('border-radius:999px;padding:7px 16px;font-size:12.5px;font-weight:700;color:#5A6A75')}>Map</button>
              </div>
            </div>

            {results.map((r) => (
              <div key={r.name} style={sx('display:grid;grid-template-columns:264px minmax(0,1fr) 152px;gap:26px;padding:26px 0;border-top:1px solid #EBE6DE')}>
                <button onClick={() => navigate('/vendor')} className="ep-link-plain" style={sx('display:block')}>
                  <img src={r.src} alt="" style={sx('width:264px;height:186px;object-fit:cover;border-radius:12px;display:block')} />
                </button>
                <div style={sx('min-width:0')}>
                  <div style={sx('display:flex;align-items:center;gap:10px;font-size:10.5px;font-weight:800;letter-spacing:0.11em;text-transform:uppercase;color:#5D6D78')}>
                    <span>{r.cat}</span><span>·</span><span>{r.city}</span>
                  </div>
                  <button onClick={() => navigate('/vendor')} className="ep-link-plain ep-hover-fg" style={sx("display:block;margin-top:7px;font-family:'Manrope',sans-serif;font-size:25px;font-weight:800;letter-spacing:-0.03em;text-align:left")}>{r.name}</button>
                  <p style={sx('margin:8px 0 0;max-width:520px;font-size:14.5px;line-height:1.6;color:#5A6A75')}>{r.blurb}</p>
                  <div style={sx('margin-top:12px;font-size:13px;color:#33424E')}>{r.specs}</div>
                  <div style={sx('display:flex;align-items:center;gap:8px;margin-top:14px')}>
                    <span style={sx('width:6px;height:6px;border-radius:50%;background:#3D9B70')} />
                    <span style={sx('font-size:12.5px;font-weight:700;color:#2C7A57')}>{r.avail}</span>
                  </div>
                </div>
                <div style={sx('text-align:right')}>
                  <div style={sx('font-size:13px;font-weight:700')}>{r.rating}<span style={sx('font-weight:500;color:#5D6D78')}> ★</span></div>
                  <div style={sx('font-size:12px;color:#5D6D78;margin-top:2px')}>{r.reviews}</div>
                  <div style={sx("margin-top:18px;font-family:'Manrope',sans-serif;font-size:27px;font-weight:800;letter-spacing:-0.03em")}>{r.price}</div>
                  <div style={sx('font-size:12px;color:#5D6D78')}>{r.unit}</div>
                  <button onClick={() => navigate('/vendor')} className="ep-btn-outline" style={sx('margin-top:16px;width:100%;padding:10px 0;font-size:13px')}>View</button>
                </div>
              </div>
            ))}

            <div style={sx('display:flex;align-items:center;gap:16px;padding-top:30px;border-top:1px solid #EBE6DE')}>
              <button className="ep-btn-dark" style={sx('padding:13px 26px;font-size:14px')}>Show 20 more</button>
              <span style={sx('font-size:11.5px;font-weight:600;color:#5D6D78')}>Showing 5 of 62</span>
            </div>
          </main>
        </div>
      </div>

      <div className="ep-mobile-only">
        <div style={sx('padding:10px 16px;border-bottom:1px solid #EFEAE2')}>
          <div style={sx('display:flex;align-items:center;gap:10px;border:1px solid #16212B;border-radius:999px;padding:11px 16px')}>
            <span style={sx('font-size:13.5px;font-weight:700')}>Catering · Toronto</span>
            <span style={sx('flex:1')} />
            <span style={sx('font-size:12px;color:#5D6D78')}>Jun 20 · 120</span>
          </div>
          <div style={sx('display:flex;gap:8px;margin-top:10px;overflow-x:auto')}>
            {MOBILE_CHIPS.map((c, i) => (
              <span key={c} className={i === 0 ? 'ep-chip ep-chip-on' : 'ep-chip'}>{c}</span>
            ))}
          </div>
        </div>
        <div style={sx('padding:14px 16px')}>
          <div style={sx('display:flex;align-items:baseline;justify-content:space-between;margin-bottom:12px')}>
            <span style={sx('font-size:13px;font-weight:700')}>62 vendors</span>
            <span style={sx('font-size:12.5px;color:#5D6D78')}>Best match ▾</span>
          </div>
          {results.slice(0, 3).map((r) => (
            <button key={r.name} onClick={() => navigate('/vendor')} className="ep-link-plain" style={sx('display:block;width:100%;text-align:left;padding-bottom:18px;margin-bottom:18px;border-bottom:1px solid #F1ECE4')}>
              <img src={r.src} alt="" style={sx('width:100%;height:152px;object-fit:cover;border-radius:16px;display:block')} />
              <div style={sx('display:flex;align-items:baseline;justify-content:space-between;margin-top:12px')}>
                <div style={sx('min-width:0')}>
                  <div style={sx('font-size:16px;font-weight:800;letter-spacing:-0.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}>{r.name}</div>
                  <div style={sx('margin-top:3px;font-size:12.5px;color:#5D6D78')}>{r.cat} · {r.city}</div>
                  <div style={sx('margin-top:6px;font-size:12px;font-weight:700;color:#2C7A57')}>{r.avail}</div>
                </div>
                <div style={sx('flex:none;text-align:right;padding-left:12px')}>
                  <div style={sx('font-size:17px;font-weight:800')}>{r.price}</div>
                  <div style={sx('font-size:10.5px;color:#5D6D78')}>per guest</div>
                </div>
              </div>
            </button>
          ))}
        </div>
        <div style={sx('padding:4px 16px 18px')}>
          <button className="ep-btn-dark" style={sx('width:100%;height:48px;font-size:14.5px')}>Show on map</button>
        </div>
      </div>
    </div>
  );
}

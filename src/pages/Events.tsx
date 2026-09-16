import { useNavigate } from 'react-router-dom';
import { sx } from '../lib/sx';
import { Logo } from '../components/Logo';
import { Icon } from '../components/Icon';
import { MobileTabBar } from '../components/MobileTabBar';
import { myEvents, mobEvents, roster, tasks, docs } from '../data/content';

export default function Events() {
  const navigate = useNavigate();

  return (
    <div className="ep-page ep-mobile-tabbar-space">
      <header className="ep-desktop-only" style={sx('display:flex;align-items:center;gap:28px;padding:26px 56px;border-bottom:1px solid #EFEAE2')}>
        <Logo height={20} />
        <nav style={sx('display:flex;gap:24px;font-size:14px;font-weight:600')}>
          <span style={sx('font-weight:800;border-bottom:2px solid #FF6B6B;padding-bottom:3px')}>My events</span>
          <button onClick={() => navigate('/search')} className="ep-link-plain ep-hover-fg" style={sx('color:#5D6D78')}>Browse vendors</button>
          <button onClick={() => navigate('/inbox')} className="ep-link-plain ep-hover-fg" style={sx('color:#5D6D78')}>Messages</button>
        </nav>
        <span style={sx('flex:1')} />
        <button onClick={() => navigate('/settings')} className="ep-link-plain" style={sx('font-size:14px;font-weight:600;color:#5D6D78')}>Settings</button>
        <span style={sx('width:34px;height:34px;flex:none;border-radius:50%;background:#FFD166;color:#16212B;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;letter-spacing:-0.01em')}>A</span>
      </header>

      <div className="ep-mobile-only" style={sx('display:flex;align-items:center;gap:12px;padding:16px 20px')}>
        <h1 style={sx("margin:0;flex:1;font-family:'Manrope',sans-serif;font-size:30px;line-height:1;letter-spacing:-0.04em;font-weight:800")}>My events</h1>
        <span style={sx('width:40px;height:40px;flex:none;display:flex;align-items:center;justify-content:center;border:1px solid #16212B;border-radius:50%;color:#16212B')}>
          <Icon name="plus" size={16} strokeWidth={1.8} />
        </span>
      </div>
      <div className="ep-mobile-only" style={sx('padding:0 20px')}>
        {mobEvents.map((e) => (
          <div key={e.t} style={sx('display:flex;gap:16px;padding:18px 0;border-top:1px solid #EFEAE2')}>
            <div style={sx('width:48px;flex:none;text-align:center')}>
              <div style={sx("font-family:'Manrope',sans-serif;font-size:26px;line-height:0.9;font-weight:800;letter-spacing:-0.04em")}>{e.d}</div>
              <div style={sx('margin-top:4px;font-size:10px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#5D6D78')}>{e.m}</div>
            </div>
            <div style={sx('flex:1;min-width:0')}>
              <div style={sx('font-size:15.5px;font-weight:800;letter-spacing:-0.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}>{e.t}</div>
              <div style={sx('margin-top:4px;font-size:12px;color:#5D6D78')}>{e.s}</div>
              <div style={sx('margin-top:10px;height:3px;background:#F1ECE4;border-radius:999px;overflow:hidden')}><div style={{ height: 3, width: e.bar, background: e.dot }} /></div>
            </div>
          </div>
        ))}
        <div style={sx('margin-top:18px;padding:16px 18px;background:#FEF7F0;border:1px solid #F0E7DC;border-radius:16px')}>
          <div style={sx('font-size:13px;font-weight:800')}>Two things need you</div>
          <div style={sx('margin-top:6px;font-size:12px;line-height:1.55;color:#5A6A75')}>Ridgeline's quote expires in 5 days, and the Jun 20 florist is unbooked.</div>
        </div>
      </div>

      <div className="ep-desktop-only" style={sx('display:grid;grid-template-columns:272px minmax(0,1fr);gap:0;align-items:start')}>
        <aside style={sx('padding:34px 28px 60px;border-right:1px solid #EFEAE2;min-height:calc(100vh - 110px)')}>
          <div style={sx('font-size:11px;font-weight:800;letter-spacing:0.13em;text-transform:uppercase;color:#5D6D78')}>Your events</div>
          <div style={sx('display:flex;flex-direction:column;gap:8px;margin-top:18px')}>
            {myEvents.map((e) => (
              <button key={e.name} className="ep-link-plain" style={{ textAlign: 'left', padding: 16, background: e.active ? '#FEF7F0' : '#FFFFFF', border: `1px solid ${e.active ? '#16212B' : '#EBE6DE'}`, borderRadius: 16 }}>
                <div style={sx('font-size:15.5px;font-weight:800;letter-spacing:-0.02em')}>{e.name}</div>
                <div style={sx('margin-top:4px;font-size:12.5px;color:#5D6D78')}>{e.kind}</div>
                <div style={sx('margin-top:8px;font-size:11px;font-weight:600;color:#5D6D78')}>{e.date}</div>
              </button>
            ))}
          </div>
          <button className="ep-link-plain ep-hover-fg" style={sx('display:flex;align-items:center;justify-content:center;gap:8px;width:100%;margin-top:14px;border:1px dashed #C9C0B4;border-radius:16px;padding:14px 0;font-size:13.5px;font-weight:700;color:#5A6A75')}>
            <Icon name="plus" size={15} strokeWidth={1.8} />New event
          </button>
          <div style={sx('margin-top:34px;padding-top:18px;border-top:1px solid #EBE6DE')}>
            <div style={sx('font-size:11px;font-weight:800;letter-spacing:0.13em;text-transform:uppercase;color:#5D6D78')}>Saved</div>
            <div style={sx('display:flex;flex-direction:column;align-items:flex-start;gap:12px;margin-top:14px;font-size:14px')}>
              <button className="ep-link-plain" style={sx('display:flex;align-items:center;gap:9px;font-weight:600')}>14 saved vendors</button>
              <button className="ep-link-plain" style={sx('display:flex;align-items:center;gap:9px;font-weight:600')}>3 comparison lists</button>
            </div>
          </div>
        </aside>

        <main style={sx('padding:38px 56px 96px')}>
          <div style={sx('display:flex;align-items:flex-start;justify-content:space-between;gap:32px')}>
            <div>
              <div style={sx('font-size:11px;font-weight:800;letter-spacing:0.13em;text-transform:uppercase;color:#5D6D78')}>Wedding · The Glasshouse, Mississauga</div>
              <h1 style={sx("margin:12px 0 0;font-family:'Manrope',sans-serif;font-size:46px;line-height:1;letter-spacing:-0.04em;font-weight:800")}>Claire &amp; James</h1>
              <div style={sx('display:flex;align-items:center;gap:20px;margin-top:14px;font-size:14px;color:#4A5A66')}>
                <span style={sx('font-weight:700;color:#16212B')}>Sat, Jun 20, 2026</span><span style={sx('width:1px;height:13px;background:#E3DDD3')} />
                <span>180 guests</span><span style={sx('width:1px;height:13px;background:#E3DDD3')} /><span>5:30 PM – 1:00 AM</span>
              </div>
            </div>
            <div style={sx('text-align:right;flex:none')}>
              <div style={sx("font-family:'Manrope',sans-serif;font-size:56px;line-height:0.9;letter-spacing:-0.045em;font-weight:800")}>101</div>
              <div style={sx('font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78;margin-top:6px')}>days to go</div>
            </div>
          </div>

          <div style={sx('margin-top:40px;padding-top:18px;border-top:2px solid #16212B')}>
            <div style={sx('display:flex;align-items:baseline;justify-content:space-between')}>
              <span style={sx('font-size:11px;font-weight:800;letter-spacing:0.13em;text-transform:uppercase;color:#5D6D78')}>Budget</span>
              <span style={sx('font-size:14px;color:#5A6A75')}><span style={sx('font-weight:800;color:#16212B')}>$19,339</span> committed of $34,000</span>
            </div>
            <div style={sx('display:flex;height:10px;margin-top:14px;background:#F1ECE4;overflow:hidden')}>
              <div style={sx('width:29%;background:#16212B')} />
              <div style={sx('width:11%;background:#FF6B6B')} />
              <div style={sx('width:8%;background:#FFD166')} />
            </div>
            <div style={sx('display:flex;gap:26px;margin-top:12px;font-size:12.5px;color:#5A6A75')}>
              <span style={sx('display:flex;align-items:center;gap:7px')}><span style={sx('width:8px;height:8px;background:#16212B')} />Paid $9,989</span>
              <span style={sx('display:flex;align-items:center;gap:7px')}><span style={sx('width:8px;height:8px;background:#FF6B6B')} />Due later $3,650</span>
              <span style={sx('display:flex;align-items:center;gap:7px')}><span style={sx('width:8px;height:8px;background:#FFD166')} />Quoted $2,700</span>
              <span style={sx('display:flex;align-items:center;gap:7px')}><span style={sx('width:8px;height:8px;background:#F1ECE4')} />Unallocated $14,661</span>
            </div>
          </div>

          <div className="ep-split" style={sx('display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,1fr);gap:48px;margin-top:48px')}>
            <section>
              <div style={sx('display:flex;align-items:baseline;justify-content:space-between;padding-bottom:12px')}>
                <h2 style={sx("margin:0;font-family:'Manrope',sans-serif;font-size:24px;letter-spacing:-0.03em;font-weight:800")}>Vendor roster</h2>
                <button onClick={() => navigate('/search')} className="ep-link-plain" style={sx('font-size:13px;font-weight:700;border-bottom:1px solid #16212B')}>Add a vendor</button>
              </div>
              {roster.map((r) => (
                <div key={r.vendor} style={sx('display:grid;grid-template-columns:112px minmax(0,1fr) 132px 96px;gap:14px;align-items:center;padding:15px 0;border-top:1px solid #EBE6DE')}>
                  <span style={sx('font-size:10.5px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#5D6D78')}>{r.cat}</span>
                  <div style={sx('min-width:0')}>
                    <div style={sx('font-size:15px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}>{r.vendor}</div>
                    <div style={sx('margin-top:3px;font-size:12.5px;color:#5D6D78')}>{r.action}</div>
                  </div>
                  <span style={sx('display:flex;align-items:center;gap:8px;font-size:12.5px;font-weight:700')}><span style={{ width: 7, height: 7, borderRadius: '50%', background: r.dot }} />{r.status}</span>
                  <span style={sx('text-align:right;font-size:14px;font-weight:700')}>{r.amount}</span>
                </div>
              ))}
            </section>

            <div>
              <section>
                <h2 style={sx("margin:0 0 12px;font-family:'Manrope',sans-serif;font-size:24px;letter-spacing:-0.03em;font-weight:800")}>Next up</h2>
                {tasks.map((t) => (
                  <div key={t.label} style={sx('display:flex;gap:16px;padding:14px 0;border-top:1px solid #EBE6DE')}>
                    <span style={sx('width:52px;flex:none;font-size:11.5px;font-weight:700;padding-top:2px')}>{t.when}</span>
                    <div>
                      <div style={sx('font-size:14.5px;font-weight:600;line-height:1.45')}>{t.label}</div>
                      <div style={sx('margin-top:4px;font-size:12px;color:#5D6D78')}>{t.who}</div>
                    </div>
                  </div>
                ))}
              </section>
              <section style={sx('margin-top:40px')}>
                <h2 style={sx("margin:0 0 12px;font-family:'Manrope',sans-serif;font-size:24px;letter-spacing:-0.03em;font-weight:800")}>Documents</h2>
                {docs.map((d) => (
                  <div key={d.name} style={sx('display:flex;align-items:center;gap:14px;padding:13px 0;border-top:1px solid #EBE6DE')}>
                    <span style={sx('width:26px;height:32px;flex:none;border:1px solid #C9C0B4;border-radius:6px;background:#FEF7F0')} />
                    <div style={sx('flex:1;min-width:0')}>
                      <div style={sx('font-size:14px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}>{d.name}</div>
                      <div style={sx('margin-top:3px;font-size:12px;color:#5D6D78')}>{d.meta}</div>
                    </div>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </main>
      </div>
      <MobileTabBar />
    </div>
  );
}

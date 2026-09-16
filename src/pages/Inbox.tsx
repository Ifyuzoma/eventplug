import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sx } from '../lib/sx';
import { Logo } from '../components/Logo';
import { Icon } from '../components/Icon';
import { useTabBarHidden } from '../components/TabBarContext';
import { threads, messages, docs } from '../data/content';

export default function Inbox() {
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx] = useState(0);
  const [mobileView, setMobileView] = useState<'list' | 'chat'>('list');
  useTabBarHidden(mobileView === 'chat');

  return (
    <div className={`ep-page${mobileView === 'list' ? ' ep-mobile-tabbar-space' : ''}`}>
      <div className="ep-desktop-only">
        <header style={sx('display:flex;align-items:center;gap:28px;padding:26px 56px;border-bottom:1px solid #EFEAE2')}>
          <Logo height={20} />
          <nav style={sx('display:flex;gap:24px;font-size:14px;font-weight:600')}>
            <button onClick={() => navigate('/events')} className="ep-link-plain ep-hover-fg" style={sx('color:#5D6D78')}>My events</button>
            <span style={sx('font-weight:800;border-bottom:2px solid #FF6B6B;padding-bottom:3px')}>Messages</span>
          </nav>
          <span style={sx('flex:1')} />
          <span style={sx('width:34px;height:34px;flex:none;border-radius:50%;background:#FFD166;color:#16212B;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;letter-spacing:-0.01em')}>A</span>
        </header>

        <div style={sx('display:grid;grid-template-columns:minmax(240px,312px) minmax(360px,1fr) minmax(0,312px);height:calc(100vh - 110px);overflow-x:auto')}>
          <aside style={sx('border-right:1px solid #EFEAE2;overflow-y:auto')}>
            <div style={sx('padding:20px')}>
              <label style={sx('display:flex;align-items:center;gap:9px;width:100%;border:1px solid #E3DDD3;border-radius:999px;padding:9px 16px;color:#5D6D78')}>
                <Icon name="search" size={15} strokeWidth={1.7} />
                <input placeholder="Search messages" style={sx('flex:1;min-width:0;border:0;padding:0;outline:none;font-size:13.5px;background:none')} />
              </label>
              <div style={sx('display:flex;gap:16px;margin-top:16px;font-size:12.5px;font-weight:700')}>
                <span style={sx('border-bottom:2px solid #FF6B6B;padding-bottom:4px')}>All 5</span>
                <span style={sx('color:#5D6D78')}>Unread 2</span>
                <span style={sx('color:#5D6D78')}>Quotes 1</span>
              </div>
            </div>
            {threads.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActiveIdx(i)}
                className="ep-link-plain ep-hover-row"
                style={{ display: 'flex', gap: 12, width: '100%', padding: '20px 22px', textAlign: 'left', background: i === activeIdx ? '#FEF7F0' : 'transparent', border: 0, borderTop: `1px solid ${i === activeIdx ? '#16212B' : '#F1ECE4'}` }}
              >
                <span style={sx('width:38px;height:38px;flex:none;border-radius:50%;background:#16212B;color:#FFFFFF;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;letter-spacing:-0.01em')}>{t.init}</span>
                <div style={sx('flex:1;min-width:0')}>
                  <div style={sx('display:flex;align-items:baseline;gap:8px')}>
                    <span style={sx('font-size:14px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}>{t.name}</span>
                    <span style={sx('flex:1')} />
                    <span style={sx('font-size:10.5px;font-weight:600;color:#5D6D78;flex:none')}>{t.time}</span>
                  </div>
                  <div style={sx('margin-top:4px;font-size:12.5px;line-height:1.45;color:#5D6D78;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden')}>{t.snippet}</div>
                </div>
                <span style={{ width: 7, height: 7, flex: 'none', marginTop: 6, borderRadius: '50%', background: t.unread ? '#FF6B6B' : 'transparent' }} />
              </button>
            ))}
          </aside>

          <section style={sx('display:flex;flex-direction:column;min-width:0')}>
            <div style={sx('display:flex;align-items:center;gap:14px;padding:16px 28px;border-bottom:1px solid #EFEAE2')}>
              <span style={sx('width:36px;height:36px;flex:none;border-radius:50%;background:#16212B;color:#FFFFFF;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;letter-spacing:-0.01em')}>F&amp;F</span>
              <div style={sx('min-width:0')}>
                <div style={sx('font-size:15px;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}>Fern &amp; Fig Catering</div>
                <div style={sx('font-size:12px;color:#2C7A57;font-weight:700')}>Usually replies in 3 hours</div>
              </div>
              <span style={sx('flex:1')} />
              <button onClick={() => navigate('/vendor')} className="ep-btn-outline" style={sx('flex:none;padding:8px 16px;font-size:12.5px;white-space:nowrap')}>View listing</button>
            </div>
            <div style={sx('flex:1;overflow-y:auto;padding:28px;background:#FAF7F2')}>
              <div style={sx('text-align:center;font-size:10.5px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>Today</div>
              {messages.map((m, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: m.mine ? 'flex-end' : 'flex-start', marginTop: 16 }}>
                  <div style={sx('max-width:74%')}>
                    <div style={{ padding: '14px 18px', borderRadius: m.mine ? '16px 16px 4px 16px' : '16px 16px 16px 4px', background: m.mine ? '#16212B' : '#F5F1EA', color: m.mine ? '#FFFFFF' : '#16212B', fontSize: 14.5, lineHeight: 1.6 }}>{m.text}</div>
                    <div style={{ marginTop: 5, fontSize: 10.5, fontWeight: 600, color: '#5D6D78', textAlign: m.mine ? 'right' : 'left' }}>{m.time}</div>
                  </div>
                </div>
              ))}
              <div style={sx('max-width:440px;margin-top:20px;border:1px solid #16212B;border-radius:16px;background:#FFFFFF;overflow:hidden')}>
                <div style={sx('padding:14px 18px;background:#FEF7F0;border-bottom:1px solid #EDE5DA;font-size:10.5px;font-weight:800;letter-spacing:0.11em;text-transform:uppercase;color:#5D6D78')}>Revised quote · valid 7 days</div>
                <div style={sx('padding:18px')}>
                  <div style={sx('font-size:16px;font-weight:800')}>Plated three-course, revised</div>
                  <div style={sx('margin-top:10px;font-size:13.5px;line-height:1.8;color:#5A6A75')}>120 guests × $68<br />Vegan main swap · no charge<br />Bar service + 2 bartenders $680</div>
                  <div style={sx('display:flex;justify-content:space-between;margin-top:14px;padding-top:12px;border-top:1px solid #EBE6DE;font-size:15px;font-weight:800')}><span>Total incl. HST</span><span>$9,989.20</span></div>
                  <div style={sx('display:flex;gap:9px;margin-top:16px')}>
                    <button onClick={() => navigate('/checkout')} className="ep-btn-primary" style={sx('flex:1;padding:12px 0;font-size:13.5px')}>Accept &amp; pay deposit</button>
                    <button className="ep-btn-outline" style={sx('padding:12px 18px;font-size:13.5px')}>Counter</button>
                  </div>
                </div>
              </div>
            </div>
            <div style={sx('padding:16px 28px;border-top:1px solid #EFEAE2')}>
              <div style={sx('display:flex;align-items:flex-end;gap:12px')}>
                <textarea rows={1} placeholder="Write a message…" style={sx('flex:1;border:1px solid #E3DDD3;border-radius:16px;padding:13px 16px;outline:none;line-height:1.5;resize:none')} />
                <button className="ep-btn-dark" style={sx('display:flex;align-items:center;gap:8px;flex:none;padding:13px 22px;font-size:14px')}>
                  Send
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', display: 'block' }}>
                    <path d="M7.4 6.32L15.89 3.49C19.7 2.22 21.77 4.3 20.51 8.11L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.92 14.08L7.4 13.24C1.69 11.34 1.69 8.23 7.4 6.32Z" />
                    <path d="M10.11 13.651L13.69 10.061" />
                  </svg>
                </button>
              </div>
              <div style={sx('display:flex;gap:18px;margin-top:10px;font-size:12.5px;font-weight:600;color:#5D6D78')}>
                <button className="ep-link-plain" style={sx('display:flex;align-items:center;gap:7px')}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', display: 'block' }}>
                    <path d="M19.81 5.94C18.27 9.78 14.41 15 11.18 17.59L9.21 19.17C8.96 19.35 8.71 19.51 8.43 19.62C8.43 19.44 8.42 19.24 8.39 19.05C8.28 18.21 7.9 17.43 7.23 16.76C6.55 16.08 5.72 15.68 4.87 15.57C4.67 15.56 4.47 15.54 4.27 15.56C4.38 15.25 4.55 14.96 4.76 14.72L6.32 12.75C8.9 9.52 14.14 5.64 17.97 4.11C18.56 3.89 19.13 4.05 19.49 4.42C19.87 4.79 20.05 5.36 19.81 5.94Z" />
                    <path d="M8.43 19.621C8.43 20.721 8.01 21.771 7.22 22.571C6.61 23.181 5.78 23.601 4.79 23.731L2.33 24.001C0.99 24.151 -0.16 23.011 0 21.651L0.27 19.191C0.51 17.001 2.34 15.601 4.28 15.561C4.48 15.551 4.69 15.561 4.88 15.571C5.73 15.681 6.56 16.071 7.24 16.761C7.91 17.431 8.29 18.211 8.4 19.051C8.41 19.241 8.43 19.431 8.43 19.621Z" />
                  </svg>
                  Attach file
                </button>
                <button className="ep-link-plain">Share event details</button>
                <button className="ep-link-plain">Request a quote</button>
              </div>
            </div>
          </section>

          <aside style={sx('border-left:1px solid #EFEAE2;padding:24px;overflow-y:auto;background:#FEF7F0')}>
            <div style={sx('font-size:11px;font-weight:800;letter-spacing:0.13em;text-transform:uppercase;color:#5D6D78')}>This booking</div>
            <div style={sx('margin-top:16px;padding:16px;background:#FFFFFF;border:1px solid #F0E7DC;border-radius:16px')}>
              <div style={sx('display:flex;align-items:center;gap:8px;font-size:12.5px;font-weight:700;color:#2C7A57')}><span style={sx('width:7px;height:7px;border-radius:50%;background:#3D9B70')} />Confirmed</div>
              <div style={sx('margin-top:12px;font-size:14px;line-height:1.8')}>Claire &amp; James<br />Sat, Jun 20 · 5:30 PM<br />180 guests<br />The Glasshouse</div>
              <div style={sx('margin-top:14px;padding-top:12px;border-top:1px solid #F1ECE4;display:flex;flex-wrap:wrap;gap:4px 12px;justify-content:space-between;font-size:14px;font-weight:800')}><span>$9,989.20</span><span style={sx('font-weight:600;color:#5D6D78;white-space:nowrap')}>deposit paid</span></div>
            </div>
            <div style={sx('margin-top:22px;font-size:11px;font-weight:800;letter-spacing:0.13em;text-transform:uppercase;color:#5D6D78')}>Shared files</div>
            {docs.map((d) => (
              <div key={d.name} style={sx('padding:12px 0;border-bottom:1px solid #E9E2D8')}>
                <div style={sx('font-size:13px;font-weight:600;line-height:1.4')}>{d.name}</div>
                <div style={sx('margin-top:3px;font-size:11.5px;color:#5D6D78')}>{d.meta}</div>
              </div>
            ))}
            <div style={sx('margin-top:22px;font-size:11px;font-weight:800;letter-spacing:0.13em;text-transform:uppercase;color:#5D6D78')}>Quick replies</div>
            <div style={sx('display:flex;flex-direction:column;gap:8px;margin-top:12px')}>
              <button className="ep-link-plain ep-hover-border" style={sx('text-align:left;background:#FFFFFF;border:1px solid #F0E7DC;border-radius:16px;padding:11px 14px;font-size:13px;font-weight:600')}>Can you hold the date 48h?</button>
              <button className="ep-link-plain ep-hover-border" style={sx('text-align:left;background:#FFFFFF;border:1px solid #F0E7DC;border-radius:16px;padding:11px 14px;font-size:13px;font-weight:600')}>Send me a tasting date</button>
            </div>
          </aside>
        </div>
      </div>

      <div className="ep-mobile-only">
        {mobileView === 'list' ? (
          <>
            <div style={sx('padding:16px 18px 6px')}>
              <h1 style={sx("margin:0;font-family:'Manrope',sans-serif;font-size:28px;letter-spacing:-0.03em;font-weight:800")}>Messages</h1>
            </div>
            <div style={sx('padding:0 18px 10px')}>
              <label style={sx('display:flex;align-items:center;gap:9px;width:100%;border:1px solid #E3DDD3;border-radius:999px;padding:9px 16px;color:#5D6D78')}>
                <Icon name="search" size={15} strokeWidth={1.7} />
                <input placeholder="Search messages" style={sx('flex:1;min-width:0;border:0;padding:0;outline:none;font-size:13.5px;background:none')} />
              </label>
            </div>
            {threads.map((t, i) => (
              <button
                key={t.name}
                onClick={() => { setActiveIdx(i); setMobileView('chat'); }}
                className="ep-link-plain ep-hover-row"
                style={{ display: 'flex', gap: 12, width: '100%', padding: '16px 18px', textAlign: 'left', background: 'transparent', border: 0, borderTop: '1px solid #F1ECE4' }}
              >
                <span style={sx('width:38px;height:38px;flex:none;border-radius:50%;background:#16212B;color:#FFFFFF;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;letter-spacing:-0.01em')}>{t.init}</span>
                <div style={sx('flex:1;min-width:0')}>
                  <div style={sx('display:flex;align-items:baseline;gap:8px')}>
                    <span style={sx('font-size:14px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}>{t.name}</span>
                    <span style={sx('flex:1')} />
                    <span style={sx('font-size:10.5px;font-weight:600;color:#5D6D78;flex:none')}>{t.time}</span>
                  </div>
                  <div style={sx('margin-top:4px;font-size:12.5px;line-height:1.45;color:#5D6D78;white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}>{t.snippet}</div>
                </div>
                <span style={{ width: 7, height: 7, flex: 'none', marginTop: 6, borderRadius: '50%', background: t.unread ? '#FF6B6B' : 'transparent' }} />
              </button>
            ))}
          </>
        ) : (
          <div style={sx('display:flex;flex-direction:column;height:calc(100vh - 60px)')}>
            <div style={sx('display:flex;align-items:center;gap:12px;padding:12px 18px;border-bottom:1px solid #EFEAE2')}>
              <button onClick={() => setMobileView('list')} className="ep-link-plain" style={sx('display:flex')}><Icon name="chevL" size={16} strokeWidth={2} /></button>
              <span style={sx('width:34px;height:34px;flex:none;border-radius:50%;background:#16212B;color:#FFFFFF;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;letter-spacing:-0.01em')}>F&amp;F</span>
              <div>
                <div style={sx('font-size:14.5px;font-weight:800')}>Fern &amp; Fig</div>
                <div style={sx('font-size:11px;color:#2C7A57;font-weight:700')}>Replies in 3h</div>
              </div>
            </div>
            <div style={sx('flex:1;overflow-y:auto;padding:16px;background:#FAF7F2')}>
              {messages.map((m, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: m.mine ? 'flex-end' : 'flex-start', marginBottom: 12 }}>
                  <div style={{ maxWidth: '82%', padding: '12px 14px', borderRadius: m.mine ? '16px 16px 4px 16px' : '16px 16px 16px 4px', background: m.mine ? '#16212B' : '#FFFFFF', color: m.mine ? '#FFFFFF' : '#16212B', fontSize: 13.5, lineHeight: 1.55 }}>{m.text}</div>
                </div>
              ))}
              <div style={sx('border:1px solid #16212B;border-radius:16px;background:#FFFFFF;overflow:hidden')}>
                <div style={sx('padding:10px 14px;background:#FEF7F0;border-bottom:1px solid #EDE5DA;font-size:9.5px;font-weight:800;letter-spacing:0.11em;text-transform:uppercase;color:#5D6D78')}>Revised quote</div>
                <div style={sx('padding:14px')}>
                  <div style={sx('display:flex;justify-content:space-between;align-items:baseline')}><span style={sx('font-size:13.5px;font-weight:700')}>Plated · 120 guests</span><span style={sx('font-size:16px;font-weight:800')}>$9,989</span></div>
                  <button onClick={() => navigate('/checkout')} className="ep-btn-primary" style={sx('width:100%;height:46px;margin-top:12px;font-size:14px')}>Accept &amp; pay deposit</button>
                </div>
              </div>
            </div>
            <div style={sx('display:flex;align-items:center;gap:10px;padding:12px 16px 20px;border-top:1px solid #EFEAE2')}>
              <div style={sx('flex:1;border:1px solid #E3DDD3;border-radius:999px;padding:13px 16px;font-size:13.5px;color:#5D6D78')}>Write a message…</div>
              <button className="ep-link-plain" style={sx('width:46px;height:46px;flex:none;display:flex;align-items:center;justify-content:center;background:#16212B;color:#FFFFFF;border-radius:50%')}>
                <Icon name="arrowUp" size={16} strokeWidth={2} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

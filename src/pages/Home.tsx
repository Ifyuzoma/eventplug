import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sx } from '../lib/sx';
import { Icon } from '../components/Icon';
import { Logo } from '../components/Logo';
import { StarRow } from '../components/StarRow';
import { photos } from '../data/photos';
import { categories, carouselSlides, carouselTabs, featured, vendorStats, reviews, footerCols, mhCats, mhVendors, mhSteps, mhRev } from '../data/content';

const DWELL = 5200;

export default function Home() {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (paused) return;
      setSlide((s) => (s + 1) % carouselSlides.length);
    }, DWELL);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  const goSlide = (i: number) => setSlide(i);
  const loopReviews = [...reviews, ...reviews];

  return (
    <div className="ep-page ep-mobile-tabbar-space" style={sx('min-height:100vh;background:#FFFFFF')}>
      <div className="ep-desktop-only">
        <header style={sx('display:flex;flex-wrap:wrap;align-items:center;gap:20px 36px;padding:28px 56px;border-bottom:1px solid #EFEAE2')}>
          <Logo height={23} />
          <nav style={sx('display:flex;flex-wrap:wrap;gap:12px 26px;font-size:14px;font-weight:600')}>
            <button className="ep-link-plain ep-hover-fg" onClick={() => navigate('/search')} style={sx('flex:none;white-space:nowrap')}>Browse vendors</button>
            <button className="ep-link-plain ep-hover-fg" onClick={() => navigate('/search')} style={sx('flex:none;white-space:nowrap;color:#5D6D78')}>How it works</button>
            <button className="ep-link-plain ep-hover-fg" style={sx('flex:none;white-space:nowrap;color:#5D6D78')}>For vendors</button>
          </nav>
          <span style={sx('flex:1')} />
          <button className="ep-link-plain" onClick={() => navigate('/auth')} style={sx('flex:none;white-space:nowrap;font-size:14px;font-weight:600')}>Log in</button>
          <button className="ep-btn-primary" style={sx('flex:none;white-space:nowrap;padding:13px 24px;font-size:14px')}>List your business</button>
        </header>

        <section style={sx('padding:78px 56px 0;text-align:center')}>
          <div style={sx('max-width:900px;margin:0 auto')}>
            <h1 className="ep-hero-title" style={sx("margin:0;font-family:'Manrope',sans-serif;font-size:92px;line-height:0.9;letter-spacing:-0.05em;font-weight:800;text-wrap:balance")}>
              Book the people who<br />make the party.
            </h1>
            <p style={sx('margin:24px auto 0;max-width:520px;font-size:17.5px;line-height:1.55;color:#4A5A66;text-wrap:pretty')}>
              Caterers, venues, DJs and decorators with real prices and real open dates. Hold yours with a deposit, and keep the whole thing in one thread.
            </p>
          </div>

          <div style={sx('display:flex;flex-wrap:wrap;align-items:stretch;margin:40px auto 0;max-width:800px;text-align:left;border:1px solid #16212B;border-radius:20px;background:#FFFFFF;overflow:hidden')}>
            <label style={sx('flex:1.2 1 150px;min-width:0;display:flex;flex-direction:column;gap:3px;padding:14px 18px;border-right:1px solid #EBE6DE')}>
              <span style={sx('font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>What</span>
              <input defaultValue="Wedding catering" style={sx('width:100%;min-width:0;border:0;outline:none;padding:0;font-weight:600')} />
            </label>
            <label style={sx('flex:1 1 130px;min-width:0;display:flex;flex-direction:column;gap:3px;padding:14px 18px;border-right:1px solid #EBE6DE')}>
              <span style={sx('font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>Where</span>
              <input defaultValue="Toronto, ON" style={sx('width:100%;min-width:0;border:0;outline:none;padding:0;font-weight:600')} />
            </label>
            <label style={sx('flex:0.85 1 120px;min-width:0;display:flex;flex-direction:column;gap:3px;padding:14px 18px')}>
              <span style={sx('font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5D6D78')}>When</span>
              <input defaultValue="Sat, Jun 20" style={sx('width:100%;min-width:0;border:0;outline:none;padding:0;font-weight:600')} />
            </label>
            <button onClick={() => navigate('/search')} className="ep-btn-primary" style={sx('display:flex;align-items:center;justify-content:center;gap:8px;flex:1 0 88px;min-height:52px;border-radius:0;font-size:14px')}>
              <Icon name="search" size={17} strokeWidth={1.8} />
              Search
            </button>
          </div>
          <div style={sx('display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px 22px;margin:20px auto 0;font-size:12.5px;font-weight:600;color:#5D6D78')}>
            <span style={sx('display:flex;align-items:center;gap:7px')}><Icon name="lock" size={14} strokeWidth={1.7} />Deposit held until 48 hours after your event</span>
            <span style={sx('width:4px;height:4px;border-radius:50%;background:#C9C0B4')} />
            <span>Free to browse, no signup to compare</span>
          </div>

          <div style={sx('position:relative;margin-top:64px')}>
            <div className="ep-split" style={sx('display:grid;grid-template-columns:minmax(0,0.72fr) minmax(0,1.56fr) minmax(0,0.72fr);gap:14px;align-items:end')}>
              <img src={photos.jayWennington} alt="Decor detail" style={sx('width:100%;height:250px;object-fit:cover;border-radius:18px;display:block')} />
              <div style={sx('position:relative;height:420px;border-radius:20px;overflow:hidden;background:#16212B')}>
                <video src={photos.heroVideo} autoPlay muted loop playsInline style={sx('width:100%;height:100%;object-fit:cover;display:block')} />
              </div>
              <img src={photos.alexMunsell} alt="Plated course" style={sx('width:100%;height:250px;object-fit:cover;border-radius:18px;display:block')} />
            </div>

            <div style={sx('position:absolute;left:50%;bottom:-34px;transform:translateX(-50%);display:flex;flex-wrap:wrap;align-items:center;gap:22px;text-align:left;background:#FFFFFF;border:1px solid #16212B;border-radius:999px;padding:12px 14px 12px 18px')}>
              <div style={sx('display:flex;align-items:center;gap:12px')}>
                <span style={sx('width:40px;height:40px;flex:none;border-radius:50%;background:#16212B;color:#FFFFFF;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;letter-spacing:-0.01em')}>F&amp;F</span>
                <div>
                  <div style={sx('font-size:14px;font-weight:800;letter-spacing:-0.015em;white-space:nowrap')}>Fern &amp; Fig Catering</div>
                  <div style={sx('margin-top:2px;font-size:12px;color:#5D6D78;white-space:nowrap')}>Etobicoke · 4.9 (128) · $68 per guest</div>
                </div>
              </div>
              <span style={sx('width:1px;height:34px;background:#EFEAE2;flex:none')} />
              <span style={sx('display:flex;align-items:center;gap:8px;font-size:12px;font-weight:800;letter-spacing:0.05em;text-transform:uppercase;color:#0F5C52;white-space:nowrap')}>
                <span style={sx('width:7px;height:7px;border-radius:50%;background:#0F5C52')} />Open Jun 20
              </span>
              <button onClick={() => navigate('/vendor')} className="ep-btn-primary" style={sx('flex:none;padding:11px 20px;font-size:13px;white-space:nowrap')}>View profile</button>
            </div>
          </div>
        </section>
      </div>

      <div className="ep-mobile-only">
        <header style={sx('display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 18px 14px;background:#FFFFFF;border-bottom:1px solid #F4EFE8')}>
          <Logo height={18} />
          <span style={sx('display:flex;gap:8px')}>
            <button className="ep-link-plain" style={sx('width:44px;height:44px;display:flex;align-items:center;justify-content:center;border:1px solid #E3DDD3;border-radius:50%;color:#33424E')}>
              <Icon name="bell" size={19} strokeWidth={1.6} />
            </button>
            <button onClick={() => setMenuOpen((v) => !v)} className="ep-link-plain" style={sx('width:44px;height:44px;display:flex;align-items:center;justify-content:center;border:1px solid #E3DDD3;border-radius:50%;color:#33424E')}>
              <Icon name="list" size={19} strokeWidth={1.7} />
            </button>
          </span>
        </header>
        {menuOpen && (
          <div style={sx('display:flex;flex-direction:column;padding:10px 18px;gap:2px;border-bottom:1px solid #F4EFE8')}>
            <button onClick={() => navigate('/auth')} className="ep-link-plain ep-hover-row" style={sx('text-align:left;padding:12px 4px;font-size:15px;font-weight:700;border-radius:10px')}>Log in</button>
            <button className="ep-link-plain ep-hover-row" style={sx('text-align:left;padding:12px 4px;font-size:15px;font-weight:700;border-radius:10px')}>List your business</button>
            <button onClick={() => navigate('/search')} className="ep-link-plain ep-hover-row" style={sx('text-align:left;padding:12px 4px;font-size:15px;font-weight:700;border-radius:10px')}>How it works</button>
          </div>
        )}

        <div style={sx('padding:22px 18px 0')}>
          <h2 style={sx("margin:0;font-family:'Manrope',sans-serif;font-size:38px;line-height:0.94;letter-spacing:-0.045em;font-weight:800;text-wrap:balance")}>Book the people who make the party.</h2>
          <p style={sx('margin:14px 0 0;font-size:14.5px;line-height:1.6;color:#4A5A66')}>Caterers, venues, DJs and decorators with real prices and real open dates.</p>

          <div style={sx('margin-top:20px;border:1px solid #16212B;border-radius:18px;overflow:hidden')}>
            <label style={sx('display:block;padding:12px 16px;border-bottom:1px solid #EBE6DE')}>
              <span style={sx('display:block;font-size:9.5px;font-weight:800;letter-spacing:0.11em;text-transform:uppercase;color:#5D6D78')}>What</span>
              <input defaultValue="Wedding catering" style={sx('width:100%;margin-top:3px;border:0;outline:none;padding:0;font-size:15px;font-weight:600')} />
            </label>
            <div style={sx('display:flex')}>
              <label style={sx('flex:1;min-width:0;display:block;padding:12px 16px;border-right:1px solid #EBE6DE')}>
                <span style={sx('display:block;font-size:9.5px;font-weight:800;letter-spacing:0.11em;text-transform:uppercase;color:#5D6D78')}>Where</span>
                <input defaultValue="Toronto" style={sx('width:100%;margin-top:3px;border:0;outline:none;padding:0;font-size:15px;font-weight:600')} />
              </label>
              <label style={sx('flex:1;min-width:0;display:block;padding:12px 16px')}>
                <span style={sx('display:block;font-size:9.5px;font-weight:800;letter-spacing:0.11em;text-transform:uppercase;color:#5D6D78')}>When</span>
                <input defaultValue="Sat, Jun 20" style={sx('width:100%;margin-top:3px;border:0;outline:none;padding:0;font-size:15px;font-weight:600')} />
              </label>
            </div>
          </div>
          <button onClick={() => navigate('/search')} className="ep-btn-primary" style={sx('display:flex;align-items:center;justify-content:center;gap:9px;width:100%;height:52px;margin-top:10px;font-size:15.5px')}>
            <Icon name="search" size={17} strokeWidth={1.7} />Search 1,248 vendors
          </button>
          <div style={sx('display:flex;align-items:center;justify-content:center;gap:8px;margin-top:14px;font-size:12px;font-weight:600;color:#5D6D78;text-align:center')}>
            <Icon name="lock" size={14} strokeWidth={1.7} />Deposit held until 48 hours after your event
          </div>
        </div>

        <div style={sx('margin-top:26px;padding:0 18px')}>
          <img src={photos.alElmes} alt="Hero moment" style={sx('width:100%;height:250px;object-fit:cover;border-radius:20px;display:block')} />
          <button
            onClick={() => navigate('/vendor')}
            className="ep-link-plain"
            style={sx('display:flex;align-items:center;gap:12px;width:100%;margin:-32px 0 0;position:relative;z-index:2;background:#FFFFFF;border:1px solid #16212B;border-radius:18px;padding:13px 15px;text-align:left')}
          >
            <span style={sx('width:40px;height:40px;flex:none;border-radius:50%;background:#16212B;color:#FFFFFF;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800')}>F&amp;F</span>
            <span style={sx('flex:1;min-width:0')}>
              <span style={sx('display:block;font-size:14.5px;font-weight:800;letter-spacing:-0.015em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}>Fern &amp; Fig Catering</span>
              <span style={sx('display:block;margin-top:3px;font-size:12px;color:#5D6D78')}>Etobicoke · 4.9 (128) · $68 per guest</span>
            </span>
            <span style={sx('width:40px;height:40px;flex:none;display:flex;align-items:center;justify-content:center;background:#FF6B6B;color:#FFFFFF;border-radius:50%')}>
              <Icon name="chevR" size={17} strokeWidth={1.8} />
            </span>
          </button>
        </div>

        <div style={sx('padding:34px 18px 0')}>
          <div style={sx('display:flex;align-items:baseline;gap:12px')}>
            <h3 style={sx("margin:0;flex:1;font-family:'Manrope',sans-serif;font-size:24px;letter-spacing:-0.03em;font-weight:800")}>Start with a category</h3>
            <button onClick={() => navigate('/search')} className="ep-link-plain" style={sx('font-size:12.5px;font-weight:700;color:#5D6D78')}>All 8</button>
          </div>
          <div style={sx('display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:16px')}>
            {mhCats.map((c) => (
              <button key={c.name} onClick={() => navigate('/search')} className="ep-link-plain" style={sx('position:relative;display:block;height:104px;padding:0;background:#16212B;border-radius:16px;overflow:hidden;text-align:left')}>
                <img src={c.img} alt="" style={sx('position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.42;display:block')} />
                <span style={sx('position:absolute;inset:0;background:linear-gradient(to top, rgba(22,33,43,0.88) 0%, rgba(22,33,43,0.34) 64%, rgba(22,33,43,0.08) 100%)')} />
                <span style={sx('position:absolute;left:14px;right:14px;bottom:13px;display:block')}>
                  <span style={sx('display:block;font-size:15px;font-weight:800;color:#FFFFFF;letter-spacing:-0.015em')}>{c.name}</span>
                  <span style={sx('display:block;margin-top:3px;font-size:11.5px;font-weight:600;color:#FFFFFF')}>{c.count}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div style={sx('margin-top:36px;padding:28px 18px;background:#0F5C52;color:#FFFFFF')}>
          <div style={sx('font-size:10.5px;font-weight:800;letter-spacing:0.13em;text-transform:uppercase;color:#B4DFCB')}>How a booking goes</div>
          {mhSteps.map((s) => (
            <div key={s.n} style={sx('display:flex;gap:14px;margin-top:20px;padding-top:18px;border-top:1px solid rgba(255,255,255,0.22)')}>
              <span style={sx("flex:none;font-family:'Manrope',sans-serif;font-size:14px;font-weight:800;letter-spacing:0.03em;color:#B4DFCB")}>{s.n}</span>
              <span style={sx('flex:1;min-width:0')}>
                <span style={sx('display:block;font-size:16.5px;font-weight:800;letter-spacing:-0.02em')}>{s.t}</span>
                <span style={sx('display:block;margin-top:6px;font-size:13.5px;line-height:1.6;color:#CDE6D9')}>{s.b}</span>
              </span>
            </div>
          ))}
        </div>

        <div style={sx('padding:34px 18px 0')}>
          <div style={sx('display:flex;align-items:baseline;gap:12px')}>
            <h3 style={sx("margin:0;flex:1;font-family:'Manrope',sans-serif;font-size:24px;letter-spacing:-0.03em;font-weight:800")}>Free on Jun 20</h3>
            <button onClick={() => navigate('/search')} className="ep-link-plain" style={sx('font-size:12.5px;font-weight:700;color:#5D6D78')}>See all</button>
          </div>
          {mhVendors.map((v) => (
            <button key={v.name} onClick={() => navigate('/vendor')} className="ep-link-plain" style={sx('display:flex;gap:14px;width:100%;text-align:left;padding:16px 0;border-bottom:1px solid #F1ECE4')}>
              <img src={v.img} alt="" style={sx('width:96px;height:96px;flex:none;border-radius:14px;object-fit:cover;display:block')} />
              <span style={sx('flex:1;min-width:0')}>
                <span style={sx('display:block;font-size:15.5px;font-weight:800;letter-spacing:-0.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}>{v.name}</span>
                <span style={sx('display:block;margin-top:4px;font-size:12.5px;color:#5D6D78')}>{v.meta}</span>
                <span style={sx('display:flex;align-items:center;gap:7px;margin-top:8px;font-size:11.5px;font-weight:700;color:#0F5C52')}>
                  <span style={sx('width:6px;height:6px;border-radius:50%;background:#0F5C52')} />{v.open}
                </span>
                <span style={sx('display:block;margin-top:8px;font-size:14.5px;font-weight:800')}>{v.price} <span style={sx('font-size:11px;font-weight:600;color:#5D6D78')}>{v.unit}</span></span>
              </span>
            </button>
          ))}
        </div>

        <div style={sx('margin-top:32px;padding:26px 18px;background:#FEF7F0')}>
          <StarRow filled={5} size={16} />
          <p style={sx("margin:16px 0 0;font-family:'Manrope',sans-serif;font-size:21px;line-height:1.3;letter-spacing:-0.025em;font-weight:800;text-wrap:pretty")}>{mhRev.text}</p>
          <div style={sx('display:flex;align-items:center;gap:12px;margin-top:18px')}>
            <img src={mhRev.av} alt="" width={38} height={38} style={sx('width:38px;height:38px;flex:none;border-radius:50%;object-fit:cover;display:block')} />
            <span>
              <span style={sx('display:block;font-size:13.5px;font-weight:800')}>{mhRev.who}</span>
              <span style={sx('display:block;margin-top:2px;font-size:12px;color:#5D6D78')}>{mhRev.meta}</span>
            </span>
          </div>
        </div>

        <div style={sx('padding:32px 18px 0')}>
          <h3 style={sx("margin:0;font-family:'Manrope',sans-serif;font-size:24px;line-height:1.05;letter-spacing:-0.03em;font-weight:800")}>Not sure who you need yet?</h3>
          <p style={sx('margin:10px 0 0;font-size:14px;line-height:1.6;color:#4A5A66')}>Post the brief once. Vendors who can actually do your date reply with a written quote, usually within a day.</p>
          <button onClick={() => navigate('/booking')} className="ep-btn-dark" style={sx('width:100%;height:50px;margin-top:16px;font-size:15px')}>Post a brief</button>
        </div>

        <div style={sx('margin-top:34px;padding:26px 18px 30px;background:#16212B;color:#FFFFFF')}>
          <div style={sx('font-size:16.5px;font-weight:800;letter-spacing:-0.02em')}>Do you cater, shoot or DJ?</div>
          <p style={sx('margin:8px 0 0;font-size:13.5px;line-height:1.6;color:#B9C7D0')}>List once, get paid two days after every event. Flat 8% and nothing up front.</p>
          <button className="ep-link-plain" style={sx('width:100%;height:48px;margin-top:16px;background:#FFFFFF;color:#16212B;border-radius:999px;font-size:14.5px;font-weight:700')}>List your business</button>
          <div style={sx('display:flex;flex-wrap:wrap;gap:14px;margin-top:24px;padding-top:18px;border-top:1px solid #2A3945;font-size:12.5px;color:#B9C7D0')}>
            <button className="ep-link-plain" style={{ color: 'inherit' }}>How it works</button>
            <button className="ep-link-plain" style={{ color: 'inherit' }}>Support</button>
            <button className="ep-link-plain" style={{ color: 'inherit' }}>Terms</button>
            <button className="ep-link-plain" style={{ color: 'inherit' }}>Privacy</button>
          </div>
        </div>
      </div>

      <section className="ep-desktop-only" style={sx('padding:112px 56px 84px;border-top:1px solid #EFEAE2;margin-top:76px')}>
        <div style={sx('display:flex;align-items:baseline;justify-content:space-between;padding:0 0 26px')}>
          <span style={sx('font-size:11px;font-weight:800;letter-spacing:0.13em;text-transform:uppercase;color:#5D6D78')}>Browse by category</span>
          <button onClick={() => navigate('/search')} className="ep-link-plain" style={sx('font-size:13px;font-weight:700;border-bottom:1px solid #16212B')}>All 14 categories</button>
        </div>
        <div className="ep-4col" style={sx('display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0 40px;border-top:1px solid #E9E2D8')}>
          {categories.map((c) => (
            <button key={c.no} onClick={() => navigate('/search')} className="ep-link-plain ep-hover-fg" style={sx('display:flex;align-items:baseline;gap:10px;padding:18px 0;border-bottom:1px solid #E9E2D8;text-align:left')}>
              <span style={sx("font-family:'Manrope',sans-serif;font-size:27px;font-weight:800;letter-spacing:-0.035em;line-height:1")}>{c.name}</span>
              <span style={sx('flex:1')} />
              <span style={sx('font-size:11px;font-weight:600;color:#5D6D78')}>{c.count}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="ep-desktop-only" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} style={sx('padding:96px 0 100px;background:#FEF7F0;border-top:1px solid #EFEAE2;border-bottom:1px solid #EFEAE2')}>
        <div className="ep-split" style={sx('display:grid;grid-template-columns:minmax(0,0.62fr) minmax(0,1fr);gap:56px;align-items:start;padding:0 56px')}>
          <div>
            <div style={sx('font-size:11px;font-weight:800;letter-spacing:0.13em;text-transform:uppercase;color:#5D6D78')}>How it works</div>
            <h2 style={sx("margin:18px 0 0;font-family:'Manrope',sans-serif;font-size:40px;line-height:1;letter-spacing:-0.04em;font-weight:800;text-wrap:pretty")}>How a booking actually goes.</h2>
            <div style={sx('margin-top:34px')}>
              {carouselTabs.map((title, i) => (
                <button key={title} onClick={() => goSlide(i)} className="ep-link-plain" style={sx('display:block;width:100%;text-align:left')}>
                  <div style={{ height: 2, background: i === slide ? '#E0D7CA' : '#EDE4D8', overflow: 'hidden' }}>
                    <div
                      style={{
                        width: '100%',
                        height: 2,
                        background: i === slide ? '#16212B' : 'transparent',
                        transformOrigin: 'left',
                        transform: i === slide ? undefined : 'scaleX(0)',
                        animation: i === slide ? `epProg ${DWELL}ms linear forwards ${paused ? 'paused' : 'running'}` : 'none',
                      }}
                    />
                  </div>
                  <div style={sx('display:flex;align-items:baseline;gap:14px;padding:13px 0 15px')}>
                    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', color: i === slide ? '#16212B' : '#5D6D78' }}>{String(i + 1).padStart(2, '0')}</span>
                    <span style={{ fontSize: 17, fontWeight: 800, letterSpacing: '-0.02em', color: i === slide ? '#16212B' : '#4A5A66' }}>{title}</span>
                    <span style={sx('flex:1')} />
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: i === slide ? '#FF6B6B' : 'transparent' }} />
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div style={sx('overflow:hidden')}>
            <div style={{ display: 'flex', width: '100%', transform: `translateX(-${slide * 100}%)`, transition: 'transform .8s cubic-bezier(.16,1,.3,1)' }}>
              {carouselSlides.map((c) => (
                <div key={c.caption} style={sx('flex:0 0 100%;min-width:0;padding-right:2px')}>
                  <img src={c.src} alt={c.caption} style={sx('width:100%;height:330px;object-fit:cover;border-radius:16px;display:block')} />
                  <div style={sx('display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:32px;margin-top:24px')}>
                    <h3 style={sx("margin:0;font-family:'Manrope',sans-serif;font-size:27px;line-height:1.08;letter-spacing:-0.03em;font-weight:800")}>{c.headline}</h3>
                    <p style={sx('margin:0;font-size:15px;line-height:1.65;color:#4A5A66')}>{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ep-desktop-only" style={sx('padding:96px 56px 100px')}>
        <div style={sx('display:flex;align-items:baseline;justify-content:space-between;padding-bottom:24px;border-bottom:1px solid #EBE6DE')}>
          <h2 style={sx("margin:0;font-family:'Manrope',sans-serif;font-size:34px;line-height:1.05;letter-spacing:-0.035em;font-weight:800")}>Booked most this month</h2>
          <span style={sx('font-size:11px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#5D6D78')}>Greater Toronto Area</span>
        </div>
        <div className="ep-split" style={sx('display:grid;grid-template-columns:minmax(0,1.55fr) minmax(0,1fr);gap:44px;padding-top:34px')}>
          <button onClick={() => navigate('/vendor')} className="ep-link-plain" style={sx('display:block;text-align:left')}>
            <img src={photos.takashiYamada} alt="Featured vendor" className="ep-feat-img" style={sx('width:100%;height:430px;object-fit:cover;border-radius:16px;display:block')} />
            <div className="ep-feat-card" style={sx('display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-top:20px')}>
              <div style={sx('min-width:0')}>
                <div style={sx('font-size:11px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#5D6D78')}>Catering · Etobicoke</div>
                <h3 className="ep-feat-title" style={sx("margin:8px 0 0;font-family:'Manrope',sans-serif;font-size:clamp(20px, 6vw, 32px);line-height:1.1;letter-spacing:-0.035em;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis")}>Fern &amp; Fig Catering</h3>
                <p className="ep-feat-desc" style={sx('margin:8px 0 0;max-width:420px;font-size:14.5px;line-height:1.6;color:#5A6A75')}>Seasonal Ontario menus, plated or family-style, for 40–300 guests. Two chefs on site.</p>
              </div>
              <div style={sx('text-align:right;flex:none')}>
                <div style={sx('font-size:22px;font-weight:800')}>$68<span style={sx('font-size:12px;font-weight:600;color:#5D6D78')}>/guest</span></div>
                <div style={sx('font-size:13px;color:#5D6D78;margin-top:2px')}>4.9 · 128 reviews</div>
              </div>
            </div>
          </button>

          <div className="ep-desktop-only">
            {featured.map((v) => (
              <button key={v.name} onClick={() => navigate('/vendor')} className="ep-link-plain ep-hover-row" style={sx('display:flex;gap:18px;width:100%;padding:18px 0;border-bottom:1px solid #F1ECE4;text-align:left')}>
                <img src={v.src} alt="" style={sx('width:96px;height:76px;flex:none;object-fit:cover;border-radius:12px;display:block')} />
                <div style={sx('flex:1;min-width:0')}>
                  <div style={sx('font-size:10.5px;font-weight:800;letter-spacing:0.11em;text-transform:uppercase;color:#5D6D78;white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}>{v.cat}</div>
                  <div style={sx('margin-top:5px;font-size:17px;font-weight:800;letter-spacing:-0.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}>{v.name}</div>
                  <div style={sx('margin-top:3px;font-size:13px;color:#5D6D78;white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}>{v.meta}</div>
                </div>
                <div style={sx('flex:none;text-align:right')}>
                  <div style={sx('font-size:15px;font-weight:800')}>{v.price}</div>
                  <div style={sx('font-size:12px;color:#5D6D78;margin-top:3px')}>{v.rating}</div>
                </div>
              </button>
            ))}
            <button onClick={() => navigate('/search')} className="ep-btn-outline" style={sx('margin-top:22px;padding:12px 22px;font-size:14px')}>See all 1,248 vendors</button>
          </div>

          {/* Mobile: an Airbnb-style horizontal swipe carousel instead of a
              cramped vertical list. Bleeds past the section's own side
              padding (negative margin) so the next card peeks in at the
              screen edge, signalling there's more to swipe to. */}
          <div className="ep-mobile-only">
            <div className="ep-carousel">
              {featured.map((v) => (
                <button key={v.name} onClick={() => navigate('/vendor')} className="ep-link-plain ep-carousel-card">
                  <img src={v.src} alt="" style={sx('width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:16px;display:block')} />
                  <div style={sx('margin-top:12px;font-size:10.5px;font-weight:800;letter-spacing:0.11em;text-transform:uppercase;color:#5D6D78')}>{v.cat}</div>
                  <div style={sx('margin-top:5px;font-size:19px;font-weight:800;letter-spacing:-0.02em')}>{v.name}</div>
                  <div style={sx('margin-top:4px;font-size:14px;line-height:1.5;color:#5D6D78')}>{v.meta}</div>
                  <div style={sx('margin-top:10px;font-size:18px;font-weight:800')}>{v.price}</div>
                  <div style={sx('margin-top:2px;font-size:13px;color:#5D6D78')}>{v.rating}</div>
                </button>
              ))}
            </div>
            <button onClick={() => navigate('/search')} className="ep-btn-outline" style={sx('margin-top:20px;padding:12px 22px;font-size:14px')}>See all 1,248 vendors</button>
          </div>
        </div>
      </section>

      <section className="ep-desktop-only ep-split" style={sx('display:grid;grid-template-columns:minmax(0,0.9fr) minmax(0,1.1fr);gap:64px;padding:96px 56px 100px;background:#0F5C52;color:#FFFFFF')}>
        <div>
          <div style={sx('font-size:11px;font-weight:800;letter-spacing:0.13em;text-transform:uppercase;color:#B4DFCB')}>For vendors</div>
          <h2 style={sx("margin:20px 0 0;font-family:'Manrope',sans-serif;font-size:46px;line-height:1.0;letter-spacing:-0.04em;font-weight:800")}>Get booked.<br />Not ghosted.</h2>
          <p style={sx('margin:20px 0 0;max-width:390px;font-size:16px;line-height:1.6;color:#CFE3E2')}>Publish packages with real prices, sync your calendar, and take deposits through the platform. You keep 92%. We handle the paperwork.</p>
          <button className="ep-link-plain" style={sx('margin-top:30px;background:#FFD166;color:#16212B;border-radius:999px;padding:14px 26px;font-size:15px;font-weight:700')}>Apply to list</button>
        </div>
        <div style={sx('align-self:end')}>
          {vendorStats.map((s) => (
            <div key={s.label} style={sx('display:flex;align-items:baseline;gap:28px;padding:22px 0;border-top:1px solid rgba(255,255,255,0.22)')}>
              <span style={sx("font-family:'Manrope',sans-serif;font-size:52px;line-height:1;letter-spacing:-0.04em;font-weight:800;min-width:190px")}>{s.value}</span>
              <span style={sx('font-size:15px;line-height:1.5;color:#CFE3E2')}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="ep-desktop-only" style={sx('padding:96px 0 100px;overflow:hidden')}>
        <div style={sx('padding:0 56px;max-width:720px')}>
          <div style={sx('font-size:11px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:#5D6D78')}>What people say</div>
          <h2 style={sx("margin:18px 0 0;font-family:'Manrope',sans-serif;font-size:44px;line-height:1.06;letter-spacing:-0.035em;font-weight:800;text-wrap:pretty")}>Booked, delivered, danced to.</h2>
        </div>
        <div style={sx('margin-top:52px;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 5%,#000 95%,transparent 100%)')}>
          <div className="ep-marquee-track" style={sx('display:flex;gap:20px;width:max-content;padding:0 56px;animation:epMarq 64s linear infinite')}>
            {loopReviews.map((r, i) => (
              <figure key={i} style={sx('margin:0;width:392px;flex:none;padding:28px;background:#FFFFFF;border:1px solid #EBE6DE;border-radius:16px;display:flex;flex-direction:column;justify-content:space-between;min-height:238px')}>
                <blockquote style={sx('margin:0;font-size:17px;line-height:1.55;color:#16212B;text-wrap:pretty')}>{r.text}</blockquote>
                <figcaption style={sx('display:flex;align-items:center;gap:12px;margin-top:26px')}>
                  <img src={r.av} alt="" width={40} height={40} style={sx('width:40px;height:40px;flex:none;border-radius:50%;object-fit:cover;display:block')} />
                  <div>
                    <div style={sx('font-size:14px;font-weight:700;color:#16212B')}>{r.by}</div>
                    <div style={sx('font-size:12.5px;color:#5D6D78')}>{r.meta}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer className="ep-desktop-only" style={sx('padding:72px 56px 36px;background:#111E26;color:#93A3AE')}>
        <div className="ep-4col" style={sx('display:grid;grid-template-columns:minmax(0,1.3fr) repeat(3,minmax(0,0.8fr)) minmax(0,1.1fr);gap:44px')}>
          <div>
            <Logo height={23} white />
            <p style={sx('margin:14px 0 0;max-width:230px;font-size:14px;line-height:1.6')}>Plan smarter. Book faster. Celebrate better. Serving Ontario since 2024.</p>
          </div>
          {footerCols.map((col) => (
            <div key={col.title}>
              <div style={sx('font-size:10.5px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#FFFFFF')}>{col.title}</div>
              <div style={sx('display:flex;flex-direction:column;align-items:flex-start;gap:11px;margin-top:16px')}>
                {col.links.map((l) => (
                  <a key={l} href="#" className="ep-nav-link" style={sx('font-size:14px;color:#93A3AE;text-decoration:none')}>{l}</a>
                ))}
              </div>
            </div>
          ))}
          <div>
            <div style={sx('font-size:10.5px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#FFFFFF')}>Stay in the loop</div>
            <p style={sx('margin:16px 0 0;font-size:14px;line-height:1.6')}>Seasonal pricing guides and new vendors near you.</p>
            <div style={sx('display:flex;gap:8px;margin-top:16px')}>
              <input placeholder="you@email.com" style={sx('flex:1;min-width:0;background:none;border:1px solid #33434F;border-radius:999px;padding:11px 16px;color:#FFFFFF;font-size:14px;outline:none')} />
              <button className="ep-btn-primary" style={sx('flex:none;padding:11px 20px;font-size:14px')}>Join</button>
            </div>
          </div>
        </div>
        <div style={sx('display:flex;align-items:center;gap:24px;margin-top:56px;padding-top:22px;border-top:1px solid #22303A;font-size:12.5px')}>
          <span>© 2026 eventplug Inc.</span><span>Terms</span><span>Privacy</span><span>Vendor agreement</span>
          <span style={sx('flex:1')} /><span>Toronto · Ottawa · Hamilton · London</span>
        </div>
      </footer>
    </div>
  );
}

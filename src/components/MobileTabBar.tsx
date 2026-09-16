import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from './Icon';

const TABS = [
  { to: '/', icon: 'search' as const },
  { to: '/events', icon: 'calendar' as const },
  { to: '/inbox', icon: 'chat' as const, badge: true },
  { to: '/settings', icon: 'user' as const },
];

export function MobileTabBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="ep-mobile-only ep-tabbar">
      {TABS.map((t) => {
        const active = pathname === t.to;
        return (
          <a
            key={t.to}
            href={t.to}
            onClick={(e) => {
              e.preventDefault();
              navigate(t.to);
            }}
            style={{ color: active ? '#16212B' : '#8C9AA3' }}
          >
            <span style={{ position: 'relative', display: 'block' }}>
              <Icon name={t.icon} size={22} strokeWidth={active ? 1.9 : 1.6} />
              {t.badge && (
                <span style={{ position: 'absolute', top: -1, right: -3, width: 7, height: 7, borderRadius: '50%', background: '#FF6B6B' }} />
              )}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

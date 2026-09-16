import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Vendor from './pages/Vendor';
import Booking from './pages/Booking';
import Checkout from './pages/Checkout';
import Confirmed from './pages/Confirmed';
import Auth from './pages/Auth';
import Events from './pages/Events';
import Inbox from './pages/Inbox';
import Settings from './pages/Settings';
import { MobileTabBar } from './components/MobileTabBar';
import { TabBarProvider, useTabBarContext } from './components/TabBarContext';

// Root-level tab destinations. Drill-in pages (search results, vendor detail,
// booking/checkout/confirmed, auth) intentionally have no tab bar, matching
// the source design's mobile screens.
const ROUTES_WITH_TABBAR = new Set(['/', '/events', '/inbox', '/settings']);

function AppShell() {
  const { pathname } = useLocation();
  const { hidden } = useTabBarContext();
  const showTabBar = ROUTES_WITH_TABBAR.has(pathname) && !hidden;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmed" element={<Confirmed />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/events" element={<Events />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      {/* Rendered outside every page's animated `.ep-page` wrapper on purpose:
          a `transform` on an ancestor (even a finished one) creates a new
          containing block, which breaks `position: fixed` on this bar and
          makes it scroll away with the page instead of staying pinned. */}
      {showTabBar && <MobileTabBar />}
    </>
  );
}

export default function App() {
  return (
    <TabBarProvider>
      <AppShell />
    </TabBarProvider>
  );
}

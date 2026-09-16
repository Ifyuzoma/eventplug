import { Route, Routes } from 'react-router-dom';
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

export default function App() {
  return (
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
  );
}

import { useNavigate } from 'react-router-dom';
import wordmark from '../assets/eventplug-wordmark.png';
import wordmarkWhite from '../assets/eventplug-wordmark-white.png';

export function Logo({ height = 20, white = false, to = '/' }: { height?: number; white?: boolean; to?: string }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      className="ep-link-plain"
      style={{ flex: 'none', lineHeight: 0 }}
    >
      <img src={white ? wordmarkWhite : wordmark} alt="eventplug" style={{ height, width: 'auto', display: 'block' }} />
    </button>
  );
}

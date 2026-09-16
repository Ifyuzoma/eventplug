import { Icon } from './Icon';

export function StarRow({ filled, size = 15 }: { filled: number; size?: number }) {
  return (
    <span style={{ display: 'flex', gap: '3px' }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} style={{ color: i < filled ? '#FF6B6B' : '#CFC6B9', display: 'block' }}>
          <Icon name="star" size={size} strokeWidth={1.5} fill={i < filled ? 'currentColor' : 'none'} />
        </span>
      ))}
    </span>
  );
}

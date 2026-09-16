export function Checkbox({ checked = true }: { checked?: boolean }) {
  return (
    <span
      style={{
        width: 16,
        height: 16,
        flex: 'none',
        border: '1.5px solid #16212B',
        borderRadius: 5,
        background: checked ? '#16212B' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
      }}
    >
      {checked && (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
          <path d="M7.75 12L10.58 14.83L16.25 9.17" />
        </svg>
      )}
    </span>
  );
}

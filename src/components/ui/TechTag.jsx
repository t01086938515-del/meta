export default function TechTag({ label }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '4px 12px',
        borderRadius: 20,
        fontSize: 12,
        fontWeight: 500,
        background: 'var(--tag-bg)',
        color: 'var(--tag-text)',
        transition: 'background 0.3s ease, color 0.3s ease',
      }}
    >
      {label}
    </span>
  );
}

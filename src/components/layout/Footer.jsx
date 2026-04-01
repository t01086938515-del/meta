import { GitBranch, Mail } from 'lucide-react';
import { profile } from '../../data/profile';

export default function Footer() {
  return (
    <footer
      style={{
        padding: '40px 50px',
        textAlign: 'center',
        borderTop: '1px solid var(--divider)',
        transition: 'border-color 0.3s ease',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 20,
          marginBottom: 16,
        }}
      >
        <a
          href={profile.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
        >
          <GitBranch size={20} />
        </a>
        <a
          href={`mailto:${profile.contact.email}`}
          style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
        >
          <Mail size={20} />
        </a>
      </div>
      <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
        &copy; {new Date().getFullYear()} {profile.name}. Built with React + Vite.
      </p>
    </footer>
  );
}

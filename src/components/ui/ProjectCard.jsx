import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, FileText, User, Users } from 'lucide-react';
import TechTag from './TechTag';

export default function ProjectCard({ project }) {
  const { title, titleEn, description, tech, role, roleKo, highlights, color, github, live, docs, docsLabel } = project;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -12 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        borderRadius: 24,
        background: 'var(--bg-card)',
        boxShadow: 'var(--shadow-neu)',
        border: '1px solid var(--card-border)',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'background 0.3s ease, border 0.3s ease',
      }}
    >
      {/* Thumbnail placeholder */}
      <div
        style={{
          height: 180,
          background: `linear-gradient(135deg, ${color}22, ${color}44)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <span style={{ fontSize: 48, fontWeight: 700, color: color, opacity: 0.3 }}>
          {titleEn}
        </span>
        {/* Role badge */}
        <div
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '6px 12px',
            borderRadius: 20,
            background: 'var(--bg-card)',
            boxShadow: 'var(--shadow-neu-sm)',
            fontSize: 12,
            fontWeight: 600,
            color: color,
          }}
        >
          {role === 'Solo' ? <User size={14} /> : <Users size={14} />}
          {roleKo}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: 28 }}>
        <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{title}</h3>
        <p style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 500, marginBottom: 12 }}>
          {titleEn}
        </p>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16 }}>
          {description}
        </p>

        {/* Highlights */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
          {highlights.map((h) => (
            <span
              key={h}
              style={{
                fontSize: 12,
                color: 'var(--text-secondary)',
                padding: '3px 10px',
                borderRadius: 8,
                background: 'var(--bg-secondary)',
                transition: 'background 0.3s ease',
              }}
            >
              {h}
            </span>
          ))}
        </div>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
          {tech.map((t) => (
            <TechTag key={t} label={t} />
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: 12 }}>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '8px 16px',
                borderRadius: 12,
                background: 'var(--accent)',
                color: '#ffffff',
                fontSize: 13,
                fontWeight: 600,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <ExternalLink size={14} />
              Live
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '8px 16px',
                borderRadius: 12,
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                fontSize: 13,
                fontWeight: 600,
                boxShadow: 'var(--shadow-neu-sm)',
                transition: 'background 0.3s ease',
              }}
            >
              <GitBranch size={14} />
              GitHub
            </a>
          )}
          {docs && (
            <a
              href={docs}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '8px 16px',
                borderRadius: 12,
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                fontSize: 13,
                fontWeight: 600,
                boxShadow: 'var(--shadow-neu-sm)',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <FileText size={14} />
              {docsLabel || 'Docs'}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

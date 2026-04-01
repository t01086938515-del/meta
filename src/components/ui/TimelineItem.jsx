import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const typeColors = {
  education: '#6366f1',
  project: '#0ea5e9',
  career: '#10b981',
};

export default function TimelineItem({ item, index }) {
  const { icon, title, titleEn, description, date, type } = item;
  const IconComponent = Icons[icon] || Icons.Circle;
  const isLeft = index % 2 === 0;
  const color = typeColors[type] || 'var(--accent)';

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      style={{
        display: 'flex',
        flexDirection: isLeft ? 'row' : 'row-reverse',
        alignItems: 'flex-start',
        gap: 0,
        marginBottom: 48,
        position: 'relative',
      }}
      className="timeline-item"
    >
      {/* Content */}
      <div
        style={{
          flex: 1,
          textAlign: isLeft ? 'right' : 'left',
          paddingRight: isLeft ? 40 : 0,
          paddingLeft: isLeft ? 0 : 40,
        }}
      >
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: color,
            display: 'block',
            marginBottom: 6,
          }}
        >
          {date}
        </span>
        <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{title}</h3>
        {titleEn && (
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>
            {titleEn}
          </p>
        )}
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {description}
        </p>
      </div>

      {/* Dot */}
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: 'var(--bg-card)',
          border: `3px solid ${color}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          zIndex: 2,
          boxShadow: 'var(--shadow-neu-sm)',
          transition: 'background 0.3s ease',
        }}
      >
        <IconComponent size={20} color={color} />
      </div>

      {/* Empty space for the other side */}
      <div style={{ flex: 1 }} />
    </motion.div>
  );
}

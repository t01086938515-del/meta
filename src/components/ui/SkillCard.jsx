import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export default function SkillCard({ icon, title, titleKo, description }) {
  const IconComponent = Icons[icon] || Icons.Code;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 },
      }}
      whileHover={{ y: -8 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        padding: 24,
        borderRadius: 20,
        background: 'var(--bg-card)',
        boxShadow: 'var(--shadow-neu)',
        border: '1px solid var(--card-border)',
        cursor: 'default',
        transition: 'background 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'var(--accent)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <IconComponent size={24} color="#ffffff" />
      </div>
      <div>
        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 2 }}>
          {title}
        </h3>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 4 }}>
          {titleKo}
        </p>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}

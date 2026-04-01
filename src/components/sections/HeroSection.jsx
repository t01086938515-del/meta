import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { profile } from '../../data/profile';
import { skills } from '../../data/skills';
import SkillCard from '../ui/SkillCard';

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 0 60px',
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 50px',
          display: 'flex',
          alignItems: 'center',
          gap: 60,
          width: '100%',
        }}
      >
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ flex: 1 }}
          className="hero-left"
        >
          <p
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: 'var(--accent)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Portfolio
          </p>
          <h1
            style={{
              fontSize: 'clamp(40px, 6vw, 64px)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            {profile.name}
          </h1>
          <p
            style={{
              fontSize: 'clamp(14px, 2vw, 18px)',
              color: 'var(--text-secondary)',
              marginBottom: 8,
            }}
          >
            {profile.role}
          </p>
          <p
            style={{
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: 12,
              lineHeight: 1.3,
            }}
          >
            {profile.tagline}
          </p>
          <p
            style={{
              fontSize: 14,
              color: 'var(--text-muted)',
              fontStyle: 'italic',
            }}
          >
            {profile.taglineSub}
          </p>
        </motion.div>

        {/* Right side - Skill Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
          }}
          style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}
          className="hero-right"
        >
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        onClick={() =>
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 48,
          height: 48,
          borderRadius: '50%',
          border: '2px solid var(--accent)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: 'var(--accent)',
        }}
      >
        <ChevronDown size={24} />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          #hero .container {
            flex-direction: column !important;
            padding: 0 20px !important;
            gap: 40px !important;
          }
          .hero-left { text-align: center; }
        }
      `}</style>
    </section>
  );
}

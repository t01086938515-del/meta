import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { profile } from '../../data/profile';

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: '100px 0' }}>
      <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 50px' }}>
        <SectionTitle title="ABOUT" subtitle="소개" />

        <div
          style={{
            display: 'flex',
            gap: 60,
            alignItems: 'flex-start',
          }}
          className="about-content"
        >
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ flex: 1.2 }}
          >
            <div
              style={{
                padding: 32,
                borderRadius: 24,
                background: 'var(--bg-card)',
                boxShadow: 'var(--shadow-neu)',
                border: '1px solid var(--card-border)',
                transition: 'all 0.3s ease',
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.9,
                  color: 'var(--text-primary)',
                  whiteSpace: 'pre-line',
                }}
              >
                {profile.bio}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: 'var(--text-muted)',
                  marginTop: 20,
                  fontStyle: 'italic',
                  lineHeight: 1.7,
                  whiteSpace: 'pre-line',
                }}
              >
                {profile.bioEn}
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              flex: 0.8,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 20,
            }}
            className="about-highlights"
          >
            {profile.highlights.map((item) => (
              <div
                key={item.label}
                style={{
                  padding: 24,
                  borderRadius: 20,
                  background: 'var(--bg-card)',
                  boxShadow: 'var(--shadow-neu)',
                  border: '1px solid var(--card-border)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                <p
                  style={{
                    fontSize: 32,
                    fontWeight: 700,
                    color: 'var(--accent)',
                    marginBottom: 4,
                  }}
                >
                  {item.number}
                </p>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                  {item.label}
                </p>
                <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>{item.labelEn}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-content {
            flex-direction: column !important;
            gap: 30px !important;
          }
          #about .container { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Mail, Phone, GitBranch, ArrowUpRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { profile } from '../../data/profile';

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.contact.phone,
    href: `tel:${profile.contact.phone.replace(/-/g, '')}`,
  },
  {
    icon: GitBranch,
    label: 'GitHub',
    value: 'github.com/t01086938515-del',
    href: profile.contact.github,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: '100px 0 60px' }}>
      <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 50px' }}>
        <SectionTitle title="CONTACT" subtitle="연락처" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          {contacts.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === 'GitHub' ? '_blank' : undefined}
                rel={item.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -8 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '24px 32px',
                  borderRadius: 20,
                  background: 'var(--bg-card)',
                  boxShadow: 'var(--shadow-neu)',
                  border: '1px solid var(--card-border)',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  transition: 'all 0.3s ease',
                  minWidth: 280,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} color="#ffffff" />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 2 }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: 15, fontWeight: 600 }}>{item.value}</p>
                </div>
                <ArrowUpRight size={18} color="var(--text-muted)" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  );
}

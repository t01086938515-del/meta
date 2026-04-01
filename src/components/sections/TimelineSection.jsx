import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import TimelineItem from '../ui/TimelineItem';
import { timeline } from '../../data/timeline';

export default function TimelineSection() {
  return (
    <section id="timeline" style={{ padding: '100px 0' }}>
      <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 50px' }}>
        <SectionTitle title="TIMELINE" subtitle="경력 & 프로젝트" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          style={{
            maxWidth: 800,
            margin: '0 auto',
            position: 'relative',
          }}
          className="timeline-container"
        >
          {/* Vertical line */}
          <div
            className="timeline-line"
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 3,
              height: '100%',
              background: `linear-gradient(to bottom, var(--timeline-line), transparent)`,
              borderRadius: 4,
              zIndex: 1,
            }}
          />

          {timeline.map((item, index) => (
            <TimelineItem key={item.title} item={item} index={index} />
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line {
            left: 24px !important;
            transform: none !important;
          }
          .timeline-item {
            flex-direction: row-reverse !important;
          }
          .timeline-item > div:first-child {
            text-align: left !important;
            padding-left: 24px !important;
            padding-right: 0 !important;
          }
          .timeline-item > div:last-child {
            display: none !important;
          }
          #timeline .container { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolio';

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-primary font-mono text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.9, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm mb-3">02. Skills</p>
          <h2 className="section-title">
            기술 <span className="gradient-text">스택</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
              className="card space-y-5"
            >
              <h3 className="text-lg font-bold text-gray-100 border-b border-white/5 pb-3">
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.items.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={gi * 0.1 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

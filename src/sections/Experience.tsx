import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/portfolio';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm mb-3">04. Experience</p>
          <h2 className="section-title">
            경력 <span className="gradient-text">사항</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12" />
        </motion.div>

        <div className="relative">
          {/* 타임라인 선 */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative pl-16"
              >
                {/* 타임라인 아이콘 */}
                <div className="absolute left-0 top-0 w-10 h-10 rounded-xl bg-dark-700 border border-primary/30 flex items-center justify-center">
                  <Briefcase size={16} className="text-primary" />
                </div>

                <div className="card">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-100">{exp.role}</h3>
                      <p className="text-primary font-medium text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <span className="font-mono text-xs text-gray-500 bg-dark-600 px-3 py-1.5 rounded-lg">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((desc, di) => (
                      <li key={di} className="flex items-start gap-2.5 text-sm text-gray-400">
                        <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

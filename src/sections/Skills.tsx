import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact,
  SiSass, SiTailwindcss, SiGreensock, SiFramer,
  SiFigma, SiGit, SiGulp, SiVite,
} from 'react-icons/si';
import { Palette, PenTool, Puzzle } from 'lucide-react';
import { skills, aiCapabilities } from '../data/portfolio';

type IconEntry = {
  icon: React.ElementType;
  color: string;
};

const iconMap: Record<string, IconEntry> = {
  'HTML5':         { icon: SiHtml5,       color: '#E34F26' },
  'CSS3':          { icon: SiCss,         color: '#1572B6' },
  'JavaScript':    { icon: SiJavascript,  color: '#F7DF1E' },
  'TypeScript':    { icon: SiTypescript,  color: '#3178C6' },
  'React':         { icon: SiReact,       color: '#61DAFB' },
  'React Native':  { icon: SiReact,       color: '#61DAFB' },
  'SCSS':          { icon: SiSass,        color: '#CC6699' },
  'Tailwind CSS':  { icon: SiTailwindcss, color: '#06B6D4' },
  'GSAP':          { icon: SiGreensock,   color: '#88CE02' },
  'Framer Motion': { icon: SiFramer,      color: '#0055FF' },
  'Photoshop':     { icon: Palette,       color: '#31A8FF' },
  'Adobe XD':      { icon: PenTool,       color: '#FF61F6' },
  'Figma':         { icon: SiFigma,       color: '#F24E1E' },
  'Git':           { icon: SiGit,         color: '#F05032' },
  'Gulp':          { icon: SiGulp,        color: '#CF4647' },
  'Vite':          { icon: SiVite,        color: '#646CFF' },
};

function SkillChip({ name, delay }: { name: string; delay: number }) {
  const entry = iconMap[name];
  if (!entry) return null;
  const Icon = entry.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-dark-700 border border-white/5
                 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] transition-all duration-300 cursor-default"
    >
      <Icon size={28} style={{ color: entry.color }} />
      <span className="text-xs text-gray-400 font-medium text-center leading-tight">{name}</span>
    </motion.div>
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

        {/* 기술 아이콘 칩 */}
        <div className="space-y-10 mb-16">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
            >
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((name, si) => (
                  <SkillChip key={name} name={name} delay={gi * 0.1 + si * 0.05} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI & Automation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
            AI & Automation
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {aiCapabilities.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.45 + i * 0.1 }}
                className="card group"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Puzzle size={16} className="text-primary" />
                </div>
                <h4 className="text-sm font-bold text-gray-100 mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag text-[10px] px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

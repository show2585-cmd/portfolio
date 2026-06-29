import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Smartphone, Building2 } from 'lucide-react';
import { projects } from '../data/portfolio';

function typeIcon(type: string) {
  if (type.toLowerCase().includes('app')) return <Smartphone size={13} />;
  return <Monitor size={13} />;
}

function ProjectCard({
  project,
  delay,
  small = false,
}: {
  project: (typeof projects)[0];
  delay: number;
  small?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="card group flex flex-col h-full"
    >
      {/* 타입 뱃지 */}
      <div className="flex items-center gap-1.5 mb-3">
        <span className="flex items-center gap-1 text-[10px] font-medium text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
          {typeIcon(project.type)}
          {project.type}
        </span>
      </div>

      <h3 className={`font-bold text-gray-100 mb-1.5 group-hover:text-primary transition-colors leading-snug ${small ? 'text-sm' : 'text-base'}`}>
        {project.title}
      </h3>

      <p className="text-gray-500 text-xs mb-3 leading-relaxed flex-1">
        {project.description}
      </p>

      {/* 클라이언트 */}
      <div className="flex items-center gap-1.5 mb-3">
        <Building2 size={11} className="text-gray-600" />
        <span className="text-[11px] text-gray-500">{project.client}</span>
      </div>

      {/* 태그 */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-dark-600 text-gray-500 border border-white/5">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const visibleOthers = showAll ? others : others.slice(0, 4);

  return (
    <section id="projects" className="section-padding bg-dark-800/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm mb-3">03. Projects</p>
          <h2 className="section-title">
            주요 <span className="gradient-text">프로젝트</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12" />
        </motion.div>

        {/* Featured */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.1} />
          ))}
        </div>

        {/* Others */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {visibleOthers.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={0.3 + i * 0.07} small />
          ))}
        </div>

        {others.length > 4 && (
          <div className="text-center">
            <button onClick={() => setShowAll(!showAll)} className="btn-outline text-sm">
              {showAll ? '접기' : `더 보기 (${others.length - 4}개)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone, Tv2, LayoutGrid } from 'lucide-react';
import { projects } from '../data/portfolio';

type Category = 'all' | 'web' | 'app' | 'kiosk';

const tabs: { key: Category; label: string; icon: React.ElementType }[] = [
  { key: 'all',    label: '전체',    icon: LayoutGrid },
  { key: 'web',    label: 'Web',    icon: Monitor },
  { key: 'app',    label: 'App',    icon: Smartphone },
  { key: 'kiosk',  label: 'Kiosk',  icon: Tv2 },
];

const categoryStyle: Record<Category, { gradient: string; iconColor: string }> = {
  all:   { gradient: 'from-primary/20 to-secondary/10', iconColor: 'text-primary' },
  web:   { gradient: 'from-indigo-500/20 to-violet-500/10', iconColor: 'text-indigo-400' },
  app:   { gradient: 'from-cyan-500/20 to-teal-500/10', iconColor: 'text-cyan-400' },
  kiosk: { gradient: 'from-emerald-500/20 to-green-500/10', iconColor: 'text-emerald-400' },
};

const categoryIcon: Record<Category, React.ElementType> = {
  all: LayoutGrid, web: Monitor, app: Smartphone, kiosk: Tv2,
};

function ProjectCard({ project, delay }: { project: (typeof projects)[0]; delay: number }) {
  const [hovered, setHovered] = useState(false);
  const cat = project.category as Category;
  const style = categoryStyle[cat];
  const Icon = categoryIcon[cat];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay }}
      className="group relative rounded-2xl overflow-hidden border border-white/5 bg-dark-700 cursor-default
                 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.12)] transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 이미지 영역 */}
      <div className="relative h-44 overflow-hidden bg-dark-600">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${style.gradient} flex items-center justify-center`}>
            <Icon size={52} className={`${style.iconColor} opacity-30`} />
          </div>
        )}
        {/* 호버 시 설명 오버레이 */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center px-5 bg-dark-900/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <p className="text-gray-200 text-sm text-center leading-relaxed">{project.description}</p>
        </motion.div>
        {/* 카테고리 뱃지 */}
        <div className="absolute top-3 right-3">
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full bg-dark-900/60 backdrop-blur-sm border border-white/10 ${style.iconColor}`}>
            {cat.toUpperCase()}
          </span>
        </div>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="p-4">
        <h3 className="text-sm font-bold text-gray-100 mb-1 leading-snug group-hover:text-primary transition-colors line-clamp-2">
          {project.title}
        </h3>
        <p className="text-[11px] text-gray-500 mb-3">{project.client}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-dark-600 text-gray-500 border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState<Category>('all');

  const filtered = activeTab === 'all'
    ? projects
    : projects.filter((p) => p.category === activeTab);

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
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-10" />
        </motion.div>

        {/* 탭 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-2 mb-8 flex-wrap"
        >
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === key
                  ? 'bg-primary text-white shadow-[0_0_16px_rgba(99,102,241,0.4)]'
                  : 'bg-dark-700 text-gray-400 border border-white/5 hover:border-primary/30 hover:text-gray-200'
              }`}
            >
              <Icon size={14} />
              {label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeTab === key ? 'bg-white/20 text-white' : 'bg-dark-600 text-gray-500'
              }`}>
                {key === 'all' ? projects.length : projects.filter(p => p.category === key).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* 카드 그리드 */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 0.05} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitBranch, ExternalLink, Folder } from 'lucide-react';
import { projects } from '../data/portfolio';

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const visibleOthers = showAll ? others : others.slice(0, 2);

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
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card group relative overflow-hidden"
            >
              {/* 호버 글로우 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Folder size={18} className="text-primary" />
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary transition-colors"
                    >
                      <GitBranch size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <>
            <h3 className="text-gray-500 text-sm font-medium mb-6 text-center">다른 프로젝트</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {visibleOthers.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="card group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Folder size={16} className="text-primary mt-0.5" />
                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                          <GitBranch size={15} />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-gray-200 mb-1.5 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {others.length > 2 && (
              <div className="text-center">
                <button onClick={() => setShowAll(!showAll)} className="btn-outline text-sm">
                  {showAll ? '접기' : `더 보기 (${others.length - 2}개)`}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

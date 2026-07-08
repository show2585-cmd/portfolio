import { motion, type Variants } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center section-padding overflow-hidden"
    >
      {/* 배경 그라디언트 블러 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-[100px] pointer-events-none" />

      {/* 그리드 패턴 */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full">
        <motion.div variants={container} initial="hidden" animate="show">
          {personalInfo.available && (
            <motion.div variants={item} className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-green-400 font-medium">구직 중 · Open to work</span>
            </motion.div>
          )}

          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-400 mb-6"
          >
            {personalInfo.role}
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed mb-10"
          >
            {personalInfo.description}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              프로젝트 보기
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={22} />
        </motion.div>
      </motion.a>
    </section>
  );
}

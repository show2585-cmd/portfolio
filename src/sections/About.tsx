import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, Coffee } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const facts = [
  { icon: MapPin, label: '위치', value: personalInfo.location },
  { icon: Calendar, label: '경력', value: '약 6년 · 웹디자인 · 퍼블리싱 · 프론트엔드' },
  { icon: Coffee, label: '현재 직책', value: '대리' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-dark-800/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm mb-3">01. About</p>
          <h2 className="section-title">
            저에 대해 <span className="gradient-text">소개합니다</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5 text-gray-400 leading-relaxed"
          >
            <p>
              안녕하세요! 디자인 감각을 갖춘 프론트엔드 개발자
              <span className="text-gray-100 font-semibold"> {personalInfo.name}</span>입니다.
            </p>
            <p>
              웹디자인과 퍼블리싱으로 커리어를 시작해, 현재는
              <span className="text-primary font-medium"> React · TypeScript · React Native</span>를
              중심으로 웹과 앱 서비스를 개발하고 있습니다.
            </p>
            <p>
              삼성 공식 페이지(언팩 · 기획전)를 비롯한 대형 프로젝트부터 공공기관 사이트까지
              다양한 도메인의 서비스를 경험했습니다.
            </p>
            <p>
              디자인을 이해하는 개발자로서, 기획 의도를 정확히 구현하고
              사용자가 불편함을 느끼지 않는 인터페이스를 만드는 것을 중요하게 생각합니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4"
          >
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="card flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                  <p className="text-gray-200 font-medium text-sm">{value}</p>
                </div>
              </div>
            ))}

            <div className="card">
              <p className="text-xs text-gray-500 mb-3">주요 기술 스택</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'React Native', 'JavaScript', 'HTML/CSS', 'SCSS'].map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

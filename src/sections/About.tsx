import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, Coffee } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const facts = [
  { icon: MapPin, label: '위치', value: personalInfo.location },
  { icon: Calendar, label: '경력', value: '3년차 개발자' },
  { icon: Coffee, label: '연료', value: '아메리카노 하루 3잔' },
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
              안녕하세요! 사용자 중심의 인터페이스를 만드는 것에 열정을 가진
              프론트엔드 개발자 <span className="text-gray-100 font-semibold">{personalInfo.name}</span>입니다.
            </p>
            <p>
              React와 TypeScript를 주력으로 사용하며, 단순히 동작하는 코드가 아닌
              <span className="text-primary font-medium"> 유지보수하기 좋고 확장 가능한 코드</span>를
              작성하기 위해 항상 고민합니다.
            </p>
            <p>
              새로운 기술을 배우는 것을 즐기며, 팀과의 협업을 통해 더 나은
              제품을 만들어가는 과정을 좋아합니다. 코드 리뷰와 문서화의 중요성을 잘 알고 있습니다.
            </p>
            <p>
              개발 외에는 기술 블로그를 운영하고, 오픈소스 프로젝트에 기여하는 것을 즐깁니다.
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
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Git'].map((tech) => (
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

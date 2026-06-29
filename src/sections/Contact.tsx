import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=포트폴리오 문의 - ${form.name}&body=${encodeURIComponent(form.message)}%0A%0A발신: ${form.name} (${form.email})`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-dark-800/30">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm mb-3">05. Contact</p>
          <h2 className="section-title">
            함께 <span className="gradient-text">일해요</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-4" />
          <p className="text-gray-400 mb-12 max-w-xl">
            새로운 기회나 협업 제안은 언제나 환영합니다. 편하게 연락해주세요.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="card">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Mail size={18} className="text-primary" />
              </div>
              <p className="text-xs text-gray-500 mb-1">이메일</p>
              <a href={`mailto:${personalInfo.email}`} className="text-gray-200 hover:text-primary transition-colors text-sm font-medium break-all">
                {personalInfo.email}
              </a>
            </div>

          </motion.div>

          {/* 폼 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-3"
          >
            {submitted ? (
              <div className="card text-center py-12">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-2">감사합니다!</h3>
                <p className="text-gray-400 text-sm">메일 앱에서 전송을 완료해주세요.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">이름</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-dark-700 border border-white/5 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">이메일</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-dark-700 border border-white/5 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1.5">메시지</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-dark-700 border border-white/5 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder="안녕하세요! 협업하고 싶어서 연락드립니다..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send size={15} />
                  메시지 보내기
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

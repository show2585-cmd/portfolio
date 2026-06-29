import { personalInfo } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 text-center">
      <p className="text-gray-600 text-sm">
        <span className="font-mono text-primary">&lt;{personalInfo.nameEn} /&gt;</span>
        {' '}· Built with React, Vite, Tailwind CSS, shadcn/ui
      </p>
      <p className="text-gray-700 text-xs mt-1">© {new Date().getFullYear()} {personalInfo.name}</p>
    </footer>
  );
}

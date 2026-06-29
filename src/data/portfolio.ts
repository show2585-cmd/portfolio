export const personalInfo = {
  name: '김원희',
  nameEn: 'Kim Wonhee',
  role: 'Frontend Developer',
  tagline: '디자인 감각을 갖춘 프론트엔드 개발자',
  description:
    '웹디자인부터 퍼블리싱, 프론트엔드 개발까지 약 6년간 다양한 프로젝트를 경험했습니다. 현재는 React · TypeScript를 중심으로 웹 · 앱 서비스를 개발하고 있습니다.',
  email: 'show2585@gmail.com',
  location: '서울, 대한민국',
  available: true,
};

export const skills = [
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'React Native'],
  },
  {
    category: 'Backend',
    items: ['PHP', 'MySQL'],
  },
  {
    category: 'Styling & Animation',
    items: ['SCSS', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
  },
  {
    category: 'Tools & Design',
    items: ['Photoshop', 'Adobe XD', 'Figma', 'Git', 'Gulp', 'Vite'],
  },
];

export const projects = [
  {
    id: 1,
    title: '쇼핑몰 리뉴얼',
    description:
      'React와 TypeScript로 구축한 이커머스 플랫폼. 상품 필터링, 장바구니, 결제 시스템 구현.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    image: null,
    featured: true,
  },
  {
    id: 2,
    title: '실시간 대시보드',
    description:
      'WebSocket을 활용한 실시간 데이터 시각화 대시보드. Chart.js와 D3.js로 인터랙티브 차트 구현.',
    tags: ['React', 'WebSocket', 'Chart.js', 'D3.js'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    image: null,
    featured: true,
  },
  {
    id: 3,
    title: '팀 협업 툴',
    description:
      'Kanban 보드 기반의 프로젝트 관리 툴. 드래그 앤 드롭, 실시간 공유 기능 구현.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com',
    demo: null,
    image: null,
    featured: false,
  },
  {
    id: 4,
    title: '날씨 앱',
    description:
      'OpenWeatherMap API 연동. 위치 기반 날씨 정보와 5일 예보를 제공하는 반응형 앱.',
    tags: ['React', 'TypeScript', 'API'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    image: null,
    featured: false,
  },
];

export const aiCapabilities = [
  {
    title: '이미지 자동 저장 플러그인',
    description: '퍼블리셔 작업 흐름에 맞춰 Figma 내 이미지를 규칙에 따라 자동으로 저장·추출하는 플러그인 개발. 반복 수작업을 제거해 작업 시간 단축.',
    tags: ['Figma Plugin', 'TypeScript', '업무 자동화'],
  },
  {
    title: '매뉴얼 화면 이미지 넘버링 반자동화',
    description: '매뉴얼 제작 시 필요한 화면 캡처 이미지에 순번을 자동으로 부여하는 Figma 플러그인 개발. 디자이너·퍼블리셔 간 협업 프로세스 개선.',
    tags: ['Figma Plugin', 'TypeScript', '디자인-개발 협업'],
  },
  {
    title: 'MCP 기반 AI 서비스 연동',
    description: 'MCP(Model Context Protocol) 시스템을 활용한 AI 서비스 연계 및 업무 자동화 워크플로우 구축.',
    tags: ['MCP', 'AI Integration', 'Workflow'],
  },
];

export const experiences = [
  {
    company: '㈜브라이트벨',
    role: '대리',
    period: '2023.11 — 2026.06 · 2년 8개월',
    description: [
      'React · React Native · TypeScript · PHP · MySQL · HTML · CSS · JavaScript · jQuery',
    ],
  },
  {
    company: '㈜비스톤스',
    role: '대리',
    period: '2022.08 — 2023.09 · 1년 2개월',
    description: [
      'HTML · SCSS · JavaScript · Gulp',
    ],
  },
  {
    company: '㈜디온컴즈',
    role: '사원',
    period: '2020.10 — 2022.05 · 1년 8개월',
    description: [
      'Photoshop · Adobe XD · HTML · CSS · JavaScript · jQuery',
    ],
  },
];

export const personalInfo = {
  name: '김원희',
  nameEn: 'Kim Wonhee',
  role: 'Frontend Developer',
  tagline: '사용자 경험을 코드로 만드는 개발자',
  description:
    '3년차 프론트엔드 개발자로, React와 TypeScript를 주력으로 사용합니다. 성능 최적화와 접근성을 고려한 UI를 만드는 것을 좋아합니다.',
  email: 'show2585@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  blog: 'https://blog.example.com',
  location: '서울, 대한민국',
  available: true,
};

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Vue.js', level: 70 },
    ],
  },
  {
    category: 'Styling',
    items: [
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Styled Components', level: 85 },
      { name: 'SCSS/SASS', level: 80 },
      { name: 'Framer Motion', level: 75 },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'Webpack/Vite', level: 75 },
      { name: 'Jest/Testing', level: 70 },
      { name: 'Figma', level: 65 },
    ],
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

export const experiences = [
  {
    company: '(주) 테크스타트업',
    role: '프론트엔드 개발자',
    period: '2023.03 — 현재',
    description: [
      'React/TypeScript 기반 SaaS 제품 개발 및 유지보수',
      '디자인 시스템 구축으로 개발 생산성 40% 향상',
      'Lighthouse 성능 점수 65→92 개선',
    ],
  },
  {
    company: '(주) 웹에이전시',
    role: '웹 개발자',
    period: '2021.07 — 2023.02',
    description: [
      '다수의 기업 웹사이트 퍼블리싱 및 프론트엔드 개발',
      'Vue.js 도입으로 반복 작업 자동화',
      'CMS 연동 및 SEO 최적화 작업',
    ],
  },
];

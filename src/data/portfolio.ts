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
    items: ['SCSS', 'Tailwind CSS', 'GSAP'],
  },
  {
    category: 'Tools & Design',
    items: ['Photoshop', 'Adobe XD', 'Figma', 'Git', 'Gulp', 'Vite'],
  },
];

export const projects = [
  {
    id: 1,
    title: '현대자동차그룹 로보틱스랩 엑서블숄더 A+A2025',
    description: '드로잉 키오스크 및 웹페이지 제작',
    client: '현대자동차그룹',
    type: 'Web / Kiosk',
    tags: ['React', 'TypeScript', 'Kiosk'],
    featured: true,
  },
  {
    id: 2,
    title: '삼성 언팩 / 기획전 페이지',
    description: '삼성 공식 홈페이지 제작 및 운영. 언팩 이벤트 및 기획전 페이지 담당.',
    client: '제일기획',
    type: 'Web',
    tags: ['HTML', 'SCSS', 'JavaScript', 'Gulp'],
    featured: true,
  },
  {
    id: 3,
    title: '발로란트 팝업스토어',
    description: '스크린 사격 체험 앱 및 팝업스토어 웹페이지 제작.',
    client: '발로란트',
    type: 'App / Web',
    tags: ['React', 'TypeScript'],
    featured: true,
  },
  {
    id: 4,
    title: '화담숲 어플리케이션',
    description: '어플리케이션 UI 개발.',
    client: 'HSAD',
    type: 'App',
    tags: ['React Native', 'TypeScript'],
    featured: true,
  },
  {
    id: 5,
    title: '사노피 키오스크',
    description: '바람개비의 회전수를 활용한 게임 키오스크 제작.',
    client: '사노피',
    type: 'App',
    tags: ['React', 'TypeScript', 'Kiosk'],
    featured: false,
  },
  {
    id: 6,
    title: '필라코리아 키오스크',
    description: '감정분석 키오스크 제작 및 뇌파의 집중력을 활용한 게임 제작.',
    client: '한국우편사업진흥원',
    type: 'App',
    tags: ['React', 'TypeScript', 'Kiosk'],
    featured: false,
  },
  {
    id: 7,
    title: '코리아그랜드세일 키오스크',
    description: '감정분석 키오스크 제작.',
    client: '코리아그랜드세일',
    type: 'App',
    tags: ['React Native', 'Kiosk'],
    featured: false,
  },
  {
    id: 8,
    title: 'DB김준기문화재단 홈페이지 리뉴얼',
    description: '홈페이지 제작.',
    client: 'DB김준기문화재단',
    type: 'Web',
    tags: ['HTML', 'CSS', 'JavaScript'],
    featured: false,
  },
  {
    id: 9,
    title: '알보젠 홈페이지 리뉴얼',
    description: '홈페이지 제작.',
    client: '알보젠',
    type: 'Web',
    tags: ['HTML', 'CSS', 'JavaScript'],
    featured: false,
  },
  {
    id: 10,
    title: '농업온 홈페이지',
    description: '홈페이지 제작 및 운영.',
    client: '농식품부',
    type: 'Web',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    featured: false,
  },
  {
    id: 11,
    title: '산기평 홈페이지',
    description: '홈페이지 제작 및 운영.',
    client: '산업기술평가관리원',
    type: 'Web',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    featured: false,
  },
  {
    id: 12,
    title: '농식품부 홈페이지 유지보수',
    description: '홈페이지 유지보수.',
    client: '농식품부',
    type: 'Web',
    tags: ['HTML', 'CSS', 'JavaScript'],
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

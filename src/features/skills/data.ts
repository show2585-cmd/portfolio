import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    items: [
      'React · TypeScript 기반 SPA 개발',
      'React Native 앱 개발',
      'Electron 기반 데스크톱 앱 개발',
      '컴포넌트 기반 UI 설계 및 개발',
      '재사용 가능한 컴포넌트 아키텍처 설계',
      'REST API 연동 및 비동기 데이터 처리',
    ],
  },
  {
    title: 'State & Form Management',
    items: [
      'Redux를 활용한 전역 상태 관리',
      'React Hook Form을 활용한 폼 상태 관리 및 유효성 검증',
    ],
  },
  {
    title: 'UI / Design System',
    items: [
      'Storybook 기반 컴포넌트 문서화',
      'shadcn/ui, Material UI를 활용한 UI 개발',
      'Tailwind CSS 및 SCSS 기반 스타일링',
      '디자인 시스템 기반 컴포넌트 개발',
    ],
  },
  {
    title: 'Web Quality & Optimization',
    items: [
      '반응형 웹 및 크로스 브라우징',
      '웹 표준 및 웹 접근성(WA) 준수',
      '웹 접근성 심사 대응 및 통과 경험',
      '시맨틱 마크업 기반 UI 개발',
      '웹 퍼포먼스 개선 및 유지보수성 향상',
      '코드 리팩토링 및 품질 개선',
    ],
  },
  {
    title: 'Collaboration & Workflow',
    items: [
      'Git 기반 협업',
      'Figma 기반 디자이너 협업',
      'Vite 기반 개발 환경 구성',
      '컴포넌트 단위 개발 및 관리',
    ],
  },
  {
    title: 'Legacy & Migration',
    items: [
      'ASP → PHP 시스템 마이그레이션',
      'MSSQL → MySQL 데이터베이스 마이그레이션',
      '레거시 시스템 유지보수 및 기능 개선',
    ],
  },
]

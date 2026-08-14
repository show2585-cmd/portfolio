import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    company: '㈜브라이트벨',
    period: '2023.11 ~ 2026.06',
    projects: [
      {
        title: '화담숲 모바일 애플리케이션',
        type: 'APP',
        client: 'HSAD',
        contribution: '100%',
        description: 'React Native 기반 화담숲 모바일 애플리케이션 UI를 개발했습니다.',
        responsibilities: ['UI 개발', '컴포넌트 개발', '앱 화면 최적화'],
        stack: ['React Native', 'TypeScript'],
      },
      {
        title: '발로란트 팝업스토어',
        type: 'KIOSK',
        client: '발로란트',
        contribution: '100%',
        description:
          '스크린 사격 체험이 가능한 인터랙티브 키오스크와 팝업스토어 웹페이지를 개발했습니다.',
        responsibilities: [
          'React 기반 키오스크 개발',
          '게임 인터랙션 구현',
          'PHP API 개발',
          '관리자 페이지 개발',
        ],
        stack: ['React', 'TypeScript', 'PHP', 'MySQL'],
      },
      {
        title: '사노피',
        type: 'KIOSK',
        client: '사노피',
        contribution: '100%',
        description: '바람개비 회전수를 활용한 체험형 게임 키오스크를 개발했습니다.',
        responsibilities: ['게임 로직 개발', '센서 데이터 연동', '관리자 기능 개발'],
        stack: ['React', 'TypeScript', 'PHP', 'MySQL'],
      },
      {
        title: '필라코리아 세계우표전시회',
        type: 'KIOSK',
        client: '한국우편사업진흥원',
        contribution: '100%',
        description:
          '감정 분석과 EEG(뇌파) 데이터를 활용한 체험형 키오스크를 개발했습니다.',
        responsibilities: [
          '감정 분석 결과 시각화',
          '뇌파집중도에 따라 게임 로직 개발',
          '관리자 기능 개발',
        ],
        stack: ['React', 'React-Native', 'TypeScript', 'PHP', 'MySQL'],
      },
      {
        title: '코리아그랜드세일',
        type: 'KIOSK',
        client: '코리아그랜드세일',
        contribution: '100%',
        description: '감정 분석 기능을 활용한 이벤트 키오스크를 개발했습니다.',
        responsibilities: [
          'React Native 기반 UI 개발',
          'API 연동',
          '관리자 기능 개발',
        ],
        stack: ['React Native', 'PHP', 'MySQL'],
      },
      {
        title: '현대자동차그룹 로보틱스랩 A+A2025',
        type: 'KIOSK / WEB',
        contribution: '100%',
        description:
          '독일 A+A 2025 전시를 위한 엑서블숄더(Exoskeleton) 홍보 키오스크와 웹페이지를 개발했습니다.',
        responsibilities: [
          '드로잉 키오스크 개발',
          'React 기반 UI 및 인터랙션 구현',
          'PHP API 연동',
          '관리자 기능 개발',
          '전시용 웹페이지 개발',
        ],
        stack: ['React', 'TypeScript', 'PHP', 'MySQL'],
      },
      {
        title: '광고자율심의기구 시스템 마이그레이션',
        type: 'WEB',
        contribution: '100%',
        description:
          '기존 ASP 기반 광고자율심의기구 시스템을 PHP 기반으로 마이그레이션하고, 데이터베이스를 MSSQL에서 MySQL로 이전한 프로젝트입니다.',
        responsibilities: [
          'ASP → PHP 마이그레이션',
          'MSSQL → MySQL 데이터 마이그레이션',
          '기존 기능 재구현',
          '관리자 시스템 개발 및 유지보수',
        ],
        stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      },
      {
        title: '현대 모터스튜디오 퍼블리싱',
        type: 'WEB',
        client: '아스템즈',
        contribution: '100%',
        description: '현대 모터스튜디오 홈페이지 퍼블리싱 프로젝트를 진행했습니다.',
        responsibilities: ['홈페이지 퍼블리싱', '반응형 웹 구현', '크로스 브라우징'],
        stack: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        title: '알보젠코리아 퍼블리싱',
        type: 'WEB',
        client: '알보젠코리아',
        contribution: '100%',
        description: '알보젠코리아 홈페이지 퍼블리싱 프로젝트를 진행했습니다.',
        responsibilities: ['홈페이지 퍼블리싱', '반응형 웹 구현', '크로스 브라우징'],
        stack: ['HTML', 'CSS', 'JavaScript'],
      },
    ],
  },
  {
    company: '㈜비스톤스',
    period: '2022.08 ~ 2023.09',
    projects: [
      {
        title: '삼성닷컴 운영 (Samsung.com)',
        type: 'WEB',
        client: '삼성전자 / 제일기획',
        contribution: '100%',
        description:
          '삼성전자 공식 홈페이지 운영 프로젝트로 삼성 언팩(Unpacked) 이벤트와 다양한 기획전 페이지를 제작했습니다.',
        responsibilities: [
          '삼성 언팩 이벤트 페이지 제작',
          '기획전 페이지 퍼블리싱',
          '반응형 웹 구현',
          '운영 및 유지보수',
        ],
        stack: ['HTML', 'SCSS', 'JavaScript', 'Gulp'],
      },
    ],
  },
  {
    company: '㈜디온컴즈',
    period: '2020.10 ~ 2022.05',
    projects: [
      {
        title: '산업기술평가관리원 홈페이지',
        type: 'WEB',
        contribution: '100%',
        description: '산업기술평가관리원 홈페이지 퍼블리싱 프로젝트를 진행했습니다.',
        responsibilities: [
          '홈페이지 퍼블리싱',
          '반응형 웹 구현',
          '크로스 브라우징',
          '유지보수',
        ],
        stack: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
      },
      {
        title: '농업ON 홈페이지',
        type: 'WEB',
        contribution: '100%',
        description: '농림축산식품부 농업ON 홈페이지 퍼블리싱 프로젝트를 진행했습니다.',
        responsibilities: [
          '홈페이지 퍼블리싱',
          'UI 구현',
          'jQuery 인터랙션 개발',
          '유지보수',
        ],
        stack: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
      },
      {
        title: '농림축산식품부 홈페이지 유지보수',
        type: 'WEB',
        contribution: '100%',
        description: '농림축산식품부 대표 홈페이지 운영 및 유지보수를 담당했습니다.',
        responsibilities: [
          '신규 페이지 퍼블리싱',
          '콘텐츠 운영',
          'UI 개선',
          '유지보수 및 오류 수정',
        ],
        stack: ['HTML', 'CSS', 'JavaScript'],
      },
    ],
  },
]

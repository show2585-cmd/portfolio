import type { SideProject } from '@/types'

export const sideProjects: SideProject[] = [
  {
    title: 'LongShort AI',
    period: '2026.10',
    description:
      '비트코인·이더리움·솔라나 등 코인 선물의 롱/숏 추세를 타임프레임별 확률로 보여주는 무료 분석 도구입니다. 바이낸스 공개 API를 프론트에서 직접 호출해 시세와 롱숏 비율을 가져오고, 기술적 지표 계산도 클라이언트에서 처리합니다.',
    features: [
      'EMA · MACD · RSI · DMI/ADX · 슈퍼트렌드 지표 기반 롱/숏 추세 확률 산출',
      '5분 · 15분 · 1시간 · 4시간 · 1일봉 타임프레임별 분석',
      '바이낸스 선물 롱숏 비율 · 미결제약정 청산맵 제공',
      'TradingView 위젯 실시간 차트 연동',
      'GA4 이벤트 수집 및 Google AdSense 광고 게재',
      'SEO 메타 태그',
      'Vercel 배포 (longshort-ai.com 커스텀 도메인)',
    ],
    stack: ['React', 'Vite', 'Binance API', 'TradingView', 'GA4', 'Google AdSense', 'Vercel'],
    image: '/side-projects/longshort_img.png',
    link: 'https://longshort-ai.com/',
  },
  {
    title: 'Career AI',
    period: '2026.10',
    description:
      '5분 성향 진단으로 일하는 방식을 분석하고, 커리어넷 직업 데이터에서 잘 맞는 직무 TOP 5를 추천해주는 진로 추천 서비스입니다. 회원가입 없이 무료로 이용할 수 있습니다.',
    features: [
      '25개 상황 질문 기반 성향 진단',
      '커리어넷 직업 데이터 연동 직무 추천 TOP 5',
      '추천 이유 · 필요 역량 · 직무 비교 제공',
      'GA4 이벤트 수집',
      'SEO 메타 태그',
      'Vercel 배포',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'GA4', 'Vercel'],
    image: '/side-projects/career_img.png',
    link: 'https://career-ai-gray.vercel.app/',
  },
  {
    title: '호텔트립 (Supabase + React)',
    period: '2026.08',
    description:
      'Supabase를 백엔드로 사용해 인증과 호텔 예약 데이터를 CRUD하는 React 웹 애플리케이션입니다. FSD(Feature-Sliced Design) 구조로 설계했으며, 이메일·카카오 소셜 로그인 지원합니다.',
    features: [
      'Supabase Auth 기반 이메일 로그인 / 회원가입 및 호텔 검색(이름·지역) 및 무한 스크롤 목록 · 상세 조회',
      '호텔 예약 생성과 마이페이지 예약 내역 조회',
      '위시리스트(호텔 찜) 추가 / 삭제',
      '배너 캐러셀(Swiper), 날짜 선택 캘린더, 카카오맵',
      'Vercel 배포',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Supabase', 'Tailwind CSS', 'shadcn/ui', 'React Router', 'Vercel'],
    image: '/side-projects/hotel_trip_img.png',
    link: 'https://supase-react.vercel.app/',
  },
  {
    title: '청약 크롤러',
    period: '2026',
    description:
      '청약홈, LH, SH, 마이홈 4개 사이트의 주택청약 공고를 크롤링해 내가 설정한 조건에 맞는 공고만 골라 매주 토요일 오전 9시에 이메일로 알려주는 자동화 프로젝트입니다.',
    features: [
      '청약홈 / LH / SH / 마이홈 공고 크롤링',
      '설정한 조건에 맞는 공고 필터링',
      'Windows 작업 스케줄러로 매주 토요일 09:00 자동 실행',
      'SMTP를 이용한 이메일 발송',
    ],
    stack: ['Python', 'SMTP', 'Windows 작업 스케줄러'],
    image: '/side-projects/home_crawling_img.png',
  },
  {
    title: 'OKX 자동매매 봇',
    period: '2026',
    description: 'OKX 거래소 API를 활용해 자동으로 매매를 실행하는 프로그램입니다.',
    features: ['OKX REST API 연동', '자동매매 실행'],
    stack: ['Python', 'OKX REST API'],
    image: '/side-projects/okx_img.png',
  },
]

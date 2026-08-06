import type { SideProject } from '@/types'

export const sideProjects: SideProject[] = [
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

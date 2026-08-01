export interface ColorToken {
  name: string
  variable: string
  role: string
  light: string
  dark: string
}

export const colorTokens: ColorToken[] = [
  {
    name: 'Background',
    variable: '--background',
    role: '페이지 배경',
    light: 'oklch(1 0 0)',
    dark: 'oklch(0.145 0 0)',
  },
  {
    name: 'Foreground',
    variable: '--foreground',
    role: '기본 텍스트',
    light: 'oklch(0.145 0 0)',
    dark: 'oklch(0.985 0 0)',
  },
  {
    name: 'Primary',
    variable: '--primary',
    role: '주요 액션',
    light: 'oklch(0.205 0 0)',
    dark: 'oklch(0.922 0 0)',
  },
  {
    name: 'Secondary / Muted',
    variable: '--secondary',
    role: '보조 배경',
    light: 'oklch(0.97 0 0)',
    dark: 'oklch(0.269 0 0)',
  },
  {
    name: 'Muted Foreground',
    variable: '--muted-foreground',
    role: '보조 텍스트',
    light: 'oklch(0.556 0 0)',
    dark: 'oklch(0.708 0 0)',
  },
  {
    name: 'Destructive',
    variable: '--destructive',
    role: '위험/오류 (유일한 유채색)',
    light: 'oklch(0.577 0.245 27.325)',
    dark: 'oklch(0.704 0.191 22.216)',
  },
]

export const typographySamples = [
  { label: 'Hero (H1)', className: 'text-4xl font-semibold tracking-tight' },
  { label: 'Page Title (H1)', className: 'text-3xl font-semibold tracking-tight' },
  { label: 'Section (H2)', className: 'text-2xl font-semibold tracking-tight' },
  { label: 'Card Title', className: 'text-base font-medium' },
  { label: 'Body', className: 'text-sm' },
]

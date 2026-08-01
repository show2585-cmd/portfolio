# DESIGN.md — 김원희 포트폴리오

이 문서는 [getdesign.md](https://getdesign.md)의 DESIGN.md 포맷(Stitch DESIGN.md format)을 따라, 이 포트폴리오 사이트에 실제로 적용된 디자인 시스템을 기록한 참조 문서입니다. AI 코딩 에이전트가 이 사이트에 새 페이지/컴포넌트를 추가할 때 동일한 시각 언어를 유지하도록 돕습니다.

---

## 1. Visual Theme & Atmosphere

- **분위기:** 절제된 무채색(grayscale) 기반의 담백하고 문서 같은(document-like) 톤. 화려한 브랜드 컬러 없이 타이포그래피와 여백, 경계선만으로 위계를 표현합니다.
- **시각 밀도:** 낮음. 카드 내부 여백을 넉넉히 두고(`--card-spacing: 1rem`), 섹션 간 수직 리듬(`py-16`~`py-24`)을 크게 가져가 텍스트가 숨 쉴 공간을 확보합니다.
- **설계 철학:** "장식보다 위계". 색은 의미(성공/경고/위험)를 전달할 때만 사용하고, 나머지는 흑백 대비와 타이포그래피 스케일로 정보 구조를 표현합니다.

## 2. Color Palette & Roles

라이트/다크 모드 모두 채도(chroma) 0에 가까운 순수 무채색 팔레트를 기본으로 하며, `destructive`(위험)에만 채도를 허용합니다.

| 이름 | 역할 | Light | Dark |
|---|---|---|---|
| `--background` | 페이지 배경 | `oklch(1 0 0)` (흰색) | `oklch(0.145 0 0)` (거의 검정) |
| `--foreground` | 기본 텍스트 | `oklch(0.145 0 0)` | `oklch(0.985 0 0)` |
| `--card` | 카드 배경 | `oklch(1 0 0)` | `oklch(0.205 0 0)` |
| `--primary` | 주요 액션(버튼 기본, 배지 기본) | `oklch(0.205 0 0)` (검정) | `oklch(0.922 0 0)` (흰색에 가까움) |
| `--primary-foreground` | primary 위 텍스트 | `oklch(0.985 0 0)` | `oklch(0.205 0 0)` |
| `--secondary` / `--muted` / `--accent` | 보조 배경, 은은한 강조 | `oklch(0.97 0 0)` | `oklch(0.269 0 0)` |
| `--muted-foreground` | 보조/설명 텍스트 | `oklch(0.556 0 0)` | `oklch(0.708 0 0)` |
| `--destructive` | 위험/오류(유일하게 채도 있는 색) | `oklch(0.577 0.245 27.325)` (빨강) | `oklch(0.704 0.191 22.216)` |
| `--border` / `--input` | 구분선, 입력 테두리 | `oklch(0.922 0 0)` | `oklch(1 0 0 / 10%)` (반투명 흰색) |
| `--ring` | 포커스 링 | `oklch(0.708 0 0)` | `oklch(0.556 0 0)` |

**상태 강조색 (Agents 페이지 한정 사용):** 항상수행 `emerald-600/400`, 먼저확인 `amber-600/400`, 절대금지 `red-600/400`. 이 세 색은 일반 UI에는 쓰지 않고 boundary(경계선) 상태 표시에만 한정합니다.

## 3. Typography Rules

- **폰트 패밀리:** [Geist Variable](https://vercel.com/font) 단일 서체 (`@fontsource-variable/geist`). 헤딩(`--font-heading`)과 본문(`--font-sans`)에 같은 서체를 사용해 시각적 통일감을 줍니다.
- **계층 (실제 사용 스케일):**

| 용도 | 클래스 | 굵기 |
|---|---|---|
| Hero 타이틀 (Home h1) | `text-4xl sm:text-5xl` | `font-semibold tracking-tight` |
| 페이지 타이틀 (h1) | `text-3xl` | `font-semibold tracking-tight` |
| 섹션 타이틀 (h2) | `text-2xl` / `text-xl` | `font-semibold tracking-tight` |
| 카드 타이틀 | `text-base` | `font-medium` |
| 본문 | `text-base` / `text-sm` | `font-normal` |
| 보조/메타 텍스트 | `text-xs` ~ `text-sm` | `text-muted-foreground` |

## 4. Component Stylings

- **Button:** `rounded-lg`, variants `default/outline/secondary/ghost/destructive/link`. 기본 높이 `h-8`(sm: `h-7`, lg: `h-9`). 클릭 시 `translate-y-px`로 눌리는 느낌을 줌. 아이콘은 텍스트와 동일 색.
- **Badge:** `rounded-4xl`(완전한 pill), `h-5`, `text-xs`, `px-2 py-0.5`. **짧은 태그/키워드 전용** — 문장 단위 텍스트에는 사용하지 않음(카드 리스트 참고).
- **Card:** `rounded-xl`, 그림자 없이 `ring-1 ring-foreground/10`만으로 경계 표현. 내부 여백은 `--card-spacing`(기본 1rem) 변수로 통일. Footer가 있으면 `border-t` + `bg-muted/50`로 구분.
- **Nav:** `sticky top-0`, `border-b`, `bg-background/80 backdrop-blur`로 스크롤 시에도 콘텐츠 위에 은은하게 떠 있음.

## 5. Layout Principles

- **컨테이너:** `max-w-5xl mx-auto px-6` — 모든 페이지 공통.
- **수직 리듬:** 일반 페이지 섹션 `py-16`, Home 히어로 `py-24`.
- **그리드:** 카드 목록은 `grid gap-4~6 sm:grid-cols-2` (모바일 1열 → sm 이상 2열).
- **여백 철학:** 요소 사이 간격은 Tailwind 기본 스페이싱 스케일(4px 배수)만 사용, 임의 값은 최소화.

## 6. Depth & Elevation

- **그림자(box-shadow) 대신 1px 링/보더로 깊이를 표현**하는 것이 이 사이트의 핵심 규칙입니다.
- 라이트 모드: `ring-foreground/10` (연한 회색 테두리)
- 다크 모드: `border`가 `oklch(1 0 0 / 10%)` 반투명 흰색으로 전환되어 어두운 배경 위에서도 은은하게 분리됨.
- 표면 계층은 배경(`--background`) → 카드(`--card`) → 보조 배경(`--muted`) 3단계로 충분히 표현.

## 7. Do's and Don'ts

**Do**
- 팔레트는 무채색을 유지하고, 색은 상태(성공/경고/위험) 전달에만 사용한다.
- 깊이는 `box-shadow`가 아니라 `ring`/`border`로 표현한다.
- 헤딩과 본문에 동일한 서체(Geist Variable)를 유지한다.
- 짧은 키워드/태그는 Badge, 문장형 설명은 리스트(`ul/li` + 불릿)로 구분한다.

**Don't**
- 채도 있는 "브랜드 컬러"를 primary 버튼 등 일반 UI에 도입하지 않는다.
- Badge 안에 긴 문장을 넣지 않는다 — 가독성이 떨어진다 (실제로 About 페이지에서 겪은 문제).
- 카드에 `box-shadow`를 추가해 무거운 입체감을 주지 않는다.
- 임의의 색상 값(hex 하드코딩)을 쓰지 않고 반드시 CSS 변수(`--primary`, `--muted` 등)를 통해 참조한다.

## 8. Responsive Behavior

- **브레이크포인트:** Tailwind 기본값 중 `sm:`(640px)만 핵심적으로 사용 — 1열→2열 그리드 전환, 히어로 타이틀 크기 전환(`text-4xl` → `sm:text-5xl`) 등.
- **터치 대상:** 버튼 기본 높이 `h-8`(32px) 이상 유지.
- **네비게이션:** `sm:` 미만에서는 가로 메뉴를 숨기고 햄버거 버튼 + Sheet(우측 슬라이드 드로어)로 전환. `sm:` 이상에서는 기존 가로 메뉴를 그대로 노출.

## 9. Agent Prompt Guide

새 페이지/컴포넌트를 만들 때 아래 프롬프트를 참고하세요.

```
이 포트폴리오 사이트의 DESIGN.md 규칙을 따라 작성해줘:
- 색은 --background/--foreground/--card/--primary/--secondary/--muted/--destructive CSS 변수만 사용 (임의 hex 금지)
- 깊이는 ring-foreground/10 또는 border만 사용, box-shadow 금지
- 폰트는 Geist Variable 하나만 사용, 헤딩도 같은 서체
- 컨테이너는 max-w-5xl mx-auto px-6, 섹션 세로 여백은 py-16
- 짧은 태그는 Badge(rounded-4xl), 문장형 설명은 ul/li 리스트로 구분
- shadcn/ui(Base UI) 컴포넌트를 우선 사용하고, 없으면 위 토큰을 조합해 직접 작성
```

**참고 색상 토큰 (복붙용):**
`--background` `--foreground` `--card` `--primary` `--primary-foreground` `--secondary` `--muted` `--muted-foreground` `--accent` `--destructive` `--border` `--ring`

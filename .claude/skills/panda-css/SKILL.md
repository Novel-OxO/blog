---
name: panda-css
description: Panda CSS 스타일링 가이드. CSS, 스타일, 디자인, 레이아웃, 컴포넌트 스타일링, 테마, 토큰, 색상, 폰트, 반응형 등 스타일 관련 작업에 사용합니다. "스타일", "CSS", "디자인", "레이아웃", "색상", "폰트", "반응형", "다크모드" 등의 표현이 나오면 이 스킬을 참조하세요.
---

# Panda CSS 스타일링 가이드

이 프로젝트는 Panda CSS v1.8을 사용합니다. 스타일 작업 시 이 가이드를 따르세요.

## 프로젝트 설정 현황

- **버전**: @pandacss/dev ^1.8.2
- **설정 파일**: `panda.config.ts`
- **출력 디렉토리**: `styled-system/` (gitignored, `pnpm prepare`로 생성)
- **스캔 범위**: `./src/**/*.{js,jsx,ts,tsx}`
- **프리플라이트**: 활성화 (CSS 리셋 포함)
- **JSX 프레임워크**: 미설정 (함수 기반 API만 사용)
- **테마 커스텀**: 기본 프리셋만 사용 중 (아직 커스텀 토큰 없음)

## 핵심 API

### css() — 기본 스타일 함수

```tsx
import { css } from '../../styled-system/css'

// 기본 사용
<div className={css({ bg: 'blue.500', color: 'white', p: '4', rounded: 'md' })} />

// 반응형 (배열)
css({ fontSize: ['sm', 'md', 'lg'] })  // mobile → sm → md 브레이크포인트

// 반응형 (객체)
css({ fontSize: { base: 'sm', md: 'md', lg: 'lg' } })

// 가상 선택자 / 조건부
css({ bg: 'blue.500', _hover: { bg: 'blue.600' }, _dark: { bg: 'blue.300' } })

// 합성
css(baseStyle.raw(), { color: 'red.500' })
```

### cx() — 클래스명 병합

```tsx
import { css, cx } from '../../styled-system/css'
<div className={cx(baseClass, css({ mt: '4' }), conditionalClass)} />
```

### 패턴 함수 — 레이아웃

```tsx
import { flex, stack, grid, container, center } from '../../styled-system/patterns'

// Flex
<div className={flex({ gap: '4', align: 'center', justify: 'between' })} />

// Stack (세로)
<div className={stack({ gap: '2', direction: 'column' })} />

// HStack / VStack
import { hstack, vstack } from '../../styled-system/patterns'
<div className={hstack({ gap: '4' })} />
<div className={vstack({ gap: '2' })} />

// Grid
<div className={grid({ columns: 3, gap: '4' })} />

// Container (중앙 정렬 + 최대 너비)
<div className={container()} />

// Center
<div className={center({ inline: true })} />
```

### cva() — 컴포넌트 레시피 (변형)

여러 variant를 가진 컴포넌트를 만들 때 사용합니다:

```tsx
import { cva } from '../../styled-system/css'

const button = cva({
  base: { display: 'flex', alignItems: 'center', rounded: 'md', cursor: 'pointer' },
  variants: {
    visual: {
      solid: { bg: 'blue.500', color: 'white' },
      outline: { borderWidth: '1px', borderColor: 'blue.500', color: 'blue.500' },
    },
    size: {
      sm: { px: '3', py: '1', fontSize: 'sm' },
      md: { px: '4', py: '2', fontSize: 'md' },
      lg: { px: '6', py: '3', fontSize: 'lg' },
    },
  },
  defaultVariants: { visual: 'solid', size: 'md' },
})

// 사용
<button className={button({ visual: 'outline', size: 'sm' })} />
```

### sva() — 슬롯 레시피 (다중 파트 컴포넌트)

카드, 모달 등 여러 파트로 구성된 컴포넌트에 사용합니다:

```tsx
import { sva } from '../../styled-system/css'

const card = sva({
  slots: ['root', 'header', 'body', 'footer'],
  base: {
    root: { rounded: 'lg', shadow: 'md', overflow: 'hidden' },
    header: { p: '4', borderBottom: '1px solid', borderColor: 'gray.200' },
    body: { p: '4' },
    footer: { p: '4', borderTop: '1px solid', borderColor: 'gray.200' },
  },
  variants: {
    size: {
      sm: { root: { maxW: 'sm' } },
      lg: { root: { maxW: 'lg' } },
    },
  },
})

// 사용
const classes = card({ size: 'sm' })
<div className={classes.root}>
  <div className={classes.header}>...</div>
  <div className={classes.body}>...</div>
</div>
```

## 자주 쓰는 속성 약어

| 약어 | 전체 | 예시 |
|------|------|------|
| `p`, `px`, `py`, `pt`, `pb`, `pl`, `pr` | padding | `p: '4'` |
| `m`, `mx`, `my`, `mt`, `mb`, `ml`, `mr` | margin | `mx: 'auto'` |
| `bg` | background | `bg: 'blue.500'` |
| `w`, `h` | width, height | `w: 'full'` |
| `minW`, `maxW`, `minH`, `maxH` | min/max | `maxW: 'prose'` |
| `rounded` | borderRadius | `rounded: 'lg'` |
| `shadow` | boxShadow | `shadow: 'md'` |
| `pos` | position | `pos: 'absolute'` |
| `z` | zIndex | `z: '10'` |

## 조건부 스타일

```tsx
css({
  // 가상 선택자
  _hover: { bg: 'blue.600' },
  _focus: { outline: '2px solid', outlineColor: 'blue.500' },
  _active: { transform: 'scale(0.98)' },
  _disabled: { opacity: '0.5', cursor: 'not-allowed' },

  // 다크 모드
  _dark: { bg: 'gray.800', color: 'gray.100' },

  // 미디어 쿼리
  _motionReduce: { transition: 'none' },

  // 자식 선택자
  '& > p': { mb: '4' },

  // 첫번째/마지막
  _first: { mt: '0' },
  _last: { mb: '0' },
})
```

## 브레이크포인트

| 이름 | 크기 |
|------|------|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

## 테마 커스텀 방법

`panda.config.ts`에서 확장합니다:

```ts
export default defineConfig({
  theme: {
    extend: {
      tokens: {
        colors: { brand: { value: '#...' } },
        fonts: { heading: { value: 'Inter, sans-serif' } },
      },
      semanticTokens: {
        colors: {
          text: { value: { base: '{colors.gray.900}', _dark: '{colors.gray.100}' } },
        },
      },
      recipes: { button: buttonRecipe },
    },
  },
})
```

토큰 변경 후 반드시 `pnpm prepare`로 코드젠을 실행하세요.

## 유의사항

- import 경로는 `../../styled-system/css` 형태 (파일 위치에 따라 상대경로 조정)
- `jsxFramework` 미설정이므로 `<Box>`, `<Flex>` 같은 JSX 컴포넌트는 사용 불가
- 패턴 함수(`flex()`, `grid()` 등)를 대신 사용
- 설정 변경 후 `pnpm prepare` 실행 필수
- `styled-system/`은 gitignored — 직접 수정하지 않기

전체 토큰 목록은 [references/tokens.md](references/tokens.md)를 참조하세요.

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

## 디자인 시스템 토큰

전체 토큰 목록은 [references/tokens.md](references/tokens.md)를 참조하세요.

### 색상 — 반드시 프로젝트 토큰 사용

```tsx
// Primary: heat (오렌지 계열, 50~950 + alpha variants)
bg: 'heat.500'       // 기본 primary
bg: 'heat.a8'        // 8% 투명도 (subtle 배경)
bg: 'heat.a12'       // 12% 투명도

// Neutral: neutral (회색 계열, 50~950)
color: 'neutral.600'

// Accent: accent.amethyst, accent.bluetron, accent.crimson, accent.forest, accent.honey
```

### 시맨틱 토큰 — 다크모드 자동 대응

```tsx
// 배경
bg: 'surface'          // 기본 배경 (white / neutral.950)
bg: 'surface.raised'   // 카드 등 올려진 배경 (white / neutral.900)
bg: 'bg.base'          // 페이지 바탕 (f9f9f9 / neutral.950)
bg: 'bg.lighter'       // 약간 밝은 배경 (fbfbfb / neutral.900)

// 텍스트
color: 'text.primary'    // 본문 (neutral.900 / neutral.50)
color: 'text.secondary'  // 보조 텍스트 (neutral.600 / neutral.400)
color: 'text.muted'      // 흐린 텍스트 (neutral.500 / neutral.500)

// 보더
borderColor: 'border.faint'  // 가장 연한 (ededed / neutral.800)
borderColor: 'border.muted'  // 기본 (e8e8e8 / neutral.800)
borderColor: 'border.loud'   // 강한 (e6e6e6 / neutral.700)
```

### 폰트

```tsx
fontFamily: 'heading'  // Geist Sans
fontFamily: 'body'     // Geist Sans
fontFamily: 'mono'     // Geist Mono
```

### 텍스트 스타일 (textStyle)

```tsx
textStyle: 'heading.1'   // 60px/64px, weight 500
textStyle: 'heading.2'   // 52px/56px, weight 500
textStyle: 'heading.3'   // 24px/32px, weight 500
textStyle: 'body.base'   // 16px/24px, weight 400
textStyle: 'body.sm'     // 14px/20px, weight 450
textStyle: 'body.xs'     // 12px/16px, weight 400
```

### 커스텀 사이즈

```tsx
maxW: 'container'        // 1112px (메인 컨테이너)
maxW: 'containerPadded'  // 1144px
```

### 그림자

```tsx
shadow: 'xs'       // 인셋 + 미세 그림자
shadow: 'sm'       // 가벼운 그림자
shadow: 'md'       // 중간 그림자
shadow: 'lg'       // 큰 그림자
shadow: 'primary'  // heat 컬러 글로우
```

## 핵심 API

### css() — 기본 스타일 함수

```tsx
import { css } from '../../styled-system/css'

<div className={css({ bg: 'surface.raised', color: 'text.primary', p: '4', rounded: 'lg' })} />

// 반응형
css({ fontSize: { base: 'sm', md: 'md', lg: 'lg' } })

// 조건부
css({ bg: 'heat.500', _hover: { bg: 'heat.600' }, _disabled: { opacity: 0.5 } })
```

### cx() — 클래스명 병합

```tsx
import { css, cx } from '../../styled-system/css'
<div className={cx(baseClass, css({ mt: '4' }), className)} />
```

### cva() — 컴포넌트 레시피

프로젝트에서 실제 사용하는 패턴:

```tsx
import { cva, cx, type RecipeVariantProps } from '../../styled-system/css'

const button = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'semibold',
    cursor: 'pointer',
    transition: 'all 0.15s',
    _disabled: { opacity: 0.5, cursor: 'not-allowed' },
  },
  variants: {
    variant: {
      primary: { bg: 'heat.500', color: 'white', _hover: { bg: 'heat.600' } },
      outline: { bg: 'transparent', color: 'text.primary', borderColor: 'border.muted' },
      ghost: { bg: 'transparent', color: 'text.secondary', _hover: { bg: 'bg.lighter' } },
    },
    size: {
      sm: { px: '3', py: '1.5', fontSize: 'xs', borderRadius: 'md' },
      md: { px: '4', py: '2', fontSize: 'sm', borderRadius: 'md' },
      lg: { px: '6', py: '2.5', fontSize: 'md', borderRadius: 'lg' },
    },
  },
  defaultVariants: { variant: 'primary', size: 'md' },
})

type ButtonVariants = RecipeVariantProps<typeof button>
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants & {
  children: React.ReactNode
}

export function Button({ variant, size, className, children, ...props }: ButtonProps) {
  return (
    <button className={cx(button({ variant, size }), className)} {...props}>
      {children}
    </button>
  )
}
```

### 패턴 함수 — 레이아웃

```tsx
import { flex, stack, grid, center } from '../../styled-system/patterns'

<div className={flex({ gap: '4', align: 'center', justify: 'between' })} />
<div className={grid({ columns: { base: 1, md: 2, lg: 3 }, gap: '6' })} />
```

## 컴포넌트 패턴 참고

기존 컴포넌트를 참고해서 일관된 스타일을 유지하세요:

| 컴포넌트 | 경로 | 패턴 |
|---------|------|------|
| Button | `src/shared/components/Button.tsx` | cva (variant, size, rounded, fullWidth) |
| Badge | `src/shared/components/Badge.tsx` | cva (solid, subtle) |
| Input | `src/shared/components/Input.tsx` | css (semantic tokens 사용) |
| IconButton | `src/shared/components/IconButton.tsx` | cva (ghost, outline) |
| Container | `src/shared/components/layout/Container.tsx` | css (maxW: 'container') |
| Header | `src/shared/components/layout/Header.tsx` | css (sticky, z-index) |

## 유의사항

- import 경로는 `../../styled-system/css` 형태 (파일 위치에 따라 상대경로 조정)
- `jsxFramework` 미설정이므로 `<Box>`, `<Flex>` 같은 JSX 컴포넌트는 사용 불가
- 패턴 함수(`flex()`, `grid()` 등)를 대신 사용
- 색상은 반드시 프로젝트 토큰(heat, neutral, accent, semantic) 사용
- 기본 프리셋 색상(blue.500, gray.200 등) 대신 프로젝트 토큰 사용
- 설정 변경 후 `pnpm prepare` 실행 필수
- `styled-system/`은 gitignored — 직접 수정하지 않기

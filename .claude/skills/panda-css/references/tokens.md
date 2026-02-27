# 프로젝트 디자인 토큰 레퍼런스

`panda.config.ts`에 정의된 커스텀 토큰입니다.

## 색상 (colors)

### heat (Primary — 오렌지)

| 토큰 | 값 | 용도 |
|------|-----|------|
| `heat.50` | #fff5ef | 가장 밝은 배경 |
| `heat.100` | #ffe8d8 | |
| `heat.200` | #ffcdb0 | |
| `heat.300` | #ffaa7e | |
| `heat.400` | #ff7d42 | |
| `heat.500` | #fa5d19 | **기본 Primary** |
| `heat.600` | #e8430a | hover 상태 |
| `heat.700` | #c1320a | |
| `heat.800` | #992a10 | |
| `heat.900` | #7c2611 | |
| `heat.950` | #431006 | 가장 어두운 |

#### Alpha variants

| 토큰 | 값 | 용도 |
|------|-----|------|
| `heat.a4` | rgba(250, 93, 25, 0.04) | |
| `heat.a8` | rgba(250, 93, 25, 0.08) | Badge subtle 배경 |
| `heat.a12` | rgba(250, 93, 25, 0.12) | |
| `heat.a16` | rgba(250, 93, 25, 0.16) | |
| `heat.a20` | rgba(250, 93, 25, 0.20) | |
| `heat.a40` | rgba(250, 93, 25, 0.40) | |
| `heat.a90` | rgba(250, 93, 25, 0.90) | |
| `heat.a100` | rgba(250, 93, 25, 1) | |

### neutral (회색)

| 토큰 | 값 |
|------|-----|
| `neutral.50` | #fafafa |
| `neutral.100` | #f5f5f5 |
| `neutral.200` | #e8e8e8 |
| `neutral.300` | #d6d6d6 |
| `neutral.400` | #b0b0b0 |
| `neutral.500` | #8a8a8a |
| `neutral.600` | #6e6e6e |
| `neutral.700` | #525252 |
| `neutral.800` | #3a3a3a |
| `neutral.900` | #262626 |
| `neutral.950` | #171717 |

### accent (강조 색상)

| 토큰 | 값 |
|------|-----|
| `accent.black` | #262626 |
| `accent.white` | #ffffff |
| `accent.amethyst` | #9061ff |
| `accent.bluetron` | #2a6dfb |
| `accent.crimson` | #eb3424 |
| `accent.forest` | #42c366 |
| `accent.honey` | #ecb730 |

## 시맨틱 토큰 (다크모드 자동 대응)

| 토큰 | Light | Dark |
|------|-------|------|
| `surface` | #ffffff | neutral.950 |
| `surface.raised` | #ffffff | neutral.900 |
| `bg.base` | #f9f9f9 | neutral.950 |
| `bg.lighter` | #fbfbfb | neutral.900 |
| `text.primary` | neutral.900 | neutral.50 |
| `text.secondary` | neutral.600 | neutral.400 |
| `text.muted` | neutral.500 | neutral.500 |
| `border.faint` | #ededed | neutral.800 |
| `border.muted` | #e8e8e8 | neutral.800 |
| `border.loud` | #e6e6e6 | neutral.700 |

## 폰트 (fonts)

| 토큰 | 값 |
|------|-----|
| `heading` | Geist Sans, system-ui, sans-serif |
| `body` | Geist Sans, system-ui, sans-serif |
| `mono` | Geist Mono, monospace |

## 폰트 크기 (fontSizes)

| 토큰 | 값 |
|------|-----|
| `xs` | 12px |
| `sm` | 14px |
| `md` | 16px |
| `lg` | 18px |
| `xl` | 20px |
| `2xl` | 24px |
| `3xl` | 32px |
| `4xl` | 40px |
| `5xl` | 52px |
| `6xl` | 60px |

## 폰트 두께 (fontWeights)

| 토큰 | 값 |
|------|-----|
| `normal` | 400 |
| `medium` | 450 |
| `semibold` | 500 |
| `bold` | 600 |

## 텍스트 스타일 (textStyles)

| 토큰 | fontSize | lineHeight | fontWeight | letterSpacing |
|------|----------|------------|------------|---------------|
| `heading.1` | 60px | 64px | 500 | -0.3px |
| `heading.2` | 52px | 56px | 500 | -0.52px |
| `heading.3` | 24px | 32px | 500 | -0.24px |
| `body.base` | 16px | 24px | 400 | — |
| `body.sm` | 14px | 20px | 450 | — |
| `body.xs` | 12px | 16px | 400 | — |

## 줄 높이 (lineHeights)

| 토큰 | 값 |
|------|-----|
| `tight` | 1.1 |
| `snug` | 1.25 |
| `normal` | 1.5 |
| `relaxed` | 1.625 |

## 자간 (letterSpacings)

| 토큰 | 값 |
|------|-----|
| `tighter` | -0.52px |
| `tight` | -0.3px |
| `normal` | 0px |
| `wide` | 0.5px |

## 크기 (sizes)

| 토큰 | 값 |
|------|-----|
| `container` | 1112px |
| `containerPadded` | 1144px |

## 모서리 둥글기 (radii)

| 토큰 | 값 |
|------|-----|
| `xs` | 4px |
| `sm` | 6px |
| `md` | 8px |
| `lg` | 10px |
| `xl` | 16px |
| `2xl` | 20px |
| `3xl` | 24px |
| `full` | 999px |

## 그림자 (shadows)

| 토큰 | 용도 |
|------|------|
| `xs` | 인셋 + 미세 그림자 |
| `sm` | 가벼운 그림자 |
| `md` | 중간 그림자 (카드 hover) |
| `lg` | 큰 그림자 |
| `primary` | heat 컬러 글로우 효과 |

# Panda CSS 기본 토큰 레퍼런스

이 프로젝트는 기본 프리셋을 사용하므로 아래 토큰이 모두 사용 가능합니다.

## 색상 팔레트

25개 컬러 팔레트, 각각 50~950 단계:

| 팔레트 | 사용 예시 |
|--------|----------|
| `rose` | `color: 'rose.500'` |
| `pink` | `bg: 'pink.100'` |
| `fuchsia` | `borderColor: 'fuchsia.300'` |
| `purple` | |
| `violet` | |
| `indigo` | |
| `blue` | |
| `sky` | |
| `cyan` | |
| `teal` | |
| `emerald` | |
| `green` | |
| `lime` | |
| `yellow` | |
| `amber` | |
| `orange` | |
| `red` | |
| `neutral` | |
| `stone` | |
| `zinc` | |
| `gray` | |
| `slate` | |

특수 색상: `current`, `black`, `white`, `transparent`

단계: `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950`

## 폰트 크기 (fontSize)

| 토큰 | 크기 |
|------|------|
| `2xs` | 0.625rem (10px) |
| `xs` | 0.75rem (12px) |
| `sm` | 0.875rem (14px) |
| `md` | 1rem (16px) |
| `lg` | 1.125rem (18px) |
| `xl` | 1.25rem (20px) |
| `2xl` | 1.5rem (24px) |
| `3xl` | 1.875rem (30px) |
| `4xl` | 2.25rem (36px) |
| `5xl` | 3rem (48px) |
| `6xl` | 3.75rem (60px) |
| `7xl` | 4.5rem (72px) |
| `8xl` | 6rem (96px) |
| `9xl` | 8rem (128px) |

## 폰트 두께 (fontWeight)

`thin` (100), `extralight` (200), `light` (300), `normal` (400), `medium` (500), `semibold` (600), `bold` (700), `extrabold` (800), `black` (900)

## 폰트 패밀리 (fonts)

- `sans` — system UI sans-serif
- `serif` — serif
- `mono` — monospace

## 간격 (spacing) — padding, margin, gap 등에 사용

| 토큰 | 값 |
|------|-----|
| `0` | 0 |
| `0.5` | 0.125rem (2px) |
| `1` | 0.25rem (4px) |
| `1.5` | 0.375rem (6px) |
| `2` | 0.5rem (8px) |
| `2.5` | 0.625rem (10px) |
| `3` | 0.75rem (12px) |
| `3.5` | 0.875rem (14px) |
| `4` | 1rem (16px) |
| `5` | 1.25rem (20px) |
| `6` | 1.5rem (24px) |
| `7` | 1.75rem (28px) |
| `8` | 2rem (32px) |
| `9` | 2.25rem (36px) |
| `10` | 2.5rem (40px) |
| `11` | 2.75rem (44px) |
| `12` | 3rem (48px) |
| `14` | 3.5rem (56px) |
| `16` | 4rem (64px) |
| `20` | 5rem (80px) |
| `24` | 6rem (96px) |
| `28` | 7rem (112px) |
| `32` | 8rem (128px) |
| `36` | 9rem (144px) |
| `40` | 10rem (160px) |
| `44` | 11rem (176px) |
| `48` | 12rem (192px) |
| `52` | 13rem (208px) |
| `56` | 14rem (224px) |
| `60` | 15rem (240px) |
| `64` | 16rem (256px) |
| `72` | 18rem (288px) |
| `80` | 20rem (320px) |
| `96` | 24rem (384px) |

음수값도 사용 가능: `-1`, `-2`, ... `-96`

## 크기 (sizes) — width, height에 사용

spacing 값 + 추가 크기:

| 토큰 | 값 |
|------|-----|
| `xs` | 20rem (320px) |
| `sm` | 24rem (384px) |
| `md` | 28rem (448px) |
| `lg` | 32rem (512px) |
| `xl` | 36rem (576px) |
| `2xl` | 42rem (672px) |
| `3xl` | 48rem (768px) |
| `4xl` | 56rem (896px) |
| `5xl` | 64rem (1024px) |
| `6xl` | 72rem (1152px) |
| `7xl` | 80rem (1280px) |
| `8xl` | 90rem (1440px) |
| `prose` | 65ch |
| `full` | 100% |
| `min` | min-content |
| `max` | max-content |
| `fit` | fit-content |

## 모서리 둥글기 (radii)

| 토큰 | 값 |
|------|-----|
| `xs` | 0.125rem |
| `sm` | 0.25rem |
| `md` | 0.375rem |
| `lg` | 0.5rem |
| `xl` | 0.75rem |
| `2xl` | 1rem |
| `3xl` | 1.5rem |
| `4xl` | 2rem |
| `full` | 9999px |

## 그림자 (shadows)

`2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`
`inset-2xs`, `inset-xs`, `inset-sm`

## 브레이크포인트

| 이름 | 값 |
|------|-----|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

## 줄 높이 (lineHeights)

`none` (1), `tight` (1.25), `snug` (1.375), `normal` (1.5), `relaxed` (1.625), `loose` (2)

## 자간 (letterSpacings)

`tighter` (-0.05em), `tight` (-0.025em), `normal` (0), `wide` (0.025em), `wider` (0.05em), `widest` (0.1em)

## 애니메이션

`spin`, `ping`, `pulse`, `bounce`

## 전환 지속 시간 (durations)

`fastest` (50ms), `faster` (100ms), `fast` (150ms), `normal` (200ms), `slow` (300ms), `slower` (400ms), `slowest` (500ms)

## 이징 (easings)

`default`, `linear`, `in`, `out`, `in-out`

## 블러 (blurs)

`xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`

## 종횡비 (aspectRatios)

`square` (1/1), `landscape` (4/3), `portrait` (3/4), `wide` (16/9), `ultrawide` (18/5), `golden` (1.618/1)

---
name: commit
description: 변경사항을 분석하여 conventional commit 메시지를 자동 생성하고 Graphite로 커밋합니다.
disable-model-invocation: true
---

# 커밋 스킬

변경사항을 분석하고, conventional commit 메시지를 생성하여, Graphite CLI로 커밋합니다.

## 워크플로우

### 1. 변경사항 분석

먼저 현재 상태를 확인합니다:

```bash
git status
git diff
git diff --cached
```

변경된 파일들을 읽고 어떤 종류의 변경인지 파악합니다.

### 2. 커밋 메시지 생성

Conventional Commits 형식을 사용합니다:

```
type(scope): 짧은 설명
```

**타입 선택 기준:**

| 타입 | 사용 시점 |
|------|----------|
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `docs` | 문서 변경 |
| `style` | 코드 포맷팅 (동작 변경 없음) |
| `refactor` | 리팩토링 (기능 변경 없음) |
| `perf` | 성능 개선 |
| `test` | 테스트 추가/수정 |
| `chore` | 빌드, 도구, 설정 변경 |
| `ci` | CI/CD 설정 변경 |

**스코프**: 변경의 영향 범위 (예: api, ui, auth, blog, config)
스코프가 명확하지 않거나 여러 영역에 걸치면 생략합니다.

**메시지 규칙:**
- 한글 또는 영어로 작성 (프로젝트 기존 커밋 스타일에 맞춤)
- 명령형으로 작성 ("add feature" not "added feature")
- 50자 이내로 간결하게
- 마침표 없이

### 3. 현재 브랜치 상태에 따른 분기

**trunk(main)에 있는 경우:** `gt create`로 새 브랜치 생성 + 커밋
```bash
gt create -am "type(scope): description"
```

**feature 브랜치에 있는 경우:** `gt modify`로 기존 커밋에 amend
```bash
gt modify -a
```
새로운 논리적 단위의 변경이면 `gt modify -cam "msg"`로 새 커밋을 추가합니다.

### 4. 인수 처리

`/commit` 뒤에 메시지가 있으면 그것을 커밋 메시지로 사용합니다.
없으면 변경사항을 분석하여 자동 생성합니다.

$ARGUMENTS가 있으면:
```bash
# trunk에서: gt create -am "$ARGUMENTS"
# feature 브랜치에서: gt modify -cam "$ARGUMENTS" 또는 gt modify -a
```

## 예시

**Example 1:**
변경: src/features/blog/PostCard.tsx 신규 생성
커밋: `feat(blog): add PostCard component`

**Example 2:**
변경: panda.config.ts에 커스텀 토큰 추가
커밋: `chore(config): add custom theme tokens to Panda CSS`

**Example 3:**
변경: src/app/page.tsx의 레이아웃 버그 수정
커밋: `fix(ui): correct home page layout alignment`

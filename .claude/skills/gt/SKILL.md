---
name: gt
description: Git 관련 작업(브랜치 생성, 커밋, push, PR, rebase, 동기화 등)을 수행할 때 raw git 명령어 대신 Graphite CLI(gt)를 사용합니다. 브랜치, 커밋, push, PR, rebase, sync, 머지 관련 작업에 자동 적용됩니다.
---

# Graphite CLI 사용 규칙

이 프로젝트는 Graphite CLI(`gt`)로 브랜치와 PR을 관리합니다.
Git 관련 쓰기 작업은 반드시 `gt` 명령어를 사용하세요.

## 필수: gt를 사용해야 하는 작업

| 작업 | raw git (사용 금지) | Graphite (사용) |
|------|-------------------|----------------|
| 브랜치 생성 + 커밋 | `git checkout -b` + `git commit` | `gt create -am "msg"` |
| 커밋 수정 | `git commit --amend` | `gt modify -a` |
| Push + PR 생성 | `git push` + `gh pr create` | `gt submit` |
| 전체 스택 Push | - | `gt ss` (= `gt submit --stack`) |
| Rebase | `git rebase` | `gt restack` |
| 브랜치 삭제 | `git branch -d` | `gt delete` |
| trunk 동기화 | `git pull && git rebase` | `gt sync` |
| 브랜치 이동 | `git checkout` | `gt checkout` |

## 허용: raw git을 사용해도 되는 작업 (읽기 전용)

`git status`, `git diff`, `git log`, `git stash`, `git add`

## 핵심 명령어 빠른 참조

자세한 명령어 레퍼런스는 [reference.md](reference.md)를 참조하세요.

### 브랜치 & 커밋
- `gt create -am "type: description"` — 새 브랜치 + 스테이지 + 커밋
- `gt modify -a` — amend + 자동 restack
- `gt modify -cam "msg"` — 새 커밋 추가

### Push & PR
- `gt submit` — 현재 브랜치까지 push + PR
- `gt ss` — 전체 스택 push + PR
- `gt submit -d` — 드래프트 PR
- `gt submit -n` — PR 메타데이터 편집 스킵
- **PR 생성 시 항상 `--assignee @me` 옵션을 추가하여 본인을 assign할 것**

### 내비게이션
- `gt checkout` / `gt co` — 브랜치 이동 (인터랙티브)
- `gt up` / `gt down` — 스택 위/아래 이동
- `gt top` / `gt bottom` — 스택 최상단/최하단
- `gt log` / `gt ls` — 스택 시각화

### 동기화 & 관리
- `gt sync` — trunk pull + restack + cleanup
- `gt restack` — 스택 전체 rebase
- `gt delete` — 브랜치 삭제

## 주요 워크플로우

### 단일 PR
```bash
gt create -am "feat: add feature"
gt submit
```

### 스택 PR
```bash
gt create -am "feat(api): add endpoint"
gt create -am "feat(ui): add page"
gt ss
```

### 리뷰 피드백 반영
```bash
gt checkout target-branch
# ... 수정 ...
gt modify -a
gt ss
```

### 충돌 해결
```bash
# 충돌 발생 시 → 수동 해결 → git add → gt continue
# 취소: gt abort
```

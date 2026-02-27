# Graphite CLI 전체 레퍼런스

## 설치 정보
- Path: `/opt/homebrew/bin/gt`
- Version: 1.7.20
- Trunk: `main`

## 전체 명령어 목록

### 브랜치 생성 & 커밋

#### `gt create` (alias: `gt c`)
새 브랜치를 현재 브랜치 위에 스택으로 생성하고 커밋합니다.

플래그:
- `-m, --message "msg"` — 커밋 메시지
- `-a, --all` — 모든 변경사항 스테이지 (untracked 포함)
- `-u, --update` — tracked 파일만 스테이지
- `-p, --patch` — 인터랙티브 hunk 선택
- `-i, --insert` — 현재 브랜치와 자식 사이에 삽입
- `--ai` — AI로 브랜치명/커밋메시지 자동 생성

```bash
gt create -am "feat: add feature"         # 가장 일반적
gt create my-branch -m "add feature"      # 브랜치명 직접 지정
gt create --insert -am "add middleware"    # 스택 중간에 삽입
```

#### `gt modify` (alias: `gt m`)
현재 브랜치의 커밋을 수정하고 자동으로 하위 브랜치를 restack합니다.

플래그:
- `-a, --all` — 모든 변경사항 스테이지
- `-c, --commit` — amend 대신 새 커밋 생성
- `-m, --message "msg"` — 커밋 메시지
- `-e, --edit` — 에디터로 커밋 메시지 편집
- `--into <branch>` — 특정 downstack 브랜치에 amend

```bash
gt modify -a                              # amend + restack (가장 일반적)
gt modify -cam "address feedback"         # 새 커밋 추가
gt modify --into feature-base -a          # 부모 브랜치에 amend
```

### Push & PR

#### `gt submit` (alias: `gt s`)
trunk부터 현재 브랜치까지 push하고 PR을 생성/업데이트합니다.

플래그:
- `-s, --stack` — 현재 브랜치의 하위도 포함 (전체 스택)
- `-d, --draft` — 드래프트 PR로 생성
- `-p, --publish` — 드래프트 PR 발행
- `-n, --no-edit` — PR 메타데이터 편집 스킵
- `-e, --edit` — 모든 PR 메타데이터 편집
- `-r, --reviewers "user1,user2"` — 리뷰어 지정
- `-m, --merge-when-ready` — 자동 머지 설정
- `--dry-run` — 미리보기만
- `-v, --view` — 제출 후 브라우저에서 열기
- `-c, --confirm` — 푸시 전 확인
- `-u, --update-only` — 이미 PR이 있는 브랜치만 업데이트

```bash
gt submit                    # 현재 브랜치까지 push + PR
gt ss                        # gt submit --stack (전체 스택)
gt submit -d                 # 드래프트 PR
gt submit -n                 # 메타데이터 편집 없이
gt submit -r "alice" -m      # 리뷰어 + 자동머지
gt submit --dry-run          # 미리보기
```

### 내비게이션

| 명령어 | 별칭 | 설명 |
|--------|------|------|
| `gt checkout [branch]` | `gt co` | 브랜치 이동. 인자 없으면 인터랙티브 선택 |
| `gt up [n]` | `gt u` | 자식 브랜치로 n단계 이동 |
| `gt down [n]` | `gt d` | 부모 브랜치로 n단계 이동 |
| `gt top` | `gt t` | 스택 최상단 (trunk에서 가장 먼 곳) |
| `gt bottom` | `gt b` | 스택 최하단 (trunk에 가장 가까운 곳) |
| `gt trunk` | — | trunk 브랜치로 이동 |

### 스택 시각화

| 명령어 | 별칭 | 설명 |
|--------|------|------|
| `gt log` | `gt l` | 스택 구조 시각화 (상세) |
| `gt log short` | `gt ls` | 간결한 브랜치 목록 |
| `gt log long` | `gt ll` | 전체 커밋 그래프 |
| `gt info` | — | 현재 브랜치 상세 정보 |

### 스택 관리

#### `gt restack` (alias: `gt r`)
스택의 각 브랜치를 부모 기준으로 rebase합니다.
- `--downstack` — 조상만
- `--upstack` — 후손만
- `--only` — 현재 브랜치만

#### `gt absorb` (alias: `gt ab`)
스테이지된 변경사항을 올바른 downstack 커밋에 자동 분배합니다.
```bash
git add file1.js file2.js
gt absorb                    # 자동 분배
gt absorb --dry-run          # 미리보기
```

#### `gt fold`
현재 브랜치를 부모에 머지합니다. `-k`로 현재 브랜치명 유지.

#### `gt move --onto <branch>`
현재 브랜치를 다른 부모로 이동합니다.

#### `gt split` (alias: `gt sp`)
브랜치를 분리합니다: `--by-commit`, `--by-file`, `--by-hunk`

#### `gt squash` (alias: `gt sq`)
현재 브랜치의 커밋을 하나로 합칩니다.

#### `gt reorder`
trunk과 현재 브랜치 사이의 브랜치 순서를 재정렬합니다.

#### `gt pop`
현재 브랜치를 삭제하되 working tree는 유지합니다.

### 브랜치 관리

| 명령어 | 별칭 | 설명 |
|--------|------|------|
| `gt delete` | `gt dl` | 브랜치 삭제. 자식은 부모로 restack |
| `gt rename` | `gt rn` | 브랜치 이름 변경 |
| `gt track` | `gt tr` | 기존 git 브랜치를 Graphite에 등록 |
| `gt untrack` | `gt utr` | Graphite 추적 해제 |
| `gt get [branch]` | — | 팀원의 스택을 remote에서 가져오기 |
| `gt freeze` | — | 브랜치 잠금 (수정 방지) |
| `gt unfreeze` | — | 브랜치 잠금 해제 |
| `gt undo` | — | 최근 Graphite 작업 취소 |

### 충돌 해결

| 명령어 | 별칭 | 설명 |
|--------|------|------|
| `gt continue` | `gt cont` | 충돌 해결 후 작업 재개 |
| `gt abort` | — | 진행 중인 작업 취소 |

```bash
# 충돌 발생 → 에디터에서 해결 → git add → gt continue
# 취소하려면: gt abort
```

### GitHub 연동

| 명령어 | 설명 |
|--------|------|
| `gt pr` | PR 페이지를 브라우저에서 열기 |
| `gt dash` | Graphite 대시보드 열기 |
| `gt merge` | trunk까지의 PR 머지 |

### 동기화

#### `gt sync`
모든 브랜치를 remote와 동기화합니다.
- trunk pull
- 열린 PR restack
- 머지/닫힌 브랜치 삭제 프롬프트

```bash
gt sync                      # 전체 동기화
gt sync --no-restack         # restack 스킵
gt sync -f                   # 확인 프롬프트 스킵
```

## 빌트인 별칭 요약

| 별칭 | 전체 명령어 |
|------|-----------|
| `gt c` | `gt create` |
| `gt m` | `gt modify` |
| `gt s` | `gt submit` |
| `gt ss` | `gt submit --stack` |
| `gt r` | `gt restack` |
| `gt co` | `gt checkout` |
| `gt l` | `gt log` |
| `gt ls` | `gt log short` |
| `gt ll` | `gt log long` |
| `gt u` | `gt up` |
| `gt d` | `gt down` |
| `gt t` | `gt top` |
| `gt b` | `gt bottom` |
| `gt dl` | `gt delete` |
| `gt rn` | `gt rename` |
| `gt tr` | `gt track` |
| `gt utr` | `gt untrack` |
| `gt sp` | `gt split` |
| `gt sq` | `gt squash` |
| `gt ab` | `gt absorb` |
| `gt cont` | `gt continue` |

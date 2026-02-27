---
name: linear
description: Linear MCP를 사용한 이슈 관리, 프로젝트 관리, 문서 관리 스킬. 이슈 생성, 상태 변경, 라벨 지정, 프로젝트 진행 관리, 마일스톤, 문서 작성 등 Linear 관련 작업에 사용합니다. "이슈 만들어", "버그 등록", "할 일 추가", "Linear에서", "프로젝트 현황", "이슈 목록", "티켓", "태스크" 등의 표현이 나오면 이 스킬을 사용하세요. 코드 작업 후 관련 이슈 상태 업데이트가 필요할 때도 활용합니다.
---

# Linear MCP 사용 가이드

이 프로젝트는 Linear MCP 서버를 통해 이슈/프로젝트/문서를 관리합니다.
Linear 관련 작업 시 `mcp__linear-server__*` 도구를 사용하세요.

## 워크스페이스 정보

| 항목 | 값 |
|------|-----|
| 팀 | Jungmini0601 (JUN) |
| 프로젝트 | 개인 블로그 개발 |
| 사용자 | 김정민 (novel) |
| 라벨 | Bug, Feature, Improvement |

## 도구 선택 가이드

### 이슈 관리
| 하고 싶은 것 | 사용할 도구 |
|-------------|-----------|
| 이슈 생성 | `save_issue` (title + team 필수) |
| 이슈 수정 | `save_issue` (id 필수) |
| 이슈 조회 | `get_issue` (상세) 또는 `list_issues` (목록) |
| 내 이슈 보기 | `list_issues` (assignee: "me") |
| 이슈 상태 목록 | `list_issue_statuses` (team 필수) |
| 댓글 달기 | `create_comment` |
| 댓글 보기 | `list_comments` |

### 프로젝트 관리
| 하고 싶은 것 | 사용할 도구 |
|-------------|-----------|
| 프로젝트 조회 | `get_project` 또는 `list_projects` |
| 프로젝트 수정 | `save_project` (id 필수) |
| 마일스톤 조회 | `list_milestones` / `get_milestone` |
| 마일스톤 생성 | `save_milestone` (project + name 필수) |

### 문서 관리
| 하고 싶은 것 | 사용할 도구 |
|-------------|-----------|
| 문서 생성 | `create_document` (title 필수) |
| 문서 수정 | `update_document` (id 필수) |
| 문서 조회 | `get_document` 또는 `list_documents` |

### 기타
| 하고 싶은 것 | 사용할 도구 |
|-------------|-----------|
| 라벨 목록 | `list_issue_labels` |
| 라벨 생성 | `create_issue_label` |
| 팀 정보 | `get_team` 또는 `list_teams` |
| 사용자 정보 | `get_user` ("me" 또는 이름/이메일) |
| 사이클 조회 | `list_cycles` (teamId 필수) |
| 첨부파일 | `create_attachment` / `get_attachment` / `delete_attachment` |
| 이미지 추출 | `extract_images` (마크다운에서 이미지 가져오기) |
| Linear 문서 검색 | `search_documentation` |

## 주요 워크플로우

### 이슈 생성

이슈 생성 시 team은 필수이며, 가능하면 라벨과 우선순위도 지정합니다.

**우선순위 값:** 0=None, 1=Urgent, 2=High, 3=Normal, 4=Low

```
save_issue:
  title: "이슈 제목"
  team: "JUN"
  description: "마크다운 설명"
  labels: ["Feature"]      # Bug, Feature, Improvement
  priority: 3               # Normal
  assignee: "me"
  project: "개인 블로그 개발"
```

### 이슈 상태 변경

상태 변경은 save_issue에서 state 필드를 사용합니다.
정확한 상태명이 필요하면 먼저 `list_issue_statuses`로 확인하세요.

```
save_issue:
  id: "이슈 ID"
  state: "In Progress"    # 또는 Done, Todo 등
```

### 코드 작업 후 이슈 업데이트

기능 구현이나 버그 수정을 완료한 후, 관련 이슈가 있다면 상태를 업데이트합니다.
이슈에 댓글로 작업 내용을 요약하면 히스토리 추적에 도움이 됩니다.

```
1. save_issue로 상태를 "Done" 또는 "In Review"로 변경
2. create_comment로 작업 요약 댓글 추가
```

### 프로젝트 현황 파악

프로젝트의 전체 상황을 파악할 때는 이슈 목록을 상태별로 조회합니다.

```
1. list_issues (project: "개인 블로그 개발") → 전체 이슈
2. list_issues (project: "개인 블로그 개발", state: "started") → 진행 중
3. list_milestones (project: "개인 블로그 개발") → 마일스톤 확인
```

### 문서 작성

프로젝트 관련 문서(기획서, 기술 스펙, 회의록 등)를 Linear에 저장합니다.

```
create_document:
  title: "문서 제목"
  content: "마크다운 내용"
  project: "개인 블로그 개발"
```

## 유의사항

- `mcp__linear-server__` 접두어를 사용합니다 (두 세트가 있지만 동일 기능)
- 이슈 생성 시 `team`은 **필수**입니다. 이 프로젝트에서는 `"JUN"` 사용
- `assignee`에 `"me"`를 사용하면 현재 사용자(김정민)에게 할당됩니다
- `list_issues`에서 `assignee: "null"`은 미할당 이슈를 필터링합니다
- 날짜 필터는 ISO-8601 형식 또는 duration(예: `-P1D` = 1일 전)을 사용합니다
- 설명(description)과 댓글(body)은 마크다운을 지원합니다
- 이슈 간 관계 설정: `blocks`, `blockedBy`, `relatedTo`, `duplicateOf` 사용

전체 도구 파라미터 레퍼런스는 [references/api.md](references/api.md)를 참조하세요.

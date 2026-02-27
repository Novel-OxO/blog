# Linear MCP API 전체 레퍼런스

모든 도구는 `mcp__linear-server__` 접두어를 사용합니다.

## 목차

1. [이슈](#이슈)
2. [댓글](#댓글)
3. [프로젝트](#프로젝트)
4. [마일스톤](#마일스톤)
5. [문서](#문서)
6. [라벨](#라벨)
7. [팀](#팀)
8. [사용자](#사용자)
9. [사이클](#사이클)
10. [첨부파일](#첨부파일)
11. [이미지](#이미지)
12. [문서 검색](#문서-검색)

---

## 이슈

### save_issue — 이슈 생성 또는 수정

`id`가 있으면 수정, 없으면 생성. 생성 시 `title` + `team` 필수.

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| id | string | 수정 시 | 이슈 ID |
| title | string | 생성 시 | 이슈 제목 |
| team | string | 생성 시 | 팀 이름 또는 ID |
| description | string | | 마크다운 내용 |
| assignee | string/null | | 사용자 ID/이름/이메일/"me". null로 제거 |
| state | string | | 상태 타입/이름/ID |
| priority | number | | 0=None, 1=Urgent, 2=High, 3=Normal, 4=Low |
| labels | string[] | | 라벨 이름 또는 ID 배열 |
| project | string | | 프로젝트 이름/ID/slug |
| cycle | string | | 사이클 이름/번호/ID |
| milestone | string | | 마일스톤 이름/ID |
| parentId | string/null | | 부모 이슈 ID. null로 제거 |
| dueDate | string | | 마감일 (ISO 형식) |
| estimate | number | | 이슈 추정값 |
| delegate | string/null | | 에이전트 이름/ID. null로 제거 |
| blocks | string[] | | 이 이슈가 차단하는 이슈 ID. 기존 대체 |
| blockedBy | string[] | | 이 이슈를 차단하는 이슈 ID. 기존 대체 |
| relatedTo | string[] | | 관련 이슈 ID. 기존 대체 |
| duplicateOf | string/null | | 중복 이슈 ID. null로 제거 |
| links | object[] | | [{url, title}] 형태의 링크 첨부 |

### get_issue — 이슈 상세 조회

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| id | string | O | 이슈 ID |
| includeRelations | boolean | | blocking/related/duplicate 관계 포함 |
| includeCustomerNeeds | boolean | | 고객 니즈 포함 |

### list_issues — 이슈 목록 조회

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| assignee | string/null | | "me", 사용자 ID/이름/이메일, "null"(미할당) |
| team | string | | 팀 이름/ID |
| project | string | | 프로젝트 이름/ID/slug |
| state | string | | 상태 타입/이름/ID |
| label | string | | 라벨 이름/ID |
| priority | number | | 우선순위 (0-4) |
| cycle | string | | 사이클 이름/번호/ID |
| delegate | string | | 에이전트 이름/ID |
| query | string | | 제목/설명 검색 |
| parentId | string | | 부모 이슈 ID |
| createdAt | string | | 생성일 필터 (ISO-8601 또는 duration) |
| updatedAt | string | | 수정일 필터 |
| includeArchived | boolean | | 아카이브 포함 (기본: true) |
| limit | number | | 최대 결과 수 (기본 50, 최대 250) |
| cursor | string | | 페이지네이션 커서 |
| orderBy | string | | 정렬: createdAt / updatedAt |

### list_issue_statuses — 팀의 이슈 상태 목록

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| team | string | O | 팀 이름/ID |

### get_issue_status — 이슈 상태 상세

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| id | string | O | 상태 ID |
| name | string | O | 상태 이름 |
| team | string | O | 팀 이름/ID |

---

## 댓글

### create_comment — 댓글 작성

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| issueId | string | O | 이슈 ID |
| body | string | O | 마크다운 내용 |
| parentId | string | | 부모 댓글 ID (답글용) |

### list_comments — 댓글 목록

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| issueId | string | O | 이슈 ID |

---

## 프로젝트

### save_project — 프로젝트 생성/수정

`id`가 있으면 수정, 없으면 생성. 생성 시 `name` + `team` 필수.

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| id | string | 수정 시 | 프로젝트 ID |
| name | string | 생성 시 | 프로젝트 이름 |
| team | string | 생성 시 | 팀 이름/ID |
| description | string | | 마크다운 설명 |
| summary | string | | 짧은 요약 (최대 255자) |
| color | string | | Hex 색상 |
| icon | string | | 이모지 아이콘 |
| lead | string/null | | 리드 사용자. null로 제거 |
| state | string | | 프로젝트 상태 |
| priority | integer | | 0=None, 1=Urgent, 2=High, 3=Medium, 4=Low |
| startDate | string | | 시작일 (ISO) |
| targetDate | string | | 목표일 (ISO) |
| labels | string[] | | 라벨 이름/ID |
| initiatives | string[] | | 이니셔티브 ID/이름 |

### get_project — 프로젝트 상세

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| query | string | O | 이름/ID/slug |
| includeMembers | boolean | | 멤버 포함 |
| includeMilestones | boolean | | 마일스톤 포함 |
| includeResources | boolean | | 리소스(문서, 링크, 첨부) 포함 |

### list_projects — 프로젝트 목록

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| team | string | | 팀 필터 |
| query | string | | 이름 검색 |
| state | string | | 상태 필터 |
| member | string | | 멤버 필터 ("me" 가능) |
| initiative | string | | 이니셔티브 필터 |
| createdAt | string | | 생성일 필터 |
| updatedAt | string | | 수정일 필터 |
| includeArchived | boolean | | 아카이브 포함 |
| includeMembers | boolean | | 멤버 포함 |
| includeMilestones | boolean | | 마일스톤 포함 |
| limit | number | | 최대 결과 수 |
| cursor | string | | 페이지네이션 |
| orderBy | string | | 정렬 |

### list_project_labels — 프로젝트 라벨 목록

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| name | string | | 이름 필터 |
| limit | number | | 최대 결과 수 |
| cursor | string | | 페이지네이션 |
| orderBy | string | | 정렬 |

---

## 마일스톤

### save_milestone — 마일스톤 생성/수정

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| project | string | O | 프로젝트 이름/ID/slug |
| id | string | 수정 시 | 마일스톤 이름/ID |
| name | string | 생성 시 | 마일스톤 이름 |
| description | string | | 설명 |
| targetDate | string/null | | 목표일 (ISO). null로 제거 |

### list_milestones — 마일스톤 목록

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| project | string | O | 프로젝트 이름/ID/slug |

### get_milestone — 마일스톤 상세

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| project | string | O | 프로젝트 이름/ID/slug |
| query | string | O | 마일스톤 이름/ID |

---

## 문서

### create_document — 문서 생성

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| title | string | O | 문서 제목 |
| content | string | | 마크다운 내용 |
| color | string | | Hex 색상 |
| icon | string | | 이모지 아이콘 |
| issue | string | | 연결할 이슈 ID/식별자 |
| project | string | | 연결할 프로젝트 |

### update_document — 문서 수정

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| id | string | O | 문서 ID/slug |
| title | string | | 제목 |
| content | string | | 마크다운 내용 |
| color | string | | Hex 색상 |
| icon | string | | 이모지 아이콘 |
| project | string | | 프로젝트 |

### get_document — 문서 조회

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| id | string | O | 문서 ID/slug |

### list_documents — 문서 목록

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| query | string | | 검색어 |
| projectId | string | | 프로젝트 ID 필터 |
| initiativeId | string | | 이니셔티브 ID 필터 |
| creatorId | string | | 작성자 ID 필터 |
| createdAt | string | | 생성일 필터 |
| updatedAt | string | | 수정일 필터 |
| includeArchived | boolean | | 아카이브 포함 |
| limit | number | | 최대 결과 수 |
| cursor | string | | 페이지네이션 |
| orderBy | string | | 정렬 |

---

## 라벨

### list_issue_labels — 이슈 라벨 목록

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| team | string | | 팀 필터 |
| name | string | | 이름 필터 |
| limit | number | | 최대 결과 수 |
| cursor | string | | 페이지네이션 |
| orderBy | string | | 정렬 |

### create_issue_label — 라벨 생성

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| name | string | O | 라벨 이름 |
| color | string | | Hex 색상 |
| description | string | | 설명 |
| isGroup | boolean | | 그룹 라벨 여부 |
| parent | string | | 부모 그룹 이름 |
| teamId | string | | 팀 UUID (생략 시 워크스페이스 라벨) |

---

## 팀

### list_teams — 팀 목록

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| query | string | | 검색어 |
| createdAt | string | | 생성일 필터 |
| updatedAt | string | | 수정일 필터 |
| includeArchived | boolean | | 아카이브 포함 |
| limit | number | | 최대 결과 수 |
| cursor | string | | 페이지네이션 |
| orderBy | string | | 정렬 |

### get_team — 팀 상세

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| query | string | O | UUID/key/이름 |

---

## 사용자

### list_users — 사용자 목록

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| query | string | | 이름/이메일 필터 |
| team | string | | 팀 필터 |
| limit | number | | 최대 결과 수 |
| cursor | string | | 페이지네이션 |
| orderBy | string | | 정렬 |

### get_user — 사용자 상세

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| query | string | O | ID/이름/이메일/"me" |

---

## 사이클

### list_cycles — 사이클 목록

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| teamId | string | O | 팀 ID |
| type | string | | current / previous / next |

---

## 첨부파일

### create_attachment — 첨부파일 생성

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| issue | string | O | 이슈 ID/식별자 |
| base64Content | string | O | Base64 인코딩된 파일 내용 |
| filename | string | O | 파일명 |
| contentType | string | O | MIME 타입 |
| title | string | | 첨부파일 제목 |
| subtitle | string | | 부제목 |

### get_attachment — 첨부파일 조회

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| id | string | O | 첨부파일 ID |

### delete_attachment — 첨부파일 삭제

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| id | string | O | 첨부파일 ID |

---

## 이미지

### extract_images — 마크다운에서 이미지 추출

이슈 설명, 댓글, 문서에 포함된 스크린샷이나 다이어그램을 가져옵니다.

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| markdown | string | O | 이미지가 포함된 마크다운 내용 |

---

## 문서 검색

### search_documentation — Linear 공식 문서 검색

Linear의 기능과 사용법에 대한 공식 문서를 검색합니다.

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| query | string | O | 검색어 |
| page | number | | 페이지 번호 (기본: 0) |

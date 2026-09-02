# 링크나무 (Linknamu) — Link in Bio 서비스

## 프로젝트 개요

Linktree처럼 내 모든 링크를 한 페이지에 모아두고 하나의 URL로 공유할 수 있는 서비스입니다.

- 타겟 사용자: SNS에 여러 링크를 공유하고 싶은 개인 창작자, 개발자, 프리랜서
- 출시 범위: 모바일 반응형 웹 서비스

자세한 요구사항은 [docs/PRD.md](docs/PRD.md), 레이아웃 참고 자료는 [docs/wireframe.png](docs/wireframe.png)를 참고하세요.

## 기술 스택

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- MongoDB Atlas (클릭 수 저장)
- Vercel (배포)

## 핵심 기능

- 프로필: 이름, 한 줄 소개, 원형 프로필 사진
- 링크 카드: SNS·블로그 링크를 클릭 가능한 카드로 나열
- 다크모드: 밝은 화면 / 어두운 화면 전환
- 클릭 수 집계: 링크별 클릭 횟수 기록

## 코드 규칙

- TypeScript 사용
- 컴포넌트는 `src/components/` 아래에 작성
- 환경 변수는 `.env.local`에 저장 (절대 커밋하지 않음) — 예: `MONGODB_URI`
- 모바일 우선 반응형 디자인

## Next.js 버전 관련 안내

@AGENTS.md

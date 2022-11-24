---
sidebar_position: 1
---

# 대대숲 컨벤션 시작하기

더 좋은 대대숲을 만들기위해 맞추는 규칙!!

- `apps/admin/page/index.tsx` → `localhost:3000/`
- `apps/admin/page/login.tsx` → `localhost:3000/login`
- `apps/user/page/index.tsx` → `localhost:3001/`

## 대대숲은 어떤 것으로 만들어졌을까

### `bamboo-frontend` 레파지토리를 살펴보자

```md title="bamboo"
- apps
- packages
- .eslintrc.js
- .gitignore
- README.md
- package.json
- turbo.json
- yarn.lock
```

여기서 알 수 있듯이 대대숲은 turborepo를 이용한 monorepo 아키텍처로 구성되어있다.

```md title="bamboo/apps"
- admin
- user
  - atom
  - components
  - hooks
  - pages
  - .eslintrc.js
  - README.md
  - next-env.d.ts
  - next.config.js
  - package.json
  - tsconfig.json
```

대대숲은 admin과 user 페이지가 각각 개발되어오고 있다.

### 기술 스택

- Lang → typescript
- 개발 프레임워크 → NextJS
- 구조 → turborepo를 이용한 monorepo 구조
- custom 패키지 → UI, custom-util
- ui → storybook
- 스타일 → styled-components
- 통신 → axios, react-query
- 상태 관리 → recoil
- 패키지 관리 → yarn
- 배포 → 미정

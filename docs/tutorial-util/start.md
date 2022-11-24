---
sidebar_position: 1
---

# Tutorial Intro

## 시작하기

대나무 패키지를 시작해보자

### 기본적으로 필요한 것

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - 이것을 설치할 때 npm 혹은 yarn을 사용하여 설치해야한다.

## 패키지 설치하기

자신의 원하는 패키지를 확인한 후 package.json에 추가합니다.

package.json

```json
...
"dependencies": {
  ...
  [package이름]: "*",
  ...
  },
...
```

terminal

```bash
yarn add
```

package.json에 입력한 패키지이름과 같은 대나무 패키지에 패키지가 설치될 것이다.

## 최신 버전 유지

이 패키지는 자동으로 버전이 업데이트 될 것이다.
만약 버전이 안맞다면 현재 깃허브의 버전과 로컬의 버전이 다를 것이다.

```bash
git pull origin [브랜치이름]
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.

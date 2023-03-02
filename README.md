Today I Learned
==================
> 나는 오늘 무엇을 배웠는가?

## Table of Contents
1. [Description](#description)
1. [Environment](#environment)
1. [Prerequisite](#prerequisite)
1. [Structure](#structure)
1. [License](#license)

## Description
> 서술 - 프로젝트 주요 설명(목적, 유의사항 등)
- 모든 프로젝트에 사용
- 사용성 보장(누구나 쉽게 사용 가능)
- 재사용성 향상
- UI 파편 최소화

## Environment
> 환경 - 프로젝트 환경 구성의 정보
- 형태: Responsive(Adaptive), PC(Mobile) Web, Hybrid App
- 대상: OS(Windows, MacOS), Browser(Chrome, Safari, Firefox, Internet Explorer 11)
- Git(latest version)
- Node.js LTS (version - 16.x.x 이상)
- Webpack(version - 5.x.x)

## Prerequisite
> 전제조건 - 공통으로 사용하는 패키지 및 프로젝트 의존성에 해당하는 패키지 정보

### dependencies
- jquery: ^3.6.0

### devDependencies
- @babel/core: ^7.17.2
- @babel/preset-env: ^7.16.11
- @squoosh/lib: ^0.4.0
- autoprefixer: ^10.4.4
- babel-loader: ^8.2.3
- copy-webpack-plugin: ^10.2.4
- css-loader: ^6.6.0
- css-minimizer-webpack-plugin: ^3.4.1
- handlebars: ^4.7.7
- handlebars-loader: ^1.7.1
- html-webpack-plugin: ^5.5.0
- image-minimizer-webpack-plugin: ^3.2.3
- mini-css-extract-plugin: ^2.5.3
- node-sass: ^7.0.1
- postcss: ^8.4.12
- postcss-loader: ^6.2.1
- postcss-scss: ^4.0.3
- sass-loader: ^12.4.0
- svg-sprite-loader: ^6.0.11
- terser-webpack-plugin: ^5.3.1
- webpack: ^5.68.0
- webpack-cli: ^4.9.2
- webpack-dev-server: ^4.7.4

### Setup
```sh
// Packages Install
npm install

// Bundle - Public(assets, pages, etc.)
npm run build

// Dev Server - http://localhost:9000/
npm run dev
```

## Structure
> 구조 - 디렉터리, 파일 등에 대한 정보
- 노션의 Structure 페이지 내용과 동일하게 작성
- 수정 시 Structure(Notion) 페이지, README.md(Git - Design System base) 동기화

## License
> 라이선스 - 라이브러리, 상용 컴포넌트, 플러그인 등에 대한 정보
- 프로젝트에 사용된 Bundle, Loader, Core, Library, Plugin 은 MIT, ISC 라이선스의 규약을 따르고 있습니다.

**[⬆ back to top](#table-of-contents)**
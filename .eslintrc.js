module.exports = {
  env: {
    // 스크립트가 실행되는 환경에 대한 정보
    browser: true, // browser 전역변수
    commonjs: true, // commonJS 전역변수 (require / module.exports 사용)
    es2021: true, // ECMAScript 2021 전역변수 = ES12
    node: true, // Node.js global variables and Node.js scoping.
  },
  extends: ['eslint:recommended', 'prettier'], // 순서대로 덮어쓰면서 적용된다
  parserOptions: {
    ecmaVersion: 2022, // ECMAScript 2022 = ES13 버전
  },
  rules: {
    'no-console': 'warn', // console 전역변수의 사용에 경고
    'valid-typeof': 'error', // typeof 비교에 올바른 문자열 사용 못하면 에러
    eqeqeq: 'error', // 비교 연산에 ==, !=을 사용하면 에러
    'no-unused-vars': 'warn', // 사용되지 않은 변수가 있으면 에러
    'no-shadow': 'error', // 하위 스코프에서 상위 스코프의 변수명 쓰면 에러
    'no-var': 'error', // var 사용하면 에러
  },
};

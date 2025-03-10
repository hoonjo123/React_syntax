// math 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// module.exports = {
//   add: add,
//   sub: sub,
// };


//ES모듈을 통해 내보내기
export { add, sub };
// 또는 함수앞에 export를 써도 된다.
export function multiply(a, b) {
  return a * b;
}

// 또는!! export default를 사용할 수 있다.
export default function divide(a, b) {
  return a / b;
}
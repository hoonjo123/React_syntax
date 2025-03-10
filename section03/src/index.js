//require을 통해 math모듈을 가져올 수 있다.
//하지만 우리는 ES를 통해 가져올것이다.
import { add, multiply, sub } from './math.js';
//default funtion으로 정의했기 때문에 이름을 내
//맘대로 정할 수 있다.
import div from './math.js';

//동일한 경로에 있는 파일들을 한번에 불러와보자
// import div, { add, multiply, sub } from './math.js';

//라이브러리 불러오기
import randomColor from 'randomcolor';

// const moduleData = require('./math');
// console.log(moduleData.add(1, 2)); //3
// console.log(moduleData.sub(1, 2)); //-1

//또는 구조분해 할당을 사용해서 더욱 간결하게 사용할 수 있다.

// const { add, sub } = require('./math');
console.log(add(1, 2)); //3
console.log(sub(1, 2)); //-1

//math.js에서 multiply함수를 추가했으므로 사용할 수 있다.
console.log(multiply(1, 2)); //2

//math.js에서 export default로 divide함수를 추가했으므로 사용할 수 있다.
console.log(div(4, 2)); //2


//랜덤컬러 라이브러리 출력해보기
const color = randomColor();
console.log(color); //#148ecc , #cc5b53 ... 이런식으로 잘 불러와짐
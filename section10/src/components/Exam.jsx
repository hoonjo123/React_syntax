import { useReducer } from 'react';

//변환기
// 상태를 실제로 변환시키는 변환기 역할
// action에는 displatch 객체가 들어가게 된다.
const reducer = (state, action) => {
  console.log(state, action);
  // if (action.type === 'INCREASE') {
  //   return state + action.data;
  // } else if (action.type === 'DECREASE') {
  //   return state - action.data;
  // }
  switch (action.type) {
    case 'INCREASE':
      return state + action.data;
    case 'DECREASE':
      return state - action.data;
    default:
      return state;
  }
};

const Exam = () => {
  //dispatch : 발송하다, 급송하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickMinus = () => {
    dispatch({
      type: 'DECREASE',
      data: 1,
    });
  };

  const onClickPlus = () => {
    //인수 : 상태가 어떻게 변화되길 원하는지
    // -> 액션 객체
    dispatch({
      type: 'INCREASE',
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;

import './Editor.css';
import EmotionItem from './EmotionItem';
import Button from './Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const emotionList = [
  {
    emotionId: 1,
    emotionName: '완전 좋음',
  },
  {
    emotionId: 2,
    emotionName: '좋음',
  },
  {
    emotionId: 3,
    emotionName: '그럭저럭',
  },
  {
    emotionId: 4,
    emotionName: '나쁨',
  },
  {
    emotionId: 5,
    emotionName: '끔찍함',
  },
];
const Editor = ({ initData, onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: '',
  });
  const nav = useNavigate();

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  //input은 Date를 인식하지 못함 -> String으로 변환하는 함수가 필요
  const getStringedDate = (targetDate) => {
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    if (month < 10) {
      month = `0${month}`;
    }
    if (date < 10) {
      date = `0${date}`;
    }
    return `${year}-${month}-${date}`;
  };

  //사용자가 입력한 날짜도 받아올 수 있도록 구현
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'createdDate') {
      value = new Date(value);
    }

    setInput({
      ...input,
      //e.target.value로만 저장하면 date로 들어가는게 아니라 문자열로 저장됨
      //name과 value를 새롭게 선언하고 조건문 사용해서 데이트객체로 변경필요
      [name]: value,
    });
  };

  //Edit페이지와 create페이지가 공통 컴포넌트를 사용하고 있기 때문에
  //요청에 따라 다른 페이지를 처리해주는 함수가 필요하다.
  const onClickSubmitButton = () => {
    //props로 받은 onSubmit호출
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              //기존에 컴포넌트들을 그냥 나열하도록 구현했기 때문에
              //이벤트를 직접 구현해주어야 한다.
              onClick={() =>
                onChangeInput({
                  //컴포넌트이기에 이벤트 객체가 자동으로 전달되지 않는다
                  //별도의 이벤트 객체 생성 필요
                  target: {
                    name: 'emotionId',
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>

      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땟나요?"
        />
      </section>

      <section className="button_section">
        <Button onClick={() => nav(-1)} text={'취소하기'} />
        <Button
          onClick={onClickSubmitButton}
          text={'작성완료'}
          type={'POSITIVE'}
        />
      </section>
    </div>
  );
};

export default Editor;

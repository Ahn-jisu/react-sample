import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
// state 만드는법
  let [글제목,글제목변경] = useState(['React 개발 1일차','React 개발 2일차','React 개발 3일차'])
  let [좋아요, 좋아요변경] = useState(0);
  function 제목바꾸기() { 
    var newArray = [...글제목]; 
    if(newArray[0]==='React 개발 1일차'){
      newArray[0] = 'Vue 개발 1일차';
    }
    else{
      newArray[0] = 'React 개발 1일차';
    }
    글제목변경(newArray);
  }
  function textlist(){
    var newArray = [...글제목];
    newArray.sort();
    textlist(newArray);
  }


  return (
    <div className="App">
      <div className="black-nav">
        <div> 안쑥이 개발 BLOG</div>
      </div>
      <button onClick={textlist}>글정렬하기</button>
      <div className="list">
        <h3> {글제목[0]} <span onClick={ ()=>{좋아요변경(좋아요 + 1)} }>👍🏻</span> {좋아요} </h3><button onClick={제목바꾸기}>글제목변경</button>
        <p> 2022년 1월 27일</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {글제목[1]}</h3>
        <p> 2022년 1월 27일</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {글제목[2]}</h3>
        <p> 2022년 1월 27일</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
// state 만드는법
  let [글제목,글제목변경] = useState(['React 개발 1일차','React 개발 2일차','React 개발 3일차'])

  return (
    <div className="App">
      <div className="black-nav">
        <div> 안쑥이 개발 BLOG</div>
      </div>
      <div className="list">
        <h3> {글제목[0]}</h3>
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

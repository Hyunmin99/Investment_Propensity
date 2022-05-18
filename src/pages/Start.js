import React from 'react';
import '../App.css';
import NextButton from "../component/NextButton";
import QNA from '../content/QNA'

function Start() {
  const Res = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false
  }
  const dummy_Res = {
    1: 4,
    2: 3,
    3: 3,
    4: 4,
    5: [1, 12, 13],
    6: 3,
    7: [1, 6],
    8: [2],
    9: 3,
    10: 2,
    11: 3,
    12: 4,
    13: 4,
    14: 2,
    15: 1,
    16: 2,
    17: 2290,
    18: 4
  }
  const dummy_Res2 = {
    1: 4,
    2: 3,
    3: 3,
    4: 4,
    5: [1, 12, 13],
    6: 3,
    7: [1, 6],
    8: [2],
    9: 3,
    10: 2,
    11: 3,
    12: 4,
    13: 4,
    14: 2,
    15: 1,
    16: 2,
    17: 32000,
    18: 4
  }
  QNA.map(qna => (
    qna.Answers.map(answer => (
      answer.State = false
    ))
  ));
  QNA.map(qna => (
    qna.status = false
  ));
  return (
    <div className="App">
      <div className="Start">
        <div
          style={{
            fontSize: "0.9rem",
            fontWeight: "400",
            marginBottom: "0.3rem",
          }}
        >
          돈 쓸어담기 1단계
        </div>
        <div style={{ fontSize: "1.2rem", fontWeight: "700" }}>
          나의 투자 성향 확인하기
        </div>
        <div className="Intro">
          <div className="Typo">
            투자 성향
            <br />
            테스트
          </div>
        </div>
        {/* <h5 style={{marginBottom: '0'}}>Press button to start</h5> */}
        <NextButton Path={"/q1"} Res={Res} Text={"테스트 시작하기"} />
        <NextButton
          Path={"/result"}
          Res={dummy_Res}
          Text={"결과로 바로 이동 (천)"}
        />
        <NextButton
          Path={"/result"}
          Res={dummy_Res2}
          Text={"결과로 바로 이동 (억)"}
        />
        <NextButton Path={"/t"} Res={dummy_Res} Text={"테스트"} />
      </div>
    </div>
  );
}
export default Start;

import React from "react";
import "../App.css";
import Header from "../component/Header";
import ASCORE from "../content/ASCORE";
import CLASSIFY from "../content/CLASSIFY";
import RESULT from "../content/RESULT";
import FINAL_TYPE from "../content/FINAL_TYPE";
import NextButton from "../component/NextButton";
import Graph from "../component/Graph";
import CircularBar from "../component/CircularBar";

function Final_Result(props) {
  const Res = props.location.state.Res;
  console.log(Res);

  function formula_Index(Score) {
    const Index =
      Score >= 100
        ? 4 - parseInt(99 / 25)
        : Score < 0
        ? 4 - parseInt(1 / 25)
        : 4 - parseInt(Score / 25);
    console.log("******formula_Index", Score, Index);

    return Index;
  }

  //Type: PERIOD, PURPOSE, TOLERANCE, LITERACY, EXPERIENCE
  function find_ResultData(Type, Index) {
    console.log("******find_ResultData", Type, Index);
    return RESULT[Type][RESULT[Type].findIndex((data) => data.Index === Index)];
  }

  function getScore(questionID) {
    const Tdata = ASCORE[ASCORE.findIndex((data) => data.id === questionID)];
    if (Tdata.Type === "Single") {
      return Tdata.Answer[
        Tdata.Answer.findIndex((d) => d.id === Res[questionID])
      ].Score;
    } else if (Tdata.Type === "Multi") {
      console.log(Tdata, Res[questionID]);
      let Score = 0;

      for (let i = 0; i < Res[questionID].length; i++) {
        Score =
          Score +
          Tdata.Answer[
            Tdata.Answer.findIndex((d) => d.id === Res[questionID][i])
          ].Score;
      }
      return Score;
    }
  }

  const PERIOD = find_ResultData("PERIOD", getScore(1));
  const PURPOSE = find_ResultData(
    "PURPOSE",
    formula_Index((getScore(2) + getScore(7)) / 2)
  );
  const TOLERANCE = find_ResultData(
    "TOLERANCE",
    formula_Index(getScore(3) + getScore(4) + getScore(8))
  );
  const LITERACY = find_ResultData("LITERACY", formula_Index(getScore(5) + getScore(10) + getScore(11)));
  const EXPERIENCE = find_ResultData(
    "EXPERIENCE",
    formula_Index((getScore(6) + getScore(13))/2)
  );
  const AGE = find_ResultData("AGE", getScore(14));
  const INCOME = find_ResultData("INCOME", getScore(15));
  const PROPERTY = find_ResultData("PROPERTY", getScore(17));

  //토탈 점수 계산
  const Score =
    PURPOSE.Value +
    TOLERANCE.Value +
    LITERACY.Value +
    EXPERIENCE.Value +
    PERIOD.Value +
    AGE.Value +
    INCOME.Value +
    PROPERTY.Value;

  console.log(Score);
    
  const Class = CLASSIFY[CLASSIFY.findIndex((c) => c.id === 2)];
  function SetType(Score, PURPOSE, TOLERANCE) {
    const Classify =
      Class.공격투자형[0] <= Score && Score <= Class.공격투자형[1]
        ? "공격투자"
        : Class.적극투자형[0] <= Score && Score <= Class.적극투자형[1]
        ? "적극투자"
        : Class.위험중립형[0] <= Score && Score <= Class.위험중립형[1]
        ? "위험중립"
        : Class.안정추구형[0] <= Score && Score <= Class.안정추구형[1]
        ? "안정추구"
        : Class.안정형[0] <= Score && Score <= Class.안정형[1]
        ? "안정형"
        : console.log("No Result");
    
    const TypeNum =
      Classify === "안정형"
        ? ""
        : TOLERANCE.Grade === 1 || PURPOSE > TOLERANCE
        ? "Type1 "
        : PURPOSE === TOLERANCE
        ? "Type2 "
        : PURPOSE < TOLERANCE ? "Type3 " : console.log("Type 체크 에러");
    const Char = Classify + " " + TypeNum + "캐릭터";
    console.log('Classify', Classify);
    console.log('TypeNum', TypeNum);
    return Char;
  }

  const Type =
    FINAL_TYPE[
      FINAL_TYPE.findIndex(
        (type) => type.Char === SetType(Score, PURPOSE.Grade, TOLERANCE.Grade)
      )
    ];
    
  console.log(SetType(Score, PURPOSE.Grade, TOLERANCE.Grade));


  const MONEY = Res[16];
  const MIN = Type.Min;
  const MAX = Type.Max;
  const REV = Type.Revenue;

  return (
    <div className="App">
      <Header history={props.history} />
      <div className="Result">
        <div>
          <div>
            <div className="Quest">
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  fontFamily: "DungGeunMo",
                }}
              >
                Quest
              </div>
              <div>{PERIOD.Quest}</div>
            </div>
            {/* <img className='TypeImage'></img> */}
            <div className="TypeImage"></div>
            <h1
              style={{
                color: "#fefefe",
                fontFamily: "DungGeunMo",
                padding: "0.5rem",
              }}
            >
              {Type.Char}
            </h1>
          </div>

          <div className="Explain">
            <h3 style={{ margin: "0", paddingBottom: "0.8rem" }}>
              😎 당신의 캐릭터는...
            </h3>
            <div className="CharInfo">
              {/* 첫번째 칼럼: 등급표 */}
              <div className="Table">
                <CircularBar Type="투자 목적" Grade={PURPOSE.Grade} />
                <CircularBar Type="위험 감내도" Grade={TOLERANCE.Grade} />
                <CircularBar Type="금융 이해도" Grade={LITERACY.Grade} />
                <CircularBar Type="투자 경험" Grade={EXPERIENCE.Grade} />
              </div>
              {/* 2번째 칼럼: 아이템 */}
              <div className="Bag">
                <div className="Items">
                  <div className="ItemImg">
                    <img
                      width={42}
                      height={42}
                      src={LITERACY.Img}
                      alt="무기 이미지"
                    />
                  </div>
                  <div
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginLeft: "0.5rem",
                    }}
                  >
                    <b>{LITERACY.Weapon}</b> <br />
                    {LITERACY.Level}
                  </div>
                </div>
                <div className="Items">
                  <div className="ItemImg">
                    <img
                      width={42}
                      height={42}
                      src={TOLERANCE.Img}
                      alt="방패 이미지"
                    />
                  </div>
                  <div
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginLeft: "0.5rem",
                    }}
                  >
                    <b>{TOLERANCE.Shield}</b> <br />
                    {TOLERANCE.Level}
                  </div>
                </div>
              </div>
            </div>
            {/* 캐릭터 설명 */}
            <div>
              <p style={{ lineHeight: "1.5rem" }}>{Type.Content}</p>
            </div>
            {/* 예상 수익률 그래프 */}
            <div style={{ marginTop: "1rem" }}>
              <h3 style={{ margin: "0.3rem 0" }}>📈 예상 수익률 그래프</h3>
              <Graph P={MONEY} Min={MIN} Max={MAX} Rev={REV} />
            </div>
          </div>
        </div>
        <NextButton Path={"/"} Text={"테스트 다시하기"} />
        <div
          style={{
            fontSize: "0.8rem",
            color: "#A7A8A3",
            textAlign: "left",
            padding: "1rem",
          }}
        >
          - 칼과 방패는 각각 금융이해도와 위험감내도로 정해집니다. <br />
          - 현재 가치는 미래의 가치를 현재를 기준으로 환산한 금액입니다. <br />
          - 현재 가치는 물가상승률(2021년 기준 2%)을 반영해 계산됩니다.
          <br />
        </div>
      </div>
    </div>
  );
}

export default Final_Result;

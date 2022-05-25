import React from "react";
import "../App.css";
import Header from "../component/Header";
import RESULT from "../content/RESULT";
import TYPE from "../content/FIRST_TYPE";
import NextButton from "../component/NextButton";
import CircularBar from "../component/CircularBar";
import QNA from "../content/QNA";

function Test(props) {
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
    const Tdata = QNA[QNA.findIndex((data) => data.questionID === questionID)];
    if (Tdata.Type === "SingleSel") {
      return Tdata.Answers[Tdata.Answers.findIndex((d) => d.id === Res[questionID])].Score;
    }
    else if(Tdata.Type === "MultiSel") {
        console.log(Tdata, Res[questionID]);
        let Score = 0;

        for (let i = 0; i < Res[questionID].length; i++) {
            Score = Score + Tdata.Answers[Tdata.Answers.findIndex((d) => d.id === Res[questionID][i])].Score;
        }
        return Score;
    }

  }

  const PERIOD = find_ResultData("PERIOD", Res[1]);
  const PURPOSE = find_ResultData("PURPOSE", formula_Index(getScore(2)));
  const TOLERANCE = find_ResultData(
    "TOLERANCE",
    formula_Index((getScore(3) + getScore(4))/2)
  );
  const LITERACY = find_ResultData("LITERACY", formula_Index(getScore(5)))
  const EXPERIENCE = find_ResultData("EXPERIENCE", formula_Index(getScore(6)));

  console.log(PERIOD, PURPOSE, TOLERANCE, LITERACY, EXPERIENCE);

//   투자 성향 점수 계산
    const Score =
      PURPOSE.Value +
      TOLERANCE.Value +
      LITERACY.Value +
      EXPERIENCE.Value;

    function SetType() {
      //투자 성향 캐릭터 Index 세팅
      const idx =
        Score >= 15
          ? 0
          : 13 <= Score && Score < 15
          ? 1
          : 11 <= Score && Score < 13
          ? 2
          : 7 <= Score && Score < 11
          ? 3
          : Score < 7
          ? 4
          : console.log("No Result");
      // console.log("투자 성향 점수: ", Score, "\n투자 성향 Index: ", idx);
      return idx;
    }

    const Res_Type = TYPE[SetType()];

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
              {Res_Type.Char}
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
                    <b>{TOLERANCE.Shield}</b> <br />
                    {TOLERANCE.Level}
                  </div>
                </div>
              </div>
            </div>
            {/* 캐릭터 설명 +  */}
            <div><p>{Res_Type.Content}</p></div>
          </div>
        </div>
        <NextButton Path={"/q7"} Res={Res} Text={"테스트 이어하기"} />
        <NextButton Path={"/"} Text={"테스트 다시하기"} />
        <div
          style={{
            fontSize: "0.8rem",
            color: "#A7A8A3",
            textAlign: "left",
            padding: "1rem",
          }}
        >
          - 칼과 방패는 각각 금융이해도와 위험감내도로 정해집니다. <br />-
          테스트 이어하기 버튼을 눌러 더 정확한 투자성향을 확인할 수 있습니다.
        </div>
      </div>
    </div>
  );
}

export default Test;

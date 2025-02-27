import React, { useState } from "react";
import "../App.css";
import Header from "../component/Header";
import QNA from "../content/QNA";
import CLASSIFY from "../content/CLASSIFY";
import FINAL_TYPE from "../content/FINAL_TYPE";
import RESULT from "../content/RESULT";
import CircularBar from "../component/CircularBar";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import GBIGraph from "../component/GBIGraph";
import Retirement from "../component/Retirement";
import ProfitGraph from "../component/ProfitGraph";
import NextButton from "../component/NextButton";

function Final_Result(props) {
  const Res = props.location.state.Res;
  console.log(Res);

  //투자목적, 위험감내도, 금융이해도, 투자경험 인덱스 (등급, 점수 연결)
  function formula_Index(Score) {
    const Index =
      Score >= 100
        ? 4 - parseInt(99 / 25)
        : Score < 0
        ? 4 - parseInt(1 / 25)
        : 4 - parseInt(Score / 25);
    console.log("**formula_Index", Score, Index);

    return Index;
  }

  //각 문항 점수 받아오기: 
  function getScore(questionID) {
    const Tdata = QNA[QNA.findIndex((data) => data.questionID === questionID)];

    if (Tdata.Type === "SingleSel") {
      return Tdata.Answers[
        Tdata.Answers.findIndex((d) => d.id === Res[questionID])
      ].Score;
    } else if (Tdata.Type === "MultiSel") {
      let Score = 0;

      for (let i = 0; i < Res[questionID].length; i++) {
        Score =
          Score +
          Tdata.Answers[
            Tdata.Answers.findIndex((d) => d.id === Res[questionID][i])
          ].Score;
      }
      return Score;
    }
  }

  function find_ResultData(Type, Index) {
    console.log("**find_ResultData", Type, Index);
    return RESULT[Type][
      RESULT[Type].findIndex((data) => data.Index === Index)
    ];
  }

  const PERIOD = find_ResultData("PERIOD", Res[1]);
  const PURPOSE = find_ResultData(
    "PURPOSE",
    formula_Index((getScore(2) + getScore(7)) / 2)
  );
  const TOLERANCE = find_ResultData(
    "TOLERANCE",
    formula_Index((getScore(3) + getScore(4))/2 + getScore(8))
  );
  const LITERACY = find_ResultData(
    "LITERACY",
    formula_Index(getScore(5) + getScore(10) + getScore(11))
  );
  const EXPERIENCE = find_ResultData(
    "EXPERIENCE",
    formula_Index((getScore(6) + getScore(13)) / 2)
  );
  const AGE = find_ResultData("AGE", Res[14]);
  const INCOME = find_ResultData("INCOME", Res[15]);
  const PROPERTY = find_ResultData("PROPERTY", Res[16]);
  // 보유효과
  const STATUSQUO = find_ResultData("STATUSQUO", Res[12]);
  // 보유효과
  const ENDOWMENT = find_ResultData("ENDOWMENT", Res[9]);
  // 손실회피
  let LOSSAVERSION = -1;
  if (TOLERANCE.Grade === 1) {
    LOSSAVERSION = find_ResultData("LOSSAVERSION", 4);
  } else {
    for (let i = 0; i < RESULT.LOSSAVERSION.length; i++) {
      if (
        RESULT.LOSSAVERSION[i].Range.includes(
          PURPOSE.Grade - TOLERANCE.Grade
        )
      )
        LOSSAVERSION = find_ResultData("LOSSAVERSION", i + 1);
    }
  }
  // 성과추종
  let PERFORMANCE = -1;
  for (let i = 0; i < RESULT.PERFORMANCE.length; i++) {
    if (RESULT.PERFORMANCE[i].Range.includes(Res[9] - Res[4]))
      PERFORMANCE = find_ResultData("PERFORMANCE", i + 1);
  }
  // 자기과신
  const OVERCONFIDENCE = find_ResultData("OVERCONFIDENCE", Res[12]);

  const BEHAVIOR = [
    { column: "현상유지", value: 5 - STATUSQUO.Grade, fullMark: 5 },
    { column: "보유효과", value: 5 - ENDOWMENT.Grade, fullMark: 5 },
    { column: "손실회피", value: 5 - LOSSAVERSION.Grade, fullMark: 5 },
    { column: "성과추종", value: 5 - PERFORMANCE.Grade, fullMark: 5 },
    { column: "자기과신", value: 5 - OVERCONFIDENCE.Grade, fullMark: 5 },
  ];
  console.log(BEHAVIOR);
  const tick = [0, 1, 2, 3, 4];
  const formatTick = (tickItem) => {
    // if (tickItem)
    // console.log(tickItem)
    if (tickItem === 0) return "";
    else return `${5-tickItem}`
  }

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

  console.log("투자성향점수",Score);

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
        : PURPOSE < TOLERANCE
        ? "Type3 "
        : console.log("Type 체크 에러");
    const Char = Classify + " " + TypeNum + "캐릭터";
    return Char;
  }

  const Type =
    FINAL_TYPE[
      FINAL_TYPE.findIndex(
        (type) => type.Char === SetType(Score, PURPOSE.Grade, TOLERANCE.Grade)
      )
    ];
  // const MONEY = Res[16];
  const MIN = Type.Min;
  const MAX = Type.Max;
  const PRO = Type.Profit;

  //Tab
  const [graph, setGraph] = useState(0);

  const handleChange = (event, newValue) => {
    setGraph(newValue);
  };

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
            {/* <div className="TypeImage"></div> */}
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
            <h3 style={{ margin: "0", paddingBottom: "0.8rem" }}>
              🤔 캐릭터의 특징은...
            </h3>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                // 밑에 2줄 Devider
                borderBottom: "solid 1px #e0e0e0",
                paddingBottom: "1.2rem",
              }}
            >
              <RadarChart
                outerRadius={60}
                width={260}
                height={160}
                style={{ display: "flex" }}
                data={BEHAVIOR}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="column" style={{ fontSize: "14px" }} />
                <PolarRadiusAxis
                  angle={90}
                  ticks={tick}
                  tickFormatter={formatTick}
                  style={{ fontSize: "12px" }}
                />
                <Radar
                  name=""
                  dataKey="value"
                  stroke="#FFB950"
                  fill="#FFB950"
                  fillOpacity={0.6}
                />
              </RadarChart>
              <div className="Behavior">
                <b>현상유지</b>: {STATUSQUO.Grade}등급 <br />
                <b>보유효과</b>: {ENDOWMENT.Grade}등급 <br />
                <b>손실회피</b>: {LOSSAVERSION.Grade}등급 <br />
                <b>성과추종</b>: {PERFORMANCE.Grade}등급 <br />
                <b>자기과신</b>: {OVERCONFIDENCE.Grade}등급
              </div>
            </div>
            {/* Tab - 그래프 표시 */}
            <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
              <Tabs value={graph} onChange={handleChange} variant="fullWidth">
                <Tab label="예상 수익률" />
                <Tab label="단기 GBI" />
                <Tab label="은퇴 계산기" />
              </Tabs>
            </Box>
            {graph === 0 ? (
              <ProfitGraph Min={MIN} Max={MAX} Pro={PRO} />
            ) : graph === 1 ? (
              <GBIGraph Min={MIN} Max={MAX} Pro={PRO} />
            ) : (
              graph === 2 && (
                <Retirement Pro={PRO} Min={MIN} Max={MAX} Age={AGE.Average} />
              )
            )}
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

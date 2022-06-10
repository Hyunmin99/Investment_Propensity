import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { Box, InputAdornment, Input } from "@mui/material";
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Area,
  Line,
} from "recharts";
import { CompoundContribution, RCompoundContribution } from "../calculate/Calculator";
import { ROUNDTWO, MUTUAL, FV, COMPOUND } from "../calculate/Formula";

function Retirement({ Pro, Age }) {
  const [PresentAge, getPresentAge] = useState(Age); //현재나이
  const [RetireAge, getRetireAge] = useState(70); //은퇴나이
  const [ReceivePeriod, getReceivePeriod] = useState(15); //수령기간
  const [MonthExpense, getMonthExpense] = useState(180); //월 노후 생활비
  const [P, getP] = useState(0); //초기 투자 금액

  // const [PMT, setPMT] = useState(0); //년 적립 금액
  let PMT = 0; //년 적립 금액
  let GoalMoney = 0; //목표 금액
  let AccumulatePeriod = RetireAge - PresentAge; //적립기간 (현재 ~ 은퇴 전)
  let exceptP = 0; //SUM - Compund(P) : 년 적립 금액 구하기 위함

  console.log("******은퇴 계산기******");
  console.log("현재 나이:", PresentAge);
  console.log("은퇴 연령:", RetireAge);
  console.log("적립 기간:", AccumulatePeriod);
  console.log("은퇴 자금 수령 기간:", ReceivePeriod);
  console.log("월 생활비:", MonthExpense);

  const handlePresentAge = (event) => { getPresentAge(parseInt(event.target.value)); };
  const handleRetireAge = (event) => { getRetireAge(parseInt(event.target.value)); };  
  const handleReceivePeriod = (event) => { getReceivePeriod(parseInt(event.target.value)); };  
  const handleMonthExpense = (event) => { getMonthExpense(parseInt(event.target.value)); };
  const handleP = (event) => { getP(parseInt(event.target.value)); };

  //Goal 금액 정하기, 수령기간 데이터 만들기
  const ResceiveYears = [...new Array(ReceivePeriod)].map((_, i) => AccumulatePeriod + i + 1).reverse();
  let SUM = 0;
  const ResceiveData = ResceiveYears.map(function (t) {
    const obj = {
      year: t + "년",
      예상수익: ROUNDTWO(SUM),
    };
    SUM = SUM + FV(MonthExpense, t);
    return obj;
  })
  GoalMoney = SUM;
  console.log("목표 금액:", GoalMoney);
  //초기투자금액 복리 계산, 총 계산에서 뺴기 -> exceptP
  exceptP = GoalMoney - COMPOUND(P, Pro, AccumulatePeriod);
  console.log("목표금액-초기투자금액", exceptP);
  //exceptP와 적립식 GBI로 년적립금 구하기
  PMT = MUTUAL(exceptP, Pro, AccumulatePeriod);
  console.log("년 적립금액:", PMT);
  //적립기간 데이터 만들기
  const AccumulateYears = Array.from(
    { length: parseInt(AccumulatePeriod) + 1 },
    (_, i) => i
  );
  const AccumulateData = AccumulateYears.map(function (t) {
    return RCompoundContribution(P, PMT, t, Pro);
  })
  console.log("적립 기간 데이터:", AccumulateData);
  console.log("수령 기간 데이터:", ResceiveData);
  //그래프 데이터 만들기 (합치기, 소팅)
  const data = [...AccumulateData, ...ResceiveData].sort(function(a, b) {
    return parseInt(a.year) - parseInt(b.year);
  });
  console.log(data);

  return (
    <div style={{ marginTop: "1rem" }}>
      <h3 style={{ margin: "0.3rem 0" }}>🏝 은퇴 계산기</h3>
      <div className="Description" style={{ marginTop: "1rem" }}>
        <span>현재 나이는 </span>
        <Box sx={{ display: "flex" }}>
          <FormControl variant="standard">
            <Input
              id="PresentAge"
              value={PresentAge}
              onChange={handlePresentAge}
              inputProps={{ pattern: "[0-9]*" }}
              size="small"
              type="number"
              sx={{ width: "48px", ml: "0.5rem" }}
            />
          </FormControl>
        </Box>
        <span>살이고, 은퇴는</span>
        <Box sx={{ display: "flex" }}>
          <FormControl variant="standard">
            <Input
              id="RetireAge"
              value={RetireAge}
              onChange={handleRetireAge}
              inputProps={{ pattern: "[0-9]*" }}
              type="number"
              size="small"
              sx={{ width: "48px", textAlign: "right", ml: "0.5rem" }}
            />
          </FormControl>
        </Box>
        <span>살에 할 것 같아요.</span>
        <br />
        <span>은퇴 후에는 </span>
        <Box sx={{ display: "flex" }}>
          <FormControl variant="standard">
            <Input
              id="ReceivePeriod"
              value={ReceivePeriod}
              onChange={handleReceivePeriod}
              inputProps={{ pattern: "[0-9]*" }}
              type="number"
              size="small"
              sx={{ width: "48px", ml: "0.5rem" }}
            />
          </FormControl>
        </Box>
        <span>년간 </span>
        <Box sx={{ display: "flex" }}>
          <FormControl variant="standard">
            <Input
              id="MonthExpense"
              value={MonthExpense}
              onChange={handleMonthExpense}
              inputProps={{ pattern: "[0-9]*" }}
              type="number"
              size="small"
              sx={{ width: "64px", textAlign: "right", ml: "0.5rem" }}
            />
          </FormControl>
        </Box>
        <span>만원의 생활비로</span>
        <span>추가 수입 없이 살거에요. </span>
        <br />
        <span>(초기 투자금은 </span>
        <Box sx={{ display: "flex" }}>
          <FormControl variant="standard">
            <Input
              id="P"
              value={P}
              onChange={handleP}
              inputProps={{ pattern: "[0-9]*" }}
              type="number"
              size="small"
              sx={{ width: "64px", textAlign: "right", ml: "0.5rem" }}
            />
          </FormControl>
        </Box>
        <span>만원이에요)</span>
        <div
          style={{
            backgroundColor: "#F4F3F4",
            width: "100%",
            margin: "1rem 0",
            padding: "0.5rem 1.2rem",
            borderRadius: "0.8rem",
          }}
        >
          <span style={{ marginTop: "0.8rem" }}>
            은퇴 목표를 이루기 위해 매년 <b>{ROUNDTWO(PMT)}</b>만원을 넣어야해요!
          </span>
        </div>
      </div>

      <ComposedChart
        width={400}
        height={250}
        margin={{ top: 20, bottom: 20 }}
        data={data}
      >
        <XAxis dataKey="year" tick={{ fontSize: 10 }} padding={{ right: 20 }} />
        <YAxis
          unit={"만원"}
          tick={{ fontSize: 10 }}
          padding={{ bottom: 10 }}
          domain={["auto", "auto"]}
        />
        <Tooltip />
        {/* <Legend tick={{ fontSize: 10 }} /> */}
        <CartesianGrid stroke="#f4f4f4" />
        <Line
          unit={"만원"}
          type="monotone"
          dataKey="예상수익"
          stroke="#1D1A82"
        />
      </ComposedChart>
    </div>
  );
}

export default Retirement;

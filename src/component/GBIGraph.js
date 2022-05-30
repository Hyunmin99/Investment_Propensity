import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { Box, InputAdornment, Input, MenuItem, Select } from "@mui/material";
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

function GBIGraph({ Min, Max, Pro }) {
  //거치식 GBI
  function formula_LumpSum(T, r, t) {
    return T / (r / 100 + 1) ** t;
  }
  //적립식 GBI
  function formula_Mutual(T, r, t) {
    return (T * (r/100))/((1 + r/100)**t -1);
  }
  //소수점 둘째 자리 반올림
  function round_two(float) {
    return Math.round(float * 1e2) / 1e2;
  }
  //복리 공식
  function formula_Compound(P, r, t) {
    return P * (r / 100 + 1) ** t;
  }
  //적립식 복리 공식
  function formula_Contribute(PMT, r, t) {
    // const pmt = covUnits === "억원" ? PMT / 10000 : PMT;
    if (r !== 0) {
      return (PMT * ((1 + r / 100) ** t - 1)) / (r / 100);
    } else {
      //이자율이 0인 경우, 계산식 분모에 0이 들어가면서 값이 무한대로 수렴 -> 예외처리
      return PMT * t;
    }
  }
  //현재가치 공식
  function formula_PV(FV, t) {
    return FV / (1 + inflationRate / 100) ** t;
  }
  //적립식 복리 계산기
  //*년복리
  function Cal_Compound_Contribution(t) {
    const MIN_VALUE = formula_Compound(P, Min, t) + formula_Contribute(PMT, Min, t);
    const MAX_VALUE = formula_Compound(P, Max, t) + formula_Contribute(PMT, Max, t);
    const PRO_VALUE = formula_Compound(P, Pro, t) + formula_Contribute(PMT, Pro, t);
    const obj = {
      year: t + "년",
      예상수익범위: [round_two(MIN_VALUE), round_two(MAX_VALUE)],
      예상수익: round_two(PRO_VALUE),
      현재가치: round_two(formula_PV(PRO_VALUE, t)),
    };
    return obj;
  }

  //input
  const [Method, setMethod] = useState("LumpSum");
  const [Period, setPeriod] = useState(3);
  const [T, setT] = useState(10000);

  const handleMethod = (event) => {
    setMethod(event.target.value);
  };
  const handlePeriod = (event) => {
    //   if(event.target)
    setPeriod(event.target.value);
  };
  const handleT = (event) => {
    setT(event.target.value);
  };

  //calculate
  let P = 0;
  let PMT = 0;
  const inflationRate = 2;

  if(Method === "LumpSum") {
    P = formula_LumpSum(T, Pro, Period);
    PMT = 0;
  }
  else if (Method === "Mutual") {
    P = 0;
    PMT = formula_Mutual(T, Pro, Period);
  }

  //데이터 세팅
  const Year = Array.from({length: (parseInt(Period) + 1)}, (v, i) => i);
  const data = Year.map(function (t) {
    return Cal_Compound_Contribution(t);
  });

  return (
    <div style={{ marginTop: "1rem" }}>
      <h3 style={{ margin: "0.3rem 0" }}>📈 단기 GBI 그래프</h3>
      <div className="Description" style={{ marginTop: "1rem" }}>
        <Box sx={{ display: "flex" }}>
          <FormControl variant="standard">
            <Select
              labelId="year-select-label"
              id="year-select"
              value={Method}
              onChange={handleMethod}
              defaultValue={"거치식"}
            >
              <MenuItem value="LumpSum">거치식</MenuItem>
              <MenuItem value="Mutual">적립식</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <span>으로</span>
        <Box sx={{ display: "flex" }}>
          <FormControl variant="standard">
            <Input
              id="period"
              value={Period}
              onChange={handlePeriod}
              endAdornment={<InputAdornment position="end">년</InputAdornment>}
              size="small"
              sx={{ width: "48px", ml: "0.5rem" }}
            />
          </FormControl>
        </Box>
        <span>동안</span>
        <Box sx={{ display: "flex" }}>
          <FormControl variant="standard">
            <Input
              id="money"
              value={T}
              onChange={handleT}
              endAdornment={
                <InputAdornment position="end">만원</InputAdornment>
              }
              inputProps={{ pattern: "[0-9]*" }}
              //   type="number"
              size="small"
              sx={{ width: "100px", textAlign: "right", ml: "0.5rem" }}
            />
          </FormControl>
        </Box>
        <span>을 모으기 위해...</span>
        {Method === "LumpSum" && (
          <span style={{ marginTop: "0.8rem" }}>
            초기 투자 금액은 <b>{round_two(P)}</b>만원이에요!
          </span>
        )}
        {Method === "Mutual" && (
          <span style={{ marginTop: "0.8rem" }}>
            매년 <b>{round_two(PMT)}</b>만원을 넣어야해요!
          </span>
        )}
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
        <Legend tick={{ fontSize: 10 }} />
        <CartesianGrid stroke="#f4f4f4" />
        <Area
          unit={"만원"}
          type="monotone"
          dataKey="예상수익범위"
          fill="#FFB950"
          stroke="#FFB950"
        />
        <Line
          unit={"만원"}
          type="monotone"
          dataKey="예상수익"
          stroke="#1D1A82"
        />
        <Line
          unit={"만원"}
          type="monotone"
          dataKey="현재가치"
          stroke="#B45CCA"
        />
      </ComposedChart>
    </div>
  );
}

export default GBIGraph;

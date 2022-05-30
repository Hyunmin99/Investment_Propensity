import React, { useState } from "react";
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
// import Box from "@mui/material/Box";
// import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import { Box, InputAdornment, Input, MenuItem, Select } from "@mui/material";

function ProfitGraph({ Min, Max, Pro }) {
  //단리, 복리 => 년 단위로 계산
  //적립식 복리 : Compound + Contribute
  const Year = [0, 5, 10, 15, 20, 25, 30, 35, 40];
  const Contribution = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]; //적립금액
  const inflationRate = 2; //물가 상승률
  // function cov_Money(Money) {
  //   let scaledValue = Money;

  //   if (scaledValue < 10000) {
  //     scaledValue = Math.round(scaledValue / 10) * 10;
  //   }

  //   while (scaledValue >= 10000) {
  //     scaledValue /= 10000;
  //   }
  //   return parseInt(scaledValue);
  // }

  // function cov_Units(Money) {
  //   const units = ["만원", "억원"];
  //   let unitIndex = 0;

  //   while (Money >= 10000 && unitIndex < units.length - 1) {
  //     unitIndex += 1;
  //     Money /= 10000;
  //   }
  //   return units[unitIndex];
  // }

  const [Period, getPeriod] = useState(15);
  const [P, setP] = useState(150);
  const [PMT, getPMT] = useState(0);

  //소수점 둘째 자리 반올림
  function round_two(float) {
    return Math.round(float * 1e2) / 1e2;
  }
  //단리 공식
  function formula_Simple(P, r, t) {
    return P + (r / 100) * P * t;
  }
  //복리 공식
  function formula_Compound(P, r, t) {
    return P * (r / 100 + 1) ** t;
  }
  //적립식 복리 공식
  function formula_Contribute(pmt, r, t) {
    // const pmt = covUnits === "억원" ? PMT / 10000 : PMT;
    if (r !== 0) {
      return (pmt * ((1 + r / 100) ** t - 1)) / (r / 100);
    } else {
      //이자율이 0인 경우, 계산식 분모에 0이 들어가면서 값이 무한대로 수렴 -> 예외처리
      return pmt * t;
    }
  }
  //현재가치 공식
  function formula_PV(FV, t) {
    return FV / (1 + inflationRate / 100) ** t;
  }

  //단리 계산기
  function Cal_Simple(t) {
    const MIN_VALUE = formula_Simple(P, Min, t);
    const MAX_VALUE = formula_Simple(P, Max, t);
    const PRO_VALUE = formula_Simple(P, Pro, t);
    const obj = {
      year: t + "년",
      예상수익범위: [round_two(MIN_VALUE), round_two(MAX_VALUE)],
      예상수익: round_two(PRO_VALUE),
      현재가치: round_two(formula_PV(PRO_VALUE, t)),
    };
    return obj;
  }

  //복리 계산기
  //*년복리
  function Cal_Compound(t) {
    const MIN_VALUE = formula_Compound(P, Min, t);
    const MAX_VALUE = formula_Compound(P, Max, t);
    const PRO_VALUE = formula_Compound(P, Pro, t);
    const obj = {
      year: t + "년",
      예상수익범위: [round_two(MIN_VALUE), round_two(MAX_VALUE)],
      예상수익: round_two(PRO_VALUE),
      현재가치: round_two(formula_PV(PRO_VALUE, t)),
    };
    return obj;
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

  //데이터 세팅
  const data = Year.map(function (t) {
    return Cal_Compound_Contribution(t);
  });

  // console.log(data);

  //Contribution handleChange
  const CON_handleChange = (event) => {
    getPMT(event.target.value);
  };

  //Period handleChange
  const PER_handleChange = (event) => {
    getPeriod(event.target.value);
  };

  const P_handlChange = (event) => {
    setP(event.target.value);
    // covMoney = cov_Money(P);
    // covUnits = cov_Units(P);
  }

  return (
    <div style={{ marginTop: "1rem" }}>
      {/* <div style={{ marginTop: "1rem" }}> */}
      <h3 style={{ margin: "0.3rem 0" }}>📈 예상 수익률 그래프</h3>
      <div className="Description">
        <span>초기 투자 금액: </span>
        <Box sx={{ display: "flex" }}>
          <FormControl variant="standard">
            <Input
              id="초기투자금액"
              value={P}
              onChange={P_handlChange}
              endAdornment={
                <InputAdornment position="end">만원</InputAdornment>
              }
              size="small"
              sx={{ width: "100px", ml: "0.5rem" }}
            />
          </FormControl>
        </Box>
      </div>
      <ComposedChart
        width={400}
        height={250}
        margin={{ top: 20, bottom: 20 }}
        data={data}
      >
        <XAxis dataKey="year" tick={{ fontSize: 10 }} padding={{ right: 20 }} />
        <YAxis
          // unit={covUnits}
          unit="만원"
          domain={["auto", "auto"]}
          tick={{ fontSize: 10 }}
          padding={{ bottom: 10 }}
        />
        <Tooltip />
        <Legend tick={{ fontSize: 10 }} />
        <CartesianGrid stroke="#f4f4f4" />
        <Area
          // unit={covUnits}
          unit="만원"
          type="monotone"
          dataKey="예상수익범위"
          fill="#FFB950"
          stroke="#FFB950"
        />
        <Line
          // unit={covUnits}
          unit="만원"
          type="monotone"
          dataKey="예상수익"
          stroke="#1D1A82"
        />
        <Line
          // unit={covUnits}
          unit="만원"
          type="monotone"
          dataKey="현재가치"
          stroke="#B45CCA"
        />
      </ComposedChart>
      <div className="Description">
        <span style={{ marginRight: "0.3rem" }}>매년 </span>
        <Box sx={{ display: "flex" }}>
          <FormControl variant="standard" size="small">
            <Select
              labelId="contribution-select-label"
              id="contribution-select"
              value={PMT}
              label="만원"
              onChange={CON_handleChange}
              defaultValue={0}
            >
              {Contribution.map((Value, index) => {
                return (
                  <MenuItem key={index} value={Value}>
                    {Value}만원
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
        <span style={{ marginLeft: "0.3rem", marginRight: "0.3rem" }}>
          {" "}
          을 적립했을 때{" "}
        </span>
        <Box sx={{ display: "flex" }}>
          <FormControl variant="standard">
            <Select
              labelId="year-select-label"
              id="year-select"
              value={Period}
              label="년"
              onChange={PER_handleChange}
              defaultValue={0}
            >
              {Year.map((Value, index) => {
                return (
                  <MenuItem key={index} value={Value}>
                    {Value}년
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
        <span> 뒤의 </span>
        <span>
          예상 수익은{" "}
          <b>
            {data[Period / 5].예상수익}
            {/* {covUnits} */}
            만원
          </b>
          입니다.
          <br />
          (현재 가치로 환산시{" "}
          <b>
            {data[Period / 5].현재가치}
            {/* {covUnits} */}
            만원
          </b>
          )
        </span>
      </div>
      {/* </div> */}
    </div>
  );
}

export default ProfitGraph;

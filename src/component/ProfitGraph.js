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
import FormControl from "@mui/material/FormControl";
import { Box, InputAdornment, Input, MenuItem, Select } from "@mui/material";

import {CompoundContribution} from "../calculate/Calculator"

function ProfitGraph({ Min, Max, Pro }) {
  //단리, 복리 => 년 단위로 계산
  //적립식 복리 : Compound + Contribute
  const Year = [0, 5, 10, 15, 20, 25, 30, 35, 40];
  const Contribution = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]; //적립금액

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

  //데이터 세팅
  const data = Year.map(function (t) {
    return CompoundContribution(P, PMT, t, Min, Max, Pro);
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
  };

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

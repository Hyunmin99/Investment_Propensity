import React, {useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

function SliderSel({ QnA, getResponse }) {
  const [Resp, getResp] = useState(10);
  QnA.status = true;

  function valueLabelFormat(Resp) {
    const units = ["만원", "억원"];

    let unitIndex = 0;
    let scaledValue = Resp;

    if (scaledValue < 10000) {
      scaledValue = Math.round(scaledValue / 10) * 10;
    }

    while (scaledValue >= 10000 && unitIndex < units.length - 1) {
      unitIndex += 1;
      scaledValue /= 10000;
    }
    return `${parseInt(scaledValue)} ${units[unitIndex]}`;
  }

  function calculateValue(Resp) {
    return 10 * Math.pow(10, Resp / 25);
  }

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      getResp(newValue);
    }
  };

  getResponse(Math.round(calculateValue(Resp) / 10) * 10);

  return (
    <div>
      <div className="Content">
        <h3 className="page">{QnA.id}</h3>
        <h1 className="question"> {QnA.Question}</h1>
        <Box sx={{ width: 300, display: "inline-block" }}>
          <Typography id="non-linear-slider" gutterBottom>
            투자 금액: {valueLabelFormat(calculateValue(Resp))}
          </Typography>
          <Slider
            value={Resp}
            min={0}
            step={0.02}
            max={100}
            scale={calculateValue}
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
            onChange={handleChange}
            aria-labelledby="non-linear-slider"
          />
        </Box>
      </div>
    </div>
  );
}

export default SliderSel;

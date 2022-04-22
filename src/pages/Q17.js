import React, { useState } from 'react';
import '../App.css';
import Header from '../component/Header';
import NextButton from '../component/NextButton';
import QNA from '../content/QNA'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const QnA = QNA[16];

function Q17(props) {
  const Res = props.location.state.Res;

  const [Resp, getResp] = useState(10);
  QnA.status = true;

  function valueLabelFormat(Resp) {
    const units = ['만원', '억원'];
  
    let unitIndex = 0;
    let scaledValue = Resp;

    Res[QnA.page] = parseInt(scaledValue);
  
    if(scaledValue < 10000) {
      scaledValue = Math.round(scaledValue/10)*10;
    }

    while (scaledValue >= 10000 && unitIndex < units.length - 1) {
      unitIndex += 1;
      scaledValue /= 10000;
    }
    return `${parseInt(scaledValue)} ${units[unitIndex]}`;
  }

  function calculateValue(Resp) {
    return 10 * Math.pow(10, (Resp)/25);
  }

  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      getResp(newValue);
    }
  };

  return (
    <div className="App">
      <Header history={props.history}/>
      <div className='Content'>
        <h3 className='page'>{ QnA.page }</h3> 
        <h1 className='question'> { QnA.Question }</h1>
        <Box sx={{ width: 300, display: 'inline-block' }}>
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
        <NextButton Path={"/q18"} Res={Res} Text={'Next'}/>
      </div>
    </div>
  );
}

export default Q17;

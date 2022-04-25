import React, { useState } from 'react';
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Area, Line } from 'recharts';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function Graph({ P, A, Min, Max, Rev }) {
    const year = [0, 5, 10, 15, 20, 25, 30, 35, 40];
    const inflationRate = 2; //물가 상승률
    console.log(P, A, Min, Max, Rev);
    function  cov_Money(Money) {
      
        let scaledValue = Money;
          
        if(scaledValue < 10000) {
          scaledValue = Math.round(scaledValue/10)*10;
        }

        while (scaledValue >= 10000) {
            scaledValue /= 10000;
        }
        return parseInt(scaledValue);
    }

    function  cov_Units(Money) {
        const units = ['만원', '억원'];
        let unitIndex = 0;

        while (Money >= 10000 && unitIndex < units.length - 1) {
            unitIndex += 1;
            Money /= 10000;
        }
        return units[unitIndex];
    }

    const covMoney = cov_Money(P);
    const covUnits = cov_Units(P);
    const [Period, getPeriod] = useState(15);

    //단리 계산
    // function Cal_Simple(t) {
    //     const obj = {
    //         "year": t+'년',
    //         "예상수익범위": [Math.round((covMoney+(Min/100*covMoney)*(t)) * 1e2) / 1e2, 
    //         Math.round((covMoney+(Max/100*covMoney)*(t)) * 1e2) / 1e2],
    //         "예상수익": Math.round((covMoney+(Rev/100*covMoney)*(t)) * 1e2) / 1e2, 
    //         "현재가치": (Math.round((covMoney+(Rev/100*covMoney)*(t)) * 1e2) / 1e2) / ((1+inflationRate/100)**t)
    //     };
    //     return obj;
    // }

    //복리 계산
    function Cal_Compound(t) {
        const obj = {
            "year": t+'년',
            "예상수익범위": [Math.round(covMoney*((Min/100+1)**(t)) * 1e2) / 1e2, Math.round(covMoney*((Max/100+1)**(t)) * 1e2) / 1e2],
            "예상수익": Math.round(covMoney*((Rev/100+1)**(t)) * 1e2) / 1e2, 
            "현재가치": Math.round(covMoney*((Rev/100+1)**(t)) / ((1+inflationRate/100)**t) * 1e2) / 1e2
        };
        console.log(obj);
        return obj;
    }

    //적립식 복리 계산
    //답업워

    //데이터 세팅
    const data = year.map(function(t){
        return Cal_Compound(t);
    });

    //기간 세팅
    function valueText(value) {
        return `${value}년 뒤`
    }

    const handleChange = (event, newValue) => {
        if (typeof newValue === 'number') {
          getPeriod(newValue);
        }
    };

    console.log(Period);
    console.log(data);

    return (
        <div>
            <ComposedChart width={400} height={250} margin={{top: 20, bottom: 20}} data={data}>
                <XAxis dataKey="year" tick={{fontSize: 10}} padding={{right: 20}}/>
                <YAxis unit={covUnits} tick={{fontSize: 10}} padding={{bottom: 10}} />
                <Tooltip />
                <Legend tick={{fontSize: 10}} />
                <CartesianGrid stroke="#f4f4f4" />
                <Area unit={covUnits} type="monotone" dataKey="예상수익범위" fill="#FFB950" stroke="#FFB950"/>
                <Line unit={covUnits} type="monotone" dataKey="예상수익" stroke="#1D1A82" />
                <Line unit={covUnits} type="monotone" dataKey="현재가치" stroke="#B45CCA" />
            </ComposedChart>

            <div className='tableStyle'>
                <ul className='Row'>
                    <span className='ColumnValue'>예상 수익</span>
                    <span className='ColumnValue'>현재 가치</span>
                </ul>
                <ul className='Row'>
                    <span className='ColumnValue'>{data[Period/5].예상수익}{covUnits}</span>
                    <span className='ColumnValue'>{data[Period/5].현재가치}{covUnits}</span>
                </ul>
                <div>{valueText(Period)}</div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: 300, display:'inline-block' }}>
                    <Slider
                        value={Period}
                        aria-label='Year'
                        getAriaValueText={valueText}
                        valueLabelFormat={valueText}
                        valueLabelDisplay='auto'
                        onChange={handleChange}
                        step={5}
                        min={0}
                        max={40}
                        size="small"
                    />
                </Box>
            </div>
        </div>
    );
}

export default Graph;
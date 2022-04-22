import React from 'react';
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Area, Line } from 'recharts';

function Graph({ P, A, Min, Max, Rev }) {
    const year = [0, 5, 10, 15, 20, 25, 30, 35, 40];
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

    //단리 계산
    function Cal_Simple(t) {
        const obj = {
            "year": t+'년',
            "예상수익범위": [Math.round((covMoney+(Min/100*covMoney)*(t)) * 1e2) / 1e2, 
            Math.round((covMoney+(Max/100*covMoney)*(t)) * 1e2) / 1e2],
            "예상수익": Math.round((covMoney+(Rev/100*covMoney)*(t)) * 1e2) / 1e2
        };
        return obj;
    }

    //복리 계산
    function Cal_Compound(t) {
        const obj = {
            "year": t+'년',
            "예상수익범위": [Math.round(covMoney*((Min/100+1)**(t)) * 1e2) / 1e2, 
           Math.round(covMoney*((Max/100+1)**(t)) * 1e2) / 1e2],
            "예상수익": Math.round(covMoney*((Rev/100+1)**(t)) * 1e2) / 1e2
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

    return (
        <div>
            <p>{covMoney}, {covUnits}</p>
            <p>{Min}, {Max}, {Rev}</p>
            <ComposedChart width={400} height={250} margin={{top: 20, bottom: 20}} data={data}>
                <XAxis dataKey="year" tick={{fontSize: 10}} padding={{right: 20}}/>
                <YAxis unit={covUnits} tick={{fontSize: 10}} padding={{bottom: 10}} />
                <Tooltip />
                <Legend tick={{fontSize: 10}} />
                <CartesianGrid stroke="#f4f4f4" />
                <Area unit={covUnits} type="monotone" dataKey="예상수익범위" fill="#FFB950" stroke="#FFB950"/>
                <Line unit={covUnits} type="monotone" dataKey="예상수익" stroke="#1D1A82" />
            </ComposedChart>
        </div>
    );
}

export default Graph;
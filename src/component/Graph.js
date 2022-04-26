import React, { useState } from 'react';
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Area, Line } from 'recharts';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function Graph({ P, Min, Max, Rev }) {
    //단리, 복리 => 년 단위로 계산
    //적립식 복리 : Compound + Contribute
    const year = [0, 5, 10, 15, 20, 25, 30, 35, 40];
    const Contribution = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]; //적립금액
    const inflationRate = 2; //물가 상승률
    function cov_Money(Money) {
      
        let scaledValue = Money;
          
        if(scaledValue < 10000) {
          scaledValue = Math.round(scaledValue/10)*10;
        }

        while (scaledValue >= 10000) {
            scaledValue /= 10000;
        }
        return parseInt(scaledValue);
    }

    function cov_Units(Money) {
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
    const [PMT, getPMT] = useState(0);

    //소수점 둘째 자리 반올림
    function round_two(float) {
        return Math.round(float * 1e2) / 1e2;
    }
    //단리 공식
    function formula_Simple(r, t) {
        return covMoney+(r/100*covMoney)*(t);
    }
    //복리 공식
    function formula_Compound(r, t) {
        return covMoney*((r/100+1)**t);
    }
    //적립식 복리 공식
    function formula_Contribute(r, t) {
        const pmt = covUnits === '억원' ? (PMT/10000) : PMT;
        return pmt * (((1 + r/100) ** t) -1) / (r/100);
    }
    //현재가치 공식
    function formula_PV(FV, t) {
        return FV / ((1+inflationRate/100)**t);
    }

    //단리 계산기
    function Cal_Simple(t) {
        const MIN_VALUE = formula_Simple(Min, t);
        const MAX_VALUE = formula_Simple(Max, t);
        const REV_VALUE = formula_Simple(Rev, t);
        const obj = {
            "year": t+'년',
            "예상수익범위": [round_two(MIN_VALUE), round_two(MAX_VALUE)],
            "예상수익": round_two(REV_VALUE), 
            "현재가치": round_two(formula_PV(REV_VALUE, t))
        };
        return obj;
    }

    //복리 계산기
    //*년복리
    function Cal_Compound(t) {
        const MIN_VALUE = formula_Compound(Min, t);
        const MAX_VALUE = formula_Compound(Max, t);
        const REV_VALUE = formula_Compound(Rev, t);
        const obj = {
            "year": t+'년',
            "예상수익범위": [round_two(MIN_VALUE), round_two(MAX_VALUE)],
            "예상수익": round_two(REV_VALUE), 
            "현재가치": round_two(formula_PV(REV_VALUE, t))
        };
        return obj;
    }

    //적립식 복리 계산기
    //*년복리
    function Cal_Compound_Contribution(t) {
        const MIN_VALUE = formula_Compound(Min, t) + formula_Contribute(Min, t);
        const MAX_VALUE = formula_Compound(Max, t) + formula_Contribute(Max, t);
        const REV_VALUE = formula_Compound(Rev, t) + formula_Contribute(Rev, t);
        const obj = {
            "year": t+'년',
            "예상수익범위": [round_two(MIN_VALUE), round_two(MAX_VALUE)],
            "예상수익": round_two(REV_VALUE), 
            "현재가치": round_two(formula_PV(REV_VALUE, t))
        };
        return obj;
    }

    //데이터 세팅
    const data = year.map(function(t){
        return Cal_Compound_Contribution(t);
    });

    //기간 세팅
    function valueText(value) {
        return `${value}년 뒤`
    }

    //Slider handleChange
    const SLI_handleChange = (event, newValue) => {
        if (typeof newValue === 'number') {
          getPeriod(newValue);
        }
    };

    //Select Box handleChange
    const SEL_handleChange = (event) => {
        getPMT(event.target.value);
    };

    //Dialog part
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
          }
    };

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
                <Button onClick={handleClickOpen}>Open Select Dialog</Button>
                <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                    <DialogTitle>Fill the form</DialogTitle>
                    <DialogContent>
                        <Box sx={{ width: 300, display:'inline-block' }}>
                            <Slider
                                value={Period}
                                aria-label='Year'
                                getAriaValueText={valueText}
                                valueLabelFormat={valueText}
                                valueLabelDisplay='auto'
                                onChange={SLI_handleChange}
                                step={5}
                                min={0}
                                max={40}
                                size="small"
                            />
                        </Box>
                        <Box sx={{ width: 300, display:'inline-block' }}>
                            <FormControl fullWidth>
                                <InputLabel id="contribution-select-label">납입</InputLabel>
                                <Select
                                labelId="contribution-select-label"
                                id="contribution-select"
                                value={PMT}
                                label="만원"
                                onChange={SEL_handleChange}
                                defaultValue={0}
                                >
                                    {Contribution.map((Value, index) => {
                                        return <MenuItem key={index} value={Value}>{Value}만원</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Ok</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default Graph;
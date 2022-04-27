import React from 'react';
import '../App.css';
import Header from '../component/Header';
import RESULT from '../content/RESULT';
import Final_TYPE from '../content/FinalTYPE';
import NextButton from '../component/NextButton';
import QNA from '../content/QNA';
import Graph from '../component/Graph';
import CircularBar from '../component/CircularBar';

const Result = RESULT;
const Final_Type = Final_TYPE;


function Final_Result(props) {
    const Res = props.location.state.Res;
    console.log(Res);

    //Set Period Value - Q1
    const Per_Quest = Res[1];
    const Per = QNA[0].Answers.find(function(data) {
        return data.id === Res[1]
    });
    //Set Purpose Value - Q2
    const Pur1 = QNA[1].Answers.find(function(data) {
        return data.id === Res[2]
    });
    //Set Tolerance Value - Q3
    const Tol1 = QNA[2].Answers.find(function(data) {
        return data.id === Res[3]
    });
    //Set Tolerance Value - Q4
    const Tol2 = QNA[3].Answers.find(function(data) {
        return data.id === Res[4]
    });
    //Set Literacy Value - Q5 (Sum of All Response)
    let Lit1 = 0; //-> Literacy value
    let tmp_lit = []; //-> 값 보관함 
    for(let i = 0; i <Res[5].length; i++){
        tmp_lit[i] = QNA[4].Answers.find(function(data){
            return data.id === Res[5][i]
        });
        Lit1 = Lit1 + tmp_lit[i].Value;
    };
    //Set Experience Value - Q6
    const Exp1 = QNA[5].Answers.find(function(data) {
        return data.id === Res[6]
    });
    //Set Purpose Value - Q7
    let Pur2 = 0; //-> Pur2 value
    let tmp_pur = []; //-> 값 보관함 
    for(let i = 0; i <Res[7].length; i++){
        tmp_pur[i] = QNA[6].Answers.find(function(data){
            return data.id === Res[7][i]
        });
        Pur2 = Pur2 + tmp_pur[i].Value;
    };
    //Just Section - Q8

    //Set Tolerance Value - Q9
    const Tol3 = QNA[8].Answers.find(function(data) {
        return data.id === Res[9]
    });
    //Set Tolerance Value - Q10
    const Tol4 = QNA[9].Answers.find(function(data) {
        return data.id === Res[10]
    });
    //Set Literacy Value - Q11
    const Lit2 = QNA[10].Answers.find(function(data) {
        return data.id === Res[11]
    });
    //Set Literacy Value - Q12
    const Lit3 = QNA[11].Answers.find(function(data) {
        return data.id === Res[12]
    });
    //Set Experience Value - Q13
    const Exp2 = QNA[12].Answers.find(function(data) {
        return data.id === Res[13]
    });
    //Set Personal Info : Gender - Q14
    // const Gender = QNA[13].Answers.find(function(data) {
    //     return data.id === Res[14]
    // });
    //Set Personal Info : Age - Q15
    const Age = QNA[14].Answers.find(function(data) {
        return data.id === Res[15]
    });
    //Set Personal Info : Income - Q16
    const Income = QNA[15].Answers.find(function(data) {
        return data.id === Res[16]
    });
    //Set Personal Info : Invest Money - Q17
    const Money = Res[17];
    //Set Personal Info : Invest Property - Q18
    const Property = QNA[17].Answers.find(function(data) {
        return data.id === Res[18]
    });

    const Period = Per.Value;
    const Purpose = Pur1.Value + Pur2;
    const Tolerance = (Tol1.Value + Tol2.Value)/2 + Tol3.Value + Tol4.Value;
    const Literacy = Lit1 + Lit2.Value + Lit3.Value;
    const Experience = (Exp1.Value + Exp2.Value)/2;

    function SetPeriod() { //투자 기간 Index 세팅
        const idx = (Per_Quest === 5) ? 0 :
            (Per_Quest === 4) ? 1 :
            (Per_Quest === 3) ? 2 : 
            (Per_Quest === 2) ? 3 : 
            (Per_Quest === 1) ? 4 :
            console.log('No Result');
        console.log('투자 기간 응답: ', Per_Quest, '\n투자 기간 Index: ', idx);
        return idx;
    }
    function SetPurpose() { //투자 목적 Index 세팅
        const idx = (Purpose >= 26) ? 0 :
            (16 <= Purpose && Purpose < 26) ? 1 :
            (6 <= Purpose && Purpose < 16) ? 2 : 
            (Purpose < 6) ? 3 : 
            console.log('No Result');
        console.log('투자 목적 응답: ', Purpose, '\n투자 목적 Index: ', idx);
        return idx;
    }
    function SetTolerance() { //위험 감내도 Index 세팅
        const idx = (Tolerance >= 26) ? 0 :
            (16 <= Tolerance && Tolerance < 26) ? 1 :
            (6 <= Tolerance && Tolerance < 16) ? 2 : 
            (Tolerance < 6) ? 3 : 
            console.log('No Result');
        console.log('위험 감내도 응답: ', Tolerance, '\n위험 감내도 Index: ', idx);
        return idx;
    }
    function SetLiteracy() { //금융 이해도 Index 세팅
        const idx = (Literacy >= 8) ? 0 :
            (6 <= Literacy && Literacy < 8) ? 1 :
            (3 <= Literacy && Literacy < 6) ? 2 : 
            (Literacy < 3) ? 3 : 
            console.log('No Result');
        console.log('금융 이해도 응답: ', Literacy, '\n금융 이해도 Index: ', idx);
        return idx;
    }
    function SetExperience() { //투자 경험 Index 세팅
        const idx = (Experience >= 31) ? 0 :
            (21 <= Experience && Experience < 31) ? 1 :
            (11 <= Experience && Experience < 21) ? 2 : 
            (Experience < 11) ? 3 : 
            console.log('No Result');

        console.log('투자 경험 응답: ', Experience, '\n투자 경험 Index: ', idx);
        return idx;
    }

    const Res_Period = Result.투자기간[SetPeriod()];
    const Res_Purpose = Result.투자목적[SetPurpose()];
    const Res_Tolerance = Result.위험감내수준[SetTolerance()];
    const Res_Literacy = Result.금융이해도[SetLiteracy()];
    const Res_Experience = Result.투자경험[SetExperience()];

    //토탈 점수 계산
    const Total_Score = (Res_Purpose.Value + Res_Tolerance.Value + Res_Literacy.Value + Res_Experience.Value + Period + Age.Value + Income.Value + Property.Value);

    //투자 성향 점수 계산
    const Score = (Res_Purpose.Value + Res_Tolerance.Value + Res_Literacy.Value + Res_Experience.Value);

    //투자 성향 캐릭터 Index 세팅
    function SetType() { 
        console.log('Total Score is... ', Total_Score, '\nScore is... ',Score);
        const idx = ((Total_Score >=31) &&(16 <= Score <= 18)) ? 0 :
            ((Total_Score >=31) && (14 <= Score && Score <= 15)) ? 1 :
            ((Total_Score >=31) && (12 <= Score && Score <= 13)) ? 2 :
            ((23<= Total_Score && Total_Score <=30) && (14 <= Score && Score <= 18)) ? 3 :
            ((23<= Total_Score && Total_Score <=30) && (12 <= Score && Score <= 13)) ? 4 :
            ((23<= Total_Score && Total_Score <=30) && (7 <= Score && Score <= 11)) ? 5 :
            ((18<= Total_Score && Total_Score <=22) && (14 <= Score && Score <= 18)) ? 6 :
            ((18<= Total_Score && Total_Score <=22) && (12 <= Score && Score <= 13)) ? 7 :
            ((18<= Total_Score && Total_Score <=22) && (7 <= Score && Score <= 11)) ? 8 :
            ((6<= Total_Score && Total_Score <=17) && (Score === 13)) ? 9 :
            ((6<= Total_Score && Total_Score <=17) && (11 <= Score && Score <= 12)) ? 10 :
            ((6<= Total_Score && Total_Score <=17) && (7 <= Score && Score <= 10)) ? 11 :
            (Total_Score <=5) ? 12 : 
            console.log('Error Type');
        return idx;
    }

    const Type = Final_Type[SetType()];

    const MIN = Type.Min;
    const MAX = Type.Max;
    const REV = Type.Revenue;

    return (
        <div className="App">
            <Header history={props.history}/>
            <div className='Result'>  {/* style={{display: 'flex'}} */}
                <div>
                    <div> 
                        <div className='Quest'>
                        <div style={{fontSize: '20px', fontWeight: '700', fontFamily: 'DungGeunMo'}}>Quest</div>
                        <div>{Res_Period.Quest}</div>
                        </div>
                        {/* <img className='TypeImage'></img> */}
                        <div className='TypeImage'></div>
                        <h1 style={{color: '#fefefe', fontFamily: 'DungGeunMo', padding: '0.5rem'}}>{Type.Char}</h1>
                    </div>

                    <div className='Explain'>
                        <h3 style={{margin: '0', paddingBottom: '0.8rem'}}>😎 당신의 캐릭터는...</h3>
                        <div className='CharInfo'>
                            {/* 첫번째 칼럼: 등급표 */}
                            <div className='Table'>
                                <CircularBar Type='투자 목적' Grade={Res_Purpose.Grade}/>
                                <CircularBar Type='위험 감내도' Grade={Res_Tolerance.Grade}/>
                                <CircularBar Type='금융 이해도' Grade={Res_Literacy.Grade}/>
                                <CircularBar Type='투자 경험' Grade={Res_Experience.Grade}/>
                            </div>
                            {/* 2번째 칼럼: 아이템 */}
                            <div className='Bag'>
                                <div className='Items'>
                                    <div className='ItemImg'>                                
                                        <img width={42} height={42} src={Res_Literacy.Img} alt='무기 이미지'/> 
                                    </div>
                                    <div style={{marginTop: 'auto', marginBottom:'auto', marginLeft:'0.5rem'}}>
                                        <b>{Res_Literacy.Weapon}</b> <br/>
                                        {Res_Literacy.Level}
                                    </div>
                                </div>
                                <div className='Items'>
                                    <div className='ItemImg'>
                                        <img width={42} height={42} src={Res_Tolerance.Img} alt='방패 이미지'/>  
                                    </div>
                                    <div style={{marginTop: 'auto', marginBottom:'auto', marginLeft:'0.5rem'}}>
                                        <b>{Res_Tolerance.Shield}</b> <br/>
                                        {Res_Tolerance.Level}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 캐릭터 설명 */}
                        <div>
                            <p style={{lineHeight: '1.5rem'}}>{Type.Content}</p>
                        </div>
                        {/* 예상 수익률 그래프 */}
                        <div style={{marginTop:'1rem'}}>
                            <h3 style={{margin: '0.3rem 0'}}>📈 예상 수익률 그래프</h3>
                            <Graph P={Money} Min={MIN} Max={MAX} Rev={REV}  />
                        </div>
                    </div>
                </div>
                <NextButton Path={"/"} Per={0} Pur={0} Tol={0} Lit={0} Exp={0} Text={'테스트 다시하기'}/>
                <div style={{fontSize: '0.8rem', color: '#A7A8A3', textAlign:'left', padding: '1rem'}}>
                - 칼과 방패는 각각 금융이해도와 위험감내도로 정해집니다. <br/>
                - 현재 가치는 미래의 가치를 현재를 기준으로 환산한 금액입니다. <br/>
                - 현재 가치는 물가상승률(2021년 기준 2%)을 반영해 계산됩니다.<br />
                </div>
            </div>
        </div>
    );
}

export default Final_Result;

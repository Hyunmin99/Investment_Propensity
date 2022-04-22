import React, { useState } from 'react';
import '../App.css';
import Header from '../component/Header';
import NextButton from '../component/NextButton';
import QNA from '../content/QNA'

const QnA = QNA[8];

function Q9(props) {
  const Res = props.location.state.Res;

  const [Response, getResponse] = useState('Not Selected!');

  function SelButton({ Answer }) {
    const id = Answer.id;
    const answer = Answer.Answer;

    const onClick = () => {
      QnA.Answers.map(answer => (
          answer.State = false
      ));
      Answer.State = !Answer.State;
      QnA.status = true;
      console.log(answer);
      getResponse(id);
    }
    return (
      <div>
        <button className={'sel-button'} onClick={ onClick } style={{backgroundColor: Answer.State ? '#1d1a82':'#F7F7F7', color: Answer.State && 'White'}}>{answer}</button>
      </div>
    );
  }
  
  Res[QnA.page] = Response;
  
  return (
    <div className="App">
      <Header history={props.history}/>
      <div className='Content'>
        <h3 className='page'>{ QnA.page }</h3> 
        <h1 className='question'> { QnA.Question }</h1>
        <div className='balance'>
            <h2>계좌 잔고</h2>
            <p><b>투자금</b>: 1억<br /><b>수익률</b>: -10%<br /><b>손익</b>: -1,000만원</p>
        </div>
        {QnA.Answers.map(answer => (
          <SelButton key= {answer.id} Answer={answer}/>
        ))}
        {QnA.status ? <NextButton Path={"/q10"} Res={Res} Text={'Next'}/> : <button disabled className='next'>Next</button> }
      </div>
    </div>
  );
}

export default Q9;

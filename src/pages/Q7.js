import React, { useState } from 'react';
import Header from '../component/Header';
import NextButton from '../component/NextButton';
import QNA from '../content/QNA'

const QnA = QNA[6];

function Q7(props) {
    const Res = props.location.state.Res;
    const ResponseList = [];
    const [a, setA] = useState(false); // 렌더링을 위해.. 임의로 넣음

    function MulSelection({ Answer }) {
        const id = Answer.id;
        const answer = Answer.Answer;
        const price = Answer.Price;

        const onClick = () => {
            Answer.State = !Answer.State;
            QnA.status = true;
            Answer.State === false ? setA(-id): setA(id);
        };
        return (
            <div>
                <div className={'ell-comp'} onClick={onClick} style={{backgroundColor: Answer.State ? '#1d1a82':'#F7F7F7', color: Answer.State && 'White'}}>{answer}
                <div className={'small-text'} style={{marginTop: '0.5rem'}}>
                        {price}
                    </div>
                </div>
            </div>
        );
    }
    
    QnA.Answers.map(answer => (
        answer.State && ResponseList.push(answer.id)
    ));
    Res[QnA.page] = ResponseList;
    console.log(ResponseList);

    return (
        <div className="App">
            <Header history={props.history}/>
            <div className='Content'>
                <h3 className='page'>{  QnA.page }</h3> 
                <h1 className='question'>{  QnA.Question }</h1>
                <div className={'ell-body'}>
                    { QnA.Answers.map(answer => (
                        <MulSelection key= {answer.id} Answer={answer} />
                    ))}
                </div>
                <div style={{paddingTop: '0.5rem'}}></div>
                {QnA.status ?  <NextButton Path={"/q8"} Res={Res} Text={'Next'}/> : <button disabled className='next'>Next</button> }
            </div>
        </div>
    );
}

export default Q7;
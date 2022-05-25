import React from 'react';

function MultiSel({QnA, getResponse}) {

  function MulSelection({ Answer }) {
    const ResponseList = [];

    const onClick = () => {
      Answer.State = !Answer.State;
      QnA.status = true;

      QnA.Answers.map((answer) => answer.State && ResponseList.push(answer.id));
      getResponse(ResponseList);
    };
    return (
      <div>
        <li
          className={"ell-comp"}
          onClick={onClick}
          style={{
            backgroundColor: Answer.State ? "#1d1a82" : "#F7F7F7",
            color: Answer.State && "White",
          }}
        >
          {Answer.Answer}
        </li>
      </div>
    );
  }

    return (
      <div>
        <div className="Content">
          <h3 className="page">{QnA.questionID}</h3>
          <h1 className="question">{QnA.Question}</h1>
          <div className={"ell-body"}>
            {QnA.Answers.map((answer) => (
              <MulSelection key={answer.id} Answer={answer} />
            ))}
          </div>
          <div style={{ paddingTop: "0.5rem" }}></div>
        </div>
      </div>
    );
}

export default MultiSel;
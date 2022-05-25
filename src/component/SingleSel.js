import React from 'react';

function SingleSel({QnA, getResponse}) {

      function SelButton({ Answer }) {
        const id = Answer.id;

        const onClick = () => {
          QnA.Answers.map((answer) => (answer.State = false));
          Answer.State = !Answer.State;
          QnA.status = true;
        //   console.log(Answer);
          getResponse(id);
        };
        return (
          <div>
            <button
              className={"sel-button"}
              onClick={onClick}
              style={{
                backgroundColor: Answer.State ? "#1d1a82" : "#F7F7F7",
                color: Answer.State && "White",
              }}
            >
              {Answer.Answer}
              {Answer.Description.length > 0 && (
                <div
                  className={"small-text"}
                  style={{
                    marginTop: "0.5rem",
                    color: Answer.State && "#F2F2F2",
                  }}
                >
                  {Answer.Description}
                </div>
              )}
            </button>
          </div>
        );
      }
    return (
      <div>
        <div className="Content">
          <h3 className="page">{QnA.questionID}</h3>
          <h1 className="question"> {QnA.Question}</h1>
          {QnA.Answers.map((answer) => (
            <SelButton key={answer.id} Answer={answer} />
          ))}
        </div>
      </div>
    );
}

export default SingleSel;
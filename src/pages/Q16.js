import React, { useState } from "react";
import QNA from "../content/QNA";
import Header from "../component/Header";
import SingleSel from "../component/SingleSel";
import MultiSel from "../component/MultiSel";
import SliderSel from "../component/SliderSel";
import NextButton from "../component/NextButton";

function Q16(props) {
  const Res = props.location.state.Res;

  const PAGE = 16;
  const QnA = QNA[QNA.findIndex((qna) => qna.questionID === PAGE)];

  const [Response, getResponse] = useState("Not Selected!");
  Res[PAGE] = Response;

  return (
    <div>
      <Header history={props.history} />
      {QnA.Type === "SingleSel" ? (
        <SingleSel QnA={QnA} getResponse={getResponse} />
      ) : QnA.Type === "MultiSel" ? (
        <MultiSel QnA={QnA} getResponse={getResponse} />
      ) : (
        QnA.Type === "SliderSel" && (
          <SliderSel QnA={QnA} getResponse={getResponse} />
        )
      )}
      {QnA.status ? (
        <NextButton Path={"/q17"} Res={Res} Text={"Next"} />
      ) : (
        <button disabled className="next">
          Next
        </button>
      )}
    </div>
  );
}

export default Q16;

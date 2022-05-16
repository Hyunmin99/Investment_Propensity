import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

const ScrollToTop = ({ location, children }) => {
  // console.log(children);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default withRouter(ScrollToTop);

// 출처: https://choowiki.com/15 [choowiki]

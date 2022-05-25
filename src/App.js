import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from './component/ScrollToTop';
// import './App.css';
import Start from "./pages/Start";
import Q1 from './pages/Q1';
import Q2 from './pages/Q2';
import Q3 from './pages/Q3';
import Q4 from './pages/Q4';
import Q5 from './pages/Q5';
import Q6 from './pages/Q6';
import First_Result from "./pages/First_Result";
import Q7 from './pages/Q7';
import Q8 from './pages/Q8';
import Q9 from './pages/Q9';
import Q10 from './pages/Q10';
import Q11 from './pages/Q11';
import Q12 from './pages/Q12';
import Q13 from './pages/Q13';
import Q14 from './pages/Q14';
import Q15 from './pages/Q15';
import Q16 from './pages/Q16';
import Q17 from './pages/Q17';
import Final_Result from './pages/Final_Result';
import Test from './pages/Test';

function App() {
  let history = useHistory();

  useEffect(() => {
    window.onpopstate = function () {
      history.go(1);
    };
  }, [history]);

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <ScrollToTop>
            <Route exact path="/" component={Start} />
            <Route exact path="/q1" component={Q1} />
            <Route exact path="/q2" component={Q2} />
            <Route exact path="/q3" component={Q3} />
            <Route exact path="/q4" component={Q4} />
            <Route exact path="/q5" component={Q5} />
            <Route exact path="/q6" component={Q6} />
            <Route exact path="/fresult" component={First_Result} />
            <Route exact path="/q7" component={Q7} />
            <Route exact path="/q8" component={Q8} />
            <Route exact path="/q9" component={Q9} />
            <Route exact path="/q10" component={Q10} />
            <Route exact path="/q11" component={Q11} />
            <Route exact path="/q12" component={Q12} />
            <Route exact path="/q13" component={Q13} />
            <Route exact path="/q14" component={Q14} />
            <Route exact path="/q15" component={Q15} />
            <Route exact path="/q16" component={Q16} />
            <Route exact path="/q17" component={Q17} />
            <Route exact path="/result" component={Final_Result} />
            <Route exact path="/t" component={Test} />
          </ScrollToTop>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

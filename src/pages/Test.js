import React, { useEffect } from 'react';


function Test() {
    useEffect(() => {

        window.onpopstate = function ( event ) {
          console.log(`popstate`);
          console.log(`location : ${document.location}, state : ${JSON.stringify(event.state)}`);
        };
    
        console.log(`use effect ..`);
    }, []);
    
    return(
        <div>
            <button onClick={() => window.history.pushState('v1', 'v1 title', '/investment_propensity/q1')}> Q1 </button>
            <button onClick={() => window.history.pushState('v2', 'v2 title', '/investment_propensity/q2')}> Q2 </button>
        </div>
    );

};

export default Test;
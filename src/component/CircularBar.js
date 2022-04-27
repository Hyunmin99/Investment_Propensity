import React from 'react';
import { CircularProgressbar,buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularBar({Type, Grade}) {
    const MIN = Type === '투자 목적' ? 4 :
                Type === '위험 감내도' ? 4 : 2;
    
    return (
        <div>
            <div className='GradeGraph'>
                <div style={{width: 64, height: 64, display: 'inline-block'}}>
                    <CircularProgressbar
                        value = {((MIN+1)-Grade)*(100/MIN)}
                        text = {`${Grade}등급`}
                        circleRatio = {0.75}
                        strokeWidth= {14}
                        styles={buildStyles({
                            rotation: 1 /2+1 / 8,
                            pathColor: '#FFB950',
                            trailColor: '#F4F3F4',
                            textColor: '#1B1B33',
                            textSize: '24px'
                        })}
                    />
                </div>
                <div style={{display: 'inline-block'}}><b>{Type}</b></div>
            </div>
        </div>
    );
}

export default CircularBar;
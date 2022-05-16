import React from "react";

function Header({ history }) {
    function onClick() {
        const goStart = window.confirm(
            "응답한 결과가 사라져요🥲 \n시작 페이지로 가시겠습니까?"
        );

        if (goStart) {
            return history.push("/");
        } else return null;
    }

    return (
        <div>
            <div className="Header" onClick={onClick}>
                {/* <div className="Header"> */}
                <div>투자 성향 테스트</div>
            </div>
        </div>
    );
}

export default Header;

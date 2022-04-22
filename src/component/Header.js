import React, { useEffect, useState, useRef } from 'react';

function Header({history}) {
    const mounted = useRef(false);
    const [isBlocking, setISBlocking] = useState(false);

    const onClick = () => {
        setISBlocking(true);
    };

    useEffect(() => {
        console.log(history);

        history.block((location, action) => {
            console.log('#### history block', isBlocking, action, location);
            if(isBlocking && action === 'POP') {
                console.log('#### blocked ####');
                return false;
            }
        });
        // const unblock = history.block("처음 화면으로 돌아가시겠어요? 🥲");
        // return () => {unblock();}
    }, [isBlocking]);

    return (
        <div>
            <div className="Header" onClick={onClick}>
                <div>투자 유니버스</div>
            </div>
        </div>
    );
}

export default Header;
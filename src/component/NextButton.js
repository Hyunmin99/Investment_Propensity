import React from "react";
import { Link } from "react-router-dom";

function NextButton({ Path, Res, Text }) {
    return (
        <div>
            <div>
                <Link
                    to={{
                        pathname: Path,
                        state: {
                            Res: Res,
                        },
                    }}
                >
                    <button className={"next"}>{Text}</button>
                </Link>
            </div>
        </div>
    );
}

export default NextButton;

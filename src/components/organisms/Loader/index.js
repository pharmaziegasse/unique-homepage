//** Standard Frameworks */
import React from "react";

//** Lazy Loader Animation (Balls) */
const Loader = (props: Props): React.Element<*> => {
    return(
        <div className="loader">
        <span className="loader__ball loader__ball--1" />
        <span className="loader__ball loader__ball--2" />
        <span className="loader__ball loader__ball--3" />
        </div>
    )
}

export default Loader

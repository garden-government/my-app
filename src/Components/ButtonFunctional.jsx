import React from "react";

const ButtonFunctional = ({idv, title, functional}) => {
    return (
        <div>
            <button id ={idv} onClick = {functional} > {title} </button>
        </div>
    );
};

export default ButtonFunctional;
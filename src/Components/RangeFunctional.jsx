import React from "react";

const RangeFunctional = ({name, maxV, minV, defoult, title, functional}) => {
    return (
        <div>
            <label>{title}</label>
            <input type= "range" id= {name} name= {name} defaultValue={defoult} onChange={functional} min={minV} max={maxV}></input>
        </div>
    );
};
export default RangeFunctional;
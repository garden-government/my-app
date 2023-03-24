import React,{useEffect, useState} from "react";

const RangeFunctional = (props) => {

    const [valueCoulor,setValue] = useState(100);

    useEffect(()=>{
        const canMain = document.getElementById("mainCanvas");
        const ctxMain = canMain.getContext("2d");
        const scane = ctxMain.getImageData(0,0,canMain.width,canMain.height); 
      
        const canHelp = document.getElementById("helpCanvas");
        const ctxHelp = canHelp.getContext("2d");
        const scaneHelp = ctxHelp.getImageData(0,0,canHelp.width,canHelp.height);
    
        for (let i  = 0; i < scane.data.length;i+=4){
        scane.data[i+Number(props.nmd)] = scaneHelp.data[i+Number(props.nmd)] * (Number(valueCoulor) )/ 100;
        } 
        ctxMain.putImageData(scane,0,0);
    })

      /*
<div>
            <label>{name}</label>
            <input type= "range" id= {name}  min={0} max={200}
            onChange={event => setValue(event.target.value)} value= {valueCoulor}></input>
        </div>*/
    return (
        <div>
            <label>{props.name}</label>
            <input className="slider" type= "range" id= {props.name}  min={0} max={200}
            onChange={event => setValue(event.target.value)}></input>
        </div>
    );
};
export default RangeFunctional;
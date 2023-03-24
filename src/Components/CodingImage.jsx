import React, { useState } from "react";

const CodingImage = () => {

    const[byte,setByte] = useState(2);

    function loadFile () {
        let el = document.getElementById("loadInputFile2");
        let file = el.files[0];
        let reader = new FileReader();
        
        reader.onload = function(){
          loadImage(reader.result, "helpCanvas");
        }

        try {
            reader.readAsDataURL(file);
        } catch (error) {
            console.log("No chosen file")
        }
    }

    function loadImage(srcImage, idCanvas){
        const img = new Image();
        img.src = srcImage;
        
        img.onload = function () {
          const can = document.getElementById(idCanvas);
          const canMain = document.getElementById("mainCanvas");

          const ctx = can.getContext("2d");
          can.width = canMain.width;
          can.height = canMain.height;
      
          ctx.drawImage(img,0,0,can.width,can.height);

          changeLastBitMain();
        }

    }

    function pow(number, stepen){
        let result = 1;

        for (let i = 0; i < stepen; i++){
            result *= number;
        }

        return result;
    }

    function numberToBinary(number){
        let result = new Array();

        for(let i = 7; i >= 0; i--){
            if ((number - pow(2,i))>= 0){
                result[i] = "1";
                number -= pow(2,i);
            }
            else {
                result[i] = "0";
            }
        }

        return result;
    }

    function binaryToNumber(binaryNumber){
        let result = 0;

        for(let i in binaryNumber){
            if (binaryNumber[i] == "1"){
                result+= pow(2,i)
            }
        }

        return result;
    }

    function changeLastBit(numberMain, numberSide, last){
        let arrNumberMain = numberToBinary(numberMain);
        let arrNumberSide = numberToBinary(numberSide);

        for (let i = 0; i < last; i++){
            arrNumberMain[i] = arrNumberSide[7 - i];
        }

        return binaryToNumber(arrNumberMain)
    }

    function changeLastBitMain(){
        const canMain = document.getElementById("mainCanvas");
        const ctxMain = canMain.getContext("2d");
        const scane = ctxMain.getImageData(0,0,canMain.width,canMain.height); 

        const canHelp = document.getElementById("helpCanvas");
        const ctxHelp = canHelp.getContext("2d");
        const scaneHelp = ctxHelp.getImageData(0,0,canHelp.width,canHelp.height);

        for (let i = 0; i < scane.data.length; i+=4){
            scane.data[i] = Number(changeLastBit(scane.data[i], scaneHelp.data[i], byte));
            scane.data[i + 1] = Number(changeLastBit(scane.data[i + 1], scaneHelp.data[i + 1], byte));
            scane.data[i + 2] = Number(changeLastBit(scane.data[i + 2], scaneHelp.data[i + 2], byte));
        }            

        ctxMain.putImageData(scane,0,0);
        ctxHelp.putImageData(scane,0,0);
    }

    return (
        <div className='WriteImage'>
            <div className='HeaderInfo'>Coding image</div>
            <div className="forLab">
                <label className="lab">
                    Load
                    <input type= "file" id= "loadInputFile2" />  
                </label>      
            </div>
 

          <div>
            <label>Select number of bytes: {byte}</label>
            <input className="slider" type= "range" id= "byteForWrite"min={0} max={8} step={1} 
            value ={byte} onChange = {event => setByte(event.target.value)}></input>         
          </div>

            <button id= "loadImageBut2" onClick={loadFile} >Start coding</button>
        </div>
    );
};

export default CodingImage;
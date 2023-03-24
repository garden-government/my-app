import React,{useState} from "react";

const ExtractionImage = () => {

    const[byte,setByte] = useState(2);

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

    function takeLastBit(number, last){
        let arrNumber = numberToBinary(number);
        let arrNumberResult = numberToBinary(0);
        for (let i = 0; i < last; i++){
            arrNumberResult[7 - i] = arrNumber[i] ;
        }
        return binaryToNumber(arrNumberResult)
    }

    function ExtractionImage(){
        const canMain = document.getElementById("mainCanvas");
        const ctxMain = canMain.getContext("2d");
        const scane = ctxMain.getImageData(0,0,canMain.width,canMain.height); 

        const canHelp = document.getElementById("helpCanvas");
        const ctxHelp = canHelp.getContext("2d");

        for (let i = 0; i < scane.data.length; i+=4){
            scane.data[i] = Number(takeLastBit(scane.data[i], byte));
            scane.data[i + 1] = Number(takeLastBit(scane.data[i + 1], byte));
            scane.data[i + 2] = Number(takeLastBit(scane.data[i + 2], byte));
        }            

        ctxMain.putImageData(scane,0,0);
        ctxHelp.putImageData(scane,0,0);
    }


    return (
        <div className='ExtractionImage'>
            <div className='HeaderInfo'>Extraction image</div>
          <div>
            <label>Select number of bytes</label>
            <input  className="slider"  type= "range" id= "byteForExtraction" min={0} max={8} step={1}
             value ={byte} onChange = {event => setByte(event.target.value)}></input>
          </div>

          <button id= "extractionImageBut" onClick={ExtractionImage}>Extraction</button>
        </div>
    );
};

export default ExtractionImage;
import React from 'react';
import './App.css';
import ButtonFunctional from './Components/ButtonFunctional';
import LoadMainImage from './Components/LoadMainImage';
import RangeFunctional from './Components/RangeFunctional';
import CodingImage from './Components/CodingImage';
import ExtractionImage from './Components/ExtractionImage';

function clear  () {
  const canMain = document.getElementById("mainCanvas");
  const ctxMain = canMain.getContext("2d");
  ctxMain.clearRect(0,0,canMain.width,canMain.height); 

  const canHelp = document.getElementById("helpCanvas");
  const ctxHelp = canHelp.getContext("2d");
  ctxHelp.clearRect(0,0,canHelp.width,canHelp.height); 
}

function test  () {
  const link = document.createElement('a'); 
  link.download = 'download.png';
  const canvas = document.getElementById("mainCanvas");
  link.href = canvas.toDataURL();
  link.click();
  //link.delete;
}

function inversion () {

  const canMain = document.getElementById("mainCanvas");
  const ctxMain = canMain.getContext("2d");
  const scane = ctxMain.getImageData(0,0,canMain.width,canMain.height); 

  const canHelp = document.getElementById("helpCanvas");
  const ctxHelp = canHelp.getContext("2d");

  for (let i  = 0; i < scane.data.length;i+=4){
    scane.data[i] = 255 - scane.data[i];
    scane.data[i+1] = 255 - scane.data[i+1];
    scane.data[i+2] = 255 - scane.data[i+2];
  } 

  ctxMain.putImageData(scane,0,0);
  ctxHelp.putImageData(scane,0,0);
}

function blackAndWhite () {

  const canMain = document.getElementById("mainCanvas");
  const ctxMain = canMain.getContext("2d");
  const scane = ctxMain.getImageData(0,0,canMain.width,canMain.height); 

  const canHelp = document.getElementById("helpCanvas");
  const ctxHelp = canHelp.getContext("2d");

  for (let i  = 0; i < scane.data.length;i+=4){
    let middleValue =  Math.trunc((scane.data[i] + scane.data[i+1] + scane.data[i+2])/3);
    scane.data[i] = middleValue;
    scane.data[i+1] = middleValue;
    scane.data[i+2] = middleValue;
  } 

  ctxMain.putImageData(scane,0,0);
  ctxHelp.putImageData(scane,0,0);
}


function App() {

  return (
    <div className="App">

      <div className="WorkArea">

        <div className='MainCanvas'>
          <canvas id='mainCanvas'></canvas>
        </div>

        <div className='HelpCanvas'>
          <canvas id='helpCanvas'></canvas>
        </div>

      </div>

      <div className='Functional'> 

        <div className='Header'>
          <div className = "NameProect" >PHOTOSHOP</div>
        </div>

        <LoadMainImage></LoadMainImage>

        <div className='FunctionalStyle'>
          <div className='SlidersFun'>
            <div className='HeaderInfo'>Functional</div>
            <RangeFunctional name="Red" nmd={0}></RangeFunctional>
            <RangeFunctional name="Grean" nmd={1}></RangeFunctional>
            <RangeFunctional name="Blue" nmd={2.}></RangeFunctional>
          </div>

          <div className='ButtonFun'>
            <ButtonFunctional idv = "inversion" title = "Inversion" functional={inversion}/>
            <ButtonFunctional idv = "blackAndWhite" title = "Not colour" functional={blackAndWhite}/>
          </div>
        </div>

        <CodingImage></CodingImage>

        <ExtractionImage></ExtractionImage>

        <div className='grt'>
          <div className='Save'>
            <ButtonFunctional idv = "saveBut" title = "Save" functional={test}/>
          </div>

          <div className='Clear'>
            <ButtonFunctional idv = "saveClear" title = "Clear" functional={clear}/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

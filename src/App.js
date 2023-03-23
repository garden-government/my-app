import React from 'react';
import './App.css';
import ButtonFunctional from './Components/ButtonFunctional';
import LoadMainImage from './Components/LoadMainImage';
import RangeFunctional from './Components/RangeFunctional';
import CodingImage from './Components/CodingImage';
import ExtractionImage from './Components/ExtractionImage';

function test  () {
  console.log(1234);
}

function sliderRed (event) {

  const canMain = document.getElementById("mainCanvas");
  const ctxMain = canMain.getContext("2d");
  const scane = ctxMain.getImageData(0,0,canMain.width,canMain.height); 

  const canHelp = document.getElementById("helpCanvas");
  const ctxHelp = canHelp.getContext("2d");
  const scaneHelp = ctxHelp.getImageData(0,0,canHelp.width,canHelp.height);

  let valueForChange = event.target.value;
  
  if(canMain.width === canHelp.width && canMain.height === canHelp.height){

    for (let i  = 0; i < scane.data.length;i+=4){
      //scane.data[i] = scaneHelp.data[i] * Number(valueForChange) / 100;
      scane.data[i] = scaneHelp.data[i] * (Number(valueForChange)*2 )/ 100;
    } 

    console.log( Number(valueForChange))
    
  }

  ctxMain.putImageData(scane,0,0);
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
          <div className = "name">PHOTOSHOP</div>
          <div className = "info">INFO</div>
        </div>

        <LoadMainImage></LoadMainImage>

        <div className='Sliders'>
          <RangeFunctional id = "Red" max={30} min={0} defoult={10} title = "Red"  functional={test}></RangeFunctional>
        </div>

        <CodingImage></CodingImage>

        <ExtractionImage></ExtractionImage>

        <div className='Save'>
          <ButtonFunctional idv = "saveBut" title = "Save image" functional={test}/>
        </div>

        <div className='Clear'>
          <ButtonFunctional idv = "saveClear" title = "Clear canvas" functional={test}/>
        </div>
      </div>
    </div>
  );
}

export default App;

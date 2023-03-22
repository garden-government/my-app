import React from 'react';
import './App.css';
import ButtonFunctional from './Components/ButtonFunctional';
import RangeFunctional from './Components/RangeFunctional';

const test  = () => {
  console.log(1234);
}

const loadFile = () => {
  let el = document.getElementById("loadInputFile");
  let file = el.files[0];
  let reader = new FileReader();
  reader.onload = function(){
    loadImage(reader.result, "mainCanvas");
    loadImage(reader.result, "helpCanvas");
  }
  reader.readAsDataURL(file);
}

const loadFile2 = () => {
  let el = document.getElementById("loadInputFile2");
  let file = el.files[0];
  let reader = new FileReader();
  reader.onload = function(){
    loadImage(reader.result, "helpCanvas");
  }
  reader.readAsDataURL(file);
}

function loadImage(srcImage, idCanvas){
  const img = new Image();
  img.src = srcImage;
  
  img.onload = function () {
    const can = document.getElementById(idCanvas);

    const ctx = can.getContext("2d");
    can.width = img.width;
    can.height = img.height;

    ctx.drawImage(img,0,0,can.width,can.height);
  }
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
      scane.data[i] = scaneHelp.data[i] * Number(valueForChange) / 100;
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

        <div className='LoadImage'>
          <div>
            <input type= "file" id= "loadInputFile" onChange={loadFile}></input>           
          </div>
          
          <ButtonFunctional idv = "loadImage" title = "Load" functional={test}/>
        </div>

        <div className='Sliders'>
          <RangeFunctional id = "Red" max={30} min={0} defoult={10} title = "Separia"  functional={sliderRed}></RangeFunctional>
        </div>

        <div className='WriteImage'>

          <div>
            <input type= "file" id= "loadInputFile2" onChange={loadFile2}></input>
          </div>

          <div>
            <label>Select number of bytes</label>
            <input type= "range" id= "byteForWrite" name= "byteForWrite" defaultValue={0} min={0} max={8} step={1}></input>         
          </div>

          <ButtonFunctional idv = "writeImage" title = "Start" functional={test}/>        
        </div>

        <div className='ExtractionImage'>
          <div>
            <label>Select number of bytes</label>
            <input type= "range" id= "byteForExtraction" name= "byteForExtraction" defaultValue={0} min={0} max={8} step={1}></input>
          </div>

         <ButtonFunctional idv = "extractionImage" title = "Start" functional={test}/>
        </div>

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

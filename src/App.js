import React, { useState } from 'react';
import './App.css';
import ButtonFunctional from './Components/ButtonFunctional';
import RangeFunctional from './Components/RangeFunctional';



const test  = () => {
  console.log(123423542434);
}

function App() {
  const img = new Image();
  const nothingDoing = () => {};


  img.onload = function () {
    const can = document.getElementById("c");
    can.width = can.height = 500;
    const ctx = can.getContext("2d");

    //ctx.drawImage(img,0,0,can.width,can.height);
  
    const scane = ctx.getImageData(0,0,can.width,can.height);

    for (let i  = 0; i < scane.data.length;i+=4){
      scane.data[i] = 244; //changeLastBit(scanData[i], scanData2[i], howBit)
      scane.data[i+1] = 200; //changeLastBit(scanData[i+1], scanData2[i+1], howBit)
      scane.data[i+2] = 150; //changeLastBit(scanData[i+2], scanData2[i+2], howBit)
      scane.data[i+3] = 170;
    }
    
    ctx.putImageData(scane,0,0);
  }



  

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
            <a target="_blank" href="https://snipp.ru/tools/base64-img">
              <label>Link</label>              
            </a>
            <input type= "text" name= "loadInput" placeholder="data:image/png;base64..."></input>            
          </div>
          
          <ButtonFunctional idv = "loadImage" title = "Load" functional={test}/>
        </div>

        <div className='Sliders'>
          <RangeFunctional id = "Separia" max={100} min={0} defoult={0} title = "Separia"  functional={test}></RangeFunctional>
        </div>

        <div className='WriteImage'>

          <div>
            <a target="_blank" href="https://snipp.ru/tools/base64-img">
              <label>Image 1</label>             
            </a>
            <input type= "text" name= "loadImage1" placeholder="data:image/png;base64..."></input>
          </div>

          <div>
            <a target="_blank" href="https://snipp.ru/tools/base64-img">
              <label>Image 2</label>             
            </a>
            <input type= "text" name= "loadImage2" placeholder="data:image/png;base64..."></input>            
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

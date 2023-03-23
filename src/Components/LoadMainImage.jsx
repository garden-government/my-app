import React from "react";

const LoadMainImage = () => {

    function loadFile () {
        let el = document.getElementById("loadInputFile");
        let file = el.files[0];
        let reader = new FileReader();
        
        reader.onload = function(){
            
          loadImage(reader.result, "mainCanvas");
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
      
          const ctx = can.getContext("2d");
          can.width = img.width;
          can.height = img.height;
      
          ctx.drawImage(img,0,0,can.width,can.height);
        }
    }

    return (
        <div className='LoadImage'>
            <div>
                <input type= "file" id= "loadInputFile" ></input>           
            </div>

            <button id= "loadImageBut" onClick={loadFile}>"Load"</button>
        </div>
    );
};

export default LoadMainImage;
import React, { useEffect } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
import { useState  } from 'react';

 function Qrscan() {

    const [scanResult, setScanResult] = useState(null); 


    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader',{
            qrbox:{
                width:250,
                height:250,
            },
            fps: 5,});
    
        scanner.render(success, error);
    
        function success(result){
            scanner.clear();
            setScanResult(result);
    
        }
        
        function error(err){
            console.warn(err);   
        }

    

    },[])

  

  return (
    <>
    <h1> results</h1>
    <h1> {scanResult
    ? scanResult
    :      <div id="reader" style="width: 600px"></div>
    
    }</h1>

    </>
  )
}


export default Qrscan;
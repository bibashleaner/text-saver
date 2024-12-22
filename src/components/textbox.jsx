import React from "react";
import { useState } from 'react';
import '../assets/css/components/textbox.css';

function Textbox()
{
    const [text, setText] = useState(' ');
    
    const handleDownloadButton = () =>{
        const blob =new Blob([text], {type:'text/plain'}); //blob holds the plain text file
      const url = window.URL.createObjectURL(blob); //create temprory url that allows browers to access the content of blob
      const a = document.createElement('a'); //create anchor element
      a.href = url; //makes the valid url to download the file
      a.download = "output.txt"; //giving the default name('output.txt') to the file
      document.body.appendChild(a); //anchor element is added to DOM
      a.click(); //triggers to download file
      document.body.removeChild(a); //anchor element is remove from DOM
      window.URL.revokeObjectURL(url); // frees up memory and resource used by temprory url
    }

    return (
     <div style={{padding:'20px', fontFamily:'arial'}} className="text-wrapper">
        <h1>Text Saver</h1>
        <textarea
            rows='10'
            cols='80'
            placeholder='Write something here'
            value={text}
            onChange={(e) => setText(e.target.value)}
            
            ></textarea>
        <br/><br/>
        <button onClick={handleDownloadButton}>Save text</button>
    </div>
    );
}

export default Textbox;
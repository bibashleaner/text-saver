import React from "react";
import { useState } from 'react';
import '../assets/css/components/textbox.css';

function Textbox()
{
    const [text, setText] = useState(' ');
    const [font, setFont] = useState('Arial, sans-serif');

    const fonts = [
        "Arial, sans-serif",
        "Courier New, monospace",
        "Georgia, serif",
        "Tahoma, sans-serif",
        "Times New Roman, serif",
        "Verdana, sans-serif",
      ];
    
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
     <div className="text-wrapper">
        <h1>Text Saver</h1>
        <textarea
            rows='10'
            cols='80'
            placeholder="Write something here"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
                fontFamily: font, 
            }}
            ></textarea>
            <div className="buttons">
                <label htmlFor="font-selector" style={{ display: "block", marginBottom: "10px" }}>
                    Select Font:
                </label>  

            <select
                value={font}
                onChange={(e) => setFont(e.target.value)}
                style={{
                    marginBottom: "20px",
                    fontSize: "16px",
                }}
                >
            {fonts.map((fontName, index) => 
                <option key={index} value={fontName}>{fontName}</option>
            )}
            </select>
        <br/><br/>
        <button onClick={handleDownloadButton}>Download</button>
        </div>
    </div>
    );
}

export default Textbox;
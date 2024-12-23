import React, { useRef,useState } from "react";
import SignatureCanvas from 'react-signature-canvas';
import '../assets/css/components/signaturebox.css';

export default function SignaturePad(){
    const sigCanvas = useRef(null);

    const clearpad = () => {
        sigCanvas.current.clear();
    }

    const sigSave = () =>{
        const signatureImage = sigCanvas.current.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = signatureImage;
        a.download = 'signatureImage.png';
        a.click();
    }

    return (
        <>
        <div className="sign">
            <h1>Signature Box</h1>
            <SignatureCanvas
                rows='10'
                cols='80'
                placeholder='Sign Here'
                ref = {sigCanvas}
                onChange={(e) => setText(e.target.value)}
                canvasProps={{width: 500, height: 300, className: 'drawing-canvas',
                    style : {border :'2px solid black'},
                }}
                />
        </div>
        <div className="buttons">
            <button onClick={clearpad}>Clear</button>
            <button onClick={sigSave}>Save</button>
        </div>
        </>
    );

}
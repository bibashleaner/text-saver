import React, { useRef,useState } from "react";
import SignatureCanvas from 'react-signature-canvas';

export default function SignaturePad(){
    const sigCanvas = useRef(null);

    const clearpad = () => {
        sigCanvas.current.clear();
    }

    return (
        <div>
            <h1>Signature Box</h1>
            <SignatureCanvas
                rows='10'
                cols='80'
                placeholder='Sign Here'
                ref = {SignCanvas}
                onChange={(e) => setText(e.target.value)}
            ></SignatureCanvas>
        </div>
    );

}
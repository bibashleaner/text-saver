import React from "react";

export default function Footer(){
    return(
        <div className="card text-center" style={{position: "fixed", bottom: "0", width: "100%"}}>
            <div className="card-body bg-dark text-white">
                <h5 className="card-title">Copyrights &copy; Fynova Technologies</h5>
                <br />
                <p className="card-text">Leading tech company in Nepal</p>
            </div>
        </div>
    );
}
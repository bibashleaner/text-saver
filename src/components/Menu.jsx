import React from "react";

const FirstMenu = () =>{
    return <h1>hello menu 1</h1>;
}

const OtherMenu = () =>{
    return <h1>hello menu 2</h1>;
}

const Contact = () =>{
    return <h1>hello contact</h1>;
}

const Menu = () => {
    return(
        <main>
            <FirstMenu/>
            <OtherMenu/>
            <Contact/>
        </main>
    );
};

export default Menu;
export {FirstMenu, OtherMenu, Contact};
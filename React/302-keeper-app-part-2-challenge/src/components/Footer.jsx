import React from "react";

const date = new Date().getFullYear();

function Footer(){
    return <footer>
        <p>{date}</p>
        </footer>
}

export default Footer;
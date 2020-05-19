import React, { Component } from "react";
import "./style.css";

const PictureContainer = ({children}) => (
    
    <div className="d-flex justify-content-center flex-wrap">
        {children}
    </div>
)



export default PictureContainer;
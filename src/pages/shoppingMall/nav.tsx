import React, { useEffect, useRef, useState } from "react";
import "./header.css";

export const Nav: React.FC = () =>{
    return(
    <nav id="nav">
        <div className="banner_x center">
            <a className="logo">
                <h1>新蜂商城</h1>
            </a>
            <div className="fr">
                <div className="search">
                    <input className="text" type="text" id="keyword"/>
                    <div className="search_hot">
                    </div>
                </div>
                <div className="button iconfont icon-search"></div>
            </div>
        </div>
    </nav>
    );
}
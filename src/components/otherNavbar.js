import {Link} from "react-router-dom";
import React from 'react'

class OtherNavbar extends React.Component{
    render(){
        return(
            <div id="wrapper">
                <header id="header">
                    <a href="/" className="logo">選委會</a>
                </header>
                <nav id="nav">
                    <ul className="links">
                        <li id={"1"}><a href="/">公告事項</a></li>
                        <li id={"2"}><a href="/motivation">動機</a></li>
                        <li id={"3"}><a href="/experience">經歷</a></li>
                        <li id={"4"}><a href="/policy">政見</a></li>
                        <li id={"5"}><a href="/opening">開票</a></li>
                    </ul>
                    <ul className="icons">
                        <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a>
                        </li>
                        <li><a href="#" className="icon brands fa-facebook-f"><span
                            className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon brands fa-instagram"><span
                            className="label">Instagram</span></a></li>
                        <li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default OtherNavbar
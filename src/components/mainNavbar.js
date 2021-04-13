import React from 'react'
import {Link} from "react-router-dom";

class MainNavbar extends React.Component{
    componentDidMount() {
        window.scroll(0,0)
    }
    render(){
        return(
            <div id="wrapper" className="fade-in">
                <div id="intro">
                    <h1>臺南一中<br/>
                        選舉委員會</h1>
                    <ul className="actions">
                        <li><a href="#header" className="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
                    </ul>
                </div>

                <nav id="nav">
                    <ul className="links">
                        <li id={"1"} className={"active"}><Link to={"/"}>公告事項</Link></li>
                        <li id={"2"}><Link to={"/motivation"}>動機</Link></li>
                        <li id={"3"}><Link to={"/experience"}>經歷</Link></li>
                        <li id={"4"}><Link to={"/policy"}>政見</Link></li>
                        <li id={"5"}><Link to={"/opening"}>開票</Link></li>
                    </ul>
                    <ul className="icons">
                        <li><Link to={"#"} className={"icon brands fa-twitter"}><span className="label">Twitter</span></Link></li>
                        <li><Link to={"#"} className={"icon brands fa-facebook-f"}><span className="label">Facebook</span></Link></li>
                        <li><Link to={"#"} className={"icon brands fa-instagram"}><span className="label">Instagram</span></Link></li>
                        <li><Link to={"#"} className={"icon brands fa-github"}><span className={"label"}>Github</span></Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default MainNavbar
import React from 'react'

import {Link} from 'react-router-dom'

class OtherNavbar extends React.Component{
    componentDidMount() {
        window.scroll(0,0)
    }
    render(){
        return(
            <div id="wrapper">
                <header id="header">
                    <a href="/" className="logo">選委會</a>
                </header>
                <nav id="nav">
                    <ul className="links">
                        <li id={"1"}><Link to={"/"}>公告事項</Link></li>
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

export default OtherNavbar
import React from 'react'

class MainNavbar extends React.Component{
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
                        <li className="active"><a href="/">公告事項</a></li>
                        <li><a href="/motivation">動機</a></li>
                        <li><a href="/experience">經歷</a></li>
                        <li><a href="/policy">政見</a></li>
                        <li><a href="/opening">開票</a></li>
                    </ul>
                    <ul className="icons">
                        <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default MainNavbar
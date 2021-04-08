import React from 'react'

import OtherNavbar from "../components/otherNavbar";

class Post extends React.Component{
    componentDidMount() {
        let toggle = document.getElementById('1')
        toggle.classList.add("active")
    }

    render(){
        return(
            <OtherNavbar/>
        )
    }
}

export default Post
import React from 'react'

import OtherNavbar from "./../components/otherNavbar";

class Experience extends React.Component{
    componentDidMount(){
        let toggle = document.getElementById('3')
        toggle.classList.add("active")
    }
    render(){
        return(
            <OtherNavbar />
        )
    }
}

export default Experience
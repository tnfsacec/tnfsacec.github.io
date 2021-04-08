import React from 'react'
import OtherNavbar from "../components/otherNavbar";

class Open extends React.Component{
    componentDidMount(){
        let toggle = document.getElementById('5')
        toggle.classList.add("active")

        alert("function not enabled")
        window.location.replace('/')
    }
    render(){
        return(
            <OtherNavbar />

        )
    }
}

export default Open
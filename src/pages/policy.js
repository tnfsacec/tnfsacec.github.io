import React from 'react'

import OtherNavbar from "./../components/otherNavbar";

class Policy extends React.Component{
    componentDidMount(){
        let toggle = document.getElementById('4')
        toggle.classList.add("active")
    }
    render(){
        return(
            <OtherNavbar />
        )
    }
}

export default Policy
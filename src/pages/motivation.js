import React from 'react'

import OtherNavbar from './../components/otherNavbar'

class Motivation extends React.Component{
    componentDidMount(){
        let toggle = document.getElementById('2')
        toggle.classList.add("active")
    }
    render(){
        return(
            <OtherNavbar />
        )
    }
}

export default Motivation
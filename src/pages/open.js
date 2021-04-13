import React from 'react'

class Open extends React.Component{
    componentDidMount(){
        alert("尚未開票，功能未開放")
        window.location.replace('/')
    }
    render(){
        return(
            <h1>
                Open
            </h1>
        )
    }
}

export default Open
import React from 'react'

class Debate extends React.Component{
    componentDidMount(){
        //window.alert('正在準備')
        //window.location.replace('/')
        const url = "https://tnfsacec.github.io/file/debate.json"
        // eslint-disable-next-line
        let toBeReplace = new RegExp("\n","g")

        let request = new XMLHttpRequest()
        const title = document.getElementById("DebateTitle")
        const context = document.getElementById("DebateContext")
        //title.innerHTML += "第六屆正副會長辯論會"

        request.open('GET',url)
        request.responseType = 'text'
        request.send()
        request.onload = ()=>{
            const data = JSON.parse(request.response)
            title.innerHTML = data['title'].replace(toBeReplace,"<br>")
            context.innerHTML = data['context'].replace(toBeReplace,"<br>")
        }
    }

    render(){
        const style = {
            textAlign: "left",
            fontSize: 20
        }
        return(
            <React.Fragment>
                <h1 id={"DebateTitle"} style={{textAlign: "center"}} />
                <div id={"DebateContext"} style={style}>
                    載入中
                </div>
            </React.Fragment>
        )
    }
}

export default Debate
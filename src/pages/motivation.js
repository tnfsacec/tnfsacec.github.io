import React from 'react'

class Motivation extends React.Component{
    componentDidMount(){
        const teams = document.getElementById("teams")
        const parliamentary = document.getElementById("parliamentary")
        teams.innerHTML += "<header class=\"major\"><h1>正副會長候選人參選動機</h1></header>"
        parliamentary.innerHTML += "<header class=\"major\"><h1>學生議員 (全校選區)參選動機</h1></header>"

        const url = "https://tnfsacec.github.io/file/config.json"
        let request = new XMLHttpRequest()
        request.open('GET',url)
        request.responseType = 'text'
        request.send()
        request.onload = ()=>{
            const data = JSON.parse(request.response)
            //window.alert("president count: "+ data['president'].length)
            //window.alert("parliamentary count "+data['parliamentary'].length)
            for(let i = 0;i < data['president'].length;++i){
                teams.innerHTML += "<h2>"+(i+1)+"號候選團隊<br>"+
                    data['president'][i]+"</h2>"+
                    "<blockquote>"+data['pmo'][i]+"</blockquote>"+
                    "<h2>"+data['vp'][i]+"</h2>"+
                    "<blockquote>"+data['vpmo'][i]+"</blockquote>"+
                    "<hr />"
            }
            for(let i = 0;i < data['parliamentary'].length;++i){
                parliamentary.innerHTML += "<h2>"+(i+1)+"號候選人<br>"+
                    data['parliamentary'][i]+"</h2>"+
                    "<blockquote>"+data['parliamentarymotivation'][i]+"</blockquote>"
            }

        }
    }
    render(){
        return(
            <React.Fragment>
                <div id={"main"}>
                    <article className={"post featured"}>
                        <div id={"teams"}></div>
                        <hr />
                        <div id={"parliamentary"}></div>
                    </article>
                </div>
            </React.Fragment>
        )
    }
}

export default Motivation
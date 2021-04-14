import React from 'react'

class Experience extends React.Component{
    componentDidMount(){
        const url = "https://tnfsacec.github.io/file/config.json"
        // eslint-disable-next-line
        var toBeReplace = new RegExp("\n","g")

        let request = new XMLHttpRequest()
        const teams = document.getElementById("teams")
        const parliamentary = document.getElementById("parliamentary")
        teams.innerHTML += "<header class=\"major\"><h1>正副會長候選人經歷</h1></header>"
        parliamentary.innerHTML += "<header class=\"major\"><h1>學生議員 (全校選區)經歷</h1></header>"
        request.open('GET',url)
        request.responseType = 'text'
        request.send()
        request.onload = ()=>{
            const data = JSON.parse(request.response)
            for(let i = 0;i < data['president'].length;++i){
                teams.innerHTML += "<h2>"+(i+1)+"號候選團隊<br>"+
                    data['president'][i]+"</h2>"+
                    "<blockquote style='font-size: 20px;text-align: left;font-style: normal'>"+data['pexp'][i].replace(toBeReplace,"<br>")+"</blockquote>"+
                    "<h2>"+data['vp'][i]+"</h2>"+
                    "<blockquote style='font-size: 20px;text-align: left;font-style: normal'>"+data['vpexp'][i].replace(toBeReplace,"<br>")+"</blockquote>"+
                    "<hr />"
            }
            for(let i = 0;i < data['parliamentary'].length;++i){
                parliamentary.innerHTML += "<h2>"+(i+1)+"號候選人<br>"+
                    data['parliamentary'][i]+"</h2>"+
                    "<blockquote style='font-size: 20px;text-align: left;font-style: normal'>"+data['parliamentaryexperience'][i].replace(toBeReplace,"<br>")+"</blockquote>"
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

export default Experience
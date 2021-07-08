import React from 'react'

class Policy extends React.Component{
    componentDidMount(){
        const url = process.env.REACT_APP_API_ENDPOINT+"privacy.json"
        // eslint-disable-next-line
        var toBeReplace = new RegExp("\n","g")

        let request = new XMLHttpRequest()
        const title = document.getElementById("title")
        const context = document.getElementById("context")
        const blocks = document.getElementById("blocks")
        request.open('GET',url)
        request.responseType = 'text'
        request.send()
        request.onload = ()=>{
            const data = JSON.parse(request.response)
            title.innerHTML = data['title']
            context.innerHTML = "<h2>"+data['context'].replace(toBeReplace,"<br>")+"</h2>"
            //alert(data['sectiontitle'][0])
            //for(let i = 0;i < data['sectiontitle'].length;++i){
            //    alert("<h2>"+i+"、"+ data['sectiontitle'][i] +"</h2>"+
            //        "<p>"+data['section'][i]+"</p>")
            //}
            for(let i = 0;i < data['sectiontitle'].length;++i){
                blocks.innerHTML += "<h2>"+(i+1)+"、"+
                    data['sectiontitle'][i]+"</h2>"+
                    "<h2>"+data['sections'][i]+"</h2>"
            }

        }
    }
    render(){
        return(
            <h1>
                <React.Fragment>
                    <div id={"main"}>
                        <article className={"post featured"}>
                            <div id={"title"}>
                                載入中
                            </div>
                            <div id={"context"} style={{textAlign: "left"}}/>
                            <div id={"blocks"} style={{textAlign: "left"}}/>
                        </article>
                    </div>
                </React.Fragment>
            </h1>
        )
    }
}

export default Policy
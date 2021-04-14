import React from 'react'

class Motivation extends React.Component{
    componentDidMount(){
        const path = this.props.location.pathname.split('/')
        const url = 'https://docs.sivir.pw/home/'+path[2]
        var request = new XMLHttpRequest()
        request.open('GET',url)
        request.responseType = 'text'
        request.send()
        request.onload = ()=>{
            const data = JSON.parse(request.response)
            //window.alert(data['t1']['title'])
            for(var i = 1;i<=data['count'];++i){
                buildchunk(data['t'+i],i)
            }
        }
        function buildchunk(obj,flow){
            var title = obj['title']
            var subtitle = obj['subtitle']
            var time = obj['time']
            let id = obj['id']
            if(id === 1){
                return;
            }
            var chunks = "chunk"+flow
            var divappend = document.getElementById(chunks)
            var html = "<header class=\"major\">\n" +
                "    <span class=\"date\">"+time+"</span>\n" +
                "    <h2>"+title+"</h2>\n" +
                "    <p>"+subtitle+"</p>\n" +
                "</header>\n" +
                "<ul class=\"actions special\">\n" +
                "    <li><a href=\"#/post/"+id+"\" class=\"button large\">Full Story</a></li>\n" +
                "</ul>"
            divappend.innerHTML += html
        }
    }
    render(){
        let toRender = []
        for(let i = 1;i <= 5;++i){
            let id = "chunk"+i
            toRender.push(<div id={id}></div>)
        }
        return(
            <React.Fragment>
                <div id={"main"}>
                    <article className={"post featured"}>
                        {toRender}
                    </article>
                </div>
            </React.Fragment>
        )
    }
}


export default Motivation
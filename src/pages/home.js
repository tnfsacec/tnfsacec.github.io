import React from 'react'

import MainNavbar from '../components/mainNavbar'
//import Chunk from '../components/chunk'

class Motivation extends React.Component{
    componentDidMount(){
        const path = window.location.pathname.split('/')
        //const url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
        const url = 'https://docs.sivir.pw/home/'+path[2]

        let toggle = document.getElementById('1')
        //light up the link
        toggle.classList.add("active")

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
            var id = "chunk"+flow
            var divappend = document.getElementById(id)
            var html = "<header class=\"major\">\n" +
                "    <span class=\"date\">"+time+"</span>\n" +
                "    <h2>"+title+"</h2>\n" +
                "    <p>"+subtitle+"</p>\n" +
                "</header>\n" +
                "<ul class=\"actions special\">\n" +
                "    <li><a href=\"/pages/{%id%}\" class=\"button large\">Full Story</a></li>\n" +
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
                <MainNavbar />
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
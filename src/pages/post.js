import React from 'react'


class Post extends React.Component{
    componentDidMount() {
        //let toggle = document.getElementById('1')
        //toggle.classList.add("active")

        const path = this.props.location.pathname.split('/')
        const url = 'https://docs.sivir.pw/post/'+path[2]
        let request = new XMLHttpRequest()
        request.open('GET',url)
        request.responseType = 'text'
        request.send()
        request.onload = ()=>{
            const data = JSON.parse(request.response)
            //window.alert(data['t1']['title'])
            const title = data['title']
            const context = data['context']

            const toAdd = document.getElementById("post")
            toAdd.innerHTML += "<div id=\"main\">\n" +
                "        <!-- Post -->\n" +
                "        <section class=\"post\">\n" +
                "            <header class=\"major\">\n" +
                "                <h1>"+title+"</h1>\n" +
                "            </header>\n" +
                "            <p>"+context+"</p>\n" +
                "            <hr/>\n" +
                "        </section>\n" +
                "    </div>"
        }
    }

    render(){
        return(
            <React.Fragment>
                <div id={"post"}/>
            </React.Fragment>
        )
    }
}

export default Post
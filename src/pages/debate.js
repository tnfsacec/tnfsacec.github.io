import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

export default function Debate(){
    //const [displayStatus,setDisplayStatus] = useState(false)
    const [title,setTitle] = useState('載入中')
    const [context,setContext] = useState('')
    const [list,setList] = useState([])
    const [link,setLink] = useState([])

    const fetchFile = async ()=>{
        setList(['one','two','three'])
        setLink([{link:'https://forms.gle/NU7HzfTZThJXRErU9',context: '報名連結'},{link:'https://tnfsacec.github.io/#/post/5',context: '辯論會紀錄'}])
        const url = "https://tnfsacec.github.io/file/debate.json"
        const data = await fetch(url,{
            method: 'GET',
            headers:{
                'Accept': 'application/json'
            }
        })
        const json = await data.json()
        console.log(json)
        setTitle(json['title'])
        setContext(json['context'])
    }

    const contextStyle = {
        textAlign: "left",
        fontSize: 20
    }

    useEffect(()=>{
        fetchFile()
    },[])

    return(
            <React.Fragment>
                <center><h1>{title}</h1></center>
                <div style={contextStyle}>{context}
                <ol>
                    {list.map((data)=>{
                        return(
                            <li>{data}</li>
                        )
                    })}
                </ol>
                    <ul>
                    {link.map((data)=>{
                        return(
                            <li><Link to={data.link}>{data.context}</Link></li>
                        )
                    })}
                    </ul>
                </div>
            </React.Fragment>
    )
}
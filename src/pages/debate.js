import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

export default function Debate(){
    //const [displayStatus,setDisplayStatus] = useState(false)
    const [title,setTitle] = useState('載入中')
    const [context,setContext] = useState('')
    const [link,setLink] = useState([])

    const fetchFile = async ()=>{
        const url = process.env.REACT_APP_API_ENDPOINT + "debate.json"
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
        setLink(json['link'])
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
                <div style={contextStyle}>
                    {context.split('\n').map(str => <>{str}<br /></>)}
                    <br />
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
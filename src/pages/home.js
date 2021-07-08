import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";

export default function Home(props){
    const [docs,setDocs] = useState([])

    const fetchFile = async ()=>{
        setDocs([])
        const url = process.env.REACT_APP_API_SQLSERVER + 'home/' + props.match.params.id
        const data = await fetch(url,{
            method: 'GET',
            headers:{
                'Accept': 'application/json'
            }
        })
        const json = await data.json()
        console.log(json)
        setDocs(json)
    }

    useEffect(()=>{
        //scroll to front
        window.scrollTo(0, 0);
        fetchFile()
        // eslint-disable-next-line
    },[props.match.params.id])

    return(
        <div id={"main"}>
            <article className={"post featured"}>
                {docs.length === 0 ? <h1><center>查無資料</center></h1>:docs.map(data=>{
                    return(
                        <div>
                            <header className={'major'}>
                                <span class={'date'}>{data.time}</span>
                                <h2>{data.title}</h2>
                                <p>{data.subtitle}</p>
                            </header>
                            <ul class={'actions special'}>
                                <li><Link to={'/post/'+props.match.params.id} className={'button large'}>Full Story</Link></li>
                            </ul>
                        </div>
                    )
                })}
            </article>
        </div>
    )
}
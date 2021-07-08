import React, {useEffect, useState} from 'react'

export default function Experience(){
    const [team,setTeam] = useState([])
    const [parliamentary,setParliamentary] = useState([])

    const fetchData = async ()=>{
        const url = process.env.REACT_APP_API_ENDPOINT + 'config.json'
        const data = await fetch(url,{
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        const json = await data.json()
        const [a,b] = await Promise.all([parseTeam(json),parseParliamentary(json)])
        setTeam(a)
        setParliamentary(b)
        console.log(a)
        console.log(b)
    }

    async function parseTeam(data){
        let temp = []
        for(let i = 0;i < data['president'].length;++i){
            let set = {
                'president': data['president'][i],
                'experience': data['pexp'][i],
                'vicePresident': data['vp'][i],
                'vExperience': data['vpexp'][i]
            }
            temp.push(set)
        }
        return temp
    }

    async function parseParliamentary(data){
        let temp = []
        for(let i = 0;i < data['parliamentary'].length;++i){
            let set ={
                'parliamentary': data['parliamentary'][i],
                'experience': data['parliamentaryexperience'][i],
            }
            temp.push(set)
        }
        return temp
    }

    useEffect(()=>{
        //move to front
        window.scrollTo(0, 0);
        fetchData()
        // eslint-disable-next-line
    },[])

    const quoteStyle= {
        'font-size': '20px',
        'text-align': 'left',
        'font-style': 'normal'
    }

    return(
        <div id={"main"}>
            <article className={"post featured"}>
                {/*team*/}
                <div>
                    <header className={'major'}><h1>正副會長候選人經歷</h1></header>
                    {team.map((data,num)=>{
                        return(
                            <div>
                                <h2>{num+1}號競選團隊</h2>
                                <h2>{data.president}：</h2>
                                <blockquote style={quoteStyle}><ol>{data['experience'].split('\n').map(str => <li>{str}</li>)}</ol></blockquote>
                                <h2>{data.vicePresident}</h2>
                                <blockquote style={quoteStyle}><ol>{data['vExperience'].split('\n').map(str => <li>{str}</li>)}</ol></blockquote>
                            </div>
                        )
                    })}
                </div>
                {/*parliamentary*/}
                <hr />
                <div>
                    <header className={'major'}><h1>學生議員(全校選區)經歷</h1></header>
                    {parliamentary.map((data,num)=>{
                        return(
                            <div>
                                <h2>{num+1}號競選人</h2>
                                <h2>{data.parliamentary}：</h2>
                                <blockquote style={quoteStyle}><ol>{data['experience'].split('\n').map(str => <li>{str}</li>)}</ol></blockquote>
                            </div>
                        )
                    })}
                </div>
            </article>
        </div>
    )
}

import React, {useRef, useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useSelector } from 'react-redux'

import { MyContext } from '../context.js'


function Tasks () {
    let otvet = useRef(); 

    const { vopros, answerInput } = useContext(MyContext);
    

    const [butact, setButact] = useState(false);
    
    const stateres = useSelector(({ovRes, exRes}) => {
        return {
          ovRes: ovRes.overall,
          exList: exRes.list
        }
    })

    const pushbut = (e) => {
        if (e.code === 'Enter'){
            setButact(true);
            setTimeout(() => {setButact(false)},200)
            answerInput(otvet.current.value)
        }
        
    }
    
    useEffect (()  =>{
        otvet.current.focus();
    },[])  
    
    useEffect (()  =>{
       otvet.current.value = vopros.good;
    })  
    
    
    
    return (
        <div className="box__panel" onKeyPress={pushbut}>
            <div className="box__panel__vopros">
                <p> {vopros.vopros}</p>
            </div>
            <input type="text" ref={otvet} />
            <button className={classNames('but', {'push': butact})} onClick={()=>{answerInput(otvet.current.value)}}> Ok </button>
            <Link to={'/result'} className={classNames('link' , {'notactive': (stateres.exList.length === 0) })}> Показат резльтаты </Link>
        </div>
    )
}

export default Tasks;
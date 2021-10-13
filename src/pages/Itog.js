import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import {names} from '../bd.json';
import './itog.scss';

function Itog () {
    
    const stateres = useSelector(({ovRes, exRes}) => {
        return {
          ovRes: ovRes.overall,
          exList: exRes.list
        }
      })

      
   
    return (
        <div className="itog">
            <Link to={'/'} className="back"> Назад </Link>   
            <div className="itog__list">
                <h2>Ваш результат</h2>
                <ul>
                    <li>
                        <h3>Bce</h3>
                        <p>Вопросов - <span className="colnum">{stateres.ovRes[0]}</span></p>
                        <p>Правильно - <span className="colok">{stateres.ovRes[1]}</span></p>
                        <p>Не правильно - <span className="coler">{stateres.ovRes[2]}</span></p>
                    </li> 
                    {stateres.exList.map((el,index) => (
                        <li key={index}>
                            <h3>{names.find((item)=> item.name === el.name).newname}</h3>
                            <p>Вопросов - <span className="colnum">{el.res[0]}</span></p>
                            <p>Правильно - <span className="colok">{el.res[1]}</span></p>
                            <p>Не правильно - <span className="coler">{el.res[2]}</span></p>
                        </li>
                    ))}
                </ul>
                  
            </div>
            
        </div>
    )
}

export default Itog;
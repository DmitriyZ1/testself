import React from 'react';
import { useSelector } from 'react-redux';

function Result () {

    const stateres = useSelector(({ovRes, exRes}) => {
        return {
          resgen: ovRes.overall,
          reslist: exRes.list
        }
      })
      
    return (
        <div className="box__bar__result">
            <ul>
                <li>Всего вопросов  <br/><span className="green">{stateres.resgen[0]}</span></li>
                <li>Павильных ответов  <br/><span className="blue">{stateres.resgen[1]}</span> </li>
                <li>Ошибок  <br/><span className="red">{stateres.resgen[2]}</span></li>
            </ul>
        </div>
    )
}

export default Result;
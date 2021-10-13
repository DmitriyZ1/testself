import React from 'react';

import { MyContext } from '../context.js'

function Options () {

    const { changOption, optionCheckbox } = React.useContext(MyContext);

    return (
        <div>
            <div className="box__bar__chbox">
                <ul>
                    <li> <input type="checkbox" id="chdom" checked={optionCheckbox[0]} onChange={()=>changOption(0)}/> <label htmlFor="chdom" > DOM </label></li>
                    <li> <input type="checkbox" id="chstr" checked={optionCheckbox[1]} onChange={()=>changOption(1)}/> <label htmlFor="chstr" > Строки и числа </label> </li>
                    <li> <input type="checkbox" id="chmas" checked={optionCheckbox[2]} onChange={()=>changOption(2)}/> <label htmlFor="chmas" > Массивы </label></li>
                </ul>
            </div>
           
        </div> 
    )
}

export default Options;
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { setGen } from './redux/actions/genres'; 
import { setList } from './redux/actions/listresult'; 

import { MyContext } from './context.js';

import Home from './pages/Home';
import Itog from './pages/Itog';

import './App.css';
import './style.scss';

import { tasks } from './bd.json';



function App() {
  
  const [optionCheckbox, setOptionCheckbox] = useState([true,true,true]);
  const [listTasks, setListTasks] = useState(tasks);
  const [showTasks, setShowTasks] = useState(randomTask(listTasks));
  
  const dispatch = useDispatch();
  
  const stateres = useSelector(({ ovRes, exRes }) => {
    return {
      ovRes: ovRes.overall,
      exList: exRes.list,
    }
  })

  
  useEffect (()  =>{
    let arr = [];
    if (optionCheckbox[0]) {
      let dom = tasks.filter(el => el.division === "dom");
      arr = [...arr, ...dom];
    }
    if (optionCheckbox[1]) {
      let st = tasks.filter(el => el.division === "strnum");
      arr = [...arr, ...st];
    }
    if (optionCheckbox[2]) {
      let ar = tasks.filter(el => el.division === "mas");
      arr = [...arr, ...ar];
    }
    
    setListTasks(arr);
    setShowTasks(randomTask(listTasks));
  },[optionCheckbox]);
 
  
  const options = (e) => {
    if (window.confirm("При изменении этих параметров вам придется начать сначало!")) {
      let v = optionCheckbox;
      v[e] = !v[e];
      if (!v[0] && !v[1] && !v[2]){
        alert('Нельзя убрать все варианты!')
        setOptionCheckbox([true,true,true]);
        dispatch(setGen([0,0,0]));
        dispatch(setList([]));

      }
      else {
        setOptionCheckbox([...v]);
        dispatch(setGen([0,0,0]));
        dispatch(setList([]));
      }      
    }
    else return
  }  
  
  
  function randomTask (t) {
    if (Array.isArray(t)){
      let rand = Math.floor(Math.random() * t.length);
      return t[rand];
    }
    else return;
  }

  
  const clickform = (otv) => {
    if (otv === showTasks.otwet){
      let newArr = listTasks.filter(item => item.id !== showTasks.id)
      setListTasks(newArr);
      setShowTasks(randomTask(listTasks));
      let resTaskPlus = stateres.ovRes;
      resTaskPlus[0]++;
      resTaskPlus[1]++;
      dispatch(setGen(resTaskPlus));
      
      let newlist = stateres.exList;
      if(!newlist.some((item) => item.name === showTasks.division)){
        newlist = [...newlist,{ name:showTasks.division, res:[1,1,0] }]
        dispatch(setList(newlist));
      } 
      else {
        newlist.find((item) => item.name === showTasks.division).res[0]++;
        newlist.find((item) => item.name === showTasks.division).res[1]++;
        dispatch(setList(newlist));
      }
      
    }
    else {
      setShowTasks(randomTask(listTasks));
      let resTaskMinus = stateres.ovRes;
      resTaskMinus[0]++;
      resTaskMinus[2]++;
      dispatch(setGen(resTaskMinus))

      let newlist = stateres.exList;
      if(!newlist.some((item) => item.name === showTasks.division)){
        newlist = [...newlist,{name:showTasks.division,res:[1,1,0]}]
        dispatch(setList(newlist));
      } 
      else {
        newlist.find((item) => item.name === showTasks.division).res[0]++;
        newlist.find((item) => item.name === showTasks.division).res[1]++;
        dispatch(setList(newlist));
      }
    }
  }
  
  
  return (
      <MyContext.Provider value={{ vopros:showTasks, changOption:options, optionCheckbox, answerInput:clickform}}>
        <div className ="contain">
          <Router>
            <Switch>
              <Route exact path="/" render={() => <Home/>} />
              <Route exact path="/result" render={() => <Itog/>} />
            </Switch>
          </Router>
        </div>
      </MyContext.Provider>
    
  );
}

export default App;

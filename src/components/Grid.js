import "../CSS/grid.css";
import Cell from "./Cell.js";
import { useState, useEffect } from "react";

import Bfs from '../Algorithms/bfs.js'

export default function Grid(props) {

  var visited = new Set();

  const [mouseState, setMouseState] = useState(false);

  var x = window.innerHeight;
  x = x - 130; //to adjust for the menubar height
  var noOfRows = Math.trunc(x / 28);

  var y = window.innerWidth;
  var noOfColumns = Math.trunc(y / 28);

  var grid = [];
  var rows = [];

  const [startPos, setStartPos] = useState([Math.trunc(noOfRows / 2),Math.trunc(noOfColumns / 3),]);
  const [endPos, setEndPos] = useState([Math.trunc(noOfRows / 2), Math.trunc((2 * noOfColumns) / 3),]);
  const [shiftStart, setShiftStart] = useState(false);
  const [shiftEnd, setShiftEnd] = useState(false);

  const [wallArr, setWallArr] = useState([]);

  const [answer, setAnswer] = useState([]);
  const [visit, setVisit] = useState(new Set());

  const timeArray = Array.from(visit);


  const timeMap = new Map();
  for(let i = 0 ; i < timeArray.length ; i++){
    timeMap.set(timeArray[i],i);
  }
  
  useEffect(() => {
    //this triggers when we click visualise or shift start/end node
    if (props.flag === true || props.off === true) {   
      setAnswer(Bfs(grid, startPos, endPos, visited, wallArr));
      setVisit(visited); 
    }
     props.sf(false);
     props.soff(false);
  }, [props.flag,startPos, endPos, props.off]);


  useEffect(() => {
    //this triggers when we click the reset button
    if (props.rf === true) {
      props.sv(true);
      setWallArr([]);
      setAnswer([]);
      setVisit(new Set());
      setStartPos([Math.trunc(noOfRows / 2), Math.trunc(noOfColumns / 3)]);
      setEndPos([Math.trunc(noOfRows / 2), Math.trunc((2 * noOfColumns) / 3)]);
    }
    props.srf(false);
  }, [props.rf]);

  useEffect(() => {
    //this triggers when we click the clear Path button
    if (props.cpf === true) {
      console.log("hah")
      props.sv(true);
      setWallArr([]);
      setAnswer([]);
      setVisit(new Set());
      setStartPos([Math.trunc(noOfRows / 2), Math.trunc(noOfColumns / 3)]);
      setEndPos([Math.trunc(noOfRows / 2), Math.trunc((2 * noOfColumns) / 3)]);
    }
    props.scpf(false);
  }, [props.cpf]);

 




  for (var j = 0; j < noOfRows; j++) {
    for (var i = 0; i < noOfColumns; i++) {
      {
        rows.push(
          <Cell
            pos={[j, i]}
            start={[startPos, setStartPos]}
            shifter={[shiftStart, setShiftStart]}
            end={[endPos, setEndPos]}
            endShifter={[shiftEnd, setShiftEnd]}
            temp={[mouseState, setMouseState]}
            answer={answer}
            wallArray={[wallArr, setWallArr]}
            // visit={Array.from(visit)}
            visit={visit}
            timeMap = {timeMap}
            flag = {props.flag}
            OnlyFindFlag = {props.Off}
            setOnlyFindFlag = {props.soff}
            sf={props.sf}
            rf={props.rf}
            virgin={props.v}
            visualising = {props.visualising}
          />
        );
      }
    }
    grid.push(rows);
    rows = [];
  }

  return (
    <div class="grid-container">
      <ul class="grid">{grid}</ul>
    </div>
  );
}
/*import './css/grid.css';
import Cell from './cell.js'
import {useState,useEffect } from 'react';
import BFS from './BFS.js'
export default function Grid(props) {
  // console.log("namaskar")
  const [mouseState, setMouseState] = useState(false);

  var x = window.innerHeight;
  x = x - 150;
  var y = window.innerWidth;
  var grid = [];

  var noOfRows = Math.trunc(x / 30);
  var noOfColumns = Math.trunc(y / 30);

  const [startPos, setStartPos] = useState([Math.trunc(noOfRows / 2), Math.trunc(noOfColumns / 3)]);
  const [endPos, setEndPos] = useState([Math.trunc(noOfRows / 2), Math.trunc(noOfColumns / 1.5)]);
  const [flag, setFlag] = useState(false);
  const [endflag, setEndFlag] = useState(false);
  const [answer,setAnswer] = useState([]);
  const [visit,setVisit] = useState(new Set())
  const [wallArr,setWallArr] = useState([])
  const [startEndFlag,setStartEndFlag]= useState(false)
  for (var j = 0; j < noOfRows; j++) {
    var rows=[]
    for (var i = 0; i < noOfColumns ; i++) {
      rows.push(<Cell SEFlag={[startEndFlag,setStartEndFlag]} 
                      ff={props.first} 
                      rf={props.rf} 
                      sf={props.flag} 
                      visit={visit} 
                      swa={[wallArr,setWallArr]} 
                      ans2={answer} flag={[props.flag[0]]} 
                      cellpos={[j,i]} eflag={[endflag, setEndFlag]} 
                      epos={[endPos, setEndPos]} 
                      sflag={[flag, setFlag]} 
                      spos={[startPos, setStartPos]} 
                      temp={[mouseState, setMouseState]} />);
    }
    // console.log(rows)
    grid.push(rows);
  }

  useEffect(() => {
    
    if (props.flag[0]===true  || props.startEndFlag===true) {
      const ans=BFS(grid, startPos, endPos ,wallArr)
      setAnswer(ans[0]);
      setVisit(ans[1]);
    }
    props.flag[1](false)
    setStartEndFlag(false)
  }, [props.flag ,startEndFlag]);
  
  useEffect(() => {
    if (props.rf[0]===true){
      setWallArr([])
      setVisit(new Set())
      setAnswer([])
      setStartPos([Math.trunc(noOfRows / 2), Math.trunc(noOfColumns / 3)])
      setEndPos([Math.trunc(noOfRows / 2), Math.trunc(noOfColumns / 1.5)])
    }
    
  },[props.rf])

  
  return (
    <>
    <div class="grid-container">
      <ul class='grid'>
        {grid}
      </ul>
    </div>
    {props.ssn[1](startPos)}
    {props.sen[1](endPos)}
    </>
  );
};*/
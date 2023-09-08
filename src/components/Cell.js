import { useState , useEffect} from 'react'
import '../CSS/cell.css'
import {ReactComponent as Start} from '../Icons/start.svg'
import {ReactComponent as End} from '../Icons/end.svg'

export default function Cell(props){

    let sp = props.start[0];
    let ep = props.end[0];
    let position = props.pos;
    let shiftStart = props.shifter[0];
    let shiftEnd = props.endShifter[0];
    
    const isStart = (sp[0] === position[0]) && (sp[1] === position[1]);
    const isEnd = (ep[0] === position[0]) && (ep[1] === position[1]);
    
    const[wall, setWall] = useState(false);
    const[path, setPath] = useState(false);
    const[ask, setAsk] = useState(false);

    const findIndex = (thisArray,theItem) => {
      for(let i = 0 ; i < thisArray.length ; i++){
        if(thisArray[i][0] === theItem[0] && thisArray[i][1] === theItem[1]){
          return i;
        }
      }
      return -1;
    }

      
     useEffect(()=>{
        //this triggers whenever the shortest path algorithm finds a new short path
        setPath(false); //to clear the previous path state
        setAsk(false); // to clear the previous visited 
      // setAsk(props.visit.has(position.toString()))
       
            for(let i = 0 ; i < props.answer.length ; i++){
              if((props.answer[i][0]===position[0]) && ( props.answer[i][1] === position[1])){
                setTimeout(()=>{setPath(true);},50*i)     // if the cell position is in the answer then make it yellow
              // setPath(true);
                }       
            }

           animateVisited();
      //},[props.answer, sp, ep]);
    },[props.flag]);


    useEffect(()=>{

      setPath(false);
        setAsk(props.visit.has(position.toString()));
        for(let i = 0 ; i < props.answer.length ; i++){
          if((props.answer[i][0]===position[0]) && ( props.answer[i][1] === position[1])){
                setPath(true);     // if the cell position is in the answer then make it yellow
          }       
        }    
     },[ sp, ep])


      

      const animatePath = () =>{
        setPath(false); //to clear the previous path state
  
            for(let i = 0 ; i < props.answer.length ; i++){
              if((props.answer[i][0]===position[0]) && ( props.answer[i][1] === position[1])){
                setTimeout(()=>{setPath(true);},50*i)     // if the cell position is in the answer then make it yellow
              }       
            }
      }
      const animateVisited = () =>{
      
        const time= (props.timeMap.get(position.toString()));
        setTimeout(()=>{setAsk(props.visit.has(position.toString()))},20*time);
      
      }

      // useEffect(()=>{
        
      //   animateVisited();
      //   animatePath();
        
      // },[])

      

  
      useEffect(()=>{
        //triggers wehn we click reset button
        //to reset the path and wall and visited cells
         setAsk(false);      //visited blue
         setPath(false);     //path yellow
         setWall(false);     //wall black
      },[props.rf])

      useEffect(()=>{
        //triggers when we click clear path button
        //to reset the path and visited cells
        console.log("refery");
         setAsk(false);      //visited blue
         setPath(false);     //path yellow
      },[props.cpf])

    const handleDown = () =>{

      
       if(isStart){
           props.shifter[1](true);
       }  
       else if(isEnd){
          props.endShifter[1](true);
         
       }
     
      else{
        
        props.temp[1](!(props.temp[0]));
        if(!wall){
        props.wallArray[0].push(position);}
        else{
          let index = findIndex(props.wallArray[0], position);
          console.log(index);     
          if(index !== -1){ 
            props.wallArray[0].splice(index, 1);
            {console.log(props.wallArray[0])}
          }
        }
        setWall(!wall);
      }

        
      }
      
    

      const handleUp = () =>{

        if(shiftStart === true){
          if(position[0]===ep[0] && position[1]===ep[1]){
          }
          else{
               props.start[1](position);
               if(props.virgin === false)
              // props.sf(true);
               props.setOnlyFindFlag(true);

               props.shifter[1](false);
          }
        }
        else if(shiftEnd === true){
          if(position[0]===sp[0] && position[1]===sp[1]){
          }
          else{
              props.end[1](position);
              if(props.virgin === false)
              // props.sf(true);
              props.setOnlyFindFlag(true);

              props.endShifter[1](false);
              }
        }
        else
        { 
           props.temp[1](!(props.temp[0]));
        }
      }

      const handleOver = () =>{
        if(shiftStart){
            props.start[1](position);
            if(props.virgin === false)
            //props.sf(true);
            props.setOnlyFindFlag(true);
            // setWall(!wall);
        }
        else if(shiftEnd){
            props.end[1](position);
            if(props.virgin === false)
             //props.sf(true);
             props.setOnlyFindFlag(true);
            // setWall(false);
        }
        else if(props.temp[0]===true){
          if(!wall){
            props.wallArray[0].push(position);}
            else{
              let index = findIndex(props.wallArray[0], position);
              console.log(index);     
              if(index !== -1){ 
                props.wallArray[0].splice(index, 1);
                {console.log(props.wallArray[0])}
              }
            }
          setWall(!wall);

        }
      }
       
    if(isStart){
    return(
      <button class="cell" 
              onMouseDown={handleDown}  onMouseUp={handleUp} >
                 <Start/>
      </button>)
    }
    else if(isEnd){
      return(
        <button class="cell" 
                onMouseDown={handleDown} onMouseUp={handleUp} >
                <End/>
        </button>)
      }  
    else {
    return(
      <button class = { wall? "wall" : (path ? "path" :( ask ? "visited" : "cell"))} 
              onMouseDown={handleDown} onMouseOver={handleOver} onMouseUp={handleUp} >
               {/* {position} */}
               <br></br>
      </button>)
    }  
    
}
/*import { useEffect, useState } from 'react'
import './css/cell.css'

export default function Cell(props){
  let sp=props.spos[0];
  let ep=props.epos[0];
  let isStart=(props.cellpos[0]===sp[0] && props.cellpos[1]===sp[1]);
  let isEnd=(props.cellpos[0]===ep[0] && props.cellpos[1]===ep[1]);
  const[wall, setWall] = useState(false);
  const[path, setPath] = useState(false);
  const[vcell,setVcell] = useState(false)
  const findIndex = (thisArray,theItem) => {
    for(let i = 0 ; i < thisArray.length ; i++){
      // console.log(thisArray)
      if(thisArray[i][0] === theItem[0] && thisArray[i][1] === theItem[1]){
        console.log(i+"lkasdjf")
        return i;
      }
      console.log("ksjd")
      
    }
    return -1;
  }
  // if(true){
  //   console.log("KL")
  //   setPath(true)
  // }
  // console.log(props.cellpos)
  useEffect(()=>{
    setPath(false)

    for(let i = 0 ; i < props.ans2.length ; i++){

      if((props.ans2[i][0]===props.cellpos[0]) && ( props.ans2[i][1] === props.cellpos[1])){
        
        setTimeout(()=>{setPath(true)},50*i);
      }
    }
    // console.log(props.ans2)
  },[props.sf])
  useEffect(()=>{
    setPath(false)

    for(let i = 0 ; i < props.ans2.length ; i++){

      if((props.ans2[i][0]===props.cellpos[0]) && ( props.ans2[i][1] === props.cellpos[1])){
        
        setPath(true);
      }
    }
    // console.log(props.ans2)
  },[props.flag])

  useEffect(()=>{
    // let tempVisit=Array.from(props.visit)
    // console.log(props.cellpos)
    // for (let i=0;i<tempVisit.length;i++){
      
    //   if((tempVisit[i][0].toString()===props.cellpos[0]) && (tempVisit[i][1].toString()===props.cellpos[1])){
    //     // if (props.visit.has(props.cellpos.toString())){
    //     // console.log(tempVisit[i])
    //     // console.log(i)
    //     setTimeout(()=>{setVcell(true)},2000*i)
    //   }
    // }
    setVcell(props.visit.has(props.cellpos.toString()))

  },[props.visit])

  useEffect(()=>{
    if (props.rf[0]===true){
      setWall(false)
      setPath(false)
      setVcell(false)
    }
    props.rf[1](false)
    
  },[props.rf[0]])
  // useEffect(()=>{
  //   setVisit(false)
    
  //     if(visit.has(props.cellpos)){
        
  //       setVisit(true);
  //     }
    
  //   // console.log(props.ans2)
  // },[visit ,sp ,ep])
  // if (props.flag===1 && props.cellpos[0]===0 && props.cellpos[1]===0){
  //   setWall(false)
  // }
  const handleDown = () =>{
    
    
    // console
      if(isStart){
        props.sflag[1](!(props.sflag[0]))
      }
      else if(isEnd){
        props.eflag[1](!(props.eflag[0]))
      }
      else{
        
        if(wall){
          let index=findIndex(props.swa[0],props.cellpos)
          console.log(index)
          props.swa[0].splice(index,1)
        }
        else{
          
          props.swa[0].push(props.cellpos);
          // console.log(props.swa[0])
        }
        
        setWall(!wall);
        props.temp[1](! (props.temp[0]));
        
      }

    }

    const handleUp= () =>{
      props.temp[1](false);
      if(props.sflag[0]===true){
        if(props.cellpos[0]===ep[0] && props.cellpos[1]===ep[1]){

        }
        else{
          props.spos[1](props.cellpos)
        }
        if(!props.ff){
          props.sf[1](true)
        }
        props.sflag[1](!(props.sflag[0]))
      }
      else if(props.eflag[0]===true){
        if(props.cellpos[0]===sp[0] && props.cellpos[1]===sp[1]){

        }
        else{
          props.epos[1](props.cellpos)
        }
        if (!props.ff){
          props.sf[1](true)
        }
        props.eflag[1](!(props.eflag[0]))
      }
      
    }

    const handleOver = () =>{
      if(props.sflag[0]===true){
        
        props.spos[1](props.cellpos)
        if (!props.ff){
          props.sf[1](true)
        }
      }
      else if(props.eflag[0]===true){
        props.epos[1](props.cellpos)
        if (!props.ff){
          props.sf[1](true)
        }
      }
      else if(props.temp[0]===true){
        if(wall){
          let index=findIndex(props.swa[0],props.cellpos)
          props.swa[0].splice(index,1)
        }
        else{
          
          props.swa[0].push(props.cellpos);
        }
        setWall(!wall)

      }
      
  }

  if(isEnd){
    return(<>
      <button class="cell" 
                onMouseDown={handleDown} onMouseUp={handleUp}>
                <i class="fa-solid fa-bullseye"></i>
                  <br></br>
      </button>
      </>
    )
  }

  else if(isStart){
    
    return(<>
      <button class="cell" 
                onMouseDown={handleDown} onMouseUp={handleUp} >
              <i class="fa-regular fa-paper-plane"></i>
                  <br></br>
      </button>
      </>
    )
  }
  else{
    return(<>
      <button class={wall ? "wall" : path ? "path" :(vcell ? "vcell" : "cell")}
              // style = {{backgroundColor : (wall ? "black" : path ? "yellow" :( vcell ? "blue" : "white"))}}
              onMouseDown={handleDown} onMouseOver={handleOver} onMouseUp={handleUp} >
                 {props.cellpos}
                  <br></br>
      </button>
      
      </>
    )

  }
    
    
}*/
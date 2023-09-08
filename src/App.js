import React from "react"
import "./App.css"
import Navbar from './components/Navbar.js';
import Menubar from './components/Menubar.js'
import Grid from './components/Grid.js'
// import Cell from './Cell.js'
import { useState } from "react"

function App() {

  const [flag,setFlag] = useState(false);
  const [onlyFindFlag , setOnlyFindFlag ] = useState(false);

  const [resetFlag, setResetFlag] = useState(false);            //for Reset button
  const [clearPathFlag, setClearPathFlag] = useState(false);    //for Clear Path button
  
  const [virgin, setVirgin] = useState(true);                   //this stops from triggering before the e

  var visualising = false;
  

  const arr = [   
                  <Navbar/>,
                  <Menubar st   = {[1,1]} 
                           sf   = {setFlag} 
                           srf  = {setResetFlag} 
                           scpf = {setClearPathFlag}
                           setVirgin = {setVirgin}
                           soff = {setOnlyFindFlag}
                           visualising = {visualising}
                  />,
                  <Grid sf  = {setFlag} flag={flag} 
                        soff= {setOnlyFindFlag} off = {onlyFindFlag} 
                        srf = {setResetFlag} rf={resetFlag}
                        scpf= {setClearPathFlag} cpf={clearPathFlag}
                        v   = {virgin}  sv = {setVirgin}
                        visualising = {visualising}

                  />
              ];

  
  return (
    <> {arr} </>
  );
}


export default App;
// import { useState } from 'react';
// import Child1 from './child1.js';
// import Child2 from './child2.js';
// import './App.css';
// import Navbar from './Navbar.js';
// import Menubar from './Menubar.js'
// import Grid from './grid.js';
// // import Cell from './cell.js';





// function App() {
  
//   const [startnode,setStartNode] = useState((0,0))
//   const [endnode,setEndNode] = useState((0,0))
//   const [graph,setGraph] = useState()
//   const [flag,setFlag]=useState(false)
//   const [rflag,setRflag] = useState(false)
//   const [firstflag,setFirstFlag] = useState(true)
//   // function CallBack(snode,enode,graph){     
//   //     setStartNode(snode)            
//   //     setEndNode(enode)
//   //     setGraph(graph)
//   // }
  
//   const arr=[<Navbar/>,
//              <Menubar setfirst={setFirstFlag} 
//                       sf={setFlag} 
//                       rf={setRflag}  
//                       sn={[startnode]} 
//                       en={[endnode]} 
//                       graph={[graph]}/>,
//               <Grid rf={[rflag,setRflag]} 
//                     flag={[flag,setFlag]} 
//                     ssn={[startnode,setStartNode]} 
//                     sen={[endnode,setEndNode]} 
//                     sg={[graph,setGraph]}
//                     first={firstflag}/>,];
//   return (arr);

  
// }


// export default App;

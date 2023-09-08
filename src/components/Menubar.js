import '../CSS/menubar.css';
import {ReactComponent as Clean} from '../Icons/anchor.svg'
import {ReactComponent as Anchor} from '../Icons/anchor.svg'
import {ReactComponent as Key} from '../Icons/key.svg'
import {ReactComponent as Reset} from '../Icons/rotate-ccw.svg'
import {ReactComponent as Cp} from '../Icons/slack.svg'


export default function menubar(props){

    const handleVisualise = () => {
        //console.log(props.st);
        props.sf(true);
        props.soff(true);
        props.setVirgin(false);
    
    }

    const handleReset = () => {
        props.srf(true);
    }

    const handleClearPath = () => {
        props.scpf(true);
    }


    return(
        <nav class="main-nav">
             
               <ul>
                   <li>
                      Algorithms
                   </li>
                   <li>
                      Pre-sets
                   </li>
                   <li>
                      <button class='visualise' onClick={handleVisualise}>Visualise</button>
                   </li>
                </ul>

                

                <ul className='fuctions'>
    
                    {/* <a className='btn'><span className='icon'><Anchor/></span> <span class='text'>Add Weight Node</span></a> */}
                    {/* <a className='btn'><span className='icon'><Key/></span> <span class='text'>Add Key Node</span></a> */}
                    <a className='btn'><span className='icon'><Clean/></span> <span class='text'>Clear walls</span></a>
                    <a className='btn' onClick={handleClearPath}><span className='icon'><Cp/></span> <span class='text'>Clear Path</span></a>
                    <a className='btn' onClick={handleReset}><span className='icon'><Reset/></span> <span class='text'>Reset</span></a>
                </ul>

        </nav>
        
    );
};
/*import './css/menubar.css';
export default function menubar(props){
    const handleClick=()=>{
        props.sf(true)
        props.setfirst(false)
    }
    const rightBut=()=>{
        props.rf(true)
    }
    
    return(
        
        <nav class="menu-nav">
            
            <ul class="box1">
                <li>Algorithm</li>
                <li>Maze Genrator</li>
            </ul>
            <button class="visbox" onClick={handleClick}>
                VISUALIZE
            </button>
            <ul class="box2">
                <li>
                    <div onClick={rightBut} class="rightBut">
                        <span class="icon"><i class="fa-sharp fa-solid fa-bomb"></i><span class="text"> Clear Path</span> </span>
                    </div>
                </li>
                <li>
                    <div class="rightBut">
                        <span class="icon"><i class="fa-solid fa-arrows-rotate"></i></span> <span class="text"> Clear Path</span> 
                    </div>
                </li>
                <li>
                    <div class="rightBut">
                        <span class="icon"><i class="fa-solid fa-broom"></i></span> <span class="text"> Clear Path</span> 
                    </div>
                </li>
            </ul>
        </nav>


    );
}*/
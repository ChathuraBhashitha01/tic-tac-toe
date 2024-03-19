import * as React from 'react';
import './style.css'

export default function HomePage() {
   
    return (
       <div className='container'>
         <h1 className='title'>Tic Tac Toe <span>React</span> </h1>
         <div className='board'>
            <div className='row1'>
             <div className='boxes'></div>
             <div className='boxes'></div>
             <div className='boxes'></div>
            </div>
            <div className='row2'>
             <div className='boxes'></div>
             <div className='boxes'></div>
             <div className='boxes'></div>
            </div>
            <div className='row3'>
             <div className='boxes'></div>
             <div className='boxes'></div>
             <div className='boxes'></div>
            </div>
         </div>
         <button className='btnRestart'>Restart</button>
       </div>
    );
}

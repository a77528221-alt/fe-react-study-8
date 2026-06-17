import './Quiz06.css';
import { useState } from 'react';



function Quiz06(){

    let [boxes, setBoxes] = useState([<div className='box' style={{backgroundColor:'red'}}></div>,
                                    <div className='box' style={{backgroundColor:'green'}}></div>,
                                    <div className='box' style={{backgroundColor:'blue'}}></div>,
                                    <div className='box' style={{backgroundColor:'black'}}></div>
                                    ]);

    return (
        <div>
            <div>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.unshift(<div className='box' style={{backgroundColor:'red'}}></div>);
                    setBoxes(temp);
                }}>앞빨간박스추가</button>
                <button onClick={() => { 
                    let temp = [...boxes];
                    temp.unshift(<div className='box' style={{backgroundColor:'blue'}}></div>);
                    setBoxes(temp);
                }}>앞파란박스추가</button>
                <button onClick={() => { 
                    let temp = [...boxes];
                    temp.unshift(<div className='box' style={{backgroundColor:'green'}}></div>);
                    setBoxes(temp);
                }}>앞초록박스추가</button>

                <button onClick={() => { 
                    let temp = [...boxes];
                    temp.push(<div className='box' style={{backgroundColor:'red'}}></div>);
                    setBoxes(temp);
                }}>뒤빨간박스추가</button>
                <button onClick={() => { 
                    let temp = [...boxes];
                    temp.push(<div className='box' style={{backgroundColor:'blue'}}></div>);
                    setBoxes(temp);
                }}>뒤파란박스추가</button>
                <button onClick={() => { 
                    let temp = [...boxes];
                    temp.push(<div className='box' style={{backgroundColor:'green'}}></div>);
                    setBoxes(temp);
                }}>뒤초록박스추가</button>
            </div>

            {boxes}

        </div>
    );
    

}

export default Quiz06;
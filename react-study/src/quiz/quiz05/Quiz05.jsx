import './Quiz05.css';
import { useState } from 'react';


function Quiz05(){

    let [boxs, setBoxs] = useState([<div className='box' style={{backgroundColor : 'red'}}></div>,
                                    <div className='box' style={{backgroundColor : 'blue'}}></div>,
                                    <div className='box' style={{backgroundColor : 'green'}}></div>
                                    ]);

    return(
        <div>
            <div>
                <button onClick={() => { 
                    let temp = [...boxs];
                    temp.unshift(<div className='box' style={{backgroundColor : 'red'}}></div>)
                }}>앞빨간박스추가</button>
                <button onClick={() => { }}>앞파란박스추가</button>
                <button onClick={() => { }}>앞초록박스추가</button>

                <button onClick={() => { }}>뒤빨간박스추가</button>
                <button onClick={() => { }}>뒤파란박스추가</button>
                <button onClick={() => { }}>뒤초록박스추가</button>

                <button onClick={() => { }}>뒤 박스 삭제</button>
                <button onClick={() => { }}>앞 박스 삭제</button>
            </div>

            {/* <div className='box' style={{backgroundColor : 'red'}}></div>
            <div className='box' style={{backgroundColor : 'blue'}}></div>
            <div className='box' style={{backgroundColor : 'green'}}></div> */}
        </div>

        
        
    )
    {boxs}

}

export default Quiz05;
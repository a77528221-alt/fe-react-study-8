import './Quiz04.css'
import {useState} from 'react';

function Quiz04(){

    let [box, setBox] = useState(0);

    return (
        <div>
            <div>
                <button onClick={()=>{
                
                }}>추가</button>
            </div>

            <div>
                <div className='box'>박스</div>
            </div>
        </div>
    )
}
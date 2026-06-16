import { useState} from "react";

function State01(){

    // React Hooks
    // useState -> 상태를 저장하는 변수, 잰렌더링 발생 기준, 재렌더링 상황에서 값이 계속 유지

    //재렌더링 발생 기준
    // state 변수 set 함수를 통해서 값이 변경 된 경우 -> 화면 재렌더링 (re-redering)

    // const | let [변수명,  set함수명] = useState(초기값);

    let [count, setCount] = useState(0);

    let cnt = 0;  //함수에 존재하는 일반 변수, 재렌더링 시점에 다시 호출되서 또 초기화 됨

    let [num, setNum] = useState(0);



    return (
        <div>
            <h1>State01</h1>

            <p>{cnt}</p>

            <button onClick={()=>{

                console.log('cnt 증가 버튼 클릭');
                cnt++;
                console.log(cnt);

                num++;
                console.log(num);

            }}>cnt증가</button>


            <br></br>

            <p>{count}</p>
            <button onClick={()=>{
                console.log('count 증가 버튼 클릭');
                //count++;  //값 증가 o  ,재렌더링 x -> set 함수를 통해서 값을 바꾼게 아니라서
                setCount(count+1);  //재렌더링 발생 조건 o
                console.log(count);
            }}>count증가</button>


        </div>
    )
}


export default State01;
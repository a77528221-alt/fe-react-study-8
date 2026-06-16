import { useState } from "react";
//import Box from "./Box";

function Props02(){

    // 배열의 값이 변경 -> 변경된 값 유지 -> 화면에 재랜더링
    let [textArr, setTextArr] = useState( ['아침', '점심', '저녁']);
    let [dettailArr, setDetailtArr] = useState(['졸리다', '배부르다', '피곤하다']);

    return (

        <div>

            <button onClick={()=>{

                //데이터 기반으로 화면에 표시
                //데이터 조작

                let temp = [...textArr];
                temp.push('야식');
                setTextArr(temp);

                dettailArr.push('행봇하다');
                //setDetailArr(dettailArr);

                // 재렌더링 발생 조건 -> state 변수값이 set 함수를 통해서 발견

                console.log(textArr);
                console.log(dettailArr);


            }}>야식 추가버튼</button>
            
            {
                textArr.map( (item, index)=> {
                    return (
                        //<Box text={textArr[index]} detail={detail[index]}/>
                        <Box text={item} detail={detail[index]} key ={index}/>
                    )
                })
            }
            </div>
    )
}



export default Props02;

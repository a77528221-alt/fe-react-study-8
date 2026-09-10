
import axios from 'axios';
import { useState } from 'react';
import DrinkItem from '../components/DrinkItem';


function AppRS() {

    //React <-> Spring API 통신 ㅇ녀동

    // API 통신 : jquery(ajax) fetch XMLHttpRequest axios

    // axios API 통신처리 라이브러리
    // 설치 -> npm install axios

    let [drinkList, setDrinkList] = useState (
        [
            {
                name:'아메리카노',
                type:'커피'
            },
            {
                name:'카페라떼',
                type:'커피'
            }
        ]
    );

    let [typeFlag, setTypeFlag] = useState(true);
    let [num, setNum] =useState(1);

    return (
        <div>
            <h1>AppRS - React Spring API 통신</h1>

            <div>
                <button onClick={()=>{

                    //버튼 클릭하면 

                    // .then(ewsponse) => {
                    //    console.log(response.data)
                    // }) // 결과 수신
                    //

                    //</div>axios.get('http://localhost:8080/api/getMsg')
                    //</div>axios.get('http://localhost:5172/api/getMsg')
                    // 5173 (프록시역할 ) -> 8080 API 통신


                    //</div>axios.get('http://localhost:8080/api/getMsg')
                    axios.get('/api/getMsg')
                        .then(response => console.log(response.data))     //결과 수신
                        .catch(
                            error => {
                                console.log(error);
                            }
                        )    //예외발생
                    

                }}>서버 데이터 요청 axios get</button>

            </div>

            <div>
                <button onClick={()=>{

                    axios.get('/api/getDrinks')
                        .then( (response)=> {
                            console.log(response);
                            console.log(response.data);

                            let temp = [...drinkList];
                            response.data.map((item)=>{
                                temp.push(item);
                            })
                            setDrinkList(temp);

                        })
                        .catch(error => {
                                console.log(error);
                            })


                }}>서버 데이터 요청 getDrinks 응답 Json</button>
            </div>

            <div>

                <button onClick={()=>{
                    //파라미터 담아서
                    //get 방식 url 요청
                    //  /api/getDrinksDiv?type=커피
                    //  /api/getDrinksDiv?type=차

                    let paramType = '';

                    paramType = typeFlag ? '커피' : '차';
                    setTypeFlag(!typeFlag);

                    axios.get('api/getDrinksDiv?type=' + paramType)
                        .then(response => {
                            console.log(response.data);

                            let temp = [...drinkList, ...response.data];
                            setDrinkList(temp);
                        })
                        .catch(error => {
                                console.log(error);
                            })

                }}>데이터 요청 경로에 파라미터 포함 param</button>
            </div>

            <div>

                <button onClick={()=>{
                    // axios.post( url, bodyData, header)
                    axios.post(
                        '/api/getDrinksNum', //요청 경로 url
                        {num:num, type:'jsontext'},// body 에 담아서 보내 ㄹ데이터 JSON 포맷
                        {
                            headers : {
                                'Content-Type' : 'application/json' //타입설정
                            }
                        }
                    )
                    .then((response)=>{
                        console.log(response.data);
                        let temp = [...drinkList, ...response.data];
                            setDrinkList(temp);

                    })
                    .catch(error => {
                                console.log(error);
                            })

                    setNum(num +1);

                }}>데이터 요청 POST 방식 body에 json 데이터 담아서 </button>
            </div>


            <div>

                {
                    drinkList.map((item,index)=>{
                        return <DrinkItem drinkItem={item}/>
                    })
                }
            </div>

        </div>
    )

}

export default AppRS;
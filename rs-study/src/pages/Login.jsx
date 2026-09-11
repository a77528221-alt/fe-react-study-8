import { useState } from "react";
import axios from "axios";


function Login() {

    let [id, setId] =useState('');
    let [pw, setPw] =useState('');


    return (
        <div>
            <h1>REact Spring API Login</h1>

            <p>id : <input type="text" onChange={(e)=>{
                setId(e.target.value);
            }}></input></p>
            <p>pw : <input type="password" onChange={(e)=>{
                setPw(e.target.value);
            }}></input></p>

            <button onClick={()=>{
                //입력된 값 id, pw  <- useState

                // id, pw 유효성 검사
                // id, pw 취합  -> json format 정리 -> 서버/api 요청 (post 방식)

                // axios.post( url, dataBody, header).then().cahch()

                axios.post('/api/login',
                    {
                        id:id,
                        pw:pw
                    },
                    {
                        header: {
                            'Content-type':'application/json'
                        }
                    }
                ).then((response)=>{
                    console.log(response.data);

                    console.log(response.data.header);
                    console.log(response.data.header.resultCode);
                    console.log(response.data.resultMessage);
                    console.log(response.data.body);

                    if(response.data.header.resultCode=="100") {
                        console.log("jsonformat 응답 확인");
                        console.log("로그인 성공");

                        console.log("성공한 로그인 아이디:" + response.data.body);
                    }

                    // response.data

                    if(response.data == 'loginOk') { // 로그인 성공
                        //성공시 처리할 로직

                        //성공했다고 메시지 표시
                        // 성공 했으니 메인페이지 or 마이페이지로 이동
                        // reactrointer navigate("/main")

                        console.log("로그인 성공");

                    } else { //로그인 실패
                        console.log("로그인 실패");
                    }

                }).catch((error)=>{
                    console.log(error);
                })

            }}>로그인</button>

            <div>
                <button onClick={()=>{
                    axios.post('/api/loginCheck')
                    .then( response=> console.log(response.data))
                    .catch(error => console.log(error))
                }}>로그인 여부 확인</button>
            </div>

            <div>
                <button onClick={()=>{

                    axios.post('/api/loginJWT',
                    {
                        id:id,
                        pw:pw
                    },
                    {
                        header: {
                            'Content-type':'application/json'
                        }
                    }
                ).then((response)=>{
                    console.log(response.data);

                    let token = response.data;

                    // 관리 -> 저장
                    // state -> props
                    // 전역상태관리 (Redux)
                    // localStorage
                    // cookie


                    if(token != null && token !='') {
                        //발급된 엑세스토큰 전달받음
                        // 저장 -> 다음에 요청할 때 토큰값을 같이 담아서 요청

                        // 토큰 -> localStorage
                        // localStorage.setItem(key, value)
                        // loaclStorage.getItem(key)
                        // localStorage.removeItem(key)

                        localStorage.setItem("token", token);
                    }

                    //로그인 성공/실패 확인 -> 이후 처리

                }).catch(error => console.log(error)) }
                }>로그인 JWT 방식</button>
            </div>

            <div>
                <button onClick={()=>{
                    let token = localStorage.getItem("token");

                    axios.post(
                        "/api/loginCheckJWT",
                        {},
                        {
                            headers: {
                                'Content-Type' : 'application/json',
                                'Authorization' : "Bearer" + token
                            }
                        }
                    ).then(response => console.log(response.data))
                    .catch(error => console.log(error))
                }}>로그인 여부 JWT 토큰 인식 확인</button>
            </div>
        </div>
    )
}
export default Login;
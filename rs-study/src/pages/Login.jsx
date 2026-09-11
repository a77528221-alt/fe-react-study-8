import { useState } from "react";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import {saveUserId, clearUserId, saveUserInfo, setWeatherInfo} from '../store/store';


function Login() {

    /*
        로그인 시도 -> BE API -> 성공 결과 응답 -> 성공하면 accessToken 

        로그인 성공?? -> accesToken 저장
                    -> 로그인한 사용자 정보 전역상태관리(redux)에 등록 사용

        페이지 이동 등 다른페이지에서도 로그인 여부 체크 -> redux 등록된 사용자 정보

        리덕스툴킷(redux toolkit) 라이브러리 설피

        npm install @reduxjs/toolkit
        npm install react-redux

    */

    let [id, setId] =useState('');
    let [pw, setPw] =useState('');

    // redux 개념 적용
    // redux 에 저장된 상태값에 접근

    let reduxState = useSelector((state)=>{return state});

    console.log(reduxState);
    console.log(reduxState.user);

    let user = useSelector((state)=>{return state.user});
    console.log(user);

    // redux 저장용으로 전체 상태관리 store 에 등록된 slice 값을 변경하는 action 을 담는 함수를 호출하려면?
    // 단순함수호출x -> dispatch에 감싸서 요청 !    dispatch( 호출할함수(매개변수))

    let dispatch = useDispatch();

    // let navigate = userNavigate();

    let weather = useSelector((state)=>{return state.weather});
    console.log(weather);





    return (
        <div>

            <div>
                <h3>redux 값 테스트</h3>
                <div>
                    <button onClick={()=>{
                        dispatch(saveUserId('abcd'));   //redux 관련 action 생성 호출
                    }}>SaveUserId호출</button>   
                        
                    <button onClick={()=>{
                        dispatch(clearUserId())
                    }}>ClearUserId호출</button>

                    <button onClick={()=>{
                        dispatch(saveUserInfo( {id:'abcd', name:'asd'} ));
                    }}>SaveUserInfo호출</button>

                    <button onClick={()=>{
                        dispatch(setWeatherInfo({weather:'cloudy', temp:10, hmdt:20}))
                    }}>setWeatherInfo호출</button>
                </div>
            </div>


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

                        //어떤 사용자가 로그인한 상태인가 -> 유지 ->전역상태관리에 등록
                        dispatch( saveUserId(id));

                        //다른 페이지에서는 user 
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
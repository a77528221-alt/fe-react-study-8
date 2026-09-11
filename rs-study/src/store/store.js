

// 중앙집중 전역 상태관리

//import { createSlice } from "@reduxjs/toolkit";

// 객체 관리
// 데이터 저장 변수 + getter, setter 함수형으로 사용 java...

// 객체.변수 = -50;
// 객체.set변수 =(-50);

// let [userId, setUserId] = userState('');

import { createSlice, configureStore } from "@reduxjs/toolkit";
//import { useReducer } from "react";

import useReducer from './userSlice';
import weatherReducer from './weatherSlice';
import compantResducer from './companySlice';



// store 기본 설정
// store 리덕스 기준 전체 데이터 저장하는 저장소

export default configureStore({
    reducer: {
        user : useReducer,
        weather : weatherReducer,
        company: compantResducer
    }
})

// reducer : 내부에 들어가는 키 값 (user) 이 실제 state 접근할 때 사용하는 이름



/*
    Store : 전역 상태관리 저장소
    State : 실제 저장된 상태변수
    Action : "Action" 행동이 발생했다는 정보 객체
    Paylode : Action에 담긴 실제 전달된 값 (action.payload)
    Reducer : 상태 변경 규칙을 가진 함수
    Dispatch : Action 을 담은 reducer 함수를 -> Store  쪽에 전달하는 함수
    useDispatch : duspach 호출용 함수 생성
    useSelector : 상태값 읽어오기 

    createSlice : 상태관리하는 객체 (reducer, action) 생성하는 도구
    configureStore : store 세팅 함수

*/

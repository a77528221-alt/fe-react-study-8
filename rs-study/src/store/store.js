

// 중앙집중 전역 상태관리

//import { createSlice } from "@reduxjs/toolkit";

// 객체 관리
// 데이터 저장 변수 + getter, setter 함수형으로 사용 java...

// 객체.변수 = -50;
// 객체.set변수 =(-50);

// let [userId, setUserId] = userState('');

import { createSlice, configureStore } from "@reduxjs/toolkit";

let userSlice = createSlice({
    name:"userId",
    initialState: 'initDefaultId',
    reducers : {    // 각종 함수들 (getter, setter)
        saveUserId(state, action){      // saveUserId('asdf')
            console.log("saveUserId action.payload : " + action.payload);     // action 이라는 객체 안에 payload 키 값 안에 실제 전달할 데이터

            return action.payload;      //'abcd'
                            // 단순텍스트 리턴 -> state 변수값에 저장할 값으로 전달 -> state에 저장

        },
        clearUserId(state) {            // clearUserId()
            return "clear";             // "clear" 텍스트 값 return -> state 에 저장
        }
    }
})

// 보유한 수행 함수들을 export
export let{ saveUserId, clearUserId} =  userSlice.actions;
// actions : 상태관리하는 변수 (slice)에 속해있는 상태변경 함수들이 모여있는 객체
//          화면쪽에서 dispatch()에 전달해서 사용할 Action Creator 들이 모여있음




// store 기본 설정
// store 리덕스 기준 전체 데이터 저장하는 저장소

export default configureStore({
    reducer: {
        user : userSlice.reducer
    }
})

// reducer : 내부에 들어가는 키 값 (user) 이 실제 state 접근

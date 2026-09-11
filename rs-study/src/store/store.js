

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
        },

        saveUserInfo(statem, action) {      //action.payload 객체(json) 단위로 값 전달 받았다
                                            // saveUserId( {id:'abcd', name:'asd'})

                                            //dispatch(saveUserId( {id:'abcd', name:'asd'}))

            console.log(action.payload); // {id:'abcd', name:'asd'}
            console.log(action.payload.id);
            console.log(action.payload.naem);

            let {id, name} = action.payload;

            return id;

        }
    }
})

// 보유한 수행 함수들을 export
export let{ saveUserId, clearUserId, saveUserInfo} =  userSlice.actions;
// actions : 상태관리하는 변수 (slice)에 속해있는 상태변경 함수들이 모여있는 객체
//          화면쪽에서 dispatch()에 전달해서 사용할 Action Creator 들이 모여있음


//-------------------------------------------------------------------------------------------------

// 날씨 정보 저장 상태관리
// let[weather, setWeather] = userState( {weather:"", temperatue:15, hmbt:40})

let weatherSlice = createSlice({
    name:   'weather',
    initialState : {
        weather : 'sunny',
        temp : 20,
        hmdt : 60
    },
    reducers : {        //dispatch( setWeatherInfo(weather:"cloun"))
        setWeatherInfo(state, action) {     // state 현재 원본 상태갓ㅂ(객체라서 주소값), action 전달온 매개변수

            //action.patlode.weather

            let { weather, temp, hmdt} = action.payload;

            //state 값이 객체 타입(참조변수)인 경우
            // 저장할 값을 return 하지않고, 바로 변수값에 대입하듯이 저장해도 적용이 가능

            state.weather = weather;
            state.temp = temp;
            state.hmdt = hmdt;

        }
    }
})

export let {setWeatherInfo}= weatherSlice.actions;


//-----------------------------------------------------------------------------------------------
// 회사 정보 저장 상태관리

let companySlice = createSlice({
    name : "company",
    initialState : {
        name : "hicorp",
        address : "서울 강남",
        tel:"02-123-1234"
    },

    reducers : {
        changeTel(state, action) {

            //state.tel = "02-123-4564"

            state.tel = action.payload;

            state.tel = action.payload.tel;
        }
    }
})

export let {changeTel} = companySlice.actions;






// store 기본 설정
// store 리덕스 기준 전체 데이터 저장하는 저장소

export default configureStore({
    reducer: {
        user : userSlice.reducer,
        weather : weatherSlice.reducer,
        company:companySlice.reducer
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

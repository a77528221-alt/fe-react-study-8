
import { createSlice } from "@reduxjs/toolkit";


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


export default weatherSlice.reducer;

import { useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router'

function App() {
  
  let navigate = useNavigate();

  return (
    <>

        <div>
          
          <div>
            <button onClick={()=>{navigate("/")}}>Main</button>
            <button>info</button>
            <button>mypage</button>
            <button>casr</button>
          </div>




          <Routes>
            <Route path="/main" element={<div><h1>Main입니다</h1></div>} />
            <Route path="/info" element={<div><h1>info 입니다 </h1></div>} />
            <Route path="/mypage" element={<div><h1>mypage 입니다</h1></div>} />
            <Route path="/casr" element={<div><h1>cart 입니다</h1></div>} />
          </Routes>




        </div>

    </>
  )
}

export default App

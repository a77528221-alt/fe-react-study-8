import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
// import Basic01 from './components/Basic01'
// import State01 from './components/State01'
// import Export01 from './components/Export01'
// import Props01 from '../../../reference/react-study/src/components/Props01'

// import Props02 from './components/Props02'
import NewsBlog from './newsblog/NewsBlog'
//import Quiz04 from './quiz/quiz04/Quiz04'
import Quiz05 from './quiz/quiz05/Quiz05'
import FoodMarket from './foodmarket/foodmarket'


function App() {
  const [count, setCount] = useState(0)

  return (

    //<Basic01/>
    // <State01/>
    // <Export01/>
    // <Props02/>
    // <NewsBlog/>
    // <Quiz04/>
    // <Quiz05/>
    <FoodMarket/>
    // <Routerquiz/>

  )
}

export default App

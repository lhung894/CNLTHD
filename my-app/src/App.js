
import './App.css';
import Clock from './Components/Clock';
import Lifecycle from './Components/Lifecycle';
import State from './Components/State';
import './Components/Welcomes'
import Welcomes from './Components/Welcomes';
export default function App() {
  return (
    <div>
       <Welcomes name="Lâm" age="22" gender="boy"></Welcomes>
       <Welcomes name="Linh" age="24" gender="girl"></Welcomes>
       <Welcomes name="Hưng" age="18" gender="boy"></Welcomes>
       <Welcomes name="Kiệt" age="215" gender="girl"></Welcomes>
       <State></State>
       <Lifecycle />
       <Clock />
       </div>
  )
}


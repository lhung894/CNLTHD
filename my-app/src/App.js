
import './App.css';
import Caculator from './Components/Caculator';
import Clock from './Components/Clock';
import Lifecycle from './Components/Lifecycle';
import State from './Components/State';
import './Components/Welcomes'
import Welcomes from './Components/Welcomes';
import Counter from "./Components/Counter"

export default function App(props) {
  
  return (
    <Counter
      render={(data) => {
        //Nhận giá trị trả vê từ Counter
        //qua props render.
        const { count, increment, decrement } = data;
        return (
          <>
            <p>Giá trị {count}</p>
            <button onClick={increment}>Tăng</button>
            <button onClick={decrement}>Giảm</button>
          </>
        );
      }}
    />
  );
}



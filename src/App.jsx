import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { clearState, decrement, decrementByAmount, increment, incrementByAmount } from "./redux/lib/counter";
import Todo from "./components/todo";

export default function App() {
  const deyer = useSelector(state => state.counter.value);


  const dispatch = useDispatch();


  return (
    <><div>
      <h1>{deyer}</h1>
      <button onClick={() => dispatch(increment())}>artir</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>5 artir</button>
      <button onClick={() => dispatch(decrement())}>azalt</button>
      <button onClick={() => dispatch(decrementByAmount(5))}>5 azalt</button>
      <button onClick={() => dispatch(clearState())}>sifirla</button>
    </div>

      <Todo />
    </>
  )
}

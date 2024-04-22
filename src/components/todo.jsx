import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../redux/lib/todos";
import { useSelector } from "react-redux";

export default function Todo() {

    const [inputVal, setInputVal] = useState('');

    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch(addTodo(inputVal))
        setInputVal('')
    }

    const todolar = useSelector(state => state.todos.todo);
    const handleDeleteTodo = (a) => {
        dispatch(deleteTodo(a))
    }

    return (

        <>

            <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
            <button onClick={() => handleAdd()}>elave et</button>

            <ul>
                {todolar.length > 0 && todolar.map((item, index) => (
                    <li key={index}>{item} -
                        <button onClick={()=>handleDeleteTodo(index)}>sil</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

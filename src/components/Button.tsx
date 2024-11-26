import { useDispatch, useSelector } from "react-redux";
import { RootType } from "../states/store";
import { decrement, increment } from "../states/slices/counterSlice";

export function Button() {

    const counterState = useSelector((state: RootType) => state.counter)
    const dispatch = useDispatch();

    return (
        <div>
            <h4>Mi estado de contador es: {counterState}</h4>
            <button onClick={() => dispatch(increment())}>Aumentar</button>
            <button onClick={() => dispatch(decrement())}>Disminuir</button>
        </div>
    );
}
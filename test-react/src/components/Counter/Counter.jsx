import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../../store/reducers/selectors/getCounterValue/getCounterValue.js';
import { decrement, increment } from '../../store/reducers/counterReducer';

const Counter = () => {
    const value = useSelector(getCounterValue);
    const dispatch = useDispatch();

    const onIncrement = () => {
        dispatch(increment());
    };

    const onDecrement = () => {
        dispatch(decrement());
    };

    return (
        <div>
            <h1 data-testid='counter-value'>value = {value}</h1>
            <button data-testid='increment-btn' onClick={onIncrement}>
                increment
            </button>
            <button data-testid='decrement-btn' onClick={onDecrement}>
                decrement
            </button>
        </div>
    );
};

export default Counter;

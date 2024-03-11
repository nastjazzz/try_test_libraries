import './App.css';
import { useEffect, useState } from 'react';
import Users from './users/Users';

function App() {
    const [data, setData] = useState(null);
    const [state, setState] = useState(false);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setData({});
        }, 100);
    }, []);

    const toggle = () => {
        setState((prev) => !prev);
    };

    const handleInputChange = (value) => {
        console.log(value);
        setInputValue(value);
    };

    return (
        <div className='App'>
            <div data-testid='input-value-wrapper'>
                input value: <span data-testid='input-value'>{inputValue}</span>
            </div>
            {state && <div data-testid='toggle-elem'>biba boba</div>}
            {data && <div>data</div>}
            <h1>Hello world!</h1>
            <button data-testid='toggle-btn' onClick={toggle}>
                click me
            </button>
            <input
                type='text'
                placeholder='input value.....'
                onChange={(event) => handleInputChange(event.target.value)}
            />
            <Users />
        </div>
    );
}

export default App;

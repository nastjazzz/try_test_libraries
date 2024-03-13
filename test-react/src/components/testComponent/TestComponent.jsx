import { useEffect, useState } from 'react';
// import Users from '../users/Users';

const TestComponent = () => {
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
        setInputValue(value);
    };

    return (
        <div>
            <h1 data-testid="home-page">Home page</h1>
            {data && <div>data</div>}
            <h1>Hello world!</h1>
            <div>
                <button data-testid='toggle-btn' onClick={toggle}>
                    click me
                </button>
            </div>
            {state && <div data-testid='toggle-elem'>biba boba</div>}
            <input
                type='text'
                placeholder='input value.....'
                onChange={(event) => handleInputChange(event.target.value)}
            />
            <div data-testid='input-value-wrapper'>
                input value: <span data-testid='input-value'>{inputValue}</span>
            </div>
        </div>
    )
}

export default TestComponent;
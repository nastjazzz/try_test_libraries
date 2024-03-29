import { useState } from 'react';

const HelloWorld = () => {
    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);

    const handleInputChange = (value) => {
        setValue(value);
    };

    const handleBtnClick = () => {
        value === 'hello' && setVisible((prev) => !prev);
    };

    return (
        <div>
            <input id='search' type='text' onChange={(event) => handleInputChange(event.target.value)} value={value} />
            <button id='toggle' onClick={handleBtnClick}>
                toggle btn
            </button>
            {visible && <h1 id='hello'>hello world</h1>}
        </div>
    );
};

export default HelloWorld;

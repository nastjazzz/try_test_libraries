import { render, screen } from '@testing-library/react';
import App from './App';

describe('app test', () => {
    test('check elems', () => {
        render(<App />);
        const helloWorldElem = screen.getByText(/hello world/i);
        const btnElem = screen.getByRole('button');
        const inputElem = screen.getByPlaceholderText(/input value/i);

        expect(helloWorldElem).toBeInTheDocument();
        expect(btnElem).toBeInTheDocument();
        expect(inputElem).toBeInTheDocument();
        expect(inputElem).toMatchSnapshot();
    });
});

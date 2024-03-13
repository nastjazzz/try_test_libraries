import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('app test', () => {
    test('check elems', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        const helloWorldElem = screen.getByText(/hello world/i);
        const btnElem = screen.getByRole('button');
        const inputElem = screen.getByPlaceholderText(/input value/i);

        expect(helloWorldElem).toBeInTheDocument();
        expect(btnElem).toBeInTheDocument();
        expect(inputElem).toBeInTheDocument();
        expect(inputElem).toMatchSnapshot();
    });

    test('absence of text', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        const helloWorldElem = screen.queryByText(/hello2/i);
        expect(helloWorldElem).toBeNull();
    });

    test('findBy case', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        const dataElem = await screen.findByText(/data/i);
        expect(dataElem).toBeInTheDocument();
    });

    test('click event', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        const btn = screen.getByTestId('toggle-btn');
        expect(btn).toBeInTheDocument();

        expect(screen.queryByTestId('toggle-elem')).toBeNull();
        fireEvent.click(btn);
        expect(screen.getByTestId('toggle-elem')).toBeInTheDocument();
        fireEvent.click(btn);
        expect(screen.queryByTestId('toggle-elem')).toBeNull();
    });

    test('input event', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        const inputElem = screen.getByPlaceholderText(/input value/i);
        expect(screen.queryByTestId('input-value')).toContainHTML('');
        fireEvent.input(inputElem, {
            target: { value: 'biba' },
        });
        expect(screen.queryByTestId('input-value')).toContainHTML('biba');
    });
});
// findBy - больше для асинхронного поиска
// getBy - 100% найти хотя бы какой-то элемент, если нет, то пробрасывается ошибка и тест падает
// queryBy - больше для того, чтобы доказать отсутствие элемента на странице

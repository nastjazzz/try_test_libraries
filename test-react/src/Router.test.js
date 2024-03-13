import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('TEST APP', () => {
    test('router test', async () => {
        const user = userEvent.setup();

        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        const homeLink = screen.getByTestId('home-link');
        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link');

        await act(async () => {
            await user.click(aboutLink);
        });
        expect(screen.getByTestId('about-page')).toBeInTheDocument();

        await act(async () => {
            await user.click(mainLink);
        });
        expect(screen.getByTestId('main-page')).toBeInTheDocument();

        await act(async () => {
            await user.click(homeLink);
        });
        expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });

    test('error page test', async () => {
        render(
            <MemoryRouter initialEntries={['/ashaha']}>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByTestId('no-match-page')).toBeInTheDocument();
    });
});

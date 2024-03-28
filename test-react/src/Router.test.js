import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { renderTestApp } from './tests/helpers/renderTestApp';

describe('TEST APP', () => {
    test('router test', async () => {
        const user = userEvent.setup();

        renderTestApp(
            <App />,
            {
                initialState: {
                    counter: {
                        value: 10,
                    },
                },
                initialRoute: ['/'],
            },
            false
        );

        const homeLink = screen.getByTestId('home-link');

        await act(async () => {
            await user.click(homeLink);
        });
        expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });

    test('about test', async () => {
        const user = userEvent.setup();

        renderTestApp(
            <App />,
            {
                initialState: {
                    counter: {
                        value: 10,
                    },
                },
                initialRoute: ['/'],
            },
            false
        );

        const aboutLink = screen.getByTestId('about-link');

        await act(async () => {
            await user.click(aboutLink);
        });
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        // /screen.debug();
    });

    test('main test', async () => {
        const user = userEvent.setup();

        renderTestApp(
            <App />,
            {
                initialState: {
                    counter: {
                        value: 10,
                    },
                },
                initialRoute: ['/'],
            },
            false
        );

        const mainLink = screen.getByTestId('main-link');

        await act(async () => {
            await user.click(mainLink);
        });
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });

    test('error page test', async () => {
        renderTestApp(
            <App />,
            {
                initialState: {
                    counter: {
                        value: 0,
                    },
                },
                initialRoute: ['/ashaha'],
            },
            false
        );

        expect(screen.getByTestId('no-match-page')).toBeInTheDocument();
    });
});

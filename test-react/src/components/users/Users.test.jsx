import axios from 'axios';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Users from './Users';
import { RenderWithRouter } from '../../tests/helpers/renderWithRouter';

jest.mock('axios');

describe('users test', () => {
    let response;

    beforeEach(() => {
        response = {
            data: [
                {
                    id: 1,
                    name: 'Leanne Graham',
                    username: 'Bret',
                    email: 'Sincere@april.biz',
                },
                {
                    id: 2,
                    name: 'Ervin Howell',
                    username: 'Antonette',
                    email: 'Shanna@melissa.tv',
                },
                {
                    id: 3,
                    name: 'Clementine Bauch',
                    username: 'Samantha',
                    email: 'Nathan@yesenia.net',
                },
            ],
        };

        axios.get.mockReturnValue(response);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('check elems', async () => {
        RenderWithRouter(<Users />);
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
        //screen.debug()
    });

    test('redirect to details page', async () => {
        const user = userEvent.setup();
        RenderWithRouter(null, '/users');
        //render(RenderWithRouter(<Users />));
        const users = await screen.findAllByTestId('user-item');

        await act(async () => {
            await user.click(users[0]);
        });
        expect(screen.getByTestId('user-details-page')).toBeInTheDocument();
    });
});

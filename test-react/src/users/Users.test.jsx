import axios from 'axios';
import { render, screen } from '@testing-library/react';
import Users from './Users';

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
    });


    test('check elems', async () => {
        axios.get.mockReturnValue(response);
        render(<Users />);
        const users = await screen.findAllByTestId("user-item");
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
        //screen.debug()
    });

});

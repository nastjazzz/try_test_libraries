import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

import { renderWithRedux } from '../../tests/helpers/renderWithRedux';
import { renderTestApp } from '../../tests/helpers/renderTestApp';

describe('Counter test', () => {
    test('test counter', async () => {
        const user = userEvent.setup();

        //const { getByTestId } = renderWithRedux(<Counter />, { counter: { value: 10 } });
        const { getByTestId } = renderTestApp(
            <Counter />,
            {
                initialState: {
                    counter: {
                        value: 100,
                    },
                },
                initialRoute: ['/'],
            },
            false
        );

        const incrementBtn = getByTestId('increment-btn');
        expect(getByTestId('counter-value')).toHaveTextContent('100');

        await act(async () => {
            await user.click(incrementBtn);
        });
        expect(getByTestId('counter-value')).toHaveTextContent('101');
    });
});

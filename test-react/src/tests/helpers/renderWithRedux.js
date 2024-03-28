import { render } from '@testing-library/react';
import { createReduxStote } from '../../store/store';
import { Provider } from 'react-redux';

export const renderWithRedux = (component, initialState) => {
    const store = createReduxStote(initialState);

    return render(<Provider store={store}>{component}</Provider>);
};

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import AppRouter from '../../router/AppRouter';
import { createReduxStote } from '../../store/store';

export const renderTestApp = (component, options = {}, isWithAppRouter = false) => {
    const { initialState, initialRoute } = options;
    const store = createReduxStote(initialState);

    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={initialRoute}>
                {isWithAppRouter ? <AppRouter /> : null}
                {component}
            </MemoryRouter>
        </Provider>
    );
};

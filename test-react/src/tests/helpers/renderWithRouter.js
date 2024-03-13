import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../../router/AppRouter';
import { render } from '@testing-library/react';

export const RenderWithRouter = (component, initialRoute = '/') => {
    return render(
        <MemoryRouter initialEntries={[initialRoute]}>
            <AppRouter />
            {component}
        </MemoryRouter>
    );
};

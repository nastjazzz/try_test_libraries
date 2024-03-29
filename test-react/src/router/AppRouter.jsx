import { Routes, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import NoMatchPage from '../pages/NoMatchPage';
import Users from '../components/users/Users';
import UserDetailsPage from '../pages/UserDetailsPage';
import TestComponent from '../components/testComponent/TestComponent';
import HelloWorld from '../pages/HelloWorld';
import UsersForTest from '../components/usersForTest/UsersForTest';

const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<TestComponent />} />
            <Route path='hello' element={<HelloWorld />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='main' element={<MainPage />} />
            <Route path='users' element={<Users />} />
            <Route path='users-test' element={<UsersForTest />} />
            <Route path='users/:id' element={<UserDetailsPage />} />
            <Route path='*' element={<NoMatchPage />} />
        </Routes>
    );
};

export default AppRouter;

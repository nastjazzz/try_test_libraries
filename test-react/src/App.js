import AppRouter from './router/AppRouter';
import Navbar from './components/navbar/Navbar';
import './App.css';

export default function App() {
    return (
        <div className='App'>
            <Navbar />
            <AppRouter />
        </div>
    );
}

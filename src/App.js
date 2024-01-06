import './style.css';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoutes } from './routes/routes';

function App() {
    const { access } = useSelector((state) => state.auth);

    return (
        <BrowserRouter>
            <AppRoutes user={access} />
        </BrowserRouter>
    );
}

export default App;

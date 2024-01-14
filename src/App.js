import './style.css';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppRoutes } from './routes/routes';
import { useGetAdsAllQuery } from './services/ads';
import { setAdsAll } from './store/slices/ads';

function App() {
    const dispatch = useDispatch();
    const { access } = useSelector((state) => state.auth);
    const { data } = useGetAdsAllQuery();

    useEffect(() => {
        if (data) {
            dispatch(setAdsAll(data));
        }
    }, [data]);

    return (
        <BrowserRouter>
            <AppRoutes user={access} />
        </BrowserRouter>
    );
}

export default App;

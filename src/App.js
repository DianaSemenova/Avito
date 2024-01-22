import './style.css';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { AppRoutes } from './routes/routes';
import { useGetAdsAllQuery } from './services/ads';
import {
    setAdsAll,
    setIsLoading,
    setError,
    setSearchData,
} from './store/slices/ads';

function App() {
    const dispatch = useDispatch();
    const { access } = useSelector((state) => state.auth);
    const { data, isLoading, error } = useGetAdsAllQuery();

    useEffect(() => {
        if (data) {
            dispatch(setAdsAll({ data }));
            dispatch(setSearchData());
        }
    }, [data]);

    useEffect(() => {
        dispatch(setIsLoading(isLoading));
    }, [isLoading]);

    useEffect(() => {
        dispatch(setError(error));
    }, [error]);

    return (
        <BrowserRouter>
            <AppRoutes user={access} />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar
                limit={1}
            />
        </BrowserRouter>
    );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import MainPage from '../pages/Main/Main';
import Profile from '../pages/Profile/Profile';
import Auth from '../pages/Auth/Auth';
import Layout from '../pages/Layout/Layout';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/auth" element={<Auth />} />

            <Route path="/" element={<Layout />}>
                <Route path="/" element={<MainPage />} />
                <Route element={<ProtectedRoute isAllowed />}>
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Route>
        </Routes>
    );
}

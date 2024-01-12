import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import MainPage from '../pages/Main/Main';
import Auth from '../pages/Auth/Auth';
import Layout from '../pages/Layout/Layout';
import ProfilePersonal from '../pages/Profile/ProfilePersonal';
import ProfileSeller from '../pages/Profile/ProfileSeller';
import Article from '../pages/Article/Article';

export function AppRoutes({ user }) {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/registration" element={<Auth />} />
                <Route path="/auth" element={<Auth />} />

                <Route path="/" element={<MainPage />} />
                <Route path="/article/:id" element={<Article />} />

                <Route element={<ProtectedRoute isAllowed={!!user} />}>
                    <Route
                        path="/profile-personal"
                        element={<ProfilePersonal />}
                    />
                </Route>
                <Route path="/profile-seller" element={<ProfileSeller />} />
            </Route>
        </Routes>
    );
}

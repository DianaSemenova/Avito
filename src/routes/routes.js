import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import MainPage from '../pages/Main/Main';
import Auth from '../pages/Auth/Auth';
import Layout from '../pages/Layout/Layout';
import ProfilePersonal from '../pages/Profile/ProfilePersonal';
import ProfileSeller from '../pages/Profile/ProfileSeller';
import Article from '../pages/Article/Article';
import NotFound from '../components/notFound/NotFound';

export function AppRoutes({ user }) {
    return (
        <Routes>
            <Route path="/registration" element={<Auth />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/article/:id" element={<Article />} />

                <Route element={<ProtectedRoute isAllowed={!!user} />}>
                    <Route
                        path="/profile-personal"
                        element={<ProfilePersonal />}
                    />
                </Route>
                <Route path="/profile-seller/:id" element={<ProfileSeller />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

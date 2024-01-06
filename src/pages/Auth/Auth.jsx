import { useLocation, useNavigate } from 'react-router-dom';
import s from './Auth.module.css';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import AuthForm from '../../components/auth/AuthForm/AuthForm';

export default function Auth() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isLogin = pathname === '/auth';

    return (
        <div className={s.wrapper}>
            <div className={s.containerEnter}>
                <PageWrapper />
                <div className={s.modalBlock}>
                    <AuthForm navigate={navigate} isLogin={isLogin} />
                </div>
            </div>
        </div>
    );
}

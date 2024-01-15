import { useLocation, useNavigate } from 'react-router-dom';
import s from './Auth.module.css';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import BottomMenuMob from '../../components/common/BottomMenu/BottomMenu';
import AuthForm from '../../components/auth/AuthForm/AuthForm';

export default function Auth() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isLogin = pathname === '/auth';

    return (
        <div className={s.wrapper}>
            <div className={s.containerEnter}>
                <div className={s.pageWrapper}>
                    <PageWrapper />
                </div>
                <div className={s.modalBlock}>
                    <AuthForm navigate={navigate} isLogin={isLogin} />
                </div>
                <BottomMenuMob />
            </div>
        </div>
    );
}

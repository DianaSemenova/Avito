import { useLocation, useNavigate } from 'react-router-dom';
import s from './Auth.module.css';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';

export default function Auth() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isLogin = pathname === '/auth';

    return (
        <div className={s.wrapper}>
            <div className={s.containerEnter}>
                <PageWrapper />
                <div className={s.modalBlock}>
                    <form
                        className={s.modalFormLogin}
                        id="formLogIn"
                        action="#"
                    >
                        <div className={s.logo}>
                            <img src="../img/logo_modal.png" alt="logo" />
                        </div>

                        <div className={s.wrapperInput}>
                            <input
                                className={s.input}
                                type="text"
                                name="login"
                                id="formlogin"
                                placeholder="email"
                            />
                            <input
                                className={s.input}
                                type="password"
                                name="password"
                                id="formpassword"
                                placeholder="Пароль"
                            />
                            {!isLogin && (
                                <>
                                    <input
                                        className={s.input}
                                        type="password"
                                        name="password"
                                        id="formpassword"
                                        placeholder="Повторите пароль"
                                    />
                                    <input
                                        className={s.input}
                                        type="text"
                                        name="name"
                                        id="f"
                                        placeholder="Имя (необязательно)"
                                    />
                                    <input
                                        className={s.input}
                                        type="text"
                                        name="name"
                                        placeholder="Фамилия (необязательно)"
                                    />
                                    <input
                                        className={s.input}
                                        type="text"
                                        name="name"
                                        placeholder="Город (необязательно)"
                                    />
                                </>
                            )}
                        </div>

                        <button
                            type="button"
                            className={s.btnEnter}
                            id="btnEnter"
                            onClick={() => navigate('/profile-personal')}
                        >
                            {isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </button>
                        <button
                            type="button"
                            className={s.btnSignup}
                            id="btnSignUp"
                            onClick={() =>
                                isLogin
                                    ? navigate('/registration')
                                    : navigate('/auth')
                            }
                        >
                            {!isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

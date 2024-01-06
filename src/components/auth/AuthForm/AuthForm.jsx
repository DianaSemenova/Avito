import s from './AuthForm.module.css';

export default function AuthForm({ navigate, isLogin }) {
    return (
        <form className={s.modalFormLogin} id="formLogIn" action="#">
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
                    isLogin ? navigate('/registration') : navigate('/auth')
                }
            >
                {!isLogin ? 'Войти' : 'Зарегистрироваться'}
            </button>
        </form>
    );
}

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import s from './AuthForm.module.css';
import {
    useLoginUserMutation,
    useRegistrationUserMutation,
} from '../../../services/auth';
import { setAuth } from '../../../store/slices/auth';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import IconBack from '../../UI/Icon/IconBack/IconBack';

export default function AuthForm({ navigate, isLogin }) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [city, setCity] = useState('');
    const [loginUser] = useLoginUserMutation();
    const [registrationUser] = useRegistrationUserMutation();
    const [error, setError] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorEmailServer, setErrorEmailServer] = useState('');
    const [errorPasswordServer, setErrorPasswordServer] = useState('');

    const handleLogin = async () => {
        try {
            const response = await loginUser({
                email: email.replaceAll(' ', ''),
                password: password.replaceAll(' ', ''),
            });

            setErrorEmailServer('');
            setErrorPasswordServer('');

            if (response.error?.data.detail === 'Incorrect email') {
                setErrorEmailServer('Неверный email');
                return;
            }

            if (response.error?.data?.detail === 'Incorrect password') {
                setErrorPasswordServer('Неверный пароль');
                return;
            }

            dispatch(
                setAuth({
                    access: response.data.access_token,
                    refresh: response.data.refresh_token,
                }),
            );
            navigate('/profile-personal');
        } catch (currentError) {
            console.log(currentError);

            toast.error(currentError.message, { className: s.error });
        }
    };

    const handleRegister = async () => {
        if (password !== repeatPassword) {
            toast.error('Пароли не совпадают', { className: s.error });
        } else {
            try {
                const registrationResponse = await registrationUser({
                    email: email.replaceAll(' ', ''),
                    password: password.replaceAll(' ', ''),
                    name,
                    surname,
                    city,
                });

                setErrorEmailServer('');

                if (registrationResponse.error?.data?.details) {
                    setErrorEmailServer('Пользователь уже зарегистрирован');
                    return;
                }

                const response = await loginUser({
                    email: email.replaceAll(' ', ''),
                    password: password.replaceAll(' ', ''),
                });

                dispatch(
                    setAuth({
                        access: response.data.access_token,
                        refresh: response.data.refresh_token,
                    }),
                );

                navigate('/profile-personal');
            } catch (currentError) {
                toast.error(currentError.message, { className: s.error });
            }
        }
    };
    const requiredFields = () => {
        setError('');
        setErrorEmail('');
        setErrorPassword('');

        const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !password) {
            setError('Обязательное поле для заполнения');
            return;
        }
        if (!isLogin && !repeatPassword) {
            setError('Обязательное поле для заполнения');
            return;
        }
        if (!isLogin && email && !patternEmail.test(email)) {
            setErrorEmail('Некорректный формат email');
            return;
        }
        if (password.length < 8 && !isLogin) {
            setErrorPassword('Длина пароля должна быть не менее 8 символов');
            return;
        }

        if (isLogin) {
            handleLogin();
        } else {
            handleRegister();
        }
    };

    return (
        <form className={s.modalFormLogin} id="formLogIn" action="#">
            <IconBack onClick={() => navigate(-1)} />
            <Link to="/">
                {' '}
                <div className={s.logo}>
                    <img src="../img/logo_modal.png" alt="logo" />
                </div>
            </Link>

            <div className={s.wrapperInput}>
                <div>
                    <Input
                        classes="input"
                        type="email"
                        name="login"
                        placeholder="email"
                        autoComplete="true"
                        value={email.replaceAll(' ', '')}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    {!email && error && (
                        <p className={s.errorFieled}>{error}</p>
                    )}
                    {!isLogin && email && errorEmail && (
                        <p className={s.errorFieled}>{errorEmail}</p>
                    )}
                    {email && errorEmailServer && (
                        <p className={s.errorFieled}>{errorEmailServer}</p>
                    )}
                </div>

                <div>
                    <Input
                        classes="input"
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={password.replaceAll(' ', '')}
                        autoComplete="true"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    {!password && error && (
                        <p className={s.errorFieled}>{error}</p>
                    )}
                    {password && errorPassword && !isLogin && (
                        <p className={s.errorFieled}>{errorPassword}</p>
                    )}
                    {password && errorPasswordServer && isLogin && (
                        <p className={s.errorFieled}>{errorPasswordServer}</p>
                    )}
                </div>

                {!isLogin && (
                    <>
                        <div>
                            <Input
                                classes="input"
                                type="password"
                                name="repeatPassword"
                                placeholder="Повторите пароль"
                                value={repeatPassword.replaceAll(' ', '')}
                                onChange={(e) => {
                                    setRepeatPassword(e.target.value);
                                }}
                            />
                            {!isLogin && !repeatPassword && error && (
                                <p className={s.errorFieled}>{error}</p>
                            )}
                        </div>
                        <Input
                            classes="input"
                            type="text"
                            name="name"
                            placeholder="Имя (необязательно)"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <Input
                            classes="input"
                            type="text"
                            name="name"
                            placeholder="Фамилия (необязательно)"
                            onChange={(e) => {
                                setSurname(e.target.value);
                            }}
                        />
                        <Input
                            classes="input"
                            type="text"
                            name="city"
                            placeholder="Город (необязательно)"
                            onChange={(e) => {
                                setCity(e.target.value);
                            }}
                        />
                    </>
                )}
            </div>

            <Button classes="btnEnter" onClick={() => requiredFields()}>
                {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
            <Button
                classes="btnSignup"
                onClick={() => {
                    setErrorEmail('');
                    setErrorPassword('');
                    setErrorEmailServer('');
                    setErrorPasswordServer('');

                    if (isLogin) {
                        navigate('/registration');
                    } else {
                        navigate('/auth');
                    }
                }}
            >
                {!isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
        </form>
    );
}

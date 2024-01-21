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
    const [isValid, setIsValid] = useState(true);

    const requiredFields = () => {
        setIsValid(true);
        setError('');
        setErrorEmail('');
        setErrorPassword('');

        const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // const patternPassword =
        //     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

        if (!email || !password) {
            setError('Обязательное поле для заполнения');
            setIsValid(false);
            return;
        }
        if (!isLogin && !repeatPassword) {
            setError('Обязательное поле для заполнения');
            setIsValid(false);
            return;
        }
        if (email && !patternEmail.test(email)) {
            setErrorEmail('Некорректный формат email');
            setIsValid(false);
            return;
        }
        if (password.length < 8 && !isLogin) {
            setErrorPassword('Длина пароля должна быть не менее 8 символов');
            setIsValid(false);
        }
        // if (
        //     password.length > 8 &&
        //     !patternPassword.test(password) &&
        //     !isLogin
        // ) {
        //     setErrorPassword(
        //         'Пароль должен содержать символы, буквы и цифры разного регистра',
        //     );
        //     setIsValid(false);
        // }
    };

    const handleLogin = async () => {
        requiredFields();

        if (isValid) {
            try {
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

    const handleRegister = async () => {
        requiredFields();

        if (isValid) {
            if (password !== repeatPassword) {
                toast.error('Пароли не совпадают', { className: s.error });
            } else {
                try {
                    await registrationUser({
                        email: email.replaceAll(' ', ''),
                        password: password.replaceAll(' ', ''),
                        name,
                        surname,
                        city,
                    });
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
                    {email && errorEmail && (
                        <p className={s.errorFieled}>{errorEmail}</p>
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

            <Button
                classes="btnEnter"
                onClick={isLogin ? handleLogin : handleRegister}
            >
                {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
            <Button
                classes="btnSignup"
                onClick={() =>
                    isLogin ? navigate('/registration') : navigate('/auth')
                }
            >
                {!isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
        </form>
    );
}

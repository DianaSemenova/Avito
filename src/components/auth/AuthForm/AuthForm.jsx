import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './AuthForm.module.css';
import {
    useLoginUserMutation,
    useRegistrationUserMutation,
} from '../../../services/auth';
import { setAuth } from '../../../store/slices/auth';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

export default function AuthForm({ navigate, isLogin }) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [city, setCity] = useState('');
    const [loginUser, { error }] = useLoginUserMutation();
    const [registrationUser] = useRegistrationUserMutation();

    const handleLogin = async () => {
        try {
            const response = await loginUser({ email, password });
            console.log('response', response);

            dispatch(
                setAuth({
                    access: response.data.access_token,
                    refresh: response.data.refresh_token,
                }),
            );
            navigate('/profile-personal');
        } catch (currentError) {
            console.log('currentError', currentError);
        }
    };

    const handleRegister = async () => {
        if (password !== repeatPassword) {
            console.log('Пароли не совпадают');
        } else {
            try {
                const response = await registrationUser({
                    email,
                    password,
                    name,
                    surname,
                    city,
                });
                navigate('/profile-personal');
                console.log('responseReg', response);
            } catch (currentError) {
                console.log('currentError', currentError);
                console.log('error', error);
            }
        }
    };

    return (
        <form className={s.modalFormLogin} id="formLogIn" action="#">
            <div className={s.logo}>
                <img src="../img/logo_modal.png" alt="logo" />
            </div>

            <div className={s.wrapperInput}>
                <Input
                    classes="input"
                    type="text"
                    name="login"
                    placeholder="email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <Input
                    classes="input"
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                {!isLogin && (
                    <>
                        <Input
                            classes="input"
                            type="password"
                            name="password"
                            placeholder="Повторите пароль"
                            onChange={(e) => {
                                setRepeatPassword(e.target.value);
                            }}
                        />
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

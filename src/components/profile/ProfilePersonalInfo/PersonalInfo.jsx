/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import s from './PersonalInfo.module.css';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import { useUpdateUserMutation } from '../../../services/user';
import UpdatePassword from '../ModalUpdatePassword/UpdatePassword';

export default function PersonalInfo({ data, isLoading }) {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [postDataUser, { isLoading: isLoadingUser }] =
        useUpdateUserMutation();
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        if (data.name) {
            setName(data.name);
        }
        if (data.surname) {
            setSurname(data.surname);
        }
        if (data.email) {
            setEmail(data.email);
        }
        if (data.city) {
            setCity(data.city);
        }
        if (data.phone) {
            setPhone(data.phone);
        }
    }, [data]);

    const updateDataUser = async () => {
        try {
            await postDataUser({
                name,
                surname,
                email,
                city,
                phone,
            });
            if (!isLoadingUser) {
                toast.success('Данные успешно изменены!');
            }
        } catch (error) {
            toast.error(error.message, { className: s.error });
        }
    };

    return (
        <SkeletonTheme color="#333" highlightColor="#f2f1f0">
            <form className={s.form} action="#">
                <div
                    className={`${s.formDiv} ${
                        name !== data?.name && s.active
                    }`}
                >
                    <label htmlFor="fname">Имя</label>
                    {!isLoading ? (
                        <Input
                            classes="inputPersonal"
                            id="fname"
                            name="text"
                            type="text"
                            value={name}
                            placeholder=""
                            onChange={(e) => setName(e.target.value)}
                        />
                    ) : (
                        <Skeleton width={300} height={30} />
                    )}
                </div>
                <div
                    className={`${s.formDiv} ${
                        surname !== data?.surname && s.active
                    }`}
                >
                    <label htmlFor="lname">Фамилия</label>
                    {!isLoading ? (
                        <Input
                            classes="inputPersonal"
                            id="lname"
                            name="text"
                            type="text"
                            value={surname}
                            placeholder=""
                            onChange={(e) => setSurname(e.target.value)}
                        />
                    ) : (
                        <Skeleton width={300} height={30} />
                    )}
                </div>
                <div
                    className={`${s.formDiv} ${
                        email !== data?.email && s.active
                    }`}
                >
                    <label htmlFor="email">E-mail</label>
                    {!isLoading ? (
                        <Input
                            classes="inputPersonal"
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            placeholder=""
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    ) : (
                        <Skeleton width={300} height={30} />
                    )}
                </div>
                <div
                    className={`${s.formDiv} ${
                        city !== data?.city && s.active
                    }`}
                >
                    <label htmlFor="city">Город</label>
                    {!isLoading ? (
                        <Input
                            classes="inputPersonal"
                            name="city"
                            type="text"
                            value={city}
                            placeholder=""
                            onChange={(e) => setCity(e.target.value)}
                        />
                    ) : (
                        <Skeleton width={300} height={30} />
                    )}
                </div>
                <div
                    className={`${s.formDiv} ${
                        phone !== data?.phone && s.active
                    }`}
                >
                    <label htmlFor="phone">Телефон</label>
                    {!isLoading ? (
                        <Input
                            classes="inputPhone"
                            name="phone"
                            type="tel"
                            value={phone}
                            placeholder={+79161234567}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    ) : (
                        <Skeleton width={500} height={30} />
                    )}
                </div>
                <Button
                    classes="btnPersonal"
                    isDisabled={
                        !!(
                            name === data?.name &&
                            surname === data?.surname &&
                            email === data?.email &&
                            city === data?.city &&
                            phone === data?.phone
                        )
                    }
                    onClick={() => updateDataUser()}
                >
                    {isLoadingUser ? 'Данные сохраняются...' : 'Сохранить'}
                </Button>
                <Button
                    classes="btnPersonal"
                    onClick={() => setModalActive(true)}
                >
                    Изменить пароль
                </Button>
                <UpdatePassword
                    modalActive={modalActive}
                    setModalActive={setModalActive}
                />
            </form>
        </SkeletonTheme>
    );
}

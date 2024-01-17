/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import s from './PersonalInfo.module.css';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import { useUpdateUserMutation } from '../../../services/user';
import { setAuth } from '../../../store/slices/auth';
import UpdatePassword from '../ModalUpdatePassword/UpdatePassword';

export default function PersonalInfo({ data }) {
    const dispatch = useDispatch();
    const [name, setName] = useState(data?.name);
    const [surname, setSurname] = useState(data?.surname);
    const [email, setEmail] = useState(data?.email);
    const [city, setCity] = useState(data?.city);
    const [phone, setPhone] = useState(data?.phone);
    const [postDataUser] = useUpdateUserMutation();
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        if (data) {
            setName(data.name);
            setSurname(data.surname);
            setEmail(data.email);
            setCity(data.city);
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

            dispatch(
                setAuth({
                    ...data,
                    email,
                    name,
                    surname,
                    city,
                    phone,
                }),
            );

            toast.success('Данные успешно изменены!');
        } catch (error) {
            toast.error(error.message, { className: s.error });
        }
    };

    return (
        <form className={s.form} action="#">
            <div className={`${s.formDiv} ${name !== data?.name && s.active}`}>
                <label htmlFor="fname">Имя</label>
                <Input
                    classes="inputPersonal"
                    name="text"
                    type="text"
                    value={name}
                    placeholder=""
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div
                className={`${s.formDiv} ${
                    surname !== data?.surname && s.active
                }`}
            >
                <label htmlFor="lname">Фамилия</label>
                <Input
                    classes="inputPersonal"
                    name="text"
                    type="text"
                    value={surname}
                    placeholder=""
                    onChange={(e) => setSurname(e.target.value)}
                />
            </div>
            <div
                className={`${s.formDiv} ${email !== data?.email && s.active}`}
            >
                <label htmlFor="city">E-mail</label>
                <Input
                    classes="inputPersonal"
                    name="email"
                    type="email"
                    value={email}
                    placeholder=""
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={`${s.formDiv} ${city !== data?.city && s.active}`}>
                <label htmlFor="city">Город</label>
                <Input
                    classes="inputPersonal"
                    name="city"
                    type="text"
                    value={city}
                    placeholder=""
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>
            <div
                className={`${s.formDiv} ${phone !== data?.phone && s.active}`}
            >
                <label htmlFor="phone">Телефон</label>
                <Input
                    classes="inputPhone"
                    name="phone"
                    type="tel"
                    value={phone}
                    placeholder={+79161234567}
                    onChange={(e) => setPhone(e.target.value)}
                />
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
                Сохранить
            </Button>
            <Button classes="btnPersonal" onClick={() => setModalActive(true)}>
                Изменить пароль
            </Button>
            <UpdatePassword
                modalActive={modalActive}
                setModalActive={setModalActive}
            />
        </form>
    );
}

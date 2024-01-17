/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './PersonalInfo.module.css';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import { useUpdateUserMutation } from '../../../services/user';
import { setAuth } from '../../../store/slices/auth';

export default function PersonalInfo({ data }) {
    const dispatch = useDispatch();
    const [name, setName] = useState(data?.name);
    const [surname, setSurname] = useState(data?.surname);
    const [email, setEmail] = useState(data?.email);
    const [city, setCity] = useState(data?.city);
    const [phone, setPhone] = useState(data?.phone);
    const [postDataUser] = useUpdateUserMutation();

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
        } catch (currentError) {
            console.log('currentError', currentError);
        }
    };

    return (
        <form className={s.form} action="#">
            <div className={s.formDiv}>
                <label htmlFor="fname">Имя</label>
                <Input
                    classes="inputPersonal"
                    name="fname"
                    type="text"
                    defaultValue={name}
                    placeholder=""
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className={s.formDiv}>
                <label htmlFor="lname">Фамилия</label>
                <Input
                    classes="inputPersonal"
                    name="lname"
                    type="text"
                    defaultValue={surname}
                    placeholder=""
                    onChange={(e) => setSurname(e.target.value)}
                />
            </div>
            <div className={s.formDiv}>
                <label htmlFor="city">E-mail</label>
                <Input
                    classes="inputPersonal"
                    name="email"
                    type="email"
                    defaultValue={email}
                    placeholder=""
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={s.formDiv}>
                <label htmlFor="city">Город</label>
                <Input
                    classes="inputPersonal"
                    name="city"
                    type="text"
                    defaultValue={city}
                    placeholder=""
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>
            <div className={s.formDiv}>
                <label htmlFor="phone">Телефон</label>
                <Input
                    classes="inputPhone"
                    name="phone"
                    type="tel"
                    defaultValue={phone}
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
        </form>
    );
}

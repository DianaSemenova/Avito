/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';
import s from './PersonalInfo.module.css';
import Button from '../../UI/Button/Button';

export default function PersonalInfo({ data }) {
    useEffect(() => {
        console.log('dataUser', data);
    }, [data]);

    return (
        <form className={s.form} action="#">
            <div className={s.formDiv}>
                <label htmlFor="fname">Имя</label>
                <input
                    className={s.input}
                    id="settings-fname"
                    name="fname"
                    type="text"
                    defaultValue={data?.name}
                    placeholder=""
                />
            </div>
            <div className={s.formDiv}>
                <label htmlFor="lname">Фамилия</label>
                <input
                    className={s.input}
                    id="settings-lname"
                    name="lname"
                    type="text"
                    defaultValue={data?.surname}
                    placeholder=""
                />
            </div>
            <div className={s.formDiv}>
                <label htmlFor="city">Город</label>
                <input
                    className={s.input}
                    id="settings-city"
                    name="city"
                    type="text"
                    defaultValue={data?.city}
                    placeholder=""
                />
            </div>
            <div className={s.formDiv}>
                <label htmlFor="phone">Телефон</label>
                <input
                    className={s.inputPhone}
                    id="settings-phone"
                    name="phone"
                    type="tel"
                    defaultValue={data?.phone}
                    placeholder={+79161234567}
                />
            </div>
            <Button classes="btnPersonal">Сохранить</Button>
        </form>
    );
}

/* eslint-disable jsx-a11y/label-has-associated-control */
import s from './PersonalInfo.module.css';

export default function PersonalInfo() {
    return (
        <form className={s.form} action="#">
            <div className={s.formDiv}>
                <label htmlFor="fname">Имя</label>
                <input
                    className={s.input}
                    id="settings-fname"
                    name="fname"
                    type="text"
                    defaultValue="Ан"
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
                    defaultValue="Городецкий"
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
                    defaultValue="Санкт-Петербург"
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
                    defaultValue={89161234567}
                    placeholder={+79161234567}
                />
            </div>
            <button type="button" className={s.btn} id="settings-btn">
                Сохранить
            </button>
        </form>
    );
}

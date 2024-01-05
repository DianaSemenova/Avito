/* eslint-disable jsx-a11y/label-has-associated-control */
export default function PersonalInfo() {
    return (
        <form className="settings__form" action="#">
            <div className="settings__div">
                <label htmlFor="fname">Имя</label>
                <input
                    className="settings__f-name"
                    id="settings-fname"
                    name="fname"
                    type="text"
                    defaultValue="Ан"
                    placeholder=""
                />
            </div>
            <div className="settings__div">
                <label htmlFor="lname">Фамилия</label>
                <input
                    className="settings__l-name"
                    id="settings-lname"
                    name="lname"
                    type="text"
                    defaultValue="Городецкий"
                    placeholder=""
                />
            </div>
            <div className="settings__div">
                <label htmlFor="city">Город</label>
                <input
                    className="settings__city"
                    id="settings-city"
                    name="city"
                    type="text"
                    defaultValue="Санкт-Петербург"
                    placeholder=""
                />
            </div>
            <div className="settings__div">
                <label htmlFor="phone">Телефон</label>
                <input
                    className="settings__phone"
                    id="settings-phone"
                    name="phone"
                    type="tel"
                    defaultValue={89161234567}
                    placeholder={+79161234567}
                />
            </div>
            <button
                type="button"
                className="settings__btn btn-hov02"
                id="settings-btn"
            >
                Сохранить
            </button>
        </form>
    );
}

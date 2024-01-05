/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
import s from './Profile.module.css';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import ProfileContent from '../../components/profile/ProfileContent/ProfileContent';

export default function ProfilePersonal() {
    return (
        <main>
            <div className={s.mainContainer}>
                <div className={s.centerBlock}>
                    <PageWrapper />

                    <h2 className={s.heading}>Здравствуйте, Антон!</h2>
                    <div className={s.mainProfile}>
                        <div className={s.profileContent}>
                            <h3 className={s.profileTitle}>
                                Настройки профиля
                            </h3>
                            <div className={s.profilePersonal}>
                                <ProfileContent page="personal" />
                                {/* <div className="settings__left">
                                    <div className="settings__img">
                                        <img src="#" alt="" />
                                    </div>

                                    <p>Заменить</p>
                                </div>
                                <div className="settings__right">
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
                                            <label htmlFor="lname">
                                                Фамилия
                                            </label>
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
                                            <label htmlFor="phone">
                                                Телефон
                                            </label>
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
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <h3 className={s.mainTitle}>Мои товары</h3>
                </div>
                <div className="main__content">
                    <div className="content__cards cards">
                        <div className="cards__item">
                            <div className="cards__card card">
                                <div className="card__image">
                                    <img src="#" alt="picture" />
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title">
                                        Ракетка для большого тенниса Triumph Pro
                                        ST
                                    </h3>

                                    <p className="card__price">
                                        2&nbsp;200&nbsp;₽
                                    </p>
                                    <p className="card__place">
                                        Санкт Петербург
                                    </p>
                                    <p className="card__date">
                                        Сегодня в&nbsp;10:45
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cards__item">
                            <div className="cards__card card">
                                <div className="card__image">
                                    <img src="#" alt="picture" />
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title">
                                        Ракетка для большого тенниса Triumph Pro
                                        ST
                                    </h3>

                                    <p className="card__price">
                                        2&nbsp;200&nbsp;₽
                                    </p>
                                    <p className="card__place">
                                        Санкт Петербург
                                    </p>
                                    <p className="card__date">
                                        Сегодня в&nbsp;10:45
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cards__item">
                            <div className="cards__card card">
                                <div className="card__image">
                                    <img src="#" alt="picture" />
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title">
                                        Ракетка для большого тенниса Triumph Pro
                                        ST
                                    </h3>

                                    <p className="card__price">
                                        2&nbsp;200&nbsp;₽
                                    </p>
                                    <p className="card__place">
                                        Санкт Петербург
                                    </p>
                                    <p className="card__date">
                                        Сегодня в&nbsp;10:45
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cards__item">
                            <div className="cards__card card">
                                <div className="card__image">
                                    <img src="#" alt="picture" />
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title">
                                        Ракетка для большого тенниса Triumph Pro
                                        ST
                                    </h3>

                                    <p className="card__price">
                                        2&nbsp;200&nbsp;₽
                                    </p>
                                    <p className="card__place">
                                        Санкт Петербург
                                    </p>
                                    <p className="card__date">
                                        Сегодня в&nbsp;10:45
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cards__item">
                            <div className="cards__card card">
                                <div className="card__image">
                                    <img src="#" alt="picture" />
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title">
                                        Ракетка для большого тенниса Triumph Pro
                                        ST
                                    </h3>

                                    <p className="card__price">
                                        2&nbsp;200&nbsp;₽
                                    </p>
                                    <p className="card__place">
                                        Санкт Петербург
                                    </p>
                                    <p className="card__date">
                                        Сегодня в&nbsp;10:45
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cards__item">
                            <div className="cards__card card">
                                <div className="card__image">
                                    <img src="#" alt="picture" />
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title">
                                        Ракетка для большого тенниса Triumph Pro
                                        ST
                                    </h3>

                                    <p className="card__price">
                                        2&nbsp;200&nbsp;₽
                                    </p>
                                    <p className="card__place">
                                        Санкт Петербург
                                    </p>
                                    <p className="card__date">
                                        Сегодня в&nbsp;10:45
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
import s from './Profile.module.css';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import ProfileContent from '../../components/profile/ProfileContent/ProfileContent';

export default function ProfileSeller() {
    return (
        <main>
            <div className={s.mainContainer}>
                <div className={s.centerBlock}>
                    <PageWrapper />
                    <h2 className={s.headingSeller}>Профиль продавца</h2>
                    <div className={s.mainProfile}>
                        <div className={s.profileSellContent}>
                            <div className={s.profileSeller}>
                                <ProfileContent page="seller" />
                                {/* <div className="seller__left">
                                    <div className="seller__img">
                                        <img src="#" alt="" />
                                    </div>
                                </div>
                                <div className="seller__right">
                                    <h3 className="seller__title">
                                        Кирилл Матвеев
                                    </h3>
                                    <p className="seller__city">
                                        Санкт-Петербург
                                    </p>
                                    <p className="seller__inf">
                                        Продает товары с августа 2021
                                    </p>
                                    <div className="seller__img-mob-block">
                                        <div className="seller__img-mob">
                                            <img src="#" alt="" />
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="seller__btn btn-hov02"
                                    >
                                        Показать&nbsp;телефон
                                        <span>
                                            8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ
                                        </span>
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <h3 className={`${s.mainTitle} ${s.title}`}>
                        Товары продавца
                    </h3>
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

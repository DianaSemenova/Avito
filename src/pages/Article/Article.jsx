/* eslint-disable jsx-a11y/anchor-is-valid */
import s from './Article.module.css';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';

export default function Article() {
    return (
        <main className={s.main}>
            <PageWrapper />
            <div className={s.mainArtic}>
                <div className={s.articContent}>
                    <div className={s.articleLeft}>
                        <div className={s.articleFillImg}>
                            <div className={s.articleImg}>
                                <img src="" alt="" />
                            </div>
                            <div className={s.imgBar}>
                                <div className={s.imgBarDiv}>
                                    <img src="" alt="" />
                                </div>
                                <div className={s.imgBarDiv}>
                                    <img src="" alt="" />
                                </div>
                                <div className={s.imgBarDiv}>
                                    <img src="" alt="" />
                                </div>
                                <div className={s.imgBarDiv}>
                                    <img src="" alt="" />
                                </div>
                                <div className={s.imgBarDiv}>
                                    <img src="" alt="" />
                                </div>
                                <div className={s.imgBarDiv}>
                                    <img src="" alt="" />
                                </div>
                            </div>
                            <div className={s.imgBarMob}>
                                <div className={s.imgBarMobCircle} />
                                <div className={s.imgBarMobCircle} />
                                <div className={s.imgBarMobCircle} />
                                <div className={s.imgBarMobCircle} />
                                <div className={s.imgBarMobCircle} />
                            </div>
                        </div>
                    </div>
                    <div className={s.articleRight}>
                        <div className={s.articleBlock}>
                            <h3 className={s.articleTitle}>
                                Ракетка для большого тенниса Triumph Pro STС Б/У
                            </h3>
                            <div className={s.articleInfo}>
                                <p className={s.articleDate}>Сегодня в 10:45</p>
                                <p className={s.articleCity}>Санкт-Петербург</p>
                                <a
                                    className={s.articleLink}
                                    href=""
                                    target="_blank"
                                >
                                    4 отзыва
                                </a>
                            </div>
                            <p className={s.articlePrice}>2 200 ₽</p>
                            <div className={s.btnBlock}>
                                {/* <button className="article__btn btn-redact btn-hov02">
                                    Редактировать
                                </button>
                                <button className="article__btn btn-remove btn-hov02">
                                    Снять с публикации
                                </button> */}
                            </div>
                            <div className={s.articleAuthor}>
                                <div className={s.authorImg}>
                                    <img src="" alt="" />
                                </div>
                                <div className={s.authorCont}>
                                    <p className={s.authorName}>Антон</p>
                                    <p className={s.authorAbout}>
                                        Продает товары с&nbsp;мая 2022
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.mainContainer}>
                <h3 className={s.mainTitle}>Описание товара</h3>
                <div className={s.mainContent}>
                    <p className={s.mainText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
            </div>
        </main>
    );
}

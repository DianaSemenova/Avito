/* eslint-disable jsx-a11y/anchor-is-valid */
import { useParams } from 'react-router-dom';
import s from './Article.module.css';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import { useGetAdvQuery, useGetCommentsAdvQuery } from '../../services/ads';
import getNumberComments from '../../utils/getNumberComments';

export default function Article() {
    const { id } = useParams();
    const { data } = useGetAdvQuery(id);
    const { data: comments } = useGetCommentsAdvQuery(id);

    console.log('articledata', data);
    console.log('comments', comments);

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
                            <h3 className={s.articleTitle}>{data?.title}</h3>
                            <div className={s.articleInfo}>
                                <p className={s.articleDate}>{data?.date}</p>
                                <p className={s.articleCity}> {data?.city}</p>
                                <a
                                    className={s.articleLink}
                                    href=""
                                    target="_blank"
                                >
                                    {getNumberComments(comments)}
                                </a>
                            </div>
                            <p className={s.articlePrice}>{data?.price} ₽</p>
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
                    <p className={s.mainText}>{data?.description}</p>
                </div>
            </div>
        </main>
    );
}

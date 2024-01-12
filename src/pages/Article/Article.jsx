/* eslint-disable jsx-a11y/anchor-is-valid */
import { useParams } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import s from './Article.module.css';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import { useGetAdvQuery, useGetCommentsAdvQuery } from '../../services/ads';
import getReviewsEnding from '../../utils/getReviewsEnding';

export default function Article() {
    const { id } = useParams();
    const { data } = useGetAdvQuery(id);
    const { data: comments } = useGetCommentsAdvQuery(id);

    console.log('articledata', data);
    console.log('comments', comments);

    return (
        <SkeletonTheme color="#333" highlightColor="#f2f1f0">
            <main className={s.main}>
                <PageWrapper />
                <div className={s.mainArtic}>
                    <div className={s.articContent}>
                        <div className={s.articleLeft}>
                            <div className={s.articleFillImg}>
                                {data ? (
                                    <div className={s.articleImg}>
                                        {data.images[0] ? (
                                            <img
                                                src={`http://localhost:8090/${data.images[0].url}`}
                                                alt={data.title}
                                            />
                                        ) : (
                                            <p className={s.noPhoto}>
                                                No photo
                                            </p>
                                        )}
                                    </div>
                                ) : (
                                    <Skeleton width={480} height={480} />
                                )}
                                <ul className={s.imgBar}>
                                    {data
                                        ? data.images?.length > 1 &&
                                          data.images.map((image) => (
                                              <li
                                                  className={s.imgBarDiv}
                                                  key={image.id}
                                              >
                                                  <img
                                                      src={`http://localhost:8090/${image.url}`}
                                                      alt={data.title}
                                                  />
                                              </li>
                                          ))
                                        : Array(5)
                                              .fill()
                                              .map(() => (
                                                  <li
                                                      className={s.imgBarDiv}
                                                      key={Math.random()}
                                                  >
                                                      <Skeleton
                                                          width={88}
                                                          height={88}
                                                      />
                                                  </li>
                                              ))}
                                </ul>
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
                                    {data ? (
                                        data?.title
                                    ) : (
                                        <Skeleton width={480} height={80} />
                                    )}
                                </h3>
                                <div className={s.articleInfo}>
                                    <p className={s.articleDate}>
                                        {data ? (
                                            data.created_on
                                        ) : (
                                            <Skeleton width={280} height={50} />
                                        )}
                                    </p>
                                    <p className={s.articleCity}>
                                        {data ? (
                                            data.user.city
                                        ) : (
                                            <Skeleton width={280} height={50} />
                                        )}
                                    </p>
                                    <a
                                        className={s.articleLink}
                                        href=""
                                        target="_blank"
                                    >
                                        {comments ? (
                                            getReviewsEnding(comments)
                                        ) : (
                                            <Skeleton width={180} height={30} />
                                        )}
                                    </a>
                                </div>
                                <p className={s.articlePrice}>
                                    {data ? (
                                        data.price
                                    ) : (
                                        <Skeleton width={180} height={30} />
                                    )}
                                    ₽
                                </p>
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
                                        <p className={s.authorName}>{data ?  data.user.name : (
                                        <Skeleton width={80} height={20} />
                                    )}</p>
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
                            {data ? (
                                data.description
                            ) : (
                                <Skeleton width={600} height={200} />
                            )}
                        </p>
                    </div>
                </div>
            </main>
        </SkeletonTheme>
    );
}

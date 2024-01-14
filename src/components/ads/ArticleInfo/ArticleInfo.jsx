/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/order */
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './ArticleInfo.module.css';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import Button from '../../UI/Button/Button';
import getReviewsEnding from '../../../utils/getReviewsEnding';

export default function ArticleInfo({ data, comments }) {
    const { ID } = useSelector((state) => state.auth);

    return (
        <div className={s.articleBlock}>
            <h3 className={s.articleTitle}>
                {data ? data?.title : <Skeleton width={480} height={80} />}
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
                <a className={s.articleLink} href="" target="_blank">
                    {comments ? (
                        getReviewsEnding(comments)
                    ) : (
                        <Skeleton width={180} height={30} />
                    )}
                </a>
            </div>
            <p className={s.articlePrice}>
                {data ? (
                    `${data.price} ₽`
                ) : (
                    <Skeleton width={180} height={30} />
                )}
            </p>
            <div className={s.btnBlock}>
                {ID === data?.user.id ? (
                    <>
                        <Button classes="articleBtn">Редактировать</Button>
                        <Button classes="btnRemove">Снять с публикации</Button>
                    </>
                ) : (
                    <Button classes="btnSeller">
                        Показать&nbsp;телефон
                        <span className={s.span}>
                            8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ
                        </span>
                    </Button>
                )}
            </div>
            <div className={s.articleAuthor}>
                <div className={s.authorImg}>
                    <img src="" alt="" />
                </div>
                <div className={s.authorCont}>
                    <Link
                        to={
                            ID === data?.user.id
                                ? '/profile-profile'
                                : `/profile-seller/${data?.user.id}`
                        }
                    >
                        <p className={s.authorName}>
                            {data ? (
                                data.user.name
                            ) : (
                                <Skeleton width={80} height={20} />
                            )}
                        </p>
                    </Link>

                    <p className={s.authorAbout}>
                        Продает товары с&nbsp;мая 2022
                    </p>
                </div>
            </div>
        </div>
    );
}

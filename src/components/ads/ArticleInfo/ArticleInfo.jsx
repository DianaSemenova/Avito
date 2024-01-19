/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/order */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import s from './ArticleInfo.module.css';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import Button from '../../UI/Button/Button';
import getReviewsEnding from '../../../utils/getReviewsEnding';
import showPhone from '../../../utils/showPhone';
import Modal from '../../UI/Modal/Modal';
import CommentsModal from '../Modal/Comments/Comments';
import { useDeleteAdvMutation } from '../../../services/ads';
import AdvSettings from '../Modal/AdvSettings/AdvSettings';

export default function ArticleInfo({ data, comments, articleID }) {
    const navigate = useNavigate();
    const { ID } = useSelector((state) => state.auth);
    const [isShowPhone, setIsShowPhone] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [modalSettingsActive, setModalSettingsActive] = useState(false);
    const [deleteTextAdv, { error: errorDeleteAdvText }] =
        useDeleteAdvMutation();

    const deleteAdv = async () => {
        try {
            await deleteTextAdv({ id: articleID });
            console.log('errorDeleteAdvText', errorDeleteAdvText);

            if (errorDeleteAdvText) {
                toast.error(errorDeleteAdvText.error, { className: s.error });
            } else {
                toast.success('Объявление успешно снято с публикации!');
                navigate('/profile-personal');
            }
        } catch (error) {
            toast.error(error.message, { className: s.error });
        }
    };

    const getAvatar = () => {
        if (data.user.avatar) {
            return (
                <img
                    src={`http://localhost:8090/${data.user.avatar}`}
                    alt="avatar"
                />
            );
        }
        return <p className={s.noPhoto}>No photo</p>;
    };

    return (
        <div className={s.articleBlock}>
            <h3 className={s.articleTitle}>
                {data ? data?.title : <Skeleton width={480} height={60} />}
            </h3>
            <div className={s.articleInfo}>
                <p className={s.articleDate}>
                    {data ? (
                        data.created_on
                    ) : (
                        <Skeleton width={280} height={30} />
                    )}
                </p>
                <p className={s.articleCity}>
                    {data ? (
                        data.user.city
                    ) : (
                        <Skeleton width={180} height={20} />
                    )}
                </p>

                <Button
                    classes="btnComments"
                    onClick={() => setModalActive(true)}
                >
                    {comments ? (
                        getReviewsEnding(comments)
                    ) : (
                        <Skeleton width={100} height={10} />
                    )}
                </Button>
                <Modal
                    active={modalActive}
                    setActive={setModalActive}
                    width="900px"
                    pointerEvents
                >
                    <CommentsModal
                        setActive={setModalActive}
                        comments={comments}
                        articleID={articleID}
                    />
                </Modal>
            </div>
            <p className={s.articlePrice}>
                {data ? (
                    `${data.price} ₽`
                ) : (
                    <Skeleton width={180} height={20} />
                )}
            </p>
            <div className={s.btnBlock}>
                {data &&
                    (ID === data?.user.id ? (
                        <>
                            <Button
                                classes="articleBtn"
                                onClick={() => setModalSettingsActive(true)}
                            >
                                Редактировать
                            </Button>
                            <Modal
                                active={modalSettingsActive}
                                setActive={setModalSettingsActive}
                                pointerEvents
                            >
                                <AdvSettings
                                    setActive={setModalSettingsActive}
                                    data={data}
                                    articleID={articleID}
                                />
                            </Modal>
                            <Button
                                classes="btnRemove"
                                onClick={() => deleteAdv()}
                            >
                                Снять с публикации
                            </Button>
                        </>
                    ) : (
                        <Button
                            classes="btnSeller"
                            onClick={() => setIsShowPhone(true)}
                        >
                            {!isShowPhone && 'Показать телефон'}
                            <span className={s.span}>
                                {showPhone({ isShowPhone, data: data.user })}
                            </span>
                        </Button>
                    ))}
                {!data && <Skeleton width={200} height={60} />}
            </div>
            <Link
                to={
                    ID === data?.user.id
                        ? '/profile-personal'
                        : `/profile-seller/${data?.user.id}`
                }
            >
                <div className={s.articleAuthor}>
                    <div className={s.authorImg}>
                        {data ? (
                            getAvatar()
                        ) : (
                            <Skeleton width={40} height={40} circle />
                        )}
                    </div>
                    <div className={s.authorCont}>
                        <p className={s.authorName}>
                            {data ? (
                                data.user.name
                            ) : (
                                <Skeleton width={80} height={20} />
                            )}
                        </p>

                        <p className={s.authorAbout}>
                            Продает товары с{' '}
                            {data ? (
                                data.user.sells_from
                            ) : (
                                <Skeleton width={200} height={20} />
                            )}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

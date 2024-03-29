/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import s from './Product.module.css';
import { formatDateTime } from '../../../utils/formatDateTime';

export default function ProductItem({ item }) {
    const navigate = useNavigate();

    return (
        <SkeletonTheme color="#333" highlightColor="#f2f1f0">
            <div
                className={s.cardsItem}
                onClick={() => navigate(`/article/${item?.id}`)}
            >
                <div className={s.cardsCard}>
                    {item ? (
                        <div className={s.cardImage}>
                            {item.images[0] ? (
                                <img
                                    src={`http://localhost:8090/${item.images[0].url}`}
                                    alt={item.title}
                                />
                            ) : (
                                <p className={s.noPhoto}>No photo</p>
                            )}
                        </div>
                    ) : (
                        <Skeleton width={270} height={270} />
                    )}

                    <div className="card__content">
                        <h3 className={s.cardTitle}>
                            {item ? (
                                item.title
                            ) : (
                                <Skeleton width={100} height={20} />
                            )}
                        </h3>

                        <p className={s.cardPrice}>
                            {item ? (
                                `${item.price} ₽`
                            ) : (
                                <Skeleton width={100} height={20} />
                            )}
                        </p>
                        <p className={s.cardPlace}>
                            {item ? (
                                item.user.city
                            ) : (
                                <Skeleton width={100} height={20} />
                            )}
                        </p>
                        <p className={s.cardDate}>
                            {item ? (
                                formatDateTime(item.created_on)
                            ) : (
                                <Skeleton width={200} height={20} />
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );
}

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import s from './Product.module.css';

export default function ProductItem({ item }) {
    return (
        <SkeletonTheme color="grey" highlightColor="#444">
            <div className={s.cardsItem}>
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
                                <Skeleton width={100} height={52} />
                            )}
                        </h3>

                        <p className={s.cardPrice}>
                            {item ? item.price : <Skeleton width={250} />}
                        </p>
                        <p className={s.cardPlace}>
                            {item ? (
                                item.user.city
                            ) : (
                                <Skeleton width={100} height={52} />
                            )}
                        </p>
                        <p className={s.cardDate}>
                            {item ? (
                                item.created_on
                            ) : (
                                <Skeleton width={100} height={52} />
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );
}

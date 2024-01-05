/* eslint-disable jsx-a11y/img-redundant-alt */
import s from './Product.module.css';

export default function Product({ data }) {
    return (
        <div className={s.mainContent}>
            <div className={s.cards}>
                {data &&
                    data.map((item) => (
                        <div className={s.cardsItem} key={Math.random()}>
                            <div className={s.cardsCard}>
                                <div className={s.cardImage}>
                                    <img src="#" alt="picture" />
                                </div>
                                <div className="card__content">
                                    <h3 className={s.cardTitle}>{item.name}</h3>
                                    <p className={s.cardPrice}>{item.price}</p>
                                    <p className={s.cardPlace}>{item.place}</p>
                                    <p className={s.cardDate}>
                                        Сегодня в&nbsp;{item.date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

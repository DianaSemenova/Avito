import s from './SellerInfo.module.css';

export default function SellerInfo() {
    return (
        <>
            <h3 className={s.title}>Кирилл Матвеев</h3>
            <p className={s.city}>Санкт-Петербург</p>
            <p className={s.info}>Продает товары с августа 2021</p>

            <button type="button" className={s.btn}>
                Показать&nbsp;телефон
                <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
            </button>
        </>
    );
}

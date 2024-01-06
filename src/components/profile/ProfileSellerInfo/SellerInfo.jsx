import s from './SellerInfo.module.css';
import Button from '../../UI/Button/Button';

export default function SellerInfo() {
    return (
        <>
            <h3 className={s.title}>Кирилл Матвеев</h3>
            <p className={s.city}>Санкт-Петербург</p>
            <p className={s.info}>Продает товары с августа 2021</p>

            <Button classes="btnSeller">
                Показать&nbsp;телефон
                <span className={s.span}>
                    8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ
                </span>
            </Button>
        </>
    );
}

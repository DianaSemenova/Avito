export default function SellerInfo() {
    return (
        <>
            <h3 className="seller__title">Кирилл Матвеев</h3>
            <p className="seller__city">Санкт-Петербург</p>
            <p className="seller__inf">Продает товары с августа 2021</p>

            <button type="button" className="seller__btn btn-hov02">
                Показать&nbsp;телефон
                <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
            </button>
        </>
    );
}

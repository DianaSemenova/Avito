import s from './Product.module.css';
import ProductItem from './ProductItem';

export default function Product({ data, isLoading }) {
    // const isLoading = true;

    return (
        <div className={s.mainContent}>
            <div className={s.cards}>
                {isLoading &&
                    Array(16)
                        .fill()
                        .map(() => <ProductItem key={Math.random()} />)}

                {data?.length > 0 &&
                    !isLoading &&
                    data.map((item) => (
                        <ProductItem key={Math.random()} item={item} />
                    ))}
            </div>
        </div>
    );
}

import { useSelector } from 'react-redux';
import s from './Main.module.css';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import Product from '../../components/common/CardsContent/Product';

export default function MainPage() {
    const { adsAll, isLoading, error } = useSelector((state) => state.ads);

    return (
        <main className="main">
            <PageWrapper />
            <div className={s.mainContainer}>
                <h2 className={s.h2}>Объявления</h2>
                <Product data={adsAll} isLoading={isLoading} error={error} />
            </div>
        </main>
    );
}

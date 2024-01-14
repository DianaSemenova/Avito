import s from './Main.module.css';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import Product from '../../components/common/CardsContent/Product';
import { useGetAdsAllQuery } from '../../services/ads';

export default function MainPage() {
    const { data, error, isLoading } = useGetAdsAllQuery();

    return (
        <main className="main">
            <PageWrapper />
            <div className={s.mainContainer}>
                <h2 className={s.h2}>Объявления</h2>
                <Product data={data} isLoading={isLoading} error={error} />
            </div>
        </main>
    );
}

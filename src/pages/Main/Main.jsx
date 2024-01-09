import s from './Main.module.css';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import Product from '../../components/common/CardsContent/Product';
import { useGetAdsAllQuery } from '../../services/ads';

export default function MainPage() {
    const { data, error, isLoading } = useGetAdsAllQuery();

    console.log('ads', data);
    console.log('error', error);
    console.log('isLoading', isLoading);

    return (
        <main className="main">
            <PageWrapper />
            <div className={s.mainContainer}>
                <h2 className={s.h2}>Объявления</h2>
                <Product data={data && data} />
            </div>
        </main>
    );
}

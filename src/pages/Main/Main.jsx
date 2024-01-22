import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import s from './Main.module.css';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import Product from '../../components/common/CardsContent/Product';

export default function MainPage() {
    const { adsAll, isLoading, error, filterAdsAll } = useSelector(
        (state) => state.ads,
    );
    const [searchText, setSearchText] = useState('');
    const [isMob, setIsMob] = useState(false);
    const [isClickAdd, setIsClickAdd] = useState(false);

    useEffect(() => {
        if (!searchText) {
            setIsClickAdd(false);
        }
    }, [searchText]);

    const handleArrayAds = () => {
        if (isMob && searchText) {
            return filterAdsAll;
        }
        if (isClickAdd && searchText) {
            return filterAdsAll;
        }

        return adsAll;
    };

    return (
        <main className="main">
            <PageWrapper
                searchText={searchText}
                setSearchText={setSearchText}
                isMob={isMob}
                setIsMob={setIsMob}
                setIsClickAdd={setIsClickAdd}
            />
            {!error ? (
                <div className={s.mainContainer}>
                    <h2 className={s.h2}>Объявления</h2>
                    {(isMob && searchText && filterAdsAll.length === 0) ||
                    (isClickAdd && searchText && filterAdsAll.length === 0) ? (
                        <h3
                            className={s.h3}
                        >{`Объявления по запросу «${searchText}» не найдены.`}</h3>
                    ) : (
                        <Product
                            data={handleArrayAds()}
                            isLoading={isLoading}
                            error={error}
                        />
                    )}
                </div>
            ) : (
                <div className={s.mainContainer}>
                    <h4 className={s.h2}>Не удалось загрузить объявления...</h4>
                </div>
            )}
        </main>
    );
}

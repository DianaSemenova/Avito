import { useEffect } from 'react';
import s from './Main.module.css';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import Product from '../../components/common/CardsContent/Product';
import { useGetAdsAllQuery } from '../../services/ads';

export default function MainPage() {
    // const product = [
    //     {
    //         name: 'Ракетка для большого тенниса Triumph Pro ST',
    //         price: '2 200',
    //         place: 'Санкт-Петербург',
    //         date: '10:45',
    //     },
    //     {
    //         name: 'Ракетка для большого тенниса Triumph Pro ST',
    //         price: '2 200',
    //         place: 'Санкт-Петербург',
    //         date: '10:45',
    //     },
    //     {
    //         name: 'Ракетка для большого тенниса Triumph Pro ST',
    //         price: '2 200',
    //         place: 'Санкт-Петербург',
    //         date: '10:45',
    //     },
    //     {
    //         name: 'Ракетка для большого тенниса Triumph Pro ST',
    //         price: '2 200',
    //         place: 'Санкт-Петербург',
    //         date: '10:45',
    //     },
    //     {
    //         name: 'Ракетка для большого тенниса Triumph Pro ST',
    //         price: '2 200',
    //         place: 'Санкт-Петербург',
    //         date: '10:45',
    //     },
    //     {
    //         name: 'Ракетка для большого тенниса Triumph Pro ST',
    //         price: '2 200',
    //         place: 'Санкт-Петербург',
    //         date: '10:45',
    //     },
    //     {
    //         name: 'Ракетка для большого тенниса Triumph Pro ST',
    //         price: '2 200',
    //         place: 'Санкт-Петербург',
    //         date: '10:45',
    //     },
    //     {
    //         name: 'Ракетка для большого тенниса Triumph Pro ST',
    //         price: '2 200',
    //         place: 'Санкт-Петербург',
    //         date: '10:45',
    //     },
    //     {
    //         name: 'Ракетка для большого тенниса Triumph Pro ST',
    //         price: '2 200',
    //         place: 'Санкт-Петербург',
    //         date: '10:45',
    //     },
    //     {
    //         name: 'Ракетка для большого тенниса Triumph Pro ST',
    //         price: '2 200',
    //         place: 'Санкт-Петербург',
    //         date: '10:45',
    //     },
    // ];
    const { data, error } = useGetAdsAllQuery();
    useEffect(() => {
        console.log('ads', data);
        console.log('error', error);
    }, [data]);
    
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

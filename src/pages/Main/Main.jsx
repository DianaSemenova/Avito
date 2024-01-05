import s from './Main.module.css';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import Product from '../../components/common/CardsContent/Product';

export default function MainPage() {
    const product = [
        {
            name: 'Ракетка для большого тенниса Triumph Pro ST',
            price: '2 200',
            place: 'Санкт-Петербург',
            date: '10:45',
        },
        {
            name: 'Ракетка для большого тенниса Triumph Pro ST',
            price: '2 200',
            place: 'Санкт-Петербург',
            date: '10:45',
        },
        {
            name: 'Ракетка для большого тенниса Triumph Pro ST',
            price: '2 200',
            place: 'Санкт-Петербург',
            date: '10:45',
        },
        {
            name: 'Ракетка для большого тенниса Triumph Pro ST',
            price: '2 200',
            place: 'Санкт-Петербург',
            date: '10:45',
        },
        {
            name: 'Ракетка для большого тенниса Triumph Pro ST',
            price: '2 200',
            place: 'Санкт-Петербург',
            date: '10:45',
        },
        {
            name: 'Ракетка для большого тенниса Triumph Pro ST',
            price: '2 200',
            place: 'Санкт-Петербург',
            date: '10:45',
        },
        {
            name: 'Ракетка для большого тенниса Triumph Pro ST',
            price: '2 200',
            place: 'Санкт-Петербург',
            date: '10:45',
        },
        {
            name: 'Ракетка для большого тенниса Triumph Pro ST',
            price: '2 200',
            place: 'Санкт-Петербург',
            date: '10:45',
        },
        {
            name: 'Ракетка для большого тенниса Triumph Pro ST',
            price: '2 200',
            place: 'Санкт-Петербург',
            date: '10:45',
        },
        {
            name: 'Ракетка для большого тенниса Triumph Pro ST',
            price: '2 200',
            place: 'Санкт-Петербург',
            date: '10:45',
        },
    ];

    return (
        <main className="main">
            <PageWrapper />
            <div className={s.mainContainer}>
                <h2 className={s.h2}>Объявления</h2>
                <Product data={product} />
            </div>
        </main>
    );
}

/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
import s from './Profile.module.css';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import ProfileContent from '../../components/profile/ProfileContent/ProfileContent';
import Product from '../../components/common/CardsContent/Product';

export default function ProfileSeller() {
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
    ];

    return (
        <main>
            <div className={s.mainContainer}>
                <div className={s.centerBlock}>
                    <PageWrapper />
                    <h2 className={s.headingSeller}>Профиль продавца</h2>
                    <div className={s.mainProfile}>
                        <div className={s.profileSellContent}>
                            <div className={s.profileSeller}>
                                <ProfileContent page="seller" />
                            </div>
                        </div>
                    </div>

                    <h3 className={`${s.mainTitle} ${s.title}`}>
                        Товары продавца
                    </h3>
                </div>
                <Product data={product} />
            </div>
        </main>
    );
}

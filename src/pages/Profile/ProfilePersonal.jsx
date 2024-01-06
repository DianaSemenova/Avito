/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Profile.module.css';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import ProfileContent from '../../components/profile/ProfileContent/ProfileContent';
import Product from '../../components/common/CardsContent/Product';
import { useGetUserQuery } from '../../services/user';
import { setAuth } from '../../store/slices/auth';

export default function ProfilePersonal() {
    const dispatch = useDispatch();
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
    ];

    const { data } = useGetUserQuery();
    const user = useSelector((state) => state?.auth);

    useEffect(() => {
        if (data) {
            dispatch(
                setAuth({
                    ...user,
                    ID: data.id,
                    email: data.email,
                    name: data.name,
                    surname: data.surname,
                    city: data.city,
                }),
            );
        }
    }, [data]);

    return (
        <main>
            <div className={s.mainContainer}>
                <div className={s.centerBlock}>
                    <PageWrapper />

                    <h2 className={s.heading}>Здравствуйте, {user?.name}!</h2>
                    <div className={s.mainProfile}>
                        <div className={s.profileContent}>
                            <h3 className={s.profileTitle}>
                                Настройки профиля
                            </h3>
                            <div className={s.profilePersonal}>
                                <ProfileContent
                                    page="personal"
                                    data={data && data}
                                />
                            </div>
                        </div>
                    </div>

                    <h3 className={s.mainTitle}>Мои товары</h3>
                </div>
                <Product data={product} />
            </div>
        </main>
    );
}

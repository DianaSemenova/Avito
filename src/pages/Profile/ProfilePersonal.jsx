/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import s from './Profile.module.css';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import ProfileContent from '../../components/profile/ProfileContent/ProfileContent';
import Product from '../../components/common/CardsContent/Product';
import { useGetUserQuery } from '../../services/user';
import { setAuth } from '../../store/slices/auth';
import Button from '../../components/UI/Button/Button';
import { useGetAdsUserQuery } from '../../services/ads';

export default function ProfilePersonal() {
    const dispatch = useDispatch();
    const { data: adsUser, isLoading, error } = useGetAdsUserQuery();

    const handleLogout = () => {
        localStorage.removeItem('auth');
        window.location.href = '/';
    };

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
                    phone: data.phone,
                    avatar: data.avatar,
                    role: data.role,
                }),
            );
        }
    }, [data]);

    return (
        <SkeletonTheme color="#333" highlightColor="#f2f1f0">
            <main>
                <div className={s.mainContainer}>
                    <div className={s.centerBlock}>
                        <PageWrapper />

                        <h2 className={s.heading}>
                            Здравствуйте,{' '}
                            {adsUser ? (
                                `${user?.name}!`
                            ) : (
                                <Skeleton width={150} height={40} />
                            )}
                        </h2>
                        <div className={s.mainProfile}>
                            <div className={s.profileContent}>
                                <h3 className={s.profileTitle}>
                                    Настройки профиля
                                </h3>
                                <div className={s.profilePersonal}>
                                    <ProfileContent
                                        page="personal"
                                        data={user && user}
                                    />
                                </div>
                            </div>
                        </div>

                        <Button
                            classes="btnExit"
                            onClick={() => handleLogout()}
                        >
                            Выход из аккаунта
                        </Button>

                        <h3 className={s.mainTitle}>Мои товары</h3>
                    </div>
                    <Product
                        data={adsUser}
                        isLoading={isLoading}
                        error={error}
                    />
                </div>
            </main>
        </SkeletonTheme>
    );
}

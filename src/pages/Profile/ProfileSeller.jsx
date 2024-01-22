/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import s from './Profile.module.css';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import ProfileContent from '../../components/profile/ProfileContent/ProfileContent';
import Product from '../../components/common/CardsContent/Product';
import {
    setAdsSeller,
    setSellerInfo,
    setIsSellerID,
} from '../../store/slices/ads';
import IconBack from '../../components/UI/Icon/IconBack/IconBack';

export default function ProfileSeller() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { adsAll, adsSeller, sellerInfo } = useSelector((state) => state.ads);

    useEffect(() => {
        if (id) {
            dispatch(setAdsSeller({ sellerID: id }));
            dispatch(setSellerInfo({ sellerID: id }));
            dispatch(setIsSellerID({ sellerID: id }));
        }
    }, [id, adsAll]);

    return (
        <main>
            <div className={s.mainContainer}>
                <div className={s.centerBlock}>
                    <PageWrapper />
                    <div className={s.backBlock} onClick={() => navigate(-1)}>
                        <IconBack />
                        <h2 className={s.headingSeller}>Профиль продавца</h2>
                    </div>

                    <div className={s.mainProfile}>
                        <div className={s.profileSellContent}>
                            <div className={s.profileSeller}>
                                <ProfileContent
                                    page="seller"
                                    data={sellerInfo}
                                />
                            </div>
                        </div>
                    </div>

                    <h3 className={`${s.mainTitle} ${s.title}`}>
                        Товары продавца
                    </h3>
                </div>
                <Product data={adsSeller} isLoading={adsSeller.length === 0} />
            </div>
        </main>
    );
}

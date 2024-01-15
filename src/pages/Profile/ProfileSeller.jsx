/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import s from './Profile.module.css';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import ProfileContent from '../../components/profile/ProfileContent/ProfileContent';
import Product from '../../components/common/CardsContent/Product';
import { setAdsSeller, setSellerInfo } from '../../store/slices/ads';
import IconBack from '../../components/UI/Icon/IconBack/IconBack';

export default function ProfileSeller() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { adsAll, adsSeller } = useSelector((state) => state.ads);

    useEffect(() => {
        if (id) {
            dispatch(setAdsSeller({ sellerID: id }));
            dispatch(setSellerInfo({ sellerID: id }));
        }
    }, [id, adsAll]);

    console.log(adsSeller);

    return (
        <main>
            <div className={s.mainContainer}>
                <div className={s.centerBlock}>
                    <PageWrapper />
                    <IconBack onClick={() => navigate(-1)} />
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
                <Product data={adsSeller && adsSeller} />
            </div>
        </main>
    );
}

import { useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import s from './SellerInfo.module.css';
import Button from '../../UI/Button/Button';
import showPhone from '../../../utils/showPhone';

export default function SellerInfo({ data }) {
    const [isShowPhone, setIsShowPhone] = useState(false);

    return (
        <SkeletonTheme color="#333" highlightColor="#f2f1f0">
            <h3 className={s.title}>
                {data.name ? data.name : <Skeleton width={200} height={20} />}
            </h3>
            <p className={s.city}>
                {data.city ? data.city : <Skeleton width={200} height={20} />}
            </p>
            <p className={s.info}>
                Продает товары с{' '}
                {data.sells_from ? (
                    data.sells_from
                ) : (
                    <Skeleton width={200} height={20} />
                )}
            </p>

            <Button classes="btnSeller" onClick={() => setIsShowPhone(true)}>
                {!isShowPhone && 'Показать телефон'}
                <span className={s.span}>
                    {data.phone ? (
                        showPhone({ isShowPhone, data })
                    ) : (
                        <Skeleton width={200} height={20} />
                    )}
                </span>
            </Button>
        </SkeletonTheme>
    );
}

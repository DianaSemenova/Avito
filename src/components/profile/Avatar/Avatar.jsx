/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import s from './Avatar.module.css';
import Modal from '../../UI/Modal/Modal';

export default function Avatar({ page, data }) {
    const [modalActive, setModalActive] = useState(false);

    const getAvatar = () => {
        if (data.avatar) {
            return (
                <img
                    onClick={() => setModalActive(true)}
                    src={`http://localhost:8090/${data.avatar}`}
                    alt="avatar"
                />
            );
        }
        return <p className={s.noPhoto}>No photo</p>;
    };
    return (
        <SkeletonTheme color="#333" highlightColor="#f2f1f0">
            <div
                className={page === 'personal' ? s.personalLeft : s.sellerLeft}
            >
                <div className={s.imgBlock}>
                    {Object.keys(data)?.length > 0 ? (
                        getAvatar()
                    ) : (
                        <Skeleton width={170} height={170} circle />
                    )}
                </div>

                {page === 'personal' && (
                    <p className={s.replacePhoto}>Заменить</p>
                )}

                <Modal active={modalActive} setActive={setModalActive}>
                    <img
                        src={`http://localhost:8090/${data.avatar}`}
                        alt="avatar"
                    />
                </Modal>
            </div>
        </SkeletonTheme>
    );
}

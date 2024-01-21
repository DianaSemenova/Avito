/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { toast } from 'react-toastify';
import s from './Avatar.module.css';
import Input from '../../UI/Input/Input';
import Modal from '../../UI/Modal/Modal';
import { useUploadAvatarMutation } from '../../../services/user';

export default function Avatar({ page, data }) {
    const [modalActive, setModalActive] = useState(false);
    const [setAvatar, { isLoading }] = useUploadAvatarMutation();

    const handleAvatarUpload = async (file) => {
        try {
            await setAvatar({ file });

            if (!isLoading) {
                toast.success('Аватар успешно изменен!');
            }
        } catch (error) {
            toast.error(error.message, { className: s.error });
        }
    };

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
                    {data.name || data.email ? (
                        getAvatar()
                    ) : (
                        <Skeleton width={170} height={170} circle />
                    )}
                </div>

                {page === 'personal' && (
                    <label className={s.replacePhoto} htmlFor="avatarUser">
                        {isLoading ? 'Фото загружается...' : 'Заменить'}
                        <Input
                            id="avatarUser"
                            type="file"
                            accept="image/*, .png, .jpg, .gif, .web, .jpeg"
                            onChange={(e) =>
                                handleAvatarUpload(e.target.files[0])
                            }
                        />
                    </label>
                )}

                <Modal active={modalActive} setActive={setModalActive}>
                    <div className={s.imgModal}>
                        <img
                            src={`http://localhost:8090/${data.avatar}`}
                            alt="avatar"
                        />
                    </div>
                </Modal>
            </div>
        </SkeletonTheme>
    );
}

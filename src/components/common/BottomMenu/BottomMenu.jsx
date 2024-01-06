/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import s from './BottomMenu.module.css';
import Modal from '../../UI/Modal/Modal';

export default function BottomMenuMob() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.access);
    const [modalActive, setModalActive] = useState(false);

    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.footerImg} onClick={() => navigate('/')}>
                    <img src="img/icon_01.png" alt="home" />
                </div>
                <div
                    className={s.footerImg}
                    onClick={() => setModalActive(true)}
                >
                    <img src="img/icon_02.png" alt="home" />
                </div>
                <Modal active={modalActive} setActive={setModalActive}>
                    <div>Добавить объявление</div>
                </Modal>
                <div
                    className={s.footerImg}
                    onClick={() =>
                        user ? navigate('/profile-personal') : navigate('/auth')
                    }
                >
                    <img src="img/icon_03.png" alt="home" />
                </div>
            </div>
        </footer>
    );
}

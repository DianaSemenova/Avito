import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Header.module.css';

export default function Header() {
    const { access } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    return (
        <header className={s.header}>
            <nav className={s.nav}>
                {access && (
                    <button type="button" className={s.btnMain}>
                        Разместить объявление
                    </button>
                )}
                <button
                    type="button"
                    className={s.btnMain}
                    onClick={() =>
                        access ? navigate('/profile-personal') : navigate('/auth')
                    }
                >
                    {access ? 'Личный кабинет' : 'Вход в личный кабинет'}
                </button>
            </nav>
        </header>
    );
}

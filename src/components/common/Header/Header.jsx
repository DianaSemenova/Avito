import { useNavigate } from 'react-router-dom';
import s from './Header.module.css';

export default function Header() {
    const isAllowed = false;
    const navigate = useNavigate();

    return (
        <header className={s.header}>
            <nav className={s.nav}>
                {isAllowed && (
                    <button type="button" className={s.btnMain}>
                        Разместить объявление
                    </button>
                )}
                <button
                    type="button"
                    className={s.btnMain}
                    onClick={() =>
                        isAllowed
                            ? navigate('/profile-personal')
                            : navigate('/auth')
                    }
                >
                    {isAllowed ? 'Личный кабинет' : 'Вход в личный кабинет'}
                </button>
            </nav>
        </header>
    );
}

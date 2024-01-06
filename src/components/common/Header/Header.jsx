import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Header.module.css';
import Button from '../../UI/Button/Button';

export default function Header() {
    const { access } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    return (
        <header className={s.header}>
            <nav className={s.nav}>
                {access && (
                    <Button classes="btnMain">Разместить объявление</Button>
                )}
                <Button
                    classes="btnMain"
                    onClick={() =>
                        access
                            ? navigate('/profile-personal')
                            : navigate('/auth')
                    }
                >
                    {access ? 'Личный кабинет' : 'Вход в личный кабинет'}
                </Button>
            </nav>
        </header>
    );
}

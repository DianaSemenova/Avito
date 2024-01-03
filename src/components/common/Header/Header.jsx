import s from './Header.module.css';

export default function Header() {
    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <button type="button" className={s.btnMain}>
                    Вход в личный кабинет
                </button>
            </nav>
        </header>
    );
}

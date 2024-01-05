import s from './Header.module.css';

export default function Header() {
    const isAllowed = true;

    return (
        <header className={s.header}>
            <nav className={s.nav}>
                {isAllowed && (
                    <button type="button" className={s.btnMain}>
                        Разместить объявление
                    </button>
                )}
                <button type="button" className={s.btnMain}>
                    {isAllowed ? 'Личный кабинет' : 'Вход в личный кабинет'}
                </button>
            </nav>
        </header>
    );
}

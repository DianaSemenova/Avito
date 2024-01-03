import s from './PageWrapper.module.css';

export default function PageWrapper() {
    return (
        <div className={s.mainSearch}>
            <img className={s.searchLogo} src="./img/logo.png" alt="logo" />

            <img
                className={s.searchLogoMob}
                src="./img/logo-mob.png"
                alt="logo"
            />

            <form className={s.searchForm} action="#">
                <input
                    className={s.searchText}
                    type="search"
                    placeholder="Поиск по объявлениям"
                    name="search"
                />
                <input
                    className={s.searchTextMob}
                    type="search"
                    placeholder="Поиск"
                    name="search-mob"
                />
                <button type="button" className={s.searchBtn}>
                    Найти
                </button>
            </form>
        </div>
    );
}

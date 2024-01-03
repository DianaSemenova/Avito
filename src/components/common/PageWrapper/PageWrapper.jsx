/* eslint-disable no-return-assign */
import { useLocation } from 'react-router-dom';
import s from './PageWrapper.module.css';

export default function PageWrapper() {
    const location = useLocation();

    return (
        <div className={s.mainSearch}>
            <img className={s.searchLogo} src="./img/logo.png" alt="logo" />

            <img
                className={s.searchLogoMob}
                src="./img/logo-mob.png"
                alt="logo"
            />

            <form className={s.searchForm} action="#">
                {location.pathname === '/' ? (
                    <>
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
                    </>
                ) : (
                    <button
                        type="button"
                        className={`${s.searchBtn} ${s.searchMainBtn}`}
                    >
                        Вернуться на главную
                    </button>
                )}
            </form>
        </div>
    );
}

/* eslint-disable no-return-assign */
import { useLocation, useNavigate, Link } from 'react-router-dom';
import s from './PageWrapper.module.css';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

export default function PageWrapper() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className={s.mainSearch}>
            <Link to="/">
                <img
                    className={s.searchLogo}
                    src="../img/logo.png"
                    alt="logo"
                />

                <img
                    className={s.searchLogoMob}
                    src="../img/logo-mob.png"
                    alt="logo"
                />
            </Link>

            <form className={s.searchForm} action="#">
                {location.pathname === '/' ? (
                    <>
                        <Input
                            classes="searchText"
                            type="search"
                            placeholder="Поиск по объявлениям"
                            name="search"
                        />
                        <Input
                            classes="searchTextMob"
                            type="search"
                            placeholder="Поиск"
                            name="search-mob"
                        />
                        <Button classes="searchBtn">Найти</Button>
                    </>
                ) : (
                    <Button
                        classes="searchMainBtn"
                        onClick={() => navigate(-1)}
                    >
                        Вернуться назад
                    </Button>
                )}
            </form>
        </div>
    );
}

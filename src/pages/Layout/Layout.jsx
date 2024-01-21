/* eslint-disable import/no-extraneous-dependencies */
import { Outlet } from 'react-router';
import s from './Layout.module.css';
import Header from '../../components/common/Header/Header';
import BottomMenuMob from '../../components/common/BottomMenu/BottomMenu';

export default function Layout() {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <Header />
                <Outlet />
                <BottomMenuMob />
            </div>
        </div>
    );
}

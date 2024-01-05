import s from './BottomMenu.module.css';

export default function BottomMenuMob() {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.footerImg}>
                    <img src="img/icon_01.png" alt="home" />
                </div>
                <div className={s.footerImg}>
                    <img src="img/icon_02.png" alt="home" />
                </div>
                <div className={s.footerImg}>
                    <img src="img/icon_03.png" alt="home" />
                </div>
            </div>
        </footer>
    );
}

import s from './Avatar.module.css';

export default function Avatar({ page }) {
    return (
        <div className={page === 'personal' ? s.personalLeft : s.sellerLeft}>
            <div className={s.imgBlock}>
                <img src="#" alt="" />
            </div>

            {page === 'personal' && <p className={s.replacePhoto}>Заменить</p>}
        </div>
    );
}

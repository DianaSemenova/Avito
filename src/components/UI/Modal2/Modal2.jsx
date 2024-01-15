/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import s from './Modal.module.css';

export default function Modal2({ active, setActive, children }) {
    return (
        <div
            className={active ? s.modalBlock : s.none}
            onClick={(e) => {
                e.stopPropagation();
                setActive(false);
            }}
        >
            <div className={s.modal} onClick={(e) => e.stopPropagation()}>
                <div
                    className={s.modalContent}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

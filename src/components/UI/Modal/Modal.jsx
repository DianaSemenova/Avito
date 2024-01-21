/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import s from './Modal.module.css';

export default function Modal({
    active,
    setActive,
    children,
    width = '600px',
    pointerEvents = false,
}) {
    return (
        <div
            className={`${active ? s.modalBlock : s.none} ${
                pointerEvents && s.pointerEvents
            }`}
            onClick={(e) => {
                e.stopPropagation();
                setActive(false);
            }}
        >
            <div className={s.modal} onClick={(e) => e.stopPropagation()}>
                <div
                    className={s.modalContent}
                    style={{ width }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

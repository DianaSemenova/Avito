/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import s from './Modal.module.css';

export default function Modal({ active, setActive, children }) {
    return (
        <div
            className={active ? s.modalActive : s.modal}
            onClick={() => {
                setActive(false);
            }}
        >
            <div
                className={active ? s.contentActive : s.content}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}

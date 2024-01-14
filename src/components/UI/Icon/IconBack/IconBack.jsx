import s from './IconBack.module.css';

export default function IconBack({ onClick }) {
    return (
        <svg
            className={s.svg}
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 14 23"
            fill="none"
        >
            <path d="M11 1.5L2 10.5L11 19.5" stroke="black" strokeWidth="2" />
        </svg>
    );
}

import s from './Button.module.css';

export default function Button({ children, classes, onClick, isDone = false }) {
    return (
        <button
            type="button"
            className={`${s[classes]} ${isDone && s.disabled}`}
            onClick={onClick}
            disabled={isDone}
        >
            {children}
        </button>
    );
}

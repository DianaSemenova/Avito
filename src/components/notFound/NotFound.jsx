import { useNavigate } from 'react-router-dom';
import s from './NotFound.module.css';
import Button from '../UI/Button/Button';

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div className={s.notFound}>
            <h1 className={s.title}>404 Not Found</h1>
            <p className={s.message}>
                Страница, которую вы ищете, не существует
            </p>
            <Button classes="notFound" onClick={() => navigate('/')}>
                Вернуться на главную
            </Button>
        </div>
    );
}

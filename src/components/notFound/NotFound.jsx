import { useNavigate } from 'react-router-dom';
import s from './NotFound.module.css';
import Button from '../UI/Button/Button';

export default function NotFound({ sellerPage = false, adv = false }) {
    const navigate = useNavigate();
    const getTextNotFound = () => {
        if (sellerPage) {
            return 'Такого продавца не существует...';
        }
        if (adv) {
            return 'Такого объявление не существует...';
        }

        return 'Страница, которую вы ищете, не существует...';
    };

    return (
        <div className={s.notFound}>
            <h1 className={s.title}>404 Not Found</h1>
            <p className={s.message}>{getTextNotFound()}</p>
            <Button classes="notFound" onClick={() => navigate('/')}>
                Вернуться на главную
            </Button>
        </div>
    );
}

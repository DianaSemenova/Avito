import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import s from './Comments.module.css';
import IconClose from '../../../UI/Icon/IconClose/IconClose';
import Button from '../../../UI/Button/Button';

export default function CommentsModal({ setActive, comments }) {
    const navigate = useNavigate();
    const { ID } = useSelector((state) => state.auth);
    const handleCloseClick = () => {
        setActive(false);
    };

    return (
        <div className={s.formComments}>
            <div className={s.block}>
                <h2 className={s.title}>Отзывы о товаре</h2>
                <IconClose onClick={handleCloseClick} />
            </div>
            {ID ? (
                <div className={s.addCommentAuth}>
                    <h3 className={s.tileComment}>Добавить отзыв</h3>
                    <textarea
                        className={s.textarea}
                        type="text"
                        name="text"
                        cols="auto"
                        rows="5"
                        placeholder="Введите отзыв"
                    />
                    <Button classes="addComment" disabled>
                        Опубликовать
                    </Button>
                </div>
            ) : (
                <div className={s.addComment}>
                    <h3 className={s.titleComment}>
                        Отзыв может оставить только авторизованный пользователь.
                    </h3>
                    <Button classes="auth" onClick={() => navigate('/auth')}>
                        Авторизоваться
                    </Button>
                </div>
            )}
            <ul className={comments?.length > 0 ? s.ul : s.ulNoComment}>
                {comments?.length > 0 ? (
                    comments.map((comment) => (
                        <li className={s.listComments} key={comment.id}>
                            <div className={s.avatar}>
                                <Link
                                    to={
                                        ID === comment.author.id
                                            ? '/profile-personal'
                                            : `/profile-seller/${comment.author.id}`
                                    }
                                >
                                    {comment.author.avatar && (
                                        <img
                                            src={`http://localhost:8090/${comment.author.avatar}`}
                                            alt="avatar"
                                        />
                                    )}
                                </Link>
                            </div>
                            <div className={s.authorInfo}>
                                <div className={s.authorItem}>
                                    {' '}
                                    <Link
                                        to={
                                            ID === comment.author.id
                                                ? '/profile-personal'
                                                : `/profile-seller/${comment.author.id}`
                                        }
                                    >
                                        <p className={s.name}>
                                            {comment.author.name}
                                            <span>{comment.created_on}</span>
                                        </p>
                                    </Link>
                                    <Button classes="auth">Ответить</Button>
                                </div>

                                <div>
                                    <h4 className={s.titleComment}>
                                        Комментарий
                                    </h4>
                                    <p className={s.textComment}>
                                        {comment.text}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <li className={s.noComment}>
                        <h2 className={s.noCommentText}>Отзывов пока нет</h2>
                    </li>
                )}
            </ul>
        </div>
    );
}

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import s from './Comments.module.css';
import IconClose from '../../../UI/Icon/IconClose/IconClose';
import Button from '../../../UI/Button/Button';

export default function CommentsModal({ setActive }) {
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
            <ul className={ID ? s.ulAuth : s.ul}>
                <li className={s.listComments}>
                    <div className={s.avatar}>
                        <img src="#" alt="avatar" />
                    </div>
                    <div className={s.authorInfo}>
                        <p className={s.name}>
                            Олег <span>14 августа</span>
                        </p>
                        <div>
                            <h4 className={s.titleComment}>Комментарий</h4>
                            <p className={s.textComment}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptate, adipisci assumenda
                                repudiandae eveniet fugit consequuntur ipsum!
                                Ad, delectus a. Sapiente placeat sed fuga quis
                                dolorum ullam quos doloribus, beatae ducimus!
                            </p>
                        </div>
                    </div>
                </li>
                <li className={s.listComments}>
                    <div className={s.avatar}>
                        <img src="#" alt="avatar" />
                    </div>
                    <div className={s.authorInfo}>
                        <p className={s.name}>
                            Олег <span>14 августа</span>
                        </p>
                        <div>
                            <h5 className={s.titleComment}>Комментарий</h5>
                            <p className={s.textComment}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptate, adipisci assumenda
                                repudiandae eveniet fugit consequuntur ipsum!
                                Ad, delectus a. Sapiente placeat sed fuga quis
                                dolorum ullam quos doloribus, beatae ducimus!
                            </p>
                        </div>
                    </div>
                </li>
                <li className={s.listComments}>
                    <div className={s.avatar}>
                        <img src="#" alt="avatar" />
                    </div>
                    <div className={s.authorInfo}>
                        <p className={s.name}>
                            Олег <span>14 августа</span>
                        </p>
                        <div>
                            <h4 className={s.titleComment}>Комментарий</h4>
                            <p className={s.textComment}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptate, adipisci assumenda
                                repudiandae eveniet fugit consequuntur ipsum!
                                Ad, delectus a. Sapiente placeat sed fuga quis
                                dolorum ullam quos doloribus, beatae ducimus!
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

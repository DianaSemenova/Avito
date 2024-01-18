/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import s from './AddNewAdv.module.css';
import IconClose from '../../../UI/Icon/IconClose/IconClose';
import IconRUb from '../../../UI/Icon/IconRUB/IconRUB';
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';
import { useAddNewAdvTextMutation } from '../../../../services/ads';

export default function AddNewAdv({ setActive }) {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [postNewAdvText] = useAddNewAdvTextMutation();

    const handleCloseClick = () => {
        setActive(false);
    };

    const addNewAdvText = async () => {
        try {
            await postNewAdvText({ title, description, price });

            setActive(false);
            toast.success('Объявление успешно создано!');
            navigate('/profile-personal');
        } catch (error) {
            toast.error(error.message, { className: s.error });
        }
    };

    return (
        <div className={s.wrapper}>
            <div className={s.block}>
                <h2 className={s.title}>Новое объявление</h2>
                <IconClose onClick={handleCloseClick} />
            </div>
            <form action="#" className={s.form}>
                <div className={s.formBlock}>
                    <label className={s.name}>Название</label>
                    <Input
                        classes="areaAdv"
                        type="text"
                        name="name"
                        placeholder="Введите название"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className={s.formBlock}>
                    <label className={s.name}>Описание</label>
                    <textarea
                        className={s.areaAdv}
                        type="text"
                        name="text"
                        cols="auto"
                        rows="10"
                        placeholder="Введите название"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className={s.formImg}>
                    <p className={s.formText}>
                        Фотографии товара <span>не более 5 фотографий</span>
                    </p>
                    <div className={s.formBarImg}>
                        <div className="form-newArt__img">
                            <IconClose isAddPhoto />
                            <div className="form-newArt__img-cover" />
                        </div>
                        <div className="form-newArt__img">
                            <IconClose isAddPhoto />
                            <div className="form-newArt__img-cover" />
                        </div>
                        <div className="form-newArt__img">
                            <div className="form-newArt__img-cover" />
                            <IconClose isAddPhoto />
                        </div>
                        <div className="form-newArt__img">
                            <div className="form-newArt__img-cover" />
                            <IconClose isAddPhoto />
                        </div>
                        <div className="form-newArt__img">
                            <div className="form-newArt__img-cover" />
                            <IconClose isAddPhoto />
                        </div>
                    </div>
                </div>
                <div className={`${s.formBlock} ${s.blockPrice}`}>
                    <label className={s.name}>Цена</label>
                    <Input
                        classes="areaAdvPrice"
                        type="text"
                        name="name"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <IconRUb />
                </div>
                <Button
                    classes="btnAdv"
                    isDisabled={!title}
                    onClick={() => addNewAdvText()}
                >
                    Опубликовать
                </Button>
            </form>
        </div>
    );
}

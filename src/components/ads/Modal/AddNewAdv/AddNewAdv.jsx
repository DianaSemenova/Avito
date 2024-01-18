/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import s from './AddNewAdv.module.css';
import IconClose from '../../../UI/Icon/IconClose/IconClose';
import IconRUb from '../../../UI/Icon/IconRUB/IconRUB';
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';
import {
    useAddNewAdvTextMutation,
    useUploadImageAdvMutation,
} from '../../../../services/ads';

export default function AddNewAdv({ setActive }) {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [postNewAdvText] = useAddNewAdvTextMutation();
    const [postImageAdv] = useUploadImageAdvMutation();
    const [images, setImages] = useState([]);

    useEffect(() => {
        console.log('images', images);
    }, [images]);

    const handleCloseClick = () => {
        setActive(false);
        setImages([]);
    };

    const addNewAdv = async () => {
        try {
            const response = await postNewAdvText({
                title,
                description,
                price,
            });
            console.log(response.data.id);

            if (images.length > 0) {
                images.forEach(async (image) => {
                    // Создаетс форма данных для отправки картинки
                    const formData = new FormData();
                    console.log('image', image);
                    console.log('formData', formData);

                    formData.append('file', image);

                    await postImageAdv(formData, response.data.id);
                });
            }

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
                    <label htmlFor="name" className={s.name}>
                        Название
                    </label>
                    <Input
                        classes="areaAdv"
                        type="text"
                        name="name"
                        placeholder="Введите название"
                        id="name"
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
                        {Array.from({ length: 5 }, (_, index) => (
                            <label
                                key={Math.random()}
                                htmlFor={`fileAdv${index}`}
                                className={s.divImg}
                            >
                                {images[index] ? (
                                    <img
                                        key={Math.random()}
                                        src={URL.createObjectURL(images[index])}
                                        alt={images[index].id}
                                    />
                                ) : (
                                    <IconClose isAddPhoto />
                                )}
                                <Input
                                    type="file"
                                    accept="image/*, .png, .jpg, .gif, .web, .jpeg"
                                    multiple
                                    id={`fileAdv${index}`}
                                    onChange={(e) => {
                                        const selectedImages = Array.from(
                                            e.target.files,
                                        );
                                        console.log(
                                            'selectedImages',
                                            selectedImages,
                                        );
                                        setImages([
                                            ...images,
                                            ...selectedImages,
                                        ]);
                                    }}
                                />
                            </label>
                        ))}
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
                    isDisabled={!title && !price}
                    onClick={() => addNewAdv()}
                >
                    Опубликовать
                </Button>
            </form>
        </div>
    );
}

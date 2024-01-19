/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
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

export default function AddNewAdv({ setActive, mobile = false }) {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [postNewAdvText] = useAddNewAdvTextMutation();
    const [postImageAdv] = useUploadImageAdvMutation();
    const [images, setImages] = useState([]);

    // useEffect(() => {
    //     if (!modalActive) {
    // setTitle('');
    // setDescription('');
    // setPrice('');

    //     }
    // }, [modalActive]);

    const handleCloseClick = () => {
        setActive(false);
        setImages([]);
        setTitle('');
        setDescription('');
        setPrice('');
    };

    const addNewAdv = async () => {
        try {
            const response = await postNewAdvText({
                title,
                description,
                price,
            });

            if (images.length > 0) {
                images.forEach(async (image) => {
                    await postImageAdv({ image, id: response.data.id });
                });
            }

            setActive(false);
            toast.success('Объявление успешно создано!');
            navigate('/profile-personal');
            setImages([]);
            setTitle('');
            setDescription('');
            setPrice('');
        } catch (error) {
            toast.error(error.message, { className: s.error });
        }
    };

    return (
        <div className={s.wrapper}>
            <div className={s.block}>
                <h2 className={s.title}>Новое объявление</h2>
                <IconClose onClick={() => handleCloseClick()} />
            </div>
            <form action="#" className={s.form}>
                <div className={s.formBlock}>
                    <label
                        htmlFor={mobile ? 'nameAdvMob' : 'nameAdv'}
                        className={s.name}
                    >
                        Название
                    </label>
                    <Input
                        classes="areaAdv"
                        type="text"
                        name="name"
                        placeholder="Введите название (обязательно)"
                        id={mobile ? 'nameAdvMob' : 'nameAdv'}
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
                        placeholder="Введите описание"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className={s.formImg}>
                    <p className={s.formText}>
                        Фотографии товара <span>не более 5 фотографий</span>
                    </p>
                    <div className={s.formBarImg}>
                        {Array.from({ length: 5 }, (_, index) => (
                            <div
                                key={Math.random()}
                                // htmlFor={`fileAdv${index}`}
                                className={s.divImg}
                            >
                                {images[index] ? (
                                    <img
                                        key={Math.random()}
                                        src={URL.createObjectURL(images[index])}
                                        alt="adv"
                                    />
                                ) : (
                                    <label
                                        // key={Math.random()}
                                        htmlFor={
                                            mobile
                                                ? `fileAdvMob${index}`
                                                : `fileAdv${index}`
                                        }
                                        // className={s.divImg}
                                    >
                                        <IconClose isAddPhoto />
                                    </label>
                                )}
                                <Input
                                    type="file"
                                    accept="image/*, .png, .jpg, .gif, .web, .jpeg"
                                    multiple
                                    id={
                                        mobile
                                            ? `fileAdvMob${index}`
                                            : `fileAdv${index}`
                                    }
                                    onChange={(e) => {
                                        console.log(
                                            'selectedImages',
                                            e.target.files[0],
                                        );
                                        setImages([
                                            ...images,
                                            e.target.files[0],
                                        ]);
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`${s.formBlock} ${s.blockPrice}`}>
                    <label
                        htmlFor={mobile ? 'rubMob' : 'rub'}
                        className={s.name}
                    >
                        Цена
                    </label>
                    <Input
                        classes="areaAdvPrice"
                        type="number"
                        name="name"
                        id={mobile ? 'rubMob' : 'rub'}
                        placeholder="Цена (обязательно)"
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

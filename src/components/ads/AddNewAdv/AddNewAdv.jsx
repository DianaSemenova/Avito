/* eslint-disable jsx-a11y/label-has-associated-control */
import s from './AddNewAdv.module.css';
import IconClose from '../../UI/Icon/IconClose/IconClose';
import IconRUb from '../../UI/Icon/IconRUB/IconRUB';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

export default function AddNewAdv({ setActive }) {
    const handleCloseClick = () => {
        setActive(false);
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
                    />
                </div>

                <div className="formImg">
                    <p className="form-newArt__p">
                        Фотографии товара<span>не более 5 фотографий</span>
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
                    <Input classes="areaAdvPrice" type="text" name="name" />
                    <IconRUb />
                </div>
                <Button classes="btnAdv" isDisabled>
                    Опубликовать
                </Button>
            </form>
        </div>
    );
}

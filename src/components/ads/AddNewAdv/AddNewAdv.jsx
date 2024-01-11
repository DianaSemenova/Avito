/* eslint-disable jsx-a11y/label-has-associated-control */
import s from './AddNewAdv.module.css';
import IconClose from '../../UI/Icon/IconClose/IconClose';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

export default function AddNewAdv() {
    return (
        <div className={s.wrapper}>
            <div className={s.block}>
                <h2 className={s.title}>Добавить объявление</h2>
                <IconClose />
            </div>
            <form action="#">
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

                <div className="form-newArt__block">
                    <p className="form-newArt__p">
                        Фотографии товара<span>не более 5 фотографий</span>
                    </p>
                    <div className="formBarImg">
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

                <Button classes="btnAdv" isDisabled>
                    Опубликовать
                </Button>
            </form>
        </div>
    );
}

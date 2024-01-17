import { useState } from 'react';
import { toast } from 'react-toastify';
import s from './UpdatePassword.module.css';
import Modal from '../../UI/Modal/Modal';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { useUpdateAdvMutation } from '../../../services/ads';

export default function UpdatePassword({ modalActive, setModalActive }) {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [postPassword] = useUpdateAdvMutation();

    const updatePassword = async () => {
        try {
            await postPassword({
                password,
                newPassword,
            });

            toast.success('Пароль успешно обновлен!');
        } catch (error) {
            toast.error(error.message, { className: s.error });
        }
    };

    return (
        <Modal active={modalActive} setActive={setModalActive} width="100%">
            <div className={s.block}>
                <Input
                    classes="input"
                    name="password"
                    type="password"
                    placeholder="Старый пароль"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    classes="input"
                    name="newPassword"
                    type="password"
                    placeholder="Новый пароль"
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <Button
                    classes="btnPersonal"
                    isDisabled={!!(!password && !newPassword)}
                    onClick={() => updatePassword()}
                >
                    Обновить пароль
                </Button>
            </div>
        </Modal>
    );
}

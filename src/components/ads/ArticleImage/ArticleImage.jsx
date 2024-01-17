/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/order */
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import s from './ArticleImage.module.css';
import IconBack from '../../UI/Icon/IconBack/IconBack';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import Modal from '../../UI/Modal/Modal';

export default function ArticleImage({ data }) {
    const host = 'http://localhost:8090/';
    const navigate = useNavigate();
    const [imageMain, setImageMain] = useState('');
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        if (data?.images[0]) {
            setImageMain(`${host}${data?.images[0]?.url}`);
        }
    }, [data]);

    console.log(imageMain);

    return (
        <div className={s.articleFillImg}>
            <IconBack onClick={() => navigate(-1)} />
            {data ? (
                <div className={s.articleImg}>
                    {data.images[0] ? (
                        <img
                            src={imageMain}
                            alt={data.title}
                            onClick={() => setModalActive(true)}
                        />
                    ) : (
                        <p className={s.noPhoto}>No photo</p>
                    )}
                </div>
            ) : (
                <Skeleton width={480} height={480} />
            )}
            <Modal active={modalActive} setActive={setModalActive}>
                <img className={s.img} src={imageMain} alt={data?.title} />
            </Modal>
            <ul className={s.imgBar}>
                {data
                    ? data.images?.length > 1 &&
                      data.images.map((image) => (
                          <li
                              className={`${s.imgBarDiv} ${
                                  imageMain === `${host}${image.url}` &&
                                  s.active
                              }`}
                              key={image.id}
                              onClick={() =>
                                  setImageMain(`${host}${image.url}`)
                              }
                          >
                              <img
                                  src={`${host}${image.url}`}
                                  alt={data.title}
                              />
                          </li>
                      ))
                    : Array(5)
                          .fill()
                          .map(() => (
                              <li className={s.imgBarDiv} key={Math.random()}>
                                  <Skeleton width={88} height={88} />
                              </li>
                          ))}
            </ul>
            <div className={s.imgBarMob}>
                {data?.images?.length > 1 &&
                    data.images.map((image) => (
                        <div
                            className={`${s.imgBarMobCircle} ${
                                imageMain === `${host}${image.url}` && s.active
                            }`}
                            onClick={() => setImageMain(`${host}${image.url}`)}
                        />
                    ))}
            </div>
        </div>
    );
}

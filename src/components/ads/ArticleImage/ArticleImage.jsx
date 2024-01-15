/* eslint-disable import/order */
import { useNavigate } from 'react-router-dom';
import s from './ArticleImage.module.css';
import IconBack from '../../UI/Icon/IconBack/IconBack';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';

export default function ArticleImage({ data }) {
    const navigate = useNavigate();

    return (
        <div className={s.articleFillImg}>
            <IconBack onClick={() => navigate(-1)} />
            {data ? (
                <div className={s.articleImg}>
                    {data.images[0] ? (
                        <img
                            src={`http://localhost:8090/${data.images[0].url}`}
                            alt={data.title}
                        />
                    ) : (
                        <p className={s.noPhoto}>No photo</p>
                    )}
                </div>
            ) : (
                <Skeleton width={480} height={480} />
            )}
            <ul className={s.imgBar}>
                {data
                    ? data.images?.length > 1 &&
                      data.images.map((image) => (
                          <li className={s.imgBarDiv} key={image.id}>
                              <img
                                  src={`http://localhost:8090/${image.url}`}
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
                <div className={s.imgBarMobCircle} />
                <div className={s.imgBarMobCircle} />
                <div className={s.imgBarMobCircle} />
                <div className={s.imgBarMobCircle} />
                <div className={s.imgBarMobCircle} />
            </div>
        </div>
    );
}

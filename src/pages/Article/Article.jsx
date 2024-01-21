/* eslint-disable jsx-a11y/anchor-is-valid */
import { useParams } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import s from './Article.module.css';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import ArticleImage from '../../components/ads/ArticleImage/ArticleImage';
import ArticleInfo from '../../components/ads/ArticleInfo/ArticleInfo';
import { useGetAdvQuery, useGetCommentsAdvQuery } from '../../services/ads';

export default function Article() {
    const { id } = useParams();
    const { data } = useGetAdvQuery(id);
    const { data: comments } = useGetCommentsAdvQuery(id);

    return (
        <SkeletonTheme color="#333" highlightColor="#f2f1f0">
            <main className={s.main}>
                <PageWrapper />
                <div className={s.mainArtic}>
                    <div className={s.articContent}>
                        <div className={s.articleLeft}>
                            <ArticleImage data={data} />
                        </div>
                        <div className={s.articleRight}>
                            <ArticleInfo
                                data={data}
                                comments={comments}
                                articleID={id}
                            />
                        </div>
                    </div>
                </div>
                <div className={s.mainContainer}>
                    <h3 className={s.mainTitle}>Описание товара</h3>
                    <div className={s.mainContent}>
                        <p className={s.mainText}>
                            {data ? (
                                data.description
                            ) : (
                                <Skeleton width={600} height={200} />
                            )}
                        </p>
                    </div>
                </div>
            </main>
        </SkeletonTheme>
    );
}

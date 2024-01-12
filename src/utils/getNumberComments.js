const getNumberComments = (comments) => {
    if (comments?.length === 0) {
        return 'Нет отзывов';
    }
    if (comments?.length === 1) {
        return '1 отзыв';
    }
    if (comments?.length > 4) {
        return `${comments?.length} отзывов`;
    }

    return `${comments?.length} отзыва`;
};

export default getNumberComments;

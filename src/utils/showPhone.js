const showPhone = ({ isShowPhone, data }) => {
    const firstDigit = data?.phone?.match(/\d/)[0];
    const nextThreeDigits = data?.phone?.match(/\d{3}/)[0];

    if (isShowPhone) {
        if (data?.phone) {
            return data.phone;
        }

        return 'Нет телефона';
    }
    if (!firstDigit && !nextThreeDigits && !isShowPhone) {
        return `X XXX ХХХ ХХ ХХ`;
    }

    return `${firstDigit} ${nextThreeDigits} ХХХ ХХ ХХ`;
};
export default showPhone;

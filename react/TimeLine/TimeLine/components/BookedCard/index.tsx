import clsx from 'clsx';
import { FC, HTMLAttributes, useMemo } from 'react';

import styles from './styles.module.scss';

interface IBookedCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    isNew?: boolean;
    rentalItemName: string;
    userName: string;
    userPhone: string;
    status: 'paid' | 'not-paid';
}

const BookedCard: FC<IBookedCardProps> = (props) => {
    const { className, isNew = false, rentalItemName, userName, userPhone, status, ...rest } = props;

    const statusText = useMemo(() => {
        // prettier-ignore
        switch (status) {
        case 'not-paid':
            return 'Не оплачено';
        default:
            return 'Оплачено';
        }
    }, [status]);

    return (
        <div {...rest} className={clsx(styles.container, className)}>
            <div className={styles.container__rentalInfo}>
                {isNew && <span className={styles.container__new}>New</span>}
                <p className={styles.container__rentalName} title={rentalItemName}>
                    {rentalItemName}
                </p>
                <span className={clsx(styles.container__status, styles[`container__status_${status}`])}>{statusText}</span>
            </div>
            <div className={styles.container__userInfo}>
                <p className={styles.container__userName} title={userName}>
                    {userName}
                </p>
                <p className={styles.container__userPhone} title={userPhone}>
                    {userPhone}
                </p>
            </div>
        </div>
    );
};

export default BookedCard;

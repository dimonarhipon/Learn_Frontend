import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import { ImageIcon } from 'UI/Icons';
import Image from 'UI/Image';

import styles from './styles.module.scss';

interface IRentalItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    className?: string;
    image?: string;
    name: string;
    duration?: string;
}

const RentalItem: FC<IRentalItemProps> = (props) => {
    const { className, image, name, duration, ...rest } = props;

    return (
        <div {...rest} className={clsx(styles.container, className)}>
            <div className={clsx(styles.container__picture, { [styles.container__picture_empty]: !image })}>
                {image ? <Image src={image} alt={name} fit="contain" /> : <ImageIcon className={styles.container__icon} />}
            </div>
            <div className={styles.container__info}>
                <p className={styles.container__name} title={name}>
                    {name}
                </p>
                {duration && <span className={styles.container__duration}>{duration}</span>}
            </div>
        </div>
    );
};

export default RentalItem;

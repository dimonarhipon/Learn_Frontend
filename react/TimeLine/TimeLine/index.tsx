import { clsx } from 'clsx';
import dayjs from 'dayjs';
import { useHorizontalMove } from 'hooks/useHorizontalMove';
import { useMemo, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid'

import { RentalItem } from 'features/rentalItem';

import Flex from 'UI/Flex';

import { BookedCard } from './components';
import styles from './styles.module.scss';

const START_HOUR = 10;
const END_HOUR = 22;

const TIME_PERIODS = [
    { from: 6, to: 12, color: '#FCFF7833' },
    { from: 13, to: 17, color: '#FFB9784D' },
    { from: 18, to: 22, color: '#78AEFF4D' },
];

interface ITimeLineProps {
    from?: number;
    to?: number;
    orders?: any[];
    rentals?: any[];
    onClickItem?: (any: any) => void;
}

const TimeLine = (props: ITimeLineProps) => {
    const { from = START_HOUR, to = END_HOUR, orders = [], rentals = [], onClickItem } = props;
    
    const tableWrapperRef = useRef(null);
    useHorizontalMove(tableWrapperRef);

    const hashMapOrders = useMemo(() => {
        const map = new Map();

        orders.forEach((order) => {
            if (map.has(order.name)) {
                map.set(order.name, [...map.get(order.name), order]);
            } else {
                map.set(order.name, [order]);
            }
        });

        return map;
    }, [orders]);

    const timeCells = useMemo(() => {
        const cells = [];

        for (let time = from; time <= to; time++) {
            const backgroundColor = TIME_PERIODS.find(({ from, to }) => from <= time && to >= time).color;

            cells.push(
                <Flex
                    key={`${time}-${backgroundColor}`}
                    className={clsx(styles.cell, styles.timeCell)}
                    justifyContent="center"
                    style={{ backgroundColor }}
                >
                    {time}:00
                </Flex>,
            );
        }

        return cells;
    }, [from, to]);

    const bookeds = useMemo(() => {
        return rentals.map((booked) => {
            const item = [];

            item.push(
                <Flex key={uuidv4()} fullWidth className={clsx(styles.cell, styles.boatCell)} alignItems="center" data-2>
                    <RentalItem name={booked.name} duration="25 мин." image={booked?.params?.image_url} />
                </Flex>,
            );

            const ordersBooked = {};

            hashMapOrders.get(booked.name)?.forEach((order) => {
                const hour = dayjs(order.from).hour();

                ordersBooked[hour] = ordersBooked[hour] ? [...ordersBooked[hour], order] : [order];
            });

            for (let time = from; time <= to; time++) {
                item.push(
                    <Flex key={uuidv4()} fullWidth direction="column" className={clsx(styles.cell, styles.bookingCell)} alignItems="start" gap="2px 0px" data-3>
                        {(() => {
                            if (ordersBooked[time]) {
                                const isSecondHalf = ordersBooked[time][0].from.includes(':30');
                                return ordersBooked[time].map((order) => (
                                    <BookedCard
                                        onClick={() => onClickItem(order)}
                                        className={clsx(styles.bookedItem, isSecondHalf && styles.secondHalf)}
                                        key={order.id}
                                        // isNew={order.new === '0'}
                                        rentalItemName={order.name}
                                        userName={order.first_name}
                                        userPhone={order.phone}
                                        status={order.is_paid === '1' ? 'paid' : 'not-paid'}
                                    />
                                ));
                            }

                            return null;
                        })()}
                    </Flex>,
                );
            }

            return (
                <Flex key={uuidv4()} className={styles.column} fullWidth direction="column" alignItems="start">
                    {item}
                </Flex>
            );
        });
    }, [from, to, hashMapOrders, rentals]);

    return (
        <Flex fullWidth className={styles.container}>
            <Flex direction="column">
                <Flex className={clsx(styles.cell, styles.headerCell)} alignItems="center" justifyContent="center">
                    Модель
                </Flex>
                {timeCells}
            </Flex>
            <div ref={tableWrapperRef} className={styles.wrapper}>
                <Flex fullWidth>{bookeds}</Flex>
            </div>
        </Flex>
    );
};

export default TimeLine;

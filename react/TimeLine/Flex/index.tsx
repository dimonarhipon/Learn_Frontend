import clsx from 'clsx';
import getCssRules from 'helpers/getCssRules';
import { forwardRef, useMemo } from 'react';

import styles from './styles.module.scss';
import { IFlexProps } from './type';

const Flex = forwardRef<HTMLDivElement, IFlexProps>((props, ref) => {
    const { className, direction, gap, alignItems, justifyContent, wrap, fullWidth = false, children, style, ...rest } = props;

    const cssRules = useMemo(
        () => getCssRules({ flexDirection: direction, gap, alignItems, justifyContent, flexWrap: wrap }),
        [direction, gap, alignItems, justifyContent, wrap],
    );

    return (
        <div {...rest} ref={ref} className={clsx(className, styles.flex, { [styles.fullWidth]: fullWidth })} style={{ ...style, ...cssRules }}>
            {children}
        </div>
    );
});

Flex.displayName = 'Flex';

export default Flex;

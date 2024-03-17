import { ComponentPropsWithoutRef, MouseEventHandler, ReactNode } from 'react';

type TResponsive = 'desktop' | 'mobile';

type TFlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type TAlignItems = 'stretch' | 'center' | 'start' | 'end' | 'normal';
type TJustifyContent = 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'end';
type TFlexWrap = 'nowrap' | 'wrap';
type TGap = `${number}px ${number}px` | `${number}px`;

type TResponsiveLike<T> = Partial<Record<TResponsive, T>>;

export interface IFlexProps extends ComponentPropsWithoutRef<'div'> {
    className?: string;
    direction?: TFlexDirection | TResponsiveLike<TFlexDirection>;
    alignItems?: TAlignItems | TResponsiveLike<TAlignItems>;
    justifyContent?: TJustifyContent | TResponsiveLike<TJustifyContent>;
    wrap?: TFlexWrap | TResponsiveLike<TFlexWrap>;
    gap?: TGap | TResponsiveLike<TGap>;
    fullWidth?: boolean;
    children: ReactNode;
    onClick?: MouseEventHandler;
}

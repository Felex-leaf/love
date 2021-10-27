import { isType } from '@/utils';
import classNames from 'classnames';
import { useRef } from 'react';
import { useState, CSSProperties, useEffect } from 'react';
import styles from './index.less';

interface IHamburger {
    onClick?: (isActive: boolean) => void;
    style?: CSSProperties;
    type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    className?: string;
    isActive?: boolean;
    theme?: string;
    size?: 'normal' | 'big' | 'small' | 'large';
}

enum Size {
    small = 0.4,
    normal = 0.6,
    big = 0.8,
    large = 1,
}

export default function Hamburger(props: IHamburger) {
    const [isActive, setIsActive] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const { onClick, style, type = 1, className, isActive: active, theme, size = 'normal' } = props;
    useEffect(() => {
        if (theme) {
            const el = ref.current;
            if (el) el.style.setProperty('--theme-color--', theme);
        }
        if (isType(active, 'Boolean')) setIsActive(active as boolean);
    }, [active, theme]);
    const handleClick = () => {
        setIsActive(!isActive);
        if (onClick) onClick(!isActive);
    };
    return (
        <div
            className={classNames([
                styles.dontRHamburger,
                className,
                { [styles.isActive]: active ?? isActive },
            ])}
            onClick={handleClick}
            id={styles[`hamburger${type}`]}
            style={{
                ...style,
                zoom: Size[size],
            }}
            ref={ref}
        >
            <span className={styles.dontRLine}></span>
            <span className={styles.dontRLine}></span>
            <span className={styles.dontRLine}></span>
        </div>
    );
}

import { useEffect, useState, CSSProperties, MouseEvent } from 'react';
import store from '@/store';
import classNames from 'classnames';

import storage from '@/utils/storage';
import MoonIcon from './components/MoonIcon';
import SunIcon from './components/SunIcon';

import styles from './index.less';

interface IThemeBtn {
    style?: CSSProperties;
    className?: string;
    onClick?: (e?: MouseEvent) => void;
}

export default function ThemeBtn(props: IThemeBtn) {
    const { style, className, onClick } = props;
    const { ThemeStore } = store;
    const [dark, setDark] = useState(false);
    const changeTheme = (dark: boolean) => {
        if (dark) {
            document.documentElement.setAttribute('class', 'dark');
        } else {
            document.documentElement.setAttribute('class', '');
        }
    };

    const handleClick = (e: MouseEvent) => {
        storage.set('isDark', !dark);
        ThemeStore.setIsDark(!dark);
        setDark(!dark);
        changeTheme(!dark);
        if (onClick) onClick(e);
    };

    useEffect(() => {
        const isDark = storage.get<boolean>('isDark') || false;
        setDark(isDark);
        changeTheme(isDark);
        ThemeStore.setIsDark(isDark);
    }, []);

    return (
        <div
            onClick={handleClick}
            className={classNames([styles.themeBtn, className])}
            style={style}
        >
            {!dark ? <SunIcon style={{ fontSize: 50 }} /> : <MoonIcon style={{ fontSize: 40 }} />}
        </div>
    );
}

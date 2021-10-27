import TweenOne from 'rc-tween-one';
import { useState, useEffect } from 'react';

import { IAnimObject } from 'rc-tween-one/typings/AnimObject';
import styles from './index.less';

let go = false;

export default function ToTopBtn() {
    const [paused, setPaused] = useState(true);
    const [reverse, setReverse] = useState(false);
    const [animation, setAnimation] = useState<IAnimObject>({
        top: 'calc(96% - 100px)',
        duration: 500,
    });
    const handleScroll = () => {
        if (go) return;
        if (window.pageYOffset > 500) {
            setPaused(false);
            setReverse(false);
        } else {
            if (reverse) return;
            setReverse(true);
            setPaused(false);
        }
    };
    useEffect(() => {
        document.body.onscroll = handleScroll;
        handleScroll();
        return () => {
            document.body.onscroll = null;
        };
    }, []);
    const onClick = () => {
        setAnimation({ top: '-100px', duration: 500 });
        go = true;
        setTimeout(() => {
            setAnimation({ top: 'calc(96% - 100px)', duration: 500 });
            go = false;
        }, 500);
        document.body.scrollIntoView({
            behavior: 'smooth',
        });
    };
    return (
        <TweenOne
            animation={animation}
            paused={paused}
            reverse={reverse}
            className={styles.dontRButton}
            onClick={onClick}
        ></TweenOne>
    );
}

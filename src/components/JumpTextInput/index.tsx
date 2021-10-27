import { Input } from 'antd';
import { ChangeEvent, useState, useMemo } from 'react';
import classNames from 'classnames';

import styles from './index.less';

interface IJumpTextInput {
    value?: number | string;
    className?: string;
    placeholder?: string;
    theme?: string;
    positiveControl?: boolean;
    onChange?: (value: number | string) => void;
}

export default function JumpTextInput({
    value,
    onChange,
    className,
    placeholder = 'felex',
    theme,
    positiveControl,
}: IJumpTextInput) {
    const [cValue, setCValue] = useState<number | string>();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.target.value);
        setCValue(e.target.value);
    };
    const textArr = useMemo(
        () =>
            placeholder.split('').map((item, idx) => (
                <span style={{ transitionDelay: `${idx * 50}ms` }} key={idx}>
                    {item}
                </span>
            )),
        [placeholder],
    );
    return (
        <div
            className={classNames([styles.dontRjumpTextInput, className])}
            style={{ borderBottomColor: theme }}
        >
            <Input
                value={positiveControl ? value : value ?? cValue}
                onChange={handleChange}
                bordered={false}
            />
            {!cValue && !value && (
                <div className={styles.placeholder} style={{ color: theme }}>
                    {textArr}
                </div>
            )}
        </div>
    );
}

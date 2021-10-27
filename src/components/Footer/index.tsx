import { Row, Col } from 'antd';

import styles from './index.less';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className="typeArea">
                <Row>
                    <Col span={12} className={styles.footerLeft}>
                        Designed by Jerry
                    </Col>
                    <Col span={12} className={styles.footerRight}>
                        <div>
                            <div className={styles.footerTitle}>项目依赖</div>
                            <a
                                className={styles.footerDec}
                                href="https://umijs.org/zh-CN"
                                target="_blank"
                                rel="noreferrer"
                            >
                                umi
                            </a>
                            <a
                                className={styles.footerDec}
                                href="https://www.tslang.cn/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                typescript
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

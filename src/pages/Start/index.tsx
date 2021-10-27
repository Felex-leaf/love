import './index.scss'


export default function Start() {
    const arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const arr8 = [1, 2, 3, 4, 5, 6, 7, 8]
    const arr5 = [1, 2, 3, 4, 5]
    const arr4 = [1, 2, 3, 4]
    const arr3 = [1, 2, 3]
    return (
        <div className="stage">
            <div className="ground-line">
                <div>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
            <div className="tree-wrap">
                <div className="tree">
                    <div className="stem">
                    <div className="branch branch1"></div>
                    <div className="branch branch2"></div>
                    <div className="branch branch3"></div>
                    </div>
                    <div className="leef leef1"></div>
                    <div className="leef leef2"></div>
                </div>
            </div>
            <div className="love-front">
                {
                    arr12.map(() => (
                        <div className="love-wrap">
                            <div className="love">
                            <span className="circle circle1"></span>
                            <span className="circle circle2"></span>
                            <span className="square"></span>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="love-back">
                {
                    arr12.map(() => (
                        <div className="love-wrap">
                            <div className="love">
                            <span className="circle circle1"></span>
                            <span className="circle circle2"></span>
                            <span className="square"></span>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="vehicle-body">
            <div className="wrap-body">
                <div className="rooftop back"></div>
                <div className="rooftop front"></div>
                <div className="body-cover">
                <div className="top-roof"></div>
                <div className="indi back-top-indicator"></div>
                <div className="indi back-bottom-indicator"></div>
                <div className="back-window">
                    <div className="window-base top"></div>
                    <div className="window-base bottom"></div>
                    <div className="sun-shade"></div>
                    <div className="curtain">
                        {
                            arr8.map(() => <span></span>)
                        }
                    </div>
                    <div className="windows-glass-wrap">
                    <div className="glass">
                        <div className="light">
                        <span className="light1"></span>
                        <span className="light2"></span>
                        <span className="light3"></span>
                        </div>
                    </div>
                    <div className="glass">
                        <div className="light">
                        <span className="light1"></span>
                        <span className="light2"></span>
                        <span className="light3"></span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="front-window">
                    <div className="window-base"></div>
                    <div className="sun-shade"></div>
                    <div className="curtain">
                        {arr3.map(()=> <span></span>)}
                    </div>
                    <div className="windows-glass-wrap">
                    <div className="light">
                        <span className="light1"></span>
                        <span className="light2"></span>
                        <span className="light3"></span>
                    </div>
                    </div>
                    <div className="air-hole">
                        {
                            arr5.map(() => <span></span>)
                        }
                    </div>
                </div>
                </div>
                <div className="main-door">
                <div className="glass">
                    <div className="light">
                    <span className="light1"></span>
                    <span className="light2"></span>
                    </div>
                </div>
                <div className="door-handle"></div>
                </div>
                <div className="side-guard">
                <div className="shade"></div>
                <div className="bumper back"></div>
                <div className="bumper front"></div>
                <div className="front-indicator"></div>
                </div>
            </div>
            <div className="wheel-wrap back">
                <div className="wheel-shadow"></div>
                <div className="wheel">
                <div className="wheel-outer">
                    <div className="wheel-cup">
                        {
                            arr4.map(() => <span></span>)
                        }
                    </div>
                </div>
                </div>
            </div>
            <div className="wheel-wrap front">
                <div className="wheel-shadow"></div>
                <div className="wheel">
                <div className="wheel-outer">
                    <div className="wheel-cup">
                        {
                            arr4.map(() => <span></span>)
                        }
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

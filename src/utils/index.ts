import { PAGE_ENUM } from '@/configs';
import { history } from 'umi';

export const parseUrlPublic = (url: string) => {
    return process.env.NODE_ENV === 'development' ? url : '/blog' + url;
};

const audio = new Audio();
audio.src = parseUrlPublic('/snow.mp3');

export const jump = (path = '') => {
    if (!path) return;
    const { location } = history;
    if (location.pathname.includes(path)) return;
    history.push(path);
};

export function initRem(): void {
    const docEle = document.documentElement;
    function setHtmlFontSize() {
        let deviceWidth = docEle.clientWidth || window.innerWidth;
        if (deviceWidth >= 1200) {
            deviceWidth = 1200;
        }
        if (deviceWidth <= 320) {
            deviceWidth = 320;
        }
        const fontSize = deviceWidth / 10;
        docEle.style.fontSize = fontSize.toFixed(3) + 'px';
    }
    setHtmlFontSize();
    window.addEventListener('resize', setHtmlFontSize);
}

type TYPE =
    | 'Number'
    | 'BigInt'
    | 'String'
    | 'Boolean'
    | 'Undefined'
    | 'Null'
    | 'Object'
    | 'Array'
    | 'Function'
    | 'Symbol'
    | 'Math'
    | 'JSON'
    | 'Date'
    | 'RegExp'
    | 'Error'
    | 'Window'
    | 'HTMLDocument';
type data =
    | Number
    | BigInt
    | String
    | Boolean
    | undefined
    | null
    | Object
    | Array<any>
    | Function
    | Symbol
    | Math
    | JSON
    | Date
    | RegExp
    | Error
    | Window
    | HTMLDocument;
export function isType(data: data, type: TYPE): boolean {
    return Object.prototype.toString.call(data) === `[object ${type}]`;
}

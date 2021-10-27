declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.jpg';
declare module '*.gif';
declare module '*.mp3';
declare module '*.svg' {
    export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
    const url: string;
    export default url;
}
declare module 'react-lottie';
declare module 'postcss-pxtorem';
declare module 'rc-tween-one/lib/plugin/SvgMorphPlugin';

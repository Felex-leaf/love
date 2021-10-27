import Icon from '@ant-design/icons';

const SunSvg = (props: any) => {
    const { height, width } = props;
    return (
        <svg
            className="fadeIn"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2408"
            width={width}
            height={height}
        >
            <path
                id="path1"
                d="M304.5 691.8c0-145.3 117.8-263 263-263s263 117.8 263 263"
                fill="#FDDA09"
                p-id="2589"
            ></path>
            <path
                d="M567.5 428.8c-16.7 0-32.9 1.7-48.7 4.7 122 22.9 214.3 129.7 214.3 258.3h97.4c0.1-145.2-117.7-263-263-263z"
                fill="#FDA906"
                p-id="2590"
            ></path>
            <path
                d="M772.1 687.3c-8.3 0-15-6.7-15-15 0-66.2-25.8-128.5-72.6-175.4-46.8-46.8-109.1-72.6-175.4-72.6-66.2 0-128.5 25.8-175.4 72.6-46.8 46.8-72.6 109.1-72.6 175.4 0 8.3-6.7 15-15 15s-15-6.7-15-15c0-74.3 28.9-144.1 81.4-196.6 52.5-52.5 122.3-81.4 196.6-81.4s144.1 28.9 196.6 81.4c52.5 52.5 81.4 122.3 81.4 196.6 0 8.3-6.7 15-15 15z"
                fill=""
                p-id="2591"
            ></path>
            <path
                d="M914.1 704.5H120c-8.3 0-15-6.7-15-15s6.7-15 15-15h794.1c8.3 0 15 6.7 15 15s-6.7 15-15 15zM755.2 777.4H278.8c-8.3 0-15-6.7-15-15s6.7-15 15-15h476.5c8.3 0 15 6.7 15 15s-6.8 15-15.1 15zM605.6 858.1H428.5c-8.3 0-15-6.7-15-15s6.7-15 15-15h177.1c8.3 0 15 6.7 15 15s-6.8 15-15 15zM179.4 641h-63.5c-8.3 0-15-6.7-15-15s6.7-15 15-15h63.5c8.3 0 15 6.7 15 15s-6.7 15-15 15zM515.9 323.4c-8.3 0-15-6.7-15-15V181.3c0-8.3 6.7-15 15-15s15 6.7 15 15v127.1c0 8.3-6.7 15-15 15zM271 422.9c-3.8 0-7.7-1.5-10.6-4.4l-56.2-56.2c-5.9-5.9-5.9-15.4 0-21.2 5.9-5.9 15.4-5.9 21.2 0l56.2 56.2c5.9 5.9 5.9 15.4 0 21.2-2.9 3-6.8 4.4-10.6 4.4zM754.8 422.9c-3.8 0-7.7-1.5-10.6-4.4-5.9-5.9-5.9-15.4 0-21.2l56.2-56.2c5.9-5.9 15.4-5.9 21.2 0 5.9 5.9 5.9 15.4 0 21.2l-56.2 56.2c-2.9 3-6.7 4.4-10.6 4.4z"
                fill=""
                p-id="2592"
            ></path>
            <path
                d="M441.2 544.2a18.8 17.8 0 1 0 37.6 0 18.8 17.8 0 1 0-37.6 0Z"
                fill="#050400"
                p-id="2593"
            ></path>
            <path
                d="M553.9 544.2a18.8 17.8 0 1 0 37.6 0 18.8 17.8 0 1 0-37.6 0Z"
                fill="#050400"
                p-id="2594"
            ></path>
            <path
                d="M491.3 577.5c0 13.1 11.2 23.7 25 23.7s25-10.6 25-23.7h-50z"
                fill="#050400"
                p-id="2595"
            ></path>
            <path
                d="M406.9 588.6a21.9 20.7 0 1 0 43.8 0 21.9 20.7 0 1 0-43.8 0Z"
                fill="#FDA906"
                p-id="2596"
            ></path>
            <path
                d="M582.1 588.6a21.9 20.7 0 1 0 43.8 0 21.9 20.7 0 1 0-43.8 0Z"
                fill="#FDA906"
                p-id="2597"
            ></path>
        </svg>
    );
};

const SunIcon = (props: any) => <Icon component={SunSvg} {...props} />;

export default SunIcon;

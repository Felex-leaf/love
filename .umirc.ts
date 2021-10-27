import { defineConfig } from 'umi';
import pxtorem from 'postcss-pxtorem';

import routes from './config/routes';

export default defineConfig({
    base: '/',
    publicPath: '/blog/',
    hash: true,
    history: {
        type: 'hash',
    },
    antd: {},
    nodeModulesTransform: {
        type: 'none',
    },
    fastRefresh: {},
    theme: {
        '@themeBgColor': 'var(--theme-bgColor)',
        '@themeColor': 'var(--theme-Color)',
    },
    lessLoader: {
        modifyVars: {
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: 'true; @import "/src/styles/index.less";',
        },
    },
    sass: {},
    title: 'Felex',
    favicon: './favicon.ico',
    routes,
    dynamicImport: {},
    metas: [
        {
            name: 'keywords',
            content: 'Felex, blog',
        },
        {
            name: 'description',
            content: 'Felex 的个人博客，Designed by Jerry',
        },
        {
            name: 'author',
            content: 'Felex',
        },
        {
            name: 'viewport',
            content: 'width=device-width,viewport-fit=cover',
        },
    ],
});

(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [8],
    {
        GEoZ: function (e, n, t) {
            'use strict';
            t.r(n),
                t.d(n, 'default', function () {
                    return f;
                });
            var c = t('tJVT'),
                a = t('nxO9'),
                r = t('0lfv'),
                i = t('q1tI'),
                l = t('fROf'),
                s = t.n(l),
                o = t('nKUr'),
                u = 5;
            function f() {
                var e = null,
                    n = null,
                    t = Object(i['useState'])(5),
                    l = Object(c['a'])(t, 2),
                    f = l[0],
                    O = l[1];
                return (
                    Object(i['useEffect'])(
                        () => (
                            (e = setTimeout(() => {
                                Object(r['c'])(a['a'].HOME);
                            }, 5e3)),
                            (n = setInterval(() => {
                                O(u > 0 ? u - 1 : 0), u--;
                            }, 1e3)),
                            () => {
                                e && clearTimeout(e), n && clearInterval(n), (u = 5);
                            }
                        ),
                        [],
                    ),
                    Object(o['jsx'])('div', {
                        className: s.a.container,
                        children: Object(o['jsxs'])('h1', {
                            className: s.a.title,
                            children: [
                                f,
                                '\u79d2\u540e\uff0c',
                                Object(o['jsx'])('a', {
                                    onClick: r['c'].bind(null, a['a'].HOME),
                                    children: '\u8fd4\u56de\u9996\u9875',
                                }),
                            ],
                        }),
                    })
                );
            }
        },
        fROf: function (e, n, t) {
            e.exports = { container: 'container___2FSFc' };
        },
    },
]);

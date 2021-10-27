(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [14],
    {
        J9gd: function (e, t, n) {
            'use strict';
            n.r(t),
                n.d(t, 'default', function () {
                    return h;
                });
            var a = n('tJVT'),
                o = n('q1tI'),
                r = n('gXu6'),
                i = n.n(r),
                c = n('nKUr'),
                d = [],
                u = null,
                s = null,
                f = new Image(),
                l = 0;
            function h() {
                var e = Object(o['useState'])(!1),
                    t = Object(a['a'])(e, 2),
                    n = t[0],
                    r = t[1],
                    i = Object(o['useState'])(document.body.offsetHeight - 60),
                    h = Object(a['a'])(i, 2),
                    m = h[0],
                    b = h[1],
                    w = Object(o['useState'])(document.body.offsetWidth),
                    g = Object(a['a'])(w, 2),
                    j = g[0],
                    p = g[1],
                    y = Object(o['useRef'])(null);
                function v(e, t) {
                    O(t), x(e, t), M(e), (l = window.requestAnimationFrame(v.bind(null, e, t)));
                }
                function O(e) {
                    d.length < 100 &&
                        d.push({
                            x: Math.random() * e,
                            y: 0,
                            speed: 1 + 4 * Math.random(),
                            radius: 3 + 4 * Math.random(),
                        });
                }
                function x(e, t) {
                    d.forEach((n) => {
                        (n.y += n.speed),
                            n.y > e &&
                                ((n.x = Math.random() * t),
                                (n.y = 0),
                                (n.speed = 1 + 4 * Math.random()),
                                (n.radius = 3 + 4 * Math.random()));
                    });
                }
                function M(e) {
                    var t;
                    u &&
                        f &&
                        (null === (t = u) || void 0 === t || t.drawImage(f, 0, 0, 2 * e, e),
                        d.forEach((e) => {
                            u &&
                                (u.beginPath(),
                                u.arc(e.x, e.y, e.radius, 0, 2 * Math.PI),
                                u.closePath(),
                                (u.fillStyle = 'white'),
                                u.fill());
                        }));
                }
                return (
                    Object(o['useEffect'])(() => {
                        var e = y.current;
                        if (e)
                            return (
                                (u = e.getContext('2d')),
                                v(m, j),
                                window.addEventListener('resize', () => {
                                    s && clearTimeout(s),
                                        (s = setTimeout(() => {
                                            if (u) {
                                                var t = e.toDataURL(),
                                                    a = document.body.offsetWidth,
                                                    o = document.body.offsetHeight - 60;
                                                u.scale(j / a, m / o);
                                                var i = new Image();
                                                (i.onload = function () {
                                                    u &&
                                                        (u.drawImage(i, 0, 0, a, o),
                                                        l && cancelAnimationFrame(l),
                                                        v(o, a),
                                                        r(!n),
                                                        b(o),
                                                        p(a));
                                                }),
                                                    (i.src = t);
                                            }
                                        }, 500));
                                }),
                                () => {
                                    (u = null), s && clearTimeout(s), l && cancelAnimationFrame(l);
                                }
                            );
                    }, []),
                    Object(c['jsx'])(c['Fragment'], {
                        children: Object(c['jsx'])('canvas', {
                            ref: y,
                            height: m,
                            width: j,
                            style: { overflow: 'hidden' },
                        }),
                    })
                );
            }
            f.src = i.a;
        },
        gXu6: function (e, t, n) {
            e.exports = n.p + 'static/snow.4bfb6b1e.jpg';
        },
    },
]);

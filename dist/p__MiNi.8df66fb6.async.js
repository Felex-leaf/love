(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [12],
    {
        dWhr: function (a, e, n) {
            'use strict';
            n.r(e),
                n.d(e, 'default', function () {
                    return M;
                });
            n('T2oS');
            var r = n('W9HT'),
                t = n('tJVT'),
                i = n('q1tI'),
                l = n('Womt'),
                o = n('IrXD'),
                s = n('RyHr'),
                m = n('NK00'),
                c = n('nKUr'),
                h = null,
                p = null,
                d = null,
                u = null,
                w = null,
                _ = (a, e, n, r, t) => {
                    var i = new o['a'].Tween({
                        x1: a.x,
                        y1: a.y,
                        z1: a.z,
                        x2: e.x,
                        y2: e.y,
                        z2: e.z,
                    });
                    i.to({ x1: n.x, y1: n.y, z1: n.z, x2: r.x, y2: r.y, z2: r.z }, 2e3),
                        i.onUpdate((a) => {
                            p &&
                                w &&
                                (p.position.set(a.x1, a.y1, a.z1),
                                (w.target.x = a.x2),
                                (w.target.y = a.y2),
                                (w.target.z = a.z2),
                                w.update());
                        }),
                        i.onComplete(() => {
                            w && (w.enabled = !0), t && t();
                        }),
                        i.easing(o['a'].Easing.Cubic.InOut),
                        i.start();
                    var l = () => {
                        requestAnimationFrame(l), o['a'].update();
                    };
                    l();
                },
                g = [{ x: 0.8, y: 1, z: 0.4, frame: 1 }],
                b = [],
                v = { x: 0, y: 0, z: 3 },
                y = { x: 0, y: 0, z: 0 };
            function M() {
                var a = Object(i['useRef'])(null),
                    e = Object(i['useState'])(!0),
                    n = Object(t['a'])(e, 2),
                    o = n[0],
                    M = n[1],
                    k = () => {
                        (h = new l['eb']()),
                            (p = new l['U'](
                                90,
                                document.body.clientWidth / document.body.clientHeight,
                                0.1,
                                100,
                            )),
                            (d = new l['vb']()),
                            (u = new l['pb']()),
                            p.position.set(0, 0, 3),
                            d.setSize(document.body.clientWidth, document.body.clientHeight);
                        var e = a.current;
                        e && e.appendChild(d.domElement),
                            (w = new s['a'](p, d.domElement)),
                            w.addEventListener('change', () => {
                                var a, e;
                                (v = null === (a = p) || void 0 === a ? void 0 : a.position),
                                    (y = null === (e = w) || void 0 === e ? void 0 : e.target);
                            }),
                            z(),
                            x(),
                            f(),
                            j();
                    },
                    f = () => {
                        if (h) {
                            var a = new l['a'](14013909);
                            (a.intensity = 1.2), h.add(a);
                            var e = new l['i']();
                            (e.position.x = 5),
                                (e.position.y = 3),
                                (e.position.z = -5),
                                (e.intensity = 0.8),
                                h.add(e);
                            var n = new l['i'](16777215);
                            (n.position.x = -5),
                                (n.position.y = 3),
                                (n.position.z = 5),
                                (n.intensity = 0.8),
                                h.add(n);
                        }
                    },
                    j = () => {
                        if (h) {
                            for (
                                var a = new l['pb']().load('car3d/point.png'),
                                    e = new l['o'](),
                                    n = new l['lb']({ map: a, color: 16777215, fog: !1 }),
                                    r = 0;
                                r < g.length;
                                r++
                            ) {
                                var t = g[r].x,
                                    i = g[r].y - 0.5,
                                    o = g[r].z,
                                    s = new l['kb'](n);
                                s.scale.set(0.15, 0.15, 1),
                                    s.position.set(t, i, o),
                                    e.add(s),
                                    b.push(s);
                            }
                            h.add(e),
                                document.body.addEventListener('click', function (a) {
                                    if ((a.preventDefault(), p)) {
                                        var e = new l['cb'](),
                                            n = new l['sb']();
                                        (n.x = (a.clientX / window.innerWidth) * 2 - 1),
                                            (n.y = (-a.clientY / window.innerHeight) * 2 + 1),
                                            e.setFromCamera(n, p);
                                        var r = e.intersectObjects(b);
                                        if (r.length > 0) {
                                            var t = r[0].point,
                                                i = t.x,
                                                o = t.y,
                                                s = t.z;
                                            v &&
                                                y &&
                                                _(
                                                    v,
                                                    y,
                                                    { x: i + 0.1, y: o - 0.1, z: s - 0.4 },
                                                    { x: 1, y: 0.5, z: 1.5 },
                                                );
                                        }
                                    }
                                });
                        }
                    },
                    x = () => {
                        d && h && p && (requestAnimationFrame(x), d.render(h, p));
                    },
                    z = () => {
                        var a = new m['a']();
                        a.load(
                            'car3d/model.gltf',
                            function (a) {
                                h && h.add(a.scene);
                                var e = a.scene.children[0].children;
                                O(e);
                            },
                            function (a) {
                                console.log((a.loaded / 13970297) * 100 + '% loaded'),
                                    a.loaded >= 13970297 && console.log('end');
                            },
                            function (a) {
                                console.log(a), console.log('An error happened');
                            },
                        );
                    },
                    O = (a) => {
                        var e = 0,
                            n = {},
                            r = [
                                'skymap',
                                'shache_occ',
                                'shache_nor',
                                'shache_col',
                                'neishi_occ',
                                'neishi_nor',
                                'mennei_col',
                                'luntai_nor',
                                'luntai_col',
                                'lungu_occ',
                                'lungu_nor',
                                'lungu_col',
                                'linjian_occ',
                                'linjian_nor',
                                'linjian_col',
                                'floor',
                                'deng_occ',
                                'deng_nor',
                                'deng_col',
                                'cheshen_occ',
                                'cheshen_nor',
                                'chejia_occ',
                                'chejia_nor',
                                'chedengzhao_nor',
                            ],
                            t = () => {
                                var i,
                                    o = r[e];
                                null === (i = u) ||
                                    void 0 === i ||
                                    i.load('car3d/textures/' + o + '.jpg', function (i) {
                                        if (e < r.length - 1) (n[o] = i), e++, t();
                                        else
                                            for (var s in a)
                                                if (Object.prototype.hasOwnProperty.call(a, s)) {
                                                    var m = a[s];
                                                    switch (m.name) {
                                                        case 'smart_lungu0':
                                                        case 'smart_lungu1':
                                                        case 'smart_lungu2':
                                                        case 'smart_lungu3':
                                                            (m.material = new l['M']()),
                                                                (m.material.map = n['lungu_col']),
                                                                (m.material.normalMap =
                                                                    n['lungu_nor']),
                                                                (m.material.aoMap = n['lungu_occ']);
                                                            break;
                                                        case 'smart_chelun0':
                                                        case 'smart_chelun1':
                                                        case 'smart_chelun2':
                                                        case 'smart_chelun3':
                                                            (m.material = new l['M']()),
                                                                (m.material.map = n['luntai_col']),
                                                                (m.material.normalMap =
                                                                    n['luntai_nor']);
                                                            break;
                                                        case 'smart_boli':
                                                            (m.material = new l['K']()),
                                                                (m.material.color = new l['h'](
                                                                    3355443,
                                                                )),
                                                                (m.material.transparent = !0),
                                                                (m.material.opacity = 0.2),
                                                                (m.material.envMap = n['skymap']),
                                                                (m.material.envMap.mapping =
                                                                    l['k']);
                                                            break;
                                                        case 'smart_tianchuang':
                                                            (m.material = new l['K']()),
                                                                (m.material.color = new l['h'](0)),
                                                                (m.material.transparent = !0),
                                                                (m.material.opacity = 0.5),
                                                                (m.material.envMap = n['skymap']),
                                                                (m.material.envMap.mapping =
                                                                    l['k']);
                                                            break;
                                                        case 'smart_shachepan':
                                                            (m.material = new l['M']()),
                                                                (m.material.color = new l['h'](
                                                                    15921906,
                                                                )),
                                                                (m.material.emissive = new l['h'](
                                                                    0,
                                                                )),
                                                                (m.material.metalness = 0.5),
                                                                (m.material.roughness = 0.62),
                                                                (m.material.map = n['shache_col']),
                                                                (m.material.normalMap =
                                                                    n['shache_nor']),
                                                                (m.material.aoMap =
                                                                    n['shache_occ']);
                                                            break;
                                                        case 'smart_neishi':
                                                        case 'smart_neishi2':
                                                            (m.material = new l['K']()),
                                                                (m.material.color = new l['h'](
                                                                    3355443,
                                                                )),
                                                                (m.material.emissive = new l['h'](
                                                                    0,
                                                                )),
                                                                (m.material.normalMap =
                                                                    n['neishi_nor']),
                                                                (m.material.aoMap =
                                                                    n['neishi_occ']);
                                                            break;
                                                        case 'smart_neibao':
                                                            (m.material = new l['K']()),
                                                                (m.material.color = new l['h'](
                                                                    3026478,
                                                                )),
                                                                (m.material.map = n['mennei_col']);
                                                            break;
                                                        case 'smart_linjian':
                                                            (m.material = new l['M']()),
                                                                (m.material.color = new l['h'](
                                                                    3026478,
                                                                )),
                                                                (m.material.metalness = 0.5),
                                                                (m.material.roughness = 0.62),
                                                                (m.material.map = n['linjian_col']),
                                                                (m.material.normalMap =
                                                                    n['linjian_nor']),
                                                                (m.material.aoMap =
                                                                    n['linjian_occ']);
                                                            break;
                                                        case 'smart_daochejing':
                                                            (m.material = new l['K']()),
                                                                (m.material.color = new l['h'](
                                                                    16777215,
                                                                ));
                                                            break;
                                                        case 'smart_bolinei':
                                                            (m.material = new l['K']()),
                                                                (m.material.color = new l['h'](
                                                                    3355443,
                                                                ));
                                                            break;
                                                        case 'smart_chedeng':
                                                        case 'smart_shachedeng':
                                                        case 'smart_wudeng':
                                                            (m.material = new l['M']()),
                                                                (m.material.color = new l['h'](
                                                                    16777215,
                                                                )),
                                                                (m.material.emissive = new l['h'](
                                                                    3355443,
                                                                )),
                                                                (m.material.metalness = 1),
                                                                (m.material.roughness = 0.4),
                                                                (m.material.normalMap =
                                                                    n['deng_nor']);
                                                            break;
                                                        case 'smart_chedengzhao':
                                                            (m.material = new l['K']()),
                                                                (m.material.color = new l['h'](
                                                                    16777215,
                                                                )),
                                                                (m.material.emissive = new l['h'](
                                                                    0,
                                                                )),
                                                                (m.material.transparent = !0),
                                                                (m.material.opacity = 0.3),
                                                                (m.material.normalMap =
                                                                    n['chedengzhao_nor']);
                                                            break;
                                                        case 'smart_shachedengzhao':
                                                            (m.material = new l['K']()),
                                                                (m.material.color = new l['h'](
                                                                    13240342,
                                                                )),
                                                                (m.material.transparent = !0),
                                                                (m.material.opacity = 0.4),
                                                                (m.material.normalMap =
                                                                    n['chedengzhao_nor']);
                                                            break;
                                                        case 'smart_shangeshang':
                                                            (m.material = new l['M']()),
                                                                (m.material.color = new l['h'](
                                                                    986895,
                                                                )),
                                                                (m.material.emissive = new l['h'](
                                                                    0,
                                                                )),
                                                                (m.material.metalness = 1),
                                                                (m.material.roughness = 0);
                                                            break;
                                                        case 'smart_shangexia':
                                                            (m.material = new l['K']()),
                                                                (m.material.color = new l['h'](0)),
                                                                M(!1);
                                                            break;
                                                        case 'smart_LOGO':
                                                        case 'smart_paiqiguan':
                                                            (m.material = new l['M']()),
                                                                (m.material.color = new l['h'](
                                                                    7105644,
                                                                )),
                                                                (m.material.emissive = new l['h'](
                                                                    4473924,
                                                                )),
                                                                (m.material.metalness = 1),
                                                                (m.material.roughness = 0.32);
                                                            break;
                                                        case 'smart_cheshen':
                                                            (m.material = new l['M']()),
                                                                (m.material.color = new l['h'](
                                                                    7365403,
                                                                )),
                                                                (m.material.metalness = 0.44),
                                                                (m.material.roughness = 0),
                                                                (m.material.normalMap =
                                                                    n['cheshen_nor']),
                                                                (m.material.aoMap =
                                                                    n['cheshen_occ']),
                                                                (m.material.envMap = n['skymap']),
                                                                (m.material.envMap.mapping =
                                                                    l['k']),
                                                                (m.material.envMapIntensity = 1);
                                                            break;
                                                        case 'smart_chejia':
                                                            (m.material = new l['M']()),
                                                                (m.material.color = new l['h'](
                                                                    2435369,
                                                                )),
                                                                (m.material.metalness = 0.44),
                                                                (m.material.roughness = 0.4),
                                                                (m.material.normalMap =
                                                                    n['chejia_nor']),
                                                                (m.material.aoMap =
                                                                    n['chejia_occ']);
                                                            break;
                                                    }
                                                }
                                    });
                            };
                        t();
                    };
                return (
                    Object(i['useEffect'])(() => {
                        k();
                    }, []),
                    Object(c['jsx'])('div', {
                        style: {
                            position: 'absolute',
                            top: 0,
                            height: '100vh',
                            width: '100vw',
                            background: 'rgba(0, 0, 0, .7)',
                        },
                        children: Object(c['jsx'])(r['a'], {
                            tip: '\u6a21\u578b\u52a0\u8f7d\u4e2d...',
                            spinning: o,
                            style: { height: '100vh' },
                            children: Object(c['jsx'])('div', {
                                style: {
                                    position: 'absolute',
                                    top: 0,
                                    height: '100vh',
                                    width: '100vw',
                                },
                                ref: a,
                            }),
                        }),
                    })
                );
            }
        },
    },
]);

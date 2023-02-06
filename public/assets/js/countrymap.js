/*Copyright 2010-2022 Simplemaps.com
html5countrymapv4.212 - trial version
Use pursuant to license agreement at https://simplemaps.com/license */

/* shifty - v1.5.3 - http://jeremyckahn.github.io/shifty, embedded within map logic*/

/* Raphaël 2.1.2 (tweaked, always global)- JavaScript Vector Library, Copyright © 2008-2016 Dmitry Baranovskiy (http://raphaeljs.com), Copyright © 2008-2016 Sencha Labs (http://sencha.com), Licensed under the MIT (http://raphaeljs.com/license.html) license. */
!(function (t) {
  var e, f, p, a, d, g, x, y, m;
  t.eve =
    ((e = "0.4.2"),
    (f = "hasOwnProperty"),
    (p = /[\.\/]/),
    (a = function () {}),
    (d = function (t, e) {
      return t - e;
    }),
    ((m = function (t, e) {
      t = String(t);
      var r,
        i = x,
        n = Array.prototype.slice.call(arguments, 2),
        s = m.listeners(t),
        a = 0,
        o = [],
        l = {},
        h = [],
        u = g;
      g = t;
      for (var c = (x = 0), f = s.length; c < f; c++)
        "zIndex" in s[c] &&
          (o.push(s[c].zIndex), s[c].zIndex < 0 && (l[s[c].zIndex] = s[c]));
      for (o.sort(d); o[a] < 0; )
        if (((r = l[o[a++]]), h.push(r.apply(e, n)), x)) return (x = i), h;
      for (c = 0; c < f; c++)
        if ("zIndex" in (r = s[c]))
          if (r.zIndex == o[a]) {
            if ((h.push(r.apply(e, n)), x)) break;
            do {
              if (((r = l[o[++a]]) && h.push(r.apply(e, n)), x)) break;
            } while (r);
          } else l[r.zIndex] = r;
        else if ((h.push(r.apply(e, n)), x)) break;
      return (x = i), (g = u), h.length ? h : null;
    })._events = y =
      { n: {} }),
    (m.listeners = function (t) {
      for (
        var e,
          r,
          i,
          n,
          s,
          a,
          o = t.split(p),
          l = y,
          h = [l],
          u = [],
          c = 0,
          f = o.length;
        c < f;
        c++
      ) {
        for (a = [], n = 0, s = h.length; n < s; n++)
          for (r = [(l = h[n].n)[o[c]], l["*"]], i = 2; i--; )
            (e = r[i]) && (a.push(e), (u = u.concat(e.f || [])));
        h = a;
      }
      return u;
    }),
    (m.on = function (t, e) {
      if (((t = String(t)), "function" != typeof e)) return function () {};
      for (var r = t.split(p), i = y, n = 0, s = r.length; n < s; n++)
        i =
          ((i = i.n).hasOwnProperty(r[n]) && i[r[n]]) || (i[r[n]] = { n: {} });
      for (i.f = i.f || [], n = 0, s = i.f.length; n < s; n++)
        if (i.f[n] == e) return a;
      return (
        i.f.push(e),
        function (t) {
          +t == +t && (e.zIndex = +t);
        }
      );
    }),
    (m.f = function (t) {
      var e = [].slice.call(arguments, 1);
      return function () {
        m.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)));
      };
    }),
    (m.stop = function () {
      x = 1;
    }),
    (m.nt = function (t) {
      return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(g) : g;
    }),
    (m.nts = function () {
      return g.split(p);
    }),
    (m.off = m.unbind =
      function (t, e) {
        if (t) {
          for (
            var r, i, n, s = t.split(p), a = [y], o = 0, l = s.length;
            o < l;
            o++
          )
            for (u = 0; u < a.length; u += n.length - 2) {
              if (((n = [u, 1]), (r = a[u].n), "*" != s[o]))
                r[s[o]] && n.push(r[s[o]]);
              else for (i in r) r[f](i) && n.push(r[i]);
              a.splice.apply(a, n);
            }
          for (o = 0, l = a.length; o < l; o++)
            for (r = a[o]; r.n; ) {
              if (e) {
                if (r.f) {
                  for (u = 0, c = r.f.length; u < c; u++)
                    if (r.f[u] == e) {
                      r.f.splice(u, 1);
                      break;
                    }
                  r.f.length || delete r.f;
                }
                for (i in r.n)
                  if (r.n[f](i) && r.n[i].f) {
                    for (var h = r.n[i].f, u = 0, c = h.length; u < c; u++)
                      if (h[u] == e) {
                        h.splice(u, 1);
                        break;
                      }
                    h.length || delete r.n[i].f;
                  }
              } else
                for (i in (delete r.f, r.n))
                  r.n[f](i) && r.n[i].f && delete r.n[i].f;
              r = r.n;
            }
        } else m._events = y = { n: {} };
      }),
    (m.once = function (t, e) {
      var r = function () {
        return m.unbind(t, r), e.apply(this, arguments);
      };
      return m.on(t, r);
    }),
    (m.version = e),
    (m.toString = function () {
      return "You are running Eve " + e;
    }),
    m);
})(this),
  (function (t) {
    !(function (t, N) {
      function j(t) {
        if (j.is(t, "function")) return i ? t() : N.on("raphael.DOMload", t);
        if (j.is(t, v))
          return j._engine.create[x](j, t.splice(0, 3 + j.is(t[0], F))).add(t);
        var e = Array.prototype.slice.call(arguments, 0);
        if (j.is(e[e.length - 1], "function")) {
          var r = e.pop();
          return i
            ? r.call(j._engine.create[x](j, e))
            : N.on("raphael.DOMload", function () {
                r.call(j._engine.create[x](j, e));
              });
        }
        return j._engine.create[x](j, arguments);
      }
      (j.version = "2.1.0"), (j.eve = N);
      function s(t, e) {
        return I(t) - I(e);
      }
      function e(t, e, r, i) {
        return (
          null == i && (i = r),
          [
            ["M", t, e],
            ["m", 0, -i],
            ["a", r, i, 0, 1, 1, 0, 2 * i],
            ["a", r, i, 0, 1, 1, 0, -2 * i],
            ["z"],
          ]
        );
      }
      var i,
        E = /[, ]+/,
        a = { circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1 },
        n = /\{(\d+)\}/g,
        L = "hasOwnProperty",
        d = { doc: document, win: t },
        r = {
          was: Object.prototype[L].call(d.win, "Raphael"),
          is: d.win.Raphael,
        },
        o = function () {
          this.ca = this.customAttributes = {};
        },
        x = "apply",
        M = "concat",
        g =
          "ontouchstart" in d.win ||
          (d.win.DocumentTouch && d.doc instanceof DocumentTouch),
        w = " ",
        P = String,
        z = "split",
        l =
          "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[
            z
          ](w),
        h = {
          mousedown: "touchstart",
          mousemove: "touchmove",
          mouseup: "touchend",
        },
        y = P.prototype.toLowerCase,
        B = Math,
        _ = B.max,
        k = B.min,
        S = B.abs,
        m = B.pow,
        T = B.PI,
        F = "number",
        u = "string",
        v = "array",
        c = Object.prototype.toString,
        f =
          ((j._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i),
          /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
        p = { NaN: 1, Infinity: 1, "-Infinity": 1 },
        R = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        C = B.round,
        I = parseFloat,
        b = parseInt,
        A = P.prototype.toUpperCase,
        q = (j._availableAttrs = {
          "arrow-end": "none",
          "arrow-start": "none",
          blur: 0,
          "clip-rect": "0 0 1e9 1e9",
          cursor: "default",
          cx: 0,
          cy: 0,
          fill: "#fff",
          "fill-opacity": 1,
          font: '10px "Arial"',
          "font-family": '"Arial"',
          "font-size": "10",
          "font-style": "normal",
          "font-weight": 400,
          gradient: 0,
          height: 0,
          href: "http://raphaeljs.com/",
          "letter-spacing": 0,
          opacity: 1,
          path: "M0,0",
          r: 0,
          rx: 0,
          ry: 0,
          src: "",
          stroke: "#000",
          "stroke-dasharray": "",
          "stroke-linecap": "butt",
          "stroke-linejoin": "butt",
          "stroke-miterlimit": 0,
          "stroke-opacity": 1,
          "stroke-width": 1,
          target: "_blank",
          "text-anchor": "middle",
          title: "Raphael",
          transform: "",
          width: 0,
          x: 0,
          y: 0,
        }),
        D = (j._availableAnimAttrs = {
          blur: F,
          "clip-rect": "csv",
          cx: F,
          cy: F,
          fill: "colour",
          "fill-opacity": F,
          "font-size": F,
          height: F,
          opacity: F,
          path: "path",
          r: F,
          rx: F,
          ry: F,
          stroke: "colour",
          "stroke-opacity": F,
          "stroke-width": F,
          transform: "transform",
          width: F,
          x: F,
          y: F,
        }),
        V =
          /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
        O = { hs: 1, rg: 1 },
        Y = /,?([achlmqrstvxz]),?/gi,
        G =
          /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        W =
          /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        X =
          /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
        H =
          ((j._radial_gradient =
            /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/),
          {}),
        U = function (t) {
          return t;
        },
        $ = (j._rectPath = function (t, e, r, i, n) {
          return n
            ? [
                ["M", t + n, e],
                ["l", r - 2 * n, 0],
                ["a", n, n, 0, 0, 1, n, n],
                ["l", 0, i - 2 * n],
                ["a", n, n, 0, 0, 1, -n, n],
                ["l", 2 * n - r, 0],
                ["a", n, n, 0, 0, 1, -n, -n],
                ["l", 0, 2 * n - i],
                ["a", n, n, 0, 0, 1, n, -n],
                ["z"],
              ]
            : [["M", t, e], ["l", r, 0], ["l", 0, i], ["l", -r, 0], ["z"]];
        }),
        Z = (j._getPath = {
          path: function (t) {
            return t.attr("path");
          },
          circle: function (t) {
            t = t.attrs;
            return e(t.cx, t.cy, t.r);
          },
          ellipse: function (t) {
            t = t.attrs;
            return e(t.cx, t.cy, t.rx, t.ry);
          },
          rect: function (t) {
            t = t.attrs;
            return $(t.x, t.y, t.width, t.height, t.r);
          },
          image: function (t) {
            t = t.attrs;
            return $(t.x, t.y, t.width, t.height);
          },
          text: function (t) {
            t = t._getBBox();
            return $(t.x, t.y, t.width, t.height);
          },
          set: function (t) {
            t = t._getBBox();
            return $(t.x, t.y, t.width, t.height);
          },
        }),
        Q = (j.mapPath = function (t, e) {
          if (!e) return t;
          for (var r, i, n, s, a, o = 0, l = (t = Ct(t)).length; o < l; o++)
            for (n = 1, s = (a = t[o]).length; n < s; n += 2)
              (r = e.x(a[n], a[n + 1])),
                (i = e.y(a[n], a[n + 1])),
                (a[n] = r),
                (a[n + 1] = i);
          return t;
        });
      if (
        ((j._g = d),
        (j.type =
          d.win.SVGAngle ||
          d.doc.implementation.hasFeature(
            "http://www.w3.org/TR/SVG11/feature#BasicStructure",
            "1.1"
          )
            ? "SVG"
            : "VML"),
        "VML" == j.type)
      ) {
        var J,
          K = d.doc.createElement("div");
        if (
          ((K.innerHTML = '<v:shape adj="1"/>'),
          ((J = K.firstChild).style.behavior = "url(#default#VML)"),
          !J || "object" != typeof J.adj)
        )
          return (j.type = "");
        K = null;
      }
      function tt(t) {
        if ("function" == typeof t || Object(t) !== t) return t;
        var e,
          r = new t.constructor();
        for (e in t) t[L](e) && (r[e] = tt(t[e]));
        return r;
      }
      (j.svg = !(j.vml = "VML" == j.type)),
        (j._Paper = o),
        (j.fn = K = o.prototype = j.prototype),
        (j._id = 0),
        (j._oid = 0),
        (j.is = function (t, e) {
          return "finite" == (e = y.call(e))
            ? !p[L](+t)
            : "array" == e
            ? t instanceof Array
            : ("null" == e && null === t) ||
              (e == typeof t && null !== t) ||
              ("object" == e && t === Object(t)) ||
              ("array" == e && Array.isArray && Array.isArray(t)) ||
              c.call(t).slice(8, -1).toLowerCase() == e;
        }),
        (j.angle = function (t, e, r, i, n, s) {
          if (null != n) return j.angle(t, e, n, s) - j.angle(r, i, n, s);
          (r = t - r), (i = e - i);
          return r || i ? (180 + (180 * B.atan2(-i, -r)) / T + 360) % 360 : 0;
        }),
        (j.rad = function (t) {
          return ((t % 360) * T) / 180;
        }),
        (j.deg = function (t) {
          return ((180 * t) / T) % 360;
        }),
        (j.snapTo = function (t, e, r) {
          if (((r = j.is(r, "finite") ? r : 10), j.is(t, v))) {
            for (var i = t.length; i--; ) if (S(t[i] - e) <= r) return t[i];
          } else {
            var n = e % (t = +t);
            if (n < r) return e - n;
            if (t - r < n) return e - n + t;
          }
          return e;
        });
      j.createUUID = (function (t, e) {
        return function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
            .replace(t, e)
            .toUpperCase();
        };
      })(/[xy]/g, function (t) {
        var e = (16 * B.random()) | 0;
        return ("x" == t ? e : (3 & e) | 8).toString(16);
      });
      j.setWindow = function (t) {
        N("raphael.setWindow", j, d.win, t),
          (d.win = t),
          (d.doc = d.win.document),
          j._engine.initWin && j._engine.initWin(d.win);
      };
      function et() {
        return "hsb(" + [this.h, this.s, this.b] + ")";
      }
      function rt() {
        return "hsl(" + [this.h, this.s, this.l] + ")";
      }
      function it() {
        return this.hex;
      }
      function nt(t, e, r) {
        var i;
        return (
          null == e &&
            j.is(t, "object") &&
            "r" in t &&
            "g" in t &&
            "b" in t &&
            ((r = t.b), (e = t.g), (t = t.r)),
          null == e &&
            j.is(t, u) &&
            ((t = (i = j.getRGB(t)).r), (e = i.g), (r = i.b)),
          (1 < t || 1 < e || 1 < r) && ((t /= 255), (e /= 255), (r /= 255)),
          [t, e, r]
        );
      }
      function st(t, e, r, i) {
        return (
          (r = {
            r: (t *= 255),
            g: (e *= 255),
            b: (r *= 255),
            hex: j.rgb(t, e, r),
            toString: it,
          }),
          j.is(i, "finite") && (r.opacity = i),
          r
        );
      }
      var at = function (t) {
        if (j.vml) {
          var r,
            i = /^\s+|\s+$/g;
          try {
            var e = new ActiveXObject("htmlfile");
            e.write("<body>"), e.close(), (r = e.body);
          } catch (t) {
            r = createPopup().document.body;
          }
          var n = r.createTextRange();
          at = ot(function (t) {
            try {
              r.style.color = P(t).replace(i, "");
              var e = n.queryCommandValue("ForeColor");
              return (
                "#" +
                (
                  "000000" +
                  (e =
                    ((255 & e) << 16) |
                    (65280 & e) |
                    ((16711680 & e) >>> 16)).toString(16)
                ).slice(-6)
              );
            } catch (t) {
              return "none";
            }
          });
        } else {
          var s = d.doc.createElement("i");
          (s.title = "Raphaël Colour Picker"),
            (s.style.display = "none"),
            d.doc.body.appendChild(s),
            (at = ot(function (t) {
              return (
                (s.style.color = t),
                d.doc.defaultView
                  .getComputedStyle(s, "")
                  .getPropertyValue("color")
              );
            }));
        }
        return at(t);
      };
      function ot(n, s, a) {
        function o() {
          var t = Array.prototype.slice.call(arguments, 0),
            e = t.join("␀"),
            r = (o.cache = o.cache || {}),
            i = (o.count = o.count || []);
          return (
            r[L](e)
              ? (function (t, e) {
                  for (var r = 0, i = t.length; r < i; r++)
                    if (t[r] === e) return t.push(t.splice(r, 1)[0]);
                })(i, e)
              : (1e3 <= i.length && delete r[i.shift()],
                i.push(e),
                (r[e] = n[x](s, t))),
            a ? a(r[e]) : r[e]
          );
        }
        return o;
      }
      (j.color = function (t) {
        var e;
        return (
          j.is(t, "object") && "h" in t && "s" in t && "b" in t
            ? ((e = j.hsb2rgb(t)),
              (t.r = e.r),
              (t.g = e.g),
              (t.b = e.b),
              (t.hex = e.hex))
            : j.is(t, "object") && "h" in t && "s" in t && "l" in t
            ? ((e = j.hsl2rgb(t)),
              (t.r = e.r),
              (t.g = e.g),
              (t.b = e.b),
              (t.hex = e.hex))
            : (j.is(t, "string") && (t = j.getRGB(t)),
              j.is(t, "object") && "r" in t && "g" in t && "b" in t
                ? ((e = j.rgb2hsl(t)),
                  (t.h = e.h),
                  (t.s = e.s),
                  (t.l = e.l),
                  (e = j.rgb2hsb(t)),
                  (t.v = e.b))
                : ((t = { hex: "none" }).r =
                    t.g =
                    t.b =
                    t.h =
                    t.s =
                    t.v =
                    t.l =
                      -1)),
          (t.toString = it),
          t
        );
      }),
        (j.hsb2rgb = function (t, e, r, i) {
          var n, s, a;
          return (
            this.is(t, "object") &&
              "h" in t &&
              "s" in t &&
              "b" in t &&
              ((r = t.b), (e = t.s), (i = (t = t.h).o)),
            (s =
              (a = r * e) * (1 - S(((t = ((t *= 360) % 360) / 60) % 2) - 1))),
            (r = e = n = r - a),
            st(
              (r += [a, s, 0, 0, s, a][(t = ~~t)]),
              (e += [s, a, a, s, 0, 0][t]),
              (n += [0, 0, s, a, a, s][t]),
              i
            )
          );
        }),
        (j.hsl2rgb = function (t, e, r, i) {
          var n, s, a;
          return (
            this.is(t, "object") &&
              "h" in t &&
              "s" in t &&
              "l" in t &&
              ((r = t.l), (e = t.s), (t = t.h)),
            (1 < t || 1 < e || 1 < r) && ((t /= 360), (e /= 100), (r /= 100)),
            (s =
              (a = 2 * e * (r < 0.5 ? r : 1 - r)) *
              (1 - S(((t = ((t *= 360) % 360) / 60) % 2) - 1))),
            (r = e = n = r - a / 2),
            st(
              (r += [a, s, 0, 0, s, a][(t = ~~t)]),
              (e += [s, a, a, s, 0, 0][t]),
              (n += [0, 0, s, a, a, s][t]),
              i
            )
          );
        }),
        (j.rgb2hsb = function (t, e, r) {
          var i, n;
          return (
            (t = (r = nt(t, e, r))[0]),
            (e = r[1]),
            (r = r[2]),
            {
              h:
                ((((0 == (n = (i = _(t, e, r)) - k(t, e, r))
                  ? null
                  : i == t
                  ? (e - r) / n
                  : i == e
                  ? (r - t) / n + 2
                  : (t - e) / n + 4) +
                  360) %
                  6) *
                  60) /
                360,
              s: 0 == n ? 0 : n / i,
              b: i,
              toString: et,
            }
          );
        }),
        (j.rgb2hsl = function (t, e, r) {
          var i, n, s;
          return (
            (t = (r = nt(t, e, r))[0]),
            (e = r[1]),
            (r = r[2]),
            (i = ((n = _(t, e, r)) + (s = k(t, e, r))) / 2),
            {
              h:
                ((((0 == (s = n - s)
                  ? null
                  : n == t
                  ? (e - r) / s
                  : n == e
                  ? (r - t) / s + 2
                  : (t - e) / s + 4) +
                  360) %
                  6) *
                  60) /
                360,
              s: 0 == s ? 0 : i < 0.5 ? s / (2 * i) : s / (2 - 2 * i),
              l: i,
              toString: rt,
            }
          );
        }),
        (j._path2string = function () {
          return this.join(",").replace(Y, "$1");
        });
      j._preload = function (t, e) {
        var r = d.doc.createElement("img");
        (r.style.cssText = "position:absolute;left:-9999em;top:-9999em"),
          (r.onload = function () {
            e.call(this), (this.onload = null), d.doc.body.removeChild(this);
          }),
          (r.onerror = function () {
            d.doc.body.removeChild(this);
          }),
          d.doc.body.appendChild(r),
          (r.src = t);
      };
      function lt() {
        return this.hex;
      }
      function ht(t, e) {
        for (var r = [], i = 0, n = t.length; i < n - 2 * !e; i += 2) {
          var s = [
            { x: +t[i - 2], y: +t[i - 1] },
            { x: +t[i], y: +t[i + 1] },
            { x: +t[i + 2], y: +t[i + 3] },
            { x: +t[i + 4], y: +t[i + 5] },
          ];
          e
            ? i
              ? n - 4 == i
                ? (s[3] = { x: +t[0], y: +t[1] })
                : n - 2 == i &&
                  ((s[2] = { x: +t[0], y: +t[1] }),
                  (s[3] = { x: +t[2], y: +t[3] }))
              : (s[0] = { x: +t[n - 2], y: +t[n - 1] })
            : n - 4 == i
            ? (s[3] = s[2])
            : i || (s[0] = { x: +t[i], y: +t[i + 1] }),
            r.push([
              "C",
              (-s[0].x + 6 * s[1].x + s[2].x) / 6,
              (-s[0].y + 6 * s[1].y + s[2].y) / 6,
              (s[1].x + 6 * s[2].x - s[3].x) / 6,
              (s[1].y + 6 * s[2].y - s[3].y) / 6,
              s[2].x,
              s[2].y,
            ]);
        }
        return r;
      }
      (j.getRGB = ot(function (t) {
        if (!t || (t = P(t)).indexOf("-") + 1)
          return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: lt };
        if ("none" == t)
          return { r: -1, g: -1, b: -1, hex: "none", toString: lt };
        O[L](t.toLowerCase().substring(0, 2)) ||
          "#" == t.charAt() ||
          (t = at(t));
        var e,
          r,
          i,
          n,
          s,
          a = t.match(f);
        return a
          ? (a[2] &&
              ((i = b(a[2].substring(5), 16)),
              (r = b(a[2].substring(3, 5), 16)),
              (e = b(a[2].substring(1, 3), 16))),
            a[3] &&
              ((i = b((t = a[3].charAt(3)) + t, 16)),
              (r = b((t = a[3].charAt(2)) + t, 16)),
              (e = b((t = a[3].charAt(1)) + t, 16))),
            a[4] &&
              ((s = a[4][z](V)),
              (e = I(s[0])),
              "%" == s[0].slice(-1) && (e *= 2.55),
              (r = I(s[1])),
              "%" == s[1].slice(-1) && (r *= 2.55),
              (i = I(s[2])),
              "%" == s[2].slice(-1) && (i *= 2.55),
              "rgba" == a[1].toLowerCase().slice(0, 4) && (n = I(s[3])),
              s[3] && "%" == s[3].slice(-1) && (n /= 100)),
            a[5]
              ? ((s = a[5][z](V)),
                (e = I(s[0])),
                "%" == s[0].slice(-1) && (e *= 2.55),
                (r = I(s[1])),
                "%" == s[1].slice(-1) && (r *= 2.55),
                (i = I(s[2])),
                "%" == s[2].slice(-1) && (i *= 2.55),
                ("deg" != s[0].slice(-3) && "°" != s[0].slice(-1)) ||
                  (e /= 360),
                "hsba" == a[1].toLowerCase().slice(0, 4) && (n = I(s[3])),
                s[3] && "%" == s[3].slice(-1) && (n /= 100),
                j.hsb2rgb(e, r, i, n))
              : a[6]
              ? ((s = a[6][z](V)),
                (e = I(s[0])),
                "%" == s[0].slice(-1) && (e *= 2.55),
                (r = I(s[1])),
                "%" == s[1].slice(-1) && (r *= 2.55),
                (i = I(s[2])),
                "%" == s[2].slice(-1) && (i *= 2.55),
                ("deg" != s[0].slice(-3) && "°" != s[0].slice(-1)) ||
                  (e /= 360),
                "hsla" == a[1].toLowerCase().slice(0, 4) && (n = I(s[3])),
                s[3] && "%" == s[3].slice(-1) && (n /= 100),
                j.hsl2rgb(e, r, i, n))
              : (((a = { r: e, g: r, b: i, toString: lt }).hex =
                  "#" +
                  (16777216 | i | (r << 8) | (e << 16)).toString(16).slice(1)),
                j.is(n, "finite") && (a.opacity = n),
                a))
          : { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: lt };
      }, j)),
        (j.hsb = ot(function (t, e, r) {
          return j.hsb2rgb(t, e, r).hex;
        })),
        (j.hsl = ot(function (t, e, r) {
          return j.hsl2rgb(t, e, r).hex;
        })),
        (j.rgb = ot(function (t, e, r) {
          return (
            "#" + (16777216 | r | (e << 8) | (t << 16)).toString(16).slice(1)
          );
        })),
        (j.getColor = function (t) {
          var e = (this.getColor.start = this.getColor.start || {
              h: 0,
              s: 1,
              b: t || 0.75,
            }),
            t = this.hsb2rgb(e.h, e.s, e.b);
          return (
            (e.h += 0.075),
            1 < e.h &&
              ((e.h = 0),
              (e.s -= 0.2),
              e.s <= 0 && (this.getColor.start = { h: 0, s: 1, b: e.b })),
            t.hex
          );
        }),
        (j.getColor.reset = function () {
          delete this.start;
        }),
        (j.parsePathString = function (t) {
          if (!t) return null;
          var e = ut(t);
          if (e.arr) return bt(e.arr);
          var s = {
              a: 7,
              c: 6,
              h: 1,
              l: 2,
              m: 2,
              r: 4,
              q: 4,
              s: 4,
              t: 2,
              v: 1,
              z: 0,
            },
            a = [];
          return (
            j.is(t, v) && j.is(t[0], v) && (a = bt(t)),
            a.length ||
              P(t).replace(G, function (t, e, r) {
                var i = [],
                  n = e.toLowerCase();
                if (
                  (r.replace(X, function (t, e) {
                    e && i.push(+e);
                  }),
                  "m" == n &&
                    2 < i.length &&
                    (a.push([e][M](i.splice(0, 2))),
                    (n = "l"),
                    (e = "m" == e ? "l" : "L")),
                  "r" == n)
                )
                  a.push([e][M](i));
                else
                  for (
                    ;
                    i.length >= s[n] &&
                    (a.push([e][M](i.splice(0, s[n]))), s[n]);

                  );
              }),
            (a.toString = j._path2string),
            (e.arr = bt(a)),
            a
          );
        }),
        (j.parseTransformString = ot(function (t) {
          if (!t) return null;
          var n = [];
          return (
            j.is(t, v) && j.is(t[0], v) && (n = bt(t)),
            n.length ||
              P(t).replace(W, function (t, e, r) {
                var i = [];
                y.call(e);
                r.replace(X, function (t, e) {
                  e && i.push(+e);
                }),
                  n.push([e][M](i));
              }),
            (n.toString = j._path2string),
            n
          );
        }));
      var ut = function (e) {
        var r = (ut.ps = ut.ps || {});
        return (
          r[e] ? (r[e].sleep = 100) : (r[e] = { sleep: 100 }),
          setTimeout(function () {
            for (var t in r)
              r[L](t) && t != e && (r[t].sleep--, r[t].sleep || delete r[t]);
          }),
          r[e]
        );
      };
      function ct(t, e, r, i, n) {
        return (
          t * (t * (-3 * e + 9 * r - 9 * i + 3 * n) + 6 * e - 12 * r + 6 * i) -
          3 * e +
          3 * r
        );
      }
      function ft(t, e, r, i, n, s, a, o, l) {
        null == l && (l = 1);
        for (
          var h = (l = 1 < l ? 1 : l < 0 ? 0 : l) / 2,
            u = [
              -0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699,
              0.7699, -0.9041, 0.9041, -0.9816, 0.9816,
            ],
            c = [
              0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601,
              0.1069, 0.1069, 0.0472, 0.0472,
            ],
            f = 0,
            p = 0;
          p < 12;
          p++
        ) {
          var d = h * u[p] + h,
            g = ct(d, t, r, n, a),
            d = ct(d, e, i, s, o),
            d = g * g + d * d;
          f += c[p] * B.sqrt(d);
        }
        return h * f;
      }
      function pt(t, e, r) {
        var i = j.bezierBBox(t),
          n = j.bezierBBox(e);
        if (!j.isBBoxIntersect(i, n)) return r ? 0 : [];
        for (
          var i = ft.apply(0, t),
            n = ft.apply(0, e),
            s = _(~~(i / 5), 1),
            a = _(~~(n / 5), 1),
            o = [],
            l = [],
            h = {},
            u = r ? 0 : [],
            c = 0;
          c < s + 1;
          c++
        ) {
          var f = j.findDotsAtSegment.apply(j, t.concat(c / s));
          o.push({ x: f.x, y: f.y, t: c / s });
        }
        for (c = 0; c < a + 1; c++)
          (f = j.findDotsAtSegment.apply(j, e.concat(c / a))),
            l.push({ x: f.x, y: f.y, t: c / a });
        for (c = 0; c < s; c++)
          for (var p = 0; p < a; p++) {
            var d = o[c],
              g = o[c + 1],
              x = l[p],
              y = l[p + 1],
              m = S(g.x - d.x) < 0.001 ? "y" : "x",
              v = S(y.x - x.x) < 0.001 ? "y" : "x",
              b = (function (t, e, r, i, n, s, a, o) {
                if (
                  !(
                    _(t, r) < k(n, a) ||
                    k(t, r) > _(n, a) ||
                    _(e, i) < k(s, o) ||
                    k(e, i) > _(s, o)
                  )
                ) {
                  var l = (t * i - e * r) * (n - a) - (t - r) * (n * o - s * a),
                    h = (t * i - e * r) * (s - o) - (e - i) * (n * o - s * a),
                    u = (t - r) * (s - o) - (e - i) * (n - a);
                  if (u) {
                    var c = l / u,
                      l = h / u,
                      h = +c.toFixed(2),
                      u = +l.toFixed(2);
                    if (
                      !(
                        h < +k(t, r).toFixed(2) ||
                        h > +_(t, r).toFixed(2) ||
                        h < +k(n, a).toFixed(2) ||
                        h > +_(n, a).toFixed(2) ||
                        u < +k(e, i).toFixed(2) ||
                        u > +_(e, i).toFixed(2) ||
                        u < +k(s, o).toFixed(2) ||
                        u > +_(s, o).toFixed(2)
                      )
                    )
                      return { x: c, y: l };
                  }
                }
              })(d.x, d.y, g.x, g.y, x.x, x.y, y.x, y.y);
            b &&
              h[b.x.toFixed(4)] != b.y.toFixed(4) &&
              ((h[b.x.toFixed(4)] = b.y.toFixed(4)),
              (d = d.t + S((b[m] - d[m]) / (g[m] - d[m])) * (g.t - d.t)),
              (x = x.t + S((b[v] - x[v]) / (y[v] - x[v])) * (y.t - x.t)),
              0 <= d &&
                d <= 1.001 &&
                0 <= x &&
                x <= 1.001 &&
                (r
                  ? u++
                  : u.push({ x: b.x, y: b.y, t1: k(d, 1), t2: k(x, 1) })));
          }
        return u;
      }
      function dt(t, e, r) {
        (t = j._path2curve(t)), (e = j._path2curve(e));
        for (
          var i, n, s, a, o, l, h, u, c, f, p = r ? 0 : [], d = 0, g = t.length;
          d < g;
          d++
        ) {
          var x = t[d];
          if ("M" == x[0]) (i = o = x[1]), (n = l = x[2]);
          else {
            n =
              "C" == x[0]
                ? ((i = (c = [i, n].concat(x.slice(1)))[6]), c[7])
                : ((c = [i, n, i, n, o, l, o, l]), (i = o), l);
            for (var y = 0, m = e.length; y < m; y++) {
              var v = e[y];
              if ("M" == v[0]) (s = h = v[1]), (a = u = v[2]);
              else {
                a =
                  "C" == v[0]
                    ? ((s = (f = [s, a].concat(v.slice(1)))[6]), f[7])
                    : ((f = [s, a, s, a, h, u, h, u]), (s = h), u);
                var b = pt(c, f, r);
                if (r) p += b;
                else {
                  for (var _ = 0, w = b.length; _ < w; _++)
                    (b[_].segment1 = d),
                      (b[_].segment2 = y),
                      (b[_].bez1 = c),
                      (b[_].bez2 = f);
                  p = p.concat(b);
                }
              }
            }
          }
        }
        return p;
      }
      (j.findDotsAtSegment = function (t, e, r, i, n, s, a, o, l) {
        var h = 1 - l,
          u = m(h, 3),
          c = m(h, 2),
          f = l * l,
          p = f * l,
          d = u * t + 3 * c * l * r + 3 * h * l * l * n + p * a,
          g = u * e + 3 * c * l * i + 3 * h * l * l * s + p * o,
          u = t + 2 * l * (r - t) + f * (n - 2 * r + t),
          c = e + 2 * l * (i - e) + f * (s - 2 * i + e),
          p = r + 2 * l * (n - r) + f * (a - 2 * n + r),
          f = i + 2 * l * (s - i) + f * (o - 2 * s + i),
          r = h * t + l * r,
          i = h * e + l * i,
          a = h * n + l * a,
          l = h * s + l * o,
          o = 90 - (180 * B.atan2(u - p, c - f)) / T;
        return (
          (p < u || c < f) && (o += 180),
          {
            x: d,
            y: g,
            m: { x: u, y: c },
            n: { x: p, y: f },
            start: { x: r, y: i },
            end: { x: a, y: l },
            alpha: o,
          }
        );
      }),
        (j.bezierBBox = function (t, e, r, i, n, s, a, o) {
          j.is(t, "array") || (t = [t, e, r, i, n, s, a, o]);
          t = kt.apply(null, t);
          return {
            x: t.min.x,
            y: t.min.y,
            x2: t.max.x,
            y2: t.max.y,
            width: t.max.x - t.min.x,
            height: t.max.y - t.min.y,
          };
        }),
        (j.isPointInsideBBox = function (t, e, r) {
          return e >= t.x && e <= t.x2 && r >= t.y && r <= t.y2;
        }),
        (j.isBBoxIntersect = function (t, e) {
          var r = j.isPointInsideBBox;
          return (
            r(e, t.x, t.y) ||
            r(e, t.x2, t.y) ||
            r(e, t.x, t.y2) ||
            r(e, t.x2, t.y2) ||
            r(t, e.x, e.y) ||
            r(t, e.x2, e.y) ||
            r(t, e.x, e.y2) ||
            r(t, e.x2, e.y2) ||
            (((t.x < e.x2 && t.x > e.x) || (e.x < t.x2 && e.x > t.x)) &&
              ((t.y < e.y2 && t.y > e.y) || (e.y < t.y2 && e.y > t.y)))
          );
        }),
        (j.pathIntersection = function (t, e) {
          return dt(t, e);
        }),
        (j.pathIntersectionNumber = function (t, e) {
          return dt(t, e, 1);
        }),
        (j.isPointInsidePath = function (t, e, r) {
          var i = j.pathBBox(t);
          return (
            j.isPointInsideBBox(i, e, r) &&
            dt(
              t,
              [
                ["M", e, r],
                ["H", i.x2 + 10],
              ],
              1
            ) %
              2 ==
              1
          );
        }),
        (j._removedFactory = function (t) {
          return function () {
            N(
              "raphael.log",
              null,
              "Raphaël: you are calling to method “" +
                t +
                "” of removed object",
              t
            );
          };
        });
      function gt(t, e, r, i) {
        return [t, e, r, i, r, i];
      }
      function xt(t, e, r, i, n, s) {
        return [
          (1 / 3) * t + (2 / 3) * r,
          (1 / 3) * e + (2 / 3) * i,
          (1 / 3) * n + (2 / 3) * r,
          (1 / 3) * s + (2 / 3) * i,
          n,
          s,
        ];
      }
      function yt(t, e, r, i, n, s, a, o, l) {
        var h = 1 - l;
        return {
          x:
            m(h, 3) * t + 3 * m(h, 2) * l * r + 3 * h * l * l * n + m(l, 3) * a,
          y:
            m(h, 3) * e + 3 * m(h, 2) * l * i + 3 * h * l * l * s + m(l, 3) * o,
        };
      }
      function mt(t) {
        var e = t[0];
        switch (e.toLowerCase()) {
          case "t":
            return [e, 0, 0];
          case "m":
            return [e, 1, 0, 0, 1, 0, 0];
          case "r":
            return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
          case "s":
            return 5 == t.length
              ? [e, 1, 1, t[3], t[4]]
              : 3 == t.length
              ? [e, 1, 1]
              : [e, 1];
        }
      }
      var vt = (j.pathBBox = function (t) {
          var e = ut(t);
          if (e.bbox) return tt(e.bbox);
          if (!t) return { x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0 };
          for (
            var r,
              i,
              n = 0,
              s = 0,
              a = [],
              o = [],
              l = 0,
              h = (t = Ct(t)).length;
            l < h;
            l++
          )
            "M" == (i = t[l])[0]
              ? ((n = i[1]), (s = i[2]), a.push(n), o.push(s))
              : ((r = kt(n, s, i[1], i[2], i[3], i[4], i[5], i[6])),
                (a = a[M](r.min.x, r.max.x)),
                (o = o[M](r.min.y, r.max.y)),
                (n = i[5]),
                (s = i[6]));
          var u = k[x](0, a),
            c = k[x](0, o),
            f = _[x](0, a),
            p = _[x](0, o),
            d = f - u,
            g = p - c,
            g = {
              x: u,
              y: c,
              x2: f,
              y2: p,
              width: d,
              height: g,
              cx: u + d / 2,
              cy: c + g / 2,
            };
          return (e.bbox = tt(g)), g;
        }),
        bt = function (t) {
          t = tt(t);
          return (t.toString = j._path2string), t;
        },
        o = (j._pathToRelative = function (t) {
          var e = ut(t);
          if (e.rel) return bt(e.rel);
          (j.is(t, v) && j.is(t && t[0], v)) || (t = j.parsePathString(t));
          var r = [],
            i = 0,
            n = 0,
            s = 0,
            a = 0,
            o = 0;
          "M" == t[0][0] &&
            ((s = i = t[0][1]), (a = n = t[0][2]), o++, r.push(["M", i, n]));
          for (var l = o, h = t.length; l < h; l++) {
            var u = (r[l] = []),
              c = t[l];
            if (c[0] != y.call(c[0]))
              switch (((u[0] = y.call(c[0])), u[0])) {
                case "a":
                  (u[1] = c[1]),
                    (u[2] = c[2]),
                    (u[3] = c[3]),
                    (u[4] = c[4]),
                    (u[5] = c[5]),
                    (u[6] = +(c[6] - i).toFixed(3)),
                    (u[7] = +(c[7] - n).toFixed(3));
                  break;
                case "v":
                  u[1] = +(c[1] - n).toFixed(3);
                  break;
                case "m":
                  (s = c[1]), (a = c[2]);
                default:
                  for (var f = 1, p = c.length; f < p; f++)
                    u[f] = +(c[f] - (f % 2 ? i : n)).toFixed(3);
              }
            else {
              (u = r[l] = []), "m" == c[0] && ((s = c[1] + i), (a = c[2] + n));
              for (var d = 0, g = c.length; d < g; d++) r[l][d] = c[d];
            }
            var x = r[l].length;
            switch (r[l][0]) {
              case "z":
                (i = s), (n = a);
                break;
              case "h":
                i += +r[l][x - 1];
                break;
              case "v":
                n += +r[l][x - 1];
                break;
              default:
                (i += +r[l][x - 2]), (n += +r[l][x - 1]);
            }
          }
          return (r.toString = j._path2string), (e.rel = bt(r)), r;
        }),
        _t = (j._pathToAbsolute = function (t) {
          var e = ut(t);
          if (e.abs) return bt(e.abs);
          if (
            ((j.is(t, v) && j.is(t && t[0], v)) || (t = j.parsePathString(t)),
            !t || !t.length)
          )
            return [["M", 0, 0]];
          var r = [],
            i = 0,
            n = 0,
            s = 0,
            a = 0,
            o = 0;
          "M" == t[0][0] &&
            ((s = i = +t[0][1]), (a = n = +t[0][2]), o++, (r[0] = ["M", i, n]));
          for (
            var l,
              h,
              u =
                3 == t.length &&
                "M" == t[0][0] &&
                "R" == t[1][0].toUpperCase() &&
                "Z" == t[2][0].toUpperCase(),
              c = o,
              f = t.length;
            c < f;
            c++
          ) {
            if ((r.push((l = [])), (h = t[c])[0] != A.call(h[0])))
              switch (((l[0] = A.call(h[0])), l[0])) {
                case "A":
                  (l[1] = h[1]),
                    (l[2] = h[2]),
                    (l[3] = h[3]),
                    (l[4] = h[4]),
                    (l[5] = h[5]),
                    (l[6] = +(h[6] + i)),
                    (l[7] = +(h[7] + n));
                  break;
                case "V":
                  l[1] = +h[1] + n;
                  break;
                case "H":
                  l[1] = +h[1] + i;
                  break;
                case "R":
                  for (
                    var p = [i, n][M](h.slice(1)), d = 2, g = p.length;
                    d < g;
                    d++
                  )
                    (p[d] = +p[d] + i), (p[++d] = +p[d] + n);
                  r.pop(), (r = r[M](ht(p, u)));
                  break;
                case "M":
                  (s = +h[1] + i), (a = +h[2] + n);
                default:
                  for (d = 1, g = h.length; d < g; d++)
                    l[d] = +h[d] + (d % 2 ? i : n);
              }
            else if ("R" == h[0])
              (p = [i, n][M](h.slice(1))),
                r.pop(),
                (r = r[M](ht(p, u))),
                (l = ["R"][M](h.slice(-2)));
            else for (var x = 0, y = h.length; x < y; x++) l[x] = h[x];
            switch (l[0]) {
              case "Z":
                (i = s), (n = a);
                break;
              case "H":
                i = l[1];
                break;
              case "V":
                n = l[1];
                break;
              case "M":
                (s = l[l.length - 2]), (a = l[l.length - 1]);
              default:
                (i = l[l.length - 2]), (n = l[l.length - 1]);
            }
          }
          return (r.toString = j._path2string), (e.abs = bt(r)), r;
        }),
        wt = function (t, e, r, i, n, s, a, o, l, h) {
          var u = (120 * T) / 180,
            c = (T / 180) * (+n || 0),
            f = [],
            p = ot(function (t, e, r) {
              return {
                x: t * B.cos(r) - e * B.sin(r),
                y: t * B.sin(r) + e * B.cos(r),
              };
            });
          h
            ? ((b = h[0]), (_ = h[1]), (m = h[2]), (v = h[3]))
            : ((t = (g = p(t, e, -c)).x),
              (e = g.y),
              (o = (g = p(o, l, -c)).x),
              (l = g.y),
              B.cos((T / 180) * n),
              B.sin((T / 180) * n),
              1 <
                (y =
                  ((x = (t - o) / 2) * x) / (r * r) +
                  ((d = (e - l) / 2) * d) / (i * i)) &&
                ((r *= y = B.sqrt(y)), (i *= y)),
              (g = r * r),
              (y = i * i),
              (m =
                ((g =
                  (s == a ? -1 : 1) *
                  B.sqrt(
                    S((g * y - g * d * d - y * x * x) / (g * d * d + y * x * x))
                  )) *
                  r *
                  d) /
                  i +
                (t + o) / 2),
              (v = (g * -i * x) / r + (e + l) / 2),
              (b = B.asin(((e - v) / i).toFixed(9))),
              (_ = B.asin(((l - v) / i).toFixed(9))),
              (b = t < m ? T - b : b) < 0 && (b = 2 * T + b),
              (_ = o < m ? T - _ : _) < 0 && (_ = 2 * T + _),
              a && _ < b && (b -= 2 * T),
              !a && b < _ && (_ -= 2 * T));
          var d,
            g,
            x,
            y = _ - b;
          S(y) > u &&
            ((d = _),
            (g = o),
            (x = l),
            (_ = b + u * (a && b < _ ? 1 : -1)),
            (o = m + r * B.cos(_)),
            (l = v + i * B.sin(_)),
            (f = wt(o, l, r, i, n, 0, a, g, x, [_, d, m, v]))),
            (y = _ - b);
          var m = B.cos(b),
            v = B.sin(b),
            b = B.cos(_),
            _ = B.sin(_),
            y = B.tan(y / 4),
            r = (4 / 3) * r * y,
            i = (4 / 3) * i * y,
            y = [t, e],
            m = [t + r * v, e - i * m],
            b = [o + r * _, l - i * b],
            l = [o, l];
          if (((m[0] = 2 * y[0] - m[0]), (m[1] = 2 * y[1] - m[1]), h))
            return [m, b, l][M](f);
          for (
            var w = [], k = 0, C = (f = [m, b, l][M](f).join()[z](",")).length;
            k < C;
            k++
          )
            w[k] = k % 2 ? p(f[k - 1], f[k], c).y : p(f[k], f[k + 1], c).x;
          return w;
        },
        kt = ot(function (t, e, r, i, n, s, a, o) {
          var l,
            h = n - 2 * r + t - (a - 2 * n + r),
            u = 2 * (r - t) - 2 * (n - r),
            c = t - r,
            f = (-u + B.sqrt(u * u - 4 * h * c)) / 2 / h,
            p = (-u - B.sqrt(u * u - 4 * h * c)) / 2 / h,
            d = [e, o],
            g = [t, a];
          return (
            "1e12" < S(f) && (f = 0.5),
            "1e12" < S(p) && (p = 0.5),
            0 < f &&
              f < 1 &&
              ((l = yt(t, e, r, i, n, s, a, o, f)), g.push(l.x), d.push(l.y)),
            0 < p &&
              p < 1 &&
              ((l = yt(t, e, r, i, n, s, a, o, p)), g.push(l.x), d.push(l.y)),
            (h = s - 2 * i + e - (o - 2 * s + i)),
            (c = e - i),
            (f =
              (-(u = 2 * (i - e) - 2 * (s - i)) + B.sqrt(u * u - 4 * h * c)) /
              2 /
              h),
            (p = (-u - B.sqrt(u * u - 4 * h * c)) / 2 / h),
            "1e12" < S(f) && (f = 0.5),
            "1e12" < S(p) && (p = 0.5),
            0 < f &&
              f < 1 &&
              ((l = yt(t, e, r, i, n, s, a, o, f)), g.push(l.x), d.push(l.y)),
            0 < p &&
              p < 1 &&
              ((l = yt(t, e, r, i, n, s, a, o, p)), g.push(l.x), d.push(l.y)),
            {
              min: { x: k[x](0, g), y: k[x](0, d) },
              max: { x: _[x](0, g), y: _[x](0, d) },
            }
          );
        }),
        Ct = (j._path2curve = ot(
          function (t, e) {
            var r = !e && ut(t);
            if (!e && r.curve) return bt(r.curve);
            function i(t, e, r) {
              var i, n;
              if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
              switch ((t[0] in { T: 1, Q: 1 } || (e.qx = e.qy = null), t[0])) {
                case "M":
                  (e.X = t[1]), (e.Y = t[2]);
                  break;
                case "A":
                  t = ["C"][M](wt[x](0, [e.x, e.y][M](t.slice(1))));
                  break;
                case "S":
                  (n =
                    "C" == r || "S" == r
                      ? ((i = 2 * e.x - e.bx), 2 * e.y - e.by)
                      : ((i = e.x), e.y)),
                    (t = ["C", i, n][M](t.slice(1)));
                  break;
                case "T":
                  "Q" == r || "T" == r
                    ? ((e.qx = 2 * e.x - e.qx), (e.qy = 2 * e.y - e.qy))
                    : ((e.qx = e.x), (e.qy = e.y)),
                    (t = ["C"][M](xt(e.x, e.y, e.qx, e.qy, t[1], t[2])));
                  break;
                case "Q":
                  (e.qx = t[1]),
                    (e.qy = t[2]),
                    (t = ["C"][M](xt(e.x, e.y, t[1], t[2], t[3], t[4])));
                  break;
                case "L":
                  t = ["C"][M](gt(e.x, e.y, t[1], t[2]));
                  break;
                case "H":
                  t = ["C"][M](gt(e.x, e.y, t[1], e.y));
                  break;
                case "V":
                  t = ["C"][M](gt(e.x, e.y, e.x, t[1]));
                  break;
                case "Z":
                  t = ["C"][M](gt(e.x, e.y, e.X, e.Y));
              }
              return t;
            }
            function n(t, e) {
              if (7 < t[e].length) {
                t[e].shift();
                for (var r = t[e]; r.length; )
                  t.splice(e++, 0, ["C"][M](r.splice(0, 6)));
                t.splice(e, 1), (c = _(a.length, (o && o.length) || 0));
              }
            }
            function s(t, e, r, i, n) {
              t &&
                e &&
                "M" == t[n][0] &&
                "M" != e[n][0] &&
                (e.splice(n, 0, ["M", i.x, i.y]),
                (r.bx = 0),
                (r.by = 0),
                (r.x = t[n][1]),
                (r.y = t[n][2]),
                (c = _(a.length, (o && o.length) || 0)));
            }
            for (
              var a = _t(t),
                o = e && _t(e),
                l = {
                  x: 0,
                  y: 0,
                  bx: 0,
                  by: 0,
                  X: 0,
                  Y: 0,
                  qx: null,
                  qy: null,
                },
                h = {
                  x: 0,
                  y: 0,
                  bx: 0,
                  by: 0,
                  X: 0,
                  Y: 0,
                  qx: null,
                  qy: null,
                },
                u = 0,
                c = _(a.length, (o && o.length) || 0);
              u < c;
              u++
            ) {
              (a[u] = i(a[u], l)),
                n(a, u),
                o && (o[u] = i(o[u], h)),
                o && n(o, u),
                s(a, o, l, h, u),
                s(o, a, h, l, u);
              var f = a[u],
                p = o && o[u],
                d = f.length,
                g = o && p.length;
              (l.x = f[d - 2]),
                (l.y = f[d - 1]),
                (l.bx = I(f[d - 4]) || l.x),
                (l.by = I(f[d - 3]) || l.y),
                (h.bx = o && (I(p[g - 4]) || h.x)),
                (h.by = o && (I(p[g - 3]) || h.y)),
                (h.x = o && p[g - 2]),
                (h.y = o && p[g - 1]);
            }
            return o || (r.curve = bt(a)), o ? [a, o] : a;
          },
          null,
          bt
        )),
        Bt =
          ((j._parseDots = ot(function (t) {
            for (var e = [], r = 0, i = t.length; r < i; r++) {
              var n = {},
                s = t[r].match(/^([^:]*):?([\d\.]*)/);
              if (((n.color = j.getRGB(s[1])), n.color.error)) return null;
              (n.color = n.color.hex),
                s[2] && (n.offset = s[2] + "%"),
                e.push(n);
            }
            for (r = 1, i = e.length - 1; r < i; r++)
              if (!e[r].offset) {
                for (
                  var a = I(e[r - 1].offset || 0), o = 0, l = r + 1;
                  l < i;
                  l++
                )
                  if (e[l].offset) {
                    o = e[l].offset;
                    break;
                  }
                o || ((o = 100), (l = i));
                for (var h = ((o = I(o)) - a) / (l - r + 1); r < l; r++)
                  (a += h), (e[r].offset = a + "%");
              }
            return e;
          })),
          (j._tear = function (t, e) {
            t == e.top && (e.top = t.prev),
              t == e.bottom && (e.bottom = t.next),
              t.next && (t.next.prev = t.prev),
              t.prev && (t.prev.next = t.next);
          })),
        St =
          ((j._tofront = function (t, e) {
            e.top !== t &&
              (Bt(t, e),
              (t.next = null),
              (t.prev = e.top),
              (e.top.next = t),
              (e.top = t));
          }),
          (j._toback = function (t, e) {
            e.bottom !== t &&
              (Bt(t, e),
              (t.next = e.bottom),
              (t.prev = null),
              (e.bottom.prev = t),
              (e.bottom = t));
          }),
          (j._insertafter = function (t, e, r) {
            Bt(t, r),
              e == r.top && (r.top = t),
              e.next && (e.next.prev = t),
              (t.next = e.next),
              ((t.prev = e).next = t);
          }),
          (j._insertbefore = function (t, e, r) {
            Bt(t, r),
              e == r.bottom && (r.bottom = t),
              e.prev && (e.prev.next = t),
              (t.prev = e.prev),
              ((e.prev = t).next = e);
          }),
          (j.toMatrix = function (t, e) {
            var r = vt(t),
              t = {
                _: { transform: "" },
                getBBox: function () {
                  return r;
                },
              };
            return Tt(t, e), t.matrix;
          })),
        Tt =
          ((j.transformPath = function (t, e) {
            return Q(t, St(t, e));
          }),
          (j._extractTransform = function (t, e) {
            if (null == e) return t._.transform;
            e = P(e).replace(/\.{3}|\u2026/g, t._.transform || "");
            var r,
              i = j.parseTransformString(e),
              n = 0,
              e = 0,
              s = 1,
              a = 1,
              o = t._,
              l = new Nt();
            if (((o.transform = i || []), i))
              for (var h = 0, u = i.length; h < u; h++) {
                var c,
                  f,
                  p,
                  d,
                  g,
                  x = i[h],
                  y = x.length,
                  m = P(x[0]).toLowerCase(),
                  v = x[0] != m,
                  b = v ? l.invert() : 0;
                "t" == m && 3 == y
                  ? v
                    ? ((c = b.x(0, 0)),
                      (f = b.y(0, 0)),
                      (p = b.x(x[1], x[2])),
                      (d = b.y(x[1], x[2])),
                      l.translate(p - c, d - f))
                    : l.translate(x[1], x[2])
                  : "r" == m
                  ? 2 == y
                    ? ((g = g || t.getBBox(1)),
                      l.rotate(x[1], g.x + g.width / 2, g.y + g.height / 2),
                      (n += x[1]))
                    : 4 == y &&
                      (v
                        ? ((p = b.x(x[2], x[3])),
                          (d = b.y(x[2], x[3])),
                          l.rotate(x[1], p, d))
                        : l.rotate(x[1], x[2], x[3]),
                      (n += x[1]))
                  : "s" == m
                  ? 2 == y || 3 == y
                    ? ((g = g || t.getBBox(1)),
                      l.scale(
                        x[1],
                        x[y - 1],
                        g.x + g.width / 2,
                        g.y + g.height / 2
                      ),
                      (s *= x[1]),
                      (a *= x[y - 1]))
                    : 5 == y &&
                      (v
                        ? ((p = b.x(x[3], x[4])),
                          (d = b.y(x[3], x[4])),
                          l.scale(x[1], x[2], p, d))
                        : l.scale(x[1], x[2], x[3], x[4]),
                      (s *= x[1]),
                      (a *= x[2]))
                  : "m" == m &&
                    7 == y &&
                    l.add(x[1], x[2], x[3], x[4], x[5], x[6]),
                  (o.dirtyT = 1),
                  (t.matrix = l);
              }
            (t.matrix = l),
              (o.sx = s),
              (o.sy = a),
              (o.deg = n),
              (o.dx = r = l.e),
              (o.dy = e = l.f),
              1 == s && 1 == a && !n && o.bbox
                ? ((o.bbox.x += +r), (o.bbox.y += +e))
                : (o.dirtyT = 1);
          })),
        At = (j._equaliseTransform = function (t, e) {
          (e = P(e).replace(/\.{3}|\u2026/g, t)),
            (t = j.parseTransformString(t) || []),
            (e = j.parseTransformString(e) || []);
          for (
            var r, i, n, s, a = _(t.length, e.length), o = [], l = [], h = 0;
            h < a;
            h++
          ) {
            if (
              ((n = t[h] || mt(e[h])),
              (s = e[h] || mt(n)),
              n[0] != s[0] ||
                ("r" == n[0].toLowerCase() && (n[2] != s[2] || n[3] != s[3])) ||
                ("s" == n[0].toLowerCase() && (n[3] != s[3] || n[4] != s[4])))
            )
              return;
            for (
              o[h] = [], l[h] = [], r = 0, i = _(n.length, s.length);
              r < i;
              r++
            )
              r in n && (o[h][r] = n[r]), r in s && (l[h][r] = s[r]);
          }
          return { from: o, to: l };
        });
      function Nt(t, e, r, i, n, s) {
        null != t
          ? ((this.a = +t),
            (this.b = +e),
            (this.c = +r),
            (this.d = +i),
            (this.e = +n),
            (this.f = +s))
          : ((this.a = 1),
            (this.b = 0),
            (this.c = 0),
            (this.d = 1),
            (this.e = 0),
            (this.f = 0));
      }
      (j._getContainer = function (t, e, r, i) {
        var n = null != i || j.is(t, "object") ? t : d.doc.getElementById(t);
        if (null != n)
          return n.tagName
            ? null == e
              ? {
                  container: n,
                  width: n.style.pixelWidth || n.offsetWidth,
                  height: n.style.pixelHeight || n.offsetHeight,
                }
              : { container: n, width: e, height: r }
            : { container: 1, x: t, y: e, width: r, height: i };
      }),
        (j.pathToRelative = o),
        (j._engine = {}),
        (j.path2curve = Ct),
        (j.matrix = function (t, e, r, i, n, s) {
          return new Nt(t, e, r, i, n, s);
        }),
        (function (t) {
          function i(t) {
            return t[0] * t[0] + t[1] * t[1];
          }
          function n(t) {
            var e = B.sqrt(i(t));
            t[0] && (t[0] /= e), t[1] && (t[1] /= e);
          }
          (t.add = function (t, e, r, i, n, s) {
            var a,
              o,
              l,
              h,
              u = [[], [], []],
              c = [
                [this.a, this.c, this.e],
                [this.b, this.d, this.f],
                [0, 0, 1],
              ],
              f = [
                [t, r, n],
                [e, i, s],
                [0, 0, 1],
              ];
            for (
              t &&
                t instanceof Nt &&
                (f = [
                  [t.a, t.c, t.e],
                  [t.b, t.d, t.f],
                  [0, 0, 1],
                ]),
                a = 0;
              a < 3;
              a++
            )
              for (o = 0; o < 3; o++) {
                for (l = h = 0; l < 3; l++) h += c[a][l] * f[l][o];
                u[a][o] = h;
              }
            (this.a = u[0][0]),
              (this.b = u[1][0]),
              (this.c = u[0][1]),
              (this.d = u[1][1]),
              (this.e = u[0][2]),
              (this.f = u[1][2]);
          }),
            (t.invert = function () {
              var t = this,
                e = t.a * t.d - t.b * t.c;
              return new Nt(
                t.d / e,
                -t.b / e,
                -t.c / e,
                t.a / e,
                (t.c * t.f - t.d * t.e) / e,
                (t.b * t.e - t.a * t.f) / e
              );
            }),
            (t.clone = function () {
              return new Nt(this.a, this.b, this.c, this.d, this.e, this.f);
            }),
            (t.translate = function (t, e) {
              this.add(1, 0, 0, 1, t, e);
            }),
            (t.scale = function (t, e, r, i) {
              null == e && (e = t),
                (r || i) && this.add(1, 0, 0, 1, r, i),
                this.add(t, 0, 0, e, 0, 0),
                (r || i) && this.add(1, 0, 0, 1, -r, -i);
            }),
            (t.rotate = function (t, e, r) {
              (t = j.rad(t)), (e = e || 0), (r = r || 0);
              var i = +B.cos(t).toFixed(9),
                t = +B.sin(t).toFixed(9);
              this.add(i, t, -t, i, e, r), this.add(1, 0, 0, 1, -e, -r);
            }),
            (t.x = function (t, e) {
              return t * this.a + e * this.c + this.e;
            }),
            (t.y = function (t, e) {
              return t * this.b + e * this.d + this.f;
            }),
            (t.get = function (t) {
              return +this[P.fromCharCode(97 + t)].toFixed(4);
            }),
            (t.toString = function () {
              return j.svg
                ? "matrix(" +
                    [
                      this.get(0),
                      this.get(1),
                      this.get(2),
                      this.get(3),
                      this.get(4),
                      this.get(5),
                    ].join() +
                    ")"
                : [
                    this.get(0),
                    this.get(2),
                    this.get(1),
                    this.get(3),
                    0,
                    0,
                  ].join();
            }),
            (t.toFilter = function () {
              return (
                "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                this.get(0) +
                ", M12=" +
                this.get(2) +
                ", M21=" +
                this.get(1) +
                ", M22=" +
                this.get(3) +
                ", Dx=" +
                this.get(4) +
                ", Dy=" +
                this.get(5) +
                ", sizingmethod='auto expand')"
              );
            }),
            (t.offset = function () {
              return [this.e.toFixed(4), this.f.toFixed(4)];
            }),
            (t.split = function () {
              var t = {};
              (t.dx = this.e), (t.dy = this.f);
              var e = [
                [this.a, this.c],
                [this.b, this.d],
              ];
              (t.scalex = B.sqrt(i(e[0]))),
                n(e[0]),
                (t.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1]),
                (e[1] = [
                  e[1][0] - e[0][0] * t.shear,
                  e[1][1] - e[0][1] * t.shear,
                ]),
                (t.scaley = B.sqrt(i(e[1]))),
                n(e[1]),
                (t.shear /= t.scaley);
              var r = -e[0][1],
                e = e[1][1];
              return (
                e < 0
                  ? ((t.rotate = j.deg(B.acos(e))),
                    r < 0 && (t.rotate = 360 - t.rotate))
                  : (t.rotate = j.deg(B.asin(r))),
                (t.isSimple = !(
                  +t.shear.toFixed(9) ||
                  (t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate)
                )),
                (t.isSuperSimple =
                  !+t.shear.toFixed(9) &&
                  t.scalex.toFixed(9) == t.scaley.toFixed(9) &&
                  !t.rotate),
                (t.noRotation = !+t.shear.toFixed(9) && !t.rotate),
                t
              );
            }),
            (t.toTransformString = function (t) {
              t = t || this[z]();
              return t.isSimple
                ? ((t.scalex = +t.scalex.toFixed(4)),
                  (t.scaley = +t.scaley.toFixed(4)),
                  (t.rotate = +t.rotate.toFixed(4)),
                  (t.dx || t.dy ? "t" + [t.dx, t.dy] : "") +
                    (1 != t.scalex || 1 != t.scaley
                      ? "s" + [t.scalex, t.scaley, 0, 0]
                      : "") +
                    (t.rotate ? "r" + [t.rotate, 0, 0] : ""))
                : "m" +
                    [
                      this.get(0),
                      this.get(1),
                      this.get(2),
                      this.get(3),
                      this.get(4),
                      this.get(5),
                    ];
            });
        })(Nt.prototype);
      o =
        navigator.userAgent.match(/Version\/(.*?)\s/) ||
        navigator.userAgent.match(/Chrome\/(\d+)/);
      ("Apple Computer, Inc." == navigator.vendor &&
        ((o && o[1] < 4) || "iP" == navigator.platform.slice(0, 2))) ||
      ("Google Inc." == navigator.vendor && o && o[1] < 8)
        ? (K.safari = function () {
            var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr(
              { stroke: "none" }
            );
            setTimeout(function () {
              t.remove();
            });
          })
        : (K.safari = function () {});
      function Et() {
        this.returnValue = !1;
      }
      function Lt() {
        return this.originalEvent.preventDefault();
      }
      function Mt() {
        this.cancelBubble = !0;
      }
      function Pt() {
        return this.originalEvent.stopPropagation();
      }
      function zt(t) {
        var e = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
          r = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
        return { x: t.clientX + r, y: t.clientY + e };
      }
      function Ft(t) {
        for (
          var e,
            r = t.clientX,
            i = t.clientY,
            n = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
            s = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft,
            a = It.length;
          a--;

        ) {
          if (((e = It[a]), g && t.touches)) {
            for (var o, l = t.touches.length; l--; )
              if ((o = t.touches[l]).identifier == e.el._drag.id) {
                (r = o.clientX),
                  (i = o.clientY),
                  (t.originalEvent || t).preventDefault();
                break;
              }
          } else t.preventDefault();
          var h,
            u = e.el.node,
            c = u.nextSibling,
            f = u.parentNode,
            p = u.style.display;
          d.win.opera && f.removeChild(u),
            (u.style.display = "none"),
            (h = e.el.paper.getElementByPoint(r, i)),
            (u.style.display = p),
            d.win.opera && (c ? f.insertBefore(u, c) : f.appendChild(u)),
            h && N("raphael.drag.over." + e.el.id, e.el, h),
            (r += s),
            (i += n),
            N(
              "raphael.drag.move." + e.el.id,
              e.move_scope || e.el,
              r - e.el._drag.x,
              i - e.el._drag.y,
              r,
              i,
              t
            );
        }
      }
      for (
        var Rt = d.doc.addEventListener
            ? function (s, t, a, o) {
                function e(t) {
                  var e = zt(t);
                  return a.call(o, t, e.x, e.y);
                }
                return (
                  s.addEventListener(t, e, !1),
                  g &&
                    h[t] &&
                    s.addEventListener(
                      h[t],
                      function (t) {
                        for (
                          var e = zt(t),
                            r = t,
                            i = 0,
                            n = t.targetTouches && t.targetTouches.length;
                          i < n;
                          i++
                        )
                          if (t.targetTouches[i].target == s) {
                            ((t = t.targetTouches[i]).originalEvent = r),
                              (t.preventDefault = Lt),
                              (t.stopPropagation = Pt);
                            break;
                          }
                        return a.call(o, t, e.x, e.y);
                      },
                      !1
                    ),
                  function () {
                    return (
                      s.removeEventListener(t, e, !1),
                      g && h[t] && s.removeEventListener(h[t], e, !1),
                      !0
                    );
                  }
                );
              }
            : d.doc.attachEvent
            ? function (t, e, i, n) {
                function r(t) {
                  t = t || d.win.event;
                  var e =
                      d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                    r =
                      d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft,
                    r = t.clientX + r,
                    e = t.clientY + e;
                  return (
                    (t.preventDefault = t.preventDefault || Et),
                    (t.stopPropagation = t.stopPropagation || Mt),
                    i.call(n, t, r, e)
                  );
                }
                t.attachEvent("on" + e, r);
                return function () {
                  return t.detachEvent("on" + e, r), !0;
                };
              }
            : void 0,
          It = [],
          jt = function (t) {
            j.unmousemove(Ft).unmouseup(jt);
            for (var e, r = It.length; r--; )
              ((e = It[r]).el._drag = {}),
                N(
                  "raphael.drag.end." + e.el.id,
                  e.end_scope || e.start_scope || e.move_scope || e.el,
                  t
                );
            It = [];
          },
          qt = (j.el = {}),
          Dt = l.length;
        Dt--;

      )
        !(function (i) {
          (j[i] = qt[i] =
            function (t, e) {
              return (
                j.is(t, "function") &&
                  ((this.events = this.events || []),
                  this.events.push({
                    name: i,
                    f: t,
                    unbind: Rt(
                      this.shape || this.node || d.doc,
                      i,
                      t,
                      e || this
                    ),
                  })),
                this
              );
            }),
            (j["un" + i] = qt["un" + i] =
              function (t) {
                for (var e = this.events || [], r = e.length; r--; )
                  e[r].name != i ||
                    (!j.is(t, "undefined") && e[r].f != t) ||
                    (e[r].unbind(),
                    e.splice(r, 1),
                    e.length || delete this.events);
                return this;
              });
        })(l[Dt]);
      (qt.data = function (t, e) {
        var r = (H[this.id] = H[this.id] || {});
        if (0 == arguments.length) return r;
        if (1 != arguments.length)
          return (r[t] = e), N("raphael.data.set." + this.id, this, e, t), this;
        if (j.is(t, "object")) {
          for (var i in t) t[L](i) && this.data(i, t[i]);
          return this;
        }
        return N("raphael.data.get." + this.id, this, r[t], t), r[t];
      }),
        (qt.removeData = function (t) {
          return (
            null == t ? (H[this.id] = {}) : H[this.id] && delete H[this.id][t],
            this
          );
        }),
        (qt.getData = function () {
          return tt(H[this.id] || {});
        }),
        (qt.hover = function (t, e, r, i) {
          return this.mouseover(t, r).mouseout(e, i || r);
        }),
        (qt.unhover = function (t, e) {
          return this.unmouseover(t).unmouseout(e);
        });
      var Vt = [];
      (qt.drag = function (o, l, h, u, c, f) {
        function t(t) {
          (t.originalEvent || t).preventDefault();
          var e = t.clientX,
            r = t.clientY,
            i = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
            n = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
          if (((this._drag.id = t.identifier), g && t.touches))
            for (var s, a = t.touches.length; a--; )
              if (
                ((s = t.touches[a]),
                (this._drag.id = s.identifier),
                s.identifier == this._drag.id)
              ) {
                (e = s.clientX), (r = s.clientY);
                break;
              }
          (this._drag.x = e + n),
            (this._drag.y = r + i),
            It.length || j.mousemove(Ft).mouseup(jt),
            It.push({ el: this, move_scope: u, start_scope: c, end_scope: f }),
            l && N.on("raphael.drag.start." + this.id, l),
            o && N.on("raphael.drag.move." + this.id, o),
            h && N.on("raphael.drag.end." + this.id, h),
            N(
              "raphael.drag.start." + this.id,
              c || u || this,
              t.clientX + n,
              t.clientY + i,
              t
            );
        }
        return (
          (this._drag = {}),
          Vt.push({ el: this, start: t }),
          this.mousedown(t),
          this
        );
      }),
        (qt.onDragOver = function (t) {
          t
            ? N.on("raphael.drag.over." + this.id, t)
            : N.unbind("raphael.drag.over." + this.id);
        }),
        (qt.undrag = function () {
          for (var t = Vt.length; t--; )
            Vt[t].el == this &&
              (this.unmousedown(Vt[t].start),
              Vt.splice(t, 1),
              N.unbind("raphael.drag.*." + this.id));
          Vt.length || j.unmousemove(Ft).unmouseup(jt), (It = []);
        }),
        (K.circle = function (t, e, r) {
          r = j._engine.circle(this, t || 0, e || 0, r || 0);
          return this.__set__ && this.__set__.push(r), r;
        }),
        (K.rect = function (t, e, r, i, n) {
          n = j._engine.rect(this, t || 0, e || 0, r || 0, i || 0, n || 0);
          return this.__set__ && this.__set__.push(n), n;
        }),
        (K.ellipse = function (t, e, r, i) {
          i = j._engine.ellipse(this, t || 0, e || 0, r || 0, i || 0);
          return this.__set__ && this.__set__.push(i), i;
        }),
        (K.path = function (t) {
          !t || j.is(t, u) || j.is(t[0], v) || (t += "");
          var e = j._engine.path(j.format[x](j, arguments), this);
          return this.__set__ && this.__set__.push(e), e;
        }),
        (K.image = function (t, e, r, i, n) {
          n = j._engine.image(
            this,
            t || "about:blank",
            e || 0,
            r || 0,
            i || 0,
            n || 0
          );
          return this.__set__ && this.__set__.push(n), n;
        }),
        (K.text = function (t, e, r) {
          r = j._engine.text(this, t || 0, e || 0, P(r));
          return this.__set__ && this.__set__.push(r), r;
        }),
        (K.set = function (t) {
          j.is(t, "array") ||
            (t = Array.prototype.splice.call(arguments, 0, arguments.length));
          var e = new re(t);
          return (
            this.__set__ && this.__set__.push(e),
            (e.paper = this),
            (e.type = "set"),
            e
          );
        }),
        (K.setStart = function (t) {
          this.__set__ = t || this.set();
        }),
        (K.setFinish = function (t) {
          var e = this.__set__;
          return delete this.__set__, e;
        }),
        (K.setSize = function (t, e) {
          return j._engine.setSize.call(this, t, e);
        }),
        (K.setViewBox = function (t, e, r, i, n) {
          return j._engine.setViewBox.call(this, t, e, r, i, n);
        }),
        (K.top = K.bottom = null),
        (K.raphael = j);
      function Ot() {
        return this.x + w + this.y + w + this.width + " × " + this.height;
      }
      (K.getElementByPoint = function (t, e) {
        var r,
          i,
          n,
          s,
          a,
          o = this.canvas,
          l = d.doc.elementFromPoint(t, e);
        if (
          (d.win.opera &&
            "svg" == l.tagName &&
            ((i = (r = o).getBoundingClientRect()),
            (n = r.ownerDocument),
            (s = n.body),
            (a = n.documentElement),
            (r = a.clientTop || s.clientTop || 0),
            (n = a.clientLeft || s.clientLeft || 0),
            (s = {
              y: i.top + (d.win.pageYOffset || a.scrollTop || s.scrollTop) - r,
              x:
                i.left +
                (d.win.pageXOffset || a.scrollLeft || s.scrollLeft) -
                n,
            }),
            ((n = o.createSVGRect()).x = t - s.x),
            (n.y = e - s.y),
            (n.width = n.height = 1),
            (n = o.getIntersectionList(n, null)).length &&
              (l = n[n.length - 1])),
          !l)
        )
          return null;
        for (; l.parentNode && l != o.parentNode && !l.raphael; )
          l = l.parentNode;
        return (
          l == this.canvas.parentNode && (l = o),
          (l = l && l.raphael ? this.getById(l.raphaelid) : null)
        );
      }),
        (K.getElementsByBBox = function (e) {
          var r = this.set();
          return (
            this.forEach(function (t) {
              j.isBBoxIntersect(t.getBBox(), e) && r.push(t);
            }),
            r
          );
        }),
        (K.getById = function (t) {
          for (var e = this.bottom; e; ) {
            if (e.id == t) return e;
            e = e.next;
          }
          return null;
        }),
        (K.forEach = function (t, e) {
          for (var r = this.bottom; r; ) {
            if (!1 === t.call(e, r)) return this;
            r = r.next;
          }
          return this;
        }),
        (K.getElementsByPoint = function (e, r) {
          var i = this.set();
          return (
            this.forEach(function (t) {
              t.isPointInside(e, r) && i.push(t);
            }),
            i
          );
        }),
        (qt.isPointInside = function (t, e) {
          var r = (this.realPath = Z[this.type](this));
          return (
            this.attr("transform") &&
              this.attr("transform").length &&
              (r = j.transformPath(r, this.attr("transform"))),
            j.isPointInsidePath(r, t, e)
          );
        }),
        (qt.getBBox = function (t) {
          if (this.removed) return {};
          var e = this._;
          return t
            ? ((!e.dirty && e.bboxwt) ||
                ((this.realPath = Z[this.type](this)),
                (e.bboxwt = vt(this.realPath)),
                (e.bboxwt.toString = Ot),
                (e.dirty = 0)),
              e.bboxwt)
            : ((!e.dirty && !e.dirtyT && e.bbox) ||
                ((!e.dirty && this.realPath) ||
                  ((e.bboxwt = 0), (this.realPath = Z[this.type](this))),
                (e.bbox = vt(Q(this.realPath, this.matrix))),
                (e.bbox.toString = Ot),
                (e.dirty = e.dirtyT = 0)),
              e.bbox);
        }),
        (qt.clone = function () {
          if (this.removed) return null;
          var t = this.paper[this.type]().attr(this.attr());
          return this.__set__ && this.__set__.push(t), t;
        }),
        (qt.glow = function (t) {
          if ("text" == this.type) return null;
          for (
            var e = {
                width:
                  ((t = t || {}).width || 10) +
                  (+this.attr("stroke-width") || 1),
                fill: t.fill || !1,
                opacity: t.opacity || 0.5,
                offsetx: t.offsetx || 0,
                offsety: t.offsety || 0,
                color: t.color || "#000",
              },
              r = e.width / 2,
              i = this.paper,
              n = i.set(),
              s = this.realPath || Z[this.type](this),
              s = this.matrix ? Q(s, this.matrix) : s,
              a = 1;
            a < 1 + r;
            a++
          )
            n.push(
              i
                .path(s)
                .attr({
                  stroke: e.color,
                  fill: e.fill ? e.color : "none",
                  "stroke-linejoin": "round",
                  "stroke-linecap": "round",
                  "stroke-width": +((e.width / r) * a).toFixed(3),
                  opacity: +(e.opacity / r).toFixed(3),
                })
            );
          return n.insertBefore(this).translate(e.offsetx, e.offsety);
        });
      function Yt(t, e, r, i, n, s, a, o, l) {
        return null == l
          ? ft(t, e, r, i, n, s, a, o)
          : j.findDotsAtSegment(
              t,
              e,
              r,
              i,
              n,
              s,
              a,
              o,
              (function (t, e, r, i, n, s, a, o, l) {
                if (!(l < 0 || ft(t, e, r, i, n, s, a, o) < l)) {
                  for (
                    var h = 0.5, u = 1 - h, c = ft(t, e, r, i, n, s, a, o, u);
                    0.01 < S(c - l);

                  )
                    c = ft(
                      t,
                      e,
                      r,
                      i,
                      n,
                      s,
                      a,
                      o,
                      (u += (c < l ? 1 : -1) * (h /= 2))
                    );
                  return u;
                }
              })(t, e, r, i, n, s, a, o, l)
            );
      }
      var o = function (p, d) {
          return function (t, e, r) {
            for (
              var i,
                n,
                s,
                a,
                o,
                l = "",
                h = {},
                u = 0,
                c = 0,
                f = (t = Ct(t)).length;
              c < f;
              c++
            ) {
              if ("M" == (s = t[c])[0]) (i = +s[1]), (n = +s[2]);
              else {
                if (
                  e <
                  u + (a = Yt(i, n, s[1], s[2], s[3], s[4], s[5], s[6]))
                ) {
                  if (d && !h.start) {
                    if (
                      ((l += [
                        "C" +
                          (o = Yt(
                            i,
                            n,
                            s[1],
                            s[2],
                            s[3],
                            s[4],
                            s[5],
                            s[6],
                            e - u
                          )).start.x,
                        o.start.y,
                        o.m.x,
                        o.m.y,
                        o.x,
                        o.y,
                      ]),
                      r)
                    )
                      return l;
                    (h.start = l),
                      (l = [
                        "M" + o.x,
                        o.y + "C" + o.n.x,
                        o.n.y,
                        o.end.x,
                        o.end.y,
                        s[5],
                        s[6],
                      ].join()),
                      (u += a),
                      (i = +s[5]),
                      (n = +s[6]);
                    continue;
                  }
                  if (!p && !d)
                    return {
                      x: (o = Yt(
                        i,
                        n,
                        s[1],
                        s[2],
                        s[3],
                        s[4],
                        s[5],
                        s[6],
                        e - u
                      )).x,
                      y: o.y,
                      alpha: o.alpha,
                    };
                }
                (u += a), (i = +s[5]), (n = +s[6]);
              }
              l += s.shift() + s;
            }
            return (
              (h.end = l),
              (o = p
                ? u
                : d
                ? h
                : j.findDotsAtSegment(
                    i,
                    n,
                    s[0],
                    s[1],
                    s[2],
                    s[3],
                    s[4],
                    s[5],
                    1
                  )).alpha && (o = { x: o.x, y: o.y, alpha: o.alpha }),
              o
            );
          };
        },
        Gt = o(1),
        Wt = o(),
        Xt = o(0, 1);
      (j.getTotalLength = Gt),
        (j.getPointAtLength = Wt),
        (j.getSubpath = function (t, e, r) {
          if (this.getTotalLength(t) - r < 1e-6) return Xt(t, e).end;
          r = Xt(t, r, 1);
          return e ? Xt(r, e).end : r;
        }),
        (qt.getTotalLength = function () {
          var t = this.getPath();
          if (t)
            return this.node.getTotalLength
              ? this.node.getTotalLength()
              : Gt(t);
        }),
        (qt.getPointAtLength = function (t) {
          var e = this.getPath();
          if (e) return Wt(e, t);
        }),
        (qt.getPath = function () {
          var t,
            e = j._getPath[this.type];
          if ("text" != this.type && "set" != this.type)
            return e && (t = e(this)), t;
        }),
        (qt.getSubpath = function (t, e) {
          var r = this.getPath();
          if (r) return j.getSubpath(r, t, e);
        });
      o = j.easing_formulas = {
        linear: function (t) {
          return t;
        },
        "<": function (t) {
          return m(t, 1.7);
        },
        ">": function (t) {
          return m(t, 0.48);
        },
        "<>": function (t) {
          var e = 0.48 - t / 1.04,
            r = B.sqrt(0.1734 + e * e),
            t = r - e,
            e = -r - e,
            e =
              m(S(t), 1 / 3) * (t < 0 ? -1 : 1) +
              m(S(e), 1 / 3) * (e < 0 ? -1 : 1) +
              0.5;
          return 3 * (1 - e) * e * e + e * e * e;
        },
        backIn: function (t) {
          return t * t * (2.70158 * t - 1.70158);
        },
        backOut: function (t) {
          return --t * t * (2.70158 * t + 1.70158) + 1;
        },
        elastic: function (t) {
          return t == !!t
            ? t
            : m(2, -10 * t) * B.sin((2 * T * (t - 0.075)) / 0.3) + 1;
        },
        bounce: function (t) {
          var e = 7.5625,
            r = 2.75,
            t =
              t < 1 / r
                ? e * t * t
                : t < 2 / r
                ? e * (t -= 1.5 / r) * t + 0.75
                : t < 2.5 / r
                ? e * (t -= 2.25 / r) * t + 0.9375
                : e * (t -= 2.625 / r) * t + 0.984375;
          return t;
        },
      };
      (o.easeIn = o["ease-in"] = o["<"]),
        (o.easeOut = o["ease-out"] = o[">"]),
        (o.easeInOut = o["ease-in-out"] = o["<>"]),
        (o["back-in"] = o.backIn),
        (o["back-out"] = o.backOut);
      var Ht = [],
        Ut =
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          t.msRequestAnimationFrame ||
          function (t) {
            setTimeout(t, 16);
          },
        $t = function () {
          for (var t = +new Date(), e = 0; e < Ht.length; e++) {
            var r = Ht[e];
            if (!r.el.removed && !r.paused) {
              var i,
                n = t - r.start,
                s = r.ms,
                a = r.easing,
                o = r.from,
                l = r.diff,
                h = r.to,
                u = (r.t, r.el),
                c = {},
                f = {};
              if (
                (r.initstatus
                  ? ((n =
                      ((r.initstatus * r.anim.top - r.prev) /
                        (r.percent - r.prev)) *
                      s),
                    (r.status = r.initstatus),
                    delete r.initstatus,
                    r.stop && Ht.splice(e--, 1))
                  : (r.status =
                      (r.prev + (r.percent - r.prev) * (n / s)) / r.anim.top),
                !(n < 0))
              )
                if (n < s) {
                  var p,
                    d = a(n / s);
                  for (p in o)
                    if (o[L](p)) {
                      switch (D[p]) {
                        case F:
                          b = +o[p] + d * s * l[p];
                          break;
                        case "colour":
                          b =
                            "rgb(" +
                            [
                              Zt(C(o[p].r + d * s * l[p].r)),
                              Zt(C(o[p].g + d * s * l[p].g)),
                              Zt(C(o[p].b + d * s * l[p].b)),
                            ].join(",") +
                            ")";
                          break;
                        case "path":
                          b = [];
                          for (var g = 0, x = o[p].length; g < x; g++) {
                            b[g] = [o[p][g][0]];
                            for (var y = 1, m = o[p][g].length; y < m; y++)
                              b[g][y] = +o[p][g][y] + d * s * l[p][g][y];
                            b[g] = b[g].join(w);
                          }
                          b = b.join(w);
                          break;
                        case "transform":
                          if (l[p].real)
                            for (b = [], g = 0, x = o[p].length; g < x; g++)
                              for (
                                b[g] = [o[p][g][0]], y = 1, m = o[p][g].length;
                                y < m;
                                y++
                              )
                                b[g][y] = o[p][g][y] + d * s * l[p][g][y];
                          else {
                            function v(t) {
                              return +o[p][t] + d * s * l[p][t];
                            }
                            var b = [["m", v(0), v(1), v(2), v(3), v(4), v(5)]];
                          }
                          break;
                        case "csv":
                          if ("clip-rect" == p)
                            for (b = [], g = 4; g--; )
                              b[g] = +o[p][g] + d * s * l[p][g];
                          break;
                        default:
                          var _ = [][M](o[p]);
                          for (
                            b = [], g = u.paper.customAttributes[p].length;
                            g--;

                          )
                            b[g] = +_[g] + d * s * l[p][g];
                      }
                      c[p] = b;
                    }
                  u.attr(c),
                    (function (t, e, r) {
                      setTimeout(function () {
                        N("raphael.anim.frame." + t, e, r);
                      });
                    })(u.id, u, r.anim);
                } else {
                  if (
                    (!(function (t, e, r) {
                      setTimeout(function () {
                        N("raphael.anim.frame." + e.id, e, r),
                          N("raphael.anim.finish." + e.id, e, r),
                          j.is(t, "function") && t.call(e);
                      });
                    })(r.callback, u, r.anim),
                    u.attr(h),
                    Ht.splice(e--, 1),
                    1 < r.repeat && !r.next)
                  ) {
                    for (i in h) h[L](i) && (f[i] = r.totalOrigin[i]);
                    r.el.attr(f),
                      Kt(
                        r.anim,
                        r.el,
                        r.anim.percents[0],
                        null,
                        r.totalOrigin,
                        r.repeat - 1
                      );
                  }
                  r.next &&
                    !r.stop &&
                    Kt(r.anim, r.el, r.next, null, r.totalOrigin, r.repeat);
                }
            }
          }
          j.svg && u && u.paper && u.paper.safari(), Ht.length && Ut($t);
        },
        Zt = function (t) {
          return 255 < t ? 255 : t < 0 ? 0 : t;
        };
      function Qt(t, e, r, i, n, s) {
        var a,
          l = 3 * e,
          h = 3 * (i - e) - l,
          u = 1 - l - h,
          o = 3 * r,
          c = 3 * (n - r) - o,
          f = 1 - o - c;
        function p(t) {
          return ((u * t + h) * t + l) * t;
        }
        return (
          (a = (function (t, e) {
            var r, i, n, s, a, o;
            for (n = t, o = 0; o < 8; o++) {
              if (((s = p(n) - t), S(s) < e)) return n;
              if (S((a = (3 * u * n + 2 * h) * n + l)) < 1e-6) break;
              n -= s / a;
            }
            if (((i = 1), (n = t) < (r = 0))) return r;
            if (i < n) return i;
            for (; r < i; ) {
              if (((s = p(n)), S(s - t) < e)) return n;
              s < t ? (r = n) : (i = n), (n = (i - r) / 2 + r);
            }
            return n;
          })(t, (a = 1 / (200 * s)))),
          ((f * a + c) * a + o) * a
        );
      }
      function Jt(t, e) {
        var r = [],
          i = {};
        if (((this.ms = e), (this.times = 1), t)) {
          for (var n in t) t[L](n) && ((i[I(n)] = t[n]), r.push(I(n)));
          r.sort(s);
        }
        (this.anim = i), (this.top = r[r.length - 1]), (this.percents = r);
      }
      function Kt(t, e, r, i, n, s) {
        r = I(r);
        var a,
          o,
          l,
          h,
          u,
          c = t.ms,
          f = {},
          p = {},
          d = {};
        if (i)
          for (x = 0, y = Ht.length; x < y; x++) {
            var g = Ht[x];
            if (g.el.id == e.id && g.anim == t) {
              g.percent != r ? (Ht.splice(x, 1), (l = 1)) : (o = g),
                e.attr(g.totalOrigin);
              break;
            }
          }
        else i = +p;
        for (var x = 0, y = t.percents.length; x < y; x++) {
          if (t.percents[x] == r || t.percents[x] > i * t.top) {
            (r = t.percents[x]),
              (u = t.percents[x - 1] || 0),
              (c = (c / t.top) * (r - u)),
              (h = t.percents[x + 1]),
              (a = t.anim[r]);
            break;
          }
          i && e.attr(t.anim[t.percents[x]]);
        }
        if (a) {
          if (o) (o.initstatus = i), (o.start = new Date() - o.ms * i);
          else {
            for (var m in a)
              if (a[L](m) && (D[L](m) || e.paper.customAttributes[L](m)))
                switch (
                  ((f[m] = e.attr(m)),
                  null == f[m] && (f[m] = q[m]),
                  (p[m] = a[m]),
                  D[m])
                ) {
                  case F:
                    d[m] = (p[m] - f[m]) / c;
                    break;
                  case "colour":
                    f[m] = j.getRGB(f[m]);
                    var v = j.getRGB(p[m]);
                    d[m] = {
                      r: (v.r - f[m].r) / c,
                      g: (v.g - f[m].g) / c,
                      b: (v.b - f[m].b) / c,
                    };
                    break;
                  case "path":
                    var b = Ct(f[m], p[m]),
                      _ = b[1];
                    for (
                      f[m] = b[0], d[m] = [], x = 0, y = f[m].length;
                      x < y;
                      x++
                    ) {
                      d[m][x] = [0];
                      for (var w = 1, k = f[m][x].length; w < k; w++)
                        d[m][x][w] = (_[x][w] - f[m][x][w]) / c;
                    }
                    break;
                  case "transform":
                    (v = e._), (b = At(v[m], p[m]));
                    if (b)
                      for (
                        f[m] = b.from,
                          p[m] = b.to,
                          d[m] = [],
                          d[m].real = !0,
                          x = 0,
                          y = f[m].length;
                        x < y;
                        x++
                      )
                        for (
                          d[m][x] = [f[m][x][0]], w = 1, k = f[m][x].length;
                          w < k;
                          w++
                        )
                          d[m][x][w] = (p[m][x][w] - f[m][x][w]) / c;
                    else {
                      (b = e.matrix || new Nt()),
                        (v = {
                          _: { transform: v.transform },
                          getBBox: function () {
                            return e.getBBox(1);
                          },
                        });
                      (f[m] = [b.a, b.b, b.c, b.d, b.e, b.f]),
                        Tt(v, p[m]),
                        (p[m] = v._.transform),
                        (d[m] = [
                          (v.matrix.a - b.a) / c,
                          (v.matrix.b - b.b) / c,
                          (v.matrix.c - b.c) / c,
                          (v.matrix.d - b.d) / c,
                          (v.matrix.e - b.e) / c,
                          (v.matrix.f - b.f) / c,
                        ]);
                    }
                    break;
                  case "csv":
                    var C = P(a[m])[z](E),
                      B = P(f[m])[z](E);
                    if ("clip-rect" == m)
                      for (f[m] = B, d[m] = [], x = B.length; x--; )
                        d[m][x] = (C[x] - f[m][x]) / c;
                    p[m] = C;
                    break;
                  default:
                    for (
                      C = [][M](a[m]),
                        B = [][M](f[m]),
                        d[m] = [],
                        x = e.paper.customAttributes[m].length;
                      x--;

                    )
                      d[m][x] = ((C[x] || 0) - (B[x] || 0)) / c;
                }
            var S,
              T = a.easing,
              A = j.easing_formulas[T];
            if (
              ((A =
                A ||
                ((A = P(T).match(R)) && 5 == A.length
                  ? ((S = A),
                    function (t) {
                      return Qt(t, +S[1], +S[2], +S[3], +S[4], c);
                    })
                  : U)),
              (T = a.start || t.start || +new Date()),
              (g = {
                anim: t,
                percent: r,
                timestamp: T,
                start: T + (t.del || 0),
                status: 0,
                initstatus: i || 0,
                stop: !1,
                ms: c,
                easing: A,
                from: f,
                diff: d,
                to: p,
                el: e,
                callback: a.callback,
                prev: u,
                next: h,
                repeat: s || t.times,
                origin: e.attr(),
                totalOrigin: n,
              }),
              Ht.push(g),
              i &&
                !o &&
                !l &&
                ((g.stop = !0), (g.start = new Date() - c * i), 1 == Ht.length))
            )
              return $t();
            l && (g.start = new Date() - g.ms * i), 1 == Ht.length && Ut($t);
          }
          N("raphael.anim.start." + e.id, e, t);
        }
      }
      function te(t) {
        for (var e = 0; e < Ht.length; e++)
          Ht[e].el.paper == t && Ht.splice(e--, 1);
      }
      (qt.animateWith = function (t, e, r, i, n, s) {
        var a = this;
        if (a.removed) return s && s.call(a), a;
        s = r instanceof Jt ? r : j.animation(r, i, n, s);
        Kt(s, a, s.percents[0], null, a.attr());
        for (var o = 0, l = Ht.length; o < l; o++)
          if (Ht[o].anim == e && Ht[o].el == t) {
            Ht[l - 1].start = Ht[o].start;
            break;
          }
        return a;
      }),
        (qt.onAnimation = function (t) {
          return (
            t
              ? N.on("raphael.anim.frame." + this.id, t)
              : N.unbind("raphael.anim.frame." + this.id),
            this
          );
        }),
        (Jt.prototype.delay = function (t) {
          var e = new Jt(this.anim, this.ms);
          return (e.times = this.times), (e.del = +t || 0), e;
        }),
        (Jt.prototype.repeat = function (t) {
          var e = new Jt(this.anim, this.ms);
          return (e.del = this.del), (e.times = B.floor(_(t, 0)) || 1), e;
        }),
        (j.animation = function (t, e, r, i) {
          if (t instanceof Jt) return t;
          (!j.is(r, "function") && r) || ((i = i || r || null), (r = null)),
            (e = +e || 0);
          var n,
            s,
            a = {};
          for (s in (t = Object(t)))
            t[L](s) &&
              I(s) != s &&
              I(s) + "%" != s &&
              ((n = !0), (a[s] = t[s]));
          return n
            ? (r && (a.easing = r),
              i && (a.callback = i),
              new Jt({ 100: a }, e))
            : new Jt(t, e);
        }),
        (qt.animate = function (t, e, r, i) {
          var n = this;
          if (n.removed) return i && i.call(n), n;
          i = t instanceof Jt ? t : j.animation(t, e, r, i);
          return Kt(i, n, i.percents[0], null, n.attr()), n;
        }),
        (qt.setTime = function (t, e) {
          return t && null != e && this.status(t, k(e, t.ms) / t.ms), this;
        }),
        (qt.status = function (t, e) {
          var r,
            i,
            n = [],
            s = 0;
          if (null != e) return Kt(t, this, -1, k(e, 1)), this;
          for (r = Ht.length; s < r; s++)
            if ((i = Ht[s]).el.id == this.id && (!t || i.anim == t)) {
              if (t) return i.status;
              n.push({ anim: i.anim, status: i.status });
            }
          return t ? 0 : n;
        }),
        (qt.pause = function (t) {
          for (var e = 0; e < Ht.length; e++)
            Ht[e].el.id != this.id ||
              (t && Ht[e].anim != t) ||
              (!1 !== N("raphael.anim.pause." + this.id, this, Ht[e].anim) &&
                (Ht[e].paused = !0));
          return this;
        }),
        (qt.resume = function (t) {
          for (var e, r = 0; r < Ht.length; r++)
            Ht[r].el.id != this.id ||
              (t && Ht[r].anim != t) ||
              ((e = Ht[r]),
              !1 !== N("raphael.anim.resume." + this.id, this, e.anim) &&
                (delete e.paused, this.status(e.anim, e.status)));
          return this;
        }),
        (qt.stop = function (t) {
          for (var e = 0; e < Ht.length; e++)
            Ht[e].el.id != this.id ||
              (t && Ht[e].anim != t) ||
              (!1 !== N("raphael.anim.stop." + this.id, this, Ht[e].anim) &&
                Ht.splice(e--, 1));
          return this;
        }),
        N.on("raphael.remove", te),
        N.on("raphael.clear", te),
        (qt.toString = function () {
          return "Raphaël’s object";
        });
      var ee,
        re = function (t) {
          if (((this.items = []), (this.length = 0), (this.type = "set"), t))
            for (var e = 0, r = t.length; e < r; e++)
              !t[e] ||
                (t[e].constructor != qt.constructor &&
                  t[e].constructor != re) ||
                ((this[this.items.length] = this.items[this.items.length] =
                  t[e]),
                this.length++);
        },
        ie = re.prototype;
      for (ee in ((ie.push = function () {
        for (var t, e, r = 0, i = arguments.length; r < i; r++)
          !(t = arguments[r]) ||
            (t.constructor != qt.constructor && t.constructor != re) ||
            ((this[(e = this.items.length)] = this.items[e] = t),
            this.length++);
        return this;
      }),
      (ie.pop = function () {
        return this.length && delete this[this.length--], this.items.pop();
      }),
      (ie.forEach = function (t, e) {
        for (var r = 0, i = this.items.length; r < i; r++)
          if (!1 === t.call(e, this.items[r], r)) return this;
        return this;
      }),
      qt))
        qt[L](ee) &&
          (ie[ee] = (function (r) {
            return function () {
              var e = arguments;
              return this.forEach(function (t) {
                t[r][x](t, e);
              });
            };
          })(ee));
      (ie.attr = function (t, e) {
        if (t && j.is(t, v) && j.is(t[0], "object"))
          for (var r = 0, i = t.length; r < i; r++) this.items[r].attr(t[r]);
        else
          for (var n = 0, s = this.items.length; n < s; n++)
            this.items[n].attr(t, e);
        return this;
      }),
        (ie.clear = function () {
          for (; this.length; ) this.pop();
        }),
        (ie.splice = function (t, e, r) {
          (t = t < 0 ? _(this.length + t, 0) : t),
            (e = _(0, k(this.length - t, e)));
          for (var i = [], n = [], s = [], a = 2; a < arguments.length; a++)
            s.push(arguments[a]);
          for (a = 0; a < e; a++) n.push(this[t + a]);
          for (; a < this.length - t; a++) i.push(this[t + a]);
          var o = s.length;
          for (a = 0; a < o + i.length; a++)
            this.items[t + a] = this[t + a] = a < o ? s[a] : i[a - o];
          for (a = this.items.length = this.length -= e - o; this[a]; )
            delete this[a++];
          return new re(n);
        }),
        (ie.exclude = function (t) {
          for (var e = 0, r = this.length; e < r; e++)
            if (this[e] == t) return this.splice(e, 1), !0;
        }),
        (ie.animate = function (t, e, r, i) {
          (!j.is(r, "function") && r) || (i = r || null);
          var n,
            s = this.items.length,
            a = s,
            o = this;
          if (!s) return this;
          i &&
            (n = function () {
              --s || i.call(o);
            }),
            (r = j.is(r, u) ? r : n);
          for (
            var l = j.animation(t, e, r, n), h = this.items[--a].animate(l);
            a--;

          )
            this.items[a] &&
              !this.items[a].removed &&
              this.items[a].animateWith(h, l, l),
              (this.items[a] && !this.items[a].removed) || s--;
          return this;
        }),
        (ie.insertAfter = function (t) {
          for (var e = this.items.length; e--; ) this.items[e].insertAfter(t);
          return this;
        }),
        (ie.getBBox = function () {
          for (
            var t, e = [], r = [], i = [], n = [], s = this.items.length;
            s--;

          )
            this.items[s].removed ||
              ((t = this.items[s].getBBox()),
              e.push(t.x),
              r.push(t.y),
              i.push(t.x + t.width),
              n.push(t.y + t.height));
          return {
            x: (e = k[x](0, e)),
            y: (r = k[x](0, r)),
            x2: (i = _[x](0, i)),
            y2: (n = _[x](0, n)),
            width: i - e,
            height: n - r,
          };
        }),
        (ie.clone = function (t) {
          t = this.paper.set();
          for (var e = 0, r = this.items.length; e < r; e++)
            t.push(this.items[e].clone());
          return t;
        }),
        (ie.toString = function () {
          return "Raphaël‘s set";
        }),
        (ie.glow = function (r) {
          var i = this.paper.set();
          return (
            this.forEach(function (t, e) {
              t = t.glow(r);
              null != t &&
                t.forEach(function (t, e) {
                  i.push(t);
                });
            }),
            i
          );
        }),
        (ie.isPointInside = function (e, r) {
          var i = !1;
          return (
            this.forEach(function (t) {
              if (t.isPointInside(e, r))
                return console.log("runned"), !(i = !0);
            }),
            i
          );
        }),
        (j.registerFont = function (t) {
          if (!t.face) return t;
          this.fonts = this.fonts || {};
          var e,
            r = { w: t.w, face: {}, glyphs: {} },
            i = t.face["font-family"];
          for (e in t.face) t.face[L](e) && (r.face[e] = t.face[e]);
          if (
            (this.fonts[i] ? this.fonts[i].push(r) : (this.fonts[i] = [r]),
            !t.svg)
          )
            for (var n in ((r.face["units-per-em"] = b(
              t.face["units-per-em"],
              10
            )),
            t.glyphs))
              if (t.glyphs[L](n)) {
                var s = t.glyphs[n];
                if (
                  ((r.glyphs[n] = {
                    w: s.w,
                    k: {},
                    d:
                      s.d &&
                      "M" +
                        s.d.replace(/[mlcxtrv]/g, function (t) {
                          return (
                            { l: "L", c: "C", x: "z", t: "m", r: "l", v: "c" }[
                              t
                            ] || "M"
                          );
                        }) +
                        "z",
                  }),
                  s.k)
                )
                  for (var a in s.k) s[L](a) && (r.glyphs[n].k[a] = s.k[a]);
              }
          return t;
        }),
        (K.getFont = function (t, e, r, i) {
          if (
            ((i = i || "normal"),
            (r = r || "normal"),
            (e =
              +e ||
              { normal: 400, bold: 700, lighter: 300, bolder: 800 }[e] ||
              400),
            j.fonts)
          ) {
            var n,
              s = j.fonts[t];
            if (!s) {
              var a,
                o = new RegExp(
                  "(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, "") + "(\\s|$)",
                  "i"
                );
              for (a in j.fonts)
                if (j.fonts[L](a) && o.test(a)) {
                  s = j.fonts[a];
                  break;
                }
            }
            if (s)
              for (
                var l = 0, h = s.length;
                l < h &&
                ((n = s[l]).face["font-weight"] != e ||
                  (n.face["font-style"] != r && n.face["font-style"]) ||
                  n.face["font-stretch"] != i);
                l++
              );
            return n;
          }
        }),
        (K.print = function (t, e, r, i, n, s, a, o) {
          (s = s || "middle"),
            (a = _(k(a || 0, 1), -1)),
            (o = _(k(o || 1, 3), 1));
          var l,
            h = P(r)[z](""),
            u = 0,
            c = 0,
            f = "";
          if ((j.is(i, "string") && (i = this.getFont(i)), i)) {
            l = (n || 16) / i.face["units-per-em"];
            for (
              var p,
                d,
                n = i.face.bbox[z](E),
                g = +n[0],
                x = n[3] - n[1],
                y = 0,
                m = +n[1] + ("baseline" == s ? x + +i.face.descent : x / 2),
                v = 0,
                b = h.length;
              v < b;
              v++
            )
              "\n" == h[v]
                ? ((c = d = u = 0), (y += x * o))
                : ((p = (c && i.glyphs[h[v - 1]]) || {}),
                  (d = i.glyphs[h[v]]),
                  (u += c
                    ? (p.w || i.w) + ((p.k && p.k[h[v]]) || 0) + i.w * a
                    : 0),
                  (c = 1)),
                d &&
                  d.d &&
                  (f += j.transformPath(d.d, [
                    "t",
                    u * l,
                    y * l,
                    "s",
                    l,
                    l,
                    g,
                    m,
                    "t",
                    (t - g) / l,
                    (e - m) / l,
                  ]));
          }
          return this.path(f).attr({ fill: "#000", stroke: "none" });
        }),
        (K.add = function (t) {
          if (j.is(t, "array"))
            for (var e, r = this.set(), i = 0, n = t.length; i < n; i++)
              (e = t[i] || {}), a[L](e.type) && r.push(this[e.type]().attr(e));
          return r;
        }),
        (j.format = function (t, e) {
          var r = j.is(e, v) ? [0][M](e) : arguments;
          return (
            t &&
              j.is(t, u) &&
              r.length - 1 &&
              (t = t.replace(n, function (t, e) {
                return null == r[++e] ? "" : r[e];
              })),
            t || ""
          );
        }),
        (j.fullfill = (function () {
          var e = /\{([^\}]+)\}/g,
            n = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g;
          return function (t, i) {
            return String(t).replace(e, function (t, e) {
              return (
                (r = t),
                (s = t = i),
                e.replace(n, function (t, e, r, i, n) {
                  (e = e || i),
                    s &&
                      (e in s && (s = s[e]),
                      "function" == typeof s && n && (s = s()));
                }),
                (s = (null == s || s == t ? r : s) + "")
              );
              var r, s;
            });
          };
        })()),
        (j.ninja = function () {
          return r.was ? (d.win.Raphael = r.is) : delete t.Raphael, j;
        }),
        (j.st = ie),
        (function (e, t, r) {
          null == e.readyState &&
            e.addEventListener &&
            (e.addEventListener(
              t,
              (r = function () {
                e.removeEventListener(t, r, !1), (e.readyState = "complete");
              }),
              !1
            ),
            (e.readyState = "loading")),
            (function t() {
              /in/.test(e.readyState)
                ? setTimeout(t, 9)
                : j.eve("raphael.DOMload");
            })();
        })(document, "DOMContentLoaded"),
        N.on("raphael.DOMload", function () {
          i = !0;
        }),
        (function () {
          if (j.svg) {
            var k = "hasOwnProperty",
              C = String,
              g = parseFloat,
              x = parseInt,
              y = Math,
              m = y.max,
              v = y.abs,
              b = y.pow,
              _ = /[, ]+/,
              f = j.eve,
              w = "http://www.w3.org/1999/xlink",
              B = {
                block: "M5,0 0,2.5 5,5z",
                classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                open: "M6,1 1,3.5 6,6",
                oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z",
              },
              S = {};
            j.toString = function () {
              return (
                "Your browser supports SVG.\nYou are running Raphaël " +
                this.version
              );
            };
            function T(t, e) {
              var i = "linear",
                r = t.id + e,
                n = 0.5,
                s = 0.5,
                a = t.node,
                o = t.paper,
                l = a.style,
                h = j._g.doc.getElementById(r);
              if (!h) {
                if (
                  ((e = (e = C(e).replace(
                    j._radial_gradient,
                    function (t, e, r) {
                      return (
                        (i = "radial"),
                        e &&
                          r &&
                          ((n = g(e)),
                          (r = 2 * (0.5 < (s = g(r))) - 1),
                          0.25 < b(n - 0.5, 2) + b(s - 0.5, 2) &&
                            (s = y.sqrt(0.25 - b(n - 0.5, 2)) * r + 0.5) &&
                            0.5 != s &&
                            (s = s.toFixed(5) - 1e-5 * r)),
                        ""
                      );
                    }
                  )).split(/\s*\-\s*/)),
                  "linear" == i)
                ) {
                  var u = e.shift(),
                    u = -g(u);
                  if (isNaN(u)) return null;
                  var c = [0, 0, y.cos(j.rad(u)), y.sin(j.rad(u))],
                    u = 1 / (m(v(c[2]), v(c[3])) || 1);
                  (c[2] *= u),
                    (c[3] *= u),
                    c[2] < 0 && ((c[0] = -c[2]), (c[2] = 0)),
                    c[3] < 0 && ((c[1] = -c[3]), (c[3] = 0));
                }
                var f = j._parseDots(e);
                if (!f) return null;
                if (
                  ((r = r.replace(/[\(\)\s,\xb0#]/g, "_")),
                  t.gradient &&
                    r != t.gradient.id &&
                    (o.defs.removeChild(t.gradient), delete t.gradient),
                  !t.gradient)
                ) {
                  (h = L(i + "Gradient", { id: r })),
                    (t.gradient = h),
                    L(
                      h,
                      "radial" == i
                        ? { fx: n, fy: s }
                        : {
                            x1: c[0],
                            y1: c[1],
                            x2: c[2],
                            y2: c[3],
                            gradientTransform: t.matrix.invert(),
                          }
                    ),
                    o.defs.appendChild(h);
                  for (var p = 0, d = f.length; p < d; p++)
                    h.appendChild(
                      L("stop", {
                        offset: f[p].offset || (p ? "100%" : "0%"),
                        "stop-color": f[p].color || "#fff",
                      })
                    );
                }
              }
              return (
                L(a, {
                  fill: "url(#" + r + ")",
                  opacity: 1,
                  "fill-opacity": 1,
                }),
                (l.fill = ""),
                (l.opacity = 1),
                (l.fillOpacity = 1)
              );
            }
            function A(t) {
              var e = t.getBBox(1);
              L(t.pattern, {
                patternTransform:
                  t.matrix.invert() + " translate(" + e.x + "," + e.y + ")",
              });
            }
            function N(t, e, r) {
              if ("path" == t.type) {
                for (
                  var i,
                    n,
                    s,
                    a,
                    o,
                    l,
                    h,
                    u,
                    c,
                    f = C(e).toLowerCase().split("-"),
                    p = t.paper,
                    d = r ? "end" : "start",
                    g = t.node,
                    x = t.attrs,
                    y = x["stroke-width"],
                    m = f.length,
                    v = "classic",
                    b = 3,
                    _ = 3,
                    w = 5;
                  m--;

                )
                  switch (f[m]) {
                    case "block":
                    case "classic":
                    case "oval":
                    case "diamond":
                    case "open":
                    case "none":
                      v = f[m];
                      break;
                    case "wide":
                      _ = 5;
                      break;
                    case "narrow":
                      _ = 2;
                      break;
                    case "long":
                      b = 5;
                      break;
                    case "short":
                      b = 2;
                  }
                for (u in ((u =
                  "open" == v
                    ? ((b += 2),
                      (_ += 2),
                      (w += 2),
                      (l = 1),
                      (n = r ? 4 : 1),
                      { fill: "none", stroke: x.stroke })
                    : ((n = l = b / 2), { fill: x.stroke, stroke: "none" })),
                t._.arrows
                  ? r
                    ? (t._.arrows.endPath && S[t._.arrows.endPath]--,
                      t._.arrows.endMarker && S[t._.arrows.endMarker]--)
                    : (t._.arrows.startPath && S[t._.arrows.startPath]--,
                      t._.arrows.startMarker && S[t._.arrows.startMarker]--)
                  : (t._.arrows = {}),
                "none" != v
                  ? ((s = "raphael-marker-" + v),
                    (a = "raphael-marker-" + d + v + b + _),
                    j._g.doc.getElementById(s)
                      ? S[s]++
                      : (p.defs.appendChild(
                          L(L("path"), {
                            "stroke-linecap": "round",
                            d: B[v],
                            id: s,
                          })
                        ),
                        (S[s] = 1)),
                    (o = j._g.doc.getElementById(a))
                      ? (S[a]++, (h = o.getElementsByTagName("use")[0]))
                      : ((o = L(L("marker"), {
                          id: a,
                          markerHeight: _,
                          markerWidth: b,
                          orient: "auto",
                          refX: n,
                          refY: _ / 2,
                        })),
                        (h = L(L("use"), {
                          "xlink:href": "#" + s,
                          transform:
                            (r
                              ? "rotate(180 " + b / 2 + " " + _ / 2 + ") "
                              : "") +
                            "scale(" +
                            b / w +
                            "," +
                            _ / w +
                            ")",
                          "stroke-width": (1 / ((b / w + _ / w) / 2)).toFixed(
                            4
                          ),
                        })),
                        o.appendChild(h),
                        p.defs.appendChild(o),
                        (S[a] = 1)),
                    L(h, u),
                    (l = l * ("diamond" != v && "oval" != v)),
                    (h = r
                      ? ((i = t._.arrows.startdx * y || 0),
                        j.getTotalLength(x.path) - l * y)
                      : ((i = l * y),
                        j.getTotalLength(x.path) -
                          (t._.arrows.enddx * y || 0))),
                    ((u = {})["marker-" + d] = "url(#" + a + ")"),
                    (h || i) && (u.d = j.getSubpath(x.path, i, h)),
                    L(g, u),
                    (t._.arrows[d + "Path"] = s),
                    (t._.arrows[d + "Marker"] = a),
                    (t._.arrows[d + "dx"] = l),
                    (t._.arrows[d + "Type"] = v),
                    (t._.arrows[d + "String"] = e))
                  : ((h = r
                      ? ((i = t._.arrows.startdx * y || 0),
                        j.getTotalLength(x.path) - i)
                      : ((i = 0),
                        j.getTotalLength(x.path) -
                          (t._.arrows.enddx * y || 0))),
                    t._.arrows[d + "Path"] &&
                      L(g, { d: j.getSubpath(x.path, i, h) }),
                    delete t._.arrows[d + "Path"],
                    delete t._.arrows[d + "Marker"],
                    delete t._.arrows[d + "dx"],
                    delete t._.arrows[d + "Type"],
                    delete t._.arrows[d + "String"]),
                S))
                  !S[k](u) ||
                    S[u] ||
                    ((c = j._g.doc.getElementById(u)) &&
                      c.parentNode.removeChild(c));
              }
            }
            function E(t, e, r) {
              if ((e = l[C(e).toLowerCase()])) {
                for (
                  var i = t.attrs["stroke-width"] || "1",
                    n =
                      { round: i, square: i, butt: 0 }[
                        t.attrs["stroke-linecap"] || r["stroke-linecap"]
                      ] || 0,
                    s = [],
                    a = e.length;
                  a--;

                )
                  s[a] = e[a] * i + (a % 2 ? 1 : -1) * n;
                L(t.node, { "stroke-dasharray": s.join(",") });
              }
            }
            function p(t, e) {
              var r,
                i = t.node,
                n = t.attrs,
                s = i.style.visibility;
              for (r in ((i.style.visibility = "hidden"), e))
                if (e[k](r) && j._availableAttrs[k](r)) {
                  var a = e[r];
                  switch (((n[r] = a), r)) {
                    case "blur":
                      t.blur(a);
                      break;
                    case "href":
                    case "title":
                      var o = L("title"),
                        l = j._g.doc.createTextNode(a);
                      o.appendChild(l), i.appendChild(o);
                      break;
                    case "target":
                      var h = i.parentNode;
                      "a" != h.tagName.toLowerCase() &&
                        ((o = L("a")),
                        h.insertBefore(o, i),
                        o.appendChild(i),
                        (h = o)),
                        "target" == r
                          ? h.setAttributeNS(
                              w,
                              "show",
                              "blank" == a ? "new" : a
                            )
                          : h.setAttributeNS(w, r, a);
                      break;
                    case "cursor":
                      i.style.cursor = a;
                      break;
                    case "transform":
                      t.transform(a);
                      break;
                    case "arrow-start":
                      N(t, a);
                      break;
                    case "arrow-end":
                      N(t, a, 1);
                      break;
                    case "clip-rect":
                      var u,
                        l = C(a).split(_);
                      4 == l.length &&
                        (t.clip &&
                          t.clip.parentNode.parentNode.removeChild(
                            t.clip.parentNode
                          ),
                        (h = L("clipPath")),
                        (u = L("rect")),
                        (h.id = j.createUUID()),
                        L(u, { x: l[0], y: l[1], width: l[2], height: l[3] }),
                        h.appendChild(u),
                        t.paper.defs.appendChild(h),
                        L(i, { "clip-path": "url(#" + h.id + ")" }),
                        (t.clip = u)),
                        a ||
                          ((u = i.getAttribute("clip-path")) &&
                            ((d = j._g.doc.getElementById(
                              u.replace(/(^url\(#|\)$)/g, "")
                            )) && d.parentNode.removeChild(d),
                            L(i, { "clip-path": "" }),
                            delete t.clip));
                      break;
                    case "path":
                      "path" == t.type &&
                        (L(i, {
                          d: a ? (n.path = j._pathToAbsolute(a)) : "M0,0",
                        }),
                        (t._.dirty = 1),
                        t._.arrows &&
                          ("startString" in t._.arrows &&
                            N(t, t._.arrows.startString),
                          "endString" in t._.arrows &&
                            N(t, t._.arrows.endString, 1)));
                      break;
                    case "width":
                      if ((i.setAttribute(r, a), (t._.dirty = 1), !n.fx)) break;
                      (r = "x"), (a = n.x);
                    case "x":
                      n.fx && (a = -n.x - (n.width || 0));
                    case "rx":
                      if ("rx" == r && "rect" == t.type) break;
                    case "cx":
                      i.setAttribute(r, a), t.pattern && A(t), (t._.dirty = 1);
                      break;
                    case "height":
                      if ((i.setAttribute(r, a), (t._.dirty = 1), !n.fy)) break;
                      (r = "y"), (a = n.y);
                    case "y":
                      n.fy && (a = -n.y - (n.height || 0));
                    case "ry":
                      if ("ry" == r && "rect" == t.type) break;
                    case "cy":
                      i.setAttribute(r, a), t.pattern && A(t), (t._.dirty = 1);
                      break;
                    case "r":
                      "rect" == t.type
                        ? L(i, { rx: a, ry: a })
                        : i.setAttribute(r, a),
                        (t._.dirty = 1);
                      break;
                    case "src":
                      "image" == t.type && i.setAttributeNS(w, "href", a);
                      break;
                    case "stroke-width":
                      (1 == t._.sx && 1 == t._.sy) ||
                        (a /= m(v(t._.sx), v(t._.sy)) || 1),
                        t.paper._vbSize && (a *= t.paper._vbSize),
                        i.setAttribute(r, a),
                        n["stroke-dasharray"] && E(t, n["stroke-dasharray"], e),
                        t._.arrows &&
                          ("startString" in t._.arrows &&
                            N(t, t._.arrows.startString),
                          "endString" in t._.arrows &&
                            N(t, t._.arrows.endString, 1));
                      break;
                    case "stroke-dasharray":
                      E(t, a, e);
                      break;
                    case "fill":
                      if (C(a).match(j._ISURL)) {
                        L(i, { fill: a });
                        break;
                      }
                      var c,
                        f,
                        p = j.getRGB(a);
                      if (p.error) {
                        if (
                          ("circle" == t.type ||
                            "ellipse" == t.type ||
                            "r" != C(a).charAt()) &&
                          T(t, a)
                        ) {
                          !("opacity" in n || "fill-opacity" in n) ||
                            ((c = j._g.doc.getElementById(
                              i.getAttribute("fill").replace(/^url\(#|\)$/g, "")
                            )) &&
                              ((f = c.getElementsByTagName("stop")),
                              L(f[f.length - 1], {
                                "stop-opacity":
                                  ("opacity" in n ? n.opacity : 1) *
                                  ("fill-opacity" in n ? n["fill-opacity"] : 1),
                              }))),
                            (n.gradient = a),
                            (n.fill = "none");
                          break;
                        }
                      } else
                        delete e.gradient,
                          delete n.gradient,
                          !j.is(n.opacity, "undefined") &&
                            j.is(e.opacity, "undefined") &&
                            L(i, { opacity: n.opacity }),
                          !j.is(n["fill-opacity"], "undefined") &&
                            j.is(e["fill-opacity"], "undefined") &&
                            L(i, { "fill-opacity": n["fill-opacity"] });
                      p[k]("opacity") &&
                        L(i, {
                          "fill-opacity":
                            1 < p.opacity ? p.opacity / 100 : p.opacity,
                        });
                    case "stroke":
                      (p = j.getRGB(a)),
                        i.setAttribute(r, p.hex),
                        "stroke" == r &&
                          p[k]("opacity") &&
                          L(i, {
                            "stroke-opacity":
                              1 < p.opacity ? p.opacity / 100 : p.opacity,
                          }),
                        "stroke" == r &&
                          t._.arrows &&
                          ("startString" in t._.arrows &&
                            N(t, t._.arrows.startString),
                          "endString" in t._.arrows &&
                            N(t, t._.arrows.endString, 1));
                      break;
                    case "gradient":
                      ("circle" != t.type &&
                        "ellipse" != t.type &&
                        "r" == C(a).charAt()) ||
                        T(t, a);
                      break;
                    case "opacity":
                      n.gradient &&
                        !n[k]("stroke-opacity") &&
                        L(i, { "stroke-opacity": 1 < a ? a / 100 : a });
                    case "fill-opacity":
                      if (n.gradient) {
                        (c = j._g.doc.getElementById(
                          i.getAttribute("fill").replace(/^url\(#|\)$/g, "")
                        )) &&
                          ((f = c.getElementsByTagName("stop")),
                          L(f[f.length - 1], { "stop-opacity": a }));
                        break;
                      }
                    default:
                      "font-size" == r && (a = x(a, 10) + "px");
                      var d = r.replace(/(\-.)/g, function (t) {
                        return t.substring(1).toUpperCase();
                      });
                      (i.style[d] = a), (t._.dirty = 1), i.setAttribute(r, a);
                  }
                }
              M(t, e), (i.style.visibility = s);
            }
            function o(t, e) {
              ((this[0] = this.node = t).raphael = !0),
                (this.id = j._oid++),
                (t.raphaelid = this.id),
                (this.matrix = j.matrix()),
                (this.realPath = null),
                (this.paper = e),
                (this.attrs = this.attrs || {}),
                (this._ = {
                  transform: [],
                  sx: 1,
                  sy: 1,
                  deg: 0,
                  dx: 0,
                  dy: 0,
                  dirty: 1,
                }),
                e.bottom || (e.bottom = this),
                (this.prev = e.top),
                e.top && (e.top.next = this),
                ((e.top = this).next = null);
            }
            var L = function (t, e) {
                if (e)
                  for (var r in ("string" == typeof t && (t = L(t)), e))
                    e[k](r) &&
                      ("xlink:" == r.substring(0, 6)
                        ? t.setAttributeNS(w, r.substring(6), C(e[r]))
                        : t.setAttribute(r, C(e[r])));
                else
                  (t = j._g.doc.createElementNS(
                    "http://www.w3.org/2000/svg",
                    t
                  )).style &&
                    (t.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                return t;
              },
              l = {
                "": [0],
                none: [0],
                "-": [3, 1],
                ".": [1, 1],
                "-.": [3, 1, 1, 1],
                "-..": [3, 1, 1, 1, 1, 1],
                ". ": [1, 3],
                "- ": [4, 3],
                "--": [8, 3],
                "- .": [4, 3, 1, 3],
                "--.": [8, 3, 1, 3],
                "--..": [8, 3, 1, 3, 1, 3],
              },
              M = function (t, e) {
                if (
                  "text" == t.type &&
                  (e[k]("text") ||
                    e[k]("font") ||
                    e[k]("font-size") ||
                    e[k]("x") ||
                    e[k]("y"))
                ) {
                  var r = t.attrs,
                    i = t.node,
                    n = i.firstChild
                      ? x(
                          j._g.doc.defaultView
                            .getComputedStyle(i.firstChild, "")
                            .getPropertyValue("font-size"),
                          10
                        )
                      : 10;
                  if (e[k]("text")) {
                    for (r.text = e.text; i.firstChild; )
                      i.removeChild(i.firstChild);
                    for (
                      var s,
                        a = C(e.text).split("\n"),
                        o = [],
                        l = 0,
                        h = a.length;
                      l < h;
                      l++
                    )
                      (s = L("tspan")),
                        l && L(s, { dy: 1.2 * n, x: r.x }),
                        s.appendChild(j._g.doc.createTextNode(a[l])),
                        i.appendChild(s),
                        (o[l] = s);
                  } else
                    for (
                      l = 0, h = (o = i.getElementsByTagName("tspan")).length;
                      l < h;
                      l++
                    )
                      l ? L(o[l], { dy: 1.2 * n, x: r.x }) : L(o[0], { dy: 0 });
                  L(i, { x: r.x, y: r.y }), (t._.dirty = 1);
                  (t = t._getBBox()), (t = r.y - (t.y + t.height / 2));
                  t && j.is(t, "finite") && L(o[0], { dy: t });
                }
              },
              t = j.el;
            ((o.prototype = t).constructor = o),
              (j._engine.path = function (t, e) {
                var r = L("path");
                e.canvas && e.canvas.appendChild(r);
                e = new o(r, e);
                return (
                  (e.type = "path"),
                  p(e, { fill: "none", stroke: "#000", path: t }),
                  e
                );
              }),
              (t.rotate = function (t, e, r) {
                return (
                  this.removed ||
                    ((t = C(t).split(_)).length - 1 &&
                      ((e = g(t[1])), (r = g(t[2]))),
                    (t = g(t[0])),
                    null == r && (e = r),
                    (null != e && null != r) ||
                      ((e = (i = this.getBBox(1)).x + i.width / 2),
                      (r = i.y + i.height / 2)),
                    this.transform(this._.transform.concat([["r", t, e, r]]))),
                  this
                );
                var i;
              }),
              (t.scale = function (t, e, r, i) {
                return (
                  this.removed ||
                    ((t = C(t).split(_)).length - 1 &&
                      ((e = g(t[1])), (r = g(t[2])), (i = g(t[3]))),
                    (t = g(t[0])),
                    null == e && (e = t),
                    null == i && (r = i),
                    (null != r && null != i) || (n = this.getBBox(1)),
                    (r = null == r ? n.x + n.width / 2 : r),
                    (i = null == i ? n.y + n.height / 2 : i),
                    this.transform(
                      this._.transform.concat([["s", t, e, r, i]])
                    )),
                  this
                );
                var n;
              }),
              (t.translate = function (t, e) {
                return (
                  this.removed ||
                    ((t = C(t).split(_)).length - 1 && (e = g(t[1])),
                    (t = g(t[0]) || 0),
                    (e = +e || 0),
                    this.transform(this._.transform.concat([["t", t, e]]))),
                  this
                );
              }),
              (t.transform = function (t) {
                var e = this._;
                return null == t
                  ? e.transform
                  : (j._extractTransform(this, t),
                    this.clip &&
                      L(this.clip, { transform: this.matrix.invert() }),
                    this.pattern && A(this),
                    this.node && L(this.node, { transform: this.matrix }),
                    (1 == e.sx && 1 == e.sy) ||
                      ((e = this.attrs[k]("stroke-width")
                        ? this.attrs["stroke-width"]
                        : 1),
                      this.attr({ "stroke-width": e })),
                    this);
              }),
              (t.hide = function () {
                return (
                  this.removed ||
                    this.paper.safari((this.node.style.display = "none")),
                  this
                );
              }),
              (t.show = function () {
                return (
                  this.removed ||
                    this.paper.safari((this.node.style.display = "")),
                  this
                );
              }),
              (t.remove = function () {
                if (!this.removed && this.node.parentNode) {
                  var t,
                    e = this.paper;
                  for (t in (e.__set__ && e.__set__.exclude(this),
                  f.unbind("raphael.*.*." + this.id),
                  this.gradient && e.defs.removeChild(this.gradient),
                  j._tear(this, e),
                  "a" == this.node.parentNode.tagName.toLowerCase()
                    ? this.node.parentNode.parentNode.removeChild(
                        this.node.parentNode
                      )
                    : this.node.parentNode.removeChild(this.node),
                  this))
                    this[t] =
                      "function" == typeof this[t]
                        ? j._removedFactory(t)
                        : null;
                  this.removed = !0;
                }
              }),
              (t._getBBox = function () {
                var t;
                "none" == this.node.style.display && (this.show(), (t = !0));
                var e = {};
                try {
                  e = this.node.getBBox();
                } catch (t) {
                } finally {
                  e = e || {};
                }
                return t && this.hide(), e;
              }),
              (t.attr = function (t, e) {
                if (this.removed) return this;
                if (null == t) {
                  var r,
                    i = {};
                  for (r in this.attrs)
                    this.attrs[k](r) && (i[r] = this.attrs[r]);
                  return (
                    i.gradient &&
                      "none" == i.fill &&
                      (i.fill = i.gradient) &&
                      delete i.gradient,
                    (i.transform = this._.transform),
                    i
                  );
                }
                if (null == e && j.is(t, "string")) {
                  if (
                    "fill" == t &&
                    "none" == this.attrs.fill &&
                    this.attrs.gradient
                  )
                    return this.attrs.gradient;
                  if ("transform" == t) return this._.transform;
                  for (
                    var n = t.split(_), s = {}, a = 0, o = n.length;
                    a < o;
                    a++
                  )
                    (t = n[a]) in this.attrs
                      ? (s[t] = this.attrs[t])
                      : j.is(this.paper.customAttributes[t], "function")
                      ? (s[t] = this.paper.customAttributes[t].def)
                      : (s[t] = j._availableAttrs[t]);
                  return o - 1 ? s : s[n[0]];
                }
                if (null == e && j.is(t, "array")) {
                  for (s = {}, a = 0, o = t.length; a < o; a++)
                    s[t[a]] = this.attr(t[a]);
                  return s;
                }
                var l, h;
                for (h in (null != e
                  ? ((l = {})[t] = e)
                  : null != t && j.is(t, "object") && (l = t),
                l))
                  f("raphael.attr." + h + "." + this.id, this, l[h]);
                for (h in this.paper.customAttributes)
                  if (
                    this.paper.customAttributes[k](h) &&
                    l[k](h) &&
                    j.is(this.paper.customAttributes[h], "function")
                  ) {
                    var u,
                      c = this.paper.customAttributes[h].apply(
                        this,
                        [].concat(l[h])
                      );
                    for (u in ((this.attrs[h] = l[h]), c))
                      c[k](u) && (l[u] = c[u]);
                  }
                return p(this, l), this;
              }),
              (t.toFront = function () {
                if (this.removed) return this;
                "a" == this.node.parentNode.tagName.toLowerCase()
                  ? this.node.parentNode.parentNode.appendChild(
                      this.node.parentNode
                    )
                  : this.node.parentNode.appendChild(this.node);
                var t = this.paper;
                return t.top != this && j._tofront(this, t), this;
              }),
              (t.toBack = function () {
                if (this.removed) return this;
                var t = this.node.parentNode;
                "a" == t.tagName.toLowerCase()
                  ? t.parentNode.insertBefore(
                      this.node.parentNode,
                      this.node.parentNode.parentNode.firstChild
                    )
                  : t.firstChild != this.node &&
                    t.insertBefore(this.node, this.node.parentNode.firstChild),
                  j._toback(this, this.paper);
                this.paper;
                return this;
              }),
              (t.insertAfter = function (t) {
                if (this.removed) return this;
                var e = t.node || t[t.length - 1].node;
                return (
                  e.nextSibling
                    ? e.parentNode.insertBefore(this.node, e.nextSibling)
                    : e.parentNode.appendChild(this.node),
                  j._insertafter(this, t, this.paper),
                  this
                );
              }),
              (t.insertBefore = function (t) {
                if (this.removed) return this;
                var e = t.node || t[0].node;
                return (
                  e.parentNode.insertBefore(this.node, e),
                  j._insertbefore(this, t, this.paper),
                  this
                );
              }),
              (t.blur = function (t) {
                var e,
                  r,
                  i = this;
                return (
                  0 != +t
                    ? ((e = L("filter")),
                      (r = L("feGaussianBlur")),
                      (i.attrs.blur = t),
                      (e.id = j.createUUID()),
                      L(r, { stdDeviation: +t || 1.5 }),
                      e.appendChild(r),
                      i.paper.defs.appendChild(e),
                      (i._blur = e),
                      L(i.node, { filter: "url(#" + e.id + ")" }))
                    : (i._blur &&
                        (i._blur.parentNode.removeChild(i._blur),
                        delete i._blur,
                        delete i.attrs.blur),
                      i.node.removeAttribute("filter")),
                  i
                );
              }),
              (j._engine.circle = function (t, e, r, i) {
                var n = L("circle");
                t.canvas && t.canvas.appendChild(n);
                t = new o(n, t);
                return (
                  (t.attrs = {
                    cx: e,
                    cy: r,
                    r: i,
                    fill: "none",
                    stroke: "#000",
                  }),
                  (t.type = "circle"),
                  L(n, t.attrs),
                  t
                );
              }),
              (j._engine.rect = function (t, e, r, i, n, s) {
                var a = L("rect");
                t.canvas && t.canvas.appendChild(a);
                t = new o(a, t);
                return (
                  (t.attrs = {
                    x: e,
                    y: r,
                    width: i,
                    height: n,
                    r: s || 0,
                    rx: s || 0,
                    ry: s || 0,
                    fill: "none",
                    stroke: "#000",
                  }),
                  (t.type = "rect"),
                  L(a, t.attrs),
                  t
                );
              }),
              (j._engine.ellipse = function (t, e, r, i, n) {
                var s = L("ellipse");
                t.canvas && t.canvas.appendChild(s);
                t = new o(s, t);
                return (
                  (t.attrs = {
                    cx: e,
                    cy: r,
                    rx: i,
                    ry: n,
                    fill: "none",
                    stroke: "#000",
                  }),
                  (t.type = "ellipse"),
                  L(s, t.attrs),
                  t
                );
              }),
              (j._engine.image = function (t, e, r, i, n, s) {
                var a = L("image");
                L(a, {
                  x: r,
                  y: i,
                  width: n,
                  height: s,
                  preserveAspectRatio: "none",
                }),
                  a.setAttributeNS(w, "href", e),
                  t.canvas && t.canvas.appendChild(a);
                t = new o(a, t);
                return (
                  (t.attrs = { x: r, y: i, width: n, height: s, src: e }),
                  (t.type = "image"),
                  t
                );
              }),
              (j._engine.text = function (t, e, r, i) {
                var n = L("text");
                t.canvas && t.canvas.appendChild(n);
                t = new o(n, t);
                return (
                  (t.attrs = {
                    x: e,
                    y: r,
                    "text-anchor": "middle",
                    text: i,
                    font: j._availableAttrs.font,
                    stroke: "none",
                    fill: "#000",
                  }),
                  (t.type = "text"),
                  p(t, t.attrs),
                  t
                );
              }),
              (j._engine.setSize = function (t, e) {
                return (
                  (this.width = t || this.width),
                  (this.height = e || this.height),
                  this.canvas.setAttribute("width", this.width),
                  this.canvas.setAttribute("height", this.height),
                  this._viewBox && this.setViewBox.apply(this, this._viewBox),
                  this
                );
              }),
              (j._engine.create = function () {
                var t = j._getContainer.apply(0, arguments),
                  e = t && t.container,
                  r = t.x,
                  i = t.y,
                  n = t.width,
                  s = t.height;
                if (!e) throw new Error("SVG container not found.");
                var a,
                  o = L("svg"),
                  t = "overflow:hidden;",
                  r = r || 0,
                  i = i || 0;
                return (
                  L(o, {
                    height: (s = s || 342),
                    version: 1.1,
                    width: (n = n || 512),
                    xmlns: "http://www.w3.org/2000/svg",
                  }),
                  1 == e
                    ? ((o.style.cssText =
                        t +
                        "position:absolute;left:" +
                        r +
                        "px;top:" +
                        i +
                        "px"),
                      j._g.doc.body.appendChild(o),
                      (a = 1))
                    : ((o.style.cssText = t + "position:relative"),
                      e.firstChild
                        ? e.insertBefore(o, e.firstChild)
                        : e.appendChild(o)),
                  ((e = new j._Paper()).width = n),
                  (e.height = s),
                  (e.canvas = o),
                  e.clear(),
                  (e._left = e._top = 0),
                  a && (e.renderfix = function () {}),
                  e.renderfix(),
                  e
                );
              }),
              (j._engine.setViewBox = function (t, e, r, i, n) {
                f("raphael.setViewBox", this, this._viewBox, [t, e, r, i, n]);
                var s,
                  a = m(r / this.width, i / this.height),
                  o = this.top,
                  l = n ? "meet" : "xMinYMin",
                  h =
                    null == t
                      ? (this._vbSize && (a = 1),
                        delete this._vbSize,
                        "0 0 " + this.width + " " + this.height)
                      : ((this._vbSize = a), t + " " + e + " " + r + " " + i);
                for (
                  L(this.canvas, { viewBox: h, preserveAspectRatio: l });
                  a && o;

                )
                  (s = "stroke-width" in o.attrs ? o.attrs["stroke-width"] : 1),
                    o.attr({ "stroke-width": s }),
                    (o._.dirty = 1),
                    (o._.dirtyT = 1),
                    (o = o.prev);
                return (this._viewBox = [t, e, r, i, !!n]), this;
              }),
              (j.prototype.renderfix = function () {
                var e,
                  r = this.canvas,
                  t = r.style;
                try {
                  e = r.getScreenCTM() || r.createSVGMatrix();
                } catch (t) {
                  e = r.createSVGMatrix();
                }
                var i = -e.e % 1,
                  n = -e.f % 1;
                (i || n) &&
                  (i &&
                    ((this._left = (this._left + i) % 1),
                    (t.left = this._left + "px")),
                  n &&
                    ((this._top = (this._top + n) % 1),
                    (t.top = this._top + "px")));
              }),
              (j.prototype.clear = function () {
                j.eve("raphael.clear", this);
                for (var t = this.canvas; t.firstChild; )
                  t.removeChild(t.firstChild);
                (this.bottom = this.top = null),
                  (this.desc = L("desc")).appendChild(
                    j._g.doc.createTextNode("Created with Raphaël " + j.version)
                  ),
                  t.appendChild(this.desc),
                  t.appendChild((this.defs = L("defs")));
              }),
              (j.prototype.remove = function () {
                for (var t in (f("raphael.remove", this),
                this.canvas.parentNode &&
                  this.canvas.parentNode.removeChild(this.canvas),
                this))
                  this[t] =
                    "function" == typeof this[t] ? j._removedFactory(t) : null;
              });
            var e,
              r = j.st;
            for (e in t)
              t[k](e) &&
                !r[k](e) &&
                (r[e] = (function (r) {
                  return function () {
                    var e = arguments;
                    return this.forEach(function (t) {
                      t[r].apply(t, e);
                    });
                  };
                })(e));
          }
        })(),
        (function () {
          if (j.vml) {
            function g(t, e, r) {
              var i = j.matrix();
              return i.rotate(-t, 0.5, 0.5), { dx: i.x(e, r), dy: i.y(e, r) };
            }
            function v(t, e, r, i, n, s) {
              var a,
                o = t._,
                l = t.matrix,
                h = o.fillpos,
                u = t.node,
                c = u.style,
                f = 1,
                p = "",
                d = M / e,
                t = M / r;
              (c.visibility = "hidden"),
                e &&
                  r &&
                  ((u.coordsize = x(d) + A + x(t)),
                  (c.rotation = s * (e * r < 0 ? -1 : 1)),
                  s && ((i = (a = g(s, i, n)).dx), (n = a.dy)),
                  e < 0 && (p += "x"),
                  r < 0 && (p += " y") && (f = -1),
                  (c.flip = p),
                  (u.coordorigin = i * -d + A + n * -t),
                  (h || o.fillsize) &&
                    ((t = (t = u.getElementsByTagName(S)) && t[0]),
                    u.removeChild(t),
                    h &&
                      ((a = g(s, l.x(h[0], h[1]), l.y(h[0], h[1]))),
                      (t.position = a.dx * f + A + a.dy * f)),
                    o.fillsize &&
                      (t.size =
                        o.fillsize[0] * x(e) + A + o.fillsize[1] * x(r)),
                    u.appendChild(t)),
                  (c.visibility = "visible"));
            }
            var b = "hasOwnProperty",
              _ = String,
              w = parseFloat,
              c = Math,
              k = c.round,
              C = c.max,
              B = c.min,
              x = c.abs,
              S = "fill",
              T = /[, ]+/,
              f = j.eve,
              A = " ",
              N = {
                M: "m",
                L: "l",
                C: "c",
                Z: "x",
                m: "t",
                l: "r",
                c: "v",
                z: "x",
              },
              E = /([clmz]),?([^clmz]*)/gi,
              i = / progid:\S+Blur\([^\)]+\)/g,
              L = /-?[^,\s-]+/g,
              h = "position:absolute;left:0;top:0;width:1px;height:1px",
              M = 21600,
              P = { path: 1, rect: 1, image: 1 },
              z = { circle: 1, ellipse: 1 };
            j.toString = function () {
              return (
                "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " +
                this.version
              );
            };
            function F(t, e, r) {
              for (
                var i = _(e).toLowerCase().split("-"),
                  r = r ? "end" : "start",
                  n = i.length,
                  s = "classic",
                  a = "medium",
                  o = "medium";
                n--;

              )
                switch (i[n]) {
                  case "block":
                  case "classic":
                  case "oval":
                  case "diamond":
                  case "open":
                  case "none":
                    s = i[n];
                    break;
                  case "wide":
                  case "narrow":
                    o = i[n];
                    break;
                  case "long":
                  case "short":
                    a = i[n];
                }
              t = t.node.getElementsByTagName("stroke")[0];
              (t[r + "arrow"] = s),
                (t[r + "arrowlength"] = a),
                (t[r + "arrowwidth"] = o);
            }
            function p(t, e) {
              t.attrs = t.attrs || {};
              var r,
                i,
                n,
                s,
                a,
                o,
                l,
                h = t.node,
                u = t.attrs,
                c = h.style,
                f =
                  P[t.type] &&
                  (e.x != u.x ||
                    e.y != u.y ||
                    e.width != u.width ||
                    e.height != u.height ||
                    e.cx != u.cx ||
                    e.cy != u.cy ||
                    e.rx != u.rx ||
                    e.ry != u.ry ||
                    e.r != u.r),
                p =
                  z[t.type] &&
                  (u.cx != e.cx ||
                    u.cy != e.cy ||
                    u.r != e.r ||
                    u.rx != e.rx ||
                    u.ry != e.ry),
                d = t;
              for (r in e) e[b](r) && (u[r] = e[r]);
              if (
                (f && ((u.path = j._getPath[t.type](t)), (t._.dirty = 1)),
                e.href && (h.href = e.href),
                e.title && (h.title = e.title),
                e.target && (h.target = e.target),
                e.cursor && (c.cursor = e.cursor),
                "blur" in e && t.blur(e.blur),
                ((e.path && "path" == t.type) || f) &&
                  ((h.path = (function (t) {
                    var e = /[ahqstv]/gi,
                      r = j._pathToAbsolute;
                    if (
                      (_(t).match(e) && (r = j._path2curve),
                      (e = /[clmz]/g),
                      r == j._pathToAbsolute && !_(t).match(e))
                    ) {
                      var i = _(t).replace(E, function (t, e, r) {
                        var i = [],
                          n = "m" == e.toLowerCase(),
                          s = N[e];
                        return (
                          r.replace(L, function (t) {
                            n &&
                              2 == i.length &&
                              ((s += i + N["m" == e ? "l" : "L"]), (i = [])),
                              i.push(k(t * M));
                          }),
                          s + i
                        );
                      });
                      return i;
                    }
                    for (
                      var n, s, a = r(t), i = [], o = 0, l = a.length;
                      o < l;
                      o++
                    ) {
                      (n = a[o]),
                        "z" == (s = a[o][0].toLowerCase()) && (s = "x");
                      for (var h = 1, u = n.length; h < u; h++)
                        s += k(n[h] * M) + (h != u - 1 ? "," : "");
                      i.push(s);
                    }
                    return i.join(A);
                  })(
                    ~_(u.path).toLowerCase().indexOf("r")
                      ? j._pathToAbsolute(u.path)
                      : u.path
                  )),
                  "image" == t.type &&
                    ((t._.fillpos = [u.x, u.y]),
                    (t._.fillsize = [u.width, u.height]),
                    v(t, 1, 1, 0, 0, 0))),
                "transform" in e && t.transform(e.transform),
                p &&
                  ((s = +u.cx),
                  (i = +u.cy),
                  (p = +u.rx || +u.r || 0),
                  (n = +u.ry || +u.r || 0),
                  (h.path = j.format(
                    "ar{0},{1},{2},{3},{4},{1},{4},{1}x",
                    k((s - p) * M),
                    k((i - n) * M),
                    k((s + p) * M),
                    k((i + n) * M),
                    k(s * M)
                  )),
                  (t._.dirty = 1)),
                "clip-rect" in e &&
                  (4 == (i = _(e["clip-rect"]).split(T)).length &&
                    ((i[2] = +i[2] + +i[0]),
                    (i[3] = +i[3] + +i[1]),
                    ((s = (n = h.clipRect || j._g.doc.createElement("div"))
                      .style).clip = j.format(
                      "rect({1}px {2}px {3}px {0}px)",
                      i
                    )),
                    h.clipRect ||
                      ((s.position = "absolute"),
                      (s.top = 0),
                      (s.left = 0),
                      (s.width = t.paper.width + "px"),
                      (s.height = t.paper.height + "px"),
                      h.parentNode.insertBefore(n, h),
                      n.appendChild(h),
                      (h.clipRect = n))),
                  e["clip-rect"] ||
                    (h.clipRect && (h.clipRect.style.clip = "auto"))),
                t.textpath &&
                  ((o = t.textpath.style),
                  e.font && (o.font = e.font),
                  e["font-family"] &&
                    (o.fontFamily =
                      '"' +
                      e["font-family"]
                        .split(",")[0]
                        .replace(/^['"]+|['"]+$/g, "") +
                      '"'),
                  e["font-size"] && (o.fontSize = e["font-size"]),
                  e["font-weight"] && (o.fontWeight = e["font-weight"]),
                  e["font-style"] && (o.fontStyle = e["font-style"])),
                "arrow-start" in e && F(d, e["arrow-start"]),
                "arrow-end" in e && F(d, e["arrow-end"], 1),
                (null == e.opacity &&
                  null == e["stroke-width"] &&
                  null == e.fill &&
                  null == e.src &&
                  null == e.stroke &&
                  null == e["stroke-width"] &&
                  null == e["stroke-opacity"] &&
                  null == e["fill-opacity"] &&
                  null == e["stroke-dasharray"] &&
                  null == e["stroke-miterlimit"] &&
                  null == e["stroke-linejoin"] &&
                  null == e["stroke-linecap"]) ||
                  ((o = (o = h.getElementsByTagName(S)) && o[0]) || (o = R(S)),
                  "image" == t.type && e.src && (o.src = e.src),
                  e.fill && (o.on = !0),
                  (null != o.on && "none" != e.fill && null !== e.fill) ||
                    (o.on = !1),
                  o.on &&
                    e.fill &&
                    ((g = _(e.fill).match(j._ISURL))
                      ? (o.parentNode == h && h.removeChild(o),
                        (o.rotate = !0),
                        (o.src = g[1]),
                        (o.type = "tile"),
                        (a = t.getBBox(1)),
                        (o.position = a.x + A + a.y),
                        (t._.fillpos = [a.x, a.y]),
                        j._preload(g[1], function () {
                          t._.fillsize = [this.offsetWidth, this.offsetHeight];
                        }))
                      : ((o.color = j.getRGB(e.fill).hex),
                        (o.src = ""),
                        (o.type = "solid"),
                        j.getRGB(e.fill).error &&
                          (d.type in { circle: 1, ellipse: 1 } ||
                            "r" != _(e.fill).charAt()) &&
                          I(d, e.fill, o) &&
                          ((u.fill = "none"),
                          (u.gradient = e.fill),
                          (o.rotate = !1)))),
                  ("fill-opacity" in e || "opacity" in e) &&
                    ((l =
                      ((+u["fill-opacity"] + 1 || 2) - 1) *
                      ((+u.opacity + 1 || 2) - 1) *
                      ((+j.getRGB(e.fill).o + 1 || 2) - 1)),
                    (l = B(C(l, 0), 1)),
                    (o.opacity = l),
                    o.src && (o.color = "none")),
                  h.appendChild(o),
                  (a = !1),
                  (g =
                    h.getElementsByTagName("stroke") &&
                    h.getElementsByTagName("stroke")[0]) ||
                    (a = g = R("stroke")),
                  ((e.stroke && "none" != e.stroke) ||
                    e["stroke-width"] ||
                    null != e["stroke-opacity"] ||
                    e["stroke-dasharray"] ||
                    e["stroke-miterlimit"] ||
                    e["stroke-linejoin"] ||
                    e["stroke-linecap"]) &&
                    (g.on = !0),
                  ("none" != e.stroke &&
                    null !== e.stroke &&
                    null != g.on &&
                    0 != e.stroke &&
                    0 != e["stroke-width"]) ||
                    (g.on = !1),
                  (o = j.getRGB(e.stroke)),
                  g.on && e.stroke && (g.color = o.hex),
                  (l =
                    ((+u["stroke-opacity"] + 1 || 2) - 1) *
                    ((+u.opacity + 1 || 2) - 1) *
                    ((+o.o + 1 || 2) - 1)),
                  (o = 0.75 * (w(e["stroke-width"]) || 1)),
                  (l = B(C(l, 0), 1)),
                  null == e["stroke-width"] && (o = u["stroke-width"]),
                  e["stroke-width"] && (g.weight = o),
                  o && o < 1 && (l *= o) && (g.weight = 1),
                  (g.opacity = l),
                  e["stroke-linejoin"] &&
                    (g.joinstyle = e["stroke-linejoin"] || "miter"),
                  (g.miterlimit = e["stroke-miterlimit"] || 8),
                  e["stroke-linecap"] &&
                    (g.endcap =
                      "butt" == e["stroke-linecap"]
                        ? "flat"
                        : "square" == e["stroke-linecap"]
                        ? "square"
                        : "round"),
                  e["stroke-dasharray"] &&
                    ((l = {
                      "-": "shortdash",
                      ".": "shortdot",
                      "-.": "shortdashdot",
                      "-..": "shortdashdotdot",
                      ". ": "dot",
                      "- ": "dash",
                      "--": "longdash",
                      "- .": "dashdot",
                      "--.": "longdashdot",
                      "--..": "longdashdotdot",
                    }),
                    (g.dashstyle = l[b](e["stroke-dasharray"])
                      ? l[e["stroke-dasharray"]]
                      : "")),
                  a && h.appendChild(g)),
                "text" == d.type)
              ) {
                d.paper.canvas.style.display = "";
                var h = d.paper.span,
                  g = u.font && u.font.match(/\d+(?:\.\d*)?(?=px)/),
                  c = h.style;
                u.font && (c.font = u.font),
                  u["font-family"] && (c.fontFamily = u["font-family"]),
                  u["font-weight"] && (c.fontWeight = u["font-weight"]),
                  u["font-style"] && (c.fontStyle = u["font-style"]),
                  (g = w(u["font-size"] || (g && g[0])) || 10),
                  (c.fontSize = 100 * g + "px"),
                  d.textpath.string &&
                    (h.innerHTML = _(d.textpath.string)
                      .replace(/</g, "&#60;")
                      .replace(/&/g, "&#38;")
                      .replace(/\n/g, "<br>"));
                h = h.getBoundingClientRect();
                (d.W = u.w = (h.right - h.left) / 100),
                  (d.H = u.h = (h.bottom - h.top) / 100),
                  (d.X = u.x),
                  (d.Y = u.y + d.H / 2),
                  ("x" in e || "y" in e) &&
                    (d.path.v = j.format(
                      "m{0},{1}l{2},{1}",
                      k(u.x * M),
                      k(u.y * M),
                      k(u.x * M) + 1
                    ));
                for (
                  var x = [
                      "x",
                      "y",
                      "text",
                      "font",
                      "font-family",
                      "font-weight",
                      "font-style",
                      "font-size",
                    ],
                    y = 0,
                    m = x.length;
                  y < m;
                  y++
                )
                  if (x[y] in e) {
                    d._.dirty = 1;
                    break;
                  }
                switch (u["text-anchor"]) {
                  case "start":
                    (d.textpath.style["v-text-align"] = "left"),
                      (d.bbx = d.W / 2);
                    break;
                  case "end":
                    (d.textpath.style["v-text-align"] = "right"),
                      (d.bbx = -d.W / 2);
                    break;
                  default:
                    (d.textpath.style["v-text-align"] = "center"), (d.bbx = 0);
                }
                d.textpath.style["v-text-kern"] = !0;
              }
            }
            function u(t, e) {
              ((this[0] = this.node = t).raphael = !0),
                (this.id = j._oid++),
                (t.raphaelid = this.id),
                (this.X = 0),
                (this.Y = 0),
                (this.attrs = {}),
                (this.paper = e),
                (this.matrix = j.matrix()),
                (this._ = {
                  transform: [],
                  sx: 1,
                  sy: 1,
                  dx: 0,
                  dy: 0,
                  deg: 0,
                  dirty: 1,
                  dirtyT: 1,
                }),
                e.bottom || (e.bottom = this),
                (this.prev = e.top),
                e.top && (e.top.next = this),
                ((e.top = this).next = null);
            }
            var R,
              I = function (t, e, r) {
                t.attrs = t.attrs || {};
                t.attrs;
                var i = Math.pow,
                  n = "linear",
                  s = ".5 .5";
                if (
                  ((t.attrs.gradient = e),
                  (e = (e = _(e).replace(
                    j._radial_gradient,
                    function (t, e, r) {
                      return (
                        (n = "radial"),
                        e &&
                          r &&
                          ((e = w(e)),
                          (r = w(r)),
                          0.25 < i(e - 0.5, 2) + i(r - 0.5, 2) &&
                            (r =
                              c.sqrt(0.25 - i(e - 0.5, 2)) *
                                (2 * (0.5 < r) - 1) +
                              0.5),
                          (s = e + A + r)),
                        ""
                      );
                    }
                  )).split(/\s*\-\s*/)),
                  "linear" == n)
                ) {
                  var a = e.shift(),
                    a = -w(a);
                  if (isNaN(a)) return null;
                }
                var o = j._parseDots(e);
                if (!o) return null;
                if (((t = t.shape || t.node), o.length)) {
                  t.removeChild(r),
                    (r.on = !0),
                    (r.method = "none"),
                    (r.color = o[0].color),
                    (r.color2 = o[o.length - 1].color);
                  for (var l = [], h = 0, u = o.length; h < u; h++)
                    o[h].offset && l.push(o[h].offset + A + o[h].color);
                  (r.colors = l.length ? l.join() : "0% " + r.color),
                    "radial" == n
                      ? ((r.type = "gradientTitle"),
                        (r.focus = "100%"),
                        (r.focussize = "0 0"),
                        (r.focusposition = s),
                        (r.angle = 0))
                      : ((r.type = "gradient"), (r.angle = (270 - a) % 360)),
                    t.appendChild(r);
                }
                return 1;
              },
              t = j.el;
            ((u.prototype = t).constructor = u),
              (t.transform = function (t) {
                if (null == t) return this._.transform;
                var e,
                  r = this.paper._viewBoxShift,
                  i = r
                    ? "s" + [r.scale, r.scale] + "-1-1t" + [r.dx, r.dy]
                    : "";
                r &&
                  (e = t =
                    _(t).replace(/\.{3}|\u2026/g, this._.transform || "")),
                  j._extractTransform(this, i + t);
                var n = this.matrix.clone(),
                  s = this.skew,
                  a = this.node,
                  o = ~_(this.attrs.fill).indexOf("-"),
                  r = !_(this.attrs.fill).indexOf("url(");
                return (
                  n.translate(1, 1),
                  r || o || "image" == this.type
                    ? ((s.matrix = "1 0 0 1"),
                      (s.offset = "0 0"),
                      (i = n.split()),
                      (o && i.noRotation) || !i.isSimple
                        ? ((a.style.filter = n.toFilter()),
                          (t = this.getBBox()),
                          (r = this.getBBox(1)),
                          (o = t.x - r.x),
                          (r = t.y - r.y),
                          (a.coordorigin = o * -M + A + r * -M),
                          v(this, 1, 1, o, r, 0))
                        : ((a.style.filter = ""),
                          v(this, i.scalex, i.scaley, i.dx, i.dy, i.rotate)))
                    : ((a.style.filter = ""),
                      (s.matrix = _(n)),
                      (s.offset = n.offset())),
                  e && (this._.transform = e),
                  this
                );
              }),
              (t.rotate = function (t, e, r) {
                return this.removed
                  ? this
                  : null != t
                  ? ((t = _(t).split(T)).length - 1 &&
                      ((e = w(t[1])), (r = w(t[2]))),
                    (t = w(t[0])),
                    null == r && (e = r),
                    (null != e && null != r) ||
                      ((e = (i = this.getBBox(1)).x + i.width / 2),
                      (r = i.y + i.height / 2)),
                    (this._.dirtyT = 1),
                    this.transform(this._.transform.concat([["r", t, e, r]])),
                    this)
                  : void 0;
                var i;
              }),
              (t.translate = function (t, e) {
                return (
                  this.removed ||
                    ((t = _(t).split(T)).length - 1 && (e = w(t[1])),
                    (t = w(t[0]) || 0),
                    (e = +e || 0),
                    this._.bbox && ((this._.bbox.x += t), (this._.bbox.y += e)),
                    this.transform(this._.transform.concat([["t", t, e]]))),
                  this
                );
              }),
              (t.scale = function (t, e, r, i) {
                return (
                  this.removed ||
                    ((t = _(t).split(T)).length - 1 &&
                      ((e = w(t[1])),
                      (r = w(t[2])),
                      (i = w(t[3])),
                      isNaN(r) && (r = null),
                      isNaN(i) && (i = null)),
                    (t = w(t[0])),
                    null == e && (e = t),
                    null == i && (r = i),
                    (null != r && null != i) || (n = this.getBBox(1)),
                    (r = null == r ? n.x + n.width / 2 : r),
                    (i = null == i ? n.y + n.height / 2 : i),
                    this.transform(
                      this._.transform.concat([["s", t, e, r, i]])
                    ),
                    (this._.dirtyT = 1)),
                  this
                );
                var n;
              }),
              (t.hide = function () {
                return this.removed || (this.node.style.display = "none"), this;
              }),
              (t.show = function () {
                return this.removed || (this.node.style.display = ""), this;
              }),
              (t._getBBox = function () {
                return this.removed
                  ? {}
                  : {
                      x: this.X + (this.bbx || 0) - this.W / 2,
                      y: this.Y - this.H,
                      width: this.W,
                      height: this.H,
                    };
              }),
              (t.remove = function () {
                if (!this.removed && this.node.parentNode) {
                  for (var t in (this.paper.__set__ &&
                    this.paper.__set__.exclude(this),
                  j.eve.unbind("raphael.*.*." + this.id),
                  j._tear(this, this.paper),
                  this.node.parentNode.removeChild(this.node),
                  this.shape && this.shape.parentNode.removeChild(this.shape),
                  this))
                    this[t] =
                      "function" == typeof this[t]
                        ? j._removedFactory(t)
                        : null;
                  this.removed = !0;
                }
              }),
              (t.attr = function (t, e) {
                if (this.removed) return this;
                if (null == t) {
                  var r,
                    i = {};
                  for (r in this.attrs)
                    this.attrs[b](r) && (i[r] = this.attrs[r]);
                  return (
                    i.gradient &&
                      "none" == i.fill &&
                      (i.fill = i.gradient) &&
                      delete i.gradient,
                    (i.transform = this._.transform),
                    i
                  );
                }
                if (null == e && j.is(t, "string")) {
                  if (
                    t == S &&
                    "none" == this.attrs.fill &&
                    this.attrs.gradient
                  )
                    return this.attrs.gradient;
                  for (
                    var n = t.split(T), s = {}, a = 0, o = n.length;
                    a < o;
                    a++
                  )
                    (t = n[a]) in this.attrs
                      ? (s[t] = this.attrs[t])
                      : j.is(this.paper.customAttributes[t], "function")
                      ? (s[t] = this.paper.customAttributes[t].def)
                      : (s[t] = j._availableAttrs[t]);
                  return o - 1 ? s : s[n[0]];
                }
                if (this.attrs && null == e && j.is(t, "array")) {
                  for (s = {}, a = 0, o = t.length; a < o; a++)
                    s[t[a]] = this.attr(t[a]);
                  return s;
                }
                var l, h;
                for (h in (null != e && ((l = {})[t] = e),
                null == e && j.is(t, "object") && (l = t),
                l))
                  f("raphael.attr." + h + "." + this.id, this, l[h]);
                if (l) {
                  for (h in this.paper.customAttributes)
                    if (
                      this.paper.customAttributes[b](h) &&
                      l[b](h) &&
                      j.is(this.paper.customAttributes[h], "function")
                    ) {
                      var u,
                        c = this.paper.customAttributes[h].apply(
                          this,
                          [].concat(l[h])
                        );
                      for (u in ((this.attrs[h] = l[h]), c))
                        c[b](u) && (l[u] = c[u]);
                    }
                  l.text &&
                    "text" == this.type &&
                    (this.textpath.string = l.text),
                    p(this, l);
                }
                return this;
              }),
              (t.toFront = function () {
                return (
                  this.removed || this.node.parentNode.appendChild(this.node),
                  this.paper &&
                    this.paper.top != this &&
                    j._tofront(this, this.paper),
                  this
                );
              }),
              (t.toBack = function () {
                return (
                  this.removed ||
                    (this.node.parentNode.firstChild != this.node &&
                      (this.node.parentNode.insertBefore(
                        this.node,
                        this.node.parentNode.firstChild
                      ),
                      j._toback(this, this.paper))),
                  this
                );
              }),
              (t.insertAfter = function (t) {
                return (
                  this.removed ||
                    (t.constructor == j.st.constructor && (t = t[t.length - 1]),
                    t.node.nextSibling
                      ? t.node.parentNode.insertBefore(
                          this.node,
                          t.node.nextSibling
                        )
                      : t.node.parentNode.appendChild(this.node),
                    j._insertafter(this, t, this.paper)),
                  this
                );
              }),
              (t.insertBefore = function (t) {
                return (
                  this.removed ||
                    (t.constructor == j.st.constructor && (t = t[0]),
                    t.node.parentNode.insertBefore(this.node, t.node),
                    j._insertbefore(this, t, this.paper)),
                  this
                );
              }),
              (t.blur = function (t) {
                var e = this.node.runtimeStyle,
                  r = (r = e.filter).replace(i, "");
                return (
                  0 != +t
                    ? ((this.attrs.blur = t),
                      (e.filter =
                        r +
                        A +
                        " progid:DXImageTransform.Microsoft.Blur(pixelradius=" +
                        (+t || 1.5) +
                        ")"),
                      (e.margin = j.format("-{0}px 0 0 -{0}px", k(+t || 1.5))))
                    : ((e.filter = r), (e.margin = 0), delete this.attrs.blur),
                  this
                );
              }),
              (j._engine.path = function (t, e) {
                var r = R("shape");
                (r.style.cssText = h),
                  (r.coordsize = M + A + M),
                  (r.coordorigin = e.coordorigin);
                var i = new u(r, e),
                  n = { fill: "none", stroke: "#000" };
                t && (n.path = t),
                  (i.type = "path"),
                  (i.path = []),
                  (i.Path = ""),
                  p(i, n),
                  e.canvas.appendChild(r);
                e = R("skew");
                return (
                  (e.on = !0),
                  r.appendChild(e),
                  (i.skew = e),
                  i.transform(""),
                  i
                );
              }),
              (j._engine.rect = function (t, e, r, i, n, s) {
                var a = j._rectPath(e, r, i, n, s),
                  o = t.path(a),
                  t = o.attrs;
                return (
                  (o.X = t.x = e),
                  (o.Y = t.y = r),
                  (o.W = t.width = i),
                  (o.H = t.height = n),
                  (t.r = s),
                  (t.path = a),
                  (o.type = "rect"),
                  o
                );
              }),
              (j._engine.ellipse = function (t, e, r, i, n) {
                (t = t.path()), t.attrs;
                return (
                  (t.X = e - i),
                  (t.Y = r - n),
                  (t.W = 2 * i),
                  (t.H = 2 * n),
                  (t.type = "ellipse"),
                  p(t, { cx: e, cy: r, rx: i, ry: n }),
                  t
                );
              }),
              (j._engine.circle = function (t, e, r, i) {
                (t = t.path()), t.attrs;
                return (
                  (t.X = e - i),
                  (t.Y = r - i),
                  (t.W = t.H = 2 * i),
                  (t.type = "circle"),
                  p(t, { cx: e, cy: r, r: i }),
                  t
                );
              }),
              (j._engine.image = function (t, e, r, i, n, s) {
                var a = j._rectPath(r, i, n, s),
                  o = t.path(a).attr({ stroke: "none" }),
                  l = o.attrs,
                  h = o.node,
                  t = h.getElementsByTagName(S)[0];
                return (
                  (l.src = e),
                  (o.X = l.x = r),
                  (o.Y = l.y = i),
                  (o.W = l.width = n),
                  (o.H = l.height = s),
                  (l.path = a),
                  (o.type = "image"),
                  t.parentNode == h && h.removeChild(t),
                  (t.rotate = !0),
                  (t.src = e),
                  (t.type = "tile"),
                  (o._.fillpos = [r, i]),
                  (o._.fillsize = [n, s]),
                  h.appendChild(t),
                  v(o, 1, 1, 0, 0, 0),
                  o
                );
              }),
              (j._engine.text = function (t, e, r, i) {
                var n = R("shape"),
                  s = R("path"),
                  a = R("textpath");
                (e = e || 0),
                  (r = r || 0),
                  (i = i || ""),
                  (s.v = j.format(
                    "m{0},{1}l{2},{1}",
                    k(e * M),
                    k(r * M),
                    k(e * M) + 1
                  )),
                  (s.textpathok = !0),
                  (a.string = _(i)),
                  (a.on = !0),
                  (n.style.cssText = h),
                  (n.coordsize = M + A + M),
                  (n.coordorigin = "0 0");
                var o = new u(n, t),
                  l = {
                    fill: "#000",
                    stroke: "none",
                    font: j._availableAttrs.font,
                    text: i,
                  };
                (o.shape = n),
                  (o.path = s),
                  (o.textpath = a),
                  (o.type = "text"),
                  (o.attrs.text = _(i)),
                  (o.attrs.x = e),
                  (o.attrs.y = r),
                  (o.attrs.w = 1),
                  (o.attrs.h = 1),
                  p(o, l),
                  n.appendChild(a),
                  n.appendChild(s),
                  t.canvas.appendChild(n);
                t = R("skew");
                return (
                  (t.on = !0),
                  n.appendChild(t),
                  (o.skew = t),
                  o.transform(""),
                  o
                );
              }),
              (j._engine.setSize = function (t, e) {
                var r = this.canvas.style;
                return (
                  (this.width = t) == +t && (t += "px"),
                  (this.height = e) == +e && (e += "px"),
                  (r.width = t),
                  (r.height = e),
                  (r.clip = "rect(0 " + t + " " + e + " 0)"),
                  this._viewBox &&
                    j._engine.setViewBox.apply(this, this._viewBox),
                  this
                );
              }),
              (j._engine.setViewBox = function (t, e, r, i, n) {
                j.eve("raphael.setViewBox", this, this._viewBox, [
                  t,
                  e,
                  r,
                  i,
                  n,
                ]);
                var s,
                  a = this.width,
                  o = this.height,
                  l = 1 / C(r / a, i / o);
                return (
                  n &&
                    (r * (s = o / i) < a && (t -= (a - r * s) / 2 / s),
                    i * (a = a / r) < o && (e -= (o - i * a) / 2 / a)),
                  (this._viewBox = [t, e, r, i, !!n]),
                  (this._viewBoxShift = { dx: -t, dy: -e, scale: l }),
                  this.forEach(function (t) {
                    t.transform("...");
                  }),
                  this
                );
              }),
              (j._engine.initWin = function (t) {
                var e = t.document;
                e.createStyleSheet().addRule(
                  ".rvml",
                  "behavior:url(#default#VML)"
                );
                try {
                  e.namespaces.rvml ||
                    e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"),
                    (R = function (t) {
                      return e.createElement("<rvml:" + t + ' class="rvml">');
                    });
                } catch (t) {
                  R = function (t) {
                    return e.createElement(
                      "<" +
                        t +
                        ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">'
                    );
                  };
                }
              }),
              j._engine.initWin(j._g.win),
              (j._engine.create = function () {
                var t = j._getContainer.apply(0, arguments),
                  e = t.container,
                  r = t.height,
                  i = t.width,
                  n = t.x,
                  s = t.y;
                if (!e) throw new Error("VML container not found.");
                var a = new j._Paper(),
                  o = (a.canvas = j._g.doc.createElement("div")),
                  t = o.style,
                  n = n || 0,
                  s = s || 0,
                  i = i || 512,
                  r = r || 342;
                return (
                  (a.width = i) == +i && (i += "px"),
                  (a.height = r) == +r && (r += "px"),
                  (a.coordsize = 216e5 + A + 216e5),
                  (a.coordorigin = "0 0"),
                  (a.span = j._g.doc.createElement("span")),
                  (a.span.style.cssText =
                    "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;"),
                  o.appendChild(a.span),
                  (t.cssText = j.format(
                    "top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",
                    i,
                    r
                  )),
                  1 == e
                    ? (j._g.doc.body.appendChild(o),
                      (t.left = n + "px"),
                      (t.top = s + "px"),
                      (t.position = "absolute"))
                    : e.firstChild
                    ? e.insertBefore(o, e.firstChild)
                    : e.appendChild(o),
                  (a.renderfix = function () {}),
                  a
                );
              }),
              (j.prototype.clear = function () {
                j.eve("raphael.clear", this),
                  (this.canvas.innerHTML = ""),
                  (this.span = j._g.doc.createElement("span")),
                  (this.span.style.cssText =
                    "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;"),
                  this.canvas.appendChild(this.span),
                  (this.bottom = this.top = null);
              }),
              (j.prototype.remove = function () {
                for (var t in (j.eve("raphael.remove", this),
                this.canvas.parentNode.removeChild(this.canvas),
                this))
                  this[t] =
                    "function" == typeof this[t] ? j._removedFactory(t) : null;
                return !0;
              });
            var e,
              r = j.st;
            for (e in t)
              t[b](e) &&
                !r[b](e) &&
                (r[e] = (function (r) {
                  return function () {
                    var e = arguments;
                    return this.forEach(function (t) {
                      t[r].apply(t, e);
                    });
                  };
                })(e));
          }
        })(),
        r.was ? (d.win.Raphael = j) : (t.Raphael = j);
    })(t, t.eve);
  })(this);

/* Map path and default settings - you can edit this */
var simplemaps_countrymap_mapinfo = {
  map_name: "country",
  state_bbox_array: {
    IDN555: { y: 306, x: 453, x2: 526, y2: 328 },
    IDN554: { y: 190, x: 669, x2: 867, y2: 312 },
    IDN557: { y: 100, x: 532, x2: 628, y2: 200 },
    IDN556: { y: 192, x: 562, x2: 632, y2: 261 },
    IDN381: { y: 36, x: 45, x2: 119, y2: 142 },
    IDN513: { y: 9, x: 611, x2: 699, y2: 124 },
    IDN558: { y: 143, x: 853, x2: 999, y2: 328 },
    IDN1223: { y: 258, x: 248, x2: 302, y2: 300 },
    IDN1227: { y: 262, x: 254, x2: 261, y2: 269 },
    IDN1226: { y: 258, x: 220, x2: 256, y2: 282 },
    IDN1225: { y: 178, x: 132, x2: 191, y2: 249 },
    IDN1224: { y: 256, x: 295, x2: 363, y2: 309 },
    IDN1229: { y: 211, x: 188, x2: 238, y2: 259 },
    IDN1228: { y: 84, x: 298, x2: 418, y2: 197 },
    IDN1931: { y: 113, x: 343, x2: 453, y2: 207 },
    IDN1796: { y: 26, x: 181, x2: 307, y2: 144 },
    IDN1185: { y: 34, x: 408, x2: 522, y2: 181 },
    IDN1933: { y: 106, x: 754, x2: 875, y2: 223 },
    IDN540: { y: 294, x: 327, x2: 345, y2: 308 },
    IDN1930: { y: 146, x: 133, x2: 208, y2: 190 },
    IDN1837: { y: 107, x: 569, x2: 620, y2: 123 },
    IDN1230: { y: 166, x: 154, x2: 241, y2: 237 },
    IDN1231: { y: 162, x: 221, x2: 289, y2: 200 },
    IDN1232: { y: 305, x: 423, x2: 450, y2: 323 },
    IDN1233: { y: 254, x: 347, x2: 454, y2: 321 },
    IDN1234: { y: 159, x: 420, x2: 469, y2: 235 },
    IDN1235: { y: 306, x: 520, x2: 656, y2: 368 },
    IDN1236: { y: 170, x: 529, x2: 583, y2: 291 },
    IDN1237: { y: 148, x: 516, x2: 541, y2: 207 },
    IDN1136: { y: 1, x: 1, x2: 72, y2: 86 },
    IDN492: { y: 74, x: 111, x2: 192, y2: 153 },
    IDN539: { y: 110, x: 79, x2: 149, y2: 202 },
    IDN538: { y: 72, x: 637, x2: 751, y2: 183 },
  },
  paths: {
    IDN555:
      "M472.8 312.5l-0.2 0.4-0.7 1.1-0.2 0.2-0.1 0.3-0.1 1.6-0.3 0.4-0.9 0.9-0.2 0.5-0.4 0.7-1 1.7-0.7 0.7-0.5 0.6 0.2 0.6 0 0.3 0 0.3 0.3 0 0.2-0.4 0.2-0.1 0.2 0.2 0.2 0.1 0.3 0.2 0.4 0.1-0.5 0.7-0.9 0.1-0.4-0.1-0.7 0.5-0.6 0-0.3-0.2 0.4-0.5 0.2-0.5 0.2-0.5-0.3-0.2-0.7 0.1-0.6 0.4 0 0.6 0.1 0.8 0 0.8-0.3-0.1 0-0.6-0.2-0.2-0.2-0.1-0.2 0.3-0.2 0.1-0.3-0.5-0.2-0.1-0.4 0.1-0.8 0.3-0.4 0-0.1 0-0.2-0.2-0.1-0.1-0.2 0.1-0.3 0.2-0.2 0-0.2-0.1-0.3-0.6-0.3-0.2-0.3 0-1-0.1-0.1 0.4-0.3 0.1-0.2 0-0.3-0.3 0.2 0 0.2-0.2 0-0.2-0.1-0.1-0.2-0.1-0.4 0.2-0.2 0-0.1 0.2 0 0.2 0.1 0.5-0.3 0.1-0.2 0-0.2-0.1-0.2-0.1-0.1-0.2-0.2-0.5-0.1-0.2-0.3-0.2-0.2 0.1-0.3 0.1-0.4-0.1-1.3-0.7-0.6-0.1-0.2-0.6 0-0.5 0.1-0.4 0.3-0.5 0.4 0.1 0.3-0.1 0.1 0.1 0 0.3 0.1 0.2 0.6 0 0.5 0 0.3 0 0.3-0.2 0.3-0.2 0.2 0.1 0.2 0 0.5 0.2 0.4-0.3 0.2 0 0.1 0.3 0.2 0.2 0.3-0.3 0.2-0.2 0.1-0.2-0.7-0.3 0.1-0.9 0.1-0.7 0.1-1.4-0.3-1.2-0.5-0.5-0.2-1.2 0.5-0.7 0.4-0.1 0.6 0 0.2-0.1 0.1-0.1 0.1-0.4 0.1-0.1 0.4-0.3 0.6-0.3 0.3-0.3 1.9-1.9 0.4-0.3 1.9-0.7 0.4 0 0.7 0.3 1.6 0.4 0.9 0.2 0.3 0.2 0.4 0.2 0.4 0.2 0.9 0.1 0.8 0.3 0.8 0.6 0.6 0.8 0.2 0.8z m17.6-0.2l-0.4 0.1-0.2-0.1-0.7-0.4-0.2-0.3 0-0.1 0.3-0.3 0.3-0.8 0-0.3-0.3-0.3-0.3-0.4-0.1-0.9 0-0.3 0.2-0.2 0.1-0.2 1.2-0.6 0.3-0.1 2.2 0.1 0.4 0.2 0.2 0.2 0.1 0.2-0.1 0.2-0.1 0.1-0.4 0.2-0.6 0.6-0.4 0.6-1.2 2.4-0.3 0.4z m33.6-2.8l-0.5 0.2-0.6 0-0.6-0.6 0-1 0.4-0.9 1-0.4 0.6 0.4 0.4 0.4 0.1 0.5-0.2 0.7-0.3 0.3-0.3 0.4z m-24.5-3.4l0.1 0.2 0.2 0 0.2-0.2 0.2 0 0.4 0.1 1.1 0.1 0.9 0.1 0.8 0.5 0.4 0.8 0.1 0.9 0.1 0.4 0.1 0.2 0.1 0.2 0.7 0.9 0.5 0.9 0.2 0.2 0.1 0.1 0.3-0.2 0.7 0.7 0.2 0.1 0.3-0.1 0.4-0.2 0.4-0.3 0.6-0.6 0.2-0.2 0-0.2 0.4-0.2 0.2-0.2 0.3-0.5 0.5-0.2 0.5-0.1 0.3 0.1 0.2 0.1 0.4 0.3 0.3 0 0.8 0 0.2 0.1 0.4 0.2 0.7 0.1 0.2 0.1 0.3 0.3 0.7 1.5-0.1 0.4-0.1 0.5-0.1 1-0.5 1.5-0.1 0.3 0.3 0.2 0.3-0.4 0.3-0.4 0.4-0.9 0.3-0.4 0-0.3-0.2-0.5 0-0.8 0.3-0.7 0.5-0.5 0.5-0.4 0.7-0.3 1.1-0.1 1 0 0.9 0.1 0.5 0.2 0.4 0.1 0.2 0.3 0.1 0.5 0.1 0.6 0.3 1 0.6 1.2-0.1 0.8-0.3 0.9 0.2 0.7-0.1 0.6 0.1 0.5 0.3 0.3 0.5 0.2 0.3-0.1 0.4-0.2 0.4-0.2 0.3-0.2 0-0.2-0.2-0.3 0.5-0.1 0.1-0.2 0-0.2 0-0.2 0.2-0.2 0.2 0.3 0.4 0.5 0.1 0.3-0.3 0.2 0.1 0.2-0.3 0.2-0.1 0.2 0 0.3 0.1 0.3 0.1 0.3 0.1 0.3-0.2 0.2 0.1 0.3-0.4 0.2-0.3 0.2-0.3 0.1-0.4-0.2 0 0.3-0.2 0.1-0.2 0-0.2-0.2-0.3-0.1-0.3 0-0.2 0.1-1.4 0.2-0.4-0.1-0.6-0.4-0.4-0.7-0.2-0.2-0.4 0-0.1 0.1-0.1 0.2-0.2 0.2-0.5 0.2-0.9-0.3-0.5 0.3-0.6-0.3-0.4 0.2-0.4 0.3-0.6 0.4 0.3 0.1 0.3 0.3 0.2 0.1 0.2 0.1 1.7 0 1.8 0.3 0.4 0.1 0.2 0.2 0.1 0.2 0.2 0.3 0 0.1-0.1 0.2-0.2 0.1-0.6 0.1-0.2 0-0.5-0.1-0.2 0-0.3-0.2-0.1 0.1-0.3 0.2-0.1 0-0.2-0.1-0.9-0.7-0.5-0.3-0.9 0-1 0.2-4.4 1.2-1.1-0.2-0.6-1.3 0.1-0.6 0.3-0.4 0.4-0.4 0.3-0.6 0-0.3 0.1-0.4-0.1-0.3 0-0.3-0.2-0.3-0.2-0.3-0.1-0.4 0-0.4-0.3 0.3-0.1 0.5 0.1 1-0.1 0.2-0.4 0.2-0.5 0.1-0.3 0.1-0.6 0.8-0.3 0.7-0.1 0.1-0.2 0.2-0.2 0-2.6 2.1-0.3 0.1-0.5-0.2-0.5-0.3-0.4-0.1-0.2 0-0.7 0.3 0-0.1-0.3-0.1-0.1 0.3-0.2 0.1-0.2 0.3-2.4 1.2-0.2-0.2-0.2 0-0.3 0.1-0.1-0.1-0.2-0.4-0.1-0.1-0.3 0-0.2 0.1-0.2 0.4-0.4 0.1-0.3 0-0.1 0-0.5-0.2-0.2-0.3-0.3 0.1-0.3 0.1-0.9 0.4-2.4 1.4-0.9 0.4-2.8 0.8-1.2 0.1-0.7-0.3-0.6-0.1-1-0.4-0.7 0-0.5 0.2-0.4 0.6-0.2 0.4-0.4 0.3-1.2 0.2-1.3 0.2-0.4-0.5-0.5-0.3-0.4-0.3-0.5 0.1-0.4 0-1.3-0.4-0.4-0.1-0.5-0.1-0.7-0.5-0.3 0 0-0.2-0.3-0.5-0.4-0.4 0.1-0.4 0.3-0.5-0.1-0.4-0.2-0.7 0.6-0.5 0.3-0.5 0.9-0.2 0.2-0.4-0.1-0.3-0.4-0.3-0.1-0.4-0.2-0.2-0.4 0.1-0.1-0.3 0.1-0.7 0-0.5-0.5-0.3 0.9-1.8 0.9-0.2 0.2-0.5 0-1 0.4 0.3 0.2 0.1 0.3 0 0.2 0 2.1-0.7 1-0.6 1.3-0.9 0.7-0.5-0.2-0.4 0.5-0.3 0.8-0.1 0.4-0.2 0.5 0.6 0.3 0.1 0.7 0 0.2 0.1 0.3 0.2 0.7 0.3 0.8 0.6 1.7 0.8-0.1-0.4 0.1-0.2 0.1-0.3 0.1-0.2 0-0.4 0.1-0.1 0.2 0.1 0.3 0.1 1.1 0 0.5-0.1 0.3-0.2 0.2 0.4 0.2 1.4 0.4 0.6 0.1-0.4 0-1.1 0.3-0.3 0.2 0.2 0.2 0.4 0.1 1.5 0.1 0.3 0.2 0.3 1.1 0.5 0.2-0.1 0.2-0.1 0.3-0.1 0.2 0.1-0.1 0.3 0.4 0.2 0.3 0.3-0.1 0.2 0 0.2 0.5 0.1 0.1 0.2-0.3 0-0.3 0.1-0.2 0.1 0.2 0.3 0.3 0.8 0.2 0.3 0.4 0.2 0.4 0 1.3-0.4 0.2 0 0.1 0.2 0.1 0.4 0.3 0 0.4 0.1 0.4 0.1 0.3 0.3 0.5-0.4 0.9-1 0.3-0.2 0.1 0 0.4-0.5 1.2-0.2 0.7 0 0.2 0 0.4 0.3 0.2 0 1.1 0 0.5-0.1 0.3-0.3 0.2-0.4 0-0.4-0.2-0.4-0.2-0.3-0.4-0.1-0.2-0.3-0.2-0.1-0.1 0.1-0.2 0.2-0.3 0.3-0.3-0.6-1-0.8-0.3-0.6-0.1 0-0.3 0.2-0.3-0.1-0.6-0.7-0.3-0.2-0.5 0.2-0.7 0.3-0.3 0-0.4-0.2-0.4-0.3-0.3-0.4-1.3-0.7-1.2-1-0.3-0.3-0.5-0.8-0.4-0.3-0.6-0.5-0.2-0.3-0.2-0.2-0.2-0.1-0.2-0.2 0.1-0.6 0.2-0.6 0.2-0.4 0.3-0.2 0.2-0.1 0.3 0 0.5-0.4 0.2 0 0.3-0.1 1.8-0.7 0.5-0.1 0.9 0 0.2 0.1 0.1 0.2z",
    IDN554:
      "M722 308.5l0.1 0.7 0.3 0.5-0.1 0.2-0.3 0.2-0.3 0-0.5 0.1-0.7 0-0.6-0.1-0.4-0.1-0.4-0.3-0.1-0.2 0.1-0.2 0.2-0.3 0.1-0.2 0.1-0.2 0.3-0.1 0.4 0.2 0.6-0.1 0.6-0.3 0.5 0 0.1 0.2z m17.7 0.3l0 0.3-0.2 0.3-0.2 0.3-0.2 0-0.3 0-0.3-0.2-0.3-0.2-0.4-0.2-0.2 0.1-0.2 0.2-0.3 0.1-0.6-0.2-0.8-0.5-0.4-0.5 0.6-0.3 0.6-0.2 2.1 0.2 0.1 0.1 0.9 0.4 0.1 0.3z m-29.2 0.4l-0.5 0-0.4-0.1-0.6-0.5-0.4-0.1 1.7-1.2 0.5 0 0.4 0 0.4 0.1 0.4 0.4 0.3 0.4-0.1 0.4-0.5 0.2-0.5 0-0.7 0.4z m3.1-3.1l0.8 0.2 1.5 0.5 1.7 0.3 0.9 0 0.7-0.3 0.7 0.4 0.1 0.3-0.2 0.4-1.1 0.9-0.3 0.1-0.3 0.6-0.3 0.2-0.4-0.1-0.3-0.1-0.9-0.6-0.3-0.2-0.3 0-1.3-0.1-0.5-0.1-0.3-0.3-0.6-0.4-0.2-0.3 0-0.5-0.1-0.2-0.2-0.1-0.3-0.2 0-0.2 0.2-0.1 0.3 0 0.2 0 0.8-0.1z m70.4 1l0.1 0.1 0.2 0.1 0.1-0.1 0.2-0.3 0.1-0.1 0.4-0.1 0.3-0.1 0.4-0.1 0.5 0.2-0.4 0.6-0.7 0.3-0.6 0.3-0.9 0.6-1.5 0.6-0.3 0-0.6 0-1.1 0.3-0.1 0.1 0 0.7-0.1 0.2-0.3 0.3-0.9 0.6-0.3 0.3-0.2 0-1.1 0 0.3-0.3 0.9-1.1 0.4-0.4 0.2-0.3 0.2-0.3 0.3-0.1 0.2-0.1 0.6-0.2 0.2-0.2 0.2-0.3-0.1-0.2-0.1-0.3 0-0.4 0.1-0.4 0.2-0.2 0.2 0 0.3 0.2 0.5 0.1 0.9-1.1 0.5-0.2 0.3 0.1 0.7 0.8-0.1 0.2-0.1 0.2z m-83.6-0.8l-0.5 0.1-1.1-0.3 0-0.2 0.1-0.2 0-0.7 0.1-0.3 0.2-0.2 0.4-0.2 0.3 0.1 0.3 0.1 0.2 0.3 0.2 0.3 0 0.4 0 0.3-0.2 0.5z m55.2-6.5l0.2 0.1 0.7 0 0.5 0.2 0.2 0.1 0.1 0.1 0 0.3-0.2 0.5 0.1 0.2 0.3 0.1 0.1 0.3 0.1 0.4-0.1 0.4-0.3 0.3-0.7 0.8-0.7 1.3-0.1 0.3-0.4-0.1-1.4-0.3-0.1-0.2-2.1-2.3-0.2-0.5 0.1-1.5 0.3-0.6 0.7-0.2 2 0 0.2 0 0.5 0.2 0.2 0.1z m6.5-1.1l0.2 0.1 0.2 0.2-0.1 0.3-0.3 0-0.3-0.2-0.2-0.1-0.2 0-0.2 0 0.1-0.3 0.4 0 0.2 0 0.2 0z m-1.1-0.4l-0.2 0.2-0.2-0.1-0.1-0.2-0.2-0.1-0.1-0.3 0-0.2 0.1-0.1 0.2-0.1 0.2 0.1 0.1 0.2 0 0.2 0.2 0.4z m24.2-2.6l-0.2 0.9-0.3 0.4-0.3 0.2-1-0.2-0.3 0.1 0.2 0.6-1.2-0.1-0.4-0.2 0.3-0.7 0.1-0.1 0.3-0.2 0.2-0.1 0.6 0 0.4-0.1 0.3-0.2 0.2-0.2 0.1 0.1 0.2 0 0.2-0.1 0.3-0.2 0.2 0 0.1 0.1z m-95.7 1l0.3 0 1.3-0.1 0.4 0.1 0.1 0.2 0.2 0.4 0.1 0.3 0.1 0.6 0 0.2-0.1 0.2-0.2 0.1-0.2-0.1-0.3-0.1-0.2-0.1-0.9 0.1-0.5 0.1-0.3-0.2-1.8 0.6-0.2 0.1-0.5 0.5-0.2 0.1-0.5 0.2-0.2 0.1-1.1 1.5-0.1 0.1 0.1 0.4-0.2 0.2-0.2 0.3-0.3 0.5-0.2 0.2-0.2-0.2-0.5-0.5-0.2 0-1.1 0-0.5-0.1-1.1-0.3-0.5-0.1-1.9 0.3-0.4-0.2-0.3-0.3-0.4-0.3-0.5-0.1-0.5 0.2-0.4-0.2-0.4 0-1.2 0.2-0.4 0.2-0.3 0.1-0.5 0-0.2 0-0.2 0.1-0.1 0.3-0.1 0.2-0.4 0.1-1.9 1.5-0.5 0.2-0.3-0.2 0-0.3 0.3-0.5 0.2-0.4 0.2-0.2 0-0.2 0-1.5 0.2-0.3 0.2-0.3 0.3-0.3 0.3 0 0.4-0.2 0.1-0.5 0.1-0.5 0.1-0.3 0.5-0.3 0.1-0.1 0.2-0.4 0.6-0.9 0.2-0.2 0.2-0.2 0.3 0 0.2 0 0.7 0.3 0.2 0.2 0.1 0.1 0.2 0.1 3.4 0.5 0.3-0.1 0.6-0.4 0.4-0.1 0.4 0 0.5 0.1 0.5 0.1 0.4-0.2 1.1-1 1.2-0.5 0.7-0.5 0.4-0.1 2.2-0.5 0.3-0.2 0.2 0 0.1 0.1 0 0.5 0 0.2 0.1 0.2 0.3 0.2 0.9 0.5 0.3 0.2 0.2 0.3 0.2 0.2z m64.2-2.5l0.2 0.1 0.2 0 0.2-0.1 0.1 0.1 0 0.2-0.4 0.2-0.3 0-0.1-0.2-0.4-0.2-0.1-0.3 0.1-0.3 0.2 0.1 0.3 0.4z m-49.7 2.1l-0.4 0.1-0.3 0-0.2-0.3 0-0.4 0-0.2 0.1-0.2 0.3-0.1 0.2-0.1 0-0.2 0-0.4-0.3-0.7 0-0.3 0.2-0.4 0.3-0.1 0.7 0.2 0.5 0.2 0.3 0.1 0.3 0.1 0.3 0.1 0.1 0.3 0 0.7-0.1 0.3-0.3 0.1-0.8 0.4-0.3 0-0.2 0.2-0.2 0.4-0.2 0.2z m75.4-3.6l0.7 0.6 0.2-0.2 0.3 0.1 0.3 0.2 0.3 0.1 0.7-0.2 0.1 0.1-0.3 0.3 0.3 0.2 0.1 0.1 0 0.1-0.2 0.1-0.3-0.2-0.1-0.1-0.5 0.3-0.9 0-0.8-0.2-0.3-0.1-0.1-0.3 0.1-0.3 0.3-0.6 0.1 0z m6.9-1.6l-0.3 0.2-0.9 0.9-0.5 0.3-0.2 0.1-0.1 0.3-0.2 0.2-0.2 0-0.3 0.1 0-0.2 0.2-0.2 0.1-0.3-0.5 0-0.5 0.2-0.4 0-0.4-0.3-0.1-0.4 0.2-0.4 0.2-0.3 0.4-0.2 0.2 0 0.1 0 0.4 0.1 0.3 0 1.3-0.2 0.3-0.1 0.4 0 0.2-0.1 0.2 0.1 0.1 0.2z m2.2-2l0 0.1 0.2-0.2 0.1 0 0.1 0.2-0.1 0.2-0.1 0.1-0.5 0.3 0.2 0.3-1.1-0.1-0.3-0.2 0.4-0.2 0.2-0.4 0.4-0.5 0.1-0.2 0.4 0.6z m8.1-3.4l0 0.1 0.3-0.1 0.2-0.2 0.3-0.4 0.3-0.2 0.1 0.1 0.1 0.3 0.5 1 0 0.3-0.3 0.2-0.3 0.1-0.3 0.1-0.3 0-0.2-0.1-0.2 0-0.2 0.2-0.2 0.3-0.1 0.2 0.1 0.6 0 0.4 0 0.2 0.5 0.8 0.1 0.3 0 0.3-0.3 0.2 0.2 0.3 0.6 0.4 0.2 0 0.1 0.2-0.3 0-0.3 0.6-0.1 0.5-0.1 0.1-0.3 0.2 0.2 0.5-0.1 0.5-0.3 0.5-0.2 0.9-0.2 0.5-0.3 0.4-0.3 0.1-0.1 0.1-0.5 0.9-0.1 0.1-0.3 0.3-0.4 0.1-0.6 0.1-0.3 0.2 0.1 0.5-0.1 0.2-0.2 0.1-0.2 0.1-0.3-0.1 0.2 0.5-0.3 0.2-0.3 0.2-0.2 0.1-0.1 0.2-1 0.7-0.1 0.3-0.1 0.3 0 0.4-0.2 0.2-0.3 0.2-0.2 0.2-0.2 0.4 0.2 0 0.2 0.1 0.1 0.1-0.2 0.4-0.1 0.2 0 0.3-0.3 0.3-0.4 0.3-0.3 0.2-0.2-0.3 0.3-0.8 0.1-0.5-0.2-0.2-0.2 0-0.1-0.1-0.1-0.1-0.3 0.2-0.1 0.2-0.1 0.5 0 0.3-0.6 0.3-0.9 0.1-1.6-0.1-0.2-0.3 0.1-0.4 0.3-0.9 0-0.4-0.2-0.3-0.3-0.2-0.2 0.1-0.2-0.5 0.1-0.5 0.3-0.4 0.4-0.3 0.3 0 0.2 0.1 0.2 0 0.2-0.2 0-0.3-0.2-0.1-0.3-0.2 0-0.2 0.4 0 0-0.2-0.1-0.3 0-0.2-0.2 0-0.2 0 0-0.1 0-0.3-0.2 0 0 0.2-0.1 0-0.1-0.6 0.1-0.3 0.4-0.1 0.5 0.1 0.9 0.5 0.4 0 0.6-0.2-0.4-0.1-0.4-0.2-0.4-0.2-0.3-0.7 0-0.2 0.2-0.1 0-0.1 0.1-0.8 0.2-0.4 0.4-0.7 0.1-0.3 0.1-0.6 0.2-0.4 0.3-0.3 1.3-1.1 0.3-0.1 0.2 0.1 0.2 0.3 0.2 0 0.1-0.2 0.3-0.7 0.1-0.1 0.2-0.2 0.1-0.3-0.1-0.2 0-0.2 0.2-0.2 1.2-0.1 0-0.2-0.1-0.2 0-0.2 0.1-0.4 0.2-0.3 0.4-0.5 0.2-0.4 0.1-0.1 0.3-0.1 0.4 0 0.4-0.2-0.3-0.6-0.1-0.4 0.2-0.4 0.7-0.5 0.5-0.2 0.6-0.2 0.4-0.1 0.4 0.1 0.1 0.3-0.1 0.9z m5.7-1.4l0.3 0.2 0.3 0.3 0 0.3 0.2 0.3 0.5 0.4 0.1 0.4 0.1 0.8-0.1 0.4-0.4 0.2-0.2-0.1-0.7-0.6-0.2-0.1-0.2-0.8-0.6-0.4-0.7 0-1.6 0-0.6-0.1-0.2-0.4 0.5-0.7 2.6 0 0.5 0 0.4-0.1z m-70.4 1.6l-0.8 0.9-0.4-0.2-0.8-0.7-0.8-0.3-0.3-0.3-0.1-0.4 0.2-0.4 0.6-0.5 0.6-0.4 0.6-0.2 0.2 0.1 0.3 0.3 0.2 0.2 0.2 0.1 0.4 0 0.1 0 0.3 0.3 0.1 0.3-0.3 0.2-0.4 0.1-0.3 0.2 0.2 0.3 0.3 0.3-0.1 0.1z m10.1-3.9l-0.1 0-0.2-0.1-0.2-0.2 0-0.3 0.2-0.1 0.2-0.1 0.2 0 0.2 0.3-0.1 0.3-0.2 0.2z m8.4-6l0.1 0.1-0.1 0.2-0.2 0.5-0.2 0.2-0.2 0-0.3-0.2-0.1 0-0.1-0.1 0-0.3 0.2-0.3 0.2-0.1 0.3 0 0.2-0.1 0.2 0.1z m45.5-0.3l-0.4 0.4-0.5-0.2-0.3 0.3 0 0.4 0.5 0.3-0.2 0.4-0.4 0.3-0.3 0.1-0.5-0.5 0.2-0.9 0.6-0.9 0.7-0.4 0.5 0.1 0.2 0.2-0.1 0.4z m66.3 1l-0.2 0.4-0.3-0.1-0.7-0.5 0.2-0.3 0-0.1-0.1-0.4 0.1-0.2 0.8-1.1 0.2-0.9 0.1-0.2 0.1-0.2 0.2-0.1 0.3 0 0.2 0.2 0.3 0.2 0.1 0.2 0 0.4-0.2 0.7-0.1 0.4-0.2 0.3-0.2 0.2-0.5 0.8-0.1 0.3z m1.1-4.6l-0.3 0.2-0.2-0.1-0.2 0.1-0.2 0.1-0.2 0.1-0.5-0.1-0.1-0.4-0.1-0.5-0.2-0.3-0.2-0.2-0.1-0.2 0.2-0.2 0.3-0.3 0.4-0.2 0.5 0.1 0.4 0.2 0.3 0.4 0.2 0.4 0.1 0.5-0.1 0.4z m-102.2-4.8l-0.2 0-0.1 0-0.2-0.2 0-0.2 0.1 0 0.4 0.1 0.1 0.1-0.1 0.2z m99.6 2.1l-0.1 0.4-0.3 0.3-0.8 0.4 0.3 0.4-0.1 0.5-0.4 0.3-0.7-0.3-0.2-0.3-0.1-0.3-0.1-0.5-0.1-0.2-0.5-0.6-0.3 0-0.3 0-0.2 0-0.1-0.3-0.1-0.2-1.3-0.5-0.2-0.2-0.1-0.3 0.1-0.2 0.1-0.2 0.4-0.3 0.4-0.2 0.3-0.4 0.3-0.2 0.4-0.1 0.3 0.1 0.3 0.2 0.6 0.3 0.3 0.2 0.5 0.6 0.3 0.3 0.4 0.1 0.3 0.2 0.3 0.2 0.3 0.4 0.1 0.4z m5 0.8l-0.3 0.3-0.3-0.2-0.3-0.3-0.1-0.2 0.3-0.2 0-0.1-0.3-0.6 0.1-0.6 0.4-0.6 0.4-0.1 0-0.6 0-0.4 0.2-0.1 0.3-0.1 0.3 0.1 0.3 0.2 0.1 0.3-0.1 0.5-0.1 0.4-0.4 0.8-0.5 1.5z m-8.7-0.3l0.1 0 0.2-0.1 0.1 0.1 0.1 0.1 0.1 0.3 0.4 0.7 0 0.2 0.1 0.1 0 0.2-0.2 0.2 0 0.1 0.1 0.9 0.6 0.2 0.2 0.1-0.1 0.3-0.2 0.2-0.1 0.4-0.1 0.2-0.5 0.5-0.5 0-0.5-0.2-0.6 0.1 0 0.2 0.4 0 0.3 0.3 0.1 0.1-0.1 0.2-0.2 0.3-0.3 0.2-0.3 0.1-1.1 1.8 0.4 0.1-0.1 0.3-1.1 0.9-1.4 0.5-0.8 0.6-0.5 0.1-0.6-0.9-0.2-0.4-0.1 0-0.3-0.2-0.8-0.2-0.4-0.3-0.2-0.6-0.2-0.5 0-0.2 0-0.3 0.2-0.7 0.5-1.7 0.4-3.7 0.1-0.3 0.2-0.2 0 0.3 0.2 0.4 1.2 0.2 0.6 0.4-0.1-0.4-0.3-0.6-0.1-0.4-1.1 0.1-0.4-0.7 0.2-2-0.2-0.8-0.4-1.4-0.1-0.7 0.1-0.3 0.2-0.2 0.3 0 0.3 0.1 0.2 0.3 0.1 0.3 0.3 0.3 0.7 0.2 0.3 0.2 0.8 0.7 0.6 0.5 0.4 0.2 0.1 0.1 0 0.3-0.1 0.2-0.1 0.2-0.1 0.1 0.6 0.7 0.4 0.4 0.4 0.2 0.9 0.2 0.3 0.2 0.3 0.3 0.4 0.3z m-6.1-9.6l0 0.9 0.1-0.1 1-0.4 0.2 0 0.2 0.1 0.2 0.7 0.1 0.3 0.1 0 0.1-0.1 0.5-0.2-0.1 0.4-0.5 0.4-0.1 0.3-0.1 0.4 0.2 0.3 0.3 0.3 0.3 0.5 0.3-0.1 0.3 0.2 0.7 1.1 0.2 0.1 0.4 0-0.1 0.2 0 0.1 0.5 0 0.2 0.1 0.2 0.2 0.3 0.1 0.3 0.1 0 0.1-0.6 0.1-0.3 0.3-0.3 0.4-0.5 0.3-0.2 0-0.2-0.5-0.5-0.5-0.3-0.1-0.1 0.1-0.2-0.2-0.9-0.8-0.4-0.7-0.3-0.3-0.4 0.3-0.5-0.2 0.1-0.3 0.3-0.4 0.2-0.3-0.1-0.4-0.3 0-0.6 0.5-0.5-0.8-0.1-1 0.2-0.9 0.7-0.6z m1.1-3.9l-0.3 0.1-0.3-0.1-0.2-0.4-0.1-0.4 0.1-0.5 0.2-0.3 0.3 0 0.4 0.1 0.4 0.3-0.1 0.4-0.1 0.5-0.3 0.3z m-32.7-4.6l0 0.3-0.2 0.3 0 0.1 0.2 0.2 0.2 0 0.3-0.1 0.2 0 0.2 0.1 0 0.2 0.1 0.4 0.2 0.8 0.2-0.1 0.1 0 0.1 0.5 0.1 0.4 0.1 0.5 0.4 0.1 0.2 0.2 0 0.5-0.1 1-0.2 0.5-0.2 0.4-0.3 0.4-0.3 0.4-0.4 0.2-0.3-0.4-0.1-0.5-0.2-0.1 0 0.3-0.1 0.2-0.2 0.1-0.2-0.1-0.1-0.1-0.3-0.4-0.1-0.1 0-0.3 0-0.5-0.1-0.3 0-0.3 0.2 0 0-1.2 0-0.5 0.3 0-0.1-0.2-0.2-0.8-0.3 0-0.1-0.1 0.1-0.2 0.1-0.3-0.1-0.1-0.3-0.1-0.1-0.2 0-0.4 0-0.1-0.3-0.4-0.1-0.2-0.1-0.3 0.8 0.4 0.1 0 0.3-0.2 0.3-0.3 0.2 0 0.1 0.4z m1.9-1.4l0.4 0 0.1 0.1 0 0.2-0.3 0.9 0 0.4 0 0.3 0.1 0.4 0.2 0.3-0.1 0.3-0.3-0.2-0.1-0.2-0.2 0.3-0.1 0-0.2 0-0.2-0.2-0.3-0.9 0-0.6 0.2-0.6 0.3-0.7 0.4-0.4 0.1 0.2 0.1 0.2-0.1 0.2z m-9.6-0.4l0.3 0.1 0.4-0.1 0 0.2-0.2 0.2-0.1 0.2-0.2 0.2-0.3 0.1-0.2-0.1-0.3-0.4-0.2-0.4-0.1-0.3 0.3-0.2 0.6 0.5z m48.5-2.4l1 0.4 0.2 0.3 0.3 0.8 0.2 0.3 0.6 0.4 0.2 0.2-0.1 0.1-0.5 0.2 0.2 0.1 0 0.1 0.1 0.4-0.1 0 0-0.1-0.5 0.1-0.3 0.1 0.1 0.1 0.6 0.1 0.4 0.2 0.4 0.2 0.6 0.7 0.5 0.7-0.4 0.3-0.3 0.6-0.2 0.5 0 0.4 0.3 0.1 0.1 0 0 0.3 0 0.3-0.1 0.4-0.5 0.4-0.1 0.3 0.4 0 0.4 0.2 0.3 0.3-0.1 0.4 0.1 0 0.2 0.3-0.2 0.1-0.5 0.3-0.2 0.2-0.1-0.4-0.2-0.1-0.2 0.1-0.1 0.4 0.2 0.2 0.5 0.2 0.2 0.2-0.3 0 0.3 0.5-0.3 0-0.6-0.2-0.4-0.2-0.3-0.3-0.2-0.1-0.3 0-0.3 0-0.3 0.1-0.1 0.1-0.1 0.2 0.9-0.1 0.3 0.2 0.1 0.4 0.2 0.3 0.8 0.7 0.4 0.2 0.8 1 0.2 0.3-0.1 0.5-0.3 0.5-0.4 0.4-0.4 0.3-0.3-0.2-0.1 0.3-0.1 0.2-0.1 0.2 1.1-0.4 0.4-0.3-0.1 0.4-0.2 0.3-0.1 0.2 0.2 0.5-0.1 0.2-0.1 0.3-0.4 0.8-0.1 0.4-0.4 0.5-1.5 0.6-0.5 0.4-0.5-0.3-0.3-0.1-0.3 0.1-0.1 0-0.4-0.5-0.4-0.4-0.1 0-0.2-0.3-0.9-0.5-0.2-0.3-0.3 0-1.3-0.5-0.1 0-0.2-0.4-0.1 0-0.3 0.1-0.3-0.1-0.1-0.2-0.2-0.5-0.6-0.7-0.3-0.8 0-0.8 0.4-0.6 0.4-0.2 0.4 0.1 0.4 0 0.4-0.4 0-0.2-1.2 0.1-0.2-0.3 0-0.3 0.2-0.4 0.1-0.4-0.1-0.2-0.5-0.7 0-0.1 0.2-0.1 0.3-0.3 0.2-0.2 0-0.5 0.8-0.4-0.1-0.3 0-0.2 0.5-0.5 0-0.2-0.4-0.3-0.1 0.3-0.3 0.2-0.2 0-0.1-0.5-0.2-0.2-0.4-0.1-0.7 0-0.4-0.2-0.3-0.2-0.6-0.4-0.1-0.4 0.3-0.4 0.5-0.2 0.4-0.1 0.4 0.1 0.7 0.6 0.5 0.1 0.4-0.1 0.2-0.2 0-0.3 0.2-0.4 0.2-0.2 0.3-0.2 0.3-0.3 0.2-0.6 0.9-1.7 0.1 0.4 0.3 0.1 0.2-0.1 0.2-0.3 0.3 0.2 0-0.4 0-0.3-0.1-0.1-0.2-0.3 0-1.1 0-0.1 0.2-0.2 0.3-0.1 0.2 0.2 0.3 0.1 0.6-0.3 0.3-0.1z m-56.6-0.8l-0.2 0-0.1-0.3 0.1-0.7 0.3-0.4 0.4-0.2 0.3 0 0.1 0.4-0.3 0.9-0.2 0.1-0.2 0-0.2 0.2z m23.3 5.7l-0.3 0.1-0.3 0.6-0.5 0.4-0.4 0.6-0.4 0.8-0.2 0.7 0 0.4 0.2 0.7 0 0.4-0.2 0.2-2 2.5-0.3 0.2-0.1-0.3 1.3-3.7 0.5-0.6 0.1-0.2 0.1-1.4-0.1-0.3 0.8-1.3 0.4 0.1 0.3 0.2 0.2-0.1 0.2-0.9 0.1-0.9 0.1-0.4 0.3-0.8 0.8-2.5 0.5-0.7 0.2-0.3 0.1-0.9 0.2-0.3 0.4-0.2 0.4 0 0.3 0.2 0.3 0.3 0.1 0.3 0 0.5-0.1 0.3-0.3 0.2-0.1 0.2-0.6 3.1-0.6 1.6-0.1 0.3-0.6 0.5-0.2 0.1-0.2 0.1-0.3 0.2z m-28.2-19.4l-0.2 0.2-0.2-0.3-0.1-0.5 0-0.5 0.2-0.3 0.4 0.3 0 0.6-0.1 0.5z m-39.1-5.3l0 0.9-0.3 0.1-0.4 0-0.3 0.1-0.2-0.1-0.2-0.1-0.2-0.1-0.3 0 0.3-0.2 1-0.1 0.2-0.2 0.1-0.3 0.2-0.2 0.1 0.2z m37.6 0.2l-0.4 0.2-0.1-0.2-0.9-1.8-0.2-0.3 0.2-0.1 0.1 0 0.3 0.1 0.4 0.5 0.4 0.8 0.2 0.8z m-6.2-8.1l-0.2 0.1-0.7-0.5-1-0.4-0.2-0.2-0.2-0.2-0.1-0.2 0-0.2 0-0.2 0.1-0.2 0.2 0.1 0.2 0.2 0.3 0.3 1 0.7 0.4 0.4 0.2 0.3z m-3.2-2.4l-0.1 0.1-0.3-0.2-0.2-0.4-0.2-0.5 0-0.4 0.6 0.2 0.2 0.2 0.1 0.3 0 0.5-0.1 0.2z m4.5 0.3l-0.2 0.2-0.5-0.1-0.4-0.3-0.2-0.4-0.5-1-0.1-0.3 0.1-0.2 0.2-0.1 0.3-0.1 0.5 0.2 0.2 0.5 0.2 0.7 0.4 0.9z m-91.4-3.2l-0.4 0.2-0.7-0.2-0.4 0-0.6-0.5-0.2-0.4 0-0.5 0.6-0.7 0.4-0.1 0.3 0 0.8 0.3 0.3 0.3 0.1 0.3 0.1 0.5-0.2 0.4-0.1 0.2 0 0.2z m33.7-4.7l-0.4 0.2-0.3-0.1-0.3-0.3-0.1-0.5 0.3-0.4 0.4-0.1 0.4 0.1 0.1 0.4 0.2 0.3-0.3 0.4z m-7.9-1.5l-0.8 0.4-0.2-0.4 0.2-0.4 0.1-0.4 0.1-0.4 0.1-0.3 0-0.3 0.2-0.2 0.2-0.2 0.7-0.3 0.4 0.2 0.8 0.1 0.3 0.2 0.3 0.3 0.4 0.5 0.1 0.5-0.4 0.2-0.4 0-0.8 0.4-0.9 0.1-0.4 0z m-2.4-1.2l0.2 0.5 0.1 0.4 0 0.3-0.5 0.2-0.2 0-0.4-0.3-0.3-0.1-0.4 0-0.1 0.1 0.1 0.3 0.5 0.7 0.1 0.2-0.1 0.1-0.4 0.6-0.4 0.3-0.6 0.2-0.6 0-0.5 0.2-0.3 0.3-0.4 0.3-0.7 0.1 0.2-0.2 0.5-0.3 0.1-0.2 0.4-0.8 1.2-0.8 0.3-0.4-0.4-0.2-0.4 0.2-0.8 0.6-0.9 0.4-0.5 0.3-0.6 0.1-0.2 0.1-0.5 0.4-0.3 0.5-0.5 0.3-0.7 0-0.4-0.2-0.2-0.4 0-0.4-0.3-0.5 0.1-0.2 1-1.2 0.5-0.4 1.1-0.7 0.3-0.1 0.3 0 1.8 0.1 0.3-0.1 1.8-1.3 1-0.4 0.9 0.1 0.4 0.4-0.1 0.3-0.3 0.3-0.2 0.3z m7.4-0.8l0.2 0.1 0.2-0.5 0.3-0.3 0.3 0 0.3 0.5 0.1 0.5 0 1.5-0.4-0.3-0.5-0.4-0.4-0.3-0.3 0.2 0 0.3 0.1 0.2 0 0.2-0.3 0.2-0.2 0-0.1-0.1-0.2-0.2-0.6-0.8-0.2-0.4-0.3-0.5-0.2-0.4 0-0.4 0.5 0 0.3 0 0.2 0.1 0.3 0.4 0.2 0.2 0.7 0.2z m-24.5-6.1l0 0.1 0.7 0 0.4 0.2 0.7 0.9 0.3 0.3 0.2 0.4 0.1 0.3-0.4 0.2-0.5-0.1-0.8-0.4-1-0.2-0.4-0.2-0.2-0.3-0.3-0.3 0.1-0.1 0.6-0.3 0.2-0.3 0.1-0.2 0.2 0z m5.3-0.2l-0.2 0.1-0.6-0.1-1.3 0.2-0.5-0.2-0.3-0.4 0.3-0.5 0.6-0.5 0.5-0.5 0.7 0 0.3-0.1 0.1 0 0.2 0.2 0.3 0.2 0.1 0.3 0.1 0.3 0.1 0.3-0.2 0.5-0.2 0.2z m-19.6-2.9l0.4 0.3 0.5-0.2 0.4 0.3 0.5 0.2 0.5 0.1 0.4 0.1 0.8 0.6 0.4 0.1 0.6 0.3 0.2 0.2 0.2 0.2 0.1 0.2 0.1 0.2 0.1 0.7-0.1 0.2-0.4 0-0.5-0.2-0.3-0.1-0.3 0.3 0 0.3 0.1 0.4 0.2 0.4 0.2 0.3 0.1 0 0.3 0.3 0.3 0.3 0.4 0.1 0.2-0.1 0.3-0.5 0.2-0.1 0.3 0 0.7 0.4 1 0.2 0.5 0.2 0.2 0.3-0.1 0.4-0.4 1-0.2 0.4 0.1 3-0.4 0.8-0.4 0.3-0.5 0.1-0.4-0.2-0.5-0.1-0.4 0.1-2.6 1.3-0.3 0.1-0.2 0.2-0.5 0.6-0.3 0.3-0.8 0.4-1.7 0.5-1.1 0.5-0.8 0.6-0.5-0.1-0.5 0.2-0.5-0.5-0.3-0.1-1.5-0.4-0.7-0.5-0.7-0.1-1.9-0.9-1.2-1-0.4-0.1-0.8-0.2-1.1-0.6-0.4-0.4-0.3-0.3-0.9 0-0.6-0.6-0.2-0.7-0.4-1-1.3-0.9-0.4-0.3-0.4-0.5-0.2-0.6 0-0.1-0.7-1.2-0.4-2.4 0.6-1.7 0.4-0.4 0.6-0.4 0.6-0.5 0.4 0.2 0.2 0.6 0.4 0.3 0.5 0.2 0.5 0.2 0.4 0.1 0.5-0.2 0-0.6 0.7-0.6 0.9-0.3 2.7-0.8 6.4-0.2 2.6 0.3 0.5 0.3 0.3 0.5z m24.1-3.5l-0.3 0.5-0.2 0.2-0.2 0.6-0.1 0.2-0.3 0.2-0.3 0-1.8 0.1-0.2-0.1-0.1-0.2 0.3-0.4 0.4-0.2 0.4-0.2 0.3-0.3 0.2-0.1 0.3 0 0.3-0.2 0.2-0.2 0-0.2-0.2-0.4 0.6 0 0.4 0.1 0.3 0.2 0.2 0.2-0.2 0.2z m33.8-3.7l0.1 0.3 0.2 0.1 1.2 0.2 3.1 1.3 0.3 0 0.2 0.2 0.5 0.7 0.2 0.2 0.4 0 0.2-0.1 0.3-0.1 0.3-0.1 0.1 0.1 0.1 0.4 0.3 0.2 0.2-0.2 0.3 0.1 0.4 0.3 0.3 0.4 0.5 0.2 1.8 0.4 3.6 0 1.9-0.3 0.9 0 1 0.4 2.2 2 0.3 0.2 1.6 0.6 0.2 0.1 0.1 0.2 0.2 0.8 0 0.1 0.5 0.7 0.2 0.9 0 1.8 0.1 0.4 0.4 0.6 0.1 0.2 0.1 0.3 0.4 0 0.8 0 0.9 0 0.7 0.3 0.5 0.3 0.3 0.6-0.4 0.1 0 0.4 0.1 0.5 0.3 0.4 0.7 0.7 0.2 0.4 0.1 0.4-0.1 0.5-0.1 0.2-0.3 0.5-0.1 0.3-0.3 0.4-0.1 0.3-0.1 2.8 0.1 0.3 0.2 0.4 0 0.2-0.5 0.1-0.4-0.2-0.7-0.6-0.3-0.1-0.5 0-2.1-0.8-0.4-0.1-0.2-0.2-0.9-1-0.3-0.2-0.3-0.2-0.4-0.2-0.6 0-0.3-0.1-0.2-0.3-0.4-0.6-0.3-0.3-0.4-0.1-0.4-0.2-0.5 0-0.4-0.1-1-0.7-4-1.3-0.4-0.4-0.1-0.1-0.3 0-1.1-0.4-0.8-0.4-0.4-0.3-0.2-0.3 0-0.1-0.2-0.3-0.1-0.2 0-0.6 0-0.2-0.6-0.7-0.9-0.4-7.5-0.7-0.8 0.1-0.2 0.7 1.1 1.5 0.3 0.8-0.8 0.5-0.9 0-1.8-0.9-1-0.3-2.6-0.2-1-0.2-1.7-0.9-0.6-0.2-0.6 0-1.6 0.2-0.5 0.1-0.5-0.5 0-0.2 0.2-0.5 0.7-1-0.2-0.4-0.4-0.3-0.4-0.2-0.5 0-0.5-0.2-0.2 0-0.6 0.8-1.3 0.5-0.2 0.2-0.1 0.2-1.8 1.5-0.2 0.3-0.2 0.3-0.1 0.2 0.1 0.2 0.3 0.2 0.1 0.1-0.4 0.5-0.9 0.1-1-0.1-0.8 0.1-0.9 0.4-0.6 0.2-0.4-0.2-0.3-0.3-0.7-0.3-0.4-0.4-2.5-4.1-0.3-0.2-0.9-0.1-0.4-0.1-0.6-0.2-0.1 0 0-0.6 0.2-0.5 0.3-0.7-0.1-0.4-0.3-0.4-0.4-0.1-0.6 0.1-0.6 0.6-0.4 0.7-0.3 0.6-0.2 0.8-0.2 2.2-0.1 0.3-0.2 0.3-0.3 0.7-0.2 0.2-0.2 0.1-0.4 0-0.1 0.1-0.2 0.2-0.1 0.4-0.3 0.5-0.2 0.4-0.3 0.7-0.1 0.4 0.1 0.2 0.1 0.2 0 0.1-0.3 0.5-0.1 0.2-0.6-0.6 0.1-1 0.7-1.9 0-1-0.1-0.5-0.1-0.2-0.2-0.1-0.7-0.9-0.2-1.3-0.1-0.3-0.6-0.4 0-0.2 0.5-0.2 0.2 0 0.5-0.1 0.2-0.1 0.2-0.2 0.5-0.5 0.3-0.2 0.3 0 0.6-0.5 0.3-0.2 0.4-0.1 0.4-0.1 0.5 0.1 0.3 0.1 0.5-0.1-0.3-0.8 0-0.2 0.1-0.3 0.4-0.3 0.1-0.2-0.3-0.2-0.4-0.1-0.4 0 0.2-0.3 0.2-0.1 0.6-0.1 0.2-0.1 0.3-0.8 0-0.3 0.4 0 0.1-0.4 0.1-0.3 0.2-0.1 0.3-0.1 0.5 0.2 3.7-0.1 0.8-0.2 0.9 0 0.9-0.3 0.3 0 0.5 0.1 0.8 0.3 0.6 0 4.3 0.1 0.9 0.1 0.5 0 0.9-0.1 0.9-0.3 1.5-0.6 0.8-0.3 0.3 0.4 0.1 0.7-0.2 0.9 0.4 0.2 0.5 1 0.4 0.2 0.2-0.1 0.5-0.1 0.3 0 0.2 0.2 0.2-0.1-0.1-0.3-0.1-0.2 0-0.1 0.3-0.1 0.4 0.4 0.2 0 0-0.3 0.2-0.2 0.3-0.2 0.7-0.3 1.2-0.6 0.6-0.2 0.1-0.3 0.1-0.4 0.1-0.4 0.6-0.3 1-0.2 1.7 0 0.3-0.1 0.1 0z",
    IDN557:
      "M627.9 174.2l0.1 0.2-0.1 0.3-0.1-0.1-0.3-0.4-0.1 0.1-0.3-0.1-0.2-0.1 0.1-0.3 0.3-0.5 0.2-0.1 0.2 0.3 0 0.3 0.2 0.4z m-4.8-1.9l-0.2 0-0.1-0.3 0-0.4 0-0.7 0.1 0 0 0.2 0.2 0.8 0 0.4z m1.6-0.5l-0.6 0.3-0.1-0.5 0.1-0.5 0.3-0.2 0.3 0.2 0 0.1 0.2 0.3 0 0.2-0.2 0.1z m2.7 1l0.1 0.2-0.2-0.1-0.2 0.1-0.2 0.1-0.2 0.1-0.5-0.2-0.3-0.1-0.1-0.3-0.3-1.2-0.1-0.6 0.4-0.5 1.2 1.2 0.2 0.2 0.1 0.3 0.1 0.8z m-16.6-2l-0.3 0.1-0.3 0-0.1-0.2 0.1-1.1 0.1-0.5 0.3-0.8 0.1-0.3 0-0.3 0.2-0.1 0.3 0.1 0.3 0.2 0 0.1 0.3 0.2 0.2 0.5 0 0.5-0.2 0.4-0.3 0.1-0.3 0.3-0.2 0.3-0.1 0.3-0.1 0.2z m4.8-2.6l-0.4 0.3-0.4-0.1-0.2-0.4 0.1-0.4 1.1-1.2 0.6-0.4 0.2-0.1 0.2 0.2 0.2 0.2 0 0.3-0.1 0.2-0.2 0.2-0.4 0.2-0.2 0.2-0.5 0.8z m5.4-3.8l0.3 0 0.2-0.1 0.2 0.1 0.2 0.2 0.2 0.3-0.1 0.3 0 0.3-0.1 0.5 0 0.3-0.2 0.3-0.6 0.4-0.2 0-0.2 0-0.2 0-0.2-0.1-0.3-0.2-0.1-0.1-0.1 0.1-0.2 0.1-0.2-0.1-0.2-0.2-0.2-0.6 0-0.5 0.1-0.3 0-0.3 0-0.2 0.3-0.3-0.1-0.3-0.2-0.1-0.1-0.3 0.1-0.4 0.2-0.5 0.2-0.3 0.3-0.1 0.2 0 0.1-0.2-0.1-0.3 0.2 0 0.1 0.1 0.2 0.2 0.3 1.1 0 0.2-0.1 0.2 0.1 0.4 0.2 0.4z m-8-9.7l1 1.5-0.2 0.2-0.1 0.2-0.2 0.1-0.3 0.1-0.2 0.1 0 0.3 0 0.5 0 0.3 0.4 0.4 0.2 0.2 0 0.3 0 0.7 0.1 0.3 0.5-0.4 0.4-0.5 0.6-1 0.3-0.2 0.1-0.1 0.3-0.5 0.2-0.6 0.2-0.3 0.3-0.1 0.4 0 0.2 0 0.3-0.1 0.1 0.2 0.1 0.4 0.3 0.2 0.1-0.1 0.2-0.3 0.2-0.2 0.3 0.2 0.4 0.5 0.4 0.1 0.4 0 0.4 0.1 0.2 0.3 0.1 0.4-0.1 0.5-0.2 0.8-0.2 0.4 0.1 0.7-0.1 0.2-0.1 0.2-0.5 0.6-0.9 0.8-0.2 0.1-0.4 0.1-0.2 0.1-0.4 0.1-0.6-0.3-0.4 0.2-0.1-0.8-0.1-0.4-0.4-0.1-0.1-0.1 0-0.5-0.2-0.1-0.5 0-0.2 0.1-0.1 0.1-0.5 0.8-0.2 1 0 2 0 0.5-0.2 0.2-0.1-0.2-0.1-0.4-0.1-0.3-0.3 0.1-0.8 0.5-0.1 0-0.2-0.2-0.1-0.2-0.7-0.2-0.2-0.1-0.1-0.2-0.1-0.3 0.1-0.2 0.4-0.2 1-0.6 0.2-0.7-0.5-2.9 0-0.7 0-0.2-0.2-0.2-0.2-0.1-0.2 0.6-0.3 0.2-0.3 0.1-0.3 0.1-0.5 1.1-0.1 0.2-0.3 0.1-0.2 0.3-0.2 0.7-0.4 0.7-0.5 0.5-1.6 1.4-0.5 0.3-0.5-0.1-1.3-3-0.1-0.9 0.1-1 0.2-1 0.3-0.8 1.4-2 0.3-0.1 0.5 0 0.7 0.3 0.3 0.1 0.3-0.1 0.4-0.4 0.3-0.1 1-0.1 0.8 0 0.1 0 0.4 0.3 0.2 0.1 0.3-0.1 0.1-0.2 0-0.2 0.2-0.3 0.2-0.1 0.2 0.1 0.1 0.1 0.1 0.1z m-29.2-16.4l0.9 0.6 0.1 0.2 0.2 0.5 0.1 0.2 0 0.4-0.2 0.2-0.2 0.2-0.4 0.1-0.1-0.1-0.5-0.5-0.3-0.1 0.2 0.5 0 0.1-0.3 0.1-0.3-0.1-0.4-0.3-0.2 0-1-0.2-0.2-0.1-0.2 0.1-0.5 1.1-0.3 0.2-0.4 0.2-0.3 0-0.3-0.1 0-0.4 0.2-0.4 0.6-0.9 0.2-0.2 0.3-0.2 0.7-0.3 0.1-0.2 0.3-0.6 0.5 0.5 0.5-0.1 0.5-0.3 0.7-0.1z m4.1-1.4l0.2 0.1 0 0.3 0 0.4-0.2 0.4-0.4 0.3-0.4 0.1-0.5-0.2-0.4 0.3-0.7 0-0.7-0.1-0.6-0.3-0.3-0.4 0-0.2 0.1-0.2 0.1-0.3 0.1-0.3 0.2 0 0.4 0 0.3 0.2 0.2 0 0-0.1 0-0.4 0.1-0.1 0.8 0 0.3 0.1 0.5 0.3 0.2 0 0.4 0 0.3 0.1z m2.2 0.8l-0.1 0.2-0.4 0.2-0.1 0-0.2-0.2-0.3 0-0.1 0.2 0 0.2-0.1 0.2-0.3-0.3-0.2-0.9 0-0.5 0.1-0.8 0.2-0.6 0.4-0.1 0.2 1.2 0.1 0.1 0.5 0.3 0.1 0.2 0.2 0.3 0 0.3z m1-3.6l-0.3 0.5 0.3 0 0.3 0 0.2 0.2 0.1 0.2 0.4 0.2 0 0.1 0 0.2-0.1 0.1-0.2-0.1-0.1-0.2-0.2 0-0.2 0.1-0.8-0.4-0.4-0.1 0-0.2 0.3-0.5 0.4-0.3 0.3 0.2z m3 0.5l0.4 0.2 0.3 0.2 0.2 0.3-0.1 0.4 0 0.5 0.2 0.5 0.2 0.3-0.2 0.1-0.5-0.5-0.7-1.4-0.6-0.4-0.4 0.1-0.2 0-0.1-0.1-0.3-0.3-0.4-0.4 0-0.2 0.1-0.2 0.2 0.1 0.6 0.3 0.1 0 0.1 0.1 0.2 0.2 0.9 0.2z m-15.3-0.7l-0.5 0.1-0.6-0.4-0.1-0.9 0.6-0.4 0.8 0 0.3 0.5-0.1 0.6-0.4 0.5z m-20.4-27l-0.4 0-0.7-0.5-0.6-0.1 0.2-0.1 0.3 0 0.2 0 0.5 0.2 0.1 0.2 0.4 0.3z m-6.5 0.4l-0.2 0.1-0.2-0.2 0-0.4 0.1-0.4 0.1-0.3 0.3-0.1 0.3 0.2 0.1 0.4-0.1 0.3-0.2 0.3-0.2 0.1z m39.3 0l0 0.1-1.2 0.8-2.1 0.9-1.1 0.2-2.2-0.8-0.4-0.1-0.4 0-0.3 0.1-2.6 1.1-1.4 0.5-0.6 0.3-0.4 0.1-1.3 0.4-0.9 0.3-0.3 0.1-0.2-0.1-0.5-0.1-0.9-0.2-0.6 0-0.3 0-0.5 0.1-0.3 0.1-0.9 0.6-0.2 0.2-0.3 0.3-0.4 0.5-0.2 0.3-0.2 0.6-0.1 0.3-0.5 0.3-1.2 0.5 1.2 1.3 0.3 0.4 0.4 0.3 0.2 0.2 0.5 0.1 0.4 0.1 0.3 0 0.3-0.1 0.2 0.1 0.1 0.2 0 0.3 0.1 1.2 0 0.3-0.2 0.5-0.3-0.1-0.5-0.3-0.3-0.1-0.5 0-0.9 0.4-0.4 0.1-0.5 0-0.3 0.1-0.3 0.1-0.3 0.4-0.2 0.3-0.2 0.2-0.2 0.1-0.2 0-0.8-0.2-0.3-0.1-0.6-0.5-0.4-0.1-0.3 0-0.7 0.3-1.4 0.2-0.3 0-0.4-0.2-0.1-0.2-0.1-0.3-0.1-0.1-0.1-0.1-0.7-0.1-0.1-0.1-0.1-0.3-0.2 0-0.3 0-0.4 0.1-0.2 0-0.4-0.2-0.7-0.7-0.4-0.1-3.9 0-0.3 0.1-1.7 0.9-0.4 0-0.3 0.1-0.3 0.3-0.3 0.3-0.2 0.2-0.5 0.4-0.9 1-1.3 1.9-1.2 1.4-0.6 0.7-0.1 0.3-0.1 0.7-0.1 0.2-0.3 0.5-0.1 0.4-0.1 1-0.2 1-0.2 0.5-0.3 0.4-0.8 0.5-0.1 0.2 0 0.3 0.1 0.5-0.2 1-0.1 0.5-0.2 0.4-0.2 0.3 0.1 0.6 0.4 2.8 0.2 0.4 0.6 0.8 0.1 0.5 0 0.2-0.2 0.5-0.1 0.2 0.1 0.2 0.2 0.5 0.3 2.1 0.4 1 3.3 5 0.3 0.2 1 0.8 0.5 0.1 0.5-0.3 0.4-0.3 0.5-0.2 0.5 0.1 0.3 0.3 0.2 0.4 0.2 0.5 0.2 0.1 0.2 0.1 0.5 0 0.3 0.1 0.2 0.2 0.2 0.6 1.4 2 0.1 0.3 0 0.2-0.1 0.2-0.1 0.2-0.1 0.7-0.2 0.5 0 0.3 0.2 0.3 1 1.1 0.2 0.5 0.2 0.8 0.2 0.5 0.3 0.5 0.3 0.2 1.3-0.6 0-0.1 1.5-0.4 0.6-0.1 0 0.1-0.1 0.7 0.1 0.2 0.3 0.1 0.5 0.1 0.5 0 1.4-0.2 0.4-0.1 0.3 0 0.2 0.1 0.5 0.5 0.3 0.2 0.8 0.1 0.7-0.4 0.6-0.5 0.8-1.3 0.1-0.3 0.1-0.8 0.3-1.1 0.1-0.4 0.2-0.2 0.4-0.4 0.4-0.3 0.3-0.1 0.2-0.1 0.3-0.4 0.3-0.7 0.6-0.7 1.2-1 1.2-1.9 0.5-0.6 1-1 0.3-0.2 0.5-0.1 0.9 0 0.1-0.1 0-0.4 0.1-0.2 0.2-0.1 0.5-0.2 0.2 0 0.3 0 0.4 0.3 0 1.3 0 0.3 0.6 0.4 0.2 0.4 0.2 0.1 0.1 0.1 1.9 0 1 0.1 0.9 0.3 0.8 0.1 0.9-0.3 0.7-0.5 0.5-0.1 0.5 0 0.5 0.1 0.4 0.1 0.4 0 0.6-0.4 0.2-0.4 0.3-0.8 0.1-0.7-0.1-0.4 0.9-0.7 0.3-0.1 4.4-0.1 0.8-0.2 0.8 0 1.6 0.4 0.8-0.1 0.4-0.3 0.2 0 0.3 0.1 0.4 0.3 0.6 0.1 0.3 0.3 0.4 0.1 0.5 0 1.1-0.4 2.7-0.2 0.3-0.1 0.4-0.2 0.3-0.3 0-0.1-1.4-0.3-0.3-0.5-0.3 0-1.9-0.2-0.3-0.1-0.3-0.1-0.2-0.2-0.2-0.2 0-0.2 0.4-0.2 0.3 0.2 0.3-0.1 0.6-0.4 0.2-0.2 0.1-0.1 0.4 0.2 0.1 0 0.2-0.2 1.9-0.2 0.5-0.1 0.2 0.2 0.4 0 0.4-0.1 0.3-0.1 0.3-0.2 0.3-0.5 0.2-0.2 0.3 0 3.6 0.3 0.7 0.3 1.5 0.8 1.3 0.5 0.3 0.2-0.2 0.3 0 0.2 0.2 0.2 0.1 0.4 0.1 0.1 0.2 0 0.2 0-0.1 0.5 0.3 0.6-0.3 0.7 0.1 0.9-0.1 0.4-0.6 0.6-0.2 0.3-0.3 2-0.1 0.4-0.7 0.8-0.9 0.2-0.9-0.1-0.6-0.4-0.7-0.9-0.2-0.2-0.1-0.1-1-0.8 0-0.2 0.1-0.6 0.1-0.2-0.2-0.3-0.2-0.3-0.5-0.4-0.4-0.2-0.8 1-0.5 0-0.6 0.3-2 0.1-0.9 0.2-0.8-0.2-0.6 0.6-0.9 2.1-0.2 0.3-0.6 0.6-0.2 0.3 0 0.4-0.1 0.3-0.2 0.1-0.2 0.1-0.2 0.1-0.7 0.4-0.3 0.4-0.2 1-0.2 0.3-0.9 0.4-0.3 0.3-0.9 1.4-0.4 0.2-0.2 0.2-0.2 0.4-0.3 0.5-0.1 0.1-1.5 1.4-0.6 0.7-0.2 0.3-1.4 0.7-1.6 1.1-0.7 0.7-0.4 0.2-0.2-0.1-0.3-0.2-0.3-0.2-0.5 0.1-0.8 0.4-0.5 0.1-0.2 0-0.4-0.1-0.2 0-0.1 0.1-0.3 0.3-0.7 0.5-0.4 0.1-0.3 0-0.5 0.2-0.4 0.1-0.9-0.1-0.1 0.4-0.2 0-0.3 0.3-0.3 0.1-0.2 0.1-0.2 0.1-0.2 0.4-0.2 0.8-0.6 1.3-0.3 0.6-0.5 0.6-0.5 0.5-0.7 0.2-0.7 0.2-1.4 0-0.3 0-0.2-0.1-0.2-0.3-0.5-0.6-0.1-0.1-0.3-0.1-0.7-0.3-0.3-0.4 0-0.3-0.1-0.3-0.5-0.2-1 0-0.1 0-0.3-0.4-0.1-0.1-0.8 0-0.3 0.8 0.1 0.6 0.8-0.1 0.1 0.3-0.1 0.5-0.2 0.4-0.1 0.5 0.1 0.2 0.2 0.2 0 0.2 0 1 0.5-0.4 0.3-0.4 0.1-0.3 0-0.3 0.2-0.2 0.3-0.2 0.2 0.4 0.5 1.1 0.7 0.5 0.2 0.4 0.3 0.3 0.5 0 0.5 0.5 0.4 1.7 0.4 0.6 1 0.3 0.9 0 0.9 0.1 0.8 0.6 0.6 0.7 1.2 1 0.5 0.7 0.4 0.8 0.2 0.5 0 0.4 0.2 0.3 1 1.1 0.8 1.2 0.3 0.8 0.7 0.9 0.2 0.4 0 0.5-0.2 1 0.1 0.2 1 1.1 0.5 0.5 0.3 0.1 0.8 0.1 0.2 0.1 0.1 0.1 0.1 0.2 0.1 0.1 0.2 0.1 0.2 0.1 0.1 0.3 0.1 0.5 0.1 0.5 0.4 0.2 0.8 0 0.4 0.1 0.5 0.2 0.5 0.8-0.4 0.8-0.5 0.8 0.2 0.9 0.2 0.1 0.6 0.3 1.5 1.6 0.2 0 0.3-0.1 0.5-0.3 0.1 0.3 0.1 0.2 0.1 0.2 0.3 0.2 0.2-0.2 0.1 0.1 0 0.2-0.2 0.3-0.1 0.1-0.3 0.1-0.2 0.1 0 0.2 0 0.3 0 0.7-0.1 0-0.3 0-0.3-0.3-0.3 0-0.1 0.2-0.6-0.5-0.4 0.5-1-1.3-1.8-1.5-0.5-0.2-0.4-0.2-0.3 0-0.4-0.1-1.3 0.1-0.4 0-5.2-2.1-0.8-0.2-2.4-0.1-1.6-0.2 0.4-0.3 3.4-3.4 0.3-0.6 0.1-0.4 0.1-0.4 0-0.5 0-0.4-0.2-0.6-0.2-0.5-0.3-0.4-0.4-0.4-2.3-1.1-0.7-0.4-1.3-1.2-1.2-1.5-0.4-0.3-0.5-0.3-1.1-0.5-1.1-0.4-11.8-2.4-0.9-0.4-3-2.5-0.8-0.8-0.8-0.9-2.3-3.5-0.4-0.4-0.5-0.2-0.4 0.1-0.3 0.2-0.1 0.2-0.2 0.5-0.1 0.2-0.2 0.2-0.4 0.1-0.7-0.1-3-0.9-1.2-0.1-0.7 0-0.4 0.1-1.8 0.9-1.2 0.8-0.8 0.4-0.4-0.1-0.2-0.1-0.2-0.2-0.2-0.3-0.1-0.3 0-0.5 0-0.3 0.5-1.8 0-0.3-0.2-0.4-0.3-0.6-0.6-0.8-0.6-0.5-0.9-1.3-0.3-0.4-0.1-0.6-0.3-2.3-0.3-0.6-0.2-0.3-0.3-0.3-0.4-0.2-2.5-1-0.4-0.2-0.2-0.2-0.2-0.4 0-0.5 0.2-0.7 0.3-0.4 0.3-0.3 1.4-0.9 0.2-0.3 0.1-0.4-0.2-0.7-0.5-1.4 0-0.6-0.1-0.7 0.1-2.5-0.1-1 0.5-0.3 0.2-0.5 0.1-0.1 0.7-0.3 1-0.9-0.5-0.5-0.1-0.2 0.1-0.2 0.3-0.1 0.5-0.3 0.2-0.2 0.5-0.6 0.1-0.1 0.1 0.1 0.3 0.8 0.1 0.6 0.8 1.6 0.4 1.2 0.3 0.6 0.5 0.3 0.3-0.9 0.1-0.4 0-0.6-0.2-0.4 0-0.2 0-0.7 0-0.2-0.2-0.4-0.5-0.5-0.1-0.2-0.1-0.3-0.5-1-0.2-0.8-0.1-0.8 0-0.2-0.3-0.7-0.1-0.5 0.5-5 0.2-0.7 0.2-0.2 0.2-0.3-0.1-0.7-0.1-0.6-0.2-0.4-0.6 0.3-0.7 0-0.7-0.1-0.5-0.3-0.4-0.5-0.4-0.6-0.3-0.7 0.2-0.6 0.3 0.2 0.4 0.1 0-0.5 0.2-0.3 0.5 0.3 0.4 0.4 0.6 0.7 0.4 0.7 0.3 0.3 0.5 0.2 0.3 0.1 0.3 0 0.1-0.2 0.3-0.5 0.2-0.4 0.5-1.9 0.2-0.5-0.4-0.8-1.6-2-0.2-0.2 0-0.3 0-0.4 0.2-0.2 1.3-0.5 0.3-0.3 0-0.4-0.2-0.3-0.1-0.5 0.1-0.5 0.5-0.8 0.3-0.4 0-0.3 0-0.4 0.1-0.2 0.2-0.3 0.3-0.1 0.2-0.2 0.3-0.1 0.4-0.2 1-0.1 0.4-0.2 0.3-0.7-0.1-0.9-0.2-0.8-0.1-0.9 0-0.5 0.2-0.5 0.2-0.4 0.4-0.2 0.2-0.1 0.5-0.1 0.3 0 0.3-0.1 1.4-0.6 0.4-0.3 0.5-0.4 0.1-0.4 0.3-2.2 0.2-0.7 0.5-0.6 0.9 0 0.4 0.3 0.2 0.4-0.2 1 0 1 0.2 0.3 0.3-0.2 0.1 0 0.2 0.4 0.2 0.3 0.4 0.3 0.4 0.2 0.7 0.1 0.3 0.2 0.2-0.1 0.2-0.2 0.5 0 0.4 0.1 0.3 0.2 0.3 0.3 0.3 0 0.3-0.3 0.7-0.8-0.3-0.5 0.3-0.9 1-1.5 0.5-0.5 0.1-0.1 0.2 0 0.3 0.2 0.2 0.2 0.3-0.1 0.1-0.2 0.2-0.4 0.1-0.3 0.2-0.1 0.4-0.1 0.2-0.1 0.2-0.4 0.1-0.3-0.1-1.4 0-0.2 0.1-0.2 0.1-0.3 0.2-0.2 0.2-0.5 0-0.4 0-0.8-0.2-0.8 0.1-0.5 0.2-0.3 0.2-0.1 0.5 0.1 0.2 0 0.2-0.1 0.6-0.5-0.1 0.6 0.1 0.3 0.2-0.1 0.4-0.4 0.2-0.2 0.4 0 2.1 0.4 0.4-0.1 1.1 0.3 0.6 0.3 0.5 0.7 1.8 0.9 1.1-0.5 0.5-0.1 0.9 0 0.4-0.1 0.5-0.3 0.4-0.4 0.2-0.1 0.3 0.1 0.1 0.2 0.1 0.3 0 0.3-0.1 0.2-0.2 0.1-0.6 0.2 0 0.2 0.2 0.3 0.1 0.2 0 0.5 0.1 0.2 0.4 0.5 0.1 0.2 0.2 0.4 1 0.8 0.4 0.2 0.9 0.2 0.9 0 6.4-0.8 0.4 0.2 0.3 1 0.3 0.3 0.4 0.2 0.5 0 0.3-0.3 0.5-0.5 0.3-0.1 0.6 0 1.3 0.6 0.6 0 0.3 0.1 0.1 0.1z",
    IDN556:
      "M631.9 260.4l-0.2 0.4-0.4-0.2-0.1-0.2 0-0.5-0.2-0.3-0.2-0.1-0.6-0.2-0.2-0.1-0.3-0.4-0.1-0.5 0.1-0.4 0.2-0.6 0.2 0.2 1.1 0.8 0.2 0.2 0.2 0.6 0.2 0.2 0.2 0.5-0.1 0.6z m-5.7-9.6l0.2 0.5-0.5-0.1-0.3-0.4-0.6-0.8-0.4-0.3-0.4-0.3-0.3-0.3-0.2-0.4 0.3 0 0.6 0 0.3 0.3 0.3 0.4 0.3 0.1 0.6 0.2 0.1 0.5 0 0.6z m-3.8-4.5l-0.3 0.3-0.6-0.1-0.4-0.2-0.3-0.3-0.8-1.6 0-0.6 0.4-0.1 0.5 0.2 0.7 0 0.6 0.3 0.3 0.5 0 1.1-0.1 0.5z m-37.2-5.9l0.4 0 0.1-0.1 0.4-0.4 0.2-0.1 0.2 0.1 0.1 0.2 0.3 1.3 0.3 0.3 0.5-0.1 0.2 0.3 0.3 0.3 0.1 0.3 0.1 0.5-0.1 0.2-0.3 0.2 0 0.2 0.1 0.6 0 3.6-0.1 0.4-0.4 0.3-0.3 0-0.4-0.1-0.3 0.2-0.3 0-0.7-1.1-0.3-0.3-0.3-0.1-0.4-0.1-0.2-0.1-0.1-0.2-0.2-0.5-0.9-1.3-0.4-0.9 0.1-0.2 0-0.6 0.1-0.3 0.2-0.2 0.1-0.3 0.2-0.3 0-0.3 0.1-0.1 0.6-0.1 0.2-0.1 0-0.2-0.2-0.3-0.4-0.4 0.2-0.4 0.4-0.3 0.3-0.2 0.4-0.2-0.1 0.4 0 0.3 0.2 0.2z m18.7-3.2l-0.2 0.2-0.1 0-0.3-0.1-0.2 0-0.2 0.5-0.2 0.3-1.4 1.5-0.4 0.5-0.8 1.7-0.1 0.5 0.1 0.2 0.5 0 0.2 0.1-0.1 0.3-0.1 0.2-0.1 0.1-0.6 0.1 0.2 0.2 0.5 0.2 0.4 0.2 0.1 0.2 0.1 0.2 0.1 0.5-0.1 0.6-0.2 0.5-0.2 0.2-0.3-0.3-0.2 0.3-0.1 0.5 0 0.5-0.1 0.3-0.2 0.1-0.1 0-0.2-0.2-0.1 0.1-0.3 0.3-0.4 0-0.1-0.9 0-1.1-0.1-0.5-0.2-0.2-0.1-0.3-0.2-0.1-0.3 0.5-0.1 0.2 0.1 0.4 0 0.3-0.3 0.7-0.4 0.3-0.4 0.1-0.4-0.2-0.3-0.3-0.2-0.6 0.2-0.3 0.7-0.3 0-0.2-0.3 0-0.3-0.1-0.2 0-0.4 0.3-0.1 0.2-0.1 0.2 0 0.7-0.2 0.2-0.2 0.1-1.1 0-0.3 0-0.2-0.1-0.3-0.3 0.2-0.1-0.2-0.4-0.1-0.4 0.2-0.4 0.5-1 0.2-0.5 0.1-0.5 0.1-1.6 0.2-0.5 0.2-0.3 0.2-0.1 0.5-0.1 0.6-0.8-0.1-0.3-0.1-0.4-0.2-1.1-0.3-0.5-0.1-0.9-0.2-0.7-0.3-0.6-0.3-0.3 0-0.1 0.3-0.5 0.5-1.1 0.4-0.4 0.4-0.2 1.5-0.1 0.6-0.1 0.6-0.4 1.6-1.1 1.2-0.7 0.8-0.3 0.4 0.1 0.3 0.2 0.2 0.4 0.4 2.8 0 1.6 0.1 0.2 0.3 0.4 0.2 0.7 0 0.2 0 0.5 0 0.2z m9.4-5.9l0.1 0.8 0 2.2-0.1 0.6-0.4-0.1-0.1-0.5-0.1-0.8-0.3-0.5-0.3-0.1-0.1-0.3 0-0.2-0.1-0.2-0.5-0.2-0.4 1.3-0.6-0.6-0.3 0.3-0.3-0.3-0.1 0.3 0 0.9-0.1 0.2-0.4 0.2-0.1 0.2-0.2 0.7 0 0.3 0.1 0.9 0 0.4-0.6 0.3-0.2 0.4-0.2 0.4-0.1 0.3 0 0.2 0.3 0.5 0.1 0.6 0 0.3 0 0.5-0.1 0.3-0.5 1-0.2 0.5 0.1 0.4 0.4 0.2 0.4-0.3 0.3-0.5 0.4-0.5 0.6-0.1 0.3 0.2 0 0.2 0 0.2 0.1 0.2 0.8 0.2 0.1 0.4 0.2 0.2 0.7 0.4 0.9 0.5 0.4 0.3 0.2 0.4-0.1 0.4-0.3 0.4-0.5 0.5-0.4 0.7-0.3 0.3-0.9 0.2-0.8 0.5-0.4 0.1-0.4-0.1-0.4-0.5-0.3-0.1-0.4 0-1.9 1.1-0.3 0.3-0.3 0.9-0.1 0.2 0.2 0.1 0.2 0 0.5-0.2 0.2-0.1 0.2 0.7-0.5 0.9-1 1.4-0.5 0.9-0.3 0.3-0.5 0.1 0-0.2-0.1-0.5 0-0.2-0.3-0.2-0.4 0.5-0.1 0.2 0 0.1-0.2-0.2 0-0.2 0-0.6-0.1-0.2-0.3 0-0.6 0.9-0.3 0.3-0.5-0.1-0.4-0.3-1.5-3.4 1.6-1.5 0.3-0.3-0.1-0.3-0.5-0.1 0.2-0.3 0.6-0.8 0.2-0.7 0.4 0 0.2-0.4 0.4-0.8 0.3-0.3 0.4-0.2 0.6-0.1 0.5-0.2 0.2-0.4 0-0.4-0.1-0.1-1 0.4-0.1 0 0.2-0.4-0.3-0.3 0.1-0.3 0.3-0.4 0.2-0.3-0.1-0.6 0.1-0.3 0.4-0.6 0.1-0.4-0.1-0.4-0.2-0.1-0.2 0.1-0.3 0.1-0.3 0.1 0.2-0.4 1.2-1 0.2-0.4 0.2-0.5 0-0.5 0-0.5-0.3-0.7 0-0.2 0.2-0.1 0.2-0.1 0.2 0 0.1-0.3-0.1-3.7 0.1-0.9 0.3-0.9 0.7-1.2 0.1-0.5 0.1-0.3 0.3-0.3 2.1-1.5 0.5-0.2 0.6 0 0.3 0.1-0.5 0.7 0.2 0.4 0.3 0.4 1.4 1.1 0.3 0.4 0.6 0.9 0.2 0.5 0.1 0.5 0 0.2-0.2 0.4-0.1 0.3 0.1 0.2 0.2 0.2 0.2 0.1z m-2.9-14.7l0.5 0.2 0.3 0 0.4-0.2 0.5-0.2 0.6-0.1 0.4 0.1 0.6 0.5 0.4 0.8 0.1 0.8-0.3 0.7-1 1.4-0.6 0.8-0.7 0.4-1.1-0.1-0.9-0.6-0.7-0.8-0.7-0.9-0.2-0.5-0.2-0.9-0.2-0.4 0.2-0.3 0.6-0.4 0.2-0.2 0.4-0.6 0.3-0.1 0.4 0.1 0.3 0.2 0.4 0.3z m2.1-8.7l-0.4 0-0.4 0-0.2 0.3-0.2 0.3-0.5-0.2-0.4-0.4-0.3-0.3-0.1-0.2 0-0.2 0.2-0.1 0.3 0 1.2-0.6 0.4 0.1 0.3 0.3 0.1 0.4 0 0.6z m-18.9-0.7l-0.3 0.2-0.2-0.4 0.2-0.4 0.3-0.4 0.3-0.3 0.3 0.1 0.2 0.3 0.2 0.3 0.1 0.3-0.2 0-0.5 0.1-0.4 0.2z m3.1-2l-0.3 0.2-0.2-0.2-0.2-0.4-0.3-0.6 0-0.5 0.1-0.3 0.1-0.2 0.1 0 0.2 0 0.1 0.2 0.1 0.3 0.1 0.2 0.5 0.4 0 0.1 0 0.2-0.1 0.4-0.2 0.2z m-18.5-11l1.6 0.2 2.4 0.1 0.8 0.2 5.2 2.1 0.4 0 1.3-0.1 0.4 0.1 0.3 0 0.4 0.2 0.5 0.2 1.8 1.5 1 1.3-0.4 0.4-0.5 1.2 0.1 0.6 0.3 0.1 1 0.4 0.2 0.2 0.2 0.4 0.1 0.6-0.1 0.4-0.4 0 0.2-0.2-0.2-0.3-0.3-0.2-0.4 0 0.1-0.3-0.2-0.3-0.3-0.2-0.3-0.1-0.4-0.2-0.1 0.5-0.2 0.1-0.3-0.1 0.1 0.4 0.1 0.3 0.2 0.3 0.3 0.2 0.2 0.4 0 0.5-0.2 0.4-0.4 0.7 0 0.1-0.4 0.2-0.3 0.1-0.5 0.2-0.2 0.1 0 0.3 0.1 0.5 0.4 0.8 0.3 0.3 0.3 0.3 0.4 0.2 0.5 0.1 0.3 0.1 0.2 0.3 0.2 0.3 0.2 0.3 0.5 0.2 0.4 0.1 1-0.1 0.4 0.1 0.3 0.3 0.4 0.9 1.3 1.7 0.4 0.3 0.4 0.1 1.5 0 0.2 0.1 0.2 0 0.2 0.2 0.1 0.3-0.1 0.2-0.4 0.1-0.3 0.3-0.2 0.3-0.2 0.1-0.6 0-0.5 0.2-0.3 0.1 0 0.1 1.1 0.1 0.5 0.1 0.4 0.2 0.3 0.3 0.2 0.4 0 0.4 0 0.9 0 0.4 0.2 0.4 0.3 0.4 0.3 0.1 0.1-0.1 0.1-0.4 0-0.1 0.6 0.3 0.8 0.1 0.9 0 0.5-0.1-1.1-1.2-0.3-0.6 0.7-0.2 0.8 0.4 0.6 0.8 0.4 0.9 0.3 1.3 0.1 0.5 0 0.4-0.4 0.7 0.1 0.4 0.2 0.9 0 0.9-0.1 0.4-0.3 0.2-0.4 0.1-0.2 0.2-0.1 0.3-0.3 0.3-0.3-0.4-1.5-1.1-0.8-0.8-0.5-0.3-0.6-0.1 0.2 0.4 0.9 0.9 0.2 0.2 0.2 0.4 0.1 0.2 0.5 0 0.1 0.1-0.1 0.2 0 0.1 0.1 0.5 0 0.4-0.1 0.2-0.2 0.1-0.3 0.1-0.2-0.1-0.5-0.7-0.2 0-0.1 0.1 0.1 0.3-0.2 0.3-0.2-0.1-0.3-0.5 0-0.5-0.6-0.5-0.9-0.3-0.8 0.2-0.7 0.5-0.7 0.1-0.8-0.1-0.7-0.3-0.8 0.5-0.9 0.3-1 0.2-1.4 0.1-0.4 0.1-0.3 0.3-0.2 0.1-0.5 0.2-0.4 0.3-0.1 0-0.8 0.1-0.2 0.1-0.5 0.5-0.4 0.8-0.4 1-0.2 0.8 0.1 1 0.3 0.7 0.6 0.6 0.5 0.5 0.5 0.2 0 0.2-0.4 0.1-0.5 0.5-0.3 0.1-0.4 0.1-1 0.2-0.4 0-2.3-0.2-0.4-0.1-0.6-0.4-0.4-0.2-0.3 0-0.4 0.1-0.4 0.1-0.5-0.2-0.1 0-0.1 0.2-0.3 0.2-0.3 0.1-0.2 0-0.4-0.3-0.6-0.8-0.4-0.2-0.3 0-1.3-0.5-0.2-0.2-1.1-1.5-0.1-0.3-0.3 0 0-0.1-0.2-0.8 0.1-0.9 0.4-1.8 0.4-1.3 0.2-0.9 0.1-0.9-0.1-1.7 0.1-0.6 0-0.3 0.1-0.1 0.2-0.1 0.3 0 0.1 0.1-0.1 0.3-0.2 0.2 0.7-0.4 0.7-1.5 0.3-1.7-0.8-1.1-0.8-0.4-2.7-0.5-1.7-0.6 0-0.3-0.3-0.3-0.2-0.4-0.1-0.2-0.3-0.4-0.3-0.2-0.3 0.1-0.2 0.1-0.4 0.1-0.2-0.1 0.1-0.5 0.2-0.5 0.1-0.3-0.2-0.5-0.3-0.1-0.9 0-0.5-0.1-0.4-0.2-1.2-1.4-4.6-4.2-0.4-0.8-0.1-0.7 0-0.2 0-0.3 0.2-0.5 0.1-0.2 0.1-0.5 0.5-0.5 0.5-0.4 0.4-0.5 0.3-0.9 0.3-0.4 0.3-0.2 0.3 0 0.2-0.1 0.1-0.2 0.2-0.4 0.5-0.2 0.1-0.1 0.2-0.4 0.1-1.2 0-0.5-0.1-0.5-0.1-0.3-0.3-0.3 0.1-0.3 0.3-0.6 0-0.3 0.2-0.4 0.1-0.3 0-0.9 0.1-0.2 0-0.4 0.9-0.5 0.8-0.3 0.9-0.1 0.5 0 0.3 0 0.4 0.1 0.4 0.2 1.5 1 1.8 1.5 1 0.5 0.2 0.1 0.3 0 0.3-0.1 0.5-0.2 1.3-0.8z",
    IDN381:
      "M76.4 140.7l0.2 0.2 0.2 0.3 0 0.4-0.1 0.3-0.1 0 0-0.2-0.2-0.2-0.3 0.2-0.3-0.1 0.2-0.3-0.1-0.2-0.3-0.1-0.4 0.2-0.1 0.2-0.1 0.4 0 0.4 0 0.1-0.7-0.2-1.6-0.9-0.9-0.2 0.2-0.1 0.3-0.1 0.1-0.1 0.2 0 0.4 0.2 0.2-0.1 0.1-0.2 0.5-1.4 0-0.4-0.1-0.9 0.1-0.5 0.1-0.2 0.4-0.6 0.2-0.2 0.5-0.2 0.1-0.1 0-0.2-0.1-0.7 0.2-0.3 0.2 0.1 0.3 0.2 0.9 1.6 0.3 0.7-0.2 0.5 0.2 0.4 0.1 0.4-0.1 0.4-0.1 0.4 0 0.3 0 0.3-0.2 0.2-0.2 0.3z m1.6-5.1l-0.1 0.9-0.2 0.4-0.1 0.2 0 0.2 0.2 0.3 0 0.3-0.2 0-0.6-1.4-2.3-3.2-0.4-0.6-0.6-1.5-0.4-0.6-0.2-0.2-0.4-0.2-0.3-0.2-0.1-0.2 0.2-0.2 0.4-0.1 0.9-0.1 0.9 0.4 0.8 0.9 0.6 1.2 0.2 1.1 0.4 0.9 0.7 0.9 0.6 0.8z m1.4-9.8l1.1 0.1 0.9-0.1 0.6 0.2 0.5 0 0.9 0.1 0.6 0.4 0.4 0.7-0.2 0.6-0.9-0.1-0.9 0-0.8 0.3-0.8 0.1-1.5-0.4-0.9 0-0.8-0.1-0.3-0.4 0-0.8 0.5-0.3 0.9-0.2 0.7-0.1z m-27.1-29.2l0.4 0.2 0.3-0.1 0.2-0.1 0.2 0.1 0.3 0.4 0 0.3 0.2 0.1 0.2 0 0.3 0 0.3 0 0.2 0.5 0.5 0.5 0.1 0.1 0.1 0.1 0.1 0.5 0.2 0.2 1.1 1.1 0.3 0.4 0.2 0.9 1.7 2 0.4 0.3 1 0.2 0.4 0.2 0.3 0.3 0.3 0.2 0.3 0.5 0.2 0.3 0.1 0.3 0.1 0.3 0.4 0.1 0.4 0 0.4 0.1 0.3 0.3 0.4 0.9 0.1 0.2 0.2 0.2-0.1 0.5-0.3 0.7 0-0.1-0.4 0.6 0 0.7 0.1 1.3-0.1 0.3-0.2 0.5-0.1 1.3-0.1 1.6-0.2 0.5-1 1.3-0.2 0.1-0.2-0.1-0.2-0.1-0.5-0.4-0.3 0.4-0.2 0-0.6-0.4 0 0.1-0.2 0.1-0.3 0.1-0.1-0.3-0.4-0.3 0.3-0.6-0.2-0.4-0.3-0.3-0.3-0.4 0-0.2 0.1-0.6-0.1-0.3-0.2-0.2-0.3-0.7-0.1-0.3-0.3-0.9-0.9-0.8-1.9-1.2 0.1-0.4-0.2-0.2-0.5-0.1-0.5 0-0.9 0.1-0.1-0.2 0-0.5 0-0.9-0.4-0.9-1.1-1.8-0.2-0.5-0.1-0.2-0.4-0.4-0.2-0.2-0.2-0.4-0.3-0.3-0.1-0.6-0.1-0.1-0.3-0.2-0.2-0.1-0.5-0.2-0.2-0.2-0.1-0.2-0.2-0.5-0.2-0.3-0.9-0.8-0.4-0.4-0.6-0.2 0 0.1-0.3 0.2-0.1-0.4 0.4-0.3 0.6-0.2 0.5 0 0.4 0.2 0.2 0.2 0.1 0.2 0.1-0.2 0.3 0 0.5 0.1 0.7-0.1 0.4-0.1 0.5-0.3 0.9-0.8 0.2-0.3 0.1-0.3 0-0.6 0-0.2 0.3-0.2 0.6 0.6z m24.5-3.2l0.4 0.2 0.2-0.1 0.2-0.3 0.3-0.1 0.4 0.2 0.4 0.4 0.2 0.4-0.4 0.2-0.5 0-0.7 0-0.6 0-0.7-0.4-0.3-0.1-0.3 0-0.2-0.3 0-0.3 0.1-0.4 0.2-0.2 0.4-0.1 0.3 0.1 0.3 0.3 0.3 0.5z m39.3-19.3l-0.4 1.3-0.4 3 0.1 0.8 0 0.7 0.4 1 0.3 1.4 0.2 2.2-0.1 0.7-0.3 1-0.2 0.8-0.1 0.9 0.1 0.5 0.2 0.3 0.2 0.2 0.9 0.7 0.2 0.2 0.2 0.4 0.5 1.4 0.8 1.8 0.2 0.6 0 0.5 0 0.4-0.2 0.3-0.2 0.3-0.2 0.2-1.4 0.8-5.3 2.4-0.4 0.2-0.2 0.2-0.3 0.3 0 0.2 0.1 0.3 1 0.8 0.2 0.2 0.1 0.3 0.1 0.2 0 0.8 0 0.2 0.1 0.2 0.2 0.2 0.9 0.5 0.3 0.2 0.2 0.2 0.1 0.2 0.1 0.3 0.1 0.3-0.1 0.5-0.2 1-0.1 0.2 0 0.3 0.2 0.5 0 0.3 0 0.5-0.1 1.4 0 0.9 0 0.3-0.1 0.2-0.4 0.4-0.1 0.2-0.2 0.4-0.1 0.3 0 0.4 0.1 0.6-0.3 0.2-0.3 0.1-0.3 0-0.3 0-0.3-0.2-0.4-0.2-0.4-0.4-0.2-0.2-0.4-0.1-0.8-0.3-0.7-0.2-0.4-0.2-0.3-0.2-0.9-0.1-1-0.5-0.6-0.1-0.2 0.2-0.5 0.1-0.4 0-0.3-0.1-0.2-0.1-0.7-0.4-0.3-0.1-0.1 0.2 0 0.2 0.2 0.5 0.2 0.2 0.3 0.3 0.3 0.5 0.2 0.1 0.5 0.2 0.3 0.2 0.1 0.1 0.1 0.3 0.2 0.8 0.1 0.3 1 1 0.1 0.2 0.2 0.4 0.3 0.4 0.5 1.1 0.1 0.1 0 0.3 0 0.5-0.2 0.5-0.2 0.2-0.3 0.1-0.9 0.3-0.3 0.1-0.4 0-0.5-0.2-0.3-0.2-0.2-0.1-1.3 0-0.2-0.1-0.2-0.1-0.2-0.2-0.4-0.5-0.1-0.1-0.4 0-0.2-0.1-0.6-0.3-0.3-0.1-0.5 0-0.5 0.2-1.6 0.8-0.5 0.3-0.4 0.1-0.7 0-0.6 0.2-0.2 0.1-0.3 0.2-1.6 2.1-2.5 2.7-0.3-0.2 0-0.2 0.3-0.3 0.1-0.3 0-0.4-0.2-0.3-0.4-0.2-0.4-0.1 0.4-1 0-0.4-0.1-1.6-0.1-0.6-0.2-0.3-0.3 0.2 0-0.3 0.1-1.1 0-0.5-0.3-0.4-0.3-0.2-0.6 0.2-0.2-0.6 0.2-2-0.1-0.8-0.8-0.9-0.2-0.1-0.3-0.2-0.1-0.3 0-0.8-0.1-0.8-1.2-4.3-1.5-3.4-0.2-0.6-0.1-0.2 0.2-0.5 0-0.2-0.1-0.3-0.9-0.9-0.2-0.3-0.3-0.8-0.1-0.5-0.1-0.4 0-0.2-0.2-0.1-0.2-0.1-0.2 0-0.2-0.1-0.1-0.2-0.1-0.5-0.2-0.4 0-0.1 0.3-0.1 0.2 0.1 0.1 0.1 0.1 0.2 0.2 0.4 0.3-0.2 0.5-0.9 0.2-0.2 0.4-0.5 0.1-0.2 0-0.8-0.1-0.3-0.2-0.2-0.4 0-0.1-0.2 0-0.3 0-0.4-0.2-0.4-0.3-0.3-0.8-0.6-0.2 0.1-0.1 0.2 0 0.3 0.3 0.1 0 0.2-0.1 0.3-0.2 0.2-0.4-0.2-0.7-0.6-1.8-2.7-0.9-1.1-2-1.2-0.4-0.1-0.4-0.1-0.4 0-0.5 0-0.2 0-0.1-0.1-0.1-0.3 0-0.2-0.4-0.2-0.4 0-0.5 0-0.4 0-0.2-0.2-0.1-0.5-0.2-0.4-0.8-0.4-1.2-1.1-1.1-0.6 0.5-2.7 0-0.4-0.1-0.8-0.4-0.8-0.1-0.5-0.2-0.2-0.2-0.1-0.2 0-0.2-0.1-0.1-0.3-0.5-1.5-0.2-1.1 0.1-0.5 0.1-0.4 0.1-0.2 0-0.4 0-0.1 0.4-0.3 0.3-0.3 0-0.2 0-0.1-0.3-0.4-0.2-0.7-0.1-0.4 0.1-0.4 0.3-0.4-0.1-0.3-0.2-0.3-0.2-0.1-0.4-0.1-0.3-0.2-0.2-0.2-0.7-0.9-0.2-0.1-0.4-0.1-0.3-0.1-0.2-0.2-0.1-0.1 0-0.3 0.1-0.9-0.4-1.7-0.1-0.3 0.1-0.3 0.1 0 0.4 0.1 0.2 0 0.2-0.2 0.1-0.6 0-0.3-0.1-0.2-0.6-0.8-0.1-0.2 0-0.4-0.2-0.4-0.2-0.2-0.3-0.3-0.2-0.3 0.2-0.1 0.3-0.2 1.4-0.3 0.5-0.3 0.3-0.7-0.3-0.6-0.1-0.2-0.9-0.6-0.2-0.2-0.1-0.3-0.2-0.3 0-0.3 0-0.2 0.1-0.4 0.1-0.2-0.1-0.2-0.3-0.3-0.2-0.3-0.1-0.5-0.1-0.2-0.2-0.2-0.3-0.2-0.2-0.2-0.2-0.3-0.3-1.2-0.3-0.5-0.5-0.9-0.2-0.3 0-0.2 0.2-0.2 2-1.7 0.3-0.5-0.1-0.4 0-0.5 0.1-0.6 0.4 0.3 0.3 0 0.2 0 0.1-0.2 0-0.2 0.2-0.2 0.2-0.3 0.7-0.5 0.3-0.3 0.1-0.4 0.1-0.4 0.2-0.3 0.1-0.5 0-0.2 0.2-0.9 0.2-0.7 0.3-1 0.1-0.2 0.2-0.3 0.1-0.2 0-0.2-0.3-0.4 0.1-0.2 0.2-0.1 0.6 0 0.3-0.1 0.2-0.2 0.3-0.3 0.2-0.1 0.6-0.1 0.3-0.1 1.7 0.2-0.1 1.6 0 0.2-0.5 0.3-1 0.3-0.2 0.2-0.1 0.2-0.1 0.4 0 0.7 0.5-0.5 0.4-0.3 0.4-0.1 0.1-0.1 0.5-0.5 0.8 1.9 0.1 0.2 1.2-0.2 0.5 0.1 0.5 0.1 0.8 0.5 0.4 0.1 0.3 0.1 0.5 0.7 0.2 0.2 0.4 0.1 0.4-0.1 0.3 0.1 0.2 0.8 0.2 0.3 0.4 0.2 0.3 0.1 1.5 0.5 0.5 0.9 0 0.9 0.2 0.6 1.9 1.7 2.1 1 1.4 0.2 0.4 0.3 0.7 0.5 0.9 0.3 0.5 0.3 0.6 0.5 1.7 0.8 1.9 1.4 2.2 1.6 0.3 0.2 0.8 0.2 0.3 0.2 0.4 0.5 0.6 0.3 0.2 0.2 0.2 0.6 0.2 0.3 0.4 0.5 0.7 0.6 0.7 0.4 2.1 0.5 0.7 0.2 0.4 0.1 0.3 0.2 0.6 1.3 1.2 1 0.4 0.6 0.1 0.8 0.7-0.2 0.5 0.4 0.4 0.5 0.6 0.3 0.4 0.3 0.3 0.8 0.1 2.5 0 0.3-0.2 0.3-0.2 0.2-0.2 0.3-0.1 0.6-0.2 0.4 0 0.1 0.1 0.2 0.4 0.1 0.1 0.1 0.2 0.2-0.1 0.2 0 0.1 0.5 0.8-0.1 0.2 0.1 0.2 0.1 0 0.2-0.2 0.1-0.2-0.1-0.1-0.1-0.2-0.1-0.1 0-0.7 0-0.2-0.7-0.4-0.2-0.1 0.3-0.4 0.7-0.3 0.8 0.1 0.5 0.9 0 0.3-0.1 0.6 0.1 0.3 0.2 0.7 0 0.2 0.2 0.5 0.3 0.5 0.3 0.3 0.3-0.1 0-0.3-0.4-0.8-0.1-0.4 0-0.9 0.1-0.4 0.2-0.4 0.3-0.3 0.3-0.1 0.5-0.1 0.5-0.1 0.2 0.1 0 0.4 0.1 0.2 0.2 0.1 0.3 0.2 0.2 0.1 0 0.1 0.1 0.6 0.1 0.2 0.3 0.6 0.6 0.4 0.2 0.1 0.1 0.1 0 0.2z",
    IDN513:
      "M656.8 99.3l-0.7 0.1-0.3-0.3 0.1-0.2 0.2-0.2 0.4-0.1 1-0.5 1-2.2 0.1 0 0 0.4-0.1 0.7 0 0.6-0.1 0.2-0.3 0.2-0.1 0.2-0.1 0.7-0.4 0.2-0.7 0.2z m-38.2 23.5l0.3-0.5 0.5-1.3 0.1-0.7 0-0.7-0.1-0.7-0.3-1.4-0.4-0.6-0.5-0.6-2.5-1.1-0.5-0.7-0.6-0.4-0.4-0.2-0.2-0.2-0.4-1.1-0.1-0.6 0-0.2-0.1-0.2-0.3-0.2-1-0.5-0.2-0.1-0.6-0.3-0.5-0.9 0-0.2 0.3 0 0.5-0.2 0.9 0.4 0.3-0.2-0.1-0.2-0.1-0.5 0.1-0.2 0.5 0.3 0.4 0.2 0.6-0.3 0.4 0.3 0.1 0.2 0.1 0.4 0.2 0.1 0.3 0.1 0.6 0 0.2-0.1 0.2 0 0.4-0.2 0.3-0.1 0.2 0.1 0.1 0.2 0.2 0 0.2-0.1 0.6 0.4 1.7 0.3 0.6 0.4 0.3 0.1 0.7-0.4 0.4 0 0.4 0.1 0.9 0.4 0.4 0.2 3 0.4 1.5-0.1 0.2 0 0.4 0.1 0.2 0 0.2-0.1 0.1-0.2 0-0.1-0.3-0.2 0.3-0.2 0.9-0.2 0.4-0.4 2.4-0.9 0.7-0.1 0.3-0.3 0.5-0.6 0.7-0.3 1.5-0.4 0.5-0.4 0.3-0.8 0.4-1.5 0.4-0.6 0.2-0.2 0.3-0.2 0.4-0.1 0.5-0.1 1.4 0.1 0.4-0.1 0.2-0.1 0.3-0.3 0.3 0 0.2 0.1 0.2 0.4 0.3 0.1 0.3-0.2 0.3-0.4 0.1-0.5 0.1-0.4-0.3-0.4-0.3-0.1-0.8 0.1-0.4-0.3 0-0.6 0.1-0.6 0.2-0.3 1.1-0.9 0.2-0.2 0.2-0.2 1.6 0.4 0.6-0.1 0.3-0.3 0.5-0.6 0.4-0.2 0.9-0.1 0.4-0.2 0.3-0.5-0.1-0.4-0.3-0.4-0.2-0.4 0.1-0.6 0.2-0.3 2.2-1.7 0.3-0.4 0.4 0.2 0.1-0.1 0-0.7 0-0.2 0.2-0.2 0.5-0.2 0.4-0.1 0.2 0.2 0 0.9 0.2 0.3 0.4 0.1 0.5 0 1.4-0.1 0.6 0 0.1 0.3-0.3 0.8 0 1 0.5 0.5 0.6 0.4 0.5 0.4 0.2 0.8-0.6 0.6-1 0.4-0.7 0.4-0.6 0.8-0.4 0.8-1.4 3.8-1 1.8-0.7 0.8-0.7 0.7-0.1 0.2-0.3 0.5 0 0.2-0.1 0.2-0.8 0.4-0.7 0.1-0.2 0.2-0.1 0.2-0.4 0.5-0.1 0.1-0.6 0.2-0.4 0.3-0.8 0.7-0.7 0.6-0.3 0.3-0.2 0.6-0.3 0.4-0.1 0.3 0 0.5-0.3 0.3-0.8 0.7-0.1 0.4-0.2 0.2-0.1 0.2 0.1 0.2 0.2 0.2 0 0.2 0 0.4-0.1 0.1-0.4-0.1-0.2 0-0.1 0.1-0.9 1.2-0.1 0.3 0.3 0.2 0 0.2-0.4 0.1-0.2 0.3-0.4 0.8-0.6-0.2-0.5 0.2-0.5 0.3-0.4 0.1-0.5 0.1-0.6 0.5-2.7 0.6-1.1 0.1-0.8-0.4-0.3 0.2-0.6 0.6-0.6-0.2-0.2 0-0.2 0.1-0.4 0.3-0.2 0-1.4 0.1-0.5 0.1-0.9 0.3-0.2 0-0.7 0-0.4 0.2-0.4 0.2-0.2 0-0.5-0.2-0.2 0-0.5 0-0.8 0.3-0.7 0.1-0.2 0.2-0.3 0.3-0.1 0-0.2-0.1-0.7-0.6-0.3-0.1-2.3-0.2-0.2 0z m36.7-31l-0.1 0-0.1-0.2-0.1-0.2-0.1-0.3-0.1-0.4-0.1-0.4 0.2-0.4 0.1-0.1 0.2 0.2 0.2 0.3 0.4 0.2 0.1 0.2 0 0.3-0.5 0.4-0.1 0.4z m5.7-8.3l-0.1 0.3-0.1 0.1-0.2 0-0.4 0.2-0.1 0.1-0.1 0.1-0.2 0.2-0.1 0.1-0.2 0-0.2-0.2 0.1-0.3 0.1-0.1 0.3-0.3-0.1-0.2 0.1-0.2 0.2 0.2 0.1-0.1 0.2 0.1 0.3 0.1 0.3-0.3 0.1 0.2z m0.9-4.6l-0.6 0.4-0.7-0.2-0.5-0.5 0-0.6 0.3-0.2 0.3-0.2 0.4 0 0.4 0.1 0.4 0.2 0.1 0.3-0.1 0.7z m-0.7-6.5l-0.2 0.1-0.4 0-0.2-0.3-0.1-0.4 0-0.4-0.1-0.3-0.3-0.7-0.1-0.3 0.1-0.3 0.4-0.8 0.2-0.3 0.3-0.2 0.3 0 0.4 0.2 0.2 0.2 0.2 0.3 0 0.3-0.2 0.3-0.6 0.5-0.2 0.3-0.1 0.3 0.1 0.3 0.3 0.4 0.1 0.3 0 0.2-0.1 0.3z m4.5-19.3l0.3 0.1 0.1 0 0 0.5 0.2 0.5 0.2 0.5 0 0.2 0 0.1-0.1 0.2-0.8 0.6-0.1 0-0.3-0.1-0.1-0.1 0-0.2-0.1-0.3-0.5-0.2-1-0.3-0.4-0.3 0-0.4 0.1-1 0.2-0.3 0-0.7-0.1-0.2-0.5-0.2-1.1-1-0.3-0.3-0.2-0.3-0.1-0.5 0.1-0.4 0.5-0.6 0.8 0.1 0.7 0.5 0.5 0.5 0.8 1.2 0.1 0.4-0.1 0.4 0.1 0.3 0.4 0.4 0.2 0.2 0.2 0.6 0.3 0.1z m26.3-4.9l-0.6 0.3-1-0.9-0.6-1.1 0.2-0.7 0.7 0.3 0.7 0.4 0.5 0.6 0.5 0.8-0.4 0.3z m-3.1-1.5l-0.4 0-0.3-1.8 0.1-0.7-0.4-0.5-0.5-0.3-0.1-0.6-0.2-0.7 0.1-0.4 0.6 0.3 0.3 1.1 0.9 1 0.3 0.3 0 0.4-0.3 0.5-0.3 0.5 0.2 0.9z m3.9-14.8l0.1 0.3 0.1 0.5-0.1 0.5-0.2 0.4-0.1 0.5-0.1 0.5 0.2 0.8 0.7 0.6 0.4 0.5-1.2 1.6-1.2 1.1 0 1.6 0 1-0.3 0.5-0.8 0.5-1-0.4-0.8 0.1-0.3-0.6 0.3-0.6 0.3-0.4 0.7-0.4 0.8-1.9 0.9-0.8-0.2-0.4-0.3-0.1-1.5-0.4 0-0.5 0.1-0.5-0.3-1-0.1-0.9 0.2-0.6 0.8-1.1 0-0.4 0-0.2-0.1-0.5-0.1-0.2 0.3-0.2 0.5-0.1 0.6 0 0.4 0 0.3 0.2 0.1 0.5 0.2 0.3 0.3 0.1 0.2 0 0.2 0.1z m5.9-5.6l-0.2 0.2-0.3-0.2 0-0.4 0.1-0.1 0.2 0.1 0.2 0.4z m-11.9-17.5l-0.1 0.1-0.1-0.2 0.2-0.2 0.1 0.1-0.1 0.2z",
    IDN558:
      "M954 311.7l0.1 0.5 0 0.4-0.3 0.2-4.3-0.2-0.9-0.4-0.6-0.1-1 0-0.5-0.1-0.3-0.4 0.1-0.6 0.3-0.3 1.6-1.1 0.4-0.4 0.2-0.3 0-0.5 0.2-0.3 0.3-0.2 0.9-0.1 1.2-0.4 0.7 0.1 0.3 0.5 0.1 0.7 0 0.8 0.1 0.5 0.4 0.5 0.8 0.8 0.2 0.4z m-0.3-6.9l0.3 0.8-1 0-0.5 0.1-0.4 0.3-0.6 0.8-0.4 0.3-0.5 0.2-1 0-0.5 0.1-0.4 0.2-0.3 0.5-0.6 1-0.4 0.4-1.4 1.1-0.4 0.1-0.2 0.2-0.8 0.9-0.6 0.5-0.7 0.3-0.8 0.3-0.9 0.2-0.9 0-1.5-0.6-1-0.1-3.1-0.1-4-0.1-1.1 0.1-0.9 0.3-1.8 0.7-0.8 0 0-0.8 1.9-5.4 0.5-0.9 0.1-0.4 0.1-0.3 0.7-0.4 0.2-0.2 0.2-1.3 0.3-0.4 1.6-3.3 0.5-0.7 1-1 0.2-0.3 0-0.5 0.2-0.5 0.5-0.9 0.5-0.6 1.3-1.1 3.4-2.3 3.2-1.1 2.9-0.4 0.6-0.2 1.4-0.3 2.1-0.1 1.9 0.3 0.8 1.1 0.2 0.3 1 1.5 0.3 0.3 0.3 0.3 0.3 0.2 0.8 0.2 1.6 0.2 0.6 0.3-0.4 0.5-0.3 0.3-0.2 0.4-0.3 0.9-0.6 1.1-0.1 0.4-0.1 2-0.1 0.2-0.3 0.3-1.2 0.6-0.4 0.4-0.2 0.8 0.1 1.6 0.1 0.7z m-3.1-25.8l-0.4 0.1-0.3 0-0.2-0.2-0.3 0-0.2-0.2-0.2-0.8-0.3-0.2-0.2-0.1-0.3-0.2-0.3-0.5-0.2-0.4 0.1-0.4 0.2-0.2 0.3 0.2 0.5 0.5 0.3 0.1 0.3 0.1 0.8 0 0.4 0.2 0.1 0.2 0.1 0.3 0.6 0.5 0 0.3-0.1 0.2-0.3 0.2-0.4 0.3z m-71-114.9l2.3 0.6 4.4 0.3 1.5 0.3 0.9 0.1 1.3-0.4 1.6 0.5 0.6-0.2 0.9 0.2 2 0 0.9 0.2 0.1 0.1 0.2 0.3 0.1 0.1 0.2 0 0.6-0.1 0.2 0.1 0.3 0.3 0.4 0.2 0.8 0.4 0.5 0 1.4-0.2 3.6 0.5 1.8-0.2 0.4 0.1 0.8 0.3 0.4 0.1 0.8 0 0.4 0.1 0.3 0.2 1.1 0.6 0.1 0.1-0.3 0.1-0.1 0.3-0.2 0-1.7 0.1-0.8 0.1-0.6 0-0.1 0.1-0.1 0.2-0.2 0.1-0.2 0.1-0.4 0.1-0.4 0.3-0.2 0.1-0.3 0.1-2-0.2-0.4 0 0 0.1 0.2 0.1 0.1 0.2 0 0.2-0.2 0.1-0.3 0-0.4-0.2-0.2-0.1-0.2 0-0.5 0.1-0.2 0.1-0.2-0.1-0.7-0.2-0.4-0.1-0.8-0.3-0.4-0.1-0.2 0.1-0.2 0.2-0.1 0-0.4 0.1-0.2 0.1-0.1 0.1-0.1 0.2-0.1 0.3-0.2 0-0.1-0.3-0.2-0.1-0.2 0.1-0.2 0.1-0.4-0.6-0.7-0.4-1.6-0.3-0.2 0-0.5 0-0.2 0-0.2-0.1-0.3-0.3-0.2-0.1-0.5 0-0.3-0.1-0.3-0.1-0.6-0.4-1-0.4-0.2-0.1-0.2-0.2-0.4-0.1-0.9 0-0.4-0.2-0.7-0.4-0.7-0.1-0.2 0-0.3-0.3-0.2-0.1-0.3 0-0.3 0.2-0.2-0.2-0.3-0.2-0.2-0.1-0.3 0.1-0.3 0.1-0.3 0.1-0.3-0.1-0.5-0.3-0.5 0-0.7 0-0.6 0-0.3-0.2-0.1-0.2 0-0.2-0.2-0.3-0.1-0.1-0.3 0.1-0.2 0 0-0.4-0.1-0.1-0.3-0.2 0.2-0.2 0.4-0.1 0.1 0 0.2-0.2 0.3 0z m71 0.8l-0.3 0-0.5-0.2-0.1-0.4 0.3-0.4 0.6 0.6 0 0.4z m-78.6-3.2l0.5 0.1 1.2-0.1 0.5 0.2 0.2 0.1 1-0.3 0.3 0.1 0.1 0.1 0.3 0 0.4-0.1-0.5 0.6-0.8 0.3-1.9 0-1.8-0.1-0.2-0.2 0-0.5 0.3-0.3 0.4 0.1z m-5.5 60.4l8.5-10.8-21.9-7.8-0.5-0.4 0.1-0.6 0.3-1 0.6-1.1 0.5-0.8 0.6-0.7 2-1.6 0.6-0.8 0-0.3-0.1-0.9 0-0.2 0.2-0.2 0.3-0.2 0.3-0.2 4-3.2 0.7 2.6 0.6 0.6 1-0.2 1.2-1.4 0.5-0.3 0.2 0.9-0.2 1.4-0.1 0.3-0.4 0.3-0.1 0.2 0 0.2 0 0.7-0.2 0.8 0.1 0.4 0.7 0.2 0.2 0.3 0.1 0.9 0.2 0.3 0 0.3 0.1 0.3 0.4 0.4 0.4 0.1 0.3-0.1 0.7-0.5 0 0.2-0.1 0.5 0 0.2 0.1 0.1 0.3 0.3 0.2 0.7 0.4 0.1 0.9 0 0.5 0.1 0.6 0.4 0.3 0.1 3.6 0.1 0.4 0.1 0.6 0.3 0.4 0.1 0.5-0.1 0.9-0.3 1.4-0.2 0.4-0.1 0.4-0.2 0.3-0.3 1-1 0.1-0.2 0.1-0.2 0-0.3-0.1-0.2 0.1-0.2 0.6-0.8 0.8-0.5 1.7-0.7 0.7-0.4 0.4-0.4-0.1-0.2-0.3-0.2-0.1-0.3 0-0.2 0.3-0.3 0.2-0.2 0.2 0 0.5 0.2 0.3-0.3 0.6-0.6 1-0.3 0.5-0.3 0.3-0.4 0.3-0.5-0.1-0.4-0.2-0.8 0-0.2 0.6-0.6 0.2-0.3 0.1-0.4 0-1 0.1-0.1 0.5-0.4 0.1-0.2 0.3 0.1 0.2-0.9 0.3-0.2 0.4-0.1 0.2-0.1 0.2-0.3 0.3-0.1 0.5-0.1 1.9-0.9 0.9-0.6 0.6-0.8 0.2-0.4 0.2-0.4 0.1-1.6 0.1-0.3 0.2-0.3 0.7-0.8 0.2-0.3 0.1-0.4 0-0.3-0.1-0.4-0.1-0.7 0.2-0.3 0.3-0.5 0.4-0.4 0.5-0.3 0.6-0.2 1.1 0 0.2 0 0.7-0.4 0.2 0 0.1 0.2-0.1 0.3 0 0.3 0.2 0.1 0.6 0 0.5 0.1 0.2 0.3 0.2 0 0.5-0.1 0.3 0 0.8 0.3 0.4-0.5 0.3 0.1 0.4 0.2 0.3 0 0.2 0 0.3-0.3 0.1-0.1 0.6-0.1 0.2-0.1 1.2-0.8 1.3-0.2 0.2-0.1 0.1-0.2 0.1-0.2 0.1-0.3 0.6-0.3 1-0.2 2.8-0.1 0.5-0.1 0.4-0.2 0.7-0.5 0.1-0.3-0.2-0.5-0.5-0.4-0.2-0.3 0.1-0.2 0.2-0.1 0.1-0.3 0-0.3-0.1-0.3-0.3-0.2-0.5-0.2-0.3-0.1-1.2-0.9 0.3-0.3 0-0.4 0-1 0.2-0.2 0.4-0.3 4.5-1.6 2.5-1.5 0.5-0.2 0.3-0.3 0.2-0.4 0.1 0 0.4-0.1 5.7-2.5 1-0.2 0.9-0.1 0.9 0.3 0.2 0.2 0.5 0.6 0.2 0.1 0.4 0.4 0.1 0.1 0.3 0 0.2 0.1 1 1 0.4 0.3 0.9 0.1 2.4 0.7 2.8 1.4 3.7 1 1.5 0.3 0.5 0.1 1 0.3 1.5 1.2 1.5 1.6 0.8 0.7 0.5 0.1 1.4 0 0.5 0.1 3.4 1.1 3.8 2.4 2.2 0.7 1.2 0.7 0.3 0.1 0.3 0.1 1 0.8 3.6 1.3 2.2 1.4 0.9 0.2 0.9 0.1 4.3-0.3 0.5-0.3 0.3-0.4 0.1-0.1 0.4 0.2 0.5 0.3 0.2-0.1 0-0.3 0.1-0.1 0.2 0.1 0 0.3 0.1 0.2 0.8 1.2 0.4 0.1 1.3 0.5 0.5 0.4 0.5 0.2 0.4-0.3 0.2 0.1 0.2 0 0.2-0.2 0.1-0.2-0.1-0.2-0.2-0.2-0.1-0.1 0.3-0.3 0.2 0.1 2.1 0.7 0.3 0.1 2.4 0.1 2.6 1.1 0.3 0.2 0.1 0.4-0.1 0.7-0.1 0.3-0.9 1 0.2 0.2 0.2 0.2 0.2 0.1 0.2 0.1 0.1-0.2 0.1-0.5 0.2-0.1 0.5 0.4 0.2 0.1 0.2-0.1 0.5-0.2 0.3 0 2 0 0.9-0.2 0.2 0 0 0.7 0 8 0 5.4 0 7.3 0 4.7 0 8.1 0.1 13.1 0 4.9 0 29.2-0.1 0-0.2 0.3-0.1 0.4-0.1 0.1 0 0.2 0.2 0.1 0.1 0.2-0.1 0.2-0.3 0.3 0.1 0.3-0.5 0-0.2 0 0 0.2 0.2 0.1 0 0.2 0 0.2 0.4 0 0.1 0.4-0.1 0.4-0.1 0.2-0.4 0-0.1 0.2-0.1 0.2 0 0.6-0.2 0.1-0.3 0.1 0.2 0.4 0 0.1-0.3 0.3-0.4 0.1-0.3 0.1-0.2 0.3 0.4 0.1 0 0.5-0.2 0.7-0.2 0.4 0 0.3 0.2 0.2 0.5 0.4 0.1 0.2-0.1 0.2-0.2 0.4 0.1 0.2 0.1 0.2 0.4 0.3 0.2 0.4 0 0.4 0.2 0.3 0.5-0.1 0.1 0.7 0.4 0.2 0.3 0 0 2.3 0 6.1 0 15.8 0 3.7 0 5.8 0 3.9 0 4.1 0 6.7-1-0.5-0.2-0.1-1.4-0.6-5.1-5.3-2.5-3.8-1.2-1.1-0.1-0.2-1.5-1.2-0.2-0.3-0.1-0.4-0.2 0-1.2-0.5-0.7-0.8-0.4-0.5-4.7-3.6-1-1.1-0.3-0.6-0.1-0.5 0.2-0.5 0.4-0.4 0.5-0.3 0.3-0.1 0.3 0 0.2-0.1 0.1-0.3 0.1-0.8-0.2-0.7-0.1-0.6 0.2-0.5 0.5-0.3 0.6 0.3 0.4-0.3 0.5-1.1-0.4 0.2-0.3 0.5-0.4 0.1-0.6 0-0.3 0.1-0.2 0.2-0.1 1-0.1 1.4-0.2 0.3-0.4 0.4-0.9 0.5-0.9 0.2-3.5 0.1-3 0.3-0.7 0.2-1.2 0.7-0.7 0.3-1.7 0.4-0.9 0-0.8 0-0.8-0.2-0.8-0.4-0.6-0.6-0.3-0.7 0-0.2 0.1-0.5 0.1-0.3-0.1-0.4 0-0.7-0.1-0.3-0.5-0.5 0.4-0.1 0.3 0.1 0.4 0.1 0.4-0.2-1-0.4-0.5-0.1-0.3 0.2 0.1 0.3 0.1 0.7 0.3 0.1 0.1 0.1-0.1 0.3-0.1 1-0.5 0.4-1.7 0.5-0.7 0.4-2.5 2.1-0.2 0.3-0.1 0.5-0.2 0.3-0.2 0.2-0.1 0.1-0.4 0-0.1-0.1-0.8-1.6-0.5-0.7-0.3-0.5 0-0.5 0-0.5 0.4-0.3 0.9-0.2 0.5-0.3 0-0.2 0-0.2-0.1-0.2-0.3-0.2 0-0.3 0.1-0.5 0-1.9 0.1-0.4 0.3-0.2 0.8-0.2 0.6-0.4 0.2-0.7 0.1-1.7 0.6-1.5 0.2-0.3 0.1-0.1 0.2-0.8 0.1-0.2 0.2-0.2 0.2-0.2 0.2-0.2 0.1-0.8-0.5-0.6-0.8-0.4-0.7-0.1-1-0.1-0.2-0.2-0.3-1-0.2-0.5-0.8-1.5-0.5-0.5-0.5-0.5-1.6-1.1-0.3-0.1-0.3-0.3-0.2-0.1-0.5 0-0.3-0.2-0.4-0.2-0.2-0.3 0-0.2 0.5-0.2 4.7 0.2 0.9 0.1 0.3 0.2 0.7 0.5 0.2 0.1 3.4 0.1 0.4-0.2 0.2-0.5 0.3-0.5 0.3-0.5 0.6-0.2 0-0.2-0.4-0.1-0.4 0.1-0.5 0.6-0.3 0.4-0.2 0.2-0.2 0-1 0-0.9 0.2-0.5 0-0.4-0.4-1.2-0.7-0.4-0.1-0.5-0.1-1.4-0.1-0.4-0.1-0.6-0.3-1.1-0.4-0.2-0.1-0.1-0.2-2.2-2.2-1.6-1.2-0.3-0.6 0.5-0.6 0.3-0.2 0.3-0.1 1 0 0.4 0.1 0.9 0.4 0.5 0 0.4-0.2 0.6-0.6 0.3-0.1 1.8-0.2 0.8-0.1 0.3 0 0.2 0 0.4 0.2 0.2 0.1 0.4 0.2 0.6 0.9 0.5 0.2 0.7 0.6 0 0.1 0.3 0.1 0.4 0.1 0.3 0.2 0.2 0.1 0.3 0 0.9 0 0.2 0-0.2-0.3-0.5-0.1-0.5 0-0.3-0.1-0.1-0.2-1-0.5-1.5-1.4-0.8-0.4-0.9-0.2-1.5-0.1-0.4-0.1-0.3-0.2-1.2-1.1-0.5-0.4-0.9-0.2-0.4-0.3-0.2-0.4-0.1-0.6 0.3-0.5 0.4 0 0.9 0.4 0.4 0.1 1.5 0.8-2.7-1.7-0.6-0.6-1-1.2-0.3-0.2-0.3-0.2-3-2.7-1-1.9-0.2-0.6-0.4-0.8-0.1-0.4 0.1-1.1-0.1-0.3-0.4-1 0-0.4-0.1-0.3-0.4-0.5-0.1-0.3-0.1-0.3-1.4-2.1-0.3-0.7 0.2-0.6 0.8-0.4 1.5-0.3 0.6-0.4-0.4 0-0.9 0.3-0.5 0-2.4-0.5-0.6-0.4-0.1-0.1 0-0.2-0.2-0.2-0.2-0.3 2-1.2 1.2-0.5 1.2-0.3-0.4-0.2-0.5 0-0.9 0.2-0.6 0-0.4 0.1-0.4 0.1-0.9 0.6-0.4 0.1-1.1 0.1-0.4 0.3-0.1-0.1-0.2-0.2-0.1-0.2 0-0.4-0.2-0.9-0.1-1 0-0.5 0.1-0.3 0.2-0.2 0.3-0.3 0.2-0.1 0.2 0 0.2-0.1 0-0.2-0.1-0.1-0.4-0.2-0.2 0-0.3-0.2 0-0.5 0.3-1 0-0.5-0.1-0.2-0.2-0.1-0.1 0.3-0.1 0.3-0.3 0.1-0.3-0.2 0.2 0.6 0 0.4-0.2 0.2-0.6-0.1-0.2-0.2-0.6-0.9-1-0.9-0.1-0.5 0.3-0.8-0.4-0.1-1.1 0.8-0.7 0.1-0.3-0.3-0.6-0.7 0-0.1 0-0.4 0.4-0.6 0.2-0.3-0.8 0.4-0.4 0.1-0.5-0.1-0.3-0.4-0.2-0.7-0.4-0.2-0.2 0-0.2 0.1-0.2 0.1-0.3-0.2-0.7-0.2-0.4-0.2-0.4-0.3-0.1-0.3 0.5-0.2 0-0.2-0.4-0.1-0.1-0.5-0.3-0.1-0.1 0.1-0.3 0.5-0.2 0.1-0.3 0-0.2-0.2-0.4-0.4-0.2-0.1-0.2 0-0.1-0.2-0.1-0.3-0.7 0.2-0.6-0.1-0.6-0.4-0.4-0.4 0.1-0.2 0.1-0.1 0.1-0.3 0-0.2-0.2 0-0.3 0.3-0.3-0.2-0.6-0.7 0.1 0.5-0.2 0.1-0.6-0.1-0.1-0.2-0.1-0.3 0.4-1.3-0.1 0-1 0.7-0.2 0.3 0.2 0.3-0.3 0.3-1.1-0.4-0.4-0.4 0-0.7-0.8 0.8-0.5-0.4-0.1-0.4 0.2-0.5 0.1-0.7-0.1 0-0.5 0.8-0.7 0.4-0.7 0.1-1.2-0.5-0.1-0.1-0.1-0.2 0.2-0.3 0.2-0.1 0.3-0.2 0.1-0.1-0.2-0.2-0.5 0.1-1.6 1-0.4 0.2-0.5 0.1-0.2-0.1-0.2-0.2-0.2-0.2-0.1-0.2 0.1-0.4-0.1-0.1-0.3-0.1-0.5 0-0.2 0.1-0.2 0.1-1.1-0.8-1.5-0.5-1.9-1.1-1.6-0.8-0.5-0.5-0.2 0-0.4 0-0.2-0.1-0.6-0.5-0.5-0.2-1.9 0-1.9-0.6-0.7-0.5 0-0.1-0.5-0.1-0.4-0.1-0.2-0.2-0.3-0.2-0.4-0.1-0.3 0-0.3-0.1-0.4-0.3-1-1.1-0.5-0.3-0.8-0.2-1.8 0-0.8-0.3-0.3 0.2-0.6 0.1-0.6-0.1-0.5-0.1-0.9-0.1-1-0.2-0.2-0.1-0.3-0.2-2.7-0.3-0.5-0.1-0.3-0.3-0.3 0.2-1.2 0.1-0.6-0.1-1.3 0.4-0.9 0.1-1-0.3-4.9-2.8-0.3-0.3-0.2-0.3-0.2-0.3-0.4-0.3-0.6-0.2-0.1 0z m1.1-69.2l0.4 0.2 0.4-0.2 0.3-1 0.5-0.2-0.1 0.3-0.1 0.4 0 0.7-0.7 1-0.3 0.1-0.4 0.1-0.7 0-0.3-0.1-0.4-0.2-0.2-0.3-0.4-0.8-0.5-0.5-0.2-0.5 0.3-0.6 0.1-0.1 0-0.4 0.1-0.2 0.2-0.2 0.3-0.3 0.3-0.1 0.4-0.1 1 0.3 0.3 0.2 0.1 0.2 0 0.2 0.2 0.3 0.1 0.2-0.1 0.6-0.1 0.2-0.4 0.5-0.1 0.3z m10.8-9.1l0.1 0 0.3 0 0.2 0 0.4 0.2 0.6 0.2 1.2 0.1 0.2 0 0.5-0.2 0.2 0.2 0.2 0.4 1.4-0.3 0.2 0.1 0.3 0.5 0 0.2 0.1 0.3 0.2-0.1 0.3-0.2 0.2 0 0.7 0.5 0.4 0.2 0.2-0.2 0.1-0.3 0.4-0.3 0.4-0.3 0.4-0.1 0.5 0.2 0.5 0.4 1.6 1.6 1.7 1.2 0.5 0.4 0.2 0.7 0.3 0.4 0.3 0.2 0.1 0.2 0.1 0.5 0.3 0.4 0.4 0.2 0.4 0.3 0.2 0.6 0.3 0.4 0.2 0.4 0.3-0.1 0.3-0.2 0.5-0.1 0.6 0 0.5 0.1 0.2 0.5 0.2 0.2 1.3 0.2 0.2 0.3-0.1 0.3-0.3 0.3-0.3 0.1-0.3 0.1-1 0.8-1.4 0.2-0.3 0.2-0.3 0.1-0.4 0.2-0.5 0.1-0.4 0.1-0.9-0.2-1.4-0.8-1-0.2-0.5 0.1-0.8 0.3-0.5 0-0.5-0.1-0.4-0.3-0.4-0.5-0.3-0.4-0.1-0.4 0.1-1.3 0-0.2-0.4-0.6-0.1-0.2-0.2-0.7-0.4-2.1-0.4-0.8-0.5-0.4-0.5 0.1-0.4 0.5-0.3 0.4-0.5 0.5-0.5-0.1-3.4-2.7-0.1 0.2 0 0.2 0.3 0.6-0.7-0.3-0.8-0.6-0.6-0.9-0.6-1.5 0.1-0.4 0.4-0.2 0.2 0.1 0.3 0.4 0.2 0.1z",
    IDN1223:
      "M302.4 278l-1.5 1.7-0.5 0.9-0.1 0.3-0.2 1.1 0 0.7 0.1 0.4-0.1 0.3-0.2 0.2-0.2 0.3-0.3 0.3-0.3 0.3-0.5 0.4-0.5 0.2-0.6 0-0.8-0.1-0.4 0-0.4 0.1-0.2 0.2-0.2 0.3-0.1 0.3 0 0.5-0.5 1.7 0.1 0.7 1.1 0.3 0.1 0.3 0.2 0.2 0.2 0.1 0.5-0.2 0.3 0 0.1 0.1 0.1 0.7 0.7 0.3 0.1 0.1 0.1 0.6 0.1 0.9 0.5 1.6 0 0.6-0.2 0.6 0 0.3 0.2 0.3 1.2 1-0.2 0.2-0.6 0.4-0.7-0.4-0.3-0.2-0.2 0-0.3 0.2-0.4 0.4 0.1 0.4 0 0.2-0.1 0-0.5-0.1-0.1-0.5-0.1-0.1-0.3 0-1.5 0-0.4 0.1-0.7 0.6-0.1 1-0.2 0.6-0.9 0.6-2.7-0.1-4.1-0.6-4-1.1-1.1 0-0.9 0.1-0.7-0.3 0-0.6-0.5-0.3-0.6-0.2-1.4-0.2-0.6-0.2-0.2-0.5-0.4-0.5-0.7-0.4-0.8-0.6-0.8-0.2-0.6-0.2-1-0.3-0.2-0.5-0.4 0-0.5-0.2-0.2 0-0.2-0.2-1.1 0.2-1.4-0.2-1.8-0.2-0.7-0.3-0.8-0.1-0.8-0.3-5.1-0.4-1.8 0-3.9-0.4-1.9-0.2-0.9-0.7-0.5-0.3-0.5 0-0.6 0.2-0.2 0.1 0-0.4 0-0.5-0.5-0.6 0.2-0.9-0.1-0.5 0.1-0.3 0.3-0.5 0.4-0.5 0.4-0.2 0.3 0.1 0.4-0.1 0.1-0.2-0.3-0.5 0.4-0.4 0.8-1 0.6-0.6 0-0.8-0.1-0.7-0.6-0.5-0.6 0.1-0.6-0.3-0.6 0.2-0.5 0.6-0.1-0.5 0-0.3 0.1-0.5 0.2-0.6 0.8-1.5 1.2-1.1 0.1-0.3-0.4-0.4-0.3-0.2-0.7-0.2-0.2-0.3-0.2-0.5-0.4-3.8 0-0.7 0.4-0.6 0.2-0.5-0.1-0.6-0.1-0.6-0.1-0.3 0.2-0.5 0.5-0.3 0.2 0 0.1 0.2 0.1 0.3 0.2 0.3 0.2 0.1 0.3-0.1 0.2-0.3 0.4-0.1 0.6 0 0.5 0.2 0.4 0.3 0.7 0.2 2.3 0 0.6-0.3-0.1-0.4 0-1.1 0.3 0.1 0.2 0.4 0.1 0.1 0.3 0.2 0.2 0.2 0.3 0 0.2 0 0.4-0.3 0.7 0.3 0.8 0.7 0.4-0.2 0.2-0.6 0.4-1.5 0.2-0.3 0.1-0.3 0-0.3 0-0.7 0.1-1.3 0-1.3 0-0.1 0.1 0 0.3-0.2 0.1-0.4 0.1-0.2 0-0.3-0.4-0.6 0.2-0.3 0.4-0.6-0.1-0.8 0.5-0.2 0.8 0.2 0.8 0.3 0.2 0.3 0.2 0.2 0.3 0.3 0.5 0.1 0.3 0 0.4 0 1.7-0.5 0.8 0.1 0.8 0.3 0.5 0.8 0.7 1.1 0.7 0.9 0.6 0.9 0.9 0.5 1.1 0.4 1.3 0.1 0.7 0.8 0.5 0.3 0.5-0.3 0.3 0.2 0.4-0.1 0.2-0.2 0.5-0.2 0.2-0.1 0.2 0 0.4 0.1 0.2 0 0-0.2 0-0.3 0.3-0.1 0.5 0.2 0 0.3 0.3 0 0.3-0.4 0.2 0 0.2 0.5 0 0.4 1.1 0.7 1 0.4 1.3 0.6 0.5 0.2 0.4 0.2 0.8 0 0.3-0.1 0.3-0.2 0.6-0.3 0.2-0.3 0.2-0.2 0.1-0.3-0.1-0.3-0.1-0.2-0.3-0.2 0.3-0.1 0.4 0.3 0.7 0.2 1.3 0 0.5 0.3 0.1-0.3 0.5 0 0.1 0.5 0.2 1.5 1.8 2.2 0.4 0.2 0.3 0.1 1.1 0.7 0.8 4 0.6 2 1.3 0.1 0.9 0.7 0.9 0.3 1 0 0.9-0.5 0.2 0.2 0.3 0.1 0.4 0.1 0.3 0.1 0.1 0.1z",
    IDN1227:
      "M261 261.9l0 0.1 0 1.3-0.1 1.3 0 0.7 0 0.3-0.1 0.3-0.2 0.3-0.4 1.5-0.2 0.6-0.4 0.2-0.8-0.7-0.7-0.3-0.4 0.3-0.2 0-0.3 0-0.2-0.2-0.3-0.2-0.1-0.1-0.2-0.4-0.3-0.1-0.2-0.1-0.2-0.3-0.3-0.9-0.6-0.7-0.4-2.4 0.2-0.3 0.7-0.6 0.1 0 0.2 0.5 0.3 0.3 0.9 0.1 0.9 0 3.3-0.5z",
    IDN1226:
      "M223.6 271.7l0 0.6 0 0.8-0.2 0.8-0.3 0.3-0.4 0.2-0.4 0.5-0.3 0.1-0.2-0.2 0.1-0.3 0.1-0.4 0.2-0.3-0.2-0.1-0.2-0.3-0.1-0.5-1 1-0.2 0.1-0.1-0.4 0.4-0.6 1.1-0.9 0.2 0.2 0.2-0.2 0.2-0.2 0.2 0 0.1 0 0.1-0.1 0.2-0.1 0.5 0z m31.8-10.2l-0.1 0-0.7 0.6-0.2 0.3 0.4 2.4 0.6 0.7 0.3 0.9 0.2 0.3 0.2 0.1 0 1.1 0.1 0.4-0.6 0.3-2.3 0-0.7-0.2-0.4-0.3-0.5-0.2-0.6 0-0.4 0.1-0.2 0.3-0.3 0.1-0.2-0.1-0.2-0.3-0.1-0.3-0.1-0.2-0.2 0-0.5 0.3-0.2 0.5 0.1 0.3 0.1 0.6 0.1 0.6-0.2 0.5-0.4 0.6 0 0.7 0.4 3.8 0.2 0.5 0.2 0.3 0.7 0.2 0.3 0.2 0.4 0.4-0.1 0.3-1.2 1.1-0.8 1.5-0.2 0.6-0.1 0.5 0 0.3 0.1 0.5-0.5 0.2-0.5 0.1-0.5-0.1-0.3-0.1-0.4-0.1-0.3-0.1-0.1 0-0.2-0.3-0.1-0.1-0.3-0.1-0.1-0.2-0.1-0.2-1-0.7-0.7 0.1-0.9-0.4-1.6-1.3-1-0.4-0.6-0.1-0.4 0-0.9 0.2-0.4 0.1-0.1 0.3-0.3 0.1-0.2-0.3-0.4 0.1-0.7 0-1 0.3-0.4-0.2-0.7-0.1-0.5-0.1-2.3 0.3-0.9 0.2-0.4 0.3-0.8-0.2-0.3 0.1-0.3-0.3-0.3-0.2-0.4 0-0.2 0.2-0.2 0.1-0.1-0.1-0.2-0.3-0.2-0.2-0.9-0.4-1 0-0.2 0.1-0.1 0.4-0.1 0.2-0.2 0.1-0.2 0-0.4-0.1-0.2-0.4-0.2-0.8-0.3-0.2-0.1-0.2 0-0.1 0.2-0.1 0.7 0.1 0.3-0.1 0.4-0.3 0.6-0.6 0.2-0.4 0.1-0.4 0.3-0.3 0.3-0.1 0.3 0.1 0.3 0.3 0.3 0.3 0.1 0.2 0.1 0.3 0 0.4 0.5 0.9 0.1 0.3 0.3 0.3 0.4 0.2 0.4-0.1 0.3-0.4 0.3-1.1 0.2-0.4 1.7-1.6 0.4-0.4 0.1-0.4-0.2-1.8 0.5-1.1 0.3-0.2 0.5 0 0.1 0.8 0.3 0.2 0.3 0.3 0.6 0 0.9-0.4 0.6-0.8 0.3-0.9 0-0.8 0.2-3.7 0.2-0.8 0.6-1.8 0.4-0.9 1.5-1.6 0.2-0.1 0.3-0.2 0.4-1.4 0.5-0.6 0.7-0.2 0.7 0.1 0.5 0.5 0.1 1.4 0.1 0.3 0.3 0.1 0.6 0.4 0.4 0.1 0.7-0.4 0.5-0.7 0.5-0.5 0.9 0.1 1.4 1 0.5 0.2 0.5 0.1 1.4 0.6 0.5 0 0.4-0.2 0.3-0.3 0.5-0.1 2.5 0 0.4 0.1 0.5 0.2 0.3 0.2 0.2 0.4 0 0.3z",
    IDN1225:
      "M161 248.5l0.2 0.2-0.3 0.2-1-0.3-0.1 0-0.1 0.1-0.4-0.1-0.1 0.1-0.1 0.1-0.2 0.4-0.3-0.2-0.3-0.7-0.2-0.3-2.6-2-0.6-0.4 1-0.9 0.5-0.2 0.7 0.1 0.6 0.3 0.3 0.1 0.3 0.1 0.4 0.1 0.2 0.2 0.4 0.4 1.4 0.4 0.6 0.3 0.2 0.7-0.1 0.3-0.3 0.2-0.4 0.3 0 0.2 0.3 0.3z m-6.8-58.4l0.4 0.6 0.6 0.4 0.2 0.2 0.2 0.3 0.3 0.7 0.3 0.4 1 0.8 0.4 0.3 0.1 0.2 0.1 0.3 0.1 0.5-0.1 0.1-0.4 0.1-0.2 0 0.1 0.3 0.6 0.8 0.3 0.1 0.1 0.1 0.5 0 0.5 0.2 0.3 0.1 0.2 0 0.5-0.4 0.2 0 0.2 0 1.4 0.5 0.5 0.5 0.4 0.3 0.2 0.2 0.1 0.2 0 0.2 0 0.2-0.2 0.4-0.1 0.7 0 0.2-0.3 0.3 0 0.2 0 0.1 0.2 0.2 0.2 0.1 0.3 0.1 0.2 0.3 0.2 0.3 0.3 0.2 0.3 0.4 0.3 0.3 0.2 0.2 0.3 0.1 0.1 0 0.7 0.4 0.4 0.1 0.2-0.1 0.2-0.1 0.8-0.7 0.9-0.7 0.4-0.3 0.4-0.1 0.2 0 0.2 0.2 0.2 0.7 0.2 0.3 1.2 0.8 0.3 0.1 1.3 0.2 0.4 0.1 0.6 0.1 0.3 0.1 0.2 0.2 0.1 0.1 0.2 0.4 0.1 0.6 0 0.6-0.2 1.7-0.3 0.4-0.6-0.1-0.2 0.1-0.6 0.1-0.3-0.1-0.5-0.2-0.2 0-0.1 0.1 0.1 0.2 0.2 0.3 0.1 0.3 0 0.3-0.3 0.3-0.4 0.3-0.5 0.2-0.4 0.3-2.7 2.4-0.3 0.2-1.2 0.3 0.1 0.3 0.6 0.4 0.2 0.3 0.3 0.3 0.2 0.3 0.8 0.5 0.3 0.3 0.5 0.8 0.3 0.3 0.4 0.2 1 0.4 0.2 0 0.4 0 0.7-0.2 0.4 0.1 0.2 0.1 1 0.7 0.4-0.2 0.5 0 0.3 0 0.4 0 0.6-0.1 0.2 0 0.4 0 0.3 0.2 0.1 0.1 0.3 0.3 0.1 0.7 0.6 1.3 0.2 0.5 0.1 1.7 0.2 0.5 0.4 0 0.2 0 0.4 0.2 0.6 0.3 0.9 0.2 1 0.6 0.7 0.2 1.3 0.1 0.9 0.7 0.6 0.2 0.4 0 0.9 0.1 0.3 0 0.2 0.2 0.2 0.2 0.1 0.4 0.1 1.9 0.2 0.5 0.2 0.4 0.6 0.8 0.3 0.7 0.2 0.2 0.1 0.3 0.5 2 0 0.3 0.1 0.3 0.2 0.1 0.4 0.3 0.2 0.2 0.1 0.4-0.6 0.7-0.7 0.5-0.6 0.4-0.8 0.5-0.3 0.1-0.4 0.2-0.3-0.1-0.2 0-0.5 0-0.2 0-0.2-0.3-0.2-0.1-0.3-0.4-0.2-0.1-0.5-0.2-0.3-0.1-0.3 0-0.2 0.1-0.6 0.2-0.2 0-0.1-0.2-0.3-1-0.2-0.2-0.2-0.1-0.4-0.3-0.3 0.3-0.3-0.1-0.3-0.4-0.3-0.9-0.4-0.5-2.4-2.1-2.7-1.6-2.8-1.1-0.4-0.3-0.3-0.9-0.3-0.4-3.8-3.3-3.7-2.6-3.5-2.7-0.6-0.3-0.6-0.4-0.5-0.6-0.1-0.7 0.1-0.4 0.4-0.7 0.1-0.4-0.2-0.4-0.6-0.8-0.3-0.3 0-0.3 0-0.5-0.1-0.3-0.3-0.4 0-0.3-0.1-0.7-0.1-0.5-0.3-0.3-3.4-2-4.1-2.8-5.2-3.8-0.5-0.5-0.6-1.1-0.4-0.3-3.2-5.1-0.2-0.9-1.8-3.2-0.6-0.7-0.8-0.5-1.8-0.9-0.9-0.5-0.7-0.7-1.7-2.3 1.1-1 2-1.5 0.4-0.1 1.1-0.3 0.4-0.2 1-0.7 0.7-0.2 1.8-1.3 0.4 0 0.3 0.3 0.2 0.2 0.5 0.5 0.4 0.2 0.2 0.1 0.1 0.2 0.1 0.4 0.4 0.6 0.5 2.1 0.2 0.4 0.3 0.2 0.7 0.2 0.3 0.3 0.2 0.2 0.1 0.6 0.8 0.7 0.5 0.7 0.7 0.8 0.8 0.6 1.2 0.6 0.3 0.1 0.5 0.2 0.3 0.2 0.4 0.5 0.3 0.2 0.2-0.1 0.4-0.1 0.2-0.1 0.3 0 0.7 0.3 0.5 0.4 0.3 0.1 0.6 0.1 0.2 0.2z",
    IDN1224:
      "M303.8 297.8l1.1 0.7 0.3 0.2 0.4 0 0.1 0.2-0.1 0.2-0.1 0-0.2 0-0.6-0.1-1.2-0.4-1.3-0.3-0.3-0.1-0.3-0.1-0.9 0.1-0.3-0.1-0.2-0.3 0.1-0.4 0.2-0.3 0.3-0.2 1.2 0.5 1.1 0.2 0.7 0.2z m58.9-21.6l-0.1 0.1-0.8 1.4-0.2 0.5 0 0.4-0.5 2.6 0.1 1.9-0.1 0.7 0 0.3 0.2 0.9 0.1 0.2-0.1 0.2-0.3 0.2-0.9 0.8-0.3 0.4-0.4 0.3-0.6 0.4-0.4 0.3-0.3 0.2-0.3 0.4 0 0.2 0 0.2-0.9-0.1-1.4-0.5-0.3-0.2-0.3-0.1-0.1-0.1-0.4 0.1-0.2 0-0.4-0.1-0.3-0.2-0.6-0.1-0.4 0.4-0.1 0.9 0 1 0.1 0.7 0 0.4-0.4 2.7 0.3 1.2 0.2 0.4 0.2 0.3-0.1 0.2-0.5 0.4-0.1 0.2 0 0.1 0.1 0.4 0 0.4 0.1 0.3 0.3 0.2 0.8 0.1 0.2 0.1 0.3 0.2 0.5 0.6 0.3 0.3 0.1 0.2 0.1 0.3-0.1 0.9-0.1 0.5-0.4 0.9-0.1 0.8-0.4 0.3-0.2 0-0.5-0.3-0.3 0-0.5 0.4-0.3 0.2-0.6 0.3-1.1 0.6-1.4 1.2-0.8 0.5-0.4 0.3-0.3 0.4-0.2 0.4 0.1 0.5 0 0.3-0.4 1 0 0.2-0.3-0.1-1.8-0.4-0.1-0.1-0.1-1.4-0.3 0-0.1 0.1-0.2 0-0.2-0.2-0.1-0.2-0.1-3.8-0.1-0.6 0-1-0.1-0.5-0.2-0.2-0.4-0.2-1.1-0.2-0.3-0.1-0.8 0.1-0.4-0.1-1.2 0-0.9-0.2-0.7-0.6-0.3-0.6-0.4-0.8-0.7-3.3-0.1-0.2-0.6 0.6-2.4 1.8-0.3 0.3-0.4 0.5-0.2 0.2-0.1-0.3-0.1-0.5-0.1-0.1-0.1-0.1-0.2 0.1-0.2 0-1.3-0.2-0.5 0.3-0.2 0.2 0 0.2 0 0.6-0.1 0.4-0.2 0.4-1.1 1.7-0.3 0.4-0.1 0.2-0.1 0.5-0.2-0.1-2.2-0.6-0.5-0.4-0.5 0.1-0.8-0.1-0.8-0.3-1.3-0.3-2-0.6-3.8-0.5-0.8 0.2-0.4 0.1-0.2-0.2-0.1-0.2-0.3-0.1-0.1-0.1 0-0.1 0.2-0.3 0-0.1-0.2 0-0.6-0.2-3.7-0.4-2.2-0.2-1.1 0.3-0.3 0.4-0.2 0.3-0.2 0-0.7-0.6-0.2-0.1-0.2 0-0.5-0.1-0.5 0-0.3-0.2-0.3-0.2-0.2-1-0.2-0.5-0.3 0.1-0.1 0.1-0.6 0.2-0.1 0.2-0.3 0.4-0.2 0.2-1.2-1-0.2-0.3 0-0.3 0.2-0.6 0-0.6-0.5-1.6-0.1-0.9-0.1-0.6-0.1-0.1-0.7-0.3-0.1-0.7-0.1-0.1-0.3 0-0.5 0.2-0.2-0.1-0.2-0.2-0.1-0.3-1.1-0.3-0.1-0.7 0.5-1.7 0-0.5 0.1-0.3 0.2-0.3 0.2-0.2 0.4-0.1 0.4 0 0.8 0.1 0.6 0 0.5-0.2 0.5-0.4 0.3-0.3 0.3-0.3 0.2-0.3 0.2-0.2 0.1-0.3-0.1-0.4 0-0.7 0.2-1.1 0.1-0.3 0.5-0.9 1.5-1.7 0.2 0.1 0.2 0.3 0.2 0.2 0.5 0.1 0.5 0 0.3-0.1 0.2-0.3 0-0.5 0.2-0.4 0.4 0 0.5 0.2 0.3 0.1 0.8 0.6 0.5 0.2 0.6 0.4 0.2 0 0.5 0 3.8 0.4 1.9-0.3 1.2-1.3 0.8 0.7 4.2 0.6 3.8 1.2 0.9 0.2 1-0.1 2.8-0.4 0.5-0.1 0.3-0.2 0-0.2 0.4-0.4 0.2-0.1 0.2 0.1 0.1 0.2 0 0.2 0.1 0.2 0.3 0.2 1 0.5 0.8 0.2 0.9 0.7 0.4 0.2 0.6 0.1 0.4-0.2 0.3-0.2 0.4-0.1 0.5 0 0.4-0.1 0.3-0.2 0.9-1 0.9-1.3 1.6-3.2 0.3-1 0.1-0.8 0-0.9 0.1-0.4 0.2-0.3 0.1-0.2-0.2-0.5 0.4-0.1 0.2-0.2 0.4-0.5 0.3-0.1 1.1-0.5 0.6-0.1 0.5-0.2 0.2-0.1 1.3-0.2 0.5-0.1 0.2 0.1 0.6 0.4 0.2 0.1 0.5 0 0.2 0 0.2-0.2 0.1 0.1 0.2 0.2 0.3 0.2 0.2 0.2 0.2 0.3 0.1 0.9 0.4 0.8 0.8 2.3 0.4 0.7 0.2 0.2 0.2 0 4.1 0.4 0.5 0 0.9-0.2 0.4-0.1 0.4-0.2 0.7-1 0.3-0.4 0.6 0.4 1.2 0.2 0.8 0.3 0.2 0.2 0.7 0.9 0.4 0.4z m-26.5-18.8l-0.3 0.2-0.1-0.2-0.1-0.3-0.1-0.2-0.1-0.1 0.3-0.2 0.6-0.1 0.1 0.2 0 0.3-0.3 0.4z",
    IDN1229:
      "M214.5 256l-0.2 0.2-0.4-0.1-0.6-0.6-0.3-0.3-0.1-0.2 0-0.2 0.1-0.3 0.2 0 0.5 0.3 0.5 0.1 0.3 0.3 0.1 0.2-0.1 0.6z m21.3-36l-0.3 1.8 0 0.7 0.1 0.6 0.3 0.5 0.3 0.6 0.3 0.7-0.1 0.5 0.3 0.1 0.2 0.3 0.4 0.7 0.1-0.1 0.1 0.4-0.1 0.9 0.2 0.8-0.2 0.4-0.2 0.4-0.1 0.4 0.1 0.3 0.3 1.2-0.3 0.1-0.2 0.4-0.3 1.9 0 0.9 0.1 0.5 0.8 1.4 0 0.7-0.3 0.7-0.4 0.7-0.2 0.7-0.1 1.9 0.1 1.9-0.1 0.9-0.5 1.8-0.2 1 0.2 1.9-0.1 0.5-0.3 0.8 0.2 1.4 0 0.9 0 0.4-0.4 0.9-0.2 0.5-0.2 1.7-0.3 0.7-0.4 0.6-0.6 0.8-0.1 0.1-0.2-0.2 0-0.8-0.2-0.4-0.7-0.3-1.7-0.2-0.3-0.4-0.1-1.7-0.3-0.7-0.5-0.5-0.3 0.4-0.1 0.1-0.3-0.1-0.3-0.2-0.4-0.2-0.7-0.8-1.1-0.9-0.5-0.5-1.4-2-0.7-0.5-0.6 0.4-0.1 0.4 0.2 0.8-0.2 0.5 0 0.1-0.2 0.6-0.1 0.1-0.3 0-0.4-0.1-0.4 0.2 0 0.4 0.2 0.4 0.1 0.5 0 0.6 0.1 0.3 0.3 0.3 0 0.1-0.3 0.2-0.5 0.2-0.5 0.2 0.1 0.4 0.4 0.1 0.5 0.1 0.3 0.1-0.3 0.3-0.4 0.2-0.4 0.1-0.7 0-0.3-0.1-1-0.8-3.7-1.6-1.4-1.1-1-0.3-0.5-0.3-1.3-1.5-0.2-0.2-0.4-0.2-0.8-0.2-0.4-0.2-0.3-0.2-0.1 0 0.1 0.4-0.5 0-0.4 0.1-0.4 0.1-0.4 0.4-0.1 0.3 0.1 0.5 3.4 5.4 0.2 0.8 0.1 0.9 0.2 0.5 0.1 0.2-0.1 0.2-0.3 0-3 0-0.2-0.2 0.2-0.8-0.1-0.5-0.3-0.4-1.2-1-0.2-0.1-0.3-0.2-0.1-0.2-0.2-0.4-1.4-1.3-0.4-0.2-1.5-0.9-0.2-0.4 0.6-0.5-0.3-0.4-1-1-0.4-0.3-0.7-0.1-0.2-0.2-0.1-0.1-0.2-0.3-0.1-0.2-0.7-0.2-0.4-0.3-0.4-0.3-1.5-2-1-0.9-0.1-0.4 0.2-0.4 0.1-0.3-0.3-0.4-0.3-0.3-0.3-0.1-0.4-0.1-0.5 0-0.4-0.1-0.2-0.4 0.1-0.2 0.3-0.4 0.1-0.3 0-0.4-0.2-0.4-0.3-0.4-1.3-0.8-0.5-0.5-0.4-0.3-0.4-0.1-0.5 0-0.3 0-0.2-0.2 0-0.2 0.2-0.6-0.1-0.2-0.6-0.3-0.3-0.1-0.2 0.1-0.2 0.1-0.4 0.4-0.5-1-0.3-0.3-0.2-0.1 0.4-0.2 0.3-0.1 0.8-0.5 0.6-0.4 0.7-0.5 0.6-0.7 1.3 0.7 0.3 0.1 0.2 0.1 0.2 0.2 0 0.1 0 0.3 0 0.4 0.1 0.4 0.1 0.3 0.2 0.1 0.3 0.1 0.9 0 1.2 0.2 0.8 0 0.7 0.1 0.6 0 1.6-0.4 1.2-0.8 0.8 0 0.7 0.1 0.4-0.1 0.5-0.5 0.3-0.6 0.1-0.5-0.1-0.1-0.4-0.4-0.1-0.2-0.4-0.3-0.1-0.4-0.1-0.6 0-0.1-0.3-0.1-0.1-0.2 0-0.2 0-0.2 0.1-0.4 0-0.1 0.4-0.2 0.3-0.3 0.1-0.4 0.1-0.3-0.1-0.4-0.2-1.5-0.1-0.7 0.1-0.6 0.2-0.6 2-0.7 0.2-0.3 0.7-0.6 0.5-0.4 1.4-0.6 0.5-0.1 1.1 0 1.6-0.4 3.6-1.6 0.9-0.3 0.9-0.3 1.1-0.2 0.7-0.4 0.2-0.2 0.3-0.2 0.3-0.3 0.2-0.2 0.1-0.3 0.1-0.3 0.2-0.3 0.2-0.2 0.7-0.3 0.1-0.2 0-0.1-0.2-0.2-0.1-0.3 0.1-0.1 0.3-0.5 0.1-0.2 0-0.7 0.2-0.2 0.1-0.1 0.4-0.2 0.2-0.1 0.3-0.4 0.2-0.1 0.2 0 0.3 0.1 0.3 0 0.3-0.1 0.2-0.1 0.3-0.3 0.1-0.2 0.3-0.7 0-0.2 0-0.4 0.1-0.2 0.2-0.1 0.1-0.3 0-0.2 0.1-0.4 0.1-0.2 0.1 0 0.1 0 0.2 0.2 0.2 0.5 0.2 0.2 0.2 0.1 0.2 0 0.3-0.1 0.2 0 0.3 0 0.2 0.2 0.4 0.6 0.2 0.2 0.7 0.1 0.7 0.3 0.2 0.2 0.1 0.3 0.1 0.4 0.2 0.2 0.2 0 0.2 0.1 0.3 0.4 0.2 0.3 0.2 0.2 0.2 0.3 0.1 0.3 0.2 0.4 0.1 0.2 0 0.2 0 0.2-0.2 0.4 0 0.1 0.1 0.1 0.4 0 0.2 0 0.1 0.1 0.2 0.2 0 0.6 0.2 0.1 0.4 0 0.2 0.2 0.2 0.2 0.2 0.4 0.1 0.2 0.9 0 0.4-0.2 0.5-0.1 0.8 0.5z",
    IDN1228:
      "M299.5 166.9l-0.8 0.1-1-0.2 0.3-0.3 0.7-0.1 0.7 0 0.5 0.2-0.4 0.3z m4.4-3.1l0.1 0.3-0.1 0.4-0.1 0.3-0.2 0.2-0.4 0.2-1.3 0.5-0.3 0.1-0.6-0.1-0.1-0.4 0-0.2 0-0.2 0.1-0.2 0.1-0.2-0.1-0.2-0.1-0.2-0.1-0.1-0.4 0-0.2-0.1 0.3-0.3 0.5-0.2 1-0.2 0.2-0.1 0.2-0.2 0.1 0 0.4 0.1 0.2 0.2 0.6 0.4 0.2 0.2z m4.6-6.4l-0.7 0.7-0.1 0-0.1-0.3-0.1 0-0.3 0.1-0.2 0-0.1 0 0-0.2 0.1-0.2 0.2-0.1 0.4 0 0.2-0.1 0.4-0.4 0.2 0 0.2 0.2-0.1 0.3z m1.3-1.2l-0.3 0.1-0.1-0.2 0.1-0.5 0.1-0.1 0.4-0.4 0.2-0.1 0.2 0.1 0.1 0.3-0.2 0.3-0.1 0.2-0.4 0.3z m8.1-5.4l0.7 0.4 0.4 0.2 0.3 0 0.3-0.1 0.2-0.2 0.2-0.1 0.4 0 0.3 0.3 0.3 0.3 0.2 0.4 0 1.6 0.1 0.1 0.3 0.3 0 0.2 0 0.2-0.2 0.1-0.5 0.2-1 0.8-0.3 0.1-0.3 0.1-1.5 0.6-0.7 0.4-0.8 0.3-0.7 0.7-0.5 0.1-0.3-0.1-0.4-0.3-0.5-0.3-0.1-0.2 0-0.5 0.5-1.4 0.2-3.6 0.2-0.4 0.3-0.2 0.4 0.1 0.7 0.2 0.4 0 0.3 0 0.4-0.4 0.3 0 0.4 0.1z m99.9-52.5l-0.1 0.4-0.3 1.7 0 0.3 0 0.4 0.3 0.4 0.1 0.3 0 0.4-0.1 0.5-0.1 0.3-0.2 0.2-0.4 0.3-0.6 0.5-0.5 0.2-0.2 0.2-2.1 1.8-0.2 0.1-0.6 0.3-0.7 0.5-1 0.5-0.3 0.2-0.4 0.4-0.1 0.2 0 0.3 0 0.4-0.1 0.5 0 0.2 0.1 0.2 0.2 0.1 0.2 0 0.5-0.1 0.2-0.1 0.2 0 0.2 0.1 0.2 0.2 0.1 0.3 0 0.4-0.1 0.4-0.2 0.5-0.1 0.4-0.1 0.4 0 0.5-0.1 0.5-0.2 0.4-0.8 0.8-0.5 0.8-0.2 0.2-0.5 0.2-0.2 0.1-0.3 0.4-0.1 0.2-0.3 0.8-0.5 0.3-0.4 0.5-0.5 0.3-0.2 0.2-0.3 0.8-0.3 0.4-0.3 0.3-0.3 0.4-0.2 0.3-0.1 0.4 0.1 0.7-0.2 0.5-0.1 0.2-0.3 0.1-0.2 0.1-0.3 0.1-0.7 0.6-0.3 0.2-0.2 0-0.5 0-0.4 0-0.3 0-0.7-0.3-0.2 0-0.4 0-0.4 0.2-0.9 0.2-0.7 0.3 0.6 0.8 0.3 0.8 0.3 0.2 0.8 0.6 0.3 0.4 0.5 1.1 0.1 0.3 0 0.6 0.4 1.5 0.1 0.4 0 0.2-0.1 0.1-0.6 1.1-0.4 0.8 0 0.5-0.1 0.2-0.2 0.1-0.3 0.1-0.2 0.1-0.2 0.3-0.3 0.2-0.3 0.1-0.4 0.1-0.3 0.2-1.2 1.2-0.4 0.7 0 0.1 0 0.3 0 0.2 0.1 0.2 0.4 0.1 0.2 0.2 0.1 0.2 0.3 0.5 0 0.3 0 0.2-0.4 0.9-0.4 1.2-0.2 0.2-0.4 0-0.2-0.1-0.3-0.2-0.4-0.4-0.4-0.8-0.2-0.2-0.2-0.1-0.1 0-0.2 0.1-0.5 0.2-0.3 0.1-0.1 0.1-0.3 0.4-0.1 0.2-0.6 0.1-0.2-0.1-0.5-0.1-0.5 0.1-1.1 0.5-0.6 0.4-0.7 0.3-2.2 0.8-0.8 0.5-3.8 1.5-0.3 0.1-0.3 0-0.6-0.2-0.3 0-0.3 0.1-0.5 0.3-2 0.8-0.3 0-0.3 0-0.5-0.1-0.3-0.1-0.6 0-1.1-0.2-2.6 0-0.3 0-0.2 0.1-0.1 0.2-0.1 0.5-0.6 0.5-1.9 0.6-2.4 1.5-0.9 0.5-0.3 0.1-1.2 0.6-2.1 1.5-0.5 0.4-0.7 0.9-0.1 0.2-0.1 0.3 0 0.3 0.2 0.6 0 0.4-0.2 0.3-0.2 0.3-0.8 0.4-1.1 0.4-0.4 0.4-1.2 0.6-0.6 0.4-0.4 0.4-0.2 0.1-0.3 0.4-0.5 0.9-0.7 0.5-0.5 0.2-0.6 0.4-0.5 0.4-0.7 0.9-0.4 0.3-0.8 0.7-0.3 0.2-0.2 0-0.3-0.2-0.2-0.1-0.5 0-0.2-0.1-0.4 0-0.5 0.2-0.8 0.5-0.4 0.3-0.5 0.6-0.3 0.4 0 0.2 0 0.2 0.2 0.3 0.2 0.3 0.2 0.2 0.3 0 0.4-0.1 0.2-0.2 0.3 0 0.2 0 0.1 0.2 0.1 0.2 0 0.3-0.2 0.6 0 0.1 0.3 0.3 0.2 0.3 0 0.3-0.2 0.8 0 0.4 0 0.4 0 0.8-0.7 2.5 0 0.4 0 1.5 0.2 0.6 0.2 0.6 2.7 6.1 0.1 0.4-0.2 0.8-0.1 0.5 0 2 0.1 0.7 0.1 0.3 0.1 0.3 0.2 0.2 0.2 0.5 0 0.3 0 0.3-0.1 0.3-0.2 0.3-0.2 0.2-0.3 0.2-1.2 0.5-0.3 0.2-0.3 0.4-0.3 0.9-0.3 0.5-0.2 0.2-0.1 0.1-0.9 0.3 0-0.1-0.5 0.1-0.8 0.5-0.4 0.2-1.1 0.4-0.4 0-0.4 0.2-0.3 0.3-1.7 2.3-0.8 0.4-0.7-0.6-0.1-0.3 0.3-0.1 0.1-0.2 0-0.2-0.2-0.5 0-0.5-0.1-0.5-0.3-0.9-0.6-0.7-0.9-0.2-0.9 0.2-2.2 1-2.3 1.7-0.8 0.1-0.5-0.7-0.3-0.9-0.4-0.8 0.3-0.4 0.4-0.6 0.2-0.7-0.1-0.7-0.4-0.9 0-0.9-0.2-0.7-0.1-0.4-0.2-0.2-0.8-0.2-0.2-0.2 0.1-0.2 0.4-0.5 0.1-0.3 0.3-0.5 0.7 0.1 0.8 0 0.3-0.9-0.7 0.5-0.6-0.2-0.4-0.5-0.9-1.6-0.1-0.3 0-1-0.3-1.8-0.2-0.5-0.3-0.2-0.3-0.2-0.2-0.3 0-0.5 0-0.4 0.2-0.9 0.3-0.9 0.2-0.9-0.1-1-0.6-1.4-0.1-0.2-0.4-0.6-0.2-0.1-0.7-0.2-1-0.6-0.4 0-0.3-0.2-1.1-1 0.5-0.3-0.2-0.1-0.1-0.2-0.1-0.2 0.1-0.2 0.2-0.3 1-0.5 0.3-0.1 0.3-0.2 0.2-0.4 0.6-1.4 0.1-0.4 0.1-1.5 0.6-2.8 0.1-0.9-0.3-1-0.3-0.9-0.4-0.4-0.4-0.1-0.4-0.1-0.6-0.2-0.3-0.3 0.1-0.5-0.5-0.1-0.2-0.5 0.1-0.6 0.2-1 0-0.3-0.3-0.2-0.5-0.1-0.1 0-0.5-0.3-0.3 0-0.5 0-0.2-0.2-0.3-0.7-0.5-0.3-0.3-0.3-0.3-0.6-0.4-0.5-0.2-0.3 0-0.4 0.1-0.4 0.1-0.2 0.2-0.2 0.2-0.2 0.1-0.3 0-0.1-0.6 0.2-0.3 0.2-0.1 0.3 0 0.5-0.1 0.5-0.2 0.3-0.6 0.5-0.6-0.4-0.4-0.3-0.2 0-0.4 0.1-0.1-0.2-0.4-1.2-0.4-0.3-0.8-0.4-0.8-0.2-1.1-0.1-0.2 0-0.2 0.1-0.1 0.2 0 0.1 0.1 0.2 0.1 0.2-0.1 0.4-0.3 0.2-0.3 0-0.3-0.1-0.9-0.4-0.2-0.1-0.1 0-0.8-0.4-0.3-0.3-0.6-3.4 0.1-0.4 0.3-0.2 0.3 0 0.5 0.4 0.3 0.2 1.5 0 0.3 0.2 0.7 0.5 0.6 0.1 0.3 0.1 0.2 0 0.5-0.1 0.2-0.1-0.1-0.2-0.2-0.1-0.6 0.1-0.2-0.1-0.4-0.6-0.2-0.2-0.4-0.3-0.5-0.2-0.3 0-0.3 0-0.2-0.1 0-0.2 0.3-0.1-0.3-0.3 0-0.2 0.4 0 0.7 0.2 0.4 0 0-0.2-0.5-0.3-0.6-0.2-0.6-0.1-1.5 0-0.3 0.2-0.3-0.2-0.3-0.2-0.2-0.4-0.3-0.1-0.5 0-0.2 0.1-0.2 0-0.2-0.2-0.5-0.4-0.2-0.3-0.1-0.3-0.5-2 0-0.9 0-0.2 0.2 0 0.5 0-0.7-1-0.2-0.6 0.2-0.5 0-0.1-0.3-0.1-0.2-0.1-0.2 0.1 0 0.4-0.4-0.2-0.1-0.4 0.1-0.3 0.2-0.3 0.2-0.1 0.4-0.1 0.7-0.1 0.6 0.1 0.6 0.1 0.6 0.2 0.3 0.4 0.2 0-0.2-0.4-0.4-0.4-0.2-0.3 0-0.2 0-0.9 0-1.2-0.2-0.6-0.4-0.7-0.1-0.3 0-0.6 0.1-0.3 0.2 0 0.6 0.2 2.2 0.3-0.4-0.4-1-0.6-1.3-1.1-0.2-0.1-1.4-2.9-1.2-0.9-0.3-0.2-0.4 0-1.3-0.2-0.6-0.2-0.1-0.6 0.2-0.8 0.2-0.7 0.1-0.3 0-0.5-0.1-0.4-0.6-0.9-0.1-0.5 0.1-0.3 0.3-0.4 0.1-0.3 0-0.9-0.1-0.5-0.2-0.5-0.9-1.1 0-0.2 0.2-0.2 0.1-0.5-0.2-0.5-0.5-0.7 0-0.5 0.1-0.2 0.3-0.3 0.4-0.3 0.3-0.1 0.4 0 0.3-0.2 0.3-0.3 0.2-0.4 0.4-0.9 0-0.8-1.2-3.2 0-0.5 0.1-0.3 0.5-0.1 0.8-0.1 0.9-0.2 1.6-0.7 0.8-0.5 0.3-0.3 1.3-1.5 0.2-0.5 0.4-0.5 0.5-0.3 0-0.1-0.6-0.1-0.3 0.3-0.2 0.5-0.3 0.2-0.3 0.2-0.5 1-0.3 0.2-0.1 0.2-0.1 0.2-0.1 0.3-0.3 0.1-0.2 0.1-0.2 0.1-0.4 0.2-0.5 0.2-1.1 0.1-0.6 0.2 0.1-0.7 0.3-0.6 0.8-0.9 0.3-0.8 0.1-0.7 0-2.5 0.3-0.7 0.5-0.6 3.4-2.3 0.4-0.6 0.7-1.3 0.4-0.5 0.4-0.5 0.1-0.2 0-0.2-0.2 0 0 0.1-1.1 0.8 0.1-0.4 0.2-0.3 0.3-0.2 0.3-0.3 0.2-0.4 0-0.4 0-0.7 0.1-0.7 0.4-0.3 1.4-0.2 3-0.7 0.4-0.2 0.3-0.2 0.2-0.3 0.7-1.2 0.2-0.2-0.4 1.2-0.6 1-0.3 0.5-0.2 0.3-0.8 0.6-0.2 0.3 0 0.3 0.1 0.8 0 0.4 0.1 0.2 0.2 0.3 0.2 0.3 0.2 0.2 0.3 0.1 0.9 0 0.4 0.1 0.1 0.4-0.1 1.7 0 1 0.1 0.5 0.3 0.4 0.4 0.5 1.9 1.7 0.2 0.2 0 0.6 0.2 0.1 0.4-0.3 0.1 0.2 0.4 0.9 0.4 0.3 0.4 0.1 0.5-0.1 0.4 0 0.4 0.2 0.2 0.4 0.5 1.2 0.2 0.5 0.3 0.2 0.8 0.4 0.4 0.4 0.4 0.8 0.5 0.4 0.4 0.1 1.3 0.2 0.4 0.2 0.3 0.4 0.5 1 1.1 1.5 0.1 0.6 0 0.4 0.2 0.1 0.3-0.1 0.3-0.1 1.1 0.3 0.3 0.1 0.4 0.3 0.9 1.2 0.8 0.7 1 0.5 1 0.1 0.9-0.4 0.4-0.5 0.3 0 0.1 0.1 0.2 0.2 0.2 0.1 0.3 0.1 0.3-0.1 0.4-0.4 0.2-0.2 0.1 0 0.3 0.1 0.5-0.2 0.3-0.2 0.3 0.3 0.1 0 0.1-0.1 0.1-0.2 0-0.4 0.2-0.3 1.2-1.1 0.6-0.2 0.7-0.2 1.3 0 4.9-1.3 0.4 0.1 3 1.3 0.4 0.1 0.5 0 0.4 0 0.9-0.3 0.4 0 0.2 0.2 0.1 0.3 0.1 0.4 0.2 0.5 0.3-0.1 0.5-0.8 1.8-0.7 0.4 0 0.3 0 0.6 0.2 1.2 0.4 0.6 0.2 1.3-0.3 1.9-2.3 1.4-0.4 1.7 0 0.6-0.1 0.2-0.1 0.2-0.3 1.1-3.3 0.7-1.3 0.1-0.3 0-0.2-0.1-0.2-0.5 0-0.1-0.2 0.1-0.6 0.4-0.3 2.5-1.2 0.6-0.1 1.3-0.2 0.4-0.1 0.4-0.3 0.3-0.3 0.3-0.2 0.5-0.2 6.5 0.4 0.6 0.2 0.1 0 0.3-0.2 0.3-0.3 0.2-0.2 0.4-0.2 0.4 0.1 0.3 0.1 0.4 0.1 1.1-0.1 0.4 0.1 0.5 0.2 0.4 0.2 0.2 0.3 0 0.5-0.2 0.5-0.2 0.4-0.3 0.4-0.7 0.4-0.1 0.3 0 0.1 0.4 0.1 0.8-0.3 0.8-0.2 0.9 0.1 0.8 0.4 0.7 0.5 0.3 0.1 1 0.1 1.2 0.3 1.1 0.3 1.6 1.3 1 0 0.8-0.3 0.5-0.2 0.4 0.1 0.5 0.2 1.1 1.3 0.6 0.3 0.5-0.1 3.5-2.3 1.3-1.6 0.5-0.5 0.4-0.1 3.1-0.5 0.9 0 0.8 0.2 0.2 0.2 0.2 0.2 0.2 0.3 0.3 0 0.2 0 0.6-0.4z",
    IDN540:
      "M344.7 308.3l-2.8-0.1-0.2-0.1-0.3-0.3-0.2-0.1-0.4 0-0.5-0.2-0.8-0.4 0 0.2-1.2-0.6-0.6-0.1-0.5-0.1-0.4-0.1-1.5-0.8-0.4 0-0.2-0.1-0.1-0.1-0.5-0.5-0.1-0.1-0.5-0.4-0.2-0.1-0.7 0-5.3-2.8 0.1-0.5 0.1-0.2 0.3-0.4 1.1-1.7 0.2-0.4 0.1-0.4 0-0.6 0-0.2 0.2-0.2 0.5-0.3 1.3 0.2 0.2 0 0.2-0.1 0.1 0.1 0.1 0.1 0.1 0.5 0.1 0.3 0.2-0.2 0.4-0.5 0.3-0.3 2.4-1.8 0.6-0.6 0.1 0.2 0.7 3.3 0.4 0.8 0.3 0.6 0.7 0.6 0.9 0.2 1.2 0 0.4 0.1 0.8-0.1 0.3 0.1 1.1 0.2 0.4 0.2 0.2 0.2 0.1 0.5 0 1 0.1 0.6 0.1 3.8 0.1 0.2 0.2 0.2 0.2 0 0.1-0.1 0.3 0 0.1 1.4z",
    IDN1796:
      "M208 138.2l1 1.1 0.1 0.4-0.1 0.4-0.4 0.4-0.9 0.6-0.1 0.4-0.1 1.1-0.3 0.3-0.7 0-0.7-0.5-0.5-0.3-0.6 0.8-0.2 0.9-0.2 0.1-0.4 0.1-0.3-1.8-0.2-0.8-0.2-0.3-0.3 0.1-1.2-1.3-0.1-0.3 0.2-0.3 0.3-0.7 0.2-0.3 0.6-0.5 0.3-0.3 0.2-0.4 0.1 0 0.1 0.4-0.2 0.9 0.1 0.5 0.1 0 0.1-0.4 0.1-0.5 0.1 0 0.5 0.3 0.8-0.4 1.1-1.1 0.5 0.4 0.1 0.1 0.5 0.2 0.3 0.2 0.2 0.4 0.1 0.1z m-1.2-1.9l-0.5 0.1-0.3 0.1-0.2 0.1-0.6-0.1-0.2-0.1-0.2-0.3 0.1-0.3 0.4-0.2 1.3-0.1 0.1 0.1 0.2 0.1 0 0.2 0 0.2-0.1 0.2z m2.1-6.9l0.7 0.3 1.2 1.1 0.1 0.2-0.7 0.2 0 0.2 0.1 0.1 0.3 0.3 0.2-0.1 0.2-0.2 0.2 0 0.3 0.2 0.6 0.7 0.4 0.9 0.3 0.4 0.4 0.2 0.6-0.1 0.1-0.2 0-0.3 0.2-0.5 0.5-0.2 0.6 0.6 1.1 1.6 1.8 0.9-0.2 0.3-0.4-0.1-0.6-0.2-0.5-0.1-0.4 0.2 0.1 0.3 0.2 0.3 0.1 0.4-1.1-0.5-0.4-0.1-0.3-0.1-0.4-0.4-1.2-0.5-0.3-0.3-0.3-0.4-0.3-0.2-0.5-0.2-0.9 0.1-0.3 0.1-0.4 0.2-0.5 0.3-0.2 0.1-0.1 0-0.4-0.1-0.4 0.3-0.3 0.3-0.2 0.1-0.3 0-0.1-0.1-0.1-0.4-0.3-0.3-0.2-0.1-0.3-0.1-0.5 0-0.3-0.1-0.1-0.1-0.1-0.3 0-0.2 0-0.3 0.1-0.1 0.3-0.1 0.9-0.8 0.3-0.4 0.2-0.6 0.1-1.7 0.3-0.7 0.5 0.4 0.1-0.4 0.5 0.3z m-3.2-3l1.1 1.4 0.1 0.3-0.4 0.1-0.2 0 0.3 0.4 0 0.2 0 0.3-0.1 0-0.4-0.5-1-1-0.3-0.6 0.2 0 0.2 0.2 0.1 0-0.3-0.9 0-0.2 0-0.2 0.1-0.1 0.2 0 0.1 0.2 0.3 0.4z m1.6-1.9l0.4 0.3 0.1-0.2 0.2 0.1 3.1 3.4 0.4 0.6-0.1 0.2-0.4-0.1-0.5-0.3-0.5-0.4-0.1-0.2-0.2-0.5-0.1-0.1-0.3 0.3-0.2-0.2-0.4-0.5-0.2-0.3-0.1-0.1 0-0.3-0.1-0.1-0.3 0-0.3-0.2-0.1-0.1-0.1-0.4-0.5-0.6-0.1-0.2-0.1-0.3 0.2 0.1 0.3 0.1z m-2.2-1.3l-0.2 0.1-0.2-0.2-0.1-0.4-0.2-0.1-0.2 0-0.5-0.8-0.2-0.1 0.3-0.2 0.1 0.1 0.4 0.3 0.6 0.3 0.3 0.3 0.1 0.2 0 0.2-0.2 0.3z m-19.9-7.2l-0.2 0.1-0.3 0-0.1-0.3 0.1-0.4 0.3-0.3 0.3-0.6 0.1-0.1 0.3 0 0.1 0.2-0.1 0.3 0 0.2-0.3 0.6-0.2 0.3z m17.2-0.5l-0.2 0.5-0.3-0.1-0.1-0.3-0.2-0.5-0.6-0.6-0.2-0.3 0.6 0.3 0.6 0.4 0.4 0.6z m10-1.6l-0.2 0.1-0.2-0.1-0.2-0.3 0.1-0.3 0.3 0 0.3 0.3-0.1 0.3z m-2.8-1.2l-0.1 0.3-0.3 0-0.6-0.1-0.4 0-0.3 0.1-0.7 0.3 0-0.5 0.3-0.3 0.4-0.2 0.5 0 0.9 0.1 0.3 0.1 0 0.2z m-7.4-0.2l0 0.5 0 0.4 0.1 0.3 0.3 0.5-0.3 0-0.2 0.1-0.2 0-0.2 0-0.4-0.3-0.5-0.1-0.2-0.1-0.3-0.4-0.1-0.4 0.2-0.3 0.4-0.3 0.4 0.1 0.3 0 0.2-0.2 0.2-0.1 0.2 0.1 0.1 0.2z m-12 0.5l-0.3 0-0.3 0-0.1-0.2-0.1-0.4-0.5-0.7 0-0.3 0.8 0.5 0.3 0.4 0.2 0.4 0 0.3z m19.9-0.9l-0.3 0-0.1-0.1 0.1-0.1 0.1-0.3 0.1-0.4 0.2-0.2 0.3 0.2 0 0.4 0 0.2-0.2 0.2-0.2 0.1z m-24.3 0.2l0 0.4-0.7-0.9-0.3-0.3-0.8-0.2-0.3-0.3-0.1-0.4 0.2 0.2 1.2 0.4 0.4 0.3 0.3 0.3 0.1 0.3 0 0.2z m9.1 0.5l-0.2 0.1-0.3-0.1-0.2-0.2-0.3-0.6-0.2-0.2-0.8-0.3-0.2-0.4-0.5-0.6 0-0.1 1 0.2 0.7 0.5 0.6 0.6 0.4 0.7 0 0.4z m-10.5 2.5l-0.5 0.2-0.5-0.2-0.2-0.4-0.2-0.5-0.2-0.2-0.9-1.2-0.1-0.4 0-0.5 0-0.3 0.2-0.4 0.2-0.7 0.3-0.3 0.3-0.1 0.3 0.2 0.2 0.3 0.2 0.4 0.2 0.3 0.7 0.3 0.2 0.3 0.4 0.6 0.3 0.3 0.1 0.2 0.1 0.3-0.6 1.2-0.5 0.6z m8.2-2.4l-0.1 0.1-0.3-0.1-0.4-0.3-0.8-0.5-0.4-0.4-0.3-0.5-0.1-0.6 0.4-0.4 0.1 0.1 0.4 0.1 0.2 0.1 0.5 0.6 0.4 0.2 0.3 0.6 0.1 0.6 0 0.4z m-7.8-2.4l-0.2 0.2-0.2 0-0.3-0.1-0.3-0.1-0.1-0.2-0.1-0.2-0.3-0.2 0-0.1 1-0.2 0.2 0 0.2 0.3 0.1 0.3 0 0.3z m15.1-0.1l0.2 0.1 0.9 0 0.4 0.1 0.3 0.1 0.2 0.3-0.2 0.4-0.1 0.2-0.3 0.1-1.1 0.5-0.2 0.1-0.2-0.2-0.2-0.3-0.1-0.6-0.2-0.3-0.3-0.1-0.5-0.2-0.4-0.1 0.2-0.3-0.1-0.9 0.1-0.3 0.3-0.1 0.3 0.2 0.7 0.7 0.1 0.2 0 0.2 0.2 0.2z m-5.7-2.6l0.7 0.2 0.2 0.1 0.2 0.3 0.1 0.3 0 0.3-0.2 0.2-0.2 0.1-0.3 0-0.3 0-0.2-0.1-1.2-0.6-0.2-0.2-0.1-0.3-0.1-0.3 0.2-0.2 0.2 0 0.4 0.2 0-0.2 0.1-0.4 0.3 0.4 0.4 0.2z m20.2 1l-0.2 0.1-0.1-0.3 0-0.2 0-0.4-0.1-0.1-0.7-0.5 0.2-0.2 0.2 0.1 0.5 0.1 0.2 0.1 0 0.3 0.2 0.3 0.1 0.3-0.2 0.3-0.1 0.1z m59.9-1.1l-0.5 0.6-0.4 0.2-0.2-0.1 0-0.1 0.2-0.3 0-0.2-0.1-0.1-0.4 0-0.1-0.2 0-0.2 0.2-0.2 0.2 0 0.3 0 0.5 0.2 0.3 0.2 0 0.2z m-90.3-0.1l0.1 0.3-0.2 0.2-0.3 0-0.3-0.1-0.6-0.3-0.5 0.1-0.4-0.3-0.5-1 0-0.2 0.1-0.4 0.3-0.4 0.2-0.2 0.5-0.3 0.2 0 0.3 0 0 0.2 0 0.3-0.1 0.2 0.2 0.5 0.1 0.3 0.1 0.2 0.1 0.1 0.3 0 0.2 0.2 0 0.3 0.2 0.3z m15.4-2.8l0 0.5-0.4 1.5-0.2 0-0.4-0.3 0 0.3 0.2 0.3-0.2 0.1-0.3 0.5 0.1 0.3-0.2 0.1-0.3 0-0.5 0.1-0.4-0.1-0.8-0.4-0.1 0-0.5 0-0.2 0-0.1-0.1-0.7-0.8-0.3-0.5-0.1-0.4 0.3-0.2 0.2 0.1 0.3 0.4 0.2 0 0.2-0.2 0-0.2-0.1-0.2-0.2-0.7 0.3-0.1 0.2 0 0.5 0.2 0.1 0 0.4-0.3 0.2-0.7 0.2-0.2 0.2 0.1 0.7 0.8 0.3 0.3 0.1-0.3 0-0.3-0.1-0.2-0.2-0.3 0.3-0.1 0.3 0 0.2 0 0.3 0.1 0.2 0.2 0.2 0.3 0.1 0.4z m9.6-1.2l-0.1 0.8 0 0.3 0.2 0.4 1.1 0.5 0.1 0.2 0.1 0.3 0.2 1.1-0.3 0.5-0.1 0.2 0.1 0.5 0.1 0.6 0.1 0.2-0.1 0.2-0.2 0.3-0.2 0-0.3 0.1-0.2 0.1 0 0.2-0.1 0.3-0.2 1.1-0.8 0.1-1.8-0.7 0.2-0.3-0.2-0.4-0.3-0.3-0.4-0.2 0-0.1 0.5 0 0.3 0 0.1-0.2-0.1-0.2-0.3 0-0.5 0-0.5-0.2-0.1-0.2 0-0.2 0.1-0.2 0.8-0.2-0.1-0.2 0-0.2 0.1-0.3 0.1 0 0.2-0.2 0.2-0.2-0.4-0.1-0.2-0.3-0.1-0.1-0.3 0-0.2 0.1-1 0.5-0.3 0.1-0.5 0.1-0.2 0-0.3 0.3-0.2 0.1-0.8 0-0.2 0-0.5-0.3-0.1-0.4 0-0.4-0.2-0.5 0-0.3 0.5-0.4 1.1-0.4 0.2-0.1 0.1-0.1 0.3-0.4 0-0.2 0.1-0.2 0-0.1 0.4-0.1 0.5 0.1 0.2 0 0.1-0.3 0.1-0.2 0.3 0 0.5 0.3 0.9 0.2 0.7 0 0.6-0.3 0.8-0.4-0.1-0.2 0.1-0.1 0.3 0.1 0.1 0.5z m96.9-29.1l0.9 0 0.3 0.1 0.1 0.2-0.1 0.1-0.3 0.3-0.4 0.2-0.6 0.2-0.5 0-0.3-0.3 0-0.3 0.2-0.2 0-0.1-0.4-0.2-0.1 0-0.2 0.1-0.2 0-0.3-0.1 0-0.2 0.1-0.2 0.2-0.1 0.3-0.1 0.3 0.1 0.2 0.1 0.5 0.3 0.3 0.1z m-61.1-4.4l-0.1 0.1-0.1-0.2-0.3-0.3-0.1-0.5-0.2-0.4-0.1-0.2 0.1-0.3 0.3 0 0.2 0.1 0.1 0.2 0.1 0.3 0.1 0.7 0 0.3 0 0.2z m56.5-2.4l0 0.1-0.3-0.1-0.3-0.2-0.3-0.3-0.4-0.2-0.2-0.2 0-0.1 0.5-0.3 0.4-0.3 0.3-0.3 0.1-0.3 0.1-0.2 0.1-0.3 0.3-0.7 0.5 0 0.4 0.5-0.3 0.6 0 0.3 0.2 0.8-0.1 0.3-0.1 0.1-0.5 0.2-0.1 0.1-0.1 0.1-0.2 0.4z m-23.3-2.8l-0.3 0-0.3-0.1 0.2-0.7 0.5-0.2 0.5 0 0.2 0.2 0.1 0.4 0 0.2-0.9 0.2z m-43.3 0l0.2 0 0.1-0.1 0.1-0.3 0.2 0 0.2 0 0.7 0.2 0.2 0.1-0.2 0.3-0.1 0 0-0.2-0.2 0-0.4 1.6-0.2 0.1-0.3-0.2-0.2 0.1-0.1 0.1-1 0.4 0.2 0.3 0.3 0 0.2 0.1 0.1 0.1-0.1 0.3-0.6 0.1-0.2 0-0.3-0.1-0.2-0.1-0.1-0.3 0-0.2-0.1-0.3 0.1-0.2 0.2-0.6 0.1-0.5 0.2-0.5 0.1-0.2-0.2-0.3-0.5-0.2-0.2-0.2 0.2-0.2 0-0.3 0-0.3-0.1-0.3 0.3-0.1 0.2 0.4 0.1 0.1 0.4 0.2 0.1 0.4-0.1 0.3 0.1 0.3 0.5 0.1 0.3 0.1z m10-5.4l0.5 0.2 0.4 0.4 0.2 0.4 0 2-0.2 0-0.4-0.6-0.4 0.2-0.2-0.2-0.1-0.2-0.4-0.1 0.1-0.1 0.1-0.5-0.3-1.1 0.1-0.4 0.3 0 0.3 0z m1.2-2l0 0.8 0 0.2-0.1 0.2-0.1-0.1-0.1-0.5 0-0.1-0.2 0-0.1 0.3 0.2 0.6 0.2 0.3-0.1 0.2-1-0.6 0.1-0.2 0-0.4 0.2-0.5 0.1-0.4 0.1-0.4 0.3-0.3 0.5-0.2 0.1 0.2-0.1 0.9z m43.7-16.7l1.3 1.5 0.6 0.4 0.1 0.1 0 0.4 0 0.5 0.1 0.3-0.2 0.3-0.3 0.2-0.3 0.2-0.1 0.4 0.3-0.1 0.1 0 0.4 0.4 0.2-0.2 0 0.2-0.4 1.1-0.1 0.3-0.9 1.2-0.2 0.3-0.1 0.4-0.1 0.6-0.1 0.2-0.4 0.2-0.3 0-0.7 0-0.3 0-0.4 0.1-0.6 0.4-0.2 0.1-0.2-0.1-0.7-0.5-0.8-0.3-0.3-0.1 0.5-0.7 0.2-0.5 0.2-0.1 0.3 0.1 0.4-0.2 0.1-0.3 0.1-0.3 0.2-0.1 0.4 0 0.2 0 0.3 0.1 0.3 0.3 0.6 0.7 0.3 0.2-0.1-0.3-0.3-1-0.1-0.1-0.3-0.4-0.2 0-0.6 0-0.6-0.1-1.7-0.6-0.7-0.1-0.2-0.1-0.2-0.2-0.1-0.3-0.4-0.7 0-0.5-0.1-0.2-0.3-0.2-0.1-0.1 0-0.2 0-0.5-0.1-0.2-0.3-0.2-0.1-0.1 0.1-0.2 0.2-0.3 0.6-0.6 0.2-0.2 0.4 0 0.2-0.1 0.1-0.1 0.3-0.4 0.3-0.1 1.7-1.7 0.2-0.5 0.3-0.4 0.4-0.3 0.3-0.2 0.3 0.3 0.2 0.4 0.1 1.2 0.1 0.6 0.3 0.4 0.7 0.6z m-6.8-13.2l-0.2 0.2-0.5-0.1-0.3 0-0.2-0.1 0-0.2 0.1-0.2 0.2-0.2 0.4-0.2 0.2-0.2 0.2-0.4 0.1-0.2 0.1-0.1 0.2-0.1 0.2 0.1-0.1 0.2-0.1 0.3-0.1 0.8-0.2 0.4z",
    IDN1185:
      "M512.9 79.5l0.7 0.4 0.3 0.3-0.1 0.3-0.3-0.2-0.7-0.5-0.2 0 0.2 0.3 0.3 0.7 0.6 0.7 0.3 0.3 0.3 0.2 0 0.2-0.5-0.1-0.4-0.3-0.5-0.5-0.2-0.3-0.3-0.4-0.2-0.7 0-0.5 0.5-0.2 0.2 0.3z m-23-21.7l-0.1 0.3-0.1 0-0.4-0.1-0.7 0-0.2 0-0.2 0.1-0.2 0.2-0.2 0-0.4-0.2 0-0.3 0.1-0.4 0.3-0.3 0.4-0.2 0.4 0 0.4 0.1 0.7 0.3 0.2 0.2 0 0.3z m2.8 1.1l-0.2 0.2-0.3-0.1-0.1-0.4-0.1-0.4-1.2-0.6-0.3-0.4-0.3-0.5-0.2-0.5-0.1-0.6 0.3-0.5 0.5-0.2 1.3 0 0.3 0 0.4 0.1 0.3 0.1 0.2 0.3 0 0.3 0 0.5-0.1 0.5-0.3 0.5 0.1 1.3-0.2 0.4z m5.1-4.7l-0.1 0.3-0.3-0.1-1.1-0.7-0.1-0.4-0.8-0.6-0.1-0.4 0.1-0.6 0.4-0.2 0.5 0.1 0.5 0.3 0.3 0.3 0.3 0.5 0.3 0.4 0.1 0.5 0 0.2 0 0.4z m-8.4-0.7l0.2 0.1 0 0.2 0 0.2-0.4 0.5-0.9-0.2-1.8-0.7-1.9 0-0.3-0.1-0.4-0.1-0.3-0.2-0.2-0.2-0.2-0.2-0.1-0.3 0-0.3 0.2-0.2 0.4-0.4 0.3-0.1 0.2 0 0.2 0.1 0.4 0.3 0.3 0 1.8 0.2 0.4 0.2 0.5 0.7 0.4 0.1 0.2 0.1 0.5 0.2 0.5 0.1z m5.6-8.1l0.5 0.2 0.4 0.2 0.5 0.3 0.3 0.3 0.2 0.3-0.1 0.3-0.4 0-0.4-0.1-0.6-0.3-0.3-0.3-0.5-0.6-0.2-0.2 0.4-0.1 0.2 0z m-1.3-2.5l-0.9 0.1-0.9-0.7-0.6-1 0.4-1 0.7-0.7 0.3-0.2 0.3 0.2 0.6 0.6 0.9 0.5 0.2 0.2 0 0.6-0.2 0.6-0.8 0.8z m0-3.8l0.7 0.1 2.5 0 1.2 0 0.1 0.3 0.1 1 0.4 0.8-0.7 0.5-0.3 0.2-0.4 0-0.7-0.2-0.4-0.6-1.2-0.7-0.6-0.7-0.7-0.7z m-24.6 141.8l-0.1 0-2.2-0.7-1.6-0.3-5.1-0.3-0.6-0.2-1.9-0.1-0.4-0.1-0.6-0.3-0.3 0.1-0.2 0.1-0.4 0.4-0.3 0.1-0.4 0.2-0.2 0.1 0 0.3-0.1 0.2-0.3 0.1-0.5 0.2-0.1-0.1-0.1-0.1-0.3-0.5-0.2-1.4-0.6-1.6 0-0.4 0.1-1.6 0.3-0.9-0.2-0.3-0.2-0.1-0.7-0.1-0.4-0.2-0.3-0.3-0.2-0.6 0-0.5 0-0.3 0.1-0.3 0.1-0.4-0.1-2.6-1-2.3-0.1-0.5-0.1-0.5-0.1-0.2-0.4-0.4-0.2-0.3 0-0.3-0.1-0.7-0.2-0.3-0.2-0.2-0.4 0-1-0.1 0.8-1.1 0.5-0.5 0.3-0.2 0.2-0.2 0.6 0 0.3 0 0.3 0.1 0.3-0.1 0.3-0.3 0.4-0.6 1.1-2 0.1-0.5 0.1-1.1 0.1-0.3-0.3-2.6-0.4 0.1-0.3 0.1-0.3 0.2-0.2 0-0.2 0-0.3-0.4-0.2-0.3-0.5-0.4-0.1-0.2-0.2-0.4-0.1-0.3-0.4-0.4-0.3-0.2-0.3-0.2-0.5-0.1-0.7-0.3-0.7-0.2-0.3-0.1-0.2-0.1-1.1-0.9-0.1-0.3-0.1-0.3 0.1-0.2-0.1-0.4-0.1-0.3-0.7-0.9-0.1-0.3-0.5-2.6-0.1-0.8 0-0.4-0.2-0.4-1.1-1.5-0.4-0.8-0.2-0.8-0.1-0.4-0.1-1.1-0.1-0.4-0.3-0.8 0-0.4 0.1-1.6 0.1-0.8 0.2-0.4 0.6-1 0.1-0.5 0.3-1.5 0.1-0.4 0.1-0.2 0-0.2-0.2-0.2-0.7-0.1-0.7-0.2-0.2 0-0.3 0.1-0.5 0.1-0.3 0-0.6 0.4-1.7 2-0.2 0.3-0.3 0.4-0.2 0.1-0.6 0.3-0.2 0.1-0.8 0.8-0.3 0-0.2-0.3-0.1-0.2 0.1-0.3 0-0.3 0-0.2-0.2-0.3 0-0.2 0-0.2 0-0.4 0.4-1.1 0.7-1.7 0-0.2 0-0.3-0.1-0.3-0.1-0.3-0.2-0.4-0.5-0.8-0.1-0.2 0-0.2 0-0.6 0-0.3-0.1-0.2-0.2-0.5-0.1-0.3-0.1-0.3 0-0.6 0.1-0.3 0.3-0.8 1.2-2.5 0.2-0.2 0.5-0.5 0.3-0.2 0.1-0.3 0.1-0.3-0.1-0.2-0.2-0.5-0.1-0.3-0.1-0.9-0.1-0.2-0.2-0.3-0.2-0.4-0.1-0.2-0.2-0.2-0.5-0.2-0.1-0.2-0.2-0.3-0.1-0.2-0.3 0-0.4-0.1-1.2 0.1-0.3 0.1-0.1 0.1-0.1 0.3-0.2 0.2-0.6 0.1-1 0.2-1.1 0.4-0.6 0.4-0.5 0.4-0.4 0.3-6.2 0.7-0.4 0-0.4-0.2-1.6-0.2-0.4-0.1-0.3-0.2-0.5-0.4-0.3-0.1-0.4-0.1-1-0.1-0.9 0.1-0.9 0-0.4 0-0.4 0.2-0.2 0.2-0.3 0.3-0.2 0.2-0.3 0.1-0.9 0.1-0.4 0.1-0.9 0.4-0.3 0-1.1 0.2-0.6 0.2 0.3-0.8 0.1-0.2 0.3-0.4 0.2-0.1 0.5-0.2 0.2-0.2 0.5-0.8 0.8-0.8 0.2-0.4 0.1-0.5 0-0.5 0.1-0.4 0.1-0.4 0.2-0.5 0.1-0.4 0-0.4-0.1-0.3-0.2-0.2-0.2-0.1-0.2 0-0.2 0.1-0.5 0.1-0.2 0-0.2-0.1-0.1-0.2 0-0.2 0.1-0.5 0-0.4 0-0.3 0.1-0.2 0.4-0.4 0.3-0.2 1-0.5 0.7-0.5 0.6-0.3 0.2-0.1 2.1-1.8 0.2-0.2 0.5-0.2 0.6-0.5 0.4-0.3 0.2-0.2 0.1-0.3 0.1-0.5 0-0.4-0.1-0.3-0.3-0.4 0-0.4 0-0.3 0.3-1.7 0.1-0.4 3.2-1.3 0.4-0.1 0.5 0 0.5 0.3 1.7 1.2 0.5 0.2 0.5-0.2 0.4-0.3 0.1-0.4 0-0.5-0.1-0.4 0-0.6 0.2-0.3 0.8-0.7 0.3-0.3 0.6-1 0.4-1.1 0.2-1.5 0-0.7-0.2-0.6 0.1-0.2 0.1-0.2 0.2-0.2 0.2-0.2 0.3 0 1.1-0.2 1.2-0.5 0.3-0.2 0.1-0.4-0.1-0.5 0-0.4 0.1-0.3 0.1-0.5 0.1-0.3 0-0.3-0.1-0.3-0.2-0.1-0.5 0-0.3 0.2-0.3 0-0.2-0.5 0-0.2 0-0.7-0.1-0.2-0.2-0.4-0.1-0.2 0-0.4 0.2-1.2 0.4-0.8 0.6-0.4 1.7-0.2 0.6-0.2 0.1-0.3 0-0.3-0.1-0.5 0.2-0.4 0.2-0.2 0.9 0.1 0.4-0.3 0.9-0.8 0.4-0.1 0.3-0.2 0.8-1 0.5-0.3 1-0.1 0.5-0.1 0.2-0.4 0-0.4-0.3-0.5-0.3-0.5-0.3-0.4-0.2-0.1-0.3-0.2-0.3 0-0.2-0.1-0.3 0.1-0.4 0.2-0.3 0-0.3-0.3 0-0.4 0.2-0.5 0.1-0.5 0-0.2-0.3-0.4 0-0.2 0.1-0.3 0.5-0.1 0.2-0.2 0.2-0.5-0.1-0.4-0.6-0.8-0.1-0.3 0.1-0.1 0.2 0 0.2-0.3 0.2-0.2 0.2-0.7 0.3-0.5 0.4-0.3 1.2-0.9 0.3-0.3 0.4-0.7 0.3-0.6 0.3 0.1 0.6 0.8 0.6 0.3 0.7-0.1 1.4-0.6 0.9-0.1 0.3-0.2 0.2-0.4 0.1-0.9 0.1-0.4 0.8-1-0.1-0.2-0.3-0.1-0.3-0.4 0-0.4 0.7-3.3 0.4-1 0.5-0.4 0.2 0 0.4 0.1 0.2 0 0.1-0.3 0-0.2-0.2-0.4-0.3-0.7-0.1-0.3 0-0.2 0-0.4 0-0.2-0.5-1.4-0.1-0.5 0-0.8 0.1-0.9 0.9-2.5-0.1-0.8-0.3-0.3-0.4-0.2-0.3-0.3 0-0.5 0.1-0.2 0.8-0.4 0.2-0.2 0.4-0.9 0.3-0.9 0.2-2 0.3-0.8 0.2-0.2 0.4-0.2 0.3-0.3 1-0.9 0.1 0.1 0.2 0.2 0.2 0.1 0.3-0.1 0.2-0.5 0.8-0.7 0.1-0.6 0-0.8 0.2-0.6 0.3-0.3 0.3-0.1 0.1 0.2 0.1 0.4 0.3 0.3 0.4 0.1 0.9 0 0.5 0.2 0.3 0.2 0.1 0.1 0.1 0.4 0.1 0.4 0.3 0.2 0.3 0.1 0.3-0.1 1-1 0.4-0.3 0.3-0.2 0.1-0.2 0.2-0.5 0.2 0.1 0.3 0.1 0.5 0 0.9 0.3 0.3 0 0.7-0.2 0.6-0.3 0.5-0.1 0.6 0.6 0.3 0 0.2 0 0 0.1 0.1 0.3 0.6 0.9 0.2 0.1 0.2 0.1 0.2-0.1 0.6-0.6 0.2 0 0.2 0.1 0.4-0.1 0.2-0.1-0.1-0.3-0.1-0.2 0.2-0.4 0.5-0.4 0.1-0.3 0.3 0 0.9 1.4 0.3 0 0.5-0.2 0.6 0.2 0.4 0 0.4-0.2 0.7-0.5 0.4 0 0.8 0.6 0.8 0.2 1.8-0.4 0.8 0 1.3 0.4 4-0.1 0.2-0.1 0.3-0.3 0.3-0.1 0.3 0.1 0.2 0.1 0.3 0.4 0.8 0.6 1.7 0.9 1.3 1.3 0.5 0.3 0.6 0.2 0.7 0.1 0.4 0 0.6 0 0.3 0.1 0.2 0.2-0.2 0.1-0.6 0.6-0.2 0.1-0.3 0-2.9-1 0.1 0.4 0.2 0.1 0.4 0.2 0 0.2-0.2 0.4 0 0.2 0.3 0.1 0.5 0 0.4 0.1 0.3 0.2 0.2 0.3-0.1 0.3 0 0.2 0.2 0.1 0.2-0.1 0.2-0.1 0.3-0.1 0.2 0.1 2 2 0.3 0.2 0.8 0.2 0.3 0.1 0.3 0.3-0.1 0.2-0.3 0.3-0.5 0-0.5-0.1-0.8-0.5-0.4-0.2-1-0.1 0 0.2 0.6 0 0.6 0.3 0.5 0.4 0.4 0.4 0.3 0.1 0.4 0 0.3-0.1 0.3-0.1 0.2 0.1 0.6 0.4 0.1 0.2 1.2 1.1 0.1 0.3 0 0.2-0.1 0.1-0.4 0-1.3-0.1 0.3 0.3 0.4 0.2 1 0.4 0.9 0.1 0.2 0.2-0.1 0.4-0.2 0.2-0.6 0.3-0.2 0.3-0.4 0.5-0.3 0.2-2.1 0.1-0.5 0-0.8-0.5-0.5 0-0.4-0.2-0.3-0.5-0.2-0.5-0.4-0.6 0-0.2-0.1-0.5-0.1-0.2-0.2-0.1-0.4-0.2 0.3 0.6 0.2 1.2 0.1 0.3 0.3 0.4 0.3 0.6 0 0.5-0.3 0.4-0.4 0-0.9-0.5-0.5-0.1-2.7 0-1.8-0.3-2.8 0.1-0.8 0.3-0.5 0.8 0.5-0.3 0.6-0.2 0.7-0.1 1.2 0 0.6 0.1 0.4 0.3-0.2 0.6-0.2 0.4 0.3 0.6 0.3 0.5 0.4 0.3 0.2 0.1 0.8 0.2 0.3 0.2 0.2 0.2 0.3 0.5 0.4-0.2 0.6-0.1 0.7 0.1 0.5 0.2 0.2 0.1 0.2 0 0 0.1 0 0.6 0 0.3-0.1 0.3-0.2 0.2-0.4 0.2-0.2 0.2-0.3 0.4-0.5 0.5-0.1 0.2 0 0.9-0.1 0.2-0.3 0.3-0.3 0-0.4-0.5-0.7-0.2-0.2-0.1-0.2 0.1 0 0.2 0.2 0.4 0.2 0.3 1.6 0.8 0.3 0.2 0.5 0 0.8 0 0.5 0.1 0.1 0.2 0 0.4 0 0.3 0.6 0.6 0.8 0.1 0.9-0.1 0.9 0.2 0.3 0.1 0.1 0.3 0.2 0.2 0.1 0.3-0.1 0.2-0.3 0.2-0.2 0-0.2 0.2-0.5 0.7-0.2 0.2 0.3 0.1 0.5-0.1 0.4-0.1 0.3-0.2 0.4 0 0.5 0.2 0.2 0.3 0 0.2-0.4 0.1-0.8 0.4-0.4 0.1-1.5 0.2 0 0.1 0.5 0 1.6 0.3 2.1 0.1-0.3 0.4-0.4 0.1-0.5 0.2-0.4 0.2-0.8 0.6-0.2 0.2 0.3 0.3 0.9 0.3 0.9 0.1 0.8 0.2 0.7 0.6 0.2 0.3 0.1 0.4 0.1 1.5 0.1 0.4 0.2 0.3 0.2 0.3 0.9 0.8 0.3 0.5 2.1 1.8 0.2 0.2 0.3 0.5 0.2 0.2 0.3 0.9 0.3 0.4 0.2-0.3 0.4 0.3 0.4 0.6 0.3 0.7 0.1 0.6-0.2 0.4-0.7 0.9-0.3 0.2-1.5 0.4-0.5 0.2-0.3 0.4 0 0.4-0.1 0.5-0.4 0.3 0 0.3-0.7 0-1.3-0.3 0.4 0.4 0.8 0.5 0.4 0.4-0.8 0.2-0.8 0.1-0.7-0.1-0.8-0.2-0.3 0.1 0.2 0.3 0.3 0.1 0.8 0.1 0.4 0.1 0.3 0.2 0.2 0.3 0.3 0.2 0.2-0.1 0.2 0 0 0.9-0.1 0.5-0.2 0.2-0.1 0.1 0 0.3 0.1 0.2 0.2 0.1 0.3 0 0.2 0.2 0.2 0.4 0.2 0.4 0.3 0.4 0.4 0.1 0.5 0.1 0.3 0.2 0.3 0.2 0.3 0.1 0.6 0 0.2 0.1 0.1 0.2-0.1 0.4 0 0.2 0.2 0.2 1.6 1.8 1.2 0.5 1.9 1.5 0.9 0.4 0.9 0.2 0.3 0.2 0.6 0.6 0.5 0.1 0.1 0.1-0.1 0.3-0.3 0.2-0.1 0.2 0.1 0.2 0.2 0.1 0.5 0 0.3 0.1 0 0.2 0.1 0.5 0 0.2 0.2 0 0.2-0.2 0.4 0.2 0.7 0.5 0.2 0 1 0.1 0.7 0.3 1.4 1.6 0.8 0.3 0.3 0.3 0.6 0.5 0.5 0.6 0.1 0.4 0 0.1-0.3 0.1-0.1 0.2 0.7 0.3 0.3 0.2 0.3 0.5 0.7 1.3 0.5 0.1 0.2-0.1 0.1-0.1 0.3-0.3 0.2 0 0.4 0 1.1 0.4 0.3 0.2 0.1 0.3-0.1 0.5 0 0.2 0.3 0.3 0 0.3-0.2 0.3-0.7 0.6-0.3 0.5-0.4 0.2-1.6 0.7-0.3 0.3-0.2 0.6-0.3 0.2-0.3 0.2-0.4 0.1-0.5 0-0.2-0.1-0.5-0.3-0.5-0.1-0.3-0.2-0.4-0.2-0.5 0-0.5 0.1-1.2 0.6-0.4 0.2-0.3 0-0.2-0.2-0.2-0.1-0.4-0.1-0.9-0.3-1 0-0.2 0-0.2 0.4-0.2 0.1-0.2 0.2-0.2 0-0.3-0.1-0.3-0.3-0.2-0.3-0.3-0.3-0.3-0.2-2.8-0.3-1.3-0.4-0.7-0.3-0.6-0.5-0.5-0.5-0.4-0.7-0.5-1.4-0.3-0.6-0.3-0.2-0.9-0.5-0.1-0.2-0.1-0.1-0.3 0-0.2 0.1-0.2 0.1-0.1 0.2 0.1 0.2 0.2 0.4 0.7 0.8 0.1 0.2 0.8 1 0.1 0.4 0.1 0.9 0.4 0.7 0.3 0.2 0.1 0.2 0.2 0.3 0 0.4 0.1 0.5-0.1 0.4-0.2 0.2-0.4 0.1-0.2 0-0.3-0.1-0.2-0.1-0.2-0.4-0.2-0.2-0.3-0.2-0.3-0.1-0.3 0-0.2 0-0.4 0.3-0.7 0-0.5 0.1-0.4 0.2-0.5 0.4-1 1.1-0.3 0.6-0.1 1.3-0.1 0.4-0.5 0.4-0.2 0.2 0 0.2-0.2 0.5-0.1 0.2-1.1 1.4-0.2 0.5 0.1 0.2 0.2 0.6 0 0.2-0.2 0.2-0.2 0.1-0.5 0.3-0.3 0.4-0.4 0.8-0.8 1.3 0 0.2 0.2 0.4 0 0.4 0 0.4-0.2 0.3-0.5 0.5-0.2 0.2-0.1 0.3 0.1 0.3 0.1 0 0.4 0.1 0.2 0.2-0.2 0.1-0.5 0.2-0.2 0.1-0.1 0.2 0.1 0.5 0 0.5 0 0.2 0.2 0 0.2 0 0.1 0.1-0.2 0.3 0.2 0.1 0.2 0.1 0.2 0.3 0.2 0.2 0.1 0.5 0 0.3-0.1 0.2-0.3 0.4-0.1 0.2-0.4 0.4-0.1 0.1-0.3 0.8-0.1 0.3-0.1 0.9-0.1 0.5-0.5 0.7 0 0.5 0.2 0.4 0.3 0.6 0.4 0.5 0.2 0.1 0.2 0 0.1 0.3-0.1 0.5-0.1 0.3-0.5 0.5-0.2 0.4 0 0.2 0.2 0.4-0.1 0.5-0.2 0.5-0.2 0.3 0 0.2 0.7-0.3 2.6-1.9 0.5-0.2 0.3 0.1 0.2 0.4-0.2 0.2-0.3 0.2-0.3 0.4-0.7 0.2-0.3 0.2-0.1 0.2 0.8 0.2 0.2 0.2 0 0.9-0.1 0.3-0.3 0.5-0.1 0-0.7 0.1-0.3 0.1 0 0.1 0.4 0.2 0.4 0 0.2 0.2-0.1 0.4-0.3 0.2-0.2 0.2-0.2 0.2 0.3 0.3-0.3 0.1-0.3 0-0.6-0.1-0.3 0.1 0 0.1 0.1 0.1 0.2 0.1 0.5 0.1 1.2 0.3 0.6 0.1 0.2 0 0.2 0.2 0.1 0.3 0 0.3-0.1 0.3-0.2 0.1-0.6 0.1-0.4 0-0.2 0.1-0.3 0.3-0.1 0.1-1.1-0.3 0.1 0.6-0.8-0.2-0.2 0.5 0.1 0.5-0.1 0.3-0.4 0-0.3-0.1-0.5-0.6-0.3-0.2-0.1 0.4-0.2 0.5-0.3 0.4-0.2 0.1-0.2-0.2 0-0.3 0-0.6-0.1-0.2-0.6-0.6-0.4-0.1-0.3 0.4-0.2 0.6 0 0.6-0.2 0.6-0.3 0.3-0.9 0.5-0.6 0.7-2.2 3.1-0.6 0.3-0.1 0.5-0.1 0.5-0.1 0.4-0.3 0.3-0.6 0.3-0.5 0.2-2.3 0.6-0.5 0-0.2-0.1-0.1-0.3 0-0.6 0.3-0.3 0-0.2-0.3-0.2-0.1 0.1-0.1 0.2-0.2 0.3-0.1-0.3 0-0.7-0.1-0.2-0.9-1.1-0.1-0.5 0.3-1.4-0.3 0.1-0.3 0.4-0.2 0.6-0.1 1.1 0.1 0.3 0.7 0.7 0.1 0.3 0 0.1-0.1 0.3-0.3 0.3 0 0.1 0.9 0.3 0.2 0.1 0.1 0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.1 0.2 0.1 1-0.1 0.5-0.5 0.2-0.4 0-2.4 1-0.9 0.5-0.6 0.8-0.1 0.9 0.2 0.4 0.2 0.2 0.2 0.3 0 0.4-0.1 0.5-0.4 0.4-0.5 0.2-1.9 0.6-0.8 0.5-1 0.2-0.5 0.2-1.1 1-0.2 0.3-0.7 0.3-0.2 0.3 0.5 0.3 0.3 0.1 0.6 0 0.5-0.2 0.3-0.4 0.1-0.1 0.5-0.1 0.1 0 0.2 0.1 0.2 0 0.1-0.2 0.5-0.1 0.5 0.1 0.4 0.2 0.1 0.4-0.3 0.6-0.4 0.5 0.8 0.8 0.3 0.5-0.3 1.1 0.2 1.4-0.1 0.5-0.4 0.5-0.2 0.2-1.5 0.4-0.5 0.3-0.5 0.5-0.5 0.4-0.2 0.4 0.2 0 1-0.5 0.7-0.2 0.4 0.4 0.1 0.8 0.4 0.3 0.6-0.1 1.4-0.7 0.3 0 0.3 0 0.1 0.6 0.2 0.3 0.2 0 0.3-0.2 0.3-0.3 0.4-0.1 0.1 0.3 0 0.6-0.7 3z",
    IDN1933:
      "M837.9 221.6l1.1 1.3 0.4 0.2-0.5 0-0.5-0.5-0.6-0.6-0.4-0.2-0.3 0-0.5 0.1-0.2 0-0.4 0-0.2 0-0.2-0.2-0.3-0.2-0.3-0.2-0.5-0.2-0.3-0.1-0.2-0.2-0.2-0.3-0.2-0.2-0.3 0-0.3-0.1-0.2-0.3-0.1-0.3 0-0.3 0.1-0.4 0.3 0 1.5 1.1 0.3 0.1 0 0.1 0.2 0.4 0.4 0.2 0.2 0.2 0.2 0 0.6 0.1 0.6 0.1 0.4 0.2 0.4 0.2z m-19-17.6l0.4 0.7 0.2 0.3 0.1 0.4 0 0.4-0.3 0.3-0.2-0.2-0.3-0.3-0.2-0.4-0.1-0.5-0.1-0.1-0.3 0-0.2-0.1-0.4-0.5 0.2-0.1 0.3-0.2 0.2-0.1 0.3 0.1 0.4 0.3z m-23.5-16.7l-0.5 0-0.1-0.1 0.1-0.1 0.5-0.2 0.6-0.4 0.3-0.1 0.3 0-0.3 0.3-0.4 0.3-0.5 0.3z m42.1-4.7l0.3 0.2 0-0.1 0.2 0 0.5 0.3 0.4 0.2 0 0.5-0.4 0.5-0.5 0-0.1-0.2-0.8-0.3-0.2-0.3-0.1-0.3-0.2-0.3-0.2-0.4 0.4-0.1 0.7 0.3z m22.3 0.2l-0.4 0.1-0.2-0.2-0.1-0.2 0.3-0.3-0.6-0.3 0.1-0.3 0.6-0.6 0.2-0.3 0.1-0.5 0-0.8 0.2 0.1 0.1 0.2 0 0.3 0 0.3 0 1.8 0.1 0.5-0.1 0.1-0.3 0.1z m-4.1-6.5l-0.4 0.1-0.4-0.4-0.2-0.5 0-0.6 0.2-0.6 0.2-0.5 0.3-0.4 0.2-0.2 0.3-0.1 0.2 0.1 0.3 0.1 0.3 0.2 0.1 0.3-0.1 0.3-0.6 1-0.1 0.8-0.3 0.4z m-4-5l-0.4 0.5-0.3-1 0-0.4 0.2-1 1.2-1.9 0.2-0.1 0.3 0.1 0 0.4-0.1 0.7-0.2 0.1-0.3 0.3-0.3 0.3 0.4 0.5-0.3 0.7-0.4 0.8z m-83.3-4.9l-0.1 1 1.2 0.9 0.2 0.3 0.3 0.4 0.2 0.5 0 0.3-0.3 0.1-0.2 0.1-0.1 0.5-0.1 0.1-0.5 0-0.6 0.5-0.3 0.4 2 0.8 0 0.2-0.1 0.1-0.3 0-0.2 0.1-0.2 0.1-0.3 0.4-0.2 0.1-0.2-0.1-0.2-0.1-0.4-0.2 0-0.2 0.1-0.3-0.1-0.4-0.2 0.2-0.4 0.7-0.2 0.1-0.3 0.2-0.3 0.3-0.2 0.3-0.2 0.2-0.7 0.3-1.5 0-0.6 0.2-0.3-0.3-0.3-0.2 0.3-0.1-0.6-0.3-0.4-0.1-1.2 0.1-0.9-0.4-1-0.1-0.2 0-0.2-0.2-0.7-0.2-0.4-0.3-0.3-0.1-0.1-0.1-0.4-0.4-0.2-0.1-0.9-0.4-0.5-0.2-0.2-0.1-0.4-0.5 0.6-0.4 2.8-1 0.1 0 0-0.3 0.4-0.2 0.2 0 0.7-0.1 0.5-0.2 1.1-0.7 0.4-0.1 0.5-0.1 0.9-0.1 0.9-0.2 0.5 0 1.3 0.2 0.3 0 0.3-0.4 0.5-0.3 0.4-0.2 0.7-0.3 0.3-0.1 0.2 0 0.2 0.1 0.1 0.3z m-8.6-11.2l-0.2 0.2-0.5 0.5-0.2-0.3 0-0.2-0.8 0.7-0.5 0.3-0.6 0.1 0.9-0.6 0.1-0.2-0.1-0.1-0.2 0.1-0.4 0.2-0.3 0-1.5 0-0.4-0.2 0.1-0.3 0.4-0.3 2-0.7 0.4 0 0.4 0.3 0.4 0 0.5 0 0.4 0.2 0.1 0.3z m21.2-5.5l0.1 0.2 0.1 0 0.3-0.2 0.4-0.2 1 0 0.2 0 0.4 0.4 0.5 0.7 0 0.2-0.3 0.3-0.1 0.2 0.3 0.5 0 0.2 0 1-0.7 3.2-0.5 1-0.1 0.4-0.1 0.5-0.2 0.4-0.3 0.4-0.5 0.1-0.3-0.1-0.3-0.5-0.3-0.1-0.2 0-0.3 0.2-0.4 0.2-0.3-0.1-0.2-0.1-0.6-0.8-0.1-0.3-0.5-0.3-0.6-0.4-0.3-0.2-0.2-0.3 0-0.2 0-0.4 0-0.1-0.3-0.2-0.1-0.7-0.2-0.2-0.5-0.5-0.2-0.2 0.5-0.4 0-0.5-0.2-0.5-0.3-0.4-0.8-0.8 0-0.3 0.6-0.4 2.4-0.6 0.9-0.5 0.8-0.3 0.5-0.1 0.5 0.1 0.3 0.4 0.2 0.3z m-2.1-3.4l0.3 0 0.4-0.1 0.4 0.1 0.3 0.2 0.4 0.1-0.1 0.1-0.6 0.2-0.3 0.1-0.1 0.2 0.1 0.2 0.3 0 0.1 0.2-0.1 0.1-0.2 0.1-0.2 0.1-0.5 0.2-0.7 0.4-0.4 0.1-0.8 0-3.1 0.7-1.6 0.2-0.8 0.1 0-0.1 0.3-0.2-0.4 0-0.4-0.1-0.2 0.1-0.2 0.3-0.1 0-0.2-0.2-0.4 0-0.8 0.4 0.2-0.4 0.4-0.2 0.3-0.2-0.1-0.4 0.3-0.3 0-0.9 0.3-0.3 0 0.3 0.1 0 0.1-0.3 0.1-0.1 0.3 0 0.3 0.1-0.2 0.5 0.5 0.2 0.7-0.1 0.3-0.6 0.2 0.1 0.2 0.1 0 0.2 0.1 0.2 0.6-0.5 0.4-0.1 0.3 0.2-0.1 0.1 0.3 0.1 0.2-0.1 0.1-0.1 0.2 0 0.3 0 0.6 0.2 0.3 0.1 0.5-0.2 0.5-0.3 0.4-0.1 0.4 0.4 0-0.2-0.1-0.2 0.1-0.3-0.4-0.4 0.1-0.2 0.2 0.1 0.2 0.1 0.4 0z m-3.3-6.6l-0.1 0.3-0.6 0.8-0.3 0.3-1 0.2-0.3 0-0.2-0.1 0.2-0.2 0.3-0.7 0-0.6-0.7 0.3-0.1 0.4-0.1 0.1-0.2 0.1-0.3 0.1-0.1 0.1-0.2 0-1.2 0.2 0.2-0.2 0.4-0.3 0.1-0.2-0.3 0.1-0.3-0.1-0.1-0.3-0.2-0.3 0.3 0.1 0.2 0.2 0.1-0.3 0.3-0.3 0.2-0.2 0.1 0.1 0.1 0.3 0.2 0.2 0.3 0 0.3-0.1 0.2-0.2 0.2-0.3 0.3-0.2 0.5-0.1 0.3-0.3 0.1-0.1 0.2 0 0.3 0.2 0.5 0.2 0.2 0.2 0.2 0.3 0 0.3z m-17.4 0.6l-0.2 0.2-0.3-0.1-0.3-0.3-0.1-0.5 0-0.3 0.1-0.3 0.1-0.1 0.4-0.3 0.4-0.1 0.2 0 0.2 0.1 0.1 0.3 0 0.3-0.3 0.4-0.1 0.4-0.2 0.3z m103.8 51l-4 3.2-0.3 0.2-0.3 0.2-0.2 0.2 0 0.2 0.1 0.9 0 0.3-0.6 0.8-2 1.6-0.6 0.7-0.5 0.8-0.6 1.1-0.3 1-0.1 0.6 0.5 0.4 21.9 7.8-8.5 10.8-0.3 0-0.8 0.1-0.3-0.1-0.4-0.3-1.1-0.8-0.2-0.1 0-0.3-0.1-0.8-0.1-0.1-0.4-0.2-0.5 0-0.5 0-0.2-0.4 0.1-0.4 0.7-0.5 0.2-0.5 0-0.2-0.3-0.2-0.1-0.2-0.1-0.2 0.1-1.2 0.2-0.3 0.4-0.1 0.4-0.1 0.4 0 0.9 0.3 1.8 0 0.4 0.1 0.5 0.4 0.2 0.1 0.2-0.1 0.3-0.2 0.2 0 0.4-0.3 0.1-0.1-0.1-0.2-0.1 0-0.2 0.2-0.2 0.1-0.3-0.1-0.2-0.2 0-0.2-0.1-0.1-0.2 0-0.4 0.2-1-0.1-1.6-0.2-1.7-0.1-0.3-0.1-0.2 0.1-0.1 0.4-0.6 0.3-0.3 0.2-0.2 0.3 0 0.4-0.2 0.3-0.4 0.1-1.1 0.3-0.2 0.1-0.3-0.2-0.6-0.5-0.4-0.3 0.3-0.4-0.3-0.4-0.4-0.3-0.4-0.4-0.3-0.1-0.5-0.1-0.4 0-0.9-0.7 0.4 0.7 0.2 0.5-0.2 0.4-1 0 0 0.2 0.3 0.1 0.3 0.3 0.1 0.2 0.1 0.4-0.3 0.5-0.3 0-0.2-0.2-0.2-0.2-0.2-0.3-0.3-0.4-0.4-0.1-0.4-0.1-0.5-0.1-0.4-0.3-0.2-0.3-0.1-0.2-0.1-0.6-0.1-0.1-0.2 0.1-0.4 0.2-0.2-0.2 0.2-0.4 0.9-0.7 0.2-0.1-0.1-0.2-0.3-0.9-0.3-0.3-0.3-0.3-0.4-0.3-0.1 0.2 0 0.3 0.1 0.3-0.1 0.4 0 0.1-0.3 0.3-0.4 0.1-0.4-0.2-0.4-0.3-0.3-0.1-0.4 0.2-0.5 0.9-0.3 0.2-0.3-0.1-0.3-0.3-1-2.3-0.4-0.6-0.9-1.1-0.2-0.3-0.1-0.5 0-0.4 0-0.2-0.2 0-0.2 0-0.3 0.3-0.2 0.1 0 0.5 0.1 0.5 0.3 0.5 0.2 0.6 0.1 0.2 0 0.2-0.3 0.1-0.1-0.1-0.3-0.7-0.2-0.2-0.2-0.2-0.3-0.2-0.4-0.1-0.3 0.1-0.4 0.2-0.2 0-0.2-0.5 0.2-0.4 0.1-0.2 0-0.2-0.2-0.5-0.2-0.5-0.9-1.3-0.2-0.5 0-0.5 0.3-0.3 0.5-0.2 0.4-0.2 0.1-0.5 0-0.6-0.4-1.6 0-1.5 0.2-0.4 0.4 0.3 0.1-0.1 0-0.2 0-0.5 0.2-0.2 0.3 0 0.4 0.1 0.3-0.3 0.3-0.9 0.4-0.2 0.4-0.2 0.6-0.6 0.3-0.2 0.5 0.3 0.3 0.5 0.3 0.2 0.4-0.2-0.2-0.2-0.1-0.3-0.1-0.2-0.5-0.2-0.2-0.2-0.2-0.2-0.2-0.3 0-0.3 0-0.4 0.3-0.7 0.1-0.3 0-0.2-0.1-0.3-0.3-0.4-0.4 0.1-0.4 0-0.2 0.2 0.3 0.4 0 0.1-0.3 0.5-0.1 0.6-0.2 0.2-1.5 0.7-0.3 0.3-0.6 0.6-0.5 0.7-0.3 1.4 0.2 3.8-0.8 1.2-0.3 0.1-1.2 0.2-0.1 0-0.2-0.2-0.3-0.8-0.1-0.1-0.3-0.1 0 0.2 0.1 0.4 0.1 0.6-0.2 0.1-0.5 0 0 0.2 0.5 0.2 0.8 0.3 0.4 0.3 0.3 0.4 0.2 0.5 0 0.5-0.1 0.4-0.2 0.3-0.4 0.4-0.4 0.3-0.4 0.1-0.3 0.1-2.1 2.2-0.3 0.7 0.3 1 0.6 0.6 0.4 0.4-0.1 0.4-0.2 0.2-0.5 0.2-0.2 0.1-0.2 0.2-0.3 0.6-2.6 2.8-0.4 0.3-0.8 0.3-1.1-0.1-1.8-0.3-0.6 0-0.3 0.2-0.6 0.7-0.4 0.2-0.5 0-1.1-0.5-0.2 0-0.1-0.2-0.2-0.2 0.1-0.5-0.2-0.2-0.2-0.2-0.5-0.3-0.2-0.1-0.2-0.3-0.2-0.5-0.1-0.2-0.4-0.3-0.2-0.2-0.1-0.3 0.1-0.2 0.2 0.1 0.4 0.3 0-0.2 0-0.3-0.5-1.2-0.3-0.3-0.1-0.2 0-0.7 0-0.2-1.2-2.5 0-0.7 0.6-0.5 0.9 0.2 1 0.3 0.8-0.1 0.2-0.2 0-0.2 0-0.4 0-0.3 0.1-0.1 0.4-0.4 0.3-0.2 0.1-0.1-0.1-0.3-0.6-0.4-0.1-0.3-0.3-0.8-0.2 0-0.5-0.1-0.4-0.2-0.2-0.5-0.2-1 0-0.5 0.2-1.4-0.2-0.5-0.4-0.2-0.4 0-0.7 0.1-0.2 0.1-0.1 0.1 0 0.3 0.2 0.5-0.1 0.2-0.4 0.2-0.5 0-0.5-0.3-0.3-0.3-0.1-0.2-0.4-0.7-0.1-0.2-0.5-0.4 0-0.3 0.3-0.1 0.3-0.2-0.1-0.4-0.1-0.1-0.6-0.3-0.1-0.1-0.2-0.1-0.2-0.6-0.2-0.3-0.1-0.2-0.1-0.3-0.4-0.2-0.4-0.4-0.2-0.1-0.3-0.1-0.1-0.1-0.3-0.4-2.4-1.3-0.5-0.2 0-0.4-0.4-0.3-1-0.2-0.2 0-0.8 0-0.2 0-0.7-0.4-0.1 0.4-0.4 0.2-0.3 0-0.3-0.2-0.2 0.1-0.1 0-0.4-0.1 0.1 0.4-0.2 0.1-0.6 0 0-0.2-0.4-0.7-0.4 0.2-0.9-0.3-0.3 0.4-0.1 0 0-0.4 0.1-0.1 0.5-0.3 0.3-0.3 0.1-0.6-0.4 0-0.3-0.1 0-0.2 0.3 0 0.4-0.2 0.3-0.3 0.1-0.3-0.2-0.2-0.4-0.1-1.1 0.1-0.1-0.1 0.3-0.3 0.8-0.3 0.4 0 0.3 0 0.3-0.1 0.2-0.3 0.2 0.3 0.1 0 0.1-0.1-0.1-0.3 0.2-0.1 0.9 0.1 0.6-0.1 0.5-0.2-0.4-0.2-1.1 0.1 0-0.3 0.2-0.2 0.9-0.3 0.4 0 0.5-0.1 2.3 0 0.3 0 0.9 0.4 0.4 0.1 0.7-0.1 0.3 0-0.1 0.3 0.1 0.2 0.1 0.3-0.3 0.2 0.4 0.1 0.5-0.3 0.3-0.1 0-0.1-0.1-0.4 0.3-0.1 0.5-0.1 0.2 0.1 0.2 0.2 0.4 0.1 0.5 0 0.4 0.1 0.8 0.5 1.2 1.3 0.8 0.3 0.3-0.1 0.2 0 0.4-0.3 0.2-0.3 0.2-0.1 1.3-0.9 0.4-0.4 1.1-1.6 0.5-0.4 0.5-1 1.3-1.5 0.2-0.4 0.3-0.3 1.7-0.8 0.6-0.2 0.3 0 0.4-0.3 0.4 0.1 0.2 0.1 0.3-0.1 0.6-0.2 0.4 0 1.2 0.6 0.1 0.3 0 0.7 0.2 0.3 0.2-0.2 0.4 0 0.3 0.2 0.3 0.2 0.2 0.3 0 0.3-0.1 0.6 0 1.8-0.1 0.6 0.4-0.1 0.1-0.3-0.1-1 0.1-0.5 0.1-0.5 0.6-1.4 0.2-0.2 0.2 0.1 0 0.2 0 0.8 0.1 1.1 0 0.5-0.2 0.5 0.3-0.1 0.2-0.5 0-0.9-0.1-0.6 0-0.3 0.1-0.2 0.2-0.1 0.2 0.1 0.1 0.3 0.2 0.3 0.1 0.5 0.2 0.4 0.4-0.1 0-0.4 0.1-0.1 0.1-0.1 0.4 0 0.4-0.1 0.2-0.2 0.3-0.3 0.1 0.2 0.2 0 0.3 0 0.1 0.1 0.6 0.4 0.1 0.2 0.1 0.3 0 1.4-0.2 0.4 0.3 1.1 0.2-0.3 0-0.3 0-0.3 0-0.5 0-0.4 0.3-0.9 0.1-0.4 0-1.2 0.1-0.2 0.4 0.1 0.3 0.3 0.4 0.8 0.4 0.6 0.3 1 0.3 0.3 0.1-0.1 0.1-0.4 0-0.5 0.2-1.3-0.2-0.3-0.3-0.4-0.1-0.2 0.1-0.2 0.1-0.2 0.2-0.3-0.4-0.1-0.8 0-0.3-0.2-0.2-0.4 0.1-0.1 0.4-0.1 0.4 0 0.9-0.2 0.5 0 0.3 0.2 0.1 0.2 0.6 0.5 0.2 0.2 0.1 0-0.2-0.4-0.5-0.5-0.2-0.5 0.4-0.2 1.5 0.1 0.7 0 0.4-0.4-1.2 0-0.6 0-0.5-0.2-0.1-0.3 1.1-0.5 0.4-0.4-0.5 0.1-1 0.2-0.6 0.1 0-0.2 1-0.3 0.5-0.2 0.3-0.4 0.2-0.4 0-0.6 0-0.5-0.2-0.4-0.2 1.1-0.2 0.4-0.5-0.3-0.1 0-0.5 0.4 0 0-0.1 0.1-0.5 0.2-0.3 0.2-0.3-0.1-0.4-0.6-0.2-0.1-0.1-0.1 0.1-0.2 0.3-0.3 0.8-0.2 0.3-0.2 0.3-0.3 0.1-0.3 0.5 0.2 0.3-0.2 0.3-0.3 0.4-0.2-0.1-0.1-0.3 0.1-0.4 0.2-0.3 0-0.1-0.3 0.1-0.1 0.5-0.1 0.2-0.1 0-0.2 0.1-0.3 0.1-0.2 0-0.2-0.4-0.1-0.5 0.1-0.3 0.1-0.6-0.1-0.1 0.1-0.3 0.5-0.1 0.1-0.2 0.1-0.4 0-0.2 0.1-0.5 0.3-0.2 0.1-0.8 0.1-0.4 0.1-0.1 0.4-0.2 0.1-0.4 0.1-0.3 0.2-0.3 0.4-0.1 0.1-0.2-0.1-0.1-0.1-0.2-0.1-0.2 0.1-0.4 0.2 0-0.9 0-0.3-0.4 0.8-0.3 0.4-0.3 0.2-0.3-0.2-0.3-0.6-0.4-0.1 0 0.1 0.3 0.4-0.4 0.1-0.5 0-0.6 0.1-0.9-0.3-0.4-0.1-1 0.1-0.5 0-0.3-0.2-0.2-0.2-0.5 0-0.9 0.3-0.8-0.1-0.5 0.1-0.8 0.4-0.5 0.1-1 0.1-1 0.2-0.8 0.4-0.8 0.2-0.9-0.1-1.4-0.6-0.5-0.1-0.5 0.1-0.5 0.2-1.6 1-0.2 0-0.1-0.1-0.3-0.3-0.2 0-0.5-0.2-0.2-0.5-0.1-0.5-0.2-0.5-0.2-0.2-0.5-0.2-0.5-0.1-0.4 0.2-0.4 0.2-1.4 0.3-1.6 0.8-0.8 0.3-0.9-0.1-0.5-0.3-0.4-0.5-0.3-0.5-0.3-0.5-0.5-0.3-3-1.4-0.6-0.4-0.1-0.6 0.2-0.1 0.6-0.3 0.1-0.2 0.1-0.3 0.3-0.2 0.5-0.2-0.6 0.1-1 0.3-0.5 0.1-0.5-0.8-0.5-0.2-0.2-0.2-0.1-0.3 0.1-0.4 0.1-0.2-0.1-0.3-0.5-0.1-0.2-0.2-0.1-0.3 0.1-0.7 0-0.3-0.1-0.2-0.2-0.5 0.5-0.2 0.3-0.4 0.2-0.4 0.4-0.3 0.3-0.3 0.3-0.2 0.1-0.3-0.1-0.5 0.1-0.2-0.5 0.1-0.7 0.4-0.9 0.2-0.2 0-0.2-0.1-0.2-0.3 0-0.1 0.2-0.3-0.2-0.1-0.2-0.2-0.1-0.1 0.2-0.9 0-0.2 0.3-0.3 0.1-0.1 0.2-0.1 0.6-0.1 0.1-0.1 0.5-0.5 0.1-0.2-0.4 0-1.3 0.6-0.5 0.2 0.2-0.4-0.2-0.1-0.2 0-0.3 0.2-0.8 0.8-0.4 0.2-0.1-0.6 0.2-0.6 0.1-0.7-0.5-0.5 0 0.6-0.1 0.5-0.3 0.4-0.4 0.2-0.6 0-0.4-0.4 0-0.5 0.4-0.3-0.5-0.2-0.4 0.1-0.4 0.2-0.4 0-0.4-0.1-0.3-0.2-0.6-0.5-0.3-0.1-0.4-0.1-0.7 0-0.5-0.2-0.2 0-0.3 0.1-0.2 0.1 0 0.2 0 0.2-0.2 0.1-0.2 0.1-0.5-0.2-0.4-0.6-0.2-0.2-0.2-0.1 0-0.1 0.2-0.2 0.1-0.3-0.2-0.3-0.2-0.2-0.2-0.2-0.7 0.2-0.4-0.1-1-0.5-0.1 0.3 0.4 0.4 0.9 0.7 0.1 0.3-0.3 0.3-0.4 0.3-0.3 0.2-0.7 0.1-0.7 0.4-0.5 0.2-0.1-0.1-0.1-0.5-0.2-0.2-0.4-0.4-0.9-0.3-0.9-0.1-1.8 0.1-0.5 0-0.4-0.2-0.2-0.3-0.1-0.4 0.1-0.2 0.8-0.3 0.3-0.2 0.1-0.2 0.5-1.6 0-0.3 0-0.2 0.2-0.1 0.1-0.1 0.3-0.4 0.4-0.2 1.7-0.3 0.6-0.2 0.2-0.2 0.3-0.9 0.6-0.8 0.1-0.2 0.1-0.3 0.3-0.5 0.1-0.4-0.1-0.8 0-0.3 0.3-0.2-0.1-0.3 0.2-0.9-0.2-0.4 0.1-0.1 0.5-0.2-0.9-0.9-0.3-0.6 0.1-0.6 2-0.6 0.9-0.1 0.3-0.1 0.2-0.4 0.6-0.1 0.3-0.1 0.2-0.1 0.9-0.1 0.3-0.3 0.3 0 0.4 0 0.2 0.1-0.5 0.6-0.1 0.2 0 0.3 0.3-0.1 0.5-0.1 0.4-0.2 0.1-0.2 0.3-0.1 4.1-0.8 1.8-0.6 0.3 0 0.2-0.2 0.5-1 0.9-1 0.6-0.5 0.6-0.3 1.1-0.4 0.3 0 0.1-0.2 0.4-0.9 0.1-0.3 1.2-0.7 0.3-0.1 0.7-0.4 0.8-0.3 0.7-0.3 0.4-0.1 0.6-0.1 1.8-0.5 0.9-0.2 5.2 0.5 0.7-0.2 4.2 2 0.5 0.1 0.2 0 0.5-0.3 0.3 0.1 0.1 0.1 0 0.2 0.1 0.2 0.4 0.2 0.7 0.4 0.3 0.2 0.2 0.1 0.3 0 0.4 0 0.2 0.1 0.2 0.3 0.1 0.1 0.3 0 0.4-0.1 0.2 0.1 3 2.1 0.5 0.5 0.3 0.5 0.2 0.3 0.9 0.6 0.3 0.1 3.6 0.5 0.3 0.1 0.2 0 0.1-0.3 0.3-0.2 0.1 0 0.3 0.1 0.3 0.2 0.5 0.1 2 0.1 0.3-0.1-0.2-0.3 0.2-0.2 0.3-0.1 0.3 0 0.4 0.1 0.1 0.1 0.4 0.4 0.2-0.1 0.3 0 1.2-0.2 0.9 0 0.3 0 0.3-0.2 0.4 0.2 1.3 1.4 0.2 0.1 0.5 0.1 0.3 0.2 0.2 0.1 0.3 0.4 0.2 0.2 0.7 0.2 0.1 0.2 0 0.2-0.4 0.2-1.4 0.1-0.3 0.1-0.1 0.3-0.1 0.6-0.1 0.3-0.3 0.1-0.2 0.1 0.9 1.9 0.3 0.4 0.1 0.2 0 0.5 0.2 0.2 0.1 0.2 0.4 0.7 0.3 0.4 0.4 0.4 0.4 0.3 0.3 0.1 0.2 0.2 1.4 2.6 0.3 0.4-0.9 1.5-0.2 0.4 0 0.9-0.2 1.4-0.1 0.4-0.2 0.3-1.1 1.2-0.4 0.2-0.3 0.3-0.4 0.1-0.2 0.1-0.1 0.2-0.1 0.3 0 0.3 0.3 0.9 0.9 4.3 0.1 1.7 0 0.2 0.2 0.3-0.1 0.2-0.3-0.1-0.1 0.1-0.3 1.4 0 0.5 0.1 0.2 0.4 0.2 0.1 0.2 0.1 0.3-0.1 0.7 0.1 0.4 0.3 0.7 0.1 0.4-0.2 0.5 0 0.2 0.1 0.2 0.3 0.3 0.1 0.2 0 0.4 0.2 0.4 0.2 0.3 0.3 0.3 0.9 0.7 0.3 0.6 0.3 0.3 0.3 0.2 0.3 0.2 0.1 0.1 0.3 0.4 0.1 0.4 0.2 0.8 0.4 0.9-0.1 0.4 0.5 0.4 0.2 0.6 0.2 1.3 0.2 0.3 0.2 0.2 0.3 0.3 0.2 0.6 0.5 1 0 0.2 0.5 0 0.4-0.2 0.6-0.4-0.2-0.3-0.1-0.9-0.1-0.2-0.3-0.4-0.1-0.3 0-0.3 0.1-0.6-0.1-0.3-0.1-0.3-0.2-0.5-0.1-0.2-0.1-0.7 0-0.5 0.1-0.5 0.1-0.4 0.3-0.5 0.3-0.2 0.9-0.4-0.2-0.1-0.2-0.1 0-0.2 0.3-0.2 0.2 0.1 0.4 0.3 0.2 0.1 0.4 0.1 0.4 0.2 0.4 0.3 0.2 0.3 0.2 0.8 0.2 5.7 0 0.3z m-98.1-59.8l-0.5 0.2-0.7-0.3-0.6-0.1 0.3-0.3 0.7-0.6 0.3 0 0.4 0.2 0.2 0.4-0.1 0.5z m14.7-1.8l2.9 0.9 0.3 0.2 0.1 0 0.3-0.2 0.6-0.2 0.5 0 0.3 0.1 0 0.2-0.3 0.3 0.4 0 0.5 0.2 0.6 0 0.3 0.1 0.6 0.2 0.2 0.1 0.4 0.4 0.2 0.1 0.1 0.1 0.1 0.2 0.3 0.2 0.3-0.1 0.2 0.1 0.4 0.1 0.2 0 0.2 0.2 0.5 0.2 0.2 0.2 0.3 0.7-0.3 0.3-0.1 0.2-0.1 0.3 0.2 0.3 0.7 0.5 0.2 0.3-0.2 0.1-0.5 0.1-0.1 0.2-0.1 0.3-0.4 0.3-0.1 0.4-0.4-0.2 0 0.5-0.2 0.4-0.4 0.1-0.4-0.3-0.8-0.7-0.5-0.3-0.2 0.1-0.1-0.1-0.7 0-0.2-0.1-0.1-0.1-0.3 0.1-0.3 0.1-1 0.8-0.1-0.3-0.1-0.1-0.4 0.1-0.1 0.1-0.3 0-0.2 0-0.2-0.2-0.2-0.1-0.4-0.6-0.6-0.4-0.1-0.2 0.1-0.1-0.3-0.5-0.3-0.2-0.3-0.1-0.6 0-0.4-0.1-0.2 0-0.2-0.1-0.1-0.2 0.1-0.5-0.1-0.4-0.2-0.2-1.2-1.1-0.2-0.3-0.1-0.5-0.3 0.1-0.3-0.1 0.2-0.3-0.4 0-0.6 0-0.6 0.1-0.2 0.2 0.5 0.1 0.2 0.2 0.2 0.2-0.4 0-0.3 0.2 0.1 0.4 0.8 0.3 0.4 0.3 0.7 1 0.5 0.9 0.1 0.4 0.2 0.2 0.9 0.5 0.4 0.2 0.1-0.3 0.1-0.2 0.1-0.1 1 0.1 0.3 0 0.2 0.2 0 0.2 0.2 0.1 0.3 0.2 0.2 0.2 0.3 0.4 0.1 0.3-0.1 0.1-0.2 0.1-0.2 0.2-0.1 0.4-0.3 0.2-0.9 0.3-1.8 0.4-0.5 0-0.5-0.1-0.4-0.3-0.2-0.4-0.6-1.5 0.3-0.2 0.1-0.3-0.1-0.3-0.1-0.3-1.7 0.5-0.7 0.5-0.3 0.8 0.2 0 0.2-0.1-0.1 0.3-0.4 1-0.1 0.1-0.2 0.1 0-0.1 0-0.3 0.3-0.7-0.4-0.1 0-0.3 0.1-0.4 0-0.5-0.2-0.2-0.3-0.3-0.1-0.3 0-0.2 0.2-0.3-0.1-0.2-0.3-0.2-0.5 0.1-0.7 0.4-0.2 0.3-0.2-0.1-0.1-0.2-0.1 0-0.4 0-0.3-0.2-0.3 0.3-0.1 0-0.2-0.3-0.6 0-0.5-0.1-0.1 0-0.1-0.1-0.1-0.4-0.2-0.1-0.6-0.1-0.7-0.3-0.3-0.2 0.5-0.1 0.2 0 0.4 0.2 0.2 0 0.6 0 0.7-0.1 0.4 0 0.3 0.1 0.3 0.2 0.3 0 0.3-0.2 0.3-0.2 0.1-0.3-0.3 0-0.4 0-0.3-0.2 0.4-0.1 0.2-0.3 0-0.3-0.1-0.3-0.2 0.4-0.3 0.2-0.2 0-0.1-0.5-0.1 0-0.1 0.2-0.1 0.1-0.2 0-0.2-0.1 0.1 0.3 0.1 0.3 0.1 0.2-0.2 0.2-0.2 0-0.4-0.1-0.3-0.2-0.1-0.2-0.1-0.3-0.3-0.4 0-0.4 0-0.2 0.3-0.1 0.3 0 0.2 0.1 0.3-0.2 0.2-0.4 0.1 0.3 0 0.4 0.1 0.2 0.2 0.2 0.3-0.2 0-0.2-0.1-0.4-0.2-0.3 0.5-0.1 0.3 0.2 0.3 0.3 0.4 0.2-0.1-0.4 0.1-0.2 0.2 0.3 0.9-0.4 0.5-0.2 0.2-0.4 0.2 0.1 0.2 0.1 0.4 0.4 0.1-0.3 0.2 0.3 0-0.2 0.3-0.4 0.3 0.3 0.2-0.3 0.6 0.1 0.4-0.1 0.4 0 0.7-0.2 0.5-0.1 0.1 0.4 0.3-0.1 0.7 0.1 0.4-0.1-0.2-0.2-0.2-0.1-0.2 0-0.2 0 0.3-0.3 0.4-0.2 0.4-0.1 0.6 0z m76.3-16.1l-0.4 0.1-0.4 0-0.1-0.2 0.2-0.3 0.4-0.2 0.3 0 0.1 0.3-0.1 0.3z m-66.8-6.9l-0.2 0.2 0-0.2 0-0.3 0.2-0.2 0.2 0.1-0.1 0.3-0.1 0.1z",
    IDN1931:
      "M449.7 160.6l0.2-1 0-0.3-0.2-0.1-0.3 0-0.5 0.1-1.9 0.8-1 0.2-0.6 0.1-0.1 0-1.1 0.4-0.2 0.2-0.1 0.2-0.2 0.4-1.4 6.4-0.1 0.7 0.2 0.6 0.2 0.6 0.2 0.5-0.1 0.6-0.3 0.7-0.4 0.5-0.3 0.4 0 0.3 0.4 1-3.1 2.9-0.7 0.5-0.5 0.3-2.3 0.6-2.6 0.6-0.5 0.2-0.1 0.1 0 1 0.1 0.3 0.2 0.3 0.1 0.2 0.2 0.3 0 0.2 0.1 0.8-0.1 0.2-0.1 0.2-0.3 0.7-0.3 0.8-0.1 0.1-1 1.1-0.3 0.4-0.1 0.4-0.2 0.5-0.1 0.5 0 0.4-0.1 0.5-0.2 0.4-0.4 0.4-0.3 0.2-1.5 0.6-0.2 0.1-0.1 0.1 0 0.3-0.1 0.3-0.3 0.3-0.2 0.2-0.5 0.2-1.5 0.3-0.3 0.1-0.5 0.7-0.1 0.3-0.1 0.3-0.5 2.1-3.5 9.3-0.5-0.2-0.3-0.2-0.2-0.4 0-0.4 0.2-0.3 0.4-0.2 0.2-0.2 0.5-1.4 0.6-0.7 0.2-0.3 0.1-0.5-0.9 0.8-0.8 1.3-0.9 1.1-1.3 0.5-0.7-0.1-0.6-0.2-0.4-0.4-0.1-0.8 0.4-2.1-0.1-0.6-0.1 0.2-0.1 0.2-0.2 1 0 0.5-0.1 0.1-0.3 0.2-0.8 1.4-1.4 0.7-0.7 0.2-1.3 0.8-1.6 0.5-2.2 0.4-1.7-0.4-0.2-1.6 0.3-0.9 0.1-0.9 0-0.9-0.5-1.6-0.2-0.2-0.4-0.1-1.8 0-0.5 0.1-0.4 0.2-0.3 0.3-0.2 0.5-0.1 0.4-0.4 0.2-1.2 0.1-0.3-0.1-0.1-0.2-0.1-0.5-0.1-0.3-0.2-0.4-0.3-0.3-0.3-0.2 0.9 1.9 0.2 0.5-1.2-1.2-0.3-0.3-0.6-0.3-0.3-0.3-0.3-0.2-0.1-0.3-0.2-0.4-0.1-0.6-0.2-0.3-0.4-0.3-0.5-0.3-0.7-0.2-0.6-0.3-1.4-2.6 0 1.5-0.1 0.4-0.1 0.2-0.2 0.4-0.2 0.2-0.4 0-0.6 0.5-0.3 0.4-0.1 0.4 0.1 0.4 0.5 0.4 0.2 0.1 0.2 0.1 0.5 0 0.2 0.1 0 0.1-7.6 4.9-0.7 0.7-0.4 0.1-0.8-0.2-0.2 0.1 0 0.3-0.2 0.1-0.2 0.1-0.2 0.1-0.5-0.2-2.9-2.1-0.9-0.4-1-0.2-2.2 0.4-1.8 1.1-3.2 3.1-0.9 0.8-0.5 0.2-0.4 0-0.4-0.2-1-0.3-0.3-0.3 0-0.5 0.4-0.9 0.2-0.5 0.1-1.3 0-0.5-0.6-3.8 0.1-1 0.3-1.8-0.2-0.9-1.4-2.4-0.1-0.9 0-0.9-0.1-0.1-0.3-0.2-0.1-0.2 0.1-0.4 0.4-0.6 0-0.4-0.3 0.2-0.4 0.3-0.2 0.3-0.2 0.3 0.2 1 0 0.3-0.1 0.2-0.4 0.4-0.4 0.4 0 0.2 0.1 0.2 0.2 0.1 0.2 0.2 0.2 0.1 0 0.2 0 0.1-0.2 0-0.1 0-0.9 0.4-1.4 1-0.3 0.1-0.4 0.1-0.4-0.1-0.2-0.4-0.1-0.4-0.1-0.3-0.6-0.5-0.9-0.2-1.8-0.2-0.8 0.1-0.7 0.2-5.1 2.7-1.6 0.6-0.9 0.1-0.8-0.2-1.8-1-0.4-0.1-0.8 0-0.3-0.1 0-0.3 0.2-0.4 0.2-0.2 0.7-0.6 0.7-0.3 0.7-0.2 1.9-0.8 0.2 0-0.2-0.3 0.9-0.3 0.1-0.1 0.2-0.2 0.3-0.5 0.3-0.9 0.3-0.4 0.3-0.2 1.2-0.5 0.3-0.2 0.2-0.2 0.2-0.3 0.1-0.3 0-0.3 0-0.3-0.2-0.5-0.2-0.2-0.1-0.3-0.1-0.3-0.1-0.7 0-2 0.1-0.5 0.2-0.8-0.1-0.4-2.7-6.1-0.2-0.6-0.2-0.6 0-1.5 0-0.4 0.7-2.5 0-0.8 0-0.4 0-0.4 0.2-0.8 0-0.3-0.2-0.3-0.3-0.3 0-0.1 0.2-0.6 0-0.3-0.1-0.2-0.1-0.2-0.2 0-0.3 0-0.2 0.2-0.4 0.1-0.3 0-0.2-0.2-0.2-0.3-0.2-0.3 0-0.2 0-0.2 0.3-0.4 0.5-0.6 0.4-0.3 0.8-0.5 0.5-0.2 0.4 0 0.2 0.1 0.5 0 0.2 0.1 0.3 0.2 0.2 0 0.3-0.2 0.8-0.7 0.4-0.3 0.7-0.9 0.5-0.4 0.6-0.4 0.5-0.2 0.7-0.5 0.5-0.9 0.3-0.4 0.2-0.1 0.4-0.4 0.6-0.4 1.2-0.6 0.4-0.4 1.1-0.4 0.8-0.4 0.2-0.3 0.2-0.3 0-0.4-0.2-0.6 0-0.3 0.1-0.3 0.1-0.2 0.7-0.9 0.5-0.4 2.1-1.5 1.2-0.6 0.3-0.1 0.9-0.5 2.4-1.5 1.9-0.6 0.6-0.5 0.1-0.5 0.1-0.2 0.2-0.1 0.3 0 2.6 0 1.1 0.2 0.6 0 0.3 0.1 0.5 0.1 0.3 0 0.3 0 2-0.8 0.5-0.3 0.3-0.1 0.3 0 0.6 0.2 0.3 0 0.3-0.1 3.8-1.5 0.8-0.5 2.2-0.8 0.7-0.3 0.6-0.4 1.1-0.5 0.5-0.1 0.5 0.1 0.2 0.1 0.6-0.1 0.1-0.2 0.3-0.4 0.1-0.1 0.3-0.1 0.5-0.2 0.2-0.1 0.1 0 0.2 0.1 0.2 0.2 0.4 0.8 0.4 0.4 0.3 0.2 0.2 0.1 0.4 0 0.2-0.2 0.4-1.2 0.4-0.9 0-0.2 0-0.3-0.3-0.5-0.1-0.2-0.2-0.2-0.4-0.1-0.1-0.2 0-0.2 0-0.3 0-0.1 0.4-0.7 1.2-1.2 0.3-0.2 0.4-0.1 0.3-0.1 0.3-0.2 0.2-0.3 0.2-0.1 0.3-0.1 0.2-0.1 0.1-0.2 0-0.5 0.4-0.8 0.6-1.1 0.1-0.1 0-0.2-0.1-0.4-0.4-1.5 0-0.6-0.1-0.3-0.5-1.1-0.3-0.4-0.8-0.6-0.3-0.2-0.3-0.8-0.6-0.8 0.7-0.3 0.9-0.2 0.4-0.2 0.4 0 0.2 0 0.7 0.3 0.3 0 0.4 0 0.5 0 0.2 0 0.3-0.2 0.7-0.6 0.3-0.1 0.2-0.1 0.3-0.1 0.1-0.2 0.2-0.5-0.1-0.7 0.1-0.4 0.2-0.3 0.3-0.4 0.3-0.3 0.3-0.4 0.3-0.8 0.2-0.2 0.5-0.3 0.4-0.5 0.5-0.3 0.6-0.2 1.1-0.2 0.3 0 0.9-0.4 0.4-0.1 0.9-0.1 0.3-0.1 0.2-0.2 0.3-0.3 0.2-0.2 0.4-0.2 0.4 0 0.9 0 0.9-0.1 1 0.1 0.4 0.1 0.3 0.1 0.5 0.4 0.3 0.2 0.4 0.1 1.6 0.2 0.4 0.2 0.4 0 6.2-0.7 0.4-0.3 0.5-0.4 0.6-0.4 1.1-0.4 1-0.2 0.6-0.1 0.2-0.2 0.1-0.3 0.1-0.1 0.3-0.1 1.2-0.1 0.4 0.1 0.3 0 0.1 0.2 0.2 0.3 0.1 0.2 0.5 0.2 0.2 0.2 0.1 0.2 0.2 0.4 0.2 0.3 0.1 0.2 0.1 0.9 0.1 0.3 0.2 0.5 0.1 0.2-0.1 0.3-0.1 0.3-0.3 0.2-0.5 0.5-0.2 0.2-1.2 2.5-0.3 0.8-0.1 0.3 0 0.6 0.1 0.3 0.1 0.3 0.2 0.5 0.1 0.2 0 0.3 0 0.6 0 0.2 0.1 0.2 0.5 0.8 0.2 0.4 0.1 0.3 0.1 0.3 0 0.3 0 0.2-0.7 1.7-0.4 1.1 0 0.4 0 0.2 0 0.2 0.2 0.3 0 0.2 0 0.3-0.1 0.3 0.1 0.2 0.2 0.3 0.3 0 0.8-0.8 0.2-0.1 0.6-0.3 0.2-0.1 0.3-0.4 0.2-0.3 1.7-2 0.6-0.4 0.3 0 0.5-0.1 0.3-0.1 0.2 0 0.7 0.2 0.7 0.1 0.2 0.2 0 0.2-0.1 0.2-0.1 0.4-0.3 1.5-0.1 0.5-0.6 1-0.2 0.4-0.1 0.8-0.1 1.6 0 0.4 0.3 0.8 0.1 0.4 0.1 1.1 0.1 0.4 0.2 0.8 0.4 0.8 1.1 1.5 0.2 0.4 0 0.4 0.1 0.8 0.5 2.6 0.1 0.3 0.7 0.9 0.1 0.3 0.1 0.4-0.1 0.2 0.1 0.3 0.1 0.3 1.1 0.9 0.2 0.1 0.3 0.1 0.7 0.2 0.7 0.3 0.5 0.1 0.3 0.2 0.3 0.2 0.4 0.4 0.1 0.3 0.2 0.4 0.1 0.2 0.5 0.4 0.2 0.3 0.3 0.4 0.2 0 0.2 0 0.3-0.2 0.3-0.1 0.4-0.1 0.3 2.6-0.1 0.3-0.1 1.1-0.1 0.5-1.1 2-0.4 0.6-0.3 0.3-0.3 0.1-0.3-0.1-0.3 0z",
    IDN1930:
      "M207.7 167.3l-0.4 0.1-0.4 0-0.2-0.2-0.7-0.4-0.6-0.4-0.3-0.1-0.3 0-0.4 0.3-0.1 0.2-0.6 1.5-0.2 0.2-0.4 0.3-1.8 0.5-1.4 0.2-1-0.1-3.7-0.9-0.8 0-0.7 0.1-7.7 3.8-0.3 0.2 0.2 0.4-0.2 2.7 0.1 0.6 0.2 0.5 0.1 0.2 0.3 0.3 0 0.2-0.1 0.1-0.2 0.2-0.3 0.1-0.4 0.1-0.8 0.1-0.2 0.1-0.1 0.2-0.1 0.3 0 0.4 0.2 1 0.1 0.6-0.1 0.3 0 0.2 0 0.3-0.1 0.3-0.1 0-0.3 0-0.4-0.2-2.5-2.4-0.2-0.3-0.1-0.5-0.4-0.8-0.3-0.3-0.2-0.2-0.3-0.1-0.4 0.1-0.5 0.9-0.3 0.5-0.2 0.4 0 0.4 0.2 0.2 0.2 0.2 0.2 0.3 0.1 0.3 0.1 0.3 0 0.3-0.2 0.2-0.2 0.2-1 0.3-0.4 0.1-0.6-0.2-1.1-0.4-0.6 0.3-0.7-0.1-0.7-0.2-0.7-0.1-0.6-0.2-0.4-0.1-0.3 0-0.2 0.3-0.2 0.3-0.1 0.4 0.1 0.3 0.1 0.2 0.2 0.2 0.2 0.2 0 0.2 0 0.3-1.6 2.3-0.3 0.3-0.3 0.3-0.4 0.2-0.3 0.1-0.2-0.2-0.1 0-0.4 0.4-0.4 0.3-1 0.6-0.4 0.3-0.1 0.3-0.1 0.3-0.2 0.2-0.4 0.1-1.4 0.1-0.3 0.1-0.3 0.1-0.4 0-0.5 0-0.6-0.2-0.5-0.2-1-0.7-1.1-0.2-0.8-0.6-0.6 0.9-1.2 0.8-0.4 0.1-0.9 0.2-0.3 0.2-0.8 0.9-0.2-0.2-0.6-0.1-0.3-0.1-0.5-0.4-0.7-0.3-0.3 0-0.2 0.1-0.4 0.1-0.2 0.1-0.3-0.2-0.4-0.5-0.3-0.2-0.5-0.2-0.3-0.1-1.2-0.6-0.8-0.6-0.7-0.8-0.5-0.7-0.8-0.7-0.1-0.6-0.2-0.2-0.3-0.3-0.7-0.2-0.3-0.2-0.2-0.4-0.5-2.1-0.4-0.6-0.1-0.4-0.1-0.2-0.2-0.1-0.4-0.2-0.5-0.5-0.2-0.2-0.3-0.3-0.4 0-1.8 1.3-0.8-2.5-0.9-2.2-0.3-0.5-0.2-0.3-0.7-0.5-0.3-0.4-0.4-0.6-0.6-1.2-0.3-1.2-0.2-1.2-0.1-2.3 0.8 0.2 0.4-0.1 0.3 0.2 0.4 0.2 0.5 0.1 3.8-0.6 0.3 0.2 0.7 0.1 0.3-0.1 0.3-0.2 0.6-0.8 0.4-0.6 0.8-0.7 1.8-1.4 0.5-0.5 0.3-0.4 0.2-0.7 0-0.2-0.2-0.3-0.1-0.2 0.3-0.6 0-0.3-0.4-1.3 0.1-0.6 0.1-0.4 0.2-0.2 0.2-0.1 0.4 0 0.7-0.2 0.6-0.2 0.4-0.4 0.6-0.6 0.3-0.5 0.2-0.5 0-0.2 0-0.2-0.2 0-0.2 0.1-0.2 0-0.4-0.2-0.3-0.2 0.1-0.5 0-0.5-0.1-0.5-0.3-0.5 2.4-0.9 0.2-0.1 0.4-0.3 0.3-0.7 0.3-0.5 0.4-0.4 0.5-0.3 0.4-0.2 0.4-0.1 1.2 0.1 1.1-0.2 0.4-0.1 0.6-0.2 0.5-0.1 0.3 0 0.9 0.3 0.2 0.1 0.2 0.1 0.1 0.3 0.2 0.5 0.1 0.2 1.1 1 0.2 0.3 0.1 0.2 0.1 0.2 0.1 0.1 0.6 0.2 0.2 0.1 0.4 0.3 0.2 0.4 0.2 0.1 0.5 0.2 2 0.4 0.4-0.1 0.3-0.4 0.4-1.1 0.2-0.3 0.6-0.4 0.3-0.3 0.2-0.2 0.3-0.7 0.3-0.5 0.2-0.1 0.6-0.5 0.2-0.1 0.8-1 0.4-0.3 0.2-0.2 0.3-0.2 2.4-0.6 0.9-0.1 3.1 0.3 7.1-0.5 0.2-0.1 0.3 0.1 0.3 0.2 0.1 0.2-0.1 0.3-0.4 0.4-0.1 0.3 1-0.2 0.4 0 0.5 0.2 0.2 0.3 0.3 0.7 0.3 0.3 0.1 0 0.3 0 0.1 0.2 0.4 0.4 0.1 0.2 0.5 0.2 0.2 0.4 0.1 0.1 0.9 0.1 0.3 0.3 0.5 0.5 0.3 0.1 0.5 0.1 0.4 0.1 0.3 0.2 0.2 0.4 0.3 0.8 0.2 0.2 0.2-0.9 0.4-0.4 0.5-0.3 0.5-0.2 0.9-0.2 0.3-0.1 1.4 0.7 0.4 0.3 0.4 0.1 1.1 0.1 0.4 0 1.3 0.8 0.5 0.1 0.9-0.4 0.2-0.1 1.3-0.3 1.2-0.1 0.1 0.2 0.6 1.9-0.2 1.4 0 0.8 0.3 0.7 0 0.2 0.7 0.7 0.1 0.3 0.1 1.4 0 3.3 0.2 0.9 0.3 0.9 0.9 1.6 0.3 1z",
    IDN1837:
      "M610.8 109.4l0 0.2 0.5 0.9 0.6 0.3 0.2 0.1 1 0.5 0.3 0.2 0.1 0.2 0 0.2 0.1 0.6 0.4 1.1 0.2 0.2 0.4 0.2 0.6 0.4 0.5 0.7 2.5 1.1 0.5 0.6 0.4 0.6 0.3 1.4 0.1 0.7 0 0.7-0.1 0.7-0.5 1.3-0.3 0.5-0.3 0.1-0.8 0.2-0.4 0-2.1-0.2-0.7-0.3-0.3 0-0.1 0-0.3-0.4-0.3-0.3-0.5-0.8-0.1-0.1-0.4 0.1-0.1-0.2-0.7-1-0.9-1-0.3-0.5-0.2 0-0.3 0.3-0.4 0.2-1.2 0.2-3.2-0.2-2 0.2-1 0-0.2-0.1-0.5-0.6-0.2-0.2 0.1 0.7-0.1 0.3-0.3 0.1-0.3 0-0.3-0.1-0.3-0.2-0.3-0.1-0.4-0.1-5.2 0-0.3 0.1-0.4 0.2-0.2 0-1.6 0-0.3 0-0.2 0.1-0.3 0.2-0.1 0-0.5 0-0.9-0.2-1.4-0.1-0.4 0.1-0.4 0.5-0.4 0.2-2 0.2-1.1 0.1-0.9 0.1-0.3 0-0.1-0.1-1.1-1.5-0.3-0.3-0.6-0.2-0.3 0-0.7 0.2-0.1 0-0.3-0.1-0.3-0.5-0.2-0.2-0.1 0.3-0.2 0.1-0.3 0.1-0.4 0-0.2-0.1-0.2-0.1-0.2 0-0.2 0.3-0.1 0.3 0 0.3-0.1 0.2-0.3 0.1-0.4 0-0.3 0.1-0.2 0.1-0.2 0.1-0.4-0.3-0.3 0-0.3 0.1-0.8 0.1-0.4 0.2-0.2 0.1 0.2-0.5 0-0.3-0.1-1.2 0-0.3-0.1-0.2-0.2-0.1-0.3 0.1-0.3 0-0.4-0.1-0.5-0.1-0.2-0.2-0.4-0.3-0.3-0.4-1.2-1.3 1.2-0.5 0.5-0.3 0.1-0.3 0.2-0.6 0.2-0.3 0.4-0.5 0.3-0.3 0.2-0.2 0.9-0.6 0.3-0.1 0.5-0.1 0.3 0 0.6 0 0.9 0.2 0.5 0.1 0.2 0.1 0.3-0.1 0.9-0.3 1.3-0.4 0.4-0.1 0.6-0.3 1.4-0.5 2.6-1.1 0.3-0.1 0.4 0 0.4 0.1 2.2 0.8 1.1-0.2 2.1-0.9 1.2-0.8 0-0.1 0.6 0.3 0.3 0.1 0.2-0.1 0.4-0.1 0.3 0 0.3 0.1 0.1 0.1 0.2-0.3 0.2 0 0.3 0 1 0.3 0.4-0.1 1-0.2 0.3 0 0.7 0.6 0.8 0.3 0.9 0.2 1.3 0.1 0.5 0.2 0.3 0.2 0.2 0.4 0.2 0.2 0.5 0.3 0.8 0.3 0.4 0.4 0.3 0 0.2 0.1 0 0.3 0.6 0.2 0.5 0.5 0.4 0.1 0.9-0.6 0.3-0.1 0.3-0.2 0.4-1 0.4-0.3 0.1-0.2 0-0.3 0-0.3 0.2-0.1 0.5 0 0.3 0.1 1.4 0.5 0.6 0.1z",
    IDN1230:
      "M207.7 167.3l0.1 0.6 0 0.2-0.1 0.2-0.3 0.6-0.1 0.3-0.5 0.8-0.2 0.5 0 0.3 0.1 0.3 0.2 0.6 0.4-0.4 0.3-1.1 0.2-0.3 0.6 0.1 0.5 0.4 0.4 0.5 0.4 0.2 0.3 0.2-0.2 0.6-0.3 0.7-0.3 0.3-0.3 0.4 0 0.2 0.4 0 0.3-0.2 0.5-0.6 0.2-0.3 0.2 0.4 0 0.5 0 0.4 0.4 0.2 0.1 0.1 0.2 0 0.1-0.2 0.3-0.1 0.4-0.4 0.9-0.3 0.9 0.2 0.8 0.7 0.5 0.9 0.2 1-0.1 0.8-0.4 0.8-0.7 1-1.5 1.8-0.3 0.3-0.4 0-0.9 0.1-0.3 0.1-0.3 0.3-0.7 0.5-0.4 0.3 1.5-0.7 0.7 0 0.5 0.8 0 1-0.1 0.5-0.3 0.8 0 1-0.1 0.3-0.2 0.2-0.4 0.2-0.4 0.1-0.4 0.1-0.2 0.1-0.7 0.5-0.7 0.6-0.5 0.6-0.2 0.8 0 0.9-0.1 0 0 0.3 0.3-0.3 0.4-0.5 0.2-0.5 0.1-0.5 0.1-0.3 0.4-0.3 0.7-0.5 1.5-0.7 0.6-0.4 0.4-0.7 0.4-1.4 0.1-0.4-0.1-1 0.1-0.3 0.3-0.5 0.7-0.6 0.3-0.4 0.3-1 0.4-0.3 0.4-0.1 0.4 0.2 0.2 0.4 0 0.6 0 0.5 0.4 0.3 0-0.5 0.3-0.3 0.3-0.2 0.5-0.1 0.5 0.2 0.3 0.2 0.3 0.3 0.3 0.2 0.2 0 0.5-0.1 0.2 0 0.3 0.1 0.3 0.3 0.1 0 0.5-0.1 1.3-0.6 0.5-0.1 0.5 0 0.5 0.1 0.8 0.5 0.5 0.1 1.1 0 1.9 0.3 0.9 0 0.6 0.1 0.3 0.2 0 0.1-0.3 0 0.3 0.3 0.3-0.1 0.3-0.3 0.3-0.2 0.4 0.1 0.3 0.1 0.2 0.3 0 0.6-0.1 0.5-0.4 0.9-0.1 0.4 0.1 0.6 0 0.4 0.2 0.5 0.2 0.4 0.2 0.4 0.4 0.4 0.4 0.3 0.6 0.1 0.4 0.3 0.3 0 0.5 0 0.2 0 0.2 0.2 0.4 0.7-0.1 3 0.4 0.8 0.7 0.7 0.8 0.4 1 0.2 0.2-0.1 0.4-0.1 0.3 0 0.2 0.1 0.4 0.2 0.2 0 0.3 0.1 0.3 0.3 0.3 0.7 0.2 0.7 0 1.8 0.1 0.9 0.1 0.2 0.3 0.5 0.1 0.2 0 0.3-0.1 0.4-0.1 0.3-0.2 0.2-1.4 0.7-0.8 0.6-0.7 0.8-0.6 1-0.4 0.9-1.4 4.8 0.2 0.9 0.5 0.7 1.8 1.3 0.4 0.6 0 0.8-0.3 0.9-1.5 2-0.2 0.8-0.1 0.7-0.5 1.5-0.1 0.4-0.8-0.5-0.5 0.1-0.4 0.2-0.9 0-0.1-0.2-0.2-0.4-0.2-0.2-0.2-0.2-0.4 0-0.2-0.1 0-0.6-0.2-0.2-0.1-0.1-0.2 0-0.4 0-0.1-0.1 0-0.1 0.2-0.4 0-0.2 0-0.2-0.1-0.2-0.2-0.4-0.1-0.3-0.2-0.3-0.2-0.2-0.2-0.3-0.3-0.4-0.2-0.1-0.2 0-0.2-0.2-0.1-0.4-0.1-0.3-0.2-0.2-0.7-0.3-0.7-0.1-0.2-0.2-0.4-0.6-0.2-0.2-0.3 0-0.2 0-0.3 0.1-0.2 0-0.2-0.1-0.2-0.2-0.2-0.5-0.2-0.2-0.1 0-0.1 0-0.1 0.2-0.1 0.4 0 0.2-0.1 0.3-0.2 0.1-0.1 0.2 0 0.4 0 0.2-0.3 0.7-0.1 0.2-0.3 0.3-0.2 0.1-0.3 0.1-0.3 0-0.3-0.1-0.2 0-0.2 0.1-0.3 0.4-0.2 0.1-0.4 0.2-0.1 0.1-0.2 0.2 0 0.7-0.1 0.2-0.3 0.5-0.1 0.1 0.1 0.3 0.2 0.2 0 0.1-0.1 0.2-0.7 0.3-0.2 0.2-0.2 0.3-0.1 0.3-0.1 0.3-0.2 0.2-0.3 0.3-0.3 0.2-0.2 0.2-0.7 0.4-1.1 0.2-0.9 0.3-0.9 0.3-3.6 1.6-1.6 0.4-1.1 0-0.5 0.1-1.4 0.6-0.5 0.4-0.7 0.6-0.2 0.3-2 0.7-0.2 0.6-0.1 0.6 0.1 0.7 0.2 1.5 0.1 0.4-0.1 0.3-0.1 0.4-0.3 0.3-0.4 0.2 0 0.1-0.1 0.4 0 0.2 0 0.2 0.1 0.2 0.3 0.1 0 0.1 0.1 0.6 0.1 0.4 0.4 0.3 0.1 0.2 0.4 0.4 0.1 0.1-0.1 0.5-0.3 0.6-0.5 0.5-0.4 0.1-0.7-0.1-0.8 0-1.2 0.8-1.6 0.4-0.6 0-0.7-0.1-0.8 0-1.2-0.2-0.9 0-0.3-0.1-0.2-0.1-0.1-0.3-0.1-0.4 0-0.4 0-0.3 0-0.1-0.2-0.2-0.2-0.1-0.3-0.1-1.3-0.7-0.1-0.4-0.2-0.2-0.4-0.3-0.2-0.1-0.1-0.3 0-0.3-0.5-2-0.1-0.3-0.2-0.2-0.3-0.7-0.6-0.8-0.2-0.4-0.2-0.5-0.1-1.9-0.1-0.4-0.2-0.2-0.2-0.2-0.3 0-0.9-0.1-0.4 0-0.6-0.2-0.9-0.7-1.3-0.1-0.7-0.2-1-0.6-0.9-0.2-0.6-0.3-0.4-0.2-0.2 0-0.4 0-0.2-0.5-0.1-1.7-0.2-0.5-0.6-1.3-0.1-0.7-0.3-0.3-0.1-0.1-0.3-0.2-0.4 0-0.2 0-0.6 0.1-0.4 0-0.3 0-0.5 0-0.4 0.2-1-0.7-0.2-0.1-0.4-0.1-0.7 0.2-0.4 0-0.2 0-1-0.4-0.4-0.2-0.3-0.3-0.5-0.8-0.3-0.3-0.8-0.5-0.2-0.3-0.3-0.3-0.2-0.3-0.6-0.4-0.1-0.3 1.2-0.3 0.3-0.2 2.7-2.4 0.4-0.3 0.5-0.2 0.4-0.3 0.3-0.3 0-0.3-0.1-0.3-0.2-0.3-0.1-0.2 0.1-0.1 0.2 0 0.5 0.2 0.3 0.1 0.6-0.1 0.2-0.1 0.6 0.1 0.3-0.4 0.2-1.7 0-0.6-0.1-0.6-0.2-0.4-0.1-0.1-0.2-0.2-0.3-0.1-0.6-0.1-0.4-0.1-1.3-0.2-0.3-0.1-1.2-0.8-0.2-0.3-0.2-0.7-0.2-0.2-0.2 0-0.4 0.1-0.4 0.3-0.9 0.7-0.8 0.7-0.2 0.1-0.2 0.1-0.4-0.1-0.7-0.4-0.1 0-0.3-0.1-0.2-0.2-0.3-0.3-0.3-0.4-0.3-0.2-0.2-0.3-0.2-0.3-0.3-0.1-0.2-0.1-0.2-0.2 0-0.1 0-0.2 0.3-0.3 0-0.2 0.1-0.7 0.2-0.4 0-0.2 0-0.2-0.1-0.2-0.2-0.2-0.4-0.3-0.5-0.5-1.4-0.5-0.2 0-0.2 0-0.5 0.4-0.2 0-0.3-0.1-0.5-0.2-0.5 0-0.1-0.1-0.3-0.1-0.6-0.8-0.1-0.3 0.2 0 0.4-0.1 0.1-0.1-0.1-0.5-0.1-0.3-0.1-0.2-0.4-0.3-1-0.8-0.3-0.4-0.3-0.7-0.2-0.3-0.2-0.2-0.6-0.4-0.4-0.6 0.8-0.9 0.3-0.2 0.9-0.2 0.4-0.1 1.2-0.8 0.6-0.9 0.8 0.6 1.1 0.2 1 0.7 0.5 0.2 0.6 0.2 0.5 0 0.4 0 0.3-0.1 0.3-0.1 1.4-0.1 0.4-0.1 0.2-0.2 0.1-0.3 0.1-0.3 0.4-0.3 1-0.6 0.4-0.3 0.4-0.4 0.1 0 0.2 0.2 0.3-0.1 0.4-0.2 0.3-0.3 0.3-0.3 1.6-2.3 0-0.3 0-0.2-0.2-0.2-0.2-0.2-0.1-0.2-0.1-0.3 0.1-0.4 0.2-0.3 0.2-0.3 0.3 0 0.4 0.1 0.6 0.2 0.7 0.1 0.7 0.2 0.7 0.1 0.6-0.3 1.1 0.4 0.6 0.2 0.4-0.1 1-0.3 0.2-0.2 0.2-0.2 0-0.3-0.1-0.3-0.1-0.3-0.2-0.3-0.2-0.2-0.2-0.2 0-0.4 0.2-0.4 0.3-0.5 0.5-0.9 0.4-0.1 0.3 0.1 0.2 0.2 0.3 0.3 0.4 0.8 0.1 0.5 0.2 0.3 2.5 2.4 0.4 0.2 0.3 0 0.1 0 0.1-0.3 0-0.3 0-0.2 0.1-0.3-0.1-0.6-0.2-1 0-0.4 0.1-0.3 0.1-0.2 0.2-0.1 0.8-0.1 0.4-0.1 0.3-0.1 0.2-0.2 0.1-0.1 0-0.2-0.3-0.3-0.1-0.2-0.2-0.5-0.1-0.6 0.2-2.7-0.2-0.4 0.3-0.2 7.7-3.8 0.7-0.1 0.8 0 3.7 0.9 1 0.1 1.4-0.2 1.8-0.5 0.4-0.3 0.2-0.2 0.6-1.5 0.1-0.2 0.4-0.3 0.3 0 0.3 0.1 0.6 0.4 0.7 0.4 0.2 0.2 0.4 0 0.4-0.1z",
    IDN1231:
      "M258.4 195.4l-0.1 0-1-0.2-0.4-0.2-0.9-0.7-0.8-0.2 0.1-0.3 0.3-0.2 0.1-0.4 0.1-0.1 0.5-0.3 0.5-0.3 0.4 0 0.3 0.2 0.4 0.2 1 0.2 0.4 0.2 0.1 0.4-0.5 1 0.1 0.5-0.6 0.2z m4.8-2.7l-0.1 0.1-0.3 0-0.2-0.1-0.4-0.1-0.2-0.2-0.4-0.2 0.7-0.9 0.3-0.2 0.1-0.2 0.2 0 0.1 0.1 0.1 0.3 0.3 0.4 0 0.6-0.2 0.4z m8.8-0.6l-0.3 0.5-0.4 0.4-0.7 0.2-0.4 0.5-0.3-0.2-0.6-0.8-0.6-0.4 0.1-0.2 0.4 0.1 0.6-0.3 0.2-0.4 0.5-0.3 0.7-0.2 0.6-0.1 0.2 0.1 0 0.3 0.2 0.3-0.2 0.5z m7.7-7.1l0.8 0.3 0.7 0.1 0.4-0.1 1.1 0.2 0.4 0.2 0.2 0.2 0.4 1.1 0.1 0 0.2-0.6 0.1-0.2 0.3-0.2 0.7 0.3 0.1 0.1 0.3 0.4 0.1 0.1 0.3 0.1 0.3 0.2 0.2 0.3 0.1 0.4 0.5-0.2 0.3 0.1 1.5 1.7 0.2 0.8 0.3 0.8 0.1 0.4-0.1 0.4-0.5 0.5 0 0.2-0.2 0.6-0.9 1.1-0.3 0.6 0 0.2 0.1 0.4 0.1 0.2-0.1 0.2-0.2 0.4 0 0.2-0.3 0.4 0 0.2 0.1 0.1 0.3 0.3 0.2 0.3-0.5 0-0.8 0.3-0.4 0.1-0.6 0-0.3 0.1-0.3 0.2-0.1 0.4 0 0.8-0.2 0.1-0.6 0-0.6 0.1-0.3 0.2-0.3-0.1-0.2-0.5-0.1-1-0.1-0.4-0.5-0.4-1.1-1 0-0.2 0-0.2-0.2-0.2-0.2-0.2-0.3 0.1-0.3 0.1-0.4 0.1 0 0.3 0.3 0.6 0 0.9-0.5 0.4-1.4 0.7-1.4 0-0.6 0.8-0.6 0.1-0.6-0.2-0.2-0.5 0.2-0.7 0.8-0.9 0-0.3-0.2-0.1-0.2-0.2-0.5-0.5-0.1-0.2 0-0.7-0.1-0.3-0.2-0.4 0-0.2 0.1-0.3 0.4-0.5 0.1-0.2 0-0.8-0.1-0.1-0.4 0.1-0.5 0.2-0.2 0-0.1-0.2 0-0.3 0.2-0.2 0.3-0.2 0.3-0.1 0.4-0.2 0.1-0.6-0.1-0.7-0.2-0.6 0.3-0.1 0.3-0.2 0.3-0.3 0.1-0.2-0.1-1.4 0.4-2.1 0.3-0.5 0.9-0.2 0.4 0 0.6 0.1 0.4 0 0.3-0.1 0.6-0.5 0.4-0.1 0.3 0.5z m-42.8-23l0.4 0 0.4 0.1 0.2 0.2 0.1 0.3 0.2 0.4 0.2 0 0.3 0.1 0.4-0.1 0.2 0.1 1 0.7 0.2 0.2 0 0.2 0 0.2-0.2 0.2 0 0.3 0 0.9 0 0.3 0.2 0.1 0.3 0.3 0.1 0.1 0.2 0.4 0 0.2 0.4 0.3 0.1 0.5 0.1 0.2 0.2 0.1 0.2 0.1 0.2 0.1 0 0.2-0.1 0.4 1.1 1.3 0.2 0.2-0.1 0.2-0.3 1.5 0 0.9 0.8 3.7 1.4 3.8 0.5 0.9 0.7 0.8 0.7 0.7 0.4 0.2 0.6 0.2 0.5 0.1 0.2-0.2 0.2-0.1 2.5 0.8 2.8 0.5 1.4 0.6 0.5 0 1 0 0.4 0.2 0 0.3-0.2 0.1-0.4 0-0.2 0-0.7 0.4-0.2 0.1-0.4 0.1-0.4 0.3-1 1.6-1.4 3.7-0.1 0.8 0.2 0.7 0.7 0.5 0.6 0.1 0.2 0.1 0.2 0.1 0.1 0.2 0.2 0.2 0.3 0.1 0.4 0.1 0.2 0.3-0.1 0.4-0.1 0.4 0.3 0.4-0.2 0.1-0.2 0-0.3 0.3-0.3 0-0.4-0.1-0.4 0.2-0.1-0.1-0.2-0.3-1.2-0.2-0.6 0.2-0.1 0.5-0.3-0.2-0.5 0.3-0.3-0.2-0.2-0.5-0.1-0.5-0.1-0.3-0.2-0.2-0.5-0.3-0.2-0.2-0.2-0.5-0.3-0.2-0.4-0.2-1 0.1-0.4-0.2-1.1-1-4.5-1.6-0.4-0.1-1.6-0.1-0.3-0.2-1.4-2.3-0.3-0.9-0.2-1 0.3-0.9 0.4-1 0.3-0.9-0.4-0.9-0.7-0.5-0.8-0.3-0.7-0.6-0.2-1 0.2-0.6 0-0.3-0.1-0.2-0.2-0.3-0.1-0.4-0.2-0.4 0-0.2 0-0.8-0.1-0.6-0.1-0.3-0.2-0.2-0.4-0.2-0.3-0.1-1.3-0.2-0.3-0.2-0.3 0-0.3 0.1-0.7-0.1-0.2-0.1-0.3-0.2-0.3-0.6-0.3-0.2-0.5 0.3-1.1 0.4-0.4 0.2-0.5 0.3-0.2 0-0.4 0-1.4 0-1.1 0.3-0.2-0.1-0.1-0.1-0.5-0.7 0-0.1-0.9-0.4-0.3-0.1-0.8 0.1-0.4 0.1-0.3 0.1-0.4-0.8 0-0.9 0.2-0.8 0.4-0.6 0.6-0.5 2.5-0.9 1.7-1.1 0.6-0.9-0.2-0.9-0.8-0.5-0.5-0.4 0.2-0.2 0.2-0.1 0-0.1-0.1-0.5 0-0.2 0.2-0.1 0.3-0.1 0.2-0.1 0.1-0.1 0.1-0.3 0.1-0.2 0.1 0 0.3 0 0.1 0 0.9-0.9 0.3-0.1 1 0 0.4-0.1 0.2-0.1 0.2-0.2 0.2-0.2 0.6-0.2 0.4 0.4 0.2 0.5 0 0.5 0.2 0.6 0.4 0.4 0.6 0.3 0.6 0.2-0.2 0.3-0.9 0.8 0 0.3 0.2 0.4 0.4 0.3 0.3 0.3 0.5 0.1 0.3 0 0.2-0.1 0.5 0 0.1 0 0.1 0.4 0.1 0.1 0.2 0.1 0.6-0.1-0.2-0.4-0.3-0.4-0.6-0.7-0.2-0.4-0.1-0.4 0.2-0.9-0.1 0-0.4-0.6 0-0.2-0.1-0.6-0.1-0.3-0.2-0.3-0.2-0.2-0.3-0.2 0.6-0.2 1.9 0 0.6-0.1 0.9-0.6z",
    IDN1232:
      "M447.4 318.7l0.4 0.5 0.1 0.5 0.4 0.5 0.2 0.6-0.4 0.4-0.3 0.5-0.7-0.2-1.2-0.9-0.3-0.4-0.3-0.1-0.2-0.1 0.1-0.2 0.8-1 0.2-0.1 0.4 0 0.3-0.1 0.5 0.1z m-1.5-11l0.7 0.5 0.6 0.6 1.2 1.5 0.7 0.6 0.9 0.6 0.5 0.7-0.3 0.9-0.2 0.3-0.7 0.5-0.4 0.3-0.6 0.5-0.2 0.2-1.5 0.2-0.3 0.1-0.1 0.5-0.4 0.3-2.9 1-0.9 0.6-0.7 0.8-0.5 0.9-0.3 0.3-0.5 0.2-0.4 0.1-0.2 0.4 0 0.5 0.4 0.5 0.1-0.2-0.1-0.1-0.2-0.3 0.4-0.2 0.1 0.4 0 1-0.2 0.3-0.3 0.2-0.4 0.1-0.3 0.1-0.5 0-0.5 0-0.5-0.1-0.4-0.3 0-0.3 0.5-0.3 0.9-0.5 0.3-0.3 0.2-0.5 0.1-0.5-0.2-0.4-0.1-0.2-0.3-0.7-0.6-0.2-0.6-0.5-0.3-0.4-0.1-0.3-0.2-0.3-0.4-0.3-0.7-0.5-1.5-1.4-0.6-0.4-2.8-1.4-0.9-0.1-2.6 0-0.7-0.3-0.7-0.5-0.5-0.6-1.8-2.6-0.4-2.1 0.1-0.6 0.6-0.1 0.5 0 0.3 0.2 0.2 0.3 0.3 0.3 0.3 0.2 0.4-0.1 0.5-0.4 0.4 0.2 0.4 0.1 0.9 0.1 0.4 0.1 3.6 1.3 0.7-0.3 2 0 0.9-0.2 0.8-0.6 1.6-1.6 0.8-0.3 0.5-0.1 0.4 0.1 0.5 0.2 0.3 0.3 0.4 0.2 1.5 0.3 3.6 1.5z",
    IDN1233:
      "M399.6 314.8l-1.7 0-0.2-0.1-0.1-0.4 0.1-0.3 0.3-0.3-0.2-0.3 1.1 0.3 1.2 0 0.3 0.2 0.1 0.3 0 0.3-0.1 0.1-0.2 0.1-0.6 0.1z m27.2-29.5l0 0.3-0.1 0.1-1.9-0.2-0.4 0-0.3 0-0.1-0.1 0-0.2 0.1-0.2 0.1 0 0.8-0.4 0.2 0 0.2 0 0.5 0.2 0.2 0.1 0.5 0 0.2 0.1 0 0.3z m27.6-0.5l0 0.8-0.4 0.5-0.8 0.2-1-0.1-0.8-0.5-0.3-0.4 0.2-0.2 0.2 0 0.2 0 0.2-0.5 0.1 0 0.1 0.2 0.1 0.2 0.2 0.2 0.1 0.1 0.3 0 0.5 0.2 0.6 0 0.2 0-0.3-0.2 0-0.3 0.1-0.2 0.1-0.1 0.2 0.1 0.1-0.3 0.1 0 0 0.3z m-32.5 0.1l-0.1 0.6 0 0.4-0.3 0-0.5-0.2-0.5-0.2-0.2-0.2-0.4 0-0.3-0.1-0.4-1-0.1-0.4 0.6-0.6 0.6-0.1 0.4 0.1 0.3 0.3 0.6 1 0.3 0.4z m-8.9-5.5l0.5 0.2 0.4 0.2 0.3 0.4 0.5 0.1 0.6 0.3 0.3 0.3 0.4 0.7-0.6 0.1-1 0.6-1.6 0.2-0.5 0.5-0.4 0.1-0.6 0-0.4 0.2-0.5 0.8 0.4 0.1 0.2 0.2 0 0.3-0.5 0.1-0.9 0.1-1.2-0.1-1.5-0.3-0.4 0-0.5-0.1-0.4 0.5-0.8 0-0.4 0.2-0.2 0.3-0.1 0.3-0.2 0.3-0.2 0.7-0.2 0.4-0.8 0.4-0.1-0.2-0.3-0.2-0.5-0.2-1.1 0.1-3.3-0.2-0.4-0.2-0.4 0-1 0.3-0.5-0.1-0.1-0.7-0.3-0.3 0-0.1 0.3-0.2 0-0.2-0.3 0-0.5-0.2-0.2 0-0.1 0.2 0 0.5-0.1 0.1 0.3 0.3 0.4 0.3 0.3 0.2-0.1 0.3-0.4 0.1-6.7-1.5-0.9-0.1-0.7 0.1-0.4-0.1-0.1-0.2-0.1-0.7 0-0.3 0.2-0.3-0.1-0.2-0.3 0.4-0.1-0.2-0.2-0.3 0-0.4 0-0.4 0.2-0.1 0.2-0.1 0.5-0.1 0.6-0.3 0.6-0.6 1.2-1.3-0.1-0.4 0.7-0.2 0.9-0.1 0.6-0.1 0.8 0.1 1.9-0.3 1.7 0.3 2.8 0 3.7-0.2 1.8 0.3 3.1-0.4 2.7 0.1 2.8-0.4 1 0.1 0.4 0.2z m30.2-1l1.8 0.2 0.5 0.2 1.5 0.8 0.4 0.3 0 0.6-0.3 0.2-1 0-0.2-0.1-0.4-0.2-0.4 0-0.3-0.2-0.2-0.1-0.1 0-0.1 0.1-0.2 0.1-0.1 0.1-0.3-0.1-0.3-0.2-0.2 0-0.7 0.3-0.1 0.1 0 0.2 0.2 0.1 0.3 0.1 0.2 0.1 0.3 0.2 0.2 0.2-0.5 0.4-0.5-0.2-0.8-0.6-0.3 0.3-0.1 0.2 0.1 0.2 0.1 0.2 0 0.1-0.2 0.2-0.2 0-0.1-0.1-0.5-0.4 0-0.2 0.3-0.8-0.9 0.1-0.3-0.1-0.2-0.2 0.1-0.6 0.2-0.2 0.3-0.3 0.3-0.4-0.2-0.3 0.2-0.2 0.5-0.1 0.4 0 1.8 0z m-96.3 30.5l0-0.2 0.4-1 0-0.3-0.1-0.5 0.2-0.4 0.3-0.4 0.4-0.3 0.8-0.5 1.4-1.2 1.1-0.6 0.6-0.3 0.3-0.2 0.5-0.4 0.3 0 0.5 0.3 0.2 0 0.4-0.3 0.1-0.8 0.4-0.9 0.1-0.5 0.1-0.9-0.1-0.3-0.1-0.2-0.3-0.3-0.5-0.6-0.3-0.2-0.2-0.1-0.8-0.1-0.3-0.2-0.1-0.3 0-0.4-0.1-0.4 0-0.1 0.1-0.2 0.5-0.4 0.1-0.2-0.2-0.3-0.2-0.4-0.3-1.2 0.4-2.7 0-0.4-0.1-0.7 0-1 0.1-0.9 0.4-0.4 0.6 0.1 0.3 0.2 0.4 0.1 0.2 0 0.4-0.1 0.1 0.1 0.3 0.1 0.3 0.2 1.4 0.5 0.9 0.1 0-0.2 0-0.2 0.3-0.4 0.3-0.2 0.4-0.3 0.6-0.4 0.4-0.3 0.3-0.4 0.9-0.8 0.3-0.2 0.1-0.2-0.1-0.2-0.2-0.9 0-0.3 0.1-0.7-0.1-1.9 0.5-2.6 0-0.4 0.2-0.5 0.8-1.4 0.1-0.1 0.5 0.5 0.5 0.3 0.5 0.3 1.4 0.3 1 0.1 0.3 0.1 0.4 0 0.5-0.1 0.7-0.4 0.4-0.1 0.4 0.1 0.7 0.8 1.3 1.6 0.4 0.3 0.5 0.1 0.9 0 0.9-0.2 0.8-0.2 0.2-0.1 0.9 0 0.4 0 0.9-0.3 0.5-0.1 0.8 0.1 0.3 0.2 0.5-0.3 0.4 0.1 0.4 0.3 0.3 0.3 0.3 0.2 0.5 0.1 0.4 0 0.3-0.2 0.2-0.4-0.1-0.5 0.2 0 0.3 0.1 0.1 0.1 0.2 0.2 0.1 0.4 0 0.5-0.3 0.9-0.1 0.5 0.1 0.2 0.5 0.8 0.2 0.1 0.2 0.1 0.3-0.1 0.3 0 0.2 0.3-0.7 0.2-0.4 0.2-0.1 0.2 0.1 0.2 0.1 0.4 0.3 0.3 0.2 0.2 0.3 0.1 0.4 0.4 0.2 0.5-0.1 0.3-0.3 0.2-1.4-0.2 0.4 0.5 0.5 0.4 1.2 0.5 0.4-0.3 0.3-0.4 0.3-0.4 0.5-0.1 0.4 0.1 0.3 0.3 0.2 0.4 0.3 0.6 0.1 0.3 0 0.3-0.2 0.8 0 0.4 0 0.9-0.2 0.4-0.8 0.6-0.2 0.4 0 1.8 1.8 1.3 2.7 1.2 0.4 0.1 0.6 0 0.4 0.1 0.5 0.1 0.4 0.4 0.8 0.7 0.4 0.4 0.7 0.1 0.5 0.2 0.3 0.1 0.2 0 0.4-0.1 0.3 0 0.4 0.2 0.5 0.7 0.3 0.1 0.6-0.1 0.4-0.1 0.7-0.5 0.8-0.4 0.5-0.2 0.5-0.1 0.3-0.1 0.7-0.4 0.5 0 2.9 0.4 0.2 0 0.4-0.2 0.2-0.1 0.5 0 0.9 0.4 0.5 0 0.4-0.1 0.3-0.2 0.4-0.5 0.4-0.2 0.3 0 0.4 0.1 0.5 0.1 0.4-0.1 0.4-0.1 1.5-1.3 0.6-0.2 0.7 0.4 0.9 1.1 0.5 0.5 0.7 0.3 0.5 0 0.9-0.3 0.5 0 0.3 0.1 0.8 0.8 0.3 0.2 0.2 0 0.3 0.1 0.5-0.1 0.2 0 0.2 0.1 0.4 0.4 0.8 0.4 0.3 0.4 0.2 0.4 0 0.5-0.2 0.9 0 0.2-0.3 0.4-0.1 0.3 0 0.2 0.2 0.5 0 1.1-1 3.1-0.8 4.4-0.1 0.6-0.1 0.5 0 0.2 0.1 0.3 0.2 0.5 0.1 1 0 0.4 0.3 0.2 0.3-0.2 0.1-0.6 0-1 0.3 0.4 0.1 0.7 0 1.5 0.2 0.4 0.2 0.5 0.4 0.3 0.3 0.1 0.5 0.1 0.2 0 0.6 0.4 1.1 0.4 0.2 0.3 0.2 0.2 0.2 0.3 0.2 0.4 0 0.5-0.6 0.8-0.9 0-1.9-0.6-0.5-0.1-1.2 0.1-0.5-0.2 0.1-0.3 0.5-0.6-0.2-0.8-0.8-0.7-1-0.4-0.9-0.1-0.8 0.6-0.6 0.2-0.2-0.2-0.2-0.4-0.6 0.1-1 0.3-0.2 0-0.8-0.1-0.1-0.1-0.2-0.4-0.2-0.1-0.5 0.1-0.4 0.2-0.3 0.1-0.2-0.4 0-0.2 0.1-0.3 0-0.3-0.2-0.1-0.2 0-0.5 0.2-0.2 0.1-0.4-0.1-0.6-0.1-0.5-0.3-0.4-0.3-0.2 0.2-0.2-0.2-0.1-0.7-0.2-0.2-0.3 0.1-0.4 0.1-0.3 0.2-0.2 0.2-0.2 0-0.3 0-0.1 0 0-0.4 0-0.2-0.3-0.2-0.4 0.1-0.4 0-0.3-0.2-0.4-0.6-0.2-0.1-0.7-0.2-0.1-0.1-0.3-0.3-0.1 0-0.7 0.1-0.3 0-0.8-0.5-0.3-0.3-0.1-0.3-0.1-0.1-0.5 0-0.3 0.2-0.4 0.1-0.4-0.2-1-1.2-0.5-0.4-0.9-0.4-0.9-0.2-1-0.1-2.7 0.4-1 0.2-0.8 0.4-1.1 1.3-0.8 0.5-0.7-0.3-0.3 0.1-0.5-0.4-0.1 0.3-0.2 0.1-0.2 0.1-0.2-0.1-0.2-0.1-0.1-0.1-0.4 0.2-0.3 0.3-0.1 0.1-0.3 0.1-0.4 0-0.3 0.1-0.3 0.2-0.4 0.3-0.3-0.2-1-0.4-0.8-0.2-1.2-0.4-1.7 0-0.3-0.1-0.3-0.1-0.3-0.2-0.5 0 0.2-0.3-0.4-0.4-0.6-0.2-0.5 0-0.5 0-0.2 0-0.6 0.3-0.3-0.1-0.1 0-0.2-0.2-0.4-0.2-4-0.4-0.5-0.1-0.7-0.5-0.2 0-0.6 0.4-0.1 0.2-0.2 0-0.5-0.2-0.5-0.5-0.3-0.1-0.6 0.1-0.2-0.1-0.5-0.2-0.2 0-0.2 0.1-0.2 0.4 0 0.5-0.1 0.3-0.4 0.1-0.1-0.1-0.1-0.2-0.1-0.3-0.2-0.1-0.2 0.1-0.1 0.2-0.2 0.4-0.2 0.3 0 0.2 0.3 0.2 0.1 0.2-0.1 0.1-0.3 0.1-0.5-0.1-0.4-0.2-0.3-0.3-0.2-0.5-0.1 0-0.3 0.3-0.3 0-0.8-0.4-0.3 0-0.3 0.2-0.3 0.1-1.5-0.4-0.2-0.3 0-0.3 0-0.2-0.4-0.2-0.1 0-0.4 0.2-0.2 0-0.1-0.1-0.3-0.2-0.2 0-1.1 0-0.3 0-0.1 0-0.2-0.2-0.2-0.1-0.2 0-0.2 0.1-0.1 0.1-1.8 0.5-0.2 0-0.1-0.4-0.2-0.2-0.2-0.1-0.2 0-0.3-0.2-0.1-0.2 0-0.3-0.1-0.2-0.2 0-0.2 0.4-0.3 0.5-0.1 0.1-0.2 0-0.9 0-0.4-0.1-1.2-0.5z m38.4-54.5l0.3 0.3 0.2 0.3 0.1 0.5 0 0.5-0.2 0.4-0.3 0.3-0.4 0.2-0.2 0-0.6 0-0.1-0.1-0.1-0.2-0.1 0.1-0.4 0.2-0.5-0.1-0.2-0.2-0.1-0.4-0.2-0.5 0.1-0.2 0.7-0.5 0-0.1 0.5-0.6 0.3 0.1 0.3-0.1 0.3-0.1 0.3 0 0.3 0.2z",
    IDN1234:
      "M452.5 234.5l-0.5 0.1-0.2-0.3 0.4-0.6 1.3-1 0 0.1-0.2 0.4 0.1 0.2 0.2 0.1-1.1 1z m12.7-25.9l-0.1 0.1-0.4-0.4-0.8-1.3-0.2-0.3 0-0.3 0.2-0.5 0.5-1.1 0.1-0.4 0.1-0.3 0.6-0.5 0.1-0.3 0.2-0.4 0.2 0.2 0.4 0.6-0.1 0.8-0.4 1.6-0.1 1.2-0.2 0.8-0.1 0.5z m-5.8 8.6l-0.2 0.2-0.4 0.5-0.1 0.1-0.1-0.3-0.1-0.3-0.3-0.1-0.3 0.1-0.1-0.4 0-0.5 0.2-0.5 0.1-0.4 0.1-0.1 0.4-0.2 0.1-0.2-0.1-0.2-0.4-0.5 0-0.3 0.2-1.4-0.1-0.5-0.2-0.3-0.5-0.4-0.4-0.6-0.1-0.3-0.1-1.7 0-0.4 0.6-1.4 0.1-1.5 0.1-0.4 1-1.7 0.4-1.4 0.1-0.3 0.1-0.1 0.7-0.3 0.3-0.1 1.3-1.2 0.3-0.1 0.2-0.1 0.2-0.3 0.1 0 0.2 0.2 0 0.3-0.1 0.5-0.3 2.2 0.1 0.8 0.6 0.9 0.3 0.3 0.3 0.4 0.1 0.4-1 0.4-0.1 0.4 0.2 0.4 0.2 0.3 0.1 0.4 0.1 0.4-0.1 1 0.2 0.5 0 0.2 0 0.8 0.1 0.2 0.3 0.1 0.2 0.2 0 0.2-0.2 0.2-0.3 0.6-0.2 0.3-0.2 0.3 0 0.6 0.1 0.3 0.3 0.5 0 0.3-0.1 0.3-0.2 0.1-0.4 0-0.2 0.2-0.2 0.3-0.3 0.1-0.5 0-0.1 0.1-0.2 0.2 0 0.1 0 0.3-0.1 0.1-0.4 0.3-0.3 0.3-0.4 0.4-0.2 0.1-0.4 0.1z m9.7-36.3l-0.7 3.3-0.5 0.9-0.7 0.1-0.2-0.2-0.2-0.5-0.1-0.4-0.4-0.2-0.5-0.1-0.3 0.1-0.3 0.2-0.3 0.1-0.3-0.2-0.7 0.2-0.2 0-0.3 0.1-0.1 0.2 0 0.2 0 0.1 0.4 0.2-0.1 0.4-0.5 0.9 0.3 0.1 0.7-1 0.5-0.2 0.4 0 0.2 0.3 0 0.4-0.5 0.9-0.1 0.4 0.1 3.8-0.1 0.8-0.3 0.7-0.4 0.7-1 1.3-0.5 0.4-0.4 0.1-0.4-0.2-0.2-0.3-0.1-1-0.1-0.4-0.2-0.1-0.3-0.2-0.2-0.1-0.2-0.3-0.2-0.5-0.1-0.5 0-0.4 0-0.2-0.2 0-0.1 0.2-0.1 0.2 0.1 0.5 0 0.2-0.2 0.5-0.3 0.4-0.1 0.5 0.2 0.5 0.1 0.3-0.1 0.2-0.2 0.2-0.1 0.3 0.1 0.1 0.1 0 0.4-0.1 0.6 0.1 0.1 0.2 0 0.4 0.2 0.4 0.4 0.3 1.3 1 0.3 0.3-0.1 0.3-1 0.2-0.8 0.3-0.3-0.1-0.1 0.4 0.5 0.7 0.1 0.5-0.2 0.6-0.3 0.2-0.4 0.1-0.5 0.2 0.1-0.3 0.1-0.3 0.2 0 0.2 0.1 0.3-0.3 0.1-0.4-0.3 0-0.8 0.3-0.2 0.2-0.2 0.4-0.4 0.9-1.3 2.3-0.3 0.8-0.2 1.9-0.2 1-0.5 0.5-0.4 0.2-1.5 0-0.5 0.1-0.5 0.3-0.8 0.8-0.9 0.6-3.8 1.8-5.8 2.2-5.5 2.2-4 1.9-3.6 2.2-1 0.3-0.9-0.3-0.4-0.9 0.1-0.9 0.5-1.7-0.5-1.8-0.1-1.6 0.1-3.7-0.3-1-1.3-1.6-0.3-1 0-1 0.6-2.7-0.5 0.2-0.3 0.2-0.3 0.3-0.2 2.3-0.3 0.3-0.5-0.1-0.9-0.2-1-0.6-1.2-0.6 3.5-9.3 0.5-2.1 0.1-0.3 0.1-0.3 0.5-0.7 0.3-0.1 1.5-0.3 0.5-0.2 0.2-0.2 0.3-0.3 0.1-0.3 0-0.3 0.1-0.1 0.2-0.1 1.5-0.6 0.3-0.2 0.4-0.4 0.2-0.4 0.1-0.5 0-0.4 0.1-0.5 0.2-0.5 0.1-0.4 0.3-0.4 1-1.1 0.1-0.1 0.3-0.8 0.3-0.7 0.1-0.2 0.1-0.2-0.1-0.8 0-0.2-0.2-0.3-0.1-0.2-0.2-0.3-0.1-0.3 0-1 0.1-0.1 0.5-0.2 2.6-0.6 2.3-0.6 0.5-0.3 0.7-0.5 3.1-2.9-0.4-1 0-0.3 0.3-0.4 0.4-0.5 0.3-0.7 0.1-0.6-0.2-0.5-0.2-0.6-0.2-0.6 0.1-0.7 1.4-6.4 0.2-0.4 0.1-0.2 0.2-0.2 1.1-0.4 0.1 0 0.6-0.1 1-0.2 1.9-0.8 0.5-0.1 0.3 0 0.2 0.1 0 0.3-0.2 1-0.6 0-0.2 0.2-0.3 0.2-0.5 0.5-0.8 1.1 1 0.1 0.4 0 0.2 0.2 0.2 0.3 0.1 0.7 0 0.3 0.2 0.3 0.4 0.4 0.1 0.2 0.1 0.5 0.1 0.5 1 2.3 0.1 2.6-0.1 0.4-0.1 0.3 0 0.3 0 0.5 0.2 0.6 0.3 0.3 0.4 0.2 0.7 0.1 0.2 0.1 0.2 0.3-0.3 0.9-0.1 1.6 0 0.4 0.6 1.6 0.2 1.4 0.3 0.5 0.1 0.1 0.1 0.1 0.5-0.2 0.3-0.1 0.1-0.2 0-0.3 0.2-0.1 0.4-0.2 0.3-0.1 0.4-0.4 0.2-0.1 0.3-0.1 0.6 0.3 0.4 0.1 1.9 0.1 0.6 0.2 5.1 0.3 1.6 0.3 2.2 0.7 0.1 0z",
    IDN1235:
      "M578.2 361.2l0.4 0 0.1 0 0.3 0.1-0.1 0.2-0.3 0.3-0.4 0.1-0.5 0.2-0.5 0-0.4-0.1-0.1-0.2 0.3-0.3 0.5-0.2 0.7-0.1z m38.5-0.7l-0.2 0.2-0.1 0.1 0.1 0.2 0.1 0 0.3 0 0.2 0 0.5 0.3 0.2 0.3-0.1 1-0.1 0.3-0.5 0-0.5-0.1-0.4 0-0.3 0.2-1.2 0.9-0.2 0.1-0.5 0.2-0.1 0.2-0.1 0.5-0.1 0.5-0.5 0.5-0.7 0.1-0.8 0.1-3.3 0.9-0.4 0.3-0.3 0.2 0.4 0.3 0 0.1-2 0.4-0.9 0-0.4-0.6-0.2-2-0.1-0.4 0.1-0.2 0.4-0.1 0.5-0.4 1.4-0.4 0.5 0 0.5 0 0.2 0 0.4-0.3 0.3 0 0.4 0 0.5-0.3 1.1-1 0.5-0.3 0.9-0.4 0.3-0.3 0.1-0.2 0.1-0.5 0.1-0.2 0.2-0.1 0.2 0 0.1 0 0.1-0.3 0.2-0.4 0.3-0.3 0.9-0.4 1.1-0.5 0.4-0.2 0.5-0.8 0.3-0.2 0.2 0.3 0 0.4-0.1 0.2-0.4 0.5 0.4 0.3-0.1 0.4-0.3 0.4 0 0.2 0.1 0.1-0.2 0.2z m-31-3.1l0.4 0.2 0.4 0 0.4 0.1 0.2 0.6-0.2 0.9-0.1 0.2-0.9 0.7-0.5 0.3-0.3 0.3-0.3 0-0.2 0-0.2 0.4-0.5 0.2-1.4-0.2-0.9 0.1-0.5-0.1-0.4-0.3-0.4-0.3-0.1-0.1 0.4-0.3 2.6-1.3 0.7-1.2 0.4-0.2 0.5-0.2 0.5 0 0.4 0.2z m32.9-4.7l-0.1 0.2-0.1 0.3-0.3 0.1-0.3-0.2-0.2-0.3-0.3 0.2 0.5 0.9 0.1 0.6-0.3 0.3 0.1 0.3-0.1 0.2-0.2 0-0.3-0.1 0-0.1-0.2-0.3-0.3-0.2-0.1 0.1-0.1 0.3-0.4 0.4-0.3 0-0.2-0.6 0-0.6 0.1-0.4 0.3-0.3 0.5-0.4 0.3-0.4 0.4-0.9 0.3-0.4 0.3-0.2 0.5-0.2 0.4 0 0.2 0.2 0.2 0.3 0.6 0.2 0.1 0.3-0.3 0.3-0.8 0.4z m-74.8-18.9l1.3 1.8 0.5 0.4 0.3 0.3 0.4 0.1 0.4 0.1 0.4-0.2 0.4-0.1 0.5 0.2 0.5 0.3 0.3 0.4 0 0.9 0.2 0.6 0 0.8 0.2 0.4 0.2 0.2 1.3 0.6 0.4 0.1 0.1-0.4 0.2-0.2 0.6-0.2 1-0.1 0.5 0 0.4 0.2 0.3 0.4 0.1 0.5 0.3 0.3 1.5 0.9 0.6 0.7 0.9 1.9 0.5 0.7 0.6 0.4 1.4 0.8 0.6 0.5 0.5 0.5 0.4 0.6 0.2 0.9-0.3 0.8-0.2 0.3-0.7 0.5-1 1-0.3 0.6-0.3 0.2-1.3 0.4-0.2 0.1-0.3 0.1-1.4-0.1-0.4 0.1-1 0.5-0.2 0.2 0 0.4-0.2 0.4-0.3 0.2-0.4 0-0.4-0.3-0.5-0.6-0.4-0.2-3.2-0.4-0.3 0-0.2-0.1-1.4-0.4-0.1-0.1-0.2-0.5-0.1-0.2-0.9-0.4-0.2-0.1-0.6-1-0.2-0.1-0.2 0.1-0.1-0.1-0.2-1-0.2-0.5-0.9-1.1-0.2-0.2-0.2-0.2-0.2 0-0.4-0.1-0.2 0-0.2-0.2-0.1-0.3-0.2 0.1-0.1-0.1-0.1-0.2-0.2-0.1-0.4-0.3-0.2 0-0.9-0.1-0.3-0.1-0.8-0.6-1.3-0.7-0.2-0.3-0.1-0.6-0.2-0.3-0.9-0.2 0-0.5-0.1 0-0.4 0.2-0.5-0.1-1.1-0.1-0.8-0.3-0.5-0.1-0.4 0-0.4 0.1-0.4 0.2-0.2 0.2-0.2 0.4-0.4-0.2-0.9-0.6-0.1 0-0.3 0.2-0.2 0-0.1-0.1-0.6-0.4-0.5 0.1-0.9 0-0.9-0.1-0.9-0.4-0.9-0.1-0.3-0.2-1-0.7-0.2-0.4-0.4-0.7-0.2-0.2-0.3-0.3-0.6-0.4-0.4-0.3-0.1-0.4 0.2-0.6 0.3-0.6 0.5-0.5 1-0.9 0.5-0.3 0.6-0.2 0.7 0 0.3-0.1 0.6-0.4 0.4-0.1 0.8-0.2 0.7 0 0.2 0 0.3-0.2 0.1-0.1 0.8 0 1.8 0.3 0.2 0 0.3-0.2 1-0.2 0.5 0 0.8 0.4 0.3 0 0.4-0.3 0.5-0.2 1.3-0.3 0.4 0 0.3 0.2 0.1 0.2 0.3 0.3 2.6 0.2 0.4-0.1 2.8-2 0.2 0.1 0.1 0.5 0.2 0.2 0.9 0.8z m111.6-4.1l0 0.1 0 0.2-0.2 0.1-0.5-0.1-0.3 0-0.3 0.2-0.2 0.2-0.2 0.1-0.3 0-0.2-0.1-0.2-0.2-0.2-0.2-0.1 0-0.5 0-0.7 0.1-0.3 0.5-0.1 0.6 0.1 0.8 0.2 0.4 0.1 0.2 0.5 0.5 0.5 0.3 0.1 0.1 0 0.1 0 0.4 0 0.1 0.5 0.8 0.1 0.3 0.2 1.4-0.6 0.5-0.7 0.6-0.3 0.9-0.1 1.6-0.2 0.3-2.1 1.4-0.6 0.5-2 2.2-0.2 0.8-0.3 0.3-1.2 0.7-0.8 0.6-0.7 0.6-1.1 0.7-0.4 0.4-0.3 1.1-0.3 0.2-0.3 0.4-1 0.8-0.7 0.3-0.9 0.2-2.3-0.1-1.6 0.2-0.7 0.1-0.3 0-0.4-0.2-0.3 0-0.3 0.3-0.4 0.9-0.2 0.2-0.5 0.1-0.2 0.2-0.1 0.3-0.2 0.3-0.3 0.1-1.9 0.3-2.3 1.6-0.6 0.2-0.2-0.1-0.2-0.3-0.5 0.1-0.8 0.2-0.5-0.1-0.4-0.2-0.4-0.2-0.4 0.2-0.5 0.2-0.4-0.1-0.6-0.5-0.3-0.1-0.5-0.1-0.4 0.1-0.3 0.4-0.2 0.2-0.3 0.1-0.2 0-0.1-0.2 0.1-0.3 0.3-0.4 0.2-0.5 0-0.4 0-0.9 0.1-0.3 0.4-0.4 0.6-0.6 1.1-0.4 0.4-0.2 0.1-0.1 0.8-0.1 0.2-0.1 1.8-1 0.4-0.5-0.4-0.6-0.5-0.2-0.4-0.2-0.5-0.1-0.5-0.1-0.5 0.2-0.7 0.5-0.4-0.1-0.2-0.3 0-0.5 0.1-1.5 0.2-0.3 0.8-0.5 0.5-0.4 0.2-0.4 0.1-0.5 0-0.5-0.1-0.2-0.3-0.5-0.1-0.3 0.1-0.1 0.3-0.2 0.1-0.1 0.1-0.5 0-2 0.2-0.4 0.2-0.4 0.5-0.5 0.8-0.4 0.2-0.1 0.6-0.9 0.2-0.2 0.6-0.2 0.1-0.1 0.2-0.3 0.2-0.1 0.4 0 0.7-1 0.3-0.2 0.1-0.1 1-0.9 0.4-0.6 0.3-0.2 0.4-0.1 0.4-0.1 0.7 1.3 0.6 0.5 0.7 0.1 0.3-0.2 0.4-0.6 0.3-0.2 0.4-0.2 0.3 0 0.3 0.1 0.3 0.3 0.2 0.3 0.2 0.4 0.2 0.4 0.1 0.3-0.1 0.6 0 0.4 0.4-0.1 0.4 0 0.4-0.1 0.3-0.2 0.2-0.3 0-0.2-0.1-0.4 0-0.2 0.1-0.1 0.2-0.3 0.1-0.2 0-0.7 0.2-0.2 0.4-0.1 0.6-0.6 0.4-0.5 0.2-0.2 0.1-0.2 0.1-0.8 0.3-1.2 0-0.4 1.4-0.1 1-0.1 0.9-0.4 1.4-0.9 0.3-0.9 0.2-0.1 1.4-0.4 0.2-0.2 0.5-0.5 0.8-0.2 0.3-0.2 0.7-0.1 0.6-0.5 0.4-0.2 0.1 0.5-0.3 0.7 0 0.4 0.1 0.4 0.2 0.2 0.2 0.2 0.4 0.1 0.3 0 0.3-0.1 0.6-0.4 1-0.4 0.3-0.3 0.1-0.1 0.1-0.5 0.1-0.1 0.2-0.1 0.3 0.3 0.4 0.3 0.4 0.2 0.3 0.4 0.2 0.4 0 0.5-0.4 1.4 0.1 0.2 0.1 0.4z m-118.9-11.3l0.4 0.2 0.3-0.2 0.2-0.4 0.1-0.4 0.3-0.1 0.7 0 0.5 0.1-0.1 0.4-0.6 0.5-0.3 0.2 0.1 0.3-0.3 0.1-0.3 0-0.3 0.1-0.1 0.2 0 0.4 0.4 0.4 0 0.5-0.1 0.2-0.3 0.4-0.1 0.2-0.2 0-0.2-0.2-0.3-0.2-0.1-0.2-0.1-0.1-0.3 0.1-0.2 0.1-0.2 0.1-0.2-0.1-0.2-0.2 0.2-0.6 0.1-0.2 0.3-0.1-0.2-0.3 0.4-0.2 0.3-0.2 0.1-0.2-0.5-0.2 0.2-0.4-0.5-0.9 0.2-0.5 0.4 0.4 0.2 0.1 0.1 0.2 0 0.5 0.2 0.2z m59.3-3.8l-0.7 0.4-0.5-0.5-0.2-0.7 0.4-0.4 0.6 0.1 0.5 0.2 0.2 0.3-0.3 0.6z m-63.8-0.1l0.2 0.1 1.1-0.1 0.4 0 0.3 0.1 0.2 0.3 0.1 0.2-0.1 0.1-0.2 0.1 0 0.3 0.4 0.4 0.2 0.3-0.4 0.1 0 0.2 0 0.2 0 0.1-0.7 0.1-0.3-0.1-0.2-0.4-0.2-0.1-0.3 0.1-0.3 0.4-0.2 0.1-0.3 0 0.2 0.3 0.1 0.1 0.2 0 0.1-0.2 0.2 0.1-0.3 0.6-0.1 0.2-0.2 0.1-0.2-0.1-0.2 0.2-0.1 0.5 0 0.3 0.2 0.4 0.1 0.4 0.3 0.3-0.5 0.1-1-0.4-0.4 0.3 0-0.1-0.1-0.3 0.1-0.3 0.4-0.7 0-0.2 0-0.6 0-0.1-0.3-0.1-0.1-0.1 0-0.6-0.1-0.6 0.1-0.1 0.1-0.3 0.2 0 0.3 0.1 0.1-0.1 0.2-0.4 0-0.2-0.1-0.7 0.2-0.2-0.1-0.3-0.2-0.6 0.2-0.1 0.7-0.3 0.1 0.3 0.1 0.5 0.1 0.4z m80.4-1.1l0.2 0.3-0.1 0.3-0.3 0.3-0.9 0.3-1.8 0.1-0.7 0.4-1.1 1.7-0.5 0.4-0.4 0.1-0.2-0.1-0.5-0.5 0.6-1.5 2-1.4 0.2 0 0.4 0.1 0.3-0.1 0.7-0.2 0.2 0 0.4 0 0.3 0 0.5-0.3 0.1 0 0.6 0.1z m-31.3-1.8l-0.5 0.1-0.3-0.2-0.4-0.8 0.2-0.1 0.3-0.2 0.3-0.1 0.5 0.1 0.2 0.4 0 0.5-0.3 0.3z m33.8-2.3l0.6 0.4 0.1-0.2 0.2 0 0.3 0.1 0.1 0.2 0.1 0.3-0.4 0.4-0.1 1.5-0.2 0.4-0.7 0.4-0.9 0-1.8-0.3-1.8 0.4-0.8 0.1-0.5-0.5 0-0.7 0.4-0.6 1.9-1.6 0.3-0.2 0.4-0.1 0.7-0.2 0.3 0 0.7 0 0.6 0.1 0.5 0.1z m14.2 0l-0.1 0.5-0.1 0.1-0.2 0.1-1 0.2-1.4 0.1-0.5 0.1-0.3 0.2-0.2 0.4-0.3 0.8-0.5 0.8-0.9 0.9-0.2 0.1-0.2-0.3-0.1-0.3-0.2-0.2-0.3 0.2-0.4 0.3-0.3 0.4-0.2 0.3-0.1 0.1-0.5 0.2-0.1 0.2 0.1 0.2 0.8 1-0.3 0.4-0.3 0.3-0.4 0-0.4 0-0.2-0.1-0.5-0.7-0.3-0.2-1 1-0.2 0.1-0.3 0.3-0.2 0.1-0.3 0-0.2-0.1-0.3-0.4-0.8-0.5-0.5-0.2-0.3 0.3-0.2 0.1-0.4 0-0.1 0-0.5-0.3-0.2 0.2-0.1 0-0.3-0.5 0.6-0.7 1.3-0.9 0.9-0.9 0.4-0.2 0.3 0 1.7-0.8 0.3-0.2 0.1-0.2 0-0.4-0.3-0.2-0.7-0.1-1.5 0-0.1-0.3 0.3-0.3 0.4-0.4 0.4-0.1 0.2 0.1 0.4 0.1 0.3 0.1 0.2-0.3 0.3 0 0.5-0.5 0.3-0.1 0.5 0.1 0.6 0.1-0.1 0.1 0 0.4-0.1 0.2-0.1 0.2-0.6 0.6-0.2 0.4 0 0.4 0.2 0.2 0.4 0.2 0.5 0.1 0.5-0.1 0.3-0.2 0.1-0.4-0.2-0.3-0.3-0.3-0.1-0.2 0.4-0.3 0.3 0.3 0.3 0 0.2-0.3 0.1-0.4-0.1-0.3-0.3-0.4 0.1-0.2 0.3-0.3 0.2 0 0.1 0 0.2 0.1 0.1 0.3 0 0.2 0.3 0.1 0.4 0 0.2-0.2-0.1-0.2 0-0.2 0.5-0.1 0.5-0.3 0.3-0.3 0.7-0.3 0.3 0 0.1 0.2 0.1 0.1 0.4 0.3 0.2 0.1 0.3 0.1 0.5 0.1 0.9 0.1 0.2 0.1 0.1 0.3z m6.3 3l-0.3 0.5-0.2 0.4-0.2 1-0.2 0.5-0.2 0.5-0.3 0.3-0.4 0.3-0.4 0.2-0.5 0.1-0.5 0-0.5-0.1-0.2-0.2 0.1-0.9-0.1-0.4-0.4-0.5-0.1-0.3-0.2-0.3-0.4 0-0.5 0.1-0.8 0.5-0.4 0-0.3-0.1 0.1-0.3 0.4-0.3 0.8-1.4 0.4-0.5 0.8-0.6 0.4-0.2 0.3 0.1 0.4 0.3 0.2 0.6 0 0.1 0.3 0.5 0.3 0.2 0-0.5 0.2-0.3 0.6-0.4 0.8-1.3 0.4-0.4 0.6-1 0.3-0.3 0.3-0.3 0.2 0 0.4 0.1 0.2 0.2 0.3 0.6-0.3 0.8-0.1 0.5 0.1 0.4 0.1 0.4-0.4 0.5-0.8 0.5-0.3 0.4z m7.3-5.5l0.4 0.3 0.1 1 0.3 0.4 0.8-0.6 0.5-0.2 0.5-0.1 1.9-0.2 2.7 0.2 0.8-0.2 0.4-0.2 0.3 0.1 0.3 0.2 0.3 0.1 1.1-0.2 0.7 0 0.3 0.1 0.2 0.2 0.5 0.8 0.2 0.2 0.1 0.4 0 1.9-0.1 0.4-0.2 0.3-0.5 0.1-0.5 0-1.2 0.3-2 0.1-3.6 0.7-0.9 0-1.2-0.1-0.4 0-0.2 0.1-0.5 0.3-0.5 0.1-0.4 0.2-0.4 0.1-0.3 0.1-0.1 0-0.3-0.2-0.1-0.1-0.4 0-0.4 0-0.8 0.4-0.2 0.3-0.2 0.1-0.2-0.1-0.3-0.3-0.2-0.1-0.1 0.1-0.5 0.2-0.3 0-0.1-0.2-0.1-0.2-0.2-0.2-0.1-0.4 0.3-0.4 0.7-0.5 0.2-0.3 0.4-0.8 0.1-0.3 1.3-0.9 0.7-0.1 0.2 0 0.5-0.4 0.2-0.1 0.1-0.2 0-0.2-0.2 0-0.5 0.1-0.5 0.2-1.6 0.7-0.6 0 0.1-1 0.2-0.2 0.3-0.2 0.3-0.3 0.1-0.3 0.1-0.3 0.2-0.3 0.2-0.2 0.3-0.2 0.5 0.2 1-0.2 0.5 0z m-34.4 0.7l-0.1 0.7 0.6 1.5 0.3 0.4 0.1 0.2 0.1 0.2-0.1 0.5-0.1 0.3-0.4 0.1-1.3 0.1-0.4 0.1-0.4 0.3-0.2 0.6 0.2 0.8 0 0.4-0.2 0.3-0.4 0.1-0.5-0.2-0.5-0.2-0.2-0.2-0.1-0.2-0.1 0-0.2 0.2-0.1 0.3 0 0.4 0.2 0.4 0.9 1.5 0 0.6-0.9 0.6-0.2 0.1-1.1 0.1-0.2 0.1-0.2 0.3-0.2 0-0.7-0.1-0.2 0-0.5 0.3-0.1 0.2-0.3 0-1.6 0.3-0.2 0.2-0.6 0.6-0.3 0.2-1.4 0.5-0.9 0.1-2.2 0-0.4 0-0.5 0.2-0.3 0-0.5-0.3-1.4-0.2-1.1 0.1-0.8 0.5-0.7 0.6-0.8 0.4-2.8 0.8-0.9 0.5-0.9 0.5-0.3 0.1-0.2 0-0.5-0.1-0.3 0-0.4-0.2-0.4-0.3-0.2-0.2-0.3 0.3-0.3 0.8-0.3 0.1-0.1-0.2-0.3-0.9-0.2-0.4-0.8-0.4-0.9-0.1-0.9 0.1-0.9-0.2-0.8-0.2-0.6-0.1-0.3 0.1-0.3 0.4 0.1 0.5 0.1 0.5 0 0.4-0.8 0.8-0.9 0-1.9-0.6-1 0.1-0.8 0.3-1.3 0.7-0.4 0.1-1.2-0.1-0.6-0.2-0.2-0.1-0.5 0-0.2 0-0.4-0.3-0.9-1-0.2-0.3-0.2-0.5-0.3-0.3-0.4-0.1-0.5 0.2-0.2 0.3-0.2 0.4-0.2 0.2-0.3 0.2-0.5-0.1-0.3-0.2-0.3-0.2-0.3-0.1-0.3 0-0.4 0-0.2 0-0.4-0.4-0.2-0.1-0.3-0.5-0.2-0.1-0.3-0.1-0.5 0-0.5 0-0.9 0.2-0.5 0-0.7-0.1-0.2 0-0.5 0.1-0.2 0-0.3-0.1-1.3 0.8-0.9-0.1-0.8-0.1-0.4-0.2-0.9-0.8-0.4-0.2-0.4 0-0.3 0.1-0.8 0.4-0.8 0.2-1.8 0.3-0.6 0.4-0.2 0-0.1 0.2 0.2 0.3 0 0.1-0.2 0.1-0.3 0.2-0.3 0-0.1-0.2-0.2-1.2-0.2-0.1-0.5-0.1-0.5-0.2-0.3-0.2-0.2-0.4-0.2-0.5 0-3.2 0.1-0.6 0.2-0.5 1.1-1.1 0.1-0.5-0.1-0.5-0.1-0.8 0.7 0.7 0.5 0.4 0.3-0.2 0.6-0.3 0.3-0.1 0.2 0.1 0.1 0.1 0.3-0.1 0.1-0.3 0.2-0.5 0.2-0.4 0.2 0 0.4 0.1 0.3-0.1 0.2 0 0.2 0 0 0.3 0.2 0 0.3-0.2 0.1-0.2 0-0.3 0.2-0.4 0.3 0.3 0.1 0.2 0.2 0 0.2-0.5 0.8-0.7 0.1-0.4 0.3-0.1 1.3-0.6 2.2 0.2 0.3-0.2 0.5-0.7 0.2-0.2 0.3 0.1 0.2 0.4 0.1 0.3 0.2 0.3 0.5 0.1 0.9-0.6 0.4 0.3 0.2 0.1 0.4 0.2 0.3 0.1 0.2-0.1 0.2-0.2 0-0.3-0.2-0.5 0.9 0.3 0.4 0.3 0.2 0.3 0.2 0.4 1.2 0.6 0.4 0.2 1.5-0.2 0.4 0.1 0.3 0.2 0.5 0.1 0.9 0.1 1-0.2 0.4 0 0.4 0.3 0.5 0.6 0.3 0.4 0.5 0.2 1.1 0.4 0.5 0.1 0.4 0 0.3 0.1 0.1 0.1 0.2 0.1 0.6 0 0.2 0 0.2 0.1 0.2 0.3 0.9 0.1 0.2 0.1 0.2 0.2 0.6 0.8 0.5 0.3 0.9 1 0.6 0.2 0.4 0 0.2-0.2 0.3-0.1 0.5 0 0.4 0.2 0.1 0.1 0.1 0.4 0.2 0.1 0.3-0.2 0.1-0.1 0.8-0.5 0.2 0 0-0.4 0-0.3 0.2 0 0.5 0.1-0.1-0.4 0-0.6 0.2-0.4 0.3-0.2 0.3 0.1 0.9 0.9 0.4-0.1 1.2-0.4 0.4-0.1 0.3 0.1 0.2 0.1 0.3 0 0.1-0.1 0.5-0.4 0.3 0.3 0.5 0.1 0.4 0.1 0.9-0.5 0.2-0.1 0-0.2 0.1-0.1 0.8-0.2 0.2-0.1 0.3-0.3 0.3 0 0.2 0.1 0.2 0.2 0 0.2-0.3 0.3-0.1 0.4 0.1 0.4 0.3 0.3 0.2 0.1 0.5-0.1 0.2 0 0.3 0.1 0.4 0.3 0.3 0.1 0.3 0.1 1.9 1.7 0.7 0.3 0.6 0.1 3.5-0.7 0.6-0.2 0.5-0.4 0.3-0.5 0-0.6-0.2-0.1-0.3-0.1-0.1-0.1-0.1-0.2 0.1-0.4 0.2-0.2 1.1-0.5 0.3-0.3 0.8-1 0.4-0.2 0.8 0 0.4-0.2 0.4 0.2 0.3-0.1 0.4-0.3 0.3-0.1 0.5 0 0.3-0.2 0.5-0.7 0.6-0.4 1.3-0.4 1.4-1.5 0.1-0.3-0.2-0.2-0.5-0.1-0.9-0.1-0.5 0.1-0.5 0.3-0.5 0.3-0.4 0.3-0.1 0-0.8 0.1-0.1-0.1-0.1-0.2 0.1-0.3 0.7-1 0.1-0.3 0.1-0.5 0.2-0.3 0.9-0.5 0.4-0.3 0.2-0.1 0.3 0 0.2 0.1 0.2 0.4 0.1 0.1 0.4 0.1 0.4 0.2 0.6 0.4 0.3 0.4 0.1 0.3z",
    IDN1236:
      "M582.8 290.9l-0.7 0.3-0.4-0.1-0.1-0.4 0-0.4 0.1-0.3 0.2-0.3 0.3-0.2 0.8-0.2 0.4 0.5 0 0.7-0.6 0.4z m-20.4-2.9l2 0.2 1.3 0 0.6 0.1 0.4 0.4-0.2 0.4-0.7 0.2-0.7 0-0.3-0.1-0.3-0.3-1.4-0.2-0.4-0.2-0.4 0.1-0.5 0.1-0.5-0.1-0.4-0.1-0.1-0.2-0.1-0.2 0.1-0.1 0.1-0.2 0.3-0.1 0.5 0 0.7 0.3z m-2.7-4.3l0.3 0 0.3-0.4 0.2 0 0.1 0.3-0.1 0.4-0.2 0.6 0 0.3-0.7 0.1-0.8-0.1-0.4-0.2-0.1 0.4-0.2 0.2-0.8-0.4-0.3-0.5 0.1-0.3-0.6 0.1-0.4-0.2-0.3 0.1-0.2-0.5 0.2-0.1 0.6 0.3 0.5-0.2 0.1-0.6-0.1-0.5 0.1-0.5 0.3 0.2 0.4 0.1 0.5 0.7 1.2 0.5 0.3 0.2z m-5.5-13.2l-0.2 0.1-0.2-0.9-0.2-0.7 0-0.4 0.2-2.4-0.1-0.3-0.2-0.1-0.2 0-0.1-0.2 0-0.5-0.3-0.7 0-0.2 0-0.2 0.3-0.5 0.1-0.3 0-1.3-0.2-2.2 0.2-2.9 0.2-1 0.2-0.7 0.3-0.1 0.1 0.1 0.2 0.1 0 0.2 0 0.5 0.2 0.4 0.2 0.3 0.1 0.3 0.1 0.5 0.5 1.4 0.2 0.9 0.1 1 0 0.9-0.2 1-0.5 1.3 0 0.5 0.1 1.2-0.1 0.8-0.1 1.1-0.2 0.4-0.3 0.4 0 0.4 0.1 0.9-0.1 0.4-0.2 0.5z m24-76.3l-1.3 0.8-0.5 0.2-0.3 0.1-0.3 0-0.2-0.1-1-0.5-1.8-1.5-1.5-1-0.4-0.2-0.4-0.1-0.3 0-0.5 0-0.9 0.1-0.8 0.3-0.9 0.5 0-0.1-0.1-0.7-0.2-0.4-0.3 0.2-0.1 0-0.1-0.2-0.2-0.6-0.1-0.2-0.2 0.1-0.2 0.5-0.1 0.1-0.2 0-0.2-0.1-0.1-0.2-0.1-0.2 0.1-0.3 0.3-0.1 0.4-0.1 0.1-0.5 0.3 0.1 0.3-0.1 0.3-0.6 0.3 0.2-0.7-1.4-0.3-0.1 0-0.1-0.1-0.2-0.3-0.3-0.2-0.1-2.7-0.4-0.4 0.1-0.2 0-0.3-0.2-0.2-0.2-0.2-0.1-0.5-0.2-0.5 0-0.3 0.2-0.3 0.2-0.3 0.1-0.5 0-0.4 0.1-1.1 0.6-0.4 0.1-0.4 0.1-0.5 0.1-0.2 0.3-0.1 0.4-0.2 0.3-0.4 0.4-5.4 3.4-0.9 0.7-0.4 0.3-0.7 0.2 0.2 0.3 0.3 0.3 0.1 0.3 0 0.3 0.1 0.3 0.1 0.2 0.2 0.1 0.3 0.2 0.3 1.1 0.2 0.5-0.1 0-0.3 0.4 0.4 0.4 0.5 0.3 1 0.3 0.6 0.4 0.2 0.2 0.1 0.5 0.1 0.3 0.2 0.1 0.4 0-0.1 0.2-0.3 0.4-0.1 0.3 0.1 0.7-0.1 0.3-0.2 0.8 0.1 0.2 0.2 0.5 0 0.2 0 0.2-0.1 0.4-0.1 1.1 0 0.4 0.4 1 0.1 0.4 0 1.8 0.1 0.1 0.4 0.4 0 0.9-0.3 0.8-0.9 1.3-0.4 0.7-0.3 0.8-0.1 0.8 0 3.6 0.1 0.4 0.4 0.8 0.1 0.3 0 0.9 0 0.2-0.1 0.4 0 0.3 0 0.3 0.3 0.7-0.1 0.7-0.5 1.3 0.1 0.8 0.5 0.6 0.3 0.4-0.1 0.4-0.1 0.4 0 0.5 0.1 0.6 0.1 0.4 0.2 0.4 0.7 0.7 0.1 0.4-0.1 0.3-0.2 0.1-0.4 0.4 0 0.2-0.5 2.1 0 0.5-0.2 0.4-0.4 0.2-0.5 0-0.4 0.1-0.4 0.6 0 2.7-0.5 2.6-0.2 0.5-0.2 0.3 0.9 1.4 0.2 0.3 0.3 0.9 0.1 0.3 1 1.2 0.2 0.3 0 0.5 0.9 3.4 0.1 0.8 0.1 0.2 0.4 0.6 0.1 0.4-0.1 0.1-0.6-0.3-0.3 0.1-0.8-0.9-0.1-0.2-0.1-0.3-0.4-0.7-0.1-0.2-0.6 0-0.5 0.2-0.5 0.3-0.5 0.1-1 0.2-0.1 0.1-0.6 0.4-0.4 0.1-0.8 0.3-0.4 0.1-0.1-0.1-0.5 0-1.3-0.2-0.3-0.2-0.3-0.1-0.5-0.1-0.6 0.1-0.4 0.1-0.4 0.2-0.9 0.9-0.1 0.2-0.1 0.5-0.1 0.2-0.4 0.4-0.4 0.3-0.7 0.1-1.1 0.1-1-0.1-0.6-0.4-0.1-0.5 0-0.5-0.2-0.4-0.5-0.2-0.5 0.3-0.2 0.5-0.2 0.3-0.4-0.3-0.1-0.3 0-0.5 0-0.3-0.2-0.2-0.2-0.1-0.2-0.2 0-0.3-0.4 0-0.6 0.1-0.4 0.3 0.3 0.4-0.5 0-0.3-0.1-0.2-0.3 0-0.5 0.1-0.2 0.1-0.2 0.1-0.3-0.1-0.2-0.2-0.2-0.2-0.4-0.7-1.1-0.5-0.8-0.1-0.9 0.1-1 0.2-0.7 0.2-1.4 0.1-0.5 0.3-0.7 0.2-0.7 0.1-0.2 0.2-0.2 0.4-0.2 0.2-0.1 0.3-0.5 0.1-0.3 0.1-0.8 0.3-0.8 0.8-1.5 0.1-0.7-0.7-2.8 0.1-0.8 0.1-0.1 0.4-0.2 0.1-0.1 0.3-0.7 0.1-0.3 0.9-1.6 0.2-0.4 0.3-3.1 0.4-1.5 0-0.8 0-0.2-0.2-0.9-0.3-0.3-0.1-0.2 0.1-0.4 0.5-0.8 0-0.5-0.2-0.9-0.2-0.4 0-0.2 0.2-0.4 0.1-0.2 0-0.2-0.1-0.4 0.1-0.3 0.5-0.7 0.1-0.3-0.4-0.2-0.5 0.1-0.1 0.3-0.1 0.3-0.1 0.5-0.1-0.3-0.1-0.9-0.4-0.7-1-2.4-0.5-0.7-0.2-0.9-0.7-0.9 0-0.3 0.3-0.6 0.3-1.2 0.2-0.4 0.4-0.4 0.1-0.4-0.1-0.3-0.3-1.1-0.1-0.2-0.2-1.3-0.4-1.3-0.1-0.3 0-0.8-0.1-0.8-0.3-0.3-0.5-0.7-0.1-0.2 0-0.2 0-0.3 0.2-0.2 0.2-0.1 0.2-0.1 0.2 0.1 0.3 0.1 0.2 0 0.3-0.1 0.4-0.2 0.8-0.5 0.4-0.2 0.5-0.2 0.9-0.2 0.3-0.2 0-0.2-0.1-0.3-0.6-0.8-1.4-3.3-0.1-0.4 0-0.5 0-0.4 0.1-0.5 0-0.2 0-0.3-0.6-1 0.4-0.1 0.6-0.1 0.4 0 0.4 0 0.8 0.2 0.6 0 1.4-0.4 0.9-0.4 0.2-0.3 0.2-0.2 0-0.2-0.1-0.2-0.3-0.3 0-0.2 0-0.2 0.1-0.5 0-0.2-0.7-1.1-0.1-0.8 0-0.5 0-0.4-0.2-0.2-0.2-0.3 0-0.3 0-0.2 0.2-0.6 0.1-0.3-0.1-0.3-0.1-0.3-0.3-0.4-0.8-0.6-0.2-0.1-0.5-0.2-0.3-0.2 0-0.2 0-0.3 0-0.4 0.1-1 0.1-0.4 0.2-0.4 2.4-2.1 0.3-0.1 0.2 0.1 0.3-0.1 0.2-0.1 0.3-0.2 0.2-0.3 1.1-2 0.8-0.4 1.2-0.8 1.8-0.9 0.4-0.1 0.7 0 1.2 0.1 3 0.9 0.7 0.1 0.4-0.1 0.2-0.2 0.1-0.2 0.2-0.5 0.1-0.2 0.3-0.2 0.4-0.1 0.5 0.2 0.4 0.4 2.3 3.5 0.8 0.9 0.8 0.8 3 2.5 0.9 0.4 11.8 2.4 1.1 0.4 1.1 0.5 0.5 0.3 0.4 0.3 1.2 1.5 1.3 1.2 0.7 0.4 2.3 1.1 0.4 0.4 0.3 0.4 0.2 0.5 0.2 0.6 0 0.4 0 0.5-0.1 0.4-0.1 0.4-0.3 0.6-3.4 3.4-0.4 0.3z",
    IDN1237:
      "M540.8 172.1l-1.1 2-0.2 0.3-0.3 0.2-0.2 0.1-0.3 0.1-0.2-0.1-0.3 0.1-2.4 2.1-0.2 0.4-0.1 0.4-0.1 1 0 0.4 0 0.3 0 0.2 0.3 0.2 0.5 0.2 0.2 0.1 0.8 0.6 0.3 0.4 0.1 0.3 0.1 0.3-0.1 0.3-0.2 0.6 0 0.2 0 0.3 0.2 0.3 0.2 0.2 0 0.4 0 0.5 0.1 0.8 0.7 1.1 0 0.2-0.1 0.5 0 0.2 0 0.2 0.3 0.3 0.1 0.2 0 0.2-0.2 0.2-0.2 0.3-0.9 0.4-1.4 0.4-0.6 0-0.8-0.2-0.4 0-0.4 0-0.6 0.1-0.4 0.1 0.6 1 0 0.3 0 0.2-0.1 0.5 0 0.4 0 0.5 0.1 0.4 1.4 3.3 0.6 0.8 0.1 0.3 0 0.2-0.3 0.2-0.9 0.2-0.5 0.2-0.4 0.2-0.8 0.5-0.4 0.2-0.3 0.1-0.2 0-0.3-0.1-0.2-0.1-0.2 0.1-0.2 0.1-0.2 0.2 0 0.3 0 0.2 0.1 0.2 0.5 0.7 0.3 0.3 0.1 0.8 0 0.8 0.1 0.3 0.4 1.3 0.2 1.3-0.1-0.1-0.5-0.1-0.2-0.2-0.5 0.1-0.6-0.3-0.7-0.4-0.6-0.2-0.7-0.1-0.3 0-0.1 0.1-0.2 0.3-0.9 0.7-0.3 0.2-0.4 0.1-0.4-0.1-0.4-0.1-0.4-0.1-0.3 0.1-0.5 0.4-0.4 0.1-1.6 0.1-0.6 0.3 0.1 0.8-0.2-0.1-0.3-0.3-0.2-0.1-0.2 0.2-0.3 0.5-0.2 0.1-0.3-0.2-0.2-0.4-0.8-2.3-0.4-0.7-0.3-0.4-0.1-0.5-0.1-0.4 0.1-0.4 0.2-0.4 0-0.4-0.4-0.8-0.2-1.4-0.2-0.5-0.1-0.2-0.1-0.1-0.3-0.1-0.2-0.2-0.2-0.4-0.2-0.5 0-0.2 0.1-0.2 0.3-0.4 0.2-0.1 0.2 0 0.5 0.2 0.3 0.1 0.2-0.1 0.1-0.3 0.1-1.8 0.2-0.6 0.4-0.5 0-0.3 0.1-0.6-0.1-0.2-0.1-0.2-0.2-0.2-0.2-0.1-0.6-0.2-0.4 0.1-0.9 0.4-0.1-0.5-0.2-0.9-0.1-0.5 0.1-0.2 0.3-0.4 0.1-0.3 0-0.9 0.1-0.4 0.2-0.5 0.3-0.5 0.4-0.1 0.4 0.1 0.3 0.3 0.3 0.3 0.5 0 0.5-0.2 0.9-0.6 0.5-0.5 0.5-0.2 0.2-0.2 0.2-0.2 0.2-0.8 0.3-0.4 0.4-0.2 0.4-0.2 1.2-0.9 0.1-0.2-0.1-1.4-0.2-0.5 0-2.2 0.1-0.2 0.1-0.3 0.1-0.3-0.2-0.3 0.8-1.2 0.3-0.6 0.7-2.4 0.4-0.6 0.7-0.4 0.5-0.2 0.3 0.1 0.3 0.1 0.4 0.1 0.3-0.2 0.1-0.6 0.3-1.9 0-0.3-0.1-0.1-0.3-0.2-0.3-0.4-0.1-0.4-0.5-1.9-0.1-0.9 0.1-0.5 0.5-0.8 0.1-0.4-0.6-1.5-0.1-0.2-0.1-1.8-0.1-0.3 0.1-0.2 0.2-0.2 0.4-0.4 0.2-0.3-0.1-0.4-0.4-1 0-0.8 0.3-0.7 0.5-0.6 0.5-0.4 0.4-0.5 0.2-0.3 0.3-0.1 0.3-0.1 0.3-0.2 0.3-0.4 0.1-0.8 0.3-0.8 0.2-1.3 0.2-0.3 0.2-0.3 0.2-0.3 0.2-1 0.1-0.3 0.3-0.2 0.6-0.4 0.1 1-0.1 2.5 0.1 0.7 0 0.6 0.5 1.4 0.2 0.7-0.1 0.4-0.2 0.3-1.4 0.9-0.3 0.3-0.3 0.4-0.2 0.7 0 0.5 0.2 0.4 0.2 0.2 0.4 0.2 2.5 1 0.4 0.2 0.3 0.3 0.2 0.3 0.3 0.6 0.3 2.3 0.1 0.6 0.3 0.4 0.9 1.3 0.6 0.5 0.6 0.8 0.3 0.6 0.2 0.4 0 0.3-0.5 1.8 0 0.3 0 0.5 0.1 0.3 0.2 0.3 0.2 0.2 0.2 0.1 0.4 0.1z",
    IDN1136:
      "M47.3 84.1l0.1 0.4 0 0.4-0.1 0.1-0.5 0.3 0 0.1 0 0.3-0.2 0.1-0.2 0-0.8-1.5 0.2 0 0.2-0.3 0.2-0.1 0.1-0.2 0.5 0 0.3 0.1 0.2 0.3z m-10.9 0.4l-0.4 0.1-0.3-0.2 0-0.6 0.1-0.2 0.1-0.2 0.2-0.1 0.3 0.1 0.3 0.1 0.2 0.2 0.1 0.2-0.1 0.3-0.5 0.3z m11.9-2.9l0.4 0 0.2-0.1 0.3-0.2 0.3-0.2 0.4 0 0.4 0.1 0.1 0.1-0.1 0.3 0.5 0.5 0.3 0.2 0.1 0.2 0.1 0.4 0.1 0.5 0.2 0.5 0 0.4 0 0.6-0.2 0.3-0.3 0.3 0-0.4 0-0.2-0.3 0-0.2-0.3-0.2-0.3-0.2-0.4-1-0.9-0.1-0.3-0.4-0.4-2.3-0.8 0.1-0.1 0.4-0.1 0.9-0.2 0.2 0 0.1 0.1 0.2 0.4z m-27.8-15.2l0 0.8-0.4-0.4-0.2 0.1 0 0.9 0.7-0.4 0.3 0.4 0.8 0.4 0.3 0.8 0.5 0.3 0.6 0.1 1.3 0.3 0.4 0.2 0.4 0.3 0.1 0.4-0.7 0.9 0.1 0.4 0.3-0.2 0.3 0 0.1 0.1 0.4 0.3 0.2 0 0-0.2-0.1-0.1-0.3-0.2 0-0.2 0.3 0 1.9 1.7 0.2 0.2 0.7 0.3 0.3 0.1 0.4 0.1 0.3 0.3 0.5 0.7 0.1 0.3 0.1 0.4 0.2 0.4 0.3 0 0.1-0.1 0.1-0.4-0.1-0.7 0.4 0.4 0.1 0 0.1 0 0.5 0.4 0.4 1.1 0.3 0.5 0 0.4 0.1 0.4 0 0.3-0.3 0.1-0.8 0.3-0.2 0.1-0.2 0-0.9-0.5-0.4 0.2-0.4 0-0.3-0.1-0.3-0.3 0.5-0.4-0.5-0.3-0.5-0.6-1-0.3-3.7-2.8-0.5-0.3-0.5-0.2-0.2 0-0.6 0-0.1-0.1-0.2-0.2-0.1 0-0.2 0.3-0.4 0.1-0.2 0-0.4-0.3-0.4-0.1-0.2-0.1-0.1-0.2 0-0.2-0.1-0.2-0.2-0.2-1.6 0-0.1-0.1 0-0.3 0.2-0.5-0.1-0.2-0.7-0.4 0.1-0.3-0.3-0.3-0.3-0.1 0-0.2 0.1-0.3-0.3 0-0.4 0-0.2 0-0.1-0.3 0-0.4 0.1-0.4 0.3-0.2 1.2 0 0.3-0.1 0-0.2-0.1-0.2-0.2-0.1 0-0.2 0.1-0.4 0-0.2 0.3-0.5 0.1-0.3 0.2 0.1 0.3 0.3 1.5 0.1 0.6 0.2z m51.2-30l-1.7-0.2-0.3 0.1-0.6 0.1-0.2 0.1-0.3 0.3-0.2 0.2-0.3 0.1-0.6 0-0.2 0.1-0.1 0.2 0.3 0.4 0 0.2-0.1 0.2-0.2 0.3-0.1 0.2-0.3 1-0.2 0.7-0.2 0.9 0 0.2-0.1 0.5-0.2 0.3-0.1 0.4-0.1 0.4-0.3 0.3-0.7 0.5-0.2 0.3-0.2 0.2 0 0.2-0.1 0.2-0.2 0-0.3 0-0.4-0.3-0.1 0.6 0 0.5 0.1 0.4-0.3 0.5-2 1.7-0.2 0.2 0 0.2 0.2 0.3 0.5 0.9 0.3 0.5 0.3 1.2 0.2 0.3 0.2 0.2 0.3 0.2 0.2 0.2 0.1 0.2 0.1 0.5 0.2 0.3 0.3 0.3 0.1 0.2-0.1 0.2-0.1 0.4 0 0.2 0 0.3 0.2 0.3 0.1 0.3 0.2 0.2 0.9 0.6 0.1 0.2 0.3 0.6-0.3 0.7-0.5 0.3-1.4 0.3-0.3 0.2-0.2 0.1 0.2 0.3 0.3 0.3 0.2 0.2 0.2 0.4 0 0.4 0.1 0.2 0.6 0.8 0.1 0.2 0 0.3-0.1 0.6-0.2 0.2-0.2 0-0.4-0.1-0.1 0-0.1 0.3 0.1 0.3 0.4 1.7-0.1 0.9 0 0.3 0.1 0.1 0.2 0.2 0.3 0.1 0.4 0.1 0.2 0.1 0.7 0.9 0.2 0.2 0.3 0.2 0.4 0.1 0.2 0.1 0.2 0.3 0.1 0.3-0.3 0.4-0.1 0.4 0.1 0.4 0.2 0.7 0.3 0.4 0 0.1 0 0.2-0.3 0.3-0.4 0.3 0 0.1 0 0.4-0.1 0.2-0.1 0.4-0.1 0.5 0.2 1.1 0.5 1.5 0.1 0.3 0.2 0.1 0.2 0 0.2 0.1 0.2 0.2 0.1 0.5 0.4 0.8 0.1 0.8 0 0.4-0.5 2.7-0.3-0.2-2.3-1.1-0.6-0.6-0.5 0.1-1.1 0.4-0.3 0.1-0.4-0.1-0.4-0.3-0.3 0.1-0.2-0.1-0.1-0.2-0.2-0.1-0.2 0-0.4 0.1-0.2 0-0.3-0.2-0.8-1.4-0.7-0.6-0.2-0.4-0.2-0.4 0.1-2.5-0.4-3.1-0.7-3.9-0.2-0.4-0.2-0.1-0.3-0.1-0.9-0.3-1.1-0.5-0.5-0.1-0.5-0.1-0.4-0.1-0.4-0.4-1.5-1.9-0.4-0.6-0.3-0.7-0.4-1.9-0.3-0.8-0.6-0.5-0.8 0-0.5-0.1-0.2-0.2-0.1-0.3-3.2-5.6-0.5-0.5-1.7-1.3-0.3-0.6-0.3-0.7-0.2-0.3-0.4-0.3-0.5-0.3-0.1-0.1-0.6-0.2-0.7-0.5-0.4-0.1-4.3 0.1-0.9-0.2-0.9-0.5-1-1-3.3-4.4-1.5-1.5-0.2-0.5-0.1-0.1-0.1-0.1-0.4-0.1-0.1-0.2-0.2 0-0.3-0.1-0.2 0.1-0.2 0.1-0.3-0.3-1-1.2-0.4-0.2-0.4-0.1-0.4-0.2-2.4-2.6-1.9-1.9-0.2-0.3-1-0.8-0.7-1-1.5-1.1-0.9-1-0.4-0.2-0.5 0-0.2 0-0.1-0.2 0.1-0.1 0.2-0.2 0-0.2 0-0.1-0.4-0.1-0.6-0.4-0.3-0.4-0.6-1.1-0.4-0.6-0.2-0.1-0.4-0.3-0.3-0.4-0.1-0.4-0.1-0.3-0.3-0.6-0.1-0.5-0.3-0.5-0.1-0.6-0.7-1.7-0.2-0.3-0.3-0.4-0.3-0.3-0.1-0.4-0.2-0.3-0.4-0.1 0.4-0.6 0.1-0.5-0.3-0.4-0.3-0.4-0.4-0.3-0.2-0.2 0-0.2-0.1-0.3-0.1-0.3-0.1-0.3-0.3-0.1-0.5-0.1 0.2-0.3 0.3-0.5 0.3-0.4 0-0.3 0.2-0.4 0.2-0.4 0-0.3-0.1-0.3-0.3-0.6 0.3-0.2-0.2-0.3-0.3-0.3 0-0.4-0.5-0.6-0.1-0.3 0.3-0.5 0.3-0.2 0.3 0.1 0.3-0.1 0.4 0.1 0.2 0 0.2-0.1 0.3-0.3 0.3-0.1 0.4-0.3 0.2-0.1 0.3 0 0.2-0.1 1-0.6 0.4-0.1 0.4 0.1 0.6 0.6 0.4 0.2 0.1 0.2 0.2 0 0.2-0.1 0.3-0.3 0.9-0.2 0.8 0.1 3.3 1.1 1.7 1 0.3 0.2 0.4 0 0.3 0.2 0.1 0.4 0.2 0.9 0.6 0.8 2.7 2.2 0.7 0.4 0.9 0.3 3.5 0.5 0.3 0.1 0.9 0.5 0.4 0.1 1 0.2 0.5 0 0.4-0.2 0.4-0.2 0.4 0.2 0.4 0.2 0.5 0.2 0.9 0 1.8-0.2 0.7-0.2 2.2-0.7 0.9-0.5 0.5 0.1 1 0.3 0.2 0 0.4-0.1 1.1-0.1 1.2 0.5 1 0.3 0.7 0.5 0.9 0.3 0.4 0.6 0.2 0.2 0.4 0.1 0.7 0.3 0.9-0.2 4.9-2.1 0.7 0.2 3 3.7 3.6 2.9 0.9 0.4 0.5 0.3 0.3 0.4 1 1.7 0.2 0.4 0.2 1.9 0.2 0.6 0.5 0.9 0.1 0.3-0.1 0.5-0.2 0.6-0.1 0.4 0.1 0.1 0.6-0.1 0.3 0 0.2 0.3 0.1-0.3 0.2 0 0.3 0.1 0.2 0.3 0.1 0 0.5-0.1 0.6 0.1 0.4 0.3 0.4 0.4 0.2 0.4 0.1 0 0.1-0.1 0.2-0.2 0.3 0.3 0.5 0.6 0.3 0.3 0.4 0.4 0.1 0.2 0.1 1.1-0.3 1.6 0 0.1z m-67.1-29.2l0.3 0.4-0.3 0-0.2 0-0.1 0.1-0.2 0.2-0.2-0.2-0.5-0.1-0.3-0.1 0-0.2 0.2-0.2 0.2-0.2 0.2-0.1 0.1-0.4 0.3 0.1 0.5 0.7z m-2.1-2.5l0.4 0.4 0.5 0.4 0.1 0 0.1 0.3 0 0.2-0.2 0.3-0.6-0.4-0.8 0.6 0-0.2 0-0.4-0.2 0 0-0.1 0.2-0.2 0-0.2-0.2-0.2 0.2-0.1 0-0.2-0.2-0.1-0.2 0-0.4 0.1-0.2-0.1 0-0.2 0.2-0.2 0.3-0.1 0.5 0 0.5 0.4z m4.1-2.8l0.3 0.3 0.3-0.1 0.2-0.3 0.2-0.3 0.2-0.2 0.3 0 0.3 0.2 0.6 1 0 0.8-0.1 0-0.2-0.3-0.3-0.2 0 0.7-0.1 0.3-0.2 0.1-0.4-0.1-0.4-0.1-0.4-0.2-0.2-0.2-0.2-0.4-0.1-0.4-0.2-0.3-0.5-0.3-0.2-0.4-0.1-0.3 0-0.2 0.5 0 0.2 0.1 0.3 0.2 0.2 0.6z",
    IDN492:
      "M190.8 137.1l-0.1 0.1-0.8-0.1-0.3 0.1-0.6 0.3-0.5 0.1-0.5 0.3-0.3 0.1-0.4-0.2-0.3-0.1-0.2 0.1-0.5 0.1-1.2-0.4-0.7 0.1 0-0.7 0.6-1.1 0.8-0.9 0.7-0.4 0.4 0 1.2 0.2 0.2 0.1 0.2 0.3 0.5 0.2 0.9 0.2 0.5 0.2 0.4 0.4 0.3 0.6-0.3 0.4z m-19.1-13.7l-0.6 0.2-0.2-0.3 0.4-0.3 0.6-0.2 0.7-0.2 0.2 0.3-0.4 0.2-0.7 0.3z m4.5-6.4l-0.1 0.1-0.1 0-0.2-0.2-0.1-0.3-0.3-0.6 0-0.3-0.2-0.3 0-0.1 0.2-0.1 0.2 0.1 0.2 0.2 0.2 0.3 0.2 0.2 0.1 0.4 0 0.3-0.1 0.3z m2.2 1.4l-0.3 0-0.4-0.2-0.2-0.3-0.1-0.4 0-0.4 0.5-1.9 0.4-0.7 0.7-0.3 0.4 0.1 0.4 0.2 0.3 0.3 0.3 0.3 0.2 0.5 0.2 0.4 0.1 0.5 0 0.6-0.1 0.6-0.3 0.2-1.8 0.4-0.3 0.1z m-1.7-4.8l-0.3 0.3-0.1 0-0.1-0.2-0.1-0.5 0-0.1 0.2-0.3 0.2-0.3 0.2-0.1 0.2 0 0.1 0.3-0.1 0.4-0.2 0.5z m-10-5.7l0.4 0.1 0.3-0.1 0.6-0.3 0.3-0.1 0.5 0 0.5 0.1 0.4 0.2 1.1 0.9 1.6 0.8 2.5 1.7 0.3 0.4 0.1 0.2 0.3 0.9 0.1 0-0.2 0.4-0.1 0.8-0.2 0.4-0.4 0.2-0.2 0-0.2-0.1-0.4-0.5-1.1-1-0.8-0.5-0.9-0.1-1.8 0.1-0.5 0-0.9-0.3-0.5 0-1.8 0.4-0.9 0.2-0.9-0.3-1-0.8-0.2-0.1-1.2-0.9 0.1-0.4 0.3-0.5 0.5-0.3 0.9-0.2 0.3-0.3 0-0.4-0.7-2.1 0-0.8 0.4-0.6 0.9-0.2 0.6 0.3 1.1 1.3 0.2 0.2 0 0.3-0.2 0.4 0 0.3 0.3 0.2 0.5 0.1z m8.5-1l0.9 0.9 1.1 1.6 0.8 0.7 0.2 0.3-0.1 0.5-0.9 0.6-0.9-0.2-2.9-1.8 0-0.1-1-0.8-0.3-0.2-0.7-0.3-0.4 0-0.4-0.1-0.3-0.3-0.2-0.3-0.2-0.2-0.4-0.1-1.3 0.1-0.5 0.1-0.4 0.3-0.5 0.1-0.5 0 0-0.3 0.2-0.4 0.8-0.8 0.3-0.4 0.3-0.9 0.3-0.4 0.9-0.3 1 0.1 1.9 0.7 1.7 0.9 1.5 1z m-12.4 1.8l-0.4 0-0.2 0.1-0.6 0.5-0.2 0.1-0.7-0.1-0.7-0.6-1.5-1.6-0.3-0.7-0.3-0.3-0.1-0.4 0-0.5 0.2-1 0-0.8 0-0.3-0.5-0.4-0.2-0.4-0.2-0.5 0-0.4 0-0.2 0.2-0.4 0.1-0.2-0.2-0.9 0.1-0.5 0.1-0.2 0.3-0.1 0.5 0 0.8 0.2 0.7 0.5 1.2 1.3 1.6 1.2 0.4 0.3 0.1 0.2 0.1 0.5-0.1 0.6-0.6 2 0 0.5 0 0.6 0.4 1.2 0.1 0.5-0.1 0.2z m-4.9-13.2l1.3 0.2 0.6 0 0.3 0 0.2 0.1 0.4 0.3 0.2 0.1 1.9 0.5 0.6 0.5 0.1 1.1 0 1.7 0.3 1.5 0 0.4-0.7 0.1-1-0.6-1.3-1.3-0.9-1.2-0.4-0.2-0.2 0-0.4-0.2-3.3-0.5-0.8-0.4-0.9-0.8-0.6-0.8-0.5-0.8 0.1-0.7 1-0.3 0.4 0.1 1 0.5 0.4 0.3 0.3 0.2 0.5 0.1 1.4 0.1z m-11.2-10.6l0.8 1 0.2 0.6 0.1 0.8-0.1 0.5-0.7 0.8-0.2 0.5 0.1 1-0.1 0.4-0.3 0.5-1 0.7-0.2 0.2-0.2 0.3-0.5 0.2-0.6 0.1-0.5 0-1-0.2-0.8-0.4-0.7-0.7-0.4-0.8-0.3-1-0.1-0.5-0.6-0.8-0.1-0.4 0.3-1.8 0.3-0.7 0.5-0.5 0.8-0.1 0.4 0.1 0.7 0.2 0.5 0 0.3-0.2 1.1-1.1 0.7-0.2 0.7 0.4 0.6 0.6 0.3 0.5z m37.2 60.9l-0.2 0.1-7.1 0.5-3.1-0.3-0.9 0.1-2.4 0.6-0.3 0.2-0.2 0.2-0.4 0.3-0.8 1-0.2 0.1-0.6 0.5-0.2 0.1-0.3 0.5-0.3 0.7-0.2 0.2-0.3 0.3-0.6 0.4-0.2 0.3-0.4 1.1-0.3 0.4-0.4 0.1-2-0.4-0.5-0.2-0.2-0.1-0.2-0.4-0.4-0.3-0.2-0.1-0.6-0.2-0.1-0.1-0.1-0.2-0.1-0.2-0.2-0.3-1.1-1-0.1-0.2-0.2-0.5-0.1-0.3-0.2-0.1-0.2-0.1-0.9-0.3-0.3 0-0.5 0.1-0.6 0.2-0.4 0.1-1.1 0.2-1.2-0.1-0.4 0.1-0.4 0.2-0.5 0.3-0.4 0.4-0.3 0.5-0.3 0.7-0.4 0.3-0.2 0.1-2.4 0.9-0.2-0.5-0.2-0.2-0.4-0.4-0.2-0.1-1.1-0.4-2-0.4-1.2-0.4-0.7-0.4-1.3-1.4-2.2-1.3-2.1-1.8-4.2-5-0.9-1.6-0.5-0.1-0.8-0.3-1.8-1.3-0.8-1.3-0.4-0.6-0.1-0.3-0.2-0.3-0.1-0.8-0.1-0.3-0.6-1.1-0.1-0.5 0-0.2 0-0.2 0.3-0.2 0.2 0 1-0.1 0.3 0 0.2-0.1 0.1-0.2 0-0.1-0.1-1.4 0-0.5 0.3-1.9 0-0.4 0-0.2-0.1-0.3-0.2-0.3-0.2-0.3-0.6-0.6-0.3-0.4-0.1-0.1-0.2 0-0.4 0.2-0.1-0.1-0.9-0.9-0.5-0.4-0.9-0.6-1.6-0.7-0.9-1.1-0.4-0.3-0.4-0.1-0.4-0.1-0.7 0.1-0.3 0.1-0.2 0.1-0.3 0.4-0.1 0.2-0.7 0-2.3-0.9-0.8-1.6-0.2-0.2-0.4-0.5-0.2-0.3-0.6-1.7 0-0.2 0.1-0.2 0.2-0.2 0.4-0.4 0.3-0.3 0-0.3-0.2-0.4-0.5-0.4-0.1-0.6 0-0.4 0.1-0.3 0.2-0.4 0.1-0.2 0.4-0.4 0.1-0.2 0-0.3 0-0.9 0.1-1.4 0-0.5 0-0.3-0.2-0.5 0-0.3 0.1-0.2 0.2-1 0.1-0.5-0.1-0.3-0.1-0.3-0.1-0.2-0.2-0.2-0.3-0.2-0.9-0.5-0.2-0.2-0.1-0.2 0-0.2 0-0.8-0.1-0.2-0.1-0.3-0.2-0.2-1-0.8-0.1-0.3 0-0.2 0.3-0.3 0.2-0.2 0.4-0.2 5.3-2.4 1.4-0.8 0.2-0.2 0.2-0.3 0.2-0.3 0-0.4 0-0.5-0.2-0.6-0.8-1.8-0.5-1.4-0.2-0.4-0.2-0.2-0.9-0.7-0.2-0.2-0.2-0.3-0.1-0.5 0.1-0.9 0.2-0.8 0.3-1 0.1-0.7-0.2-2.2-0.3-1.4-0.4-1 0-0.7-0.1-0.8 0.4-3 0.4-1.3 1.5 4.3 0.5 1 0.6 0.8 1.6 1.6 1.2 0.9 1.2 0.6 1-0.1 2.7 1.9 0.5 0.2 0.5 0.5 0.1 0.1 0.4 0.3 0.3 0.6 0.3 0.6 0.2 0.5 0 0.7 0.3 0.7 0.3 0.4 0.6 0.2-0.2-0.3 0.1-0.4 0.1-0.5-0.3-0.5-0.3-0.4-0.1-0.4-0.2-1-0.5-1-1.3-1.8-0.5-1 0-1 0.2-0.9 0.6-0.7 1-0.3 0.5-0.1 3.1 0.2 0.2 0.3-0.1 0.8 0.3 0.5 2.4 1.6 2.6 2.1 0.4 0.5 0.2 0.5 0 0.5-0.1 0.9 0.1 0.5 0.5 1.2 0.6 1.9 0.4 0.8 0.7 0.6 1.4 0.6 0.8 0.2 0.8 0.3 0.5 0.1 1.8-0.4 0.8 0 0.9 0.2 0.6 0.4 5.3 4.5 2.1 1.1 0.5 0.6 0.2 1-0.1 0.8 0 0.6 0.2 0.2 0.4 0.2 0.3 0.3 0.2 0.3 0.1 0.4-0.2 1.7 0 0.8 0.3 1 0.7 0.9 1.8 1.4 2.2 2.4 0.9 0.7 1 0.5 0.5 0.2 0.4 0.1 0.9 0 0.5 0 0.7-0.2 0.4-0.1 2.5 0.4 2.1 0.1 0.8 0.4 0.8 0.7 2.2 2.6 0.6 0.9 0.2 1-0.4 0.6-0.8 0.5-1.6 0.7-0.9 0.6-0.5 0.3-0.8 0.2-2.5 1.3-0.3 0.2-0.4 0.2-1.5 0.3-0.4 0.2-0.3 0.3-0.4 0.8-0.3 0.1-0.5-0.1-0.4-0.3-0.8-0.8-0.3-0.2-0.6-0.1-0.5 0-0.1 0.1 0.2 0.1 0.2 0.1 0.5 0 0.1 0 0.2 0.1 0.2 0.3 0.5 0.5 0.6 0.5 0.7 0.3 0.7-0.4 0.1-0.1 0.4-0.5 0.2-0.1 0.5-0.3 0.2-0.1 0.4-0.1 1 0.1 0.5-0.1 1.2-0.5 1.4-0.2 0.4-0.1 1.5-1 0.5-0.1 0.3-0.1 1.1-1.1 0.4-0.2 0.5-0.2 0.5-0.1 0.4-0.1 0.5-0.2 0.4-0.4 0.4-0.9 0.5-0.4 1.2-0.2 0.6-0.3 0.6-0.4 0.6-0.1 0.6 0.1 0.7 0.3 1.3 0.7 1.3 1.1 1 1.2 0.4 1.5 0.2-0.5 0.2-0.2 0.2-0.1 0.2 0 0.5 0.2 0.5 0.2 0.5 0.3 0.4 0.4 0.3 0.4 0.3 0.8 0.9 4.5 0.2 0.2 0.1 0.1-0.1 0.2-0.2 0.4-0.2 0.1-0.3 0-0.5-0.1-1.8 0.2-0.2 0.1 0 0.4-0.1 0.1-0.6 0.1-0.2-0.1-0.2-0.2-0.2-0.4-0.2-0.2-0.4 0.1-0.1 0.1-0.1 0.1 0 0.3 0.3 0 0.1 0.2-0.1 0.6 0.2 0.5-0.3 0.2-0.4 0.1-0.3 0.1-0.7 0-0.3 0.1-0.2 0.2-0.1 0.7-0.3 0.5-0.6 0.4-0.6 0.3-2.4 0.5-0.7 0.4 0.4 0 0.6 0.1 0.3 0 0.4 0 0.7-0.3 0.3-0.1 0.6-0.2 0.8-0.4 0.6-0.1 0.3 0.4-0.1 0.5-0.9 0.8-0.2 0.6-0.2 0.4-0.6 0.3-1.4 0.2 0 0.2 0.8 0.3 0.4 0.1 0.4-0.2 0.2-0.1 1.2 0 0.4 0.1 0.2 0.1 0.2 0.2 0.2 0.1 0.5 0.1 0.8 0.5 0.2 0.3-0.1 0.4-0.4 0.4-0.6 0.3-0.7 0.3-2.1 0.3-0.4-0.1-0.2-0.4-0.4-0.9 0.2 1.4 0.1 0.2 0.4 0.3 0.2 0.3 0.1 0.5-0.2 0.6-0.3 0.6-0.5 0.4 0 0.1 0.4 0.3-0.1 0.3-0.4 0.3-0.5 0 0.3 0.4 0.4 0.3 0.5 0.3 0.8 0.1z",
    IDN539:
      "M120.9 198.6l-0.1 0.2-0.5-0.1-0.3-0.4 0-0.5 0.3-0.3 0 0.4 0.2 0.2 0.4 0.5z m-1.5-2.3l0.2 0.4 0 0.6-0.2 0.4-0.4-0.1-0.2 0.1-0.3 0.1-0.2-0.1-0.2-0.1-0.4 0.3-0.1 0.2 0.1 0.1 0.3 0.1 0 0.1 0 0.2-0.1 0.2 0.3 0.6 0.3 0.6 0.9 1 0.3 0.7-0.4 0.4-0.3-0.2-0.4-0.5-0.2-0.2-0.3-0.2-0.4-0.2-0.2-0.1 0-0.1 0-0.4 0-0.2-0.4 0-0.5-0.4-0.1-0.2 0-0.3 0.1 0 0.1 0.2 0.3 0.1 0.1-0.1-0.1-0.2-0.2-0.3-0.2-0.5 0-0.2 0.1-0.3 0.1-0.3-1.2-1-0.3-0.1-0.4 0-0.2-0.1 0.1-0.3-0.2-0.2-0.7-0.9-0.1-0.2-0.1-0.3-0.3-0.3-0.1-0.3 0.1-0.3 0.2-0.2 0-0.2 0-0.6-0.4-1.5 0-0.5 0.2-0.2 0.8-0.4 0.3 0.1 0.2 0.1 0.1 0.2 0.5 0.6 0.1 0.1 0.3 0.2 1.3 1.3 0.6 0.4 0.7 1.2 1.1 1 0.1 0.5 0 0.3-0.1 0.4z m-5.7-6.7l-0.7 0.1-0.3 0.2-0.1 0.2-0.2 0.6-0.1 0.2-0.5 0.2-0.6-0.1-0.5-0.2-0.3-0.2-0.1 0.3-0.2 0.3-0.2 0.1-0.3-0.1-0.1-0.3-0.1-0.8-0.1-0.4-0.3 0 0-0.5 0.3-1.2 0-0.6-0.1-0.5-0.2-0.3-0.4-0.2 0.2-0.2 0-0.2-0.2-0.3-0.2-0.5 0-0.1 0.2-0.9 0.1-0.4 0.2-0.2 0.4 0.1 0.3 0.3 0.2 0.3 0.2 0.2 1.2 1.1 0.4 0.5 0.2 0.2 0.8 0.2 0.3 0.2 0.1 0.4 0.1 0.2 0.6 0.5 0.1 0.3 0 0.3 0.2 0.4 0 0.3 0 0.3-0.3 0.2z m-10.8-13.8l0.3 0.7 1.2 1.7 0 0.4 0.1 0.1 0.1 0.1 0.7 0.4 0.1 0.2 0.6 0.9 0.2 0.5 0 0.2-0.1 0.3-0.2 0-0.1-0.1-0.1-0.5-0.2-0.1-0.6 0-0.2-0.1-0.4-0.3-0.2-0.2-0.2 0-0.6-0.1-0.2 0-0.3-0.3-0.3-0.4-0.3-0.3-0.5-0.1-0.9 0.1-0.1-0.1 0-0.2 0.2-0.3 0.1-0.2-0.3-0.2-0.2 0.1-0.1-0.4-0.2 0-0.1 0.3-0.2-0.2-0.3-0.7-0.5-0.6-0.1-0.2 0.1-0.2 0.2-0.1 0.3 0.1 0.2-0.1 0-0.2-0.3-0.4 0-0.9 0.3-0.7 0.7-0.3 0.8 0.1 0.2 0.2 0.2 0.3 0.3 0.2 0.4 0.1 0.2 0.2 0.2 0.5 0.1 0.8z m-17.1-25.8l0.4 0.5 0.2 0.5-0.1 0.4-0.2-0.1-0.2-0.1-0.2-0.1-0.2 0 0.2 0.4 0.2 0.2 0.1 0.3 0.1 0.4 0.1 0.3 0.3 0.3 0.4 0.1 0.2 0.3 0.2 0.3 0.3 0.8 0.2 0.3 0.4 0.3 0.1 0.2 0.1 0.5 0.2 0.2 0.4 0.4 0.1 0.4-0.1 0-0.2 0.2-0.1 0.2 0.2 0.2 0.4 0.1 0.2 0.3 0.2 0.8 0.4 0.7 0.6 0.5 0.4 0.5 0.1 0.9-0.2-0.1-0.6-0.5-0.1 0 0.1 0.5 0.3 0.4 0.8 0.8 0.2 0.1 0.2 0.1 0.1 0.1 0.1 0.2 0 0.6 0 0.4 0.2 0.1 0.3 0 0.4 0 0.3 0.2 0.2 0.3 0.1 0.4-0.1 0.3 0.3 0.4 0.2 0.7-0.1 0.7-0.4 0.5-0.2-1.5-0.2-0.4-0.6-0.8-0.3 0.2-0.3 0.1 0.2 0.2 0.8 1.7 0.2 0.9 0 0.3-0.2 0.2-0.3-0.1-0.5-0.1-0.6 0-0.4 0.1-0.3 0.2-0.3 0.2-0.4 0.2-0.3-0.1-2.5-1.3-0.6-0.6-1.3-0.5-0.3-0.2-0.9-1.3-0.4-0.2-0.1-0.1 0.2-0.8-0.4-0.9-3.5-5-0.3-0.2-0.2-0.2 0.1-0.3-0.4-0.8-0.2-0.2-0.2-0.5 0-0.4 0.6-0.9 0.4-0.9 0.2-0.5 0-0.5 0-1 0-0.5 0.2-0.4 0.2-0.2 0.3-0.1 0.4-0.1 0.5 0 0.3 0 0.7 0.3 0.4 0 0.3-0.2 0.5-0.5 0.3-0.1 0.9-0.2 0.4 0.1-0.2 0.4 0.6 0.1z m27.3-36.9l0.5 0.4 0.2 0.4 0 0.3-0.3 0.3-0.4 0.4-0.2 0.2-0.1 0.2 0 0.2 0.6 1.7 0.2 0.3 0.4 0.5 0.2 0.2 0.8 1.6 2.3 0.9 0.7 0 0.1-0.2 0.3-0.4 0.2-0.1 0.3-0.1 0.7-0.1 0.4 0.1 0.4 0.1 0.4 0.3 0.9 1.1 1.6 0.7 0.9 0.6 0.5 0.4 0.9 0.9 0.1 0.1 0.4-0.2 0.2 0 0.1 0.1 0.3 0.4 0.6 0.6 0.2 0.3 0.2 0.3 0.1 0.3 0 0.2 0 0.4-0.3 1.9 0 0.5 0.1 1.4 0 0.1-0.1 0.2-0.2 0.1-0.3 0-1 0.1-0.2 0-0.3 0.2 0 0.2 0 0.2 0.1 0.5 0.6 1.1 0.1 0.3 0.1 0.8 0.2 0.3 0.1 0.3 0.4 0.6 0.8 1.3 1.8 1.3 0.8 0.3 0.5 0.1 0.9 1.6 4.2 5 2.1 1.8 2.2 1.3 1.3 1.4 0.7 0.4 1.2 0.4 2 0.4 1.1 0.4 0.2 0.1 0.4 0.4 0.2 0.2 0.2 0.5 0.3 0.5 0.1 0.5 0 0.5-0.1 0.5 0.3 0.2 0.4 0.2 0.2 0 0.2-0.1 0.2 0 0 0.2 0 0.2-0.2 0.5-0.3 0.5-0.6 0.6-0.4 0.4-0.6 0.2-0.7 0.2-0.4 0-0.2 0.1-0.2 0.2-0.1 0.4-0.1 0.6 0.4 1.3 0 0.3-0.3 0.6 0.1 0.2 0.2 0.3 0 0.2-0.2 0.7-0.3 0.4-0.5 0.5-1.8 1.4-0.8 0.7-0.4 0.6-0.6 0.8-0.3 0.2-0.3 0.1-0.7-0.1-0.3-0.2-3.8 0.6-0.5-0.1-0.4-0.2-0.3-0.2-0.4 0.1-0.8-0.2 0.1 2.3 0.2 1.2 0.3 1.2 0.6 1.2 0.4 0.6 0.3 0.4 0.7 0.5 0.2 0.3 0.3 0.5 0.9 2.2 0.8 2.5-0.7 0.2-1 0.7-0.4 0.2-1.1 0.3-0.4 0.1-2 1.5-1.1 1-0.2-0.3-2.1-2.9-1.8-3.6-0.1-0.2-0.1-0.4 0.3-0.5 0.8-0.8 0.1-0.9-0.1-1-0.2-0.9-0.1-0.9-0.2-0.4-0.4-0.5-1.2-1.2-0.2-0.2-0.1-0.2-0.1-0.5-1-1.6-1.1-1.3-0.3-0.5-0.2-0.5-0.2-0.9-0.1-0.9-0.2-0.3-0.8-0.8-0.3-0.4 0.2-0.2 0-0.3-0.2-0.3 0.2-0.2 0.1 0-0.2-0.8-0.2-0.6-0.2-0.2-0.4-0.1-0.9-0.6-0.4-0.1-0.3-0.3-0.2-0.1-0.1 0.1-0.6 0.1-0.2 0-0.2-0.2 0.1-0.2 0.3-0.3 0.2-0.3 0-0.5-0.1-0.3-1-0.8-0.3 0.1-0.1-0.2 0.1-0.4 0-0.2 0.3-0.3 0-0.1 0-0.2-0.3-0.5 0.3-0.1 0.2 0 0.2 0 0.2 0.1 0.2-0.4-0.2-0.3-0.4 0-0.3-0.2-0.5-1.2-0.2-1.5-0.4-1-0.6-1-3-3.2-0.6-0.7-0.9-1.7-1.3-1.5-0.7-0.7-1.5-1-0.3-0.3-0.2-0.4-0.4-0.4-1-0.6-0.4-0.4-0.3-0.4 0-0.5 0-0.5-0.1-0.4-0.2-0.3-0.3-0.2-0.2-0.2-0.2-0.4-0.1-0.2-0.1-0.3 0-0.4 0-0.5 0.2-0.4 0-0.5-0.1-0.5-0.3-0.4-1.3-1.1-1.2-1.4-0.5-0.3-1.6-0.9-1-0.4-0.9-0.1-0.5 0-0.4-0.1-0.3-0.1-0.3-0.4-0.5-0.8-0.3-0.3-0.6-0.1-0.4 0.1-0.8 0.4-0.3 0.1-0.3 0-0.2-0.1-0.2-0.1-0.4-0.4-0.1 0-0.5 0-0.3-0.2 2.5-2.7 1.6-2.1 0.3-0.2 0.2-0.1 0.6-0.2 0.7 0 0.4-0.1 0.5-0.3 1.6-0.8 0.5-0.2 0.5 0 0.3 0.1 0.6 0.3 0.2 0.1 0.4 0 0.1 0.1 0.4 0.5 0.2 0.2 0.2 0.1 0.2 0.1 1.3 0 0.2 0.1 0.3 0.2 0.5 0.2 0.4 0 0.3-0.1 0.9-0.3 0.3-0.1 0.2-0.2 0.2-0.5 0-0.5 0-0.3-0.1-0.1-0.5-1.1-0.3-0.4-0.2-0.4-0.1-0.2-1-1-0.1-0.3-0.2-0.8-0.1-0.3-0.1-0.1-0.3-0.2-0.5-0.2-0.2-0.1-0.3-0.5-0.3-0.3-0.2-0.2-0.2-0.5 0-0.2 0.1-0.2 0.3 0.1 0.7 0.4 0.2 0.1 0.3 0.1 0.4 0 0.5-0.1 0.2-0.2 0.6 0.1 1 0.5 0.9 0.1 0.3 0.2 0.4 0.2 0.7 0.2 0.8 0.3 0.4 0.1 0.2 0.2 0.4 0.4 0.4 0.2 0.3 0.2 0.3 0 0.3 0 0.3-0.1 0.3-0.2z",
    IDN538:
      "M675.4 183.1l-0.6 0.3-0.7-0.4-0.6-0.6-0.4-0.6-0.2-0.7-0.1-1.5-0.2-0.6-0.2-0.3-0.5-0.4-0.2-0.2-0.1-0.3 0-1.1-0.2-0.6-0.3-0.5-0.3-0.7 0-0.7 0.2-0.4 0.2-0.3 0.5-0.7 0.3-0.3 0.4-0.2 0.2 0 0.2 0.1 0.7 0.5 0.2 0.2 0.1 0.3 0 0.3-0.1 0.6-0.4 1.1-0.1 0.6 0.1 1 1.9 4 0.1 0.4 0.1 0.5 0.2 0.4 0.1 0.3-0.3 0.5z m-36.9-10.2l-0.1 1-0.2-0.1-0.6-0.6-0.2-0.1-0.2-0.1-0.2 0-0.1-0.2 0.1-0.3 0.3-0.2 0.3-0.1 0.4 0 0.3 0.2 0.2 0.5z m22.8-4.3l0.1 0.1 0.2 0 0.5-0.2 0.3-0.2 0.2-0.1 0.1 0.1 0 0.4 0.2 0.1 1.3-0.1 0.7 0 0.4 0.3 0.4-0.1 1.7 0.2 0.2 0 0.4-0.2 0.5-0.3 0.2 0 0.5 0.1 0.9 0 2.5-0.3 1.1 0 2.6 0.4 3.8 0.2 0.8 0.1 0.3 0 0.1 0.3-0.2 0.1-1.4 0.7-0.3 0-0.7 0-0.5 0-0.3 0.1-0.2 0.2-0.3 0.1-0.5-0.1-1.8 0.1-0.2 0.1-0.6 0.2-0.7 0-0.2 0-0.7 0.5-0.5 0.2-0.4-0.2-0.4-0.3-0.4-0.2-0.3 0.1-1.5 0.3-3.6-0.1-0.5 0.1-1 0.3-0.5 0.1-1 0-0.3 0-0.8 0.3 0.1-0.4 0-0.4 0-0.4-0.1-0.3-0.2-0.2-0.9-0.4-0.2 0.1-0.2 0.4-0.2 0.1-0.1-0.1-0.2-0.2-0.1-0.2 0-0.2 0-0.5 0.2-0.4 0.4-0.1 0.3-0.1 0-0.2 0.1-0.2 0.2-0.1 0.2 0 0.2 0.1 0.3 0.3z m-19.4-3.5l-0.1 0.5 0.7-0.3 0.7-0.2 0.9-0.1 1.2 0.2 0.9 0.3 0.3 0.1 0.3 0.2 1.3 0.1 1.2 0.5 1.4 0.2 0.3-0.1 0.2 0 0.2 0.2 0.1 0.1 0.6 0.1 0.2 0 0.3 0.1 0.2 0.7 0.3 0.3 0.2-0.3 0.3 0.1 0.3 0.1 0.3 0 0.3-0.1-0.3-0.1 0.1-0.4 0.3-0.9 0.1-0.2 0.2 0 0.3 0.2 0.2 0.1 0.7 0.1 0.2 0.4 0.1 0.5-0.2 0.8 0.2 0.2 0.2 0 0.3 0 0.1-0.2 0.1-0.4 0.2-0.4 0.3-0.3 0.3-0.1 0.4 0.1 0.3 0.2 0 0.2-0.3 0.5-0.1 0.2 0.1 0.1 0.4-0.2 0.2 0.1 0.1 0.3 0.1 1.5-0.1 0.4-0.2 0.1-0.8-0.3-0.5 0-1.3 0.2-0.2 0-0.5-0.2-0.2 0-0.2 0.1-0.4 0.3-0.2 0.1-0.4-0.1-0.5-0.1-0.4 0-0.4 0.2-0.2 0.4 0 0.4-0.2 0.2-0.6 0-0.6-0.4-0.3-0.1-0.7 0.1-0.5-0.1-0.8-0.5-0.5 0-1 0.3-1.6 0.9-0.8 0.4-2 0.5-0.4 0.2-0.4 0.1-0.7 0-1.3 0.1-0.5 0-0.5-0.2-0.2-0.2-0.1-0.4-1.2-1.9-0.2-0.4 0.1-0.9 0.1-0.4 0.3-0.4 0.4-0.9 0.1-1 0.2-0.8 0.9-0.2 0.4-0.1 1-0.1 0.3-0.2 0.3-0.3 0.2 0 0.1 0.2z m60.9-6.1l0.2 0.3 0.4-0.1 0.2 0.1 0.2 0.7-0.1 0.1-0.3 0.1-0.3 0.1-0.5 0.4-0.2 0.1-0.7-0.2 0-0.6 0.4-0.5 0.4 0 0.2-0.3 0-0.2 0.1 0z m10.8 1.7l0.4 0.1 0.2 0 0.3-0.3 0.2 0 0.3 0.1 0.5 0.4 0.2 0.1 1.7 1.2 0.4 0.5 0.2 0.2 0.2 0.2 0.6 0.2 0.4 0.3 0.2-0.1 0.3-0.1 0.3 0.1 0.1 0.2 0.3 0.4 0.3 1-0.2 0.7-0.5 0.5-0.8 0.4-0.9 0-2.5-0.6-0.5 0-0.7 0.2-0.5 0.1-3.3-0.2-0.4 0.1-0.3 0.3-0.3 0.2-0.2 0.2-1.7 0.1-0.8 0-0.9-0.3-1.3-0.7-1.2-1.1 0.1-0.5 0.4-0.8 0-0.4-0.1-0.3 0.1-0.3 0.3-0.4-0.2-0.4 0.1-0.4 0.2-0.4 0.2-0.3 0-0.6 0.2 0 0.5 0.3 0.5 0.5 0.1 0 0.1-0.1 0.4-0.5 0.1-0.2 0.1-0.3 2.3-1.5 0.2 0 1.7 0.3 0.6 0.2 0.5 0.3 0.3 0.4 0.2 0.4 0.4 0.3 0.6 0.3z m-2.9-4.4l-0.1 0.4-0.3 0.4-0.3 0.1-0.5 0-1.2-0.6-0.8-0.1-0.4 0-0.2 0.2-0.2 0.3-0.4 0-0.4-0.3-0.3-0.1-0.1-0.2 0.3-0.3 0.6-0.7 0.3-0.2 0.4-0.1 0.3-0.1 1.4 0.5 0.3 0.3 1.1 0.1 0.3 0.1 0.2 0.3z m15.1-4.2l-0.5 0-0.2 0-0.4-0.1-0.3-0.2-0.1-0.3 0.1-0.4 0-0.2-0.5-0.4-0.1-0.1 0.1-0.3 0.1-0.1 0.3 0.1 0.1 0.1 0.1 0.3 0.1 0.2 0.4 0.2 0.2 0.2 0.8 0.1 0.2 0.3-0.1 0.4-0.3 0.2z m-23.4-5.6l0.1 0.3-0.9 0.3-0.2 0-0.5-0.4-0.7-0.1-0.8 0-0.5-0.2 0.1-0.9 0.2-0.5 0.2-0.3 0.2-0.4 0.1-0.9 0.2-0.3 0.3-0.1 0.6-0.1 0.3 0.1 0.1 0.1-0.3 0.4 0.2 0.2 0.2 0.3 0.5 0.7 0.1 0.2 0.1 0.2-0.1 0.4 0 0.3 0.5 0.7z m6.8-7.9l0.5 0 0.1 0.3 0.2 0.2 0.3 0.5 0.2 0.4-0.3 0.5-1.3 1.6-0.2 0.4-0.1 0.5 0.1 0.3 0.1 0.1 0.2 0.1 0.3 0 0.3 0.1 0.1 0.2 0 0.7-0.1 0.2 0.1 0.3 0.3 0.2 0.2 0 0.3-0.1 0.4-0.3 0.4-0.1 1.4-0.1 0.3 0.1 0.9 0.4 0.2 0.1 0.1 0.2 0.3 0.4 0.1 0.4 0.4 0.1 0 0.1-0.1 0.3-0.1 0.3-0.3 0.4-0.9 0.9-0.2 0.1-0.2 0-0.3 0-0.3 0.1-0.5 0.3-0.2 0.1-0.1-0.1-0.5-0.4-0.2-0.1-0.5-0.1-0.3-0.1-0.2-0.3-0.2-0.1-0.2-0.1 0-0.3 0.1-0.5-0.1-0.2-0.2-0.4-0.1-0.1-0.3-0.2-0.2 0.2-0.2 0.1-0.4 0.1-1.2 0.7-1.4 0.4-0.2-0.1-0.2-0.5-0.2-0.4-0.1-1 0.1-0.2 0.6-1.4 0-0.3-0.7-0.2-0.2-0.1-0.4 0-0.2-0.1-0.1-0.4-0.1-0.1-0.4-0.1-0.4-0.7-0.1-0.1-0.1-0.3-0.7-0.5-0.2-0.2-0.2-0.4-0.1-0.3 0.1-0.4 0.1-0.3 0.3-0.3 0.2-0.3 0.2-0.5 0-0.5-0.1-0.2-0.2-0.5 0.3 0 0.4-0.3 0.3 0 0.2 0 0.2 0.2 0.4 0.4 0.2 0.2 0.2 0.1 0 0.5 0.2 0.2 0.2 0.2 0.2 0.1 0.3-0.2 0.2-0.4 0.1-0.5 0.1-0.4 0.2-0.1 0.4-0.1 0-0.2 0.1-0.4 0.1-0.1 0.2-0.1 0.2 0.1 0.7 0.3 0.3 0.2 0.1 0.4 0.1 0.1 0.5 0.4 0.1 0.2 0.1 0.2 0 0.3 0.2 0.3z m-9-3.6l0.1 0.2 0.2-0.1 0.1 0 0.3 0.2 0.1 0.3 0.2 0.1 0.7-0.1 0.1 0.1-0.1 0.2-0.1 0.3-0.1 0.1-0.4 0-0.2 0-0.1 0.3 0 0.4 0.2 0.3 0.2 0.2 0.1 0.2 0.1 0.3 0 0.3-0.4 0.3 0 0.3 0.2 0.6-0.1 0.2-0.2 0.3-0.1 0.4-0.1 0-0.3-0.1-0.5 0.5-0.3 0.1-0.4 0.1-1.3 0 0.1-0.3-0.3-0.2 0.1-0.2 0.4-0.2 0-0.3-0.1-0.3-0.2-0.2-0.1-0.1-0.3-0.1 0-0.2 0.2-0.5 0-0.6 0.1-0.2 0.2-0.2 0-0.5-0.2-0.6-0.1-0.4 0.2-0.3 0.2 0 0.6-0.2 0.4-0.2 0.6 0 0.3-0.2z m50.7-0.7l-0.2 0-0.3 0-0.2-0.2-0.4-0.4-0.9-1.6-1.9-0.8 0-0.3 0-0.3 0-0.3-0.2-0.1-0.5-0.8-0.1-0.1-0.5-0.3-0.5-0.4 0.1-0.1 0.2-0.1 0.2 0.1 3.2 2.7 1.2 0.8 0.5 0.4 0.4 0.6 0.3 0.3 0 0.4 0 0.1-0.2 0.2-0.2 0.2z m-46.5-7.9l0.6 0.2 0.3 0-0.2 0.4 0.4 2.7 0 0.4 0 0.3-0.2 0.1-0.3-0.3-0.1-0.1 0-0.6-0.4-0.4-0.1 0.3-0.2 0.1-0.2-0.5 0-0.5 0.2-1.2 0.2-0.9z m0.2-3.6l-0.5 0.7-0.8-0.1-0.2-0.2-0.2-0.4 0-0.5-0.1-0.3 0.2-0.2 0.3-0.3 0.4-0.1 0.5 0 0.4 0.5 0 0.9z m0.3-9.5l0.2 0.2 0.1 0.3 0 0.5 0.1 0.4-0.1 0.4-0.3 0.3-0.5 0.5-0.4 0.3-0.3-0.1-0.1-0.3-0.2-0.3-0.1-0.4 0.4-0.7 0.2-1.2 0.4 0.1 0.2 0 0.1-0.1 0.3 0.1z m-1.9-0.1l-0.3 0-0.4 0-0.2-0.2-0.2-0.4-0.2-0.4-0.1-0.3 0.2-0.5 0.3-0.4 0.5-0.1 0.8 0.4 0.2 0.4 0.1 0.4-0.1 0.5-0.3 0.4-0.3 0.2z m-20.8-11.5l-0.1 0-0.5-0.7-0.2 0-0.1-0.1 0.2-0.3 0.2-0.2 0.1-0.1 0.2 0 0.2 0.1 0.2 0.1 0.1 0.2-0.2 0.4 0 0.2-0.1 0.4z m36.3-19.7l0 0.5-0.2 0.4-0.4 0.9-0.3 0.3-0.4 0.3-0.2 0.4-0.5 0.2-0.2 0.2-0.1 0.6-0.2 0.8-0.2 0.4-0.2 0.1-0.4 0.1-0.4 0.1-0.3 0.2-0.2 0.2-0.2 0.4-0.1 0.6-0.1 0.7 0.1 0.5 0.5 0.4 1.4 0.2 0.3 0.3 0.2 0.3 0.9 0.7 0.3 0.5-0.2 1.6-0.1 0.2-0.2 0.1 0.2 0.3 0.3 0.3 0.1 0.2 0.1 0.3 0.2 0.9-0.1 0.4-0.3 1.2 0 0.6 0 0.7 0 0.2-0.1 0.1-0.3 0.2-0.1 0.2 0.1 0.4 0.4 0.8 0 0.2-0.2 0.2-0.5 0-0.2 0-0.1 0.2-0.3 0.5-0.1 0.3-0.5 0.4-0.2 0.4-0.5 0.9-0.1 0.4 0 0.1-0.3 0.1-0.3 0-0.5 0-0.2 0.1-1.7 1.4-1.8 1-0.7 0.7-0.3 1 0 0.3 0.2 0.4 0.2 0.4 0.2 0.3 0.4 0.2 0.7 0.3 0.4 0.3 0.1 0.1 0.2 0.5 0.1 0.1 0.2 0.1 0.4 0 0.6 0.3 0.4 0 0.5-0.1 0.3-0.1 0.5-0.3 0.7-0.6 0.4-0.4 0.1-0.3 0.1-1.9 0-0.4 0-0.4 1.3-1.6 0.5-0.4 0.4-0.3 0.4-0.1 0.5-0.1 1.5 0 0.3-0.2 0.4-0.5 0.3-0.5 0.1-0.4-0.1-0.4-0.3-0.4-0.5-0.2-0.9 0.2-0.4-0.1-0.1-0.4 0.4-0.4 0.7-0.6 0.3-0.4 0.4-0.8 0.3-0.3 0.4-0.4 0.9-0.6 0.4-0.3 0.4-0.2 0.9-0.3 0.4-0.3 0.1-0.2 0.2-0.4 0.2-0.2 0.1 0 0.5-0.2 0.5-0.3 0.4-0.2 0.5-0.2 0.5 0 0.1 0.1 0.3 0.2 0.2 0 0.2-0.1 0.2-0.1 0.2-0.4 0.3-0.2 1.2-0.2 0.9 0 1.5 0.2 0.2 0.1 0 0.4 0 0.1-0.6 0.4-0.2 0.4-0.1 0.5 0 0.8 0.1 0.2 0.1 0.1 0.4 0.4 0.3 0.1 0.3 0.1 0.1 0.1-0.1 0.3 0.1 0.4 0.1 0.5-0.1 0.5-0.1 0.2-0.4 0.2-0.1 0.4-0.1 0.9-0.2 1.1-0.1 0.5 0.2 1.4 0 0.4-0.1 0.3-0.4 0.2-0.5 0-0.2 0-0.2 0.2-1.7 1-0.4 0.3-0.1 0.2-0.2 0.1-1.3 0.4-0.4 0.5-0.3 0.2-0.4 0-0.4 0.1-1.9 0.5-0.3 0.2-0.2 0.3-0.1 0.5 0.2 0.4 0 0.3-0.1 0.1-0.3 0-0.4-0.2-0.3-0.1-0.3 0.2-0.3 0.2-0.1 0.4 0 0.5 0.1 0.3 0.3 0.4 0.8 0.6 0.5 0.6 0.4 0.4 0.7 0.2 0.4 0.3 0.3 0.1 0.7 0 0.6 0 0.1 0.1 0.2 0.1 0.4 0.4 0.2 0.2 0.2 0.1 0.7 0.1 0.4 0.1 0.7 0.4 0.3 0.1 0.4-0.1 0.3 0 0.3 0.1 0.3 0.1 0.2 0.1 0.3-0.2 0.3 0.3 0.1 0.2-0.1 0.7-0.2 0.4 0.2 0.3 0.1 0.4 0 1.7 0.1 0.8 0.3 0.3 1.3 0.2 0.2 0.1 1.1 0.2 0.6 0.4 0.6 0.7 0.5 0.8 0 0.3-0.9-0.8-0.3-0.1-0.3-0.1-2.9-0.8-0.4 0.1-0.5-0.2-0.6-0.3-0.7-0.2-0.7 0-0.6-0.2-0.5-0.4-0.9-0.9-0.3-0.2-0.2 0-0.7 0.1-0.3 0-0.6-0.2-0.3 0-1.5 0.3-0.7-0.1-0.6-0.5-0.5 0.2-0.5-0.3-0.4-0.5-0.4-0.3-1.7-0.2-0.4 0.1-0.5-0.2-1.1-0.1-0.4-0.2-0.5 0.4-0.3 0.3-0.3 0.3-0.3 1.8-0.3 0.4-0.1 0.3 0 0.4 0.6 0.6 0.1 0.5 0.2 2.3 0 0.3-0.2 0.3-0.3 0.4-0.2 0.3-0.1 0.4 0 1 0.2 0.9 0.2 0.7 0.7 1.2 0.4 1.3 0.4 0.7 0.1 1 0.1 0.4 0.2 0.4 0.6 0.7 0.1 0.3 0.1 0.5 0.2 1 0.2 0.4 0.9 1.4 0.2 0.8 0.7 0.6 0.2 0.3 2 3.3 1.1 1.2 1.3 1.1 0.2 0.2 0.4 0.6 0.4 0.3 0.8 0.4 0.3 0.2 0.1 0.3-0.2 0-0.6-0.3-0.7-0.2-1.9-0.1-0.4-0.1-0.3-0.2-0.3-0.2-0.2-0.4 0.1-0.2 0.3-0.1 0.3 0.2 0.2 0-0.5-0.8-0.9-0.6-3.4-1.2-0.4-0.3-0.2-0.4-1.2-2.6-1.2-1.8-0.6-1.6-0.3-0.3-0.4-0.6-0.4-0.1-1.2-0.7-0.8-0.5-0.4-0.1-0.3-0.3-0.4-0.5-0.4-0.7-0.1-0.5 0-0.5 0.3-0.8 0.1-0.5 0-2.5 0.1-0.5 0.2-0.5 0-0.2 0-0.5-0.3-0.7-0.1-0.4 0-0.9 0.7-2.5 0.1-0.4 0-0.4-0.2-0.3-0.3-0.3-0.2-0.1-0.5 0.1-0.2 0-0.9-0.8-0.2-0.3-0.4-0.3-0.3-0.4 0-0.2 0-0.7-0.2-1-0.1-0.3-0.5-0.4-0.1-0.2 0-0.2 0-1 0.3-1.3 0.1-1 0.2-0.6 0.7-0.4 0.3-0.6 0.3-0.6 0.2-0.4-0.3-0.5-0.7-0.3-0.9-0.1-0.7-0.2-0.2-0.5 0-0.3 0.3-0.4 0.1-0.4-0.1-0.2-0.2-0.6-0.2 0-0.1-0.1 0-0.8 0.1-0.2 0-0.2-0.3-0.2-0.1 0-0.5 0.3-0.4 0.1-0.3 0.1-0.3 0-0.1-0.5 0-0.3 0.1-0.2 0.3-0.4 0.2-0.3 0-0.2 0-0.5-0.2-0.3-0.2-0.2-0.2-0.3 0-0.5 0.1-0.4 0.7-1 0.6-0.8 0.5-1.5 0.8-1.2 0.4-0.9-0.2-0.6-0.3-0.6 0.1-0.5 0.7-1-0.2-0.3-0.1-0.3 0.1-0.3 0.2-0.1 0.3-0.1 0.1-0.5-0.1-0.2-0.2-0.1-0.1-0.1 0.1-0.1 0.2-0.4 0.2-0.8 1.1-1.8 0.5-0.6 0.5-0.9 0.3-0.4 1.2-1.1 0.5-0.7 2-2.1 0.7-0.6 0.1-0.1 0.1-0.4 0.3-0.4 0.4-0.3 0.4-0.2 0.4 0.1 0.4 0.1 0.3 0.1 1-0.5 0.2 0.3z m-6.5-1.7l0.6 0.1 0.3 0 0.2 0 0.1 0.2 0 0.5-0.2 0.4-0.5 0.1-0.5-0.3-0.2-0.5 0-0.4 0.2-0.1z m8.9-0.6l-0.3 0.2-0.3-0.2-0.2-0.4-0.2-0.4 0-0.3 0.1-0.2 0.3-0.5 0.3-0.5 0.1 0 0.3 0 0.4 0.8 0 0.2-0.5 1.3z m9.3-6.8l0.5 1.1 0.2 0.3 0.3 0.2 0.9 1.1 0.2 1-0.3 0.9-0.4 0.8-0.4 0.8 0 1.4-1.3 2.3-0.2 0.7-0.2 0.3-1.2 1-0.4 0.2-3.2 0.3-0.3 0.1-0.3 0.3-0.6 0.4-0.4 0.2 0.1-0.5 0.3-0.5-0.1-0.4-0.7-0.7-0.1-0.4 0-1.5-0.1-1-0.2-0.5-0.4-0.2-0.4-0.2 0.2-0.5 0.9-0.8 0.6-1 1-1.9 0.8-0.9 0.9-0.4 0.4-0.3 0.3-0.8 0.1-0.2 0.5-0.3 0.2-0.1 0.1 0.1 0.3 0.3 0.6 0.1 0.2-0.2 0.2-0.4 0.3-0.5 0.4-0.2 0.4 0.2 0.3 0.3z",
  },
  names: {
    IDN555: "Nusa Tenggara Barat",
    IDN554: "Maluku",
    IDN557: "Sulawesi Tengah",
    IDN556: "Sulawesi Tenggara",
    IDN381: "Sumatera Utara",
    IDN513: "Sulawesi Utara",
    IDN558: "Papua",
    IDN1223: "Jawa Barat",
    IDN1227: "Jakarta Raya",
    IDN1226: "Banten",
    IDN1225: "Bengkulu",
    IDN1224: "Jawa Tengah",
    IDN1229: "Lampung",
    IDN1228: "Kalimantan Barat",
    IDN540: "Yogyakarta",
    IDN1796: "Kepulauan Riau",
    IDN1185: "Kalimantan Timur",
    IDN1933: "Irian Jaya Barat",
    IDN1931: "Kalimantan Tengah",
    IDN1930: "Jambi",
    IDN1837: "Gorontalo",
    IDN1230: "Sumatera Selatan",
    IDN1231: "Bangka-Belitung",
    IDN1232: "Bali",
    IDN1233: "Jawa Timur",
    IDN1234: "Kalimantan Selatan",
    IDN1235: "Nusa Tenggara Timur",
    IDN1236: "Sulawesi Selatan",
    IDN1237: "Sulawesi Barat",
    IDN1136: "Aceh",
    IDN492: "Riau",
    IDN539: "Sumatera Barat",
    IDN538: "Maluku Utara",
  },
  default_regions: {},
  proj: "mercator",
  default_labels: {},
  proj_coordinates: [
    { lat: -2.0204, x: 156.3, lng: 102.1676, y: 173.5 },
    { lat: -2.0268, x: 154.4, lng: 102.0797, y: 173.6 },
    { lat: -7.0994, x: 318.7, lng: 109.6433, y: 284.2 },
  ],
  initial_view: { x2: 1008.99, x: 0.99, y2: 438.33500000000004, y: -65.665 },
};

/* Map logic - do not edit */
!(function (e) {
  var t,
    o,
    i,
    n = {};
  (function () {
    var e,
      t,
      o,
      i,
      n,
      r,
      a,
      s,
      l,
      c,
      m,
      u = this || Function("return this")(),
      p = (function () {
        "use strict";
        var e,
          t,
          o,
          i,
          n,
          r = "linear",
          a =
            Date.now ||
            function () {
              return +new Date();
            },
          s = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : a;
        function l() {}
        function c(e, t) {
          for (var o in e) Object.hasOwnProperty.call(e, o) && t(o);
        }
        function m(e, t) {
          return (
            c(t, function (o) {
              e[o] = t[o];
            }),
            e
          );
        }
        function p(e, t) {
          c(t, function (o) {
            void 0 === e[o] && (e[o] = t[o]);
          });
        }
        function d(t, o, i, n, r, a, s) {
          var l,
            c,
            m,
            u,
            p,
            d,
            f = t < a ? 0 : (t - a) / r;
          for (p in o) {
            o.hasOwnProperty(p) &&
              ((d = "function" == typeof (d = s[p]) ? d : e[d]),
              (o[p] =
                ((l = i[p]),
                (c = n[p]),
                (m = d),
                (u = f),
                l + (c - l) * m(u))));
          }
          return o;
        }
        function f(e, t, o, i) {
          return e + (t - e) * o(i);
        }
        function h(e, t) {
          var o = v.prototype.filter,
            i = e._filterArgs;
          c(o, function (n) {
            void 0 !== o[n][t] && o[n][t].apply(e, i);
          });
        }
        function $(e, t, r, a, l, c, m, u, p, f, $) {
          (n = t + r + a),
            (o = Math.min($ || s(), n)),
            (i = n <= o),
            (n = a - (n - o)),
            e.isPlaying() &&
              (i
                ? (p(m, e._attachment, n), e.stop(!0))
                : ((e._scheduleId = f(e._timeoutHandler, 1e3 / 60)),
                  h(e, "beforeTween"),
                  o < t + r
                    ? d(1, l, c, m, 1, 1, u)
                    : d(o, l, c, m, a, t + r, u),
                  h(e, "afterTween"),
                  p(l, e._attachment, n)));
        }
        function _(e, t) {
          var o = {},
            i = typeof t;
          return (
            c(
              e,
              "string" == i || "function" == i
                ? function (e) {
                    o[e] = t;
                  }
                : function (e) {
                    o[e] || (o[e] = t[e] || r);
                  }
            ),
            o
          );
        }
        function v(e, o) {
          (this._currentState = e || {}),
            (this._configured = !1),
            (this._scheduleFunction = t),
            void 0 !== o && this.setConfig(o);
        }
        return (
          (t =
            ("undefined" != typeof window &&
              (window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                (window.mozCancelRequestAnimationFrame &&
                  window.mozRequestAnimationFrame))) ||
            setTimeout),
          (v.prototype.tween = function (e) {
            return this._isTweening
              ? this
              : ((void 0 === e && this._configured) || this.setConfig(e),
                (this._timestamp = s()),
                this._start(this.get(), this._attachment),
                this.resume());
          }),
          (v.prototype.setConfig = function (e) {
            (e = e || {}),
              (this._configured = !0),
              (this._attachment = e.attachment),
              (this._pausedAtTime = null),
              (this._scheduleId = null),
              (this._delay = e.delay || 0),
              (this._start = e.start || l),
              (this._step = e.step || l),
              (this._finish = e.finish || l),
              (this._duration = e.duration || 500),
              (this._currentState = m({}, e.from || this.get())),
              (this._originalState = this.get()),
              (this._targetState = m({}, e.to || this.get()));
            var t = this;
            this._timeoutHandler = function () {
              $(
                t,
                t._timestamp,
                t._delay,
                t._duration,
                t._currentState,
                t._originalState,
                t._targetState,
                t._easing,
                t._step,
                t._scheduleFunction
              );
            };
            var o = this._currentState,
              i = this._targetState;
            return (
              p(i, o),
              (this._easing = _(o, e.easing || r)),
              (this._filterArgs = [o, this._originalState, i, this._easing]),
              h(this, "tweenCreated"),
              this
            );
          }),
          (v.prototype.get = function () {
            return m({}, this._currentState);
          }),
          (v.prototype.set = function (e) {
            this._currentState = e;
          }),
          (v.prototype.pause = function () {
            return (this._pausedAtTime = s()), (this._isPaused = !0), this;
          }),
          (v.prototype.resume = function () {
            return (
              this._isPaused && (this._timestamp += s() - this._pausedAtTime),
              (this._isPaused = !1),
              (this._isTweening = !0),
              this._timeoutHandler(),
              this
            );
          }),
          (v.prototype.seek = function (e) {
            e = Math.max(e, 0);
            var t = s();
            return (
              this._timestamp + e === 0 ||
                ((this._timestamp = t - e),
                this.isPlaying() ||
                  ((this._isTweening = !0),
                  (this._isPaused = !1),
                  $(
                    this,
                    this._timestamp,
                    this._delay,
                    this._duration,
                    this._currentState,
                    this._originalState,
                    this._targetState,
                    this._easing,
                    this._step,
                    this._scheduleFunction,
                    t
                  ),
                  this.pause())),
              this
            );
          }),
          (v.prototype.stop = function (e) {
            return (
              (this._isTweening = !1),
              (this._isPaused = !1),
              (this._timeoutHandler = l),
              (
                u.cancelAnimationFrame ||
                u.webkitCancelAnimationFrame ||
                u.oCancelAnimationFrame ||
                u.msCancelAnimationFrame ||
                u.mozCancelRequestAnimationFrame ||
                u.clearTimeout
              )(this._scheduleId),
              e &&
                (h(this, "beforeTween"),
                d(
                  1,
                  this._currentState,
                  this._originalState,
                  this._targetState,
                  1,
                  0,
                  this._easing
                ),
                h(this, "afterTween"),
                h(this, "afterTweenEnd"),
                this._finish.call(this, this._currentState, this._attachment)),
              this
            );
          }),
          (v.prototype.isPlaying = function () {
            return this._isTweening && !this._isPaused;
          }),
          (v.prototype.setScheduleFunction = function (e) {
            this._scheduleFunction = e;
          }),
          (v.prototype.dispose = function () {
            for (var e in this) this.hasOwnProperty(e) && delete this[e];
          }),
          (v.prototype.filter = {}),
          (e = v.prototype.formula =
            {
              linear: function (e) {
                return e;
              },
            }),
          m(v, {
            now: s,
            each: c,
            tweenProps: d,
            tweenProp: f,
            applyFilter: h,
            shallowCopy: m,
            defaults: p,
            composeEasingObject: _,
          }),
          "function" == typeof SHIFTY_DEBUG_NOW && (u.timeoutHandler = $),
          (u.Tweenable = v)
        );
      })();
    function d(e) {
      t.each(e, function (t) {
        var o = e[t];
        "string" == typeof o && o.match(s) && (e[t] = $(s, o, f));
      });
    }
    function f(e) {
      var t;
      return (
        "rgb(" +
        (e =
          (3 === (t = (t = e).replace(/#/, "")).length &&
            (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2]),
          (c[0] = h(t.substr(0, 2))),
          (c[1] = h(t.substr(2, 2))),
          (c[2] = h(t.substr(4, 2))),
          c))[0] +
        "," +
        e[1] +
        "," +
        e[2] +
        ")"
      );
    }
    function h(e) {
      return parseInt(e, 16);
    }
    function $(e, t, o) {
      var i = t.match(e),
        n = t.replace(e, l);
      if (i)
        for (var r, a = i.length, s = 0; s < a; s++)
          (r = i.shift()), (n = n.replace(l, o(r)));
      return n;
    }
    function _(e) {
      for (
        var t = e.match(n), o = t.length, i = e.match(a)[0], r = 0;
        r < o;
        r++
      )
        i += parseInt(t[r], 10) + ",";
      return i.slice(0, -1) + ")";
    }
    function v(e, o) {
      t.each(o, function (t) {
        for (var i = g(e[t]), n = i.length, r = 0; r < n; r++)
          e[o[t].chunkNames[r]] = +i[r];
        delete e[t];
      });
    }
    function y(e, o) {
      t.each(o, function (t) {
        var i = e[t],
          n = (function (e, t) {
            m.length = 0;
            for (var o = t.length, i = 0; i < o; i++) m.push(e[t[i]]);
            return m;
          })(
            (function (e, t) {
              for (var o, i = {}, n = t.length, r = 0; r < n; r++)
                (i[(o = t[r])] = e[o]), delete e[o];
              return i;
            })(e, o[t].chunkNames),
            o[t].chunkNames
          ),
          i = (function (e, t) {
            for (var o = e, i = t.length, n = 0; n < i; n++)
              o = o.replace(l, +t[n].toFixed(4));
            return o;
          })(o[t].formatString, n);
        e[t] = $(r, i, _);
      });
    }
    function g(e) {
      return e.match(n);
    }
    p.shallowCopy(p.prototype.formula, {
      easeInQuad: function (e) {
        return Math.pow(e, 2);
      },
      easeOutQuad: function (e) {
        return -(Math.pow(e - 1, 2) - 1);
      },
      easeInOutQuad: function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      },
      easeInCubic: function (e) {
        return Math.pow(e, 3);
      },
      easeOutCubic: function (e) {
        return Math.pow(e - 1, 3) + 1;
      },
      easeInOutCubic: function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      },
      easeInQuart: function (e) {
        return Math.pow(e, 4);
      },
      easeOutQuart: function (e) {
        return -(Math.pow(e - 1, 4) - 1);
      },
      easeInOutQuart: function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      },
      easeInQuint: function (e) {
        return Math.pow(e, 5);
      },
      easeOutQuint: function (e) {
        return Math.pow(e - 1, 5) + 1;
      },
      easeInOutQuint: function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      },
      easeInSine: function (e) {
        return 1 - Math.cos(e * (Math.PI / 2));
      },
      easeOutSine: function (e) {
        return Math.sin(e * (Math.PI / 2));
      },
      easeInOutSine: function (e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      },
      easeInExpo: function (e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      },
      easeOutExpo: function (e) {
        return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
      },
      easeInOutExpo: function (e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (2 - Math.pow(2, -10 * --e));
      },
      easeInCirc: function (e) {
        return -(Math.sqrt(1 - e * e) - 1);
      },
      easeOutCirc: function (e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      },
      easeInOutCirc: function (e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      },
      easeOutBounce: function (e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      },
      easeInBack: function (e) {
        return e * e * (2.70158 * e - 1.70158);
      },
      easeOutBack: function (e) {
        return --e * e * (2.70158 * e + 1.70158) + 1;
      },
      easeInOutBack: function (e) {
        var t = 1.70158;
        return (e /= 0.5) < 1
          ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
          : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
      },
      elastic: function (e) {
        return (
          -1 *
            Math.pow(4, -8 * e) *
            Math.sin(((6 * e - 1) * (2 * Math.PI)) / 2) +
          1
        );
      },
      swingFromTo: function (e) {
        var t = 1.70158;
        return (e /= 0.5) < 1
          ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
          : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
      },
      swingFrom: function (e) {
        return e * e * (2.70158 * e - 1.70158);
      },
      swingTo: function (e) {
        return --e * e * (2.70158 * e + 1.70158) + 1;
      },
      bounce: function (e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      },
      bouncePast: function (e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      },
      easeFromTo: function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      },
      easeFrom: function (e) {
        return Math.pow(e, 4);
      },
      easeTo: function (e) {
        return Math.pow(e, 0.25);
      },
    }),
      (p.setBezierFunction = function (e, t, o, i, n) {
        var r,
          a,
          s,
          l,
          c =
            ((r = t),
            (a = o),
            (s = i),
            (l = n),
            function (e) {
              return (function e(t, o, i, n, r, a) {
                var s,
                  l = 0,
                  c = 0,
                  m = 0,
                  u = 0,
                  p = 0,
                  d = 0;
                function f(e) {
                  return ((l * e + c) * e + m) * e;
                }
                function h(e) {
                  return 0 <= e ? e : 0 - e;
                }
                return (
                  (l = 1 - (m = 3 * o) - (c = 3 * (n - o) - m)),
                  (((u = 1 - (d = 3 * i) - (p = 3 * (r - i) - d)) *
                    (s = (function (e, t) {
                      var o, i, n, r, a, s, u;
                      for (n = e, s = 0; s < 8; s++) {
                        if (h((r = f(n) - e)) < t) return n;
                        if (1e-6 > h((a = (3 * l * (u = n) + 2 * c) * u + m)))
                          break;
                        n -= r / a;
                      }
                      if (((i = 1), (n = e) < (o = 0))) return o;
                      if (i < n) return i;
                      for (; o < i && !(h((r = f(n)) - e) < t); )
                        r < e ? (o = n) : (i = n), (n = 0.5 * (i - o) + o);
                      return n;
                    })(t, (s = 0.005))) +
                    p) *
                    s +
                    d) *
                    s
                );
              })(e, r, a, s, l, 1);
            });
        return (
          (c.displayName = e),
          (c.x1 = t),
          (c.y1 = o),
          (c.x2 = i),
          (c.y2 = n),
          (p.prototype.formula[e] = c)
        );
      }),
      (p.unsetBezierFunction = function (e) {
        delete p.prototype.formula[e];
      }),
      ((e = new p())._filterArgs = []),
      (p.interpolate = function (t, o, i, n, r) {
        var a = p.shallowCopy({}, t),
          s = r || 0,
          r = p.composeEasingObject(t, n || "linear");
        return (
          e.set({}),
          ((n = e._filterArgs).length = 0),
          (n[0] = a),
          (n[1] = t),
          (n[2] = o),
          (n[3] = r),
          p.applyFilter(e, "tweenCreated"),
          p.applyFilter(e, "beforeTween"),
          (r = p.tweenProps(i, a, t, o, 1, s, r)),
          p.applyFilter(e, "afterTween"),
          r
        );
      }),
      (t = p),
      (o = /(\d|\-|\.)/),
      (i = /([^\-0-9\.]+)/g),
      (r = RegExp(
        "rgb\\(" +
          (n = /[0-9.\-]+/g).source +
          /,\s*/.source +
          n.source +
          /,\s*/.source +
          n.source +
          "\\)",
        "g"
      )),
      (a = /^.*\(/),
      (s = /#([0-9]|[a-f]){3,6}/gi),
      (l = "VAL"),
      (c = []),
      (m = []),
      (t.prototype.filter.token = {
        tweenCreated: function (e, n, r, a) {
          var s, c;
          d(e),
            d(n),
            d(r),
            (this._tokenData =
              ((s = e),
              (c = {}),
              t.each(s, function (e) {
                var t,
                  n,
                  r = s[e];
                "string" == typeof r &&
                  ((t = g(r)),
                  (c[e] = {
                    formatString:
                      ((r = (n = r).match(i))
                        ? (1 === r.length || n.charAt(0).match(o)) &&
                          r.unshift("")
                        : (r = ["", ""]),
                      r.join(l)),
                    chunkNames: (function (e, t) {
                      for (var o = [], i = e.length, n = 0; n < i; n++)
                        o.push("_" + t + "_" + n);
                      return o;
                    })(t, e),
                  }));
              }),
              c));
        },
        beforeTween: function (e, o, i, n) {
          var r, a;
          (r = n),
            (a = this._tokenData),
            t.each(a, function (e) {
              var t = a[e].chunkNames,
                o = t.length,
                i = r[e];
              if ("string" == typeof i)
                for (
                  var n = i.split(" "), s = n[n.length - 1], l = 0;
                  l < o;
                  l++
                )
                  r[t[l]] = n[l] || s;
              else for (l = 0; l < o; l++) r[t[l]] = i;
              delete r[e];
            }),
            v(e, this._tokenData),
            v(o, this._tokenData),
            v(i, this._tokenData);
        },
        afterTween: function (e, o, i, n) {
          var r, a;
          y(e, this._tokenData),
            y(o, this._tokenData),
            y(i, this._tokenData),
            (r = n),
            (a = this._tokenData),
            t.each(a, function (e) {
              var t = a[e].chunkNames,
                o = t.length,
                i = r[t[0]];
              if ("string" == typeof i) {
                for (var n = "", s = 0; s < o; s++)
                  (n += " " + r[t[s]]), delete r[t[s]];
                r[e] = n.substr(1);
              } else r[e] = i;
            });
        },
      });
  }.call(null),
    (function (e, t) {
      (e = e || "docReady"), (t = t || window);
      var o = [],
        i = !1,
        n = !1;
      function r() {
        if (!i) {
          i = !0;
          for (var e = 0; e < o.length; e++) o[e].fn.call(window, o[e].ctx);
          o = [];
        }
      }
      function a() {
        "complete" === document.readyState && r();
      }
      t[e] = function (e, t) {
        if (i) {
          setTimeout(function () {
            e(t);
          }, 1);
          return;
        }
        o.push({ fn: e, ctx: t }),
          "complete" !== document.readyState &&
          (document.attachEvent || "interactive" !== document.readyState)
            ? n ||
              (document.addEventListener
                ? (document.addEventListener("DOMContentLoaded", r, !1),
                  window.addEventListener("load", r, !1))
                : (document.attachEvent("onreadystatechange", a),
                  window.attachEvent("onload", r)),
              (n = !0))
            : setTimeout(r, 1);
      };
    })("docReady", n),
    (t = window.console),
    (o = window.Object),
    (i = window.Array),
    (void 0 === t || void 0 === t.log) && ((t = {}).log = function () {}),
    "function" != typeof o.create &&
      (o.create = function (e) {
        function t() {}
        return (t.prototype = e), new t();
      }),
    i.prototype.forEach ||
      (i.prototype.forEach = function (e, t) {
        for (var o = 0, i = this.length; o < i; ++o)
          e.call(t, this[o], o, this);
      }),
    (Object.size = function (e) {
      var t,
        o = 0;
      for (t in e) e.hasOwnProperty(t) && o++;
      return o;
    }));
  var r = (function () {
      var e = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera\sMini/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
          return (
            e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
          );
        },
      };
      function t(e, t) {
        var o = e[0],
          i = e[1],
          n = Raphael.transformPath("M" + o + "," + i, t).toString(),
          r = /M(-?\d+.?\d*),(-?\d+.?\d*)/.exec(n);
        return [r[1], r[2]];
      }
      function o(e) {
        return Math.min.apply(Math, e);
      }
      function i(e) {
        return Math.max.apply(Math, e);
      }
      return {
        min: o,
        max: i,
        addEvent: function e(t, o, i) {
          t.attachEvent
            ? ((t["e" + o + i] = i),
              (t[o + i] = function () {
                t["e" + o + i](window.event);
              }),
              t.attachEvent("on" + o, t[o + i]))
            : t.addEventListener(o, i, !1);
        },
        isMobile: e,
        linePath: function e(t, o, i, n) {
          var r = { x: t, y: o },
            a = { x: i, y: n };
          return "M" + r.x + " " + r.y + " L" + a.x + " " + a.y;
        },
        clone: function e(t) {
          if ("object" != typeof t || null === t) return t;
          var o = t.constructor();
          for (var i in t) o[i] = e(t[i]);
          return o;
        },
        isFunction: function e(t) {
          return t && "[object Function]" === {}.toString.call(t);
        },
        findPos: function e(t) {
          function o(e, t) {
            if (e.currentStyle) var o = e.currentStyle[t];
            else if (window.getComputedStyle)
              var o = window.getComputedStyle(e, null)[t];
            return o;
          }
          var i,
            n = o(document.body, "position");
          "relative" == n && (document.body.style.position = "static"),
            o(document.body, "position");
          for (
            var r = (i = 0), a = t, s = !1;
            (a = a.parentNode) && a != document.body;

          )
            (r -= a.scrollLeft || 0),
              (i -= a.scrollTop || 0),
              "fixed" == o(a, "position") && (s = !0);
          if (s && !window.opera) {
            var l,
              c =
                ((l = document.getElementsByTagName("html")[0]),
                l.scrollTop && document.documentElement.scrollTop
                  ? [l.scrollLeft, l.scrollTop]
                  : l.scrollTop || document.documentElement.scrollTop
                  ? [
                      l.scrollLeft + document.documentElement.scrollLeft,
                      l.scrollTop + document.documentElement.scrollTop,
                    ]
                  : document.body.scrollTop
                  ? [document.body.scrollLeft, document.body.scrollTop]
                  : [0, 0]);
            (r += c[0]), (i += c[1]);
          }
          do (r += t.offsetLeft), (i += t.offsetTop);
          while ((t = t.offsetParent));
          return (document.body.style.position = n), [r, i];
        },
        replaceAll: function e(t, o, i) {
          return t.replace(RegExp(o, "g"), i);
        },
        rotate_bbox: function e(n, r) {
          var a = [n.x, n.y],
            s = [n.x2, n.y],
            l = [n.x, n.y2],
            c = [n.x2, n.y2],
            m = t(a, r),
            u = t(s, r),
            p = t(l, r),
            d = t(c, r),
            f = [m[0], u[0], p[0], d[0]],
            h = [m[1], u[1], p[1], d[1]],
            $ = o(f),
            _ = i(f),
            v = o(h),
            y = i(h);
          return { x: $, y: v, x2: _, y2: y, width: _ - $, height: y - v };
        },
        rotate: t,
        bbox_union: function e(t) {
          for (var o = [], i = [], n = [], a = [], s = 0; s < t.length; s++) {
            var l = t[s];
            o.push(l.x), i.push(l.x2), a.push(l.y), n.push(l.y2);
          }
          var c = r.min(o),
            m = r.max(i),
            u = r.min(a),
            p = r.max(n);
          return { x: c, x2: m, y: u, y2: p, width: m - c, height: p - u };
        },
        distance: function e(t, o) {
          var i = t.x,
            n = t.y,
            r = o.x,
            a = o.y,
            s = r - i,
            l = a - n;
          return Math.sqrt(l * l + s * s);
        },
        x_in_array: function e(t, o) {
          for (var i = o.length; i--; ) if (o[i] === t) return !0;
          return !1;
        },
        clear_sets: function e(t) {
          for (var o = 0; o < t.length; o++) {
            var i = t[o];
            i.forEach(function (e) {
              e.remove();
            }),
              i.splice(0, i.length);
          }
        },
        delete_element: function e(t) {
          t.parentNode && t.parentNode.removeChild(t);
        },
        to_float: function e(t) {
          var o = parseFloat(t);
          return !isNaN(o) && o;
        },
        callback_closure: function e(t, o) {
          return function () {
            return o(t);
          };
        },
        new_style: function e(t) {
          var o = document.getElementsByTagName("head")[0],
            i = document.createElement("style");
          return (
            (i.type = "text/css"),
            (i.media = "screen"),
            i.styleSheet
              ? (i.styleSheet.cssText = t)
              : i.appendChild(document.createTextNode(t)),
            o.appendChild(i),
            i
          );
        },
      };
    })(),
    a = !!window[e + "_mapdata"] && window[e + "_mapdata"],
    s = !!window[e + "_mapinfo"] && window[e + "_mapinfo"],
    l = e.substring(0, e.length - 3).replace("simplemaps_", ""),
    c = !0,
    m = !1,
    u = [],
    p = {
      rounded_box:
        "m2.158.263h5.684c1.05 0 1.895.845 1.895 1.895v5.684c0 1.05-.845 1.895-1.895 1.895h-5.684c-1.05 0-1.895-.845-1.895-1.895v-5.684c0-1.05.845-1.895 1.895-1.895z",
      plus: "m4.8 1.5c-.111 0-.2.089-.2.2v3h-2.9c-.111 0-.2.134-.2.3 0 .166.089.3.2.3h2.9v3c0 .111.089.2.2.2h.2c.111 0 .2-.089.2-.2v-3h3.1c.111 0 .2-.134.2-.3 0-.166-.089-.3-.2-.3h-3.1v-3c0-.111-.089-.2-.2-.2z",
      minus:
        "m1.8 4.7h6.6c.111 0 .2.134.2.3 0 .166-.089.3-.2.3h-6.6c-.111 0-.2-.134-.2-.3 0-.166.089-.3.2-.3",
      arrow:
        "m7.07 8.721c2.874-1.335 2.01-5.762-2.35-5.661v-1.778l-3.445 2.694 3.445 2.843v-1.818c3.638-.076 3.472 2.802 2.35 3.721z",
    },
    d = {
      mapdata: a,
      mapinfo: s,
      load: f,
      hooks: r.clone({
        over_state: !1,
        over_region: !1,
        over_location: !1,
        out_state: !1,
        out_region: !1,
        out_location: !1,
        click_state: !1,
        click_region: !1,
        click_location: !1,
        close_popup: !1,
        zoomable_click_state: !1,
        zoomable_click_region: !1,
        complete: !1,
        refresh_complete: !1,
        zooming_complete: !1,
        back: !1,
        ready: !1,
        click_xy: !1,
      }),
      plugin_hooks: r.clone({
        over_state: [],
        over_region: [],
        over_location: [],
        out_state: [],
        out_region: [],
        out_location: [],
        click_state: [],
        click_region: [],
        click_location: [],
        preclick_state: [],
        preclick_region: [],
        preclick_location: [],
        close_popup: [],
        zoomable_click_state: [],
        zoomable_click_region: [],
        complete: [],
        refresh_complete: [],
        zooming_complete: [],
        back: [],
        ready: [],
        click_xy: [],
      }),
      copy: function () {
        var e = {
          mapdata: r.clone(this.mapdata),
          mapinfo: r.clone(this.mapinfo),
          hooks: r.clone(this.hooks),
          plugin_hooks: r.clone(this.plugin_hooks),
          copy: this.copy,
          load: f,
        };
        return u.push(e), e;
      },
      create: function () {
        var t = {
          mapdata: !!window[e + "_mapdata"] && r.clone(window[e + "_mapdata"]),
          mapinfo: !!window[e + "_mapinfo"] && r.clone(window[e + "_mapinfo"]),
          hooks: r.clone(this.hooks),
          plugin_hooks: r.clone(this.plugin_hooks),
          copy: this.copy,
          load: f,
        };
        return u.push(t), t;
      },
      mobile_device: !!r.isMobile.any(),
      loaded: !1,
    };
  function f() {
    var e,
      t,
      o,
      i,
      a,
      s,
      u,
      d,
      f,
      h,
      $,
      _,
      v,
      y,
      g,
      b,
      x,
      w,
      k,
      z,
      A,
      E,
      C,
      T,
      S,
      B,
      F,
      I,
      P,
      O,
      j,
      L,
      N,
      M,
      D,
      R,
      H,
      q,
      W,
      V,
      Y,
      Q,
      X,
      Z,
      U,
      G,
      J,
      K,
      ee,
      et,
      eo,
      ei,
      en,
      er,
      ea,
      es,
      el,
      ec,
      em,
      eu,
      ep,
      e8,
      ed,
      ef,
      eh,
      e$,
      e_,
      ev,
      ey,
      eg,
      e0,
      eb,
      e3,
      ex,
      ew,
      ek,
      ez,
      e1,
      e5,
      e6,
      e4,
      e7,
      e2,
      eA,
      eE,
      eC,
      eT,
      eS,
      eB,
      eF,
      eI,
      eP,
      eO,
      ej,
      eL,
      eN,
      eM,
      eD,
      eR,
      eH,
      eq,
      eW,
      eV,
      eY,
      eQ,
      eX,
      eZ,
      eU,
      eG,
      eJ,
      eK,
      e9,
      te,
      tt,
      to,
      ti,
      tn,
      tr,
      ta,
      ts,
      tl,
      tc,
      tm,
      tu,
      tp,
      t8,
      td,
      tf,
      th,
      t$,
      t_,
      tv,
      ty,
      tg,
      t0,
      tb,
      t3,
      tx,
      tw,
      tk,
      tz,
      t1 = this,
      t5 = t1.mapdata,
      t6 = t1.mapinfo;
    if (!t5 || !t6) {
      console.log("The mapdata or mapinfo object is missing or corrupted.");
      return;
    }
    var t4 = t1.hooks,
      t7 = t1.plugin_hooks;
    function t2(e, t) {
      var o = t4[e];
      o && o.apply(null, t);
      for (var i = t1.plugin_hooks[e], n = 0; n < i.length; n++) {
        var o = i[n];
        o && o.apply(null, t);
      }
    }
    var y = void 0 === t5.main_settings.div ? "map" : t5.main_settings.div;
    if (!document.getElementById(y))
      return (
        console.log(
          "Can't find target for map #" +
            y +
            ".  Check mapdata.main_settings.div"
        ),
        !1
      );
    function tA() {
      (E =
        !!a.background_image_url &&
        "no" != a.background_image_url &&
        a.background_image_url),
        (C = !!a.background_image_bbox && a.background_image_bbox),
        (W = "yes" == a.background_transparent ? 0 : 1),
        (Y = a.label_size ? a.label_size : 22),
        (Q = a.label_color ? a.label_color : "#ffffff"),
        (X = "yes" == a.url_new_tab),
        (Z = a.location_opacity ? a.location_opacity : 1),
        (U = "yes" == a.js_hooks),
        (G = a.border_size ? a.border_size : 1.5),
        (J = a.popup_color ? a.popup_color : "#ffffff"),
        (P = a.popup_orientation ? a.popup_orientation : "auto"),
        (I = a.popup_centered ? a.popup_centered : "auto"),
        (ee = a.popup_opacity ? a.popup_opacity : 0.9),
        (et = a.popup_shadow > -1 ? a.popup_shadow : 1),
        (eo = a.popup_corners ? a.popup_corners : 5),
        (ei = "yes" == a.popup_nocss),
        (K = !!a.popup_maxwidth && a.popup_maxwidth),
        (en = a.popup_font
          ? a.popup_font
          : "12px/1.5 Verdana, Arial, Helvetica, sans-serif"),
        (V = "no" != a.zoom_out_incrementally),
        (q = a.adjacent_opacity ? a.adjacent_opacity : 0.3),
        (T = a.zoom_time ? a.zoom_time : 0.5),
        (B = a.zoom_increment ? a.zoom_increment : 2),
        (S = "no" != a.zoom_mobile),
        (D = a.fade_time ? 1e3 * a.fade_time : 200),
        (H = t5.labels),
        (F = a.custom_shapes ? a.custom_shapes : {}),
        (L = !!a.initial_back && "no" != a.initial_back && a.initial_back),
        (R = "yes" == a.hide_eastern_labels),
        (N = a.link_text ? a.link_text : "View Website"),
        (O = !!a.order_number && a.order_number),
        (j = a.zoom_percentage ? a.zoom_percentage : 0.99);
    }
    function tE(e) {
      return "on_click" == e || ("detect" == e && !!ec);
    }
    function tC(e) {
      return "off" == e;
    }
    var tT = !1;
    function tS(e) {
      if (
        ((ed.style.width = ""),
        (ef.style.width = ""),
        v
          ? ((ey = ed.offsetWidth) < 1 && (ey = ed.parentNode.offsetWidth),
            (ef.style.width = ey + "px"))
          : ((ey = void 0 === a.width ? 800 : a.width),
            (ed.style.width = ey + "px")),
        (ey *= 1),
        t6.calibrate
          ? (((ex = {}).x = -1 * t6.calibrate.x_adjust),
            (ex.y = -1 * t6.calibrate.y_adjust),
            (ex.x2 = ex.x + t6.calibrate.width),
            (ex.y2 = (ex.x2 - ex.x) / t6.calibrate.ratio))
          : (ex = t6.initial_view),
        (eg = ey / (ek = (eb = ex.x2 - ex.x) / (e3 = ex.y2 - ex.y))),
        (s = eb / 1e3),
        (e8.style.height = eg + "px"),
        !e)
      ) {
        if (((e0 = ey / eb), (ew = 1), $)) {
          var t = [];
          for (var o in t6.state_bbox_array) {
            var i = t6.state_bbox_array[o];
            t.push(i);
          }
          var n,
            l = r.bbox_union(t);
          ev =
            "r" +
            $ +
            "," +
            0.5 * (l.x2 + l.x) * e0 +
            "," +
            0.5 * (l.y2 + l.y) * e0;
          var c = r.rotate_bbox(ex, ev);
          (eb = c.width), (e3 = c.height);
        }
        (eE = "s" + e0 + "," + e0 + ",0,0"), (eA = $ ? eE + ev : eE);
      }
    }
    function tB(e) {
      if (
        t5.legend &&
        t5.legend.entries &&
        !(t5.legend.entries.length < 1) &&
        (!ea || !er)
      ) {
        e && e_ && (e_.innerHTML = "");
        var t = {};
        (e_.style.left = "0em"),
          (e_.style.bottom = "0em"),
          (e_.style.padding = ".8em"),
          (e_.style.lineHeight = "1em"),
          (e_.style["background-color"] = ea
            ? "#ffffff"
            : "rgba(186, 186, 186, 0.2)");
        var o = document.createElement("ul");
        (o.style.display = "inline-block"),
          (o.style["list-style-type"] = "none"),
          (o.style.margin = "0"),
          (o.style.padding = "0"),
          e_.appendChild(o);
        var i =
          "#" +
          y +
          "_holder .sm_legend_item{float: left; cursor: pointer; margin-right: .75em; margin-bottom: .4em; margin-top: .4em;} #" +
          y +
          "_holder{font: " +
          en +
          ";}";
        r.new_style(i);
        for (var n = t5.legend.entries, a = 0; a < n.length; a++) m(a, n[a]);
        var s = t5.legend.html;
        s && "no" != s
          ? (e_.innerHTML = s)
          : (function e() {
              for (var t = 0; t < n.length; t++) {
                var i = n[t];
                (i.shape = i.shape ? i.shape : "circle"),
                  (i.color = i.color ? i.color : "#cecece"),
                  (i.type = i.type ? i.type : "location");
                var r = document.createElement("li");
                r.setAttribute("class", "sm_legend_item"),
                  r.setAttribute("data-id", t);
                var a = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "svg"
                );
                if (
                  (a.setAttributeNS(
                    "http://www.w3.org/2000/xmlns/",
                    "xmlns:xlink",
                    "http://www.w3.org/1999/xlink"
                  ),
                  (a.style.display = "inline-block"),
                  (a.style["margin-right"] = ".2em"),
                  (a.style.width = "1em"),
                  (a.style.height = "1em"),
                  (a.style.stoke = "#ffffff"),
                  (a.style["stoke-width"] = "3"),
                  (a.style.fill = "#ff0067"),
                  (a.style["vertical-align"] = "-0.15em"),
                  "circle" == i.shape)
                ) {
                  var s = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "circle"
                  );
                  s.setAttribute("cx", "50"),
                    s.setAttribute("cy", "50"),
                    s.setAttribute("r", "40");
                } else if ("square" == i.shape) {
                  var s = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "rect"
                  );
                  s.setAttribute("x", "10"),
                    s.setAttribute("y", "10"),
                    s.setAttribute("width", "80"),
                    s.setAttribute("height", "80");
                } else {
                  var l = od[i.shape],
                    s = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "path"
                    );
                  s.setAttribute("d", l),
                    a.setAttribute("width", "1.5"),
                    a.setAttribute("height", "1.5"),
                    s.setAttribute("stroke-width", ".1");
                }
                ["square", "circle"].indexOf(i.shape) > -1
                  ? (s.setAttribute("stroke-width", "10"),
                    a.setAttribute("viewBox", "0 0 100 100"),
                    a.setAttribute("width", "100"),
                    a.setAttribute("height", "100"))
                  : ["diamond", "star"].indexOf(i.shape) > -1
                  ? (a.setAttribute("viewBox", "-.5 -.6 1 1.2"),
                    a.setAttribute("height", "1.8"))
                  : ["triangle"].indexOf(i.shape) > -1
                  ? (a.setAttribute("viewBox", "-.6 -.7 1.2 1.1"),
                    a.setAttribute("width", "1.8"),
                    a.setAttribute("height", "1.8"))
                  : ["heart"].indexOf(i.shape) > -1
                  ? (a.setAttribute("viewBox", "-.7 -.5 1.3 1"),
                    a.setAttribute("width", "2"))
                  : ["marker"].indexOf(i.shape) > -1 &&
                    (a.setAttribute("viewBox", "-.6 -.9 1.1 .8"),
                    a.setAttribute("width", "1.7"),
                    a.setAttribute("height", "1.7")),
                  s.setAttribute("fill", i.color),
                  s.setAttribute("stroke", "white"),
                  a.appendChild(s),
                  r.appendChild(a);
                var c = document.createTextNode(i.name);
                r.appendChild(c), o.appendChild(r);
              }
            })();
        for (
          var l = ef.getElementsByClassName("sm_legend_item"), a = 0;
          a < l.length;
          a++
        )
          r.addEvent(l[a], "mouseover", c), r.addEvent(l[a], "mousedown", c);
      }
      function c() {
        for (var e = t[this.dataset.id], o = 0; o < e.length; o++) {
          var i = e[o].sm;
          ("state" == i.type ? t_ : oN)(i.id);
        }
      }
      function m(e, o) {
        t[e] = [];
        var i = "state" == o.type ? ts : tf;
        for (var n in i) {
          var r = i[n];
          o.ids
            ? o.ids.split(",").indexOf(r.sm.id) > -1 && t[e].push(r)
            : r.sm.attributes.fill != o.color || r.sm.hide || t[e].push(r);
        }
      }
    }
    function tF(e, t, o) {
      if ((void 0 === o && (o = "location" == e ? 4 : 1), "location" == e))
        var i = tf[t];
      else if ("state" == e) var i = ts[t];
      else if ("region" != e) return !1;
      else var i = tl[t];
      var n = function () {
        var e = i.sm.on_click;
        (i.sm.on_click = !0),
          (i.sm.content = oo(i)),
          oL(i.sm.type, i.sm.id, function t() {
            (i.sm.on_click = e), (i.sm.content = oo(i));
          });
      };
      if ("state" == e) {
        function r() {
          i.sm.zoomable || i.sm.region ? oP(i.sm.id, n) : n();
        }
        o0(w, r);
      } else if ("location" == e) {
        function r() {
          oO(i.sm.id, o, n);
        }
        o0(w, r);
      } else if ("region" == e) {
        function r() {
          var e,
            t,
            o = 1;
          (e = i.sm.bbox),
            (t = n),
            void 0 === o && (o = 4),
            void 0 === t && (t = function () {}),
            oe({ sm: { type: "manual", zp: o, bbox: e } }, !1, function () {
              t(), tL();
            });
        }
        o0(w, r);
      }
    }
    var tI = !1,
      tP = !1;
    function tO() {
      if (c) {
        if (location.hostname.match("simplemaps.com")) {
          c = !1;
          return;
        }
        if (tI) {
          if (Math.random() > 0.05) return;
          r.delete_element(tI);
        }
      }
    }
    function tj() {
      eM.hide(), (ep.style.display = "none");
    }
    function tL() {
      eM.show(), (ep.style.display = "block");
    }
    function tN() {
      (eJ = t5.locations),
        (eY = []),
        (eQ = []),
        (eU = []),
        (eG = []),
        (eX = []),
        (te = []),
        !(function () {
          var e = {};
          if (
            ((e.color = !1),
            (e.hover_color = !1),
            (e.opacity = a.region_opacity ? a.region_opacity : 1),
            (e.hover_opacity = a.region_hover_opacity
              ? a.region_hover_opacity
              : 0.6),
            (e.url = !1),
            (e.description = !1),
            (e.description_mobile = !1),
            (e.inactive = !1),
            (e.zoomable = !0),
            (e.hide_name = "yes" == a.region_hide_name),
            (e.popup = a.region_popups ? a.region_popups : em),
            (e.cascade = "yes" == a.region_cascade_all),
            (e.zoom_percentage = j),
            (e.x = !1),
            (e.y = !1),
            (e.x2 = !1),
            (e.y2 = !1),
            z)
          )
            for (var t in z)
              for (var o = 0; o < z[t].states.length; o++)
                eU[z[t].states[o]] = t;
          for (var i in z)
            for (var n in ((eX[i] = Object.create(e)),
            z[i].url && (eX[i].zoomable = !1),
            z[i]))
              "default" != z[i][n] && (eX[i][n] = z[i][n]),
                "yes" == z[i][n] && (eX[i][n] = !0),
                "no" == z[i][n] && (eX[i][n] = !1);
        })(),
        (function () {
          for (var e in ((eK = function (e) {
            var t = {};
            (t.color = a.state_color),
              (t.image_url = !!a.state_image_url && a.state_image_url),
              (t.image_size = a.state_image_size ? a.state_image_size : "auto"),
              (t.image_position = a.state_image_position
                ? a.state_image_position
                : "center"),
              (t.image_x = a.state_image_x ? a.state_image_x : "0"),
              (t.image_y = a.state_image_y ? a.state_image_y : "0"),
              (t.image_color = !!a.state_image_color && a.state_image_color),
              (t.image_background_opacity = a.image_background_opacity
                ? a.image_background_opacity
                : "1"),
              (t.image_hover_url =
                !!a.state_image_hover_url && a.state_image_hover_url),
              (t.image_hover_size = a.state_image_hover_size
                ? a.state_image_hover_size
                : "auto"),
              (t.image_hover_position = a.state_image_hover_position
                ? a.state_image_hover_position
                : "center"),
              (t.image_hover_x = a.state_image_hover_x
                ? a.state_image_hover_x
                : "0"),
              (t.image_hover_y = a.state_image_hover_y
                ? a.state_image_hover_y
                : "0"),
              (t.image_hover_color =
                !!a.state_image_hover_color && a.state_image_hover_color),
              (t.pulse_size = a.state_pulse_size ? a.state_pulse_size : 1.1),
              (t.pulse_speed = a.state_pulse_speed ? a.state_pulse_speed : 1);
            var o = a.state_pulse_color;
            (t.pulse_color = !!o && "auto" != o && o),
              (t.hover_color = a.state_hover_color),
              (t.image_source = !1),
              (t.description = a.state_description),
              (t.url = a.state_url),
              (t.inactive = "yes" == a.all_states_inactive),
              (t.hide = "yes" == a.all_states_hidden),
              (t.hide_label = !1),
              (t.hide_name = "yes" == a.state_hide_name),
              (t.border_color = a.border_color ? a.border_color : "#ffffff"),
              (t.border_hover_color =
                !!a.border_hover_color && a.border_hover_color),
              (t.border_hover_size =
                !!a.border_hover_size && a.border_hover_size),
              (t.emphasize = "yes"),
              (t.zoom_percentage = j),
              (t.zoomable = "yes" == a.all_states_zoomable),
              (t.popup = a.state_popups ? a.state_popups : em),
              (t.opacity = a.state_opacity ? a.state_opacity : 1),
              (t.hover_opacity = a.state_hover_opacity
                ? a.state_hover_opacity
                : 1),
              (t.description_mobile =
                !!a.state_description_mobile && state_description_mobile),
              t.pu,
              (t.path = !1);
            var n = !!eU[e] && eU[e];
            for (var r in (n && eX[n].hide && (t.hide = !0),
            n &&
              eX[n].cascade &&
              (eX[n].color && (t.color = eX[n].color),
              eX[n].hover_color && (t.hover_color = eX[n].hover_color),
              eX[n].description && (t.description = eX[n].description),
              eX[n].url && (t.url = eX[n].url),
              eX[n].inactive && (t.inactive = eX[n].inactive),
              eX[n].hide && (t.hide = eX[n].hide)),
            (eY[e] = Object.create(t)),
            "us" == l &&
              ("GU" == e || "PR" == e || "VI" == e || "MP" == e || "AS" == e) &&
              (eY[e].hide = "yes"),
            "us" == l &&
              R &&
              ("VT" == e ||
                "NJ" == e ||
                "DE" == e ||
                "DC" == e ||
                "NH" == e ||
                "MA" == e ||
                "CT" == e ||
                "RI" == e ||
                "MD" == e) &&
              (eY[e].hide_label = "yes"),
            i[e]))
              "default" != i[e][r] && (eY[e][r] = i[e][r]),
                "yes" == i[e][r] && (eY[e][r] = !0),
                "no" == i[e][r] && (eY[e][r] = !1);
            "off" == a.state_hover_color && (eY[e].hover_color = eY[e].color);
          }),
          (eZ = {}),
          t6.paths))
            eZ[e] = !0;
          for (var e in t5.state_specific)
            t5.state_specific[e] && t5.state_specific[e].path && (eZ[e] = !0);
          for (var e in eZ) eK(e);
        })(),
        (function () {
          var e = {};
          (e.font_family = a.label_font ? a.label_font : "arial,sans-serif"),
            (e.color = a.label_color ? a.label_color : "white"),
            (e.hover_color = a.label_hover_color
              ? a.label_hover_color
              : e.color),
            (e.opacity =
              a.label_opacity || "0" == a.label_opacity ? a.label_opacity : 1),
            (e.hover_opacity = a.label_hover_opacity
              ? a.label_hover_opacity
              : e.opacity),
            (e.size = Y),
            (e.hide = "yes" == a.hide_labels),
            (e.line = !1),
            (e.scale = !!a.label_scale && a.label_scale),
            (e.scale_limit = a.scale_limit ? a.scale_limit : 0.0625),
            (e.rotate = a.label_rotate ? a.label_rotate : 0),
            (e.line_color = a.label_line_color
              ? a.label_line_color
              : "#000000"),
            (e.line_size = a.label_line_size ? a.label_line_size : "1"),
            (e.line_x = !1),
            (e.line_y = !1),
            (e.parent_type = "state"),
            (e.parent_id = !1),
            (e.anchor = a.label_anchor ? a.label_anchor : "middle"),
            (e.pill = !1),
            (e.width = !!a.pill_width && a.pill_width),
            (e.x = !1),
            (e.y = !1),
            (e.name = "Not Named"),
            (e.pill_radius = a.pill_radius ? a.pill_radius : "auto"),
            (e.display = !!a.label_display && a.label_display),
            (e.display_ids = !1),
            (e.id = !1);
          var t = "no" == a.import_labels ? {} : t6.default_labels,
            o = function (o) {
              for (var i in ((eG[o] = Object.create(e)), t[o]))
                "default" != t[o][i] && (eG[o][i] = t[o][i]),
                  "yes" == t[o][i] && (eG[o][i] = !0),
                  "no" == t[o][i] && (eG[o][i] = !1);
            },
            i = function (t) {
              for (var o in (eG[t] || (eG[t] = Object.create(e)), H[t]))
                "default" != H[t][o] && (eG[t][o] = H[t][o]),
                  "yes" == H[t][o] && (eG[t][o] = !0),
                  "no" == H[t][o] && (eG[t][o] = !1);
            };
          for (var n in t) o(n);
          for (var n in H) i(n);
          e9 = function (e) {
            o(e), i(e);
          };
        })(),
        (function () {
          var e = {},
            t = ec
              ? a.scale_limit_mobile
                ? a.scale_limit_mobile
                : 0.4
              : 0.0625;
          (e.scale_limit = a.scale_limit ? a.scale_limit : t),
            (e.color = a.location_color ? a.location_color : "#FF0067"),
            (e.hover_color =
              !!a.location_hover_color && a.location_hover_color),
            (e.border = a.location_border ? a.location_border : 1.5),
            (e.border_color = a.location_border_color
              ? a.location_border_color
              : "#FFFFFF"),
            (e.hover_border = a.location_hover_border
              ? a.location_hover_border
              : 2),
            (e.size = a.location_size),
            (e.description = a.location_description),
            (e.description_mobile =
              !!a.location_description_mobile && location_description_mobile),
            (e.url = a.location_url),
            (e.inactive = "yes" == a.all_locations_inactive),
            (e.type = a.location_type),
            (e.position = "top"),
            (e.pulse = "yes" == a.location_pulse),
            (e.pulse_size = a.location_pulse_size ? a.location_pulse_size : 4),
            (e.pulse_speed = a.location_pulse_speed
              ? a.location_pulse_speed
              : 0.5);
          var o = a.location_pulse_color;
          for (var i in ((e.pulse_color = !!o && "auto" != o && o),
          (e.image_source = a.location_image_source
            ? a.location_image_source
            : ""),
          (e.hide = a.all_locations_hide ? a.all_locations_hide : "no"),
          (e.opacity = Z),
          (e.scale = !a.location_scale || a.location_scale),
          (e.hover_opacity =
            !!a.location_hover_opacity && a.location_hover_opacity),
          (e.image_source = a.location_image_source
            ? a.location_image_source
            : ""),
          (e.image_url = !!a.location_image_url && a.location_image_url),
          (e.image_position = a.location_image_position
            ? a.location_image_position
            : "center"),
          (e.image_hover_source = a.location_image_hover_source
            ? a.location_image_hover_source
            : ""),
          (e.image_hover_url =
            !!a.location_image_hover_url && a.location_image_hover_url),
          (e.image_hover_position = a.location_image_hover_position
            ? a.location_image_hover_position
            : "center"),
          (e.popup = a.location_popups ? a.location_popups : em),
          (e.x = !1),
          (e.y = !1),
          (e.display = a.location_display ? a.location_display : "all"),
          (e.display_ids = !1),
          (e.hide = "yes" == a.all_locations_hidden),
          (e.hide_name = "yes" == a.location_hide_name),
          void 0 == e.type && (e.type = "square"),
          eJ)) {
            for (var n in ((eQ[i] = Object.create(e)), eJ[i])) {
              if ("overwrite_image_location" == n) {
                eQ[i].image_url = eJ[i][n];
                continue;
              }
              "region" == n && (eQ[i].display = "region"),
                "default" != eJ[i][n] && (eQ[i][n] = eJ[i][n]),
                "yes" == eJ[i][n] && (eQ[i][n] = !0),
                "no" == eJ[i][n] && (eQ[i][n] = !1);
            }
            eQ[i].hover_opacity || (eQ[i].hover_opacity = eQ[i].opacity),
              eQ[i].hover_color || (eQ[i].hover_color = eQ[i].color);
          }
        })(),
        (function () {
          var e = {};
          (e.color = a.line_color ? a.line_color : "#000000"),
            (e.size = a.line_size ? a.line_size : 1.5),
            (e.dash = a.line_dash ? a.line_dash : ""),
            (e.origin_location = !1),
            (e.destination_location = !1),
            (e.angle = !1);
          var t = t5.lines ? t5.lines : t5.borders;
          for (var o in t)
            for (var i in ((te[o] = Object.create(e)), t[o]))
              "default" != t[o][i] && (te[o][i] = t[o][i]),
                "yes" == t[o][i] && (te[o][i] = !0),
                "no" == t[o][i] && (te[o][i] = !1);
        })();
    }
    var tM = !1,
      tD = !1,
      tR = !1;
    function tH(e, t) {
      if ("lambert" == t6.proj)
        var o = function e(t) {
          var o = Math.PI,
            i = 0.017453293 * t.lat,
            n = 0.017453293 * t.lng,
            r =
              Math.log(0.8386705593173225 * (1 / 0.7071067659112366)) /
              Math.log(
                Math.tan(0.25 * o + 0.3926990925) *
                  (1 / Math.tan(0.25 * o + 0.2879793345))
              ),
            a =
              (0.8386705593173225 *
                Math.pow(Math.tan(0.25 * o + 0.2879793345), r)) /
              r,
            s = a * Math.pow(1 / Math.tan(0.25 * o + 0.5 * i), r);
          return {
            x: s * Math.sin(r * (n - 1.57079637)),
            y:
              a * Math.pow(1 / Math.tan(0.25 * o + 0.3926990925), r) -
              s * Math.cos(r * (n - 1.57079637)),
          };
        };
      else if ("xy" == t6.proj)
        var o = function e(t) {
          return { x: t.lng, y: t.lat };
        };
      else if ("robinson_pacific" == t6.proj)
        var o = function e(t) {
          var o = t.lng - 150;
          return o < -180 && (o += 360), n({ lat: t.lat, lng: o });
        };
      else if ("mercator" == t6.proj)
        var o = function e(t) {
          var o =
            Math.log(Math.tan((t.lat / 90 + 1) * (Math.PI / 4))) *
            (180 / Math.PI);
          return { x: t.lng, y: o };
        };
      else var o = n;
      var i = { lat: e, lng: t };
      function n(e) {
        var t,
          o,
          i = 5,
          n = function (e) {
            return e < 0 ? -1 : 1;
          },
          r = n(e.lng),
          a = n(e.lat),
          s = Math.abs(e.lng),
          l = Math.abs(e.lat),
          c = ((t = l - 1e-10), Math.floor(t / i) * i),
          m = (c = 0 == l ? 0 : c) + 5,
          u = c / 5,
          p = m / 5,
          d = (l - c) / 5,
          f = [
            0.8487, 0.84751182, 0.84479598, 0.840213, 0.83359314, 0.8257851,
            0.814752, 0.80006949, 0.78216192, 0.76060494, 0.73658673, 0.7086645,
            0.67777182, 0.64475739, 0.60987582, 0.57134484, 0.52729731,
            0.48562614, 0.45167814,
          ],
          h = [
            0, 0.0838426, 0.1676852, 0.2515278, 0.3353704, 0.419213, 0.5030556,
            0.5868982, 0.67182264, 0.75336633, 0.83518048, 0.91537187,
            0.99339958, 1.06872269, 1.14066505, 1.20841528, 1.27035062,
            1.31998003, 1.3523,
          ];
        return {
          x: ((f[p] - f[u]) * d + f[u]) * s * 0.017453293 * r * 1,
          y: ((h[p] - h[u]) * d + h[u]) * a * 1,
        };
      }
      var a = t6.proj_coordinates;
      function s(e, t, i, n) {
        var a,
          s,
          l,
          c,
          m,
          u,
          p,
          d,
          f,
          h,
          $,
          _,
          v,
          y,
          g,
          b,
          x,
          w = o(e),
          k = o(t),
          z = o(i),
          A = o(n),
          E = r.distance(w, k),
          C = r.distance(w, z),
          T = r.distance(k, z),
          S = r.distance(t, i),
          B = T / S,
          F =
            ((a = t.x),
            (s = t.y),
            (l = E / B),
            (c = i.x),
            (m = i.y),
            (u = C / B),
            (d = c - a),
            (h = Math.sqrt((f = m - s) * f + d * d)),
            (y = a + (d * (p = (l * l - u * u + h * h) / (2 * h))) / h),
            (g = s + (f * p) / h),
            (_ = -f * (($ = Math.sqrt(l * l - p * p)) / h)),
            (v = d * ($ / h)),
            (b = y + _),
            { opt1: { x: b, y: (x = g + v) }, opt2: { x: y - _, y: g - v } }),
          I = r.distance(w, A) / B,
          P = Math.abs(r.distance(F.opt1, n) - I),
          O = Math.abs(r.distance(F.opt2, n) - I);
        return P < O
          ? { x: F.opt1.x, y: F.opt1.y }
          : { x: F.opt2.x, y: F.opt2.y };
      }
      function l(e, t, o) {
        var i = /lat[ ]?<([-]?\d+[\.]?\d+)/g.exec(p);
        if (i && e > r.to_float(i[1])) return !1;
        var n = /lat[ ]?>([-]?\d+[\.]?\d+)/g.exec(p);
        if (n && e < r.to_float(n[1])) return !1;
        var a = /lng[ ]?<([-]?\d+[\.]?\d+)/g.exec(p);
        if (a && t > r.to_float(a[1])) return !1;
        var s = /lng[ ]?>([-]?\d+[\.]?\d+)/g.exec(p);
        return !(s && t < r.to_float(s[1]));
      }
      var c = t6.proj_rules;
      if (c)
        for (var m = 0; m < c.length; m++) {
          var u = c[m],
            p = u.condition;
          if (l(e, t, u.condition)) {
            var d = u.points;
            return s(i, a[d[0]], a[d[1]], a[d[2]]);
          }
        }
      return s(i, a[0], a[1], a[2]);
    }
    var tq = !1;
    function tW(e) {
      if (e.sm.zooming_dimensions) return e.sm.zooming_dimensions;
      var t,
        o = r.rotate_bbox(e.sm.bbox, eA),
        i = o.x,
        n = o.y,
        a = o.width,
        s = o.height,
        l = e.sm.zp,
        c = eb * e0,
        m = e3 * e0;
      return (
        (i -= (a / l - a) * 0.5),
        (n -= (s / l - s) * 0.5),
        (a /= l) / (s /= l) > ek
          ? ((n -= (m * (t = a / c) - s) / 2), (s = a / ek))
          : ((i -= (c * (t = s / m) - a) / 2), (a = s * ek)),
        { x: i, y: n, w: a, h: s, r: t }
      );
    }
    function tV(e) {
      if (e) {
        eF.stop();
        for (var t = 0; t < e.sm.states.length; ++t) {
          var o = ts[e.sm.states[t]];
          o.attr(o.sm.attributes), oy(o, "reset", !1, "state");
        }
      }
    }
    function tY() {
      tc &&
        "state" == tc.sm.type &&
        tc.sm.attributes &&
        (tc.sm.ignore_hover || tc.attr(tc.sm.attributes), oy(tc, "out"));
    }
    function tQ(e) {
      if (e) {
        e.stop(), e.attr(e.sm.attributes);
        for (var t = 0; t < e.sm.states.length; ++t)
          oy(ts[e.sm.states[t]], "reset", !1, "region");
      }
    }
    function tX() {
      eI.forEach(function (e) {
        -1 != e.sm.id && tQ(e);
      });
    }
    function tZ(e, t) {
      var o,
        i,
        n,
        a = e.sm.display,
        s = t.sm.type;
      if ("all" == a || ("out" == a && "out" == s)) return !0;
      if ("region" == a && "region" == s) {
        return (
          (o = e),
          (i = t),
          (n = o.sm.point0),
          o.sm.display_ids
            ? o.sm.display_ids.indexOf(i.sm.id) > -1
            : !!Raphael.isPointInsideBBox(i.sm.bbox, n.x, n.y)
        );
      }
      if ("state" == a && "state" == s)
        return (function e(t, o) {
          var i = t.sm.point0;
          if (t.sm.display_ids) return t.sm.display_ids.indexOf(o.sm.id) > -1;
          if (Raphael.isPointInsideBBox(o.sm.bbox, i.x, i.y)) {
            var n = t6.paths[o.sm.id];
            if (Raphael.isPointInsidePath(n, i.x, i.y)) return !0;
          }
          return !1;
        })(e, t);
      var l = r.to_float(a);
      if (l && ew < l) return !0;
      return !1;
    }
    function tU(e, t, o) {
      var i = { transform: t };
      er || ec || o ? e.attr(i) : e.animate(i, 1e3 * T);
    }
    function tG(e, t) {
      var o,
        i,
        n = e.sm.type;
      tj(),
        (o = e),
        (i = t),
        eP.hide(),
        eP.forEach(function (e) {
          if (!e.sm.hide && (tZ(e, o) && e.show(), e.sm.scale)) {
            var t = ew > e.sm.scale_limit ? ew : e.sm.scale_limit,
              n = o8(e, t * e0);
            tU(e, n, i);
          }
        }),
        (function e(t, o) {
          for (var i in (eL.hide(), tu)) {
            var n = tu[i];
            if (!n.sm.hide) {
              if ((tZ(n, t) && tp[n.sm.id].show(), n.sm.line)) {
                var r = op(n);
                n.sm.line.attr({ path: r, transform: eA });
              }
              if (n.sm.scale) {
                var a = ew > n.sm.scale_limit ? ew : n.sm.scale_limit,
                  s = o8(n, a * e0);
                tU(n, s, o), n.sm.pill && tU(td[n.sm.id], s, o);
              }
            }
          }
        })(e, t),
        r.x_in_array(n, ["state", "region", "out"]) && tX(),
        "region" == n
          ? tV(e)
          : "state" == n
          ? tV(tl[e.sm.region])
          : "manual" == n &&
            eI.forEach(function (e) {
              -1 != e.sm.id &&
                (e.sm.zooming_dimensions.r > ew && e.sm.zoomable
                  ? tV(e)
                  : tQ(e));
            }),
        "out" != n && "manual" != n
          ? (eF.stop(),
            eB.stop(),
            eF.attr({ "fill-opacity": q }),
            eB.attr({ "fill-opacity": q }),
            e.stop(),
            e.attr({ "fill-opacity": 1 }),
            e.sm.labels.forEach(function (e) {
              e.sm &&
                e.sm.pill &&
                (e.sm.pill.stop(), e.sm.pill.attr({ "fill-opacity": 1 }));
            }),
            e.animate(
              { "stroke-width": e.sm.border_hover_size * (ey / eb) * s * 1.25 },
              1e3 * T
            ))
          : (eF.attr({ "fill-opacity": 1 }), eB.attr({ "fill-opacity": 1 })),
        eF.animate({ "stroke-width": G * (ey / eb) * s * 1.25 }, 1e3 * T);
    }
    function tJ(e) {
      b && "-1" != g && "region" == e.sm.type
        ? !!L && tL()
        : "state" == e.sm.type || "region" == e.sm.type || L
        ? tL()
        : _ && "out" != e.sm.type && tL();
    }
    function tK(e) {
      return { x: e.x, y: e.y, w: e.w, h: e.h };
    }
    function t9() {
      w.sm && k && (tz.hide(), (k = !1), w.sm && t0.call(w), (el = !1));
    }
    function oe(e, t, o) {
      if (!tM) {
        t9(),
          o3 && (o3.stop(), (o3 = !1)),
          ob && e != ob && t0.call(ob),
          (w = !1),
          (to = e),
          tz.hide(),
          (k = !1),
          (tM = !0),
          (e.sm.zooming_dimensions = tW(e));
        var i = tK(e.sm.zooming_dimensions),
          a = tK(tc.sm.zooming_dimensions);
        (ew = e.sm.zooming_dimensions.r),
          tG(e, t),
          er || (ec && !S) || t
            ? ((tn = i), ez.setViewBox(i.x, i.y, i.w, i.h, !1), s())
            : (ti = (n.Tweenable ? new n.Tweenable() : new Tweenable()).tween({
                from: a,
                to: i,
                duration: 1e3 * T,
                easing: "easeOutQuad",
                step: function (e) {
                  var t;
                  (tn = t = e), ez.setViewBox(t.x, t.y, t.w, t.h, !1);
                },
                finish: function () {
                  s(i);
                },
              }));
      }
      function s() {
        tJ(e, t),
          (tc = e),
          (tM = !1),
          (el = !1),
          (t1.zoom_level = tc.sm.type),
          (t1.zoom_level_id = !!tc.sm.id && tc.sm.id),
          (t1.zoom_ratio = ew),
          t2("zooming_complete", []),
          r.isFunction(o) && o();
      }
    }
    function ot(e) {
      var t = "",
        o = {};
      for (var i in t6.paths) {
        var n,
          r = t6.paths[i];
        r = Raphael._pathToAbsolute(r);
        var a = Raphael.pathBBox(r);
        n = a.x2 - a.x < 10 ? 10 : 1;
        var s = Math.round(a.x * n) / n,
          l = Math.round(a.y * n) / n,
          c = Math.round(a.y2 * n) / n;
        (t +=
          "'" +
          i +
          "':{x: " +
          s +
          ",y:" +
          l +
          ",x2:" +
          Math.round(a.x2 * n) / n +
          ",y2:" +
          c +
          "},"),
          (o[i] = a);
      }
      return (
        (t = t.substring(0, t.length - 1)),
        (t += "}"),
        e || console.log("The new state_bbox_array is: \n\n{" + t),
        o
      );
    }
    function oo(e) {
      var t = e.sm.description,
        o =
          '<a id="xpic_sm_' +
          y +
          '" href="#"><img src="data:image/svg+xml,%3Csvg%20enable-background%3D%22new%200%200%20256%20256%22%20height%3D%22256px%22%20id%3D%22Layer_1%22%20version%3D%221.1%22%20viewBox%3D%220%200%20256%20256%22%20width%3D%22256px%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpath%20d%3D%22M137.051%2C128l75.475-75.475c2.5-2.5%2C2.5-6.551%2C0-9.051s-6.551-2.5-9.051%2C0L128%2C118.949L52.525%2C43.475%20%20c-2.5-2.5-6.551-2.5-9.051%2C0s-2.5%2C6.551%2C0%2C9.051L118.949%2C128l-75.475%2C75.475c-2.5%2C2.5-2.5%2C6.551%2C0%2C9.051%20%20c1.25%2C1.25%2C2.888%2C1.875%2C4.525%2C1.875s3.275-0.625%2C4.525-1.875L128%2C137.051l75.475%2C75.475c1.25%2C1.25%2C2.888%2C1.875%2C4.525%2C1.875%20%20s3.275-0.625%2C4.525-1.875c2.5-2.5%2C2.5-6.551%2C0-9.051L137.051%2C128z%22%2F%3E%3C%2Fsvg%3E" style="width: 100%" alt="Close" border="0" /></a>',
        i = '<a style="line-height: 1.5" id="xpic_sm_' + y + '">X</a>',
        n = er ? i : o;
      n = '<div class="xmark_sm">' + n + "</div>";
      var a = e.sm.url ? e.sm.url : "",
        s = a,
        l = "javascript:" == s.substring(0, 11),
        c = r.replaceAll(s, "'", '"'),
        m = X
          ? 'return (function(e){window.open("' +
            a +
            '","_blank"); return false})()'
          : l
          ? 'return (function(){window.location.href="' +
            a +
            '"; return false;})()'
          : 'return (function(){window.top.location.href="' +
            a +
            '"; return false;})()';
      l && (m = "(function(){" + c + "})()");
      var u = e.sm.description_mobile
        ? e.sm.description_mobile
        : '<div class="tt_mobile_sm"><a tabindex="0" class="btn_simplemaps" onClick=\'' +
          m +
          "'>" +
          N +
          "</a></div>";
      e.sm.on_click || ((n = ""), (u = "")),
        "" != e.sm.url || e.sm.description_mobile || (u = "");
      var p =
        "" == t ? (p = "") : '<div class="tt_custom_sm"; />' + t + "</div>";
      return (
        '<div class="tt_sm"><div>' +
        (e.sm.hide_name
          ? ""
          : '<div class="tt_name_sm">' + e.sm.name + "</div>") +
        n +
        '<div style="clear: both;"></div></div>' +
        p +
        u +
        "</div></div>"
      );
    }
    function oi(e, t) {
      var o = e.sm.zooming_dimensions;
      if (o.w > t.sm.zooming_dimensions.w) return !1;
      var i = t.sm.bbox,
        n = { x: i.x * e0, y: i.y * e0, x2: i.x2 * e0, y2: i.y2 * e0 },
        r = o.x + o.w / 2,
        a = o.y + o.h / 2;
      return !!(r > n.x) && !!(a > n.y) && !!(r < n.x2) && !!(a < n.y2);
    }
    function on(e, t) {
      var o = t.hover ? "_hover" : "",
        i = y + "_pattern_" + e.sm.id + o,
        n = document.getElementById(i);
      n && r.delete_element(n);
      var a = e8.firstChild,
        l = a.namespaceURI,
        c = a.querySelector("defs"),
        m = document.createElementNS(l, "pattern"),
        u = e.sm.id;
      (m.id = i), m.setAttribute("patternUnits", "objectBoundingBox");
      var p = document.createElementNS(l, "image"),
        d = document.createElementNS(l, "rect"),
        f = t.image_color ? t.image_color : t.color;
      d.setAttribute("fill", "#ffffff"),
        d.setAttribute("opacity", t.bg_opacity),
        p.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          t.image_url
        ),
        m.appendChild(d),
        m.appendChild(p),
        c.appendChild(m),
        a.appendChild(c);
      var h = t.image_position,
        _ = "auto" == t.image_size,
        v = "repeat" == h,
        g = "manual" == h,
        b = "center" == h,
        x = Raphael.pathBBox(t6.paths[u]),
        w = x.x2 - x.x,
        k = x.y2 - x.y,
        z = w / k;
      return (
        Raphael._preload(t.image_url, function () {
          var e,
            o,
            i,
            n = this.offsetWidth,
            r = this.offsetHeight,
            a = n / r,
            l =
              ((i = t.image_size),
              _
                ? v || g
                  ? (i =
                      a > 1 ? (n > w ? 1 : n / w) : r > k ? 1 / z : r / k / z)
                  : b && ((i = a / z), a > z || (i = 1 / i))
                : i > 1 && (i = (t.image_size * s) / w),
              i),
            c = w * l,
            u = c / a,
            h = 0,
            y = 0;
          if (
            (v
              ? ((e = l), (o = (l * z) / a))
              : g
              ? ((e = 1), (o = 1), (h = t.image_x * w), (y = t.image_y * k))
              : b &&
                ((e = 1), (o = 1), (h = 0.5 * (w - c)), (y = 0.5 * (k - u))),
            d.setAttribute("x", 0),
            d.setAttribute("y", 0),
            d.setAttribute("width", w),
            d.setAttribute("height", k),
            d.setAttribute("fill", f),
            d.setAttribute("opacity", "1"),
            m.setAttribute("y", 0),
            m.setAttribute("x", 0),
            m.setAttribute("y", 0),
            m.setAttribute("width", e),
            m.setAttribute("height", o),
            p.setAttribute("x", h),
            p.setAttribute("y", y),
            p.setAttribute("width", c),
            $)
          ) {
            var x = h + 0.5 * c,
              A = y + 0.5 * u;
            p.setAttribute(
              "transform",
              "rotate(-" + $ + "," + x + "," + A + ")"
            );
          }
          p.setAttribute("height", u);
        }),
        'url("#' + m.id + '")'
      );
    }
    var or = !1;
    function oa(e) {
      e || ((ta = {}), (ts = {})), (or = t6.state_bbox_array);
      var t = G * e0 * s * 1.25;
      for (var i in ((tr = function (e) {
        var i = !ts[e],
          n = eY[e],
          r = n.path ? n.path : t6.paths[e],
          l = i ? ez.path(r) : ts[e];
        i && (l.sm = { id: e }),
          er || l.node.setAttribute("class", "sm_state sm_state_" + e);
        var c = {
            fill: n.color,
            opacity: n.opacity,
            stroke: n.border_color,
            cursor: "pointer",
            "stroke-opacity": 1,
            "stroke-width": t,
            "stroke-linejoin": "round",
          },
          m = n.border_hover_color ? n.border_hover_color : a.border_color,
          u = n.border_hover_size ? n.border_hover_size : G,
          p = u * e0 * s * 1.25,
          d = {
            opacity: n.hover_opacity,
            fill: n.hover_color,
            stroke: m,
            "stroke-width": p,
          };
        if (((l.sm.image = !1), n.image_url && !er)) {
          var f = {
              hover: !1,
              image_url: n.image_url,
              image_size: n.image_size,
              image_position: n.image_position,
              image_x: n.image_x,
              image_y: n.image_y,
              image_color: n.image_color,
              bg_opacity: n.image_background_opacity,
            },
            h = on(l, f);
          if (((l.sm.image = !0), (c.fill = h), n.image_hover_url)) {
            var f = {
                hover: !0,
                image_url: n.image_hover_url,
                image_size: n.image_hover_size,
                image_position: n.image_hover_position,
                image_x: n.image_hover_x,
                image_y: n.image_hover_y,
                image_color: n.image_hover_color,
                bg_opacity: n.image_background_opacity,
              },
              h = on(l, f);
            d.fill = h;
          } else d.fill = h;
        }
        n.inactive && (c.cursor = "default"),
          n.image_source &&
            ((l.sm.ignore_hover = !0),
            (c.fill = "url(" + o + n.image_source + ")")),
          (n.border_hover_color || n.border_hover_size) && n.emphasize
            ? (l.sm.emphasizable = !0)
            : (l.sm.emphasizable = !1),
          (l.sm.border_hover_size = u),
          l.attr(c),
          l.transform(eA),
          (l.sm.attributes = c),
          (l.sm.over_attributes = d),
          (l.sm.description = n.description),
          (l.sm.adjacent_attributes = { "fill-opacity": q }),
          (l.sm.hide = n.hide),
          (l.sm.hide_label = n.hide_label),
          (l.sm.hide_name = n.hide_name),
          i && (l.sm.region = !1),
          (l.sm.name = n.name ? n.name : t6.names[e]),
          l.sm.name || (l.sm.name = e),
          (l.sm.url = n.url),
          (l.sm.inactive = n.inactive),
          (l.sm.on_click = tE(n.popup)),
          (l.sm.popup_off = tC(n.popup)),
          (l.sm.labels = []),
          (l.sm.zp = n.zoom_percentage),
          (l.sm.zoomable = n.zoomable),
          (l.sm.description_mobile = n.description_mobile),
          (l.sm.type = "state"),
          (l.sm.hide_labels = n.hide_label),
          (l.sm.content = oo(l));
        var $ = or[e];
        $ || ($ = Raphael.pathBBox(t6.paths[e]));
        var _ = { x: $.x, x2: $.x2, y: $.y, y2: $.y2 };
        (l.sm.bbox = _),
          (l.sm.bbox.width = _.x2 - _.x),
          (l.sm.bbox.height = _.y2 - _.y),
          (l.sm.pulse_speed = n.pulse_speed),
          (l.sm.pulse_size = n.pulse_size),
          (l.sm.pulse_color = n.pulse_color ? n.pulse_color : n.border_color),
          l.sm.hide ? l.hide() : i && e6.push(l),
          i && ((ts[e] = l), eF.push(l));
      }),
      eZ))
        tr(i);
      tr[-1], eF.hide();
    }
    function os() {
      eT.attr({ fill: a.background_color, "fill-opacity": W, stroke: "none" });
    }
    var ol = !1;
    function oc(e) {
      if ((e || (tl = {}), z))
        for (var t in z) {
          var o = eX[t],
            i = z[t],
            n = e ? tl[t] : ez.set();
          if (!e) {
            if (((n.sm = {}), (n.sm.states = []), tl[t])) {
              console.log("Duplicate Regions");
              continue;
            }
            for (var a = [], s = 0; s < i.states.length; s++) {
              var l = i.states[s],
                c = ts[l];
              if (!c) {
                console.log(l + " does not exist");
                continue;
              }
              if (c.sm.region) {
                console.log(c.sm.name + " already assigned to a region");
                continue;
              }
              (c.sm.region = t),
                n.sm.states.push(l),
                (er && c.sm.ignore_hover && (o.color || o.hover_color)) ||
                  n.push(c),
                a.push(c.sm.bbox);
            }
            o.x &&
              o.y &&
              o.x2 &&
              o.y2 &&
              (a = [{ x: o.x, y: o.y, x2: o.x2, y2: o.y2 }]),
              (n.sm.bbox = r.bbox_union(a));
          }
          var m = { "fill-opacity": o.opacity, cursor: "pointer" },
            u = { "fill-opacity": o.hover_opacity };
          o.color && (m.fill = o.color),
            o.hover_color && (u.fill = o.hover_color),
            o.inactive && (m.cursor = "default"),
            (n.sm.attributes = m),
            (n.sm.name = i.name),
            (n.sm.description = o.description),
            (n.sm.description_mobile = o.description_mobile),
            (n.sm.url = o.url),
            (n.sm.labels = ez.set()),
            (n.sm.on_click = tE(o.popup)),
            (n.sm.over_attributes = u),
            (n.sm.hide_name = o.hide_name),
            (n.sm.adjacent_attributes = { "fill-opacity": q }),
            (n.sm.zoomable = o.zoomable),
            (n.sm.popup_off = tC(o.popup)),
            (n.sm.zp = o.zoom_percentage),
            (n.sm.inactive = o.inactive),
            (n.sm.type = "region"),
            (n.sm.id = t),
            (n.sm.content = oo(n)),
            e || (eI.push(n), (tl[t] = n)),
            (n.sm.zooming_dimensions = tW(n));
        }
      if (!e) {
        tl[-1] = {};
        var p = tl[-1];
        (p.sm = {}), (p.sm.type = "out"), (p.sm.zp = 1);
        var d = r.clone(ex);
        if (
          ((d.width = d.x2 - d.x),
          (d.height = d.y2 - d.y),
          (p.sm.bbox = d),
          (p.sm.zooming_dimensions = tW(p)),
          (tc = p),
          "object" == typeof g
            ? (((tm = {}).sm = { type: "manual", zp: 1, bbox: g }),
              (tm.sm.zooming_dimensions = tW(tm)),
              (g = -1),
              (b = !1))
            : -1 == g ||
              g in tl ||
              (g in ts
                ? ((ol = ts[g]), (b = !1))
                : console.log(
                    "The initial_zoom is not the id of a region or state"
                  ),
              (g = -1)),
          h)
        ) {
          tl[-2] = {};
          var f = tl[-2];
          f.sm = { type: "manual", zp: 1 };
          var $ = tW(tl[g]),
            _ = $.w,
            v = $.h,
            y = $.w * (h - 1) * 0.5,
            x = $.h * (h - 1) * 0.5;
          f.sm.zooming_dimensions = {
            x: $.x - y,
            y: $.y - x,
            w: _ * h,
            h: v * h,
            r: h,
          };
        }
      }
    }
    function om(e) {
      var t = e.getBBox(!0);
      if (er) {
        var o = e._getBBox(!0);
        t.height = o.height;
      }
      var i = 0.5 * t.width,
        n = 0.5 * t.height,
        r = e.sm.point0;
      return {
        x: r.x - i,
        y: r.y - n,
        x2: r.x + i,
        y2: r.y + n,
        width: t.width,
        height: t.height,
      };
    }
    function ou() {
      for (var e in (r.clear_sets([eL, e5, eB]),
      (tu = {}),
      (td = {}),
      (tp = {}),
      (eG = eG.reverse()),
      (t8 = function (e) {
        var t = eG[e],
          o = !1,
          i = !1;
        if (eG.hasOwnProperty(e)) {
          var n = !tu[e],
            l = ez.set(),
            c = { x: 1 * t.x, y: 1 * t.y },
            m = {},
            u = !1,
            p = !1;
          if (
            ("state" == t.parent_type
              ? (u = ts[t.parent_id])
              : "region" == t.parent_type
              ? (u = tl[t.parent_id])
              : "location" == t.parent_type && (u = tf[t.parent_id]),
            !t.x && !t.y && u)
          ) {
            if ("location" == u.sm.type)
              (i = !0),
                (m.x = u.sm.x),
                (m.y = u.sm.y),
                (c = u.sm.point0),
                (o = !0),
                u.sm.auto_size && (p = !0);
            else if ("state" == u.sm.type) {
              var d = u.sm.bbox;
              if (d.cx && d.cy)
                var f = T,
                  h = S;
              else
                var f = (d.x + d.x2) / 2,
                  h = (d.y + d.y2) / 2;
              (t.x = f), (t.y = h), (m.x = f), (m.y = h), (c = { x: f, y: h });
            }
          }
          if ((t.parent_type, !u)) {
            console.log("The following object does not exist: " + e);
            return;
          }
          if (("Not Named" == t.name && u && (t.name = u.sm.id), n)) {
            if (!i) {
              var $ = r.rotate([t.x, t.y], eA);
              m = { x: $[0], y: $[1] };
            }
            var _ = ez.text(m.x, m.y, t.name);
            tu[e] = _;
          } else var _ = tu[e];
          (_.sm = {}),
            (_.sm.hide = t.hide),
            u && (u.sm.hide_label || u.sm.hide) && (_.sm.hide = !0),
            (_.sm.parent = u),
            u.sm.labels.push(_),
            u.sm.region && tl[u.sm.region].sm.labels.push(_);
          var v = {
              "stroke-width": 0,
              fill: t.color,
              "font-size": t.size,
              "font-weight": "bold",
              cursor: "pointer",
              "font-family": t.font_family,
              "text-anchor": t.anchor,
              opacity: t.opacity,
            },
            y = { fill: t.hover_color, opacity: t.hover_opacity },
            g = { fill: t.color, opacity: t.opacity };
          if (
            (u.sm.inactive && (v.cursor = "default"),
            _.attr(v),
            (_.sm.attributes = v),
            (_.sm.over_attributes = y),
            (_.sm.out_attributes = g),
            (_.sm.type = "label"),
            (_.sm.id = e),
            (_.sm.scale = o || t.scale),
            (_.sm.scale_limit = t.scale_limit),
            (_.sm.x = m.x),
            (_.sm.y = m.y),
            (_.sm.point0 = c),
            (_.sm.line_x = t.line_x),
            (_.sm.line_y = t.line_y),
            (_.sm.line = !1),
            (_.sm.rotate = t.rotate),
            _.transform(o8(_, e0)),
            t.display
              ? (_.sm.display = t.display)
              : "region" == t.parent_type
              ? (_.sm.display = "out")
              : "location" == t.parent_type
              ? (_.sm.display = u.sm.display)
              : (_.sm.display = a.labels_display ? a.labels_display : "all"),
            (_.sm.display_ids = !!t.display_ids && t.display_ids),
            (t.line || t.pill || p) && (_.sm.bbox = om(_)),
            "auto" == t.display && "state" == t.parent_type)
          ) {
            (_.sm.display = 1e-4), _.sm.bbox || (_.sm.bbox = om(_));
            var b = [1.01, 0.501, 0.251, 0.1251, 0.06251, 0.031251],
              x = t6.paths[u.sm.id],
              w = u.sm.bbox;
            for (var k in b) {
              var z = b[k],
                A = om(_),
                E = A.width * z * 0.5,
                C = A.height * z * 0.5,
                T = 0.5 * (A.x2 + A.x),
                S = 0.5 * (A.y2 + A.y),
                f = T - E,
                B = T + E,
                h = S - C,
                F = S + C,
                I = f > w.x && B < w.x2,
                P = h > w.y && F < w.y2;
              if (I && P) {
                var O = Raphael.isPointInsidePath(x, f, h),
                  j = Raphael.isPointInsidePath(x, B, h),
                  L = Raphael.isPointInsidePath(x, f, F),
                  N = Raphael.isPointInsidePath(x, B, F),
                  M = O && j && L && N,
                  D = A.width / z < eb;
                if (M && D) {
                  _.sm.display = z;
                  break;
                }
              }
              if (!_.sm.scale) break;
            }
          }
          if (t.line) {
            var R = op(_),
              H = ez.path(R),
              q = t.line_size * s * e0 * 1.25,
              W = {
                stroke: t.line_color,
                cursor: "pointer",
                "stroke-width": q,
              };
            H.attr(W),
              (H.sm = {}),
              (H.sm.type = "label"),
              (_.sm.pill = !1),
              (H.sm.size = t.line_size),
              (H.sm.id = e),
              (_.sm.line = H),
              e5.push(H),
              l.push(H);
          }
          if ("state" == u.sm.type && t.pill) {
            var V = _.sm.bbox,
              Y = 1.45 * V.width,
              Q = t.width ? t.width : Y,
              X = 1.15 * V.height,
              f = _.sm.x - 0.5 * Q,
              h = _.sm.y - 0.5 * X,
              Z = "auto" != t.pill_radius ? t.pill_radius : X / 5;
            if (td[e]) var U = td[e];
            else {
              var U = ez.rect(f, h, Q, X, Z);
              td[e] = U;
            }
            if (
              (U.transform(o8(_, e0)),
              (U.sm = {}),
              (U.sm.parent = u),
              (U.sm.attributes = r.clone(u.sm.attributes)),
              u.sm.image && (U.sm.attributes.fill = eY[u.sm.id].color),
              (U.sm.over_attributes = r.clone(u.sm.over_attributes)),
              u.sm.image &&
                (U.sm.over_attributes.fill = eY[u.sm.id].hover_color),
              (U.sm.adjacent_attributes = r.clone(u.sm.adjacent_attributes)),
              U.attr(U.sm.attributes),
              r.x_in_array(_.sm.display, ["state", "all"]) &&
                (u.sm.bbox = r.bbox_union([u.sm.bbox, _.sm.bbox])),
              r.x_in_array(_.sm.display, ["region", "all"]) && u.sm.region)
            ) {
              var G = tl[u.sm.region];
              (G.sm.bbox = r.bbox_union([G.sm.bbox, _.sm.bbox])),
                (G.sm.zooming_dimensions = !1),
                (G.sm.zooming_dimensions = tW(G));
            }
            (_.sm.pill = U), eB.push(U), l.push(U), l.push(_);
          } else l.push(_);
          if (
            (("out" != _.sm.display && "all" != _.sm.display) || _.sm.hide
              ? l.hide()
              : e2.push(l),
            "location" != _.sm.parent.sm.type || _.sm.line || e4.push(l),
            eL.push(l),
            (tp[e] = l),
            er || _.node.setAttribute("class", "sm_label sm_label_" + e),
            p)
          ) {
            var J =
                ((a.location_auto_padding
                  ? 1 + 2 * a.location_auto_padding
                  : 1.3) *
                  _.sm.bbox.width) /
                s,
              K = _.sm.parent,
              ee = K.sm.labels,
              et = K.sm.shape_type;
            "triangle" == et ? (J *= 1.3) : "star" == et && (J *= 2);
            var eo = K.sm.id;
            (eQ[eo].size = J), th(eo);
            var K = tf[eo];
            (_.sm.parent = K),
              (K.sm.labels = ee),
              K.sm.labels.push(_),
              (K.sm.auto_size = !0);
          }
        }
      }),
      eG))
        t8(e);
      eL.hide();
    }
    function op(e) {
      var t = e.sm.bbox,
        o = t.x2 - t.x,
        i = t.y2 - t.y,
        n = e.sm.scale ? ew : 1,
        a = 0.5 * (1 - n) * o,
        s = 0.5 * (1 - n) * i,
        l = e.sm.line_x,
        c = e.sm.line_y,
        m = !l || !c,
        u = e.sm.parent.sm.type;
      if ("location" == u && m)
        (l = e.sm.parent.sm.point0.x), (c = e.sm.parent.sm.point0.y);
      else if ("state" == u && m) {
        var p = e.sm.parent.sm.bbox;
        (l = 0.5 * (p.x2 + p.x)), (c = 0.5 * (p.y2 + p.y));
      }
      var d = { x: l, y: c },
        f = [];
      f.push({ x: t.x2 - a, y: 0.5 * (t.y + t.y2) }),
        f.push({ x: t.x + a, y: 0.5 * (t.y + t.y2) }),
        f.push({ x: 0.5 * (t.x + t.x2), y: t.y + s }),
        f.push({ x: 0.5 * (t.x + t.x2), y: t.y2 - s });
      var h = {};
      for (var $ in f) {
        var _ = f[$],
          v = r.distance(_, d);
        (0 == $ || v < h.distance) &&
          ((h.label = _), (h.location = d), (h.distance = v));
      }
      return r.linePath(h.label.x, h.label.y, h.location.x, h.location.y);
    }
    function o8(e, t, o, i, n, r) {
      var a = void 0 === i ? e.sm.x : i,
        s = void 0 === n ? e.sm.y : n;
      return (
        void 0 === o && (o = "0,0"),
        void 0 === r && (r = e.sm.rotate),
        "t " + o + " s" + t + "," + t + "," + a + "," + s + "r" + r
      );
    }
    var od = {
      triangle: "M -0.57735,.3333 .57735,.3333 0,-.6666 Z",
      diamond: "M 0,-0.5 -0.4,0 0,0.5 0.4,0 Z",
      marker:
        "m-.015-.997c-.067 0-.13.033-.18.076-.061.054-.099.136-.092.219-.0001.073.034.139.068.201.058.104.122.206.158.32.021.058.039.117.058.175.006.009.011-.004.011-.009.037-.125.079-.249.144-.362.043-.08.095-.157.124-.244.022-.075.016-.161-.026-.229-.048-.08-.134-.136-.227-.146-.013-.0001-.027-.0001-.04-.0001z",
      heart:
        "m-.275-.5c-.137.003-.257.089-.3.235-.073.379.348.539.58.765.202-.262.596-.33.576-.718-.017-.086-.065-.157-.13-.206-.087-.066-.208-.089-.311-.05-.055.02-.106.053-.143.098-.065-.081-.169-.127-.272-.125",
      star: "m0-.549c-.044.126-.084.252-.125.379-.135.0001-.271.0001-.405.002.108.078.216.155.323.233-.002.029-.016.057-.023.085-.032.099-.066.199-.097.298.049-.031.095-.068.143-.101.062-.044.124-.089.185-.133.109.077.216.158.326.233-.04-.127-.082-.253-.123-.379.109-.079.219-.156.327-.236-.135-.0001-.27-.002-.405-.003-.042-.126-.081-.252-.125-.377",
    };
    function of(e) {
      for (var t in F) od[t] = F[t];
      var i = [];
      for (var t in od) i.push(t);
      for (var t in (r.clear_sets([eP]),
      (tf = {}),
      (th = function (e) {
        var t = "center",
          n = eQ[e];
        if ("image" != n.type)
          var a = {
              "stroke-width": n.border * e0 * s,
              stroke: n.border_color,
              fill: n.color,
              opacity: n.opacity,
              cursor: "pointer",
            },
            l = {
              "stroke-width": n.hover_border * e0 * s,
              stroke: n.border_color,
              fill: n.hover_color,
              opacity: n.hover_opacity,
              cursor: "pointer",
            };
        else {
          t = n.image_position;
          var a = { cursor: "pointer" },
            l = { cursor: "pointer" };
        }
        n.inactive && (a.cursor = "default");
        var c = eQ[e].type,
          m = n.size * s;
        if (n.x && n.y) {
          var u = {};
          (u.x = n.x), (u.y = n.y);
        } else var u = tH(n.lat, n.lng);
        var p = r.rotate([u.x, u.y], eA),
          d = { x: p[0], y: p[1] };
        if ("auto" == n.size) {
          var f = { sm: {} };
          (f.sm.display = n.display),
            (f.sm.auto_size = !0),
            (f.sm.type = "location"),
            (f.sm.hide_label = !1),
            (f.sm.labels = []),
            (f.sm.point0 = u),
            (f.sm.x = d.x),
            (f.sm.y = d.y),
            (f.sm.shape_type = c),
            (f.sm.id = e),
            (tf[e] = f);
          return;
        }
        if ("circle" == c)
          var h = ez.circle(d.x, d.y, 0.5 * m),
            $ = {
              x: d.x - 0.5 * m * ew,
              y: d.y - 0.5 * m * ew,
              x2: d.x + 0.5 * m * ew,
              y2: d.y + 0.5 * m * ew,
            };
        else if (r.x_in_array(c, i)) {
          var _ = m,
            v = "S" + _ + "," + _ + ",0,0 T" + d.x + "," + d.y,
            y = Raphael.transformPath(od[c], v).toString() + "Z";
          "marker" == c && (t = "bottom-center");
          var $ = Raphael.pathBBox(y),
            h = ez.path(y);
        } else if ("image" == c) {
          var g = n.image_url ? n.image_url : o + n.image_source,
            h = ez.image(g, 0, 0);
          (a.src = g), (h.sm = {});
          var $ = !1;
          if (
            (Raphael._preload(g, function () {
              var e = this.width / this.height,
                o = m,
                i = o * e,
                n = d.x - i / 2,
                r = "bottom-center" == t ? d.y - o : d.y - o / 2;
              h.attr({ height: o, width: i, x: n, y: r }),
                (h.sm.bbox = { x: n, y: r, x2: n + i, y2: r + o });
            }),
            n.image_hover_url || n.image_hover_source)
          ) {
            var b = n.image_hover_url
              ? n.image_hover_url
              : o + n.image_hover_source;
            l.src = b;
          }
        } else
          var x = m,
            w = x,
            k = d.x - w / 2,
            z = d.y - x / 2,
            h = ez.rect(k, z, w, x),
            $ = { x: k, y: z, x2: k + w, y2: z + eg };
        (h.sm = {}),
          (h.sm.image = "image" == c),
          (h.sm.attributes = a),
          h.attr(a),
          (h.sm.original_transform = eA),
          (h.sm.over_attributes = l),
          (h.sm.id = e),
          (h.sm.name = n.name),
          (h.sm.scale = n.scale),
          (h.sm.scale_limit = n.scale_limit),
          (h.sm.position = t),
          (h.sm.url = n.url),
          (h.sm.type = "location"),
          (h.sm.shape_type = c),
          (h.sm.description = n.description),
          (h.sm.description_mobile = n.description_mobile),
          (h.sm.inactive = n.inactive),
          (h.sm.on_click = tE(n.popup)),
          (h.sm.popup_off = tC(n.popup)),
          (h.sm.pulse = n.pulse);
        var A = "bottom" == n.position;
        (h.sm.underlay = A),
          (h.sm.pulse_speed = n.pulse_speed),
          (h.sm.pulse_size = n.pulse_size),
          (h.sm.pulse_color = n.pulse_color ? n.pulse_color : n.color),
          (h.sm.x = d.x),
          (h.sm.y = d.y),
          (h.sm.point0 = u),
          (h.sm.bbox = $),
          (h.sm.labels = []),
          (h.sm.size = m),
          (h.sm.hide = n.hide),
          (h.sm.hide_name = n.hide_name),
          (h.sm.display = n.display),
          (h.sm.display_ids = !!n.display_ids && n.display_ids),
          h.transform(o8(h, ew * e0)),
          ("region" == h.sm.display || "state" == h.sm.display || n.hide) &&
            h.hide(),
          (h.sm.content = oo(h)),
          A ? ej.push(h) : eO.push(h),
          eP.push(h),
          (tf[e] = h),
          er || h.node.setAttribute("class", "sm_location sm_location_" + e);
      }),
      eJ))
        th(t);
    }
    function oh(e) {
      var t = t1.zoom_level,
        o = t1.zoom_level_id,
        i = !!e.sm.region && tl[e.sm.region];
      if (!i) return e;
      if ("out" == t) return i;
      if ("region" == t) return o == i.sm.id ? e : i;
      if ("state" == t) return ts[o].sm.region === i.sm.id ? e : i;
      if ("manual" == t)
        return ew > i.sm.zooming_dimensions.r || !i.sm.zoomable ? i : e;
    }
    function o$(e) {
      var t = t1.zoom_level,
        o = t1.zoom_level_id;
      if ("state" == t) return o != e.sm.id;
      if ("region" != t) return !1;
      var i = !!e.sm.region && tl[e.sm.region];
      return !i || (o != i.sm.id && void 0);
    }
    var o_ = function (e, t, o, i) {
        void 0 == o && (o = !1),
          void 0 == i && (i = !1),
          i ||
            (i =
              "over" == t
                ? e.sm.over_attributes
                : "adjacent" == t
                ? e.sm.adjacent_attributes
                : e.sm.attributes),
          !o || e.sm.image ? e.attr(i) : e.animate(i, D);
      },
      ov = function (e, t, o) {
        if ((void 0 == o && (o = !1), "state" == o))
          var i,
            n = e.sm.parent;
        else if ("region" == o) var n = tl[e.sm.parent.sm.region];
        else var n = oh(e.sm.parent);
        if (
          ((i =
            "over" == t
              ? r.clone(n.sm.over_attributes)
              : "adjacent" == t
              ? r.clone(n.sm.adjacent_attributes)
              : r.clone(n.sm.attributes)),
          n.sm.image && "state" == n.sm.type)
        ) {
          var a = eY[n.sm.id];
          "over" == t ? (i.fill = a.hover_color) : (i.fill = a.color);
        }
        o_(e, t, !1, i);
      };
    function oy(e, t, o, i) {
      if (e.sm.labels) {
        var n;
        e.sm.labels.forEach(function (e) {
          if (e.sm) {
            var n = e.sm.pill;
            "over" == t
              ? (e.stop(), o_(e, "over"), n && ov(n, "over"))
              : ("reset" == t || "out" == t) &&
                (o_(e, "out"),
                n && (ov(n, "out", i), o && ov(n, "adjacent", i)));
          }
        });
      }
    }
    var og = !1,
      o0 = function (e, t) {
        if (!e.sm || !e) {
          r.isFunction(t) && t();
          return;
        }
        var o = !!e.sm.image || (!!ec && !!_);
        if ((tz.hide(), o$(e)))
          e.sm.ignore_hover || e.animate(e.sm.attributes, D, i),
            e.animate(e.sm.adjacent_attributes, D, i),
            oy(e, "out", !0);
        else {
          if (
            (er && "location" == e.sm.type && "image" == e.sm.shape_type) ||
            !e ||
            !e.sm
          )
            return;
          e.sm.ignore_hover ||
            (o
              ? (e.attr(e.sm.attributes), i())
              : e.animate(e.sm.attributes, D, i)),
            oy(e, "out");
        }
        function i() {
          r.isFunction(t) && t();
        }
      },
      ob = !1,
      o3 = !1;
    function ox(e) {
      if (e.touches) {
        var t = e.changedTouches ? e.changedTouches[0] : e.touches[0];
        return { x: t.clientX, y: t.clientY };
      }
      var o = ea ? e.clientY + document.documentElement.scrollTop : e.pageY;
      return {
        x: ea ? e.clientX + document.documentElement.scrollLeft : e.pageX,
        y: o,
      };
    }
    var ow = function () {
      t9();
    };
    function ok() {
      eF.toBack(),
        ej.toBack(),
        eC.toBack(),
        e7 && e7.toFront(),
        eL.toFront(),
        eO.toFront(),
        e4.toFront();
    }
    function oz(e) {
      !e &&
        (es
          ? (eF.mouseup(ty), eC.mouseup(ow), eM.mouseup(tw), eC.mouseup(oj))
          : (eF.hover(tg, t0),
            eF.click(ty),
            eC.click(ow),
            eM.click(tw),
            eC.hover(oj, oj)),
        v &&
          (function e() {
            var t;
            function o() {
              o1();
            }
            (tk = function () {
              clearTimeout(t), (t = setTimeout(o, 200));
            }),
              window.addEventListener
                ? (window.addEventListener("resize", tk, !1),
                  window.addEventListener("orientationchange", tk, !1))
                : (window.attachEvent("resize", tk, !1),
                  window.attachEvent("orientationchange", tk, !1)),
              er &&
                (document.body.onresize = function () {
                  o();
                });
          })(),
        _ &&
          (eF.touchstart(ty),
          eF.touchend(ty),
          eM.touchend(tx),
          (function e() {
            function t(e) {
              var t = ox(e),
                r = t.x,
                a = t.y,
                s = (i - r) * o.r,
                l = (n - a) * o.r,
                c = 5 * o.r;
              return (
                (Math.abs(s) > c || Math.abs(l) > c) && (tD = !0),
                { x: o.x + s, y: o.y + l, w: o.w, h: o.h, r: o.r }
              );
            }
            var o,
              i,
              n,
              a = !1;
            function s(e) {
              if (k) return !1;
              e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                (o = { x: tn.x, y: tn.y, w: tn.w, h: tn.h, r: tn.w / eb / e0 }),
                (a = !0);
              var t = ox(e);
              (i = t.x), (n = t.y), tz.hide(), tz.pos(e, { l: i, u: n });
            }
            function l(e) {
              if (a && (!e.touches || !(e.touches.length > 1))) {
                var o = t(e);
                ez.setViewBox(o.x, o.y, o.w, o.h);
              }
            }
            function c(e) {
              if (!a || !tD) {
                (tD = !1), (a = !1);
                return;
              }
              var o = t(e);
              ez.setViewBox(o.x, o.y, o.w, o.h),
                (tn = o),
                ((tc = { sm: {} }).sm.zooming_dimensions = tn),
                (tc.sm.type = "manual"),
                (a = !1),
                setTimeout(function () {
                  tD = !1;
                }, 1),
                tL();
            }
            r.addEvent(e8, "mousedown", s),
              r.addEvent(e8, "mousemove", l),
              r.addEvent(e8, "mouseup", c),
              r.addEvent(e8, "mouseleave", c),
              r.addEvent(e8, "touchstart", s),
              r.addEvent(e8, "touchmove", l),
              r.addEvent(e8, "touchend", c);
          })(),
          (function e() {
            var t = !1;
            function o(e) {
              if (!tM && e.touches && e.touches.length > 1) {
                tR = !0;
                var o,
                  i,
                  n,
                  a =
                    ((i = {
                      x: (o = e).touches[0].pageX,
                      y: o.touches[0].pageY,
                    }),
                    (n = { x: o.touches[1].pageX, y: o.touches[1].pageY }),
                    r.distance(i, n));
                if (t) {
                  var s = a - t;
                  Math.abs(s) > 10 && (s > 0 ? eq() : eW(), (t = a));
                } else t = a;
              }
            }
            r.addEvent(ef, "touchstart", o),
              r.addEvent(ef, "touchmove", o),
              r.addEvent(ef, "touchend", function e(o) {
                (t = !1),
                  setTimeout(function () {
                    tR = !1;
                  }, 100);
              });
          })()),
        (ed.mouseIsOver = !1),
        (ed.onmouseover = function () {
          this.mouseIsOver = !0;
        }),
        (ed.onmouseout = function () {
          this.mouseIsOver = !1;
        }),
        (ed.onwheel = function (e) {
          ed.mouseIsOver &&
            _ &&
            A &&
            (e.preventDefault(), e.deltaY < 0 ? eq() : eW());
        }),
        r.addEvent(document, "keyup", function e(t) {
          "auto" == d &&
            (ef.contains(document.activeElement)
              ? (e$.style.display = "block")
              : (e$.style.display = "none"));
        })),
        eP.hover(tg, t0),
        eP.click(ty),
        eL.hover(tb, t3),
        eL.click(tv),
        _ && (eP.touchend(ty), eP.touchstart(ty), eL.touchend(tv));
    }
    function o1() {
      if (!(ed.offsetWidth < 1)) {
        tS(!0), ez.setSize(ey, eg);
        var e = G * (ey / eb) * s * 1.25;
        eF &&
          eP &&
          (eF.forEach(function (t) {
            t.attr({ "stroke-width": e }),
              (t.sm.attributes["stroke-width"] = e),
              (t.sm.over_attributes["stroke-width"] =
                t.sm.border_hover_size * (ey / eb) * s * 1.25);
          }),
          eP.forEach(function (e) {
            "image" != eQ[e.sm.id].type &&
              ((e.sm.attributes["stroke-width"] =
                eQ[e.sm.id].border * (ey / eb) * s * 1.25),
              (e.sm.over_attributes["stroke-width"] =
                eQ[e.sm.id].hover_border * (ey / eb) * s * 1.25),
              e.attr({ "stroke-width": e.sm.attributes["stroke-width"] }));
          }),
          e5.forEach(function (e) {
            var t = e.sm.size * (ey / eb) * s * 1.25;
            e.attr({ "stroke-width": t });
          }),
          e7.forEach(function (e) {
            var t = e.sm.size * (ey / eb) * s * 1.25;
            e.attr({ "stroke-width": t });
          })),
          tO();
        var t = ey / 2 > 250 ? ey / 2 : 250;
        tt = K || t;
      }
    }
    function o5(e) {
      var t = h ? tl[-2] : tl[g],
        o = tl[g];
      if ((L || tj(), !e)) {
        if (ol) var i = ol;
        else if (tm) var i = tm;
        else var i = t;
        oe(i, (!ol && !tm) || !h);
      }
      if (b && -1 != g) {
        eC.show(), L || tj();
        for (var n = 0; n < o.sm.states.length; n++) {
          var r = ts[o.sm.states[n]];
          r.sm.hide || r.show();
        }
        for (var n in tu) {
          var a = tu[n],
            s = tp[n];
          a.sm.parent &&
            "state" == a.sm.parent.sm.type &&
            (a.sm.parent.sm.region != o.sm.id || !a.sm.parent.sm.region) &&
            ((a.sm.hide = !0), s.hide());
        }
        e7.forEach(function (e) {
          Raphael.isPointInsideBBox(o.sm.bbox, e.sm.bbox.x, e.sm.bbox.y) &&
            e.show();
        }),
          !e && h && oe(tl[g]);
        return;
      }
      eC.show(),
        e6.show(),
        e2.show(),
        e7.show(),
        e || !h || ol || tm || oe(tl[g]);
    }
    function o6(e) {
      tA(),
        tN(),
        oa(!0),
        oc(!0),
        of(!0),
        ou(),
        os(),
        tG(tc, !0),
        ok(),
        oz(!0),
        o1(),
        o5(!0),
        tJ(tc),
        oU(),
        oE(!0),
        t2("refresh_complete", []),
        tB(!0),
        r.isFunction(e) && e();
    }
    function o4(n) {
      var c,
        T,
        S,
        F,
        O,
        j,
        N,
        D,
        R,
        q,
        W,
        Y,
        Q,
        Z,
        U,
        G,
        ev,
        ek,
        eY,
        eQ,
        eX,
        eZ,
        eU,
        eG,
        eJ,
        eK,
        e9,
        to;
      if (
        ((t5 = t1.mapdata),
        (t6 = t1.mapinfo),
        e8 && delete window.paper,
        oZ(),
        (i = t5.state_specific),
        (a = t5.main_settings),
        (T = (c = document.getElementsByTagName("script"))[c.length - 1].src),
        (S = "no" != a.back_image && a.back_image),
        (e = "no" != a.back_image_url && a.back_image_url),
        (o =
          (t = "default" != a.images_directory && a.images_directory) ||
          T.substring(0, T.lastIndexOf("/usmap.js") + 1) + "map_images/"),
        !e && S && (e = o + S),
        (er = "VML" == Raphael.type),
        (ea = !!window.document.documentMode),
        (es = !!r.isMobile.iOS()),
        (ec = !!r.isMobile.any()),
        (em = a.pop_ups ? a.pop_ups : a.popups),
        (eu =
          void 0 === a.mobile_scaling && "no" != a.mobile_scaling
            ? 1
            : a.mobile_scaling),
        (el = !1),
        (tT = tC(em)),
        (y = void 0 === a.div ? "map" : a.div),
        (g = void 0 === a.initial_zoom ? -1 : a.initial_zoom),
        (b = "yes" == a.initial_zoom_solo && -1 != g),
        (h =
          void 0 !== a.fly_in_from && "no" != a.fly_in_from && a.fly_in_from),
        (v = "responsive" == a.width),
        "0" == ($ = !!a.rotate && a.rotate) && ($ = !1),
        (M = "no" != a.zoom),
        (_ = "yes" == a.manual_zoom),
        (d = void 0 === a.keyboard_navigation ? "auto" : a.keyboard_navigation),
        (f = void 0 === a.legend_position ? "inside" : a.legend_position),
        (A = "no" != a.allow_scrolling),
        (z = !!t6.default_regions && !!M && t6.default_regions),
        t5.regions && (z = t5.regions),
        t5.labels && (H = t5.labels),
        (x = !1),
        (w = !1),
        (k = !1),
        (u = !1),
        (function e() {
          if ("continent" != l) return !1;
          var t = 0;
          for (var o in t6.paths) t++;
          return t > 8;
        })())
      ) {
        alert("The continent map can't be used with other data.");
        return;
      }
      tA(),
        (function e() {
          if (
            ((ed = document.getElementById(y)),
            (ef =
              !!document.getElementById(y + "_holder") &&
              document.getElementById(y + "_holder")))
          ) {
            ed.removeChild(ef);
            var t = document.getElementById("tt_sm_" + y);
            t && t.parentNode.removeChild(t);
          }
          (ef = document.createElement("div")),
            (ep = document.createElement("div")),
            (e$ = document.createElement("div")),
            (eh = document.createElement("div")),
            (e8 = document.createElement("div")),
            (e_ = document.createElement("div")),
            (ep.id = y + "_outer"),
            (eh.id = y + "_zoom"),
            (e$.id = y + "_access"),
            (e_.id = y + "_legend"),
            (e8.id = y + "_inner"),
            (ef.id = y + "_holder"),
            (ef.style.position = "relative"),
            ef.setAttribute("tabIndex", 0),
            (ef.style.outline = "none"),
            (e8.style.position = "relative"),
            (ep.style.position = "absolute"),
            (eh.style.position = "absolute"),
            (e$.style.position = "absolute"),
            (e$.style.maxWidth = "75%"),
            (e_.style.position = "inside" == f ? "absolute" : "relative"),
            (eh.style.zIndex = "1"),
            (ep.style.zIndex = "1"),
            (e$.style.zIndex = "1"),
            (e$.style.display = "yes" == d ? "block" : "none"),
            (e_.style.zIndex = "1"),
            ed.appendChild(ef),
            ef.appendChild(eh),
            ef.appendChild(ep),
            ef.appendChild(e$),
            ef.appendChild(e8),
            ef.appendChild(e_);
        })(),
        tS(),
        (function e() {
          if (
            ((eC = (ez = Raphael(e8, ey, eg)).set()),
            (eT = ez.rect(ex.x - 2 * eb, ex.y - 2 * e3, 5 * eb, 5 * e3)),
            E)
          ) {
            E.indexOf("/osm/noattr/") > -1 && (m = !0);
            var t = C || ex;
            (eS = ez.image(E, t.x, t.y, t.x2 - t.x, t.y2 - t.y)), eC.push(eS);
          }
          eC.push(eT),
            eC.transform(eE),
            eC.hide(),
            (eF = ez.set()),
            (e6 = ez.set()),
            (eI = ez.set()),
            (eP = ez.set()),
            (eO = ez.set()),
            (ej = ez.set()),
            (eL = ez.set()),
            (e4 = ez.set()),
            (e2 = ez.set()),
            (e7 = ez.set()),
            (eB = ez.set()),
            (e5 = ez.set()),
            (e1 = ez.set()).push(eF, eP, eC, eL, e7);
        })(),
        tO(),
        (function e() {
          ((tP = document.createElement("div")).style.cssText =
            "overflow: visible !important; clip-path: none !important; display:inline !important; opacity:1 !important; transform: none !important; visibility: visible !important; z-index: 1 !important; right: 5px !important; bottom: 5px !important; z-index: 1 !important; position: absolute !important; filter: opacity(1) !important;"),
            e8.appendChild(tP);
          if (m) {
            var t = document.createElement("a");
            (t.href = "https://www.openstreetmap.org/copyright"),
              (t.title = "Background \xa9 OpenStreetMap contributors"),
              (t.innerHTML = "&copy; OSM"),
              (t.style.cssText =
                "font: 12px Verdana, Arial, Helvetica, sans-serif !important; cursor: pointer !important; float: right !important; color: #000000 !important; text-decoration: none !important;"),
              (t.style.marginLeft = ".5em"),
              tP.appendChild(t);
          }
        })(),
        ei ||
          (function e() {
            if (!tq) {
              var t = c([
                  "borderRadius",
                  "MozBorderRadius",
                  "WebkitBorderRadius",
                ]),
                o = ec ? 2 * eo : eo,
                i = ey / 2 > 250 ? ey / 2 : 250;
              tt = K || i;
              var n = c(["boxShadow", "MozBoxShadow", "WebkitBoxShadow"]),
                a = n
                  ? n +
                    ": " +
                    3 * et +
                    "px " +
                    3 * et +
                    "px " +
                    4 * et +
                    "px rgba(0,0,0,.5);"
                  : "";
              if ((et < 0.01 && (a = ""), ec)) {
                var s = /(\d+)(px|em)(.*)/g.exec(en);
                en = parseFloat(s[1]) * eu + s[2] + s[3];
              }
              var l =
                ".tt_mobile_sm{margin-top: .4em;} .tt_sm{" +
                (t ? t + ": " + o + "px;" : "") +
                a +
                "z-index: 1000000; background-color: " +
                J +
                "; padding: .6em; opacity:" +
                ee +
                "; font: " +
                en +
                "; color: black;} .tt_name_sm{float: left; font-weight: bold} .tt_custom_sm{overflow: hidden;}";
              (l +=
                ".btn_simplemaps{color: black;text-decoration: none;background: #ffffff;display: inline-block;padding: .5em .5em;margin: 0; width: 100%; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; line-height: 1.43;text-align: center;white-space: nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action: manipulation;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border: 1px solid;border-radius: .3em;}    .btn_simplemaps:hover{  text-decoration: underline;}"),
                (l +=
                  ".xmark_sm{float: " +
                  (er ? "left" : "right") +
                  "; margin-left: .5em; cursor: pointer; line-height: 0px; width: 1.3em !important;}"),
                r.new_style(l),
                (tq = !0);
            }
            function c(e) {
              for (var t = document.documentElement, o = 0; o < e.length; o++)
                if (e[o] in t.style) {
                  var i = e[o];
                  return (i = (i = (i = (i = (i = i.replace(
                    "borderRadius",
                    "border-radius"
                  )).replace("MozBorderRadius", "-moz-border-radius")).replace(
                    "WebkitBorderRadius",
                    "-webkit-border-radius"
                  )).replace("boxShadow", "box-shadow")).replace(
                    "MozBoxShadow",
                    "-moz-box-shadow"
                  )).replace("WebkitBoxShadow", "-webkit-box-shadow");
                }
            }
          })(),
        (tz =
          ((W = (q = r.findPos(e8))[0]),
          (Y = q[1]),
          (R = 0),
          (Q = 0),
          {
            create: function () {
              (D = document.createElement("div")).setAttribute(
                "id",
                "tt_sm_" + y
              ),
                (D.style.position = "absolute"),
                (D.style.display = "none"),
                e8.appendChild(D),
                (e8.onmousemove = this.pos),
                (D.onmousemove = this.pos);
            },
            show: function (e) {
              !tT &&
                ((u = !1),
                null == D && tz.create(),
                (D.style.display = "block"),
                (D.style.zIndex = 2),
                (D.style.maxWidth = tt + "px"),
                (D.innerHTML = e.sm.content),
                tz.update_pos(e));
            },
            reset_pos: function (e, t, o) {
              void 0 == D && tz.create(), tz.set_pos(0 + t, 0 + e, o);
            },
            update_pos: function (e) {
              tz.set_pos(F, O, e);
            },
            pos: function (e, t) {
              t
                ? ((F = t.u), (O = t.l))
                : ((F = ea
                    ? event.clientY + document.documentElement.scrollTop
                    : e.pageY),
                  (O = ea
                    ? event.clientX + document.documentElement.scrollLeft
                    : e.pageX)),
                (F -= Y),
                (O -= W),
                !tT && !x && !u && (!k || !el) && tz.set_pos(F, O);
            },
            set_pos: function (e, t, o) {
              if (D) {
                if (
                  !(
                    o &&
                    o.sm.on_click &&
                    ("yes" == I || ("auto" == I && ey < 401))
                  ) &&
                  e &&
                  t
                ) {
                  if (((j = 0 + 0.5 * ey), (N = 0 + 0.5 * eg), t > j && e > N))
                    i = 4;
                  else if (t < j && e > N) i = 3;
                  else if (t > j && e < N) i = 2;
                  else var i = 1;
                  "below" == P
                    ? (3 == i && (i = 1), 4 == i && (i = 2))
                    : "above" == P && (1 == i && (i = 3), 2 == i && (i = 4)),
                    1 == i
                      ? ((D.style.bottom = "auto"),
                        (D.style.top = e + 5 + "px"),
                        (D.style.left = t + 5 + 5 + "px"),
                        (D.style.right = "auto"))
                      : 2 == i
                      ? ((D.style.bottom = "auto"),
                        (D.style.top = e + 5 + "px"),
                        (D.style.right = ey - t + 5 + "px"),
                        (D.style.left = "auto"))
                      : 3 == i
                      ? ((D.style.bottom = eg - e + 5 + "px"),
                        (D.style.top = "auto"),
                        (D.style.left = t + 5 + 3 + "px"),
                        (D.style.right = "auto"))
                      : ((D.style.bottom = eg - e + 5 + "px"),
                        (D.style.top = "auto"),
                        (D.style.right = ey - t + 5 + "px"),
                        (D.style.left = "auto"));
                } else {
                  (D.style.top = "-100px"),
                    (D.style.left = "-100px"),
                    (D.style.bottom = "auto"),
                    (D.style.right = "auto"),
                    (R = parseInt(D.offsetHeight, 10));
                  var n =
                      ey - (Q = parseInt(D.offsetWidth, 10)) > 0
                        ? 0.5 * (ey - Q)
                        : 0,
                    r = eg - R > 0 ? 0.5 * (eg - R) : 0;
                  (D.style.top = r + "px"),
                    (D.style.left = n + "px"),
                    (D.style.right = "auto"),
                    (D.style.bottom = "auto");
                }
              }
            },
            hide: function () {
              void 0 != D && (D.style.display = "none"),
                (q = r.findPos(e8)) && ((W = q[0]), (Y = q[1]));
            },
          })),
        (G = a.navigation_color ? a.navigation_color : "#f7f7f7"),
        (ev = a.navigation_border_color
          ? a.navigation_border_color
          : "#636363"),
        (ek = a.navigation_opacity ? a.navigation_opacity : 0.8),
        (eY = a.arrow_color ? a.arrow_color : G),
        (eQ = a.arrow_color_border ? a.arrow_color_border : ev),
        (eX = a.arrow_border_color ? a.arrow_border_color : eQ),
        (eZ = void 0 === a.navigation_size ? 40 : a.navigation_size),
        (eU =
          void 0 === a.navigation_size_mobile
            ? eu * eZ
            : a.navigation_size_mobile),
        (eG = ec ? eU : eZ),
        (eJ = "yes" == a.arrow_box ? 1 : 0),
        (eK = eG *= 1),
        (e9 = 0.1 * eG),
        (to = eG / 10),
        (function t() {
          eM = ez.set();
          var o = eG,
            i = eG;
          if (e) {
            var n = new Image();
            (n.onload = function () {
              (Z = n.width), (U = n.height), r();
            }),
              (n.src = e);
          } else r();
          function r() {
            if (e) {
              var t = (eN = Raphael(ep, Z, U)).image(e, 0, 0, Z, U);
              (eK = U), t.attr({ cursor: "pointer" }), eM.push(t), eM.click(tw);
            } else {
              var n = (eN = Raphael(ep, o, i))
                  .path(p.rounded_box)
                  .attr({
                    fill: eY,
                    "stroke-width": 1,
                    stroke: eX,
                    "stroke-opacity": eJ,
                    "fill-opacity": 0,
                    cursor: "pointer",
                  }),
                r = eN
                  .path(p.arrow)
                  .attr({
                    stroke: eX,
                    "stroke-width": 1.5,
                    "stroke-opacity": 1,
                    fill: eY,
                    "fill-opacity": 1,
                    cursor: "pointer",
                  });
              (eM = ez.set()).push(n, r),
                eM.transform("S" + to + "," + to + ",0,0 T0,0");
            }
            L || tj(),
              (ep.style.left = e9 + "px"),
              (ep.style.top = e9 + "px"),
              _ &&
                (function e() {
                  eH = Raphael(eh, eG, 2 * eG + e9);
                  var t = p.plus,
                    o = p.minus,
                    i = p.rounded_box,
                    n = eH
                      .path(i)
                      .attr({
                        fill: G,
                        "stroke-width": 1,
                        stroke: ev,
                        "stroke-opacity": 1,
                        "fill-opacity": ek,
                        cursor: "pointer",
                      }),
                    r = eH
                      .path(t)
                      .attr({
                        "stroke-width": 0,
                        "stroke-opacity": 0,
                        fill: ev,
                        "fill-opacity": 1,
                        opacity: 1,
                        cursor: "pointer",
                      });
                  (eD = ez.set()).push(n, r);
                  var a = "S" + to + "," + to + ",0,0 T0,0";
                  eD.transform(a);
                  var s = eH
                      .path(i)
                      .attr({
                        fill: G,
                        "stroke-width": 1,
                        stroke: ev,
                        "stroke-opacity": 1,
                        "fill-opacity": ek,
                        cursor: "pointer",
                      }),
                    l = eH
                      .path(o)
                      .attr({
                        "stroke-width": 0,
                        "stroke-opacity": 0,
                        fill: ev,
                        "fill-opacity": 1,
                        opacity: 1,
                        cursor: "pointer",
                      });
                  (eR = ez.set()).push(s, l);
                  var a = "S" + to + "," + to + ",0,0 T0," + (eG + e9);
                  function c(e, t) {
                    if ((void 0 === t && (t = "z"), w && "region" != w.sm.type))
                      t0.call(w, !0, function () {
                        (w = !1), c(e);
                      });
                    else {
                      if (
                        "z" == t &&
                        !(function e(t) {
                          var o = tc.sm.zooming_dimensions.w / t,
                            i = t < 1;
                          if (-1 != g && ("manual" == tc.sm.type || b)) {
                            var n = tl[g].sm.zooming_dimensions.w;
                            if (i && o > n - 1 && (oi(tc, tl[g]) || b))
                              return oe(tl[g]), !1;
                          }
                          return (
                            !i ||
                            !(o > tl[-1].sm.zooming_dimensions.w - 1) ||
                            (b || oe(tl[-1]), !1)
                          );
                        })(e)
                      )
                        return;
                      var o = { sm: { type: "manual", zp: 1 } };
                      ti &&
                        (((tc = {
                          sm: { type: "manual", zp: 1 },
                        }).sm.zooming_dimensions = tn),
                        (tc.sm.bbox = {
                          x: tn.x / e0,
                          y: tn.y / e0,
                          width: tn.w / e0,
                          height: tn.h / e0,
                        }));
                      var i = (function e(t, o) {
                        var i = tc.sm.zooming_dimensions.w,
                          n = tc.sm.zooming_dimensions.h,
                          r = tc.sm.zooming_dimensions.x,
                          a = tc.sm.zooming_dimensions.y;
                        if ("x" == o)
                          var r =
                            tc.sm.zooming_dimensions.x +
                            tc.sm.zooming_dimensions.w * t;
                        else if ("y" == o)
                          var a =
                            tc.sm.zooming_dimensions.y +
                            tc.sm.zooming_dimensions.h * t;
                        else
                          var i = tc.sm.zooming_dimensions.w / t,
                            n = tc.sm.zooming_dimensions.h / t,
                            r =
                              tc.sm.zooming_dimensions.x +
                              (tc.sm.zooming_dimensions.w - i) / 2,
                            a =
                              tc.sm.zooming_dimensions.y +
                              (tc.sm.zooming_dimensions.h - n) / 2;
                        var s = i / (eb * e0);
                        return { x: r, y: a, w: i, h: n, r: s };
                      })(e, t);
                      if (!i) return;
                      (o.sm.zooming_dimensions = i), oe(o);
                    }
                  }
                  eR.transform(a),
                    (eh.style.top = eK + 2 * e9 + "px"),
                    (eh.style.left = e9 + "px"),
                    (eR = ez.set()).push(s, l),
                    (eq = function () {
                      c(B);
                    }),
                    (eV = function (e, t) {
                      c(e, t);
                    }),
                    (eW = function () {
                      c(1 / B);
                    }),
                    (t1.zoom_in = eq),
                    (t1.zoom_out = eW),
                    eD.click(eq),
                    eR.click(eW),
                    eD.touchend(eq),
                    eR.touchend(eW);
                })();
          }
        })(),
        tN(),
        os(),
        oa(),
        oc(),
        setTimeout(function () {
          var e;
          of(),
            ou(),
            (function e() {
              var t = t5.lines ? t5.lines : t5.borders;
              if (t) {
                for (var o in t) {
                  var i = t[o],
                    n = te[o],
                    r = n.size * (ey / eb) * s * 1.25,
                    a = !1;
                  if (n.origin_location && n.destination_location) {
                    var l = tf[n.origin_location].sm.point0,
                      c = tf[n.destination_location].sm.point0;
                    if (
                      ((a =
                        "M " + l.x + "," + l.y + " " + c.x + "," + c.y + " Z"),
                      n.angle)
                    ) {
                      var m = parseFloat(n.angle);
                      if (m > -61 && m < 61) {
                        l.x <= c.x && (m *= -1);
                        var u = Raphael.transformPath(
                            a,
                            "R" + m + "," + l.x + "," + l.y + "S2"
                          ).toString(),
                          p = Raphael.transformPath(a, "R-90S2").toString(),
                          d = Raphael.pathIntersection(u, p)[0];
                        a =
                          "M " +
                          l.x +
                          "," +
                          l.y +
                          " C" +
                          l.x +
                          "," +
                          l.y +
                          "," +
                          d.x +
                          "," +
                          d.y +
                          "," +
                          c.x +
                          "," +
                          c.y;
                      }
                    }
                  }
                  var f = a || i.path,
                    h = ez.path(f);
                  h.transform(eA),
                    h.attr({
                      stroke: n.color,
                      fill: "none",
                      cursor: "pointer",
                      "stroke-dasharray": [n.dash],
                      "stroke-width": r,
                      "stroke-linejoin": "round",
                      "stroke-miterlimit": 4,
                    }),
                    (h.sm = {}),
                    (h.sm.size = n.size),
                    (h.sm.bbox = h.getBBox(!0)),
                    er || h.node.setAttribute("class", "sm_line sm_line_" + o),
                    e7.push(h);
                }
                e7.hide();
              }
            })(),
            (function e() {
              (e$.style.right = "0em"), (e$.style.top = "0em");
              var t =
                  void 0 === a.navigate_title ? "Navigate" : a.navigate_title,
                o = void 0 === a.keyboard_omit ? "" : a.keyboard_omit;
              if (!(o.indexOf("navigat") > -1)) {
                var i = document.createElement("select");
                i.options.add(new Option(t, "-1")),
                  i.options.add(new Option("Back", "back")),
                  _ &&
                    (i.options.add(new Option("Zoom in", "in")),
                    i.options.add(new Option("Zoom out", "out")),
                    i.options.add(new Option("Left", "left")),
                    i.options.add(new Option("Right", "right")),
                    i.options.add(new Option("Up", "up")),
                    i.options.add(new Option("Down", "down"))),
                  (i.style.marginRight = ".5em"),
                  (i.style.marginTop = ".5em"),
                  (i.style.float = "left"),
                  e$.appendChild(i),
                  (i.onchange = function (e) {
                    if ("-1" == this.value) return !1;
                    "back" == this.value && tx(),
                      "out" == this.value && eW(),
                      "in" == this.value && eq(),
                      "left" == this.value && eV("-.25", "x"),
                      "right" == this.value && eV(".25", "x"),
                      "up" == this.value && eV("-.25", "y"),
                      "down" == this.value && eV(".25", "y"),
                      setTimeout(function () {
                        i.value = "-1";
                      }, 1e3);
                  });
              }
              var n = void 0 === a.states_title ? "States" : a.states_title,
                s = void 0 === a.regions_title ? "Regions" : a.regions_title,
                l = {
                  state: { title: n, array: ts },
                  location: {
                    title:
                      void 0 === a.locations_title
                        ? "Locations"
                        : a.locations_title,
                    array: tf,
                  },
                  region: { title: s, array: tl },
                };
              for (var c in l) {
                var m = l[c],
                  u = o.indexOf(c) > -1,
                  p = Object.size(m.array);
                if (!(p < 1) && (!(p < 2) || "region" != c) && !u) {
                  var d = document.createElement("select");
                  d.options.add(new Option(m.title, "-1")),
                    (d.style.marginRight = ".5em"),
                    (d.style.marginTop = ".5em"),
                    (d.style.float = "left");
                  var f = [];
                  for (var h in m.array) f.push(m.array[h]);
                  for (
                    var $ = f.sort(function (e, t) {
                        return e.sm.name > t.sm.name ? 1 : -1;
                      }),
                      h = 0;
                    h < $.length;
                    h++
                  ) {
                    var v = $[h];
                    "out" != v.sm.type &&
                      !v.sm.inactive &&
                      !v.sm.hide &&
                      d.options.add(new Option(v.sm.name, v.sm.id));
                  }
                  (d.onchange = r.callback_closure(
                    { entry: m, dropdown: d },
                    function (e) {
                      var t = e.dropdown,
                        o = e.entry;
                      if ("-1" == t.value) return !1;
                      var i = o.array[t.value],
                        n = i.sm.type,
                        r = i.sm.id;
                      console.log("here", n, r), tF(n, r);
                    }
                  )),
                    e$.appendChild(d);
                }
              }
            })(),
            tB(),
            tX(),
            ok(),
            tz.create(),
            (tb = function () {
              this.sm.parent && tg.call(this.sm.parent);
            }),
            (t3 = function () {
              this.sm.parent && t0.call(this.sm.parent);
            }),
            (tv = function (e) {
              this.sm.parent && ty.call(this.sm.parent, e);
            }),
            (t$ = function (e, t) {
              if (e.sm.pulse || t) {
                var o = e.sm.shape_type;
                if ("location" == e.sm.type && "image" != o && !(ew < 0.05)) {
                  var i = e.clone();
                  eO.toFront(), e4.toFront();
                  var n = 1 * e.sm.pulse_size,
                    r = {
                      "stroke-width": 4 * e.attrs["stroke-width"],
                      "stroke-opacity": 0,
                    };
                  i.attr({ "fill-opacity": 0, stroke: e.sm.pulse_color });
                  var a = function () {
                      i.remove();
                    },
                    s = e.sm.scale ? ew : 1,
                    l = (n - 1) * 0.5 * e.sm.size * s * e0,
                    c =
                      "bottom-center" == e.sm.position
                        ? o8(e, s * e0 * n, "0," + l)
                        : o8(e, s * e0 * n);
                  (r.transform = c),
                    i.animate(r, 1e3 * e.sm.pulse_speed, "ease-out", a);
                }
              }
            }),
            (t_ = function (e) {
              if (!er || !ea)
                for (
                  var t = Array.isArray(e) ? e : [e], o = 0;
                  o < t.length;
                  o++
                ) {
                  var i = ts[t[o]];
                  if (!i || !i.sm || ew < 0.05) return;
                  i.sm.shape_type;
                  var n = i.clone(),
                    r = 1 * i.sm.pulse_size,
                    a = {
                      "stroke-width":
                        4 *
                        (i.attrs["stroke-width"] ? i.attrs["stroke-width"] : 1),
                      "stroke-opacity": 0,
                      "fill-opacity": 0,
                    };
                  n.attr({ "fill-opacity": 0, stroke: i.sm.pulse_color });
                  var s = function () {
                      n.remove();
                    },
                    l = i.sm.bbox;
                  (i.sm.x = (l.x2 + l.x) / 2),
                    (i.sm.y = (l.y2 + l.y) / 2),
                    (i.sm.rotate = 0);
                  var c = o8(i, r, "0,0");
                  (a.transform = eA + c),
                    i.sm.bbox,
                    n.animate(a, 1e3 * i.sm.pulse_speed, "ease-out", s);
                }
            }),
            (tg = function () {
              if (
                (tO(),
                oE(),
                oj(),
                (this.id || "set" != !this.type) && !og && !oR)
              ) {
                var e,
                  t = oh(this);
                if (t.sm.on_click) var o = !0;
                if (((tT = t.sm.popup_off), !tD && !tR && !tM && (!k || !el))) {
                  if (ob && !x) return !1;
                  if (((ob = this), t)) {
                    if (
                      ((function e(t) {
                        if (t.sm.labels) {
                          var o;
                          t.sm.labels.forEach(function (e) {
                            t.sm.inactive
                              ? e.attr({ cursor: "default" })
                              : e.attr({ cursor: "pointer" });
                          });
                        }
                      })(t),
                      !t.sm.inactive)
                    ) {
                      if (
                        ("state" == (e = t).sm.type &&
                          e.sm.emphasizable &&
                          ((og = !0),
                          e.insertBefore(e6),
                          setTimeout(function () {
                            og = !1;
                          }, 1)),
                        oC(t),
                        o)
                      ) {
                        if (!k) {
                          if (
                            (t.stop(),
                            er &&
                              "location" == t.sm.type &&
                              "image" == t.sm.shape_type)
                          )
                            return;
                          t.sm.ignore_hover || (o_(t, "over"), t$(t)),
                            oy(t, "over");
                        }
                      } else {
                        if (
                          (tz.show(t),
                          t.stop(),
                          er &&
                            "location" == t.sm.type &&
                            "image" == t.sm.shape_type)
                        )
                          return;
                        t.sm.ignore_hover ||
                          (o_(t, "over"), oy(t, "over"), t$(t), t_(t));
                      }
                    }
                  }
                }
              }
            }),
            (t0 = function (e, t) {
              if (
                ((t && "function" == typeof t) || (t = !1),
                !tM && !oR && ((ob = !1), this.id || "set" != !this.type))
              ) {
                var o = oh(this);
                if (o && !o.sm.inactive) {
                  if ((oT(o), el)) (k && !0 !== e) || (o0(o, t), (o3 = o));
                  else {
                    if ((tz.hide(), o$(o))) {
                      if (tM) return !1;
                      o.sm.ignore_hover || o_(o, "out", !0),
                        o_(o, "adjacent", !0),
                        oy(o, "out", !0);
                    } else {
                      if (
                        er &&
                        "location" == o.sm.type &&
                        "image" == o.sm.shape_type
                      )
                        return;
                      o.sm.ignore_hover || o_(o, "out", !0), oy(o, "out");
                    }
                    o0(o, t);
                  }
                }
              }
            }),
            (e = !1),
            (ty = function (t) {
              if (!tM && !tD && !tR) {
                tO(),
                  ec &&
                    ((e = !0),
                    setTimeout(function () {
                      e = !1;
                    }, 500)),
                  e || t9();
                var o = oh(this);
                if (!o.sm.inactive && (oB(o, t), !t1.ignore_clicks)) {
                  if (
                    ((el = o.sm.on_click),
                    !t ||
                      ((!k || "touchend" != t.type) &&
                        (k || "touchstart" != t.type)))
                  ) {
                    if (
                      (el && tz.update_pos(),
                      (tT = o.sm.popup_off),
                      o.sm.zoomable &&
                        ("region" == o.sm.type ||
                          tc != o ||
                          "out" == o.sm.type))
                    )
                      oF(o, t),
                        oj(),
                        w && w.sm
                          ? t0.call(w, !0, function () {
                              oe(o), (w = o);
                            })
                          : (oe(o), (w = o));
                    else if (el) {
                      if (
                        (w != o &&
                          w &&
                          ((i = o),
                          (n = w),
                          "state" != i.sm.type ||
                            "region" != n.sm.type ||
                            n.sm.id != i.sm.region) &&
                          !(
                            "region" != o.sm.type && "region" == t1.zoom_level
                          ) &&
                          o0(w),
                        oS(o, t),
                        t)
                      ) {
                        var i,
                          n,
                          r = ox(t);
                        tz.pos(t, { l: r.x, u: r.y });
                      }
                      tz.show(o),
                        (k = !0),
                        oy(o, "over"),
                        t$(o),
                        (er &&
                          "location" == o.sm.type &&
                          "image" == o.sm.shape_type) ||
                          o.sm.ignore_hover ||
                          o.attr(o.sm.over_attributes),
                        (w = o);
                      var a = document.getElementById("xpic_sm_" + y);
                      a &&
                        (a.onclick = function () {
                          return (
                            tz.hide(),
                            (k = !1),
                            w.sm && t0.call(w),
                            (el = !1),
                            t2("close_popup", []),
                            !1
                          );
                        });
                    } else {
                      oS(o, t);
                      var s = o.sm.url;
                      if ("" != s && !oW) {
                        var l = "javascript" == s.substring(0, 10);
                        if (!X || l) {
                          l
                            ? (window.location.href = s)
                            : (window.top.location.href = s);
                          return;
                        }
                        window.open(s, "_blank"), tz.hide();
                        return;
                      }
                    }
                  }
                }
              }
            }),
            (tx = function (e) {
              if (
                (void 0 === e && (e = !1),
                t2("back", []),
                ("out" == tc.sm.type || ("region" == tc.sm.type && b)) && L)
              )
                window.location.href = "javascript:" + L;
              else if (V && "state" == tc.sm.type && tc.sm.region)
                w
                  ? t0.call(w, !0, function () {
                      oe(tl[tc.sm.region]);
                    })
                  : oe(tl[tc.sm.region], !1, e);
              else {
                var t = oi(tc, tl[g]),
                  o = "manual" == tc.sm.type && t ? tl[g] : tl[-1];
                w && w.sm && "region" != w.sm.type
                  ? t0.call(w, !0, function () {
                      oe(o);
                    })
                  : oe(o, !1, e);
              }
            }),
            (tw = function () {
              tx();
            }),
            oz(),
            o5(),
            oU(),
            t2("complete", []),
            r.isFunction(n) && n(),
            oE();
        }, 1);
    }
    var o7 = !1,
      o2 = function (e, t) {
        if (!o7 || e || t) {
          o7 = !0;
          var o = function (t) {
            var o = ea
                ? event.clientX + document.documentElement.scrollLeft
                : t.pageX,
              i = ea
                ? event.clientY + document.documentElement.scrollTop
                : t.pageY,
              n = r.findPos(e8),
              a = n[0],
              s = n[1],
              l = tc.sm.zooming_dimensions,
              c = (l.r * ey) / e0,
              m = (l.r * eg) / e0,
              u = l.x / e0 + (c * (o - a)) / ey,
              p = l.y / e0 + (m * (i - s)) / eg,
              d =
                "You clicked on\nx: " +
                (u = Math.round(1e5 * u) / 1e5) +
                ",\ny: " +
                (p = Math.round(1e5 * p) / 1e5) +
                ",";
            e && console.log(d), t2("click_xy", [{ x: u, y: p }]);
          };
          t || eF.click(o), eL.click(o);
        }
      },
      oA = function () {
        o2(!0);
      },
      oE = function (e) {
        (t4.click_xy || t7.click_xy.length > 0) && o2(!1, e);
      },
      oC = function (e) {
        var t = e.sm.type;
        "state" == t && t2("over_state", [e.sm.id]),
          "location" == t && t2("over_location", [e.sm.id]),
          "region" == t && t2("over_region", [e.sm.id]);
      },
      oT = function (e) {
        var t = e.sm.type;
        "state" == t && t2("out_state", [e.sm.id]),
          "location" == t && t2("out_location", [e.sm.id]),
          "region" == t && t2("out_region", [e.sm.id]);
      },
      oS = function (e, t) {
        var o = e.sm.type;
        "state" == o && t2("click_state", [e.sm.id, t]),
          "region" == o && t2("click_region", [e.sm.id, t]),
          "location" == o && t2("click_location", [e.sm.id, t]);
      },
      oB = function (e, t) {
        var o = e.sm.type;
        "state" == o && t2("preclick_state", [e.sm.id, t]),
          "region" == o && t2("preclick_region", [e.sm.id, t]),
          "location" == o && t2("preclick_location", [e.sm.id, t]);
      },
      oF = function (e, t) {
        var o = e.sm.type;
        "state" == o && t2("zoomable_click_state", [e.sm.id, t]),
          "region" == o && t2("zoomable_click_region", [e.sm.id, t]);
      };
    function oI(e, t) {
      oe(tl[e], !1, t);
    }
    function oP(e, t) {
      oe(ts[e], !1, t);
    }
    function oO(e, t, o) {
      void 0 === t && (t = 4), void 0 === o && (o = function () {});
      var i = { sm: { type: "manual", zp: t } },
        n = tf[e],
        r = n.sm.size * e0 * t,
        a = (r * e3) / eb,
        s = n.sm.x - 0.5 * r,
        l = n.sm.y - 0.5 * a,
        c = r / (eb * e0);
      (i.sm.zooming_dimensions = { x: s, y: l, w: r, h: a, r: c }),
        oe(i, !1, function () {
          o(), tL();
        });
    }
    function oj() {
      if ((ob && t0.call(ob), x)) (x = !1), !el && (tz.hide(), (k = !1));
    }
    function oL(e, t, o) {
      if ((void 0 === o && (o = function () {}), "state" == e)) var i = ts[t];
      else if ("region" == e) var i = tl[t];
      else var i = tf[t];
      var n = i.sm.on_click,
        r = tc.sm.zooming_dimensions;
      if ("location" != e) {
        var a = i.sm.bbox,
          s = (a.x + a.x2) * 0.5,
          l = (a.y + a.y2) * 0.5;
        (s *= e0), (l *= e0);
      } else
        var s = i.sm.x,
          l = i.sm.y;
      var c = (s - r.x) / ew,
        m = (l - r.y) / ew,
        p = c > 1.1 * ey || m > 1.1 * eg,
        d = !i.sm.region && "region" == t1.zoom_level;
      return p || d
        ? oI("-1", function () {
            oL(e, t, o);
          })
        : i.sm.region && "out" == t1.zoom_level
        ? oI(i.sm.region, function () {
            oL(e, t, o);
          })
        : ((x = !0),
          n ? ty.call(i) : tg.call(i),
          tz.reset_pos(c, m, i),
          (u = !0),
          (x = !1),
          o(),
          !0);
    }
    function oN(e) {
      var t = tf[e];
      t && t$(t, !0);
    }
    function oM() {
      tz.hide(), (k = !1), el ? t0.call(w) : ob && t0.call(ob);
    }
    function oD(e, t) {
      eK(e);
      var o = ts[e].sm.labels;
      tr(e);
      for (var i = 0; i < o.length; i++) {
        var n = o[i].sm.id;
        e9(n), t8(n);
      }
      r.isFunction(t) && t();
    }
    var oR = !1;
    function oH() {
      (oR = !0), tz.hide();
    }
    var oR = !1;
    function oq() {
      oR = !1;
    }
    var oW = !1;
    function oV() {
      oW = !0;
    }
    var oW = !1;
    function oY() {
      oW = !1;
    }
    function oQ(e) {
      tx(e);
    }
    function oX(e) {
      t_(e);
    }
    function oZ() {
      (t1.calibrate = ot),
        (t1.get_xy = oA),
        (t1.proj = tH),
        (t1.load = o4),
        (t1.region_zoom = oI),
        (t1.state_zoom = oP),
        (t1.zoom_in = !1),
        (t1.zoom_out = !1),
        (t1.location_zoom = oO),
        (t1.zoom_to_popup = tF),
        (t1.back = oQ),
        (t1.popup = oL),
        (t1.pulse = oN),
        (t1.pulse_state = oX),
        (t1.popup_hide = oM),
        (t1.zoom_level = "out"),
        (t1.ignore_clicks = !1),
        (t1.zoom_level_id = !1),
        (t1.disable_urls = oV),
        (t1.enable_urls = oY),
        (t1.disable_popups = oH),
        (t1.enable_popups = oq),
        (t1.refresh = o6),
        (t1.refresh_state = oD),
        (t1.loaded = !0),
        (t1.resize = o1),
        (t1.trial = c),
        (t1.zoom_ratio = 1);
    }
    function oU() {
      (t1.states = ts),
        (t1.regions = tl),
        (t1.locations = tf),
        (t1.labels = tu),
        (t1.tooltip = tz);
    }
    oZ(), o4();
  }
  (window[e] = d),
    n.docReady(function () {
      if (
        ((function e(t, o) {
          var i = d.hooks[t];
          i && i.apply(null, o);
          for (var n = d.plugin_hooks[t], r = 0; r < n.length; r++) {
            var i = n[r];
            i && i.apply(null, o);
          }
        })("ready"),
        !window[e].loaded)
      )
        for (var t = 0; t < u.length; t++) {
          var o = u[t];
          o &&
            o.mapdata &&
            "no" != o.mapdata.main_settings.auto_load &&
            (function (e) {
              setTimeout(function () {
                e.load();
              }, 1);
            })(o);
        }
    }),
    u.push(d);
})("simplemaps_countrymap");

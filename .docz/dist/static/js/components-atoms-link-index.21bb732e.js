;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    './src/components/atoms/link/index.js': function(e, t, o) {
      'use strict'
      var n = o('./node_modules/react/index.js'),
        r = o.n(n),
        i = o('./node_modules/@emotion/styled/dist/styled.browser.esm.js').a.a({
          textDecoration: 'none',
          color: 'black'
        }),
        A = function(e) {
          var t = e.text,
            o = e.href
          return r.a.createElement(i, { href: o }, t)
        }
      ;(t.a = A),
        (A.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Link',
          props: {
            text: { type: { name: 'string' }, required: !0, description: '' },
            href: { type: { name: 'string' }, required: !0, description: '' }
          }
        })
    },
    './src/components/atoms/link/index.mdx': function(e, t, o) {
      'use strict'
      o.r(t),
        o.d(t, 'default', function() {
          return f
        })
      var n = o('./node_modules/react/index.js'),
        r = o.n(n),
        i = o('./node_modules/@mdx-js/tag/dist/index.js'),
        A = o('./node_modules/docz/dist/index.m.js'),
        s = o('./src/components/atoms/link/index.js')
      function c(e) {
        return (c =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function a(e, t) {
        if (null == e) return {}
        var o,
          n,
          r = (function(e, t) {
            if (null == e) return {}
            var o,
              n,
              r = {},
              i = Object.keys(e)
            for (n = 0; n < i.length; n++)
              (o = i[n]), t.indexOf(o) >= 0 || (r[o] = e[o])
            return r
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (n = 0; n < i.length; n++)
            (o = i[n]),
              t.indexOf(o) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, o) &&
                  (r[o] = e[o]))
        }
        return r
      }
      function p(e, t) {
        for (var o = 0; o < t.length; o++) {
          var n = t[o]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
      }
      function u(e, t) {
        return !t || ('object' !== c(t) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                )
              return e
            })(e)
          : t
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function d(e, t) {
        return (d =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var f = (function(e) {
        function t(e) {
          var o
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
            })(this, t),
            ((o = u(this, l(t).call(this, e))).layout = null),
            o
          )
        }
        var o, n, c
        return (
          (function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && d(e, t)
          })(t, r.a.Component),
          (o = t),
          (n = [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.components,
                  o = a(e, ['components'])
                return r.a.createElement(
                  i.MDXTag,
                  { name: 'wrapper', components: t },
                  r.a.createElement(
                    i.MDXTag,
                    {
                      name: 'h1',
                      components: t,
                      props: { id: 'link-component' }
                    },
                    'Link component'
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'h2', components: t, props: { id: 'basic-usage' } },
                    'Basic usage'
                  ),
                  r.a.createElement(
                    A.e,
                    {
                      __codesandbox:
                        'N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKYABk0F2Y05XaT04AEchASdah9DgSRokiLCoFg_0BXtTVzTdE0FXNdo7Q1dhgHYTQfHkMiEIAARgIgRAGVA0K6KiA1QXRUWOU4AC9nAIRJsXYbhaPWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZ2UgAWTT2AANk07T1jAECADEfWgRJlP4ZxDkRR1MHYAAFIR-CWDifjgPTESsmsbJoZwIBEy52AARiMnT5HBATqCEgBBOZpPYSM6PIGwoHQcN2HkTlpLEbKYxkdhUUkmBuGAQ8xIk7F5G3WtgDy6BCuCAAyHrxkSeZKGaTqCqK7gJvlMBQgEntUHadgAH4Ni68NI1Kq5Ru61AkprKQZGrd8zFhGjMDAMIoCmdayoqvaMpXGtEyDKUcFszIUmvAg2trOsYNQXZaCwAg-BAABxEcIgJWx2Hw_7-F8LowHq9pCFuB5JBGTHT2ELF_0-HAPAEdomK3VcpGeghXvez62qke7DrMb8QGQ1DPg3GgsJwog8NgyRVGwACtAoED9AYIiaIp5jTS1PjxYdOjURnOcmPg-UB0oGYLQk-Y4FlyDquavNVfaNiOLmyQatgdA-LMQSpgAdUyOYMiyy3shwVwcvWQGdS2YVoi45SfhdUKLCoKBhWUjwoElbY-JK5K7fYP7dhknLxmwAgljwRHitK7hysYR3ZjhBGYCR4Ac_L1rgB9-QpGL52BGrMwU5wdWZksQb4Cy4Bvczq5FYKHBbHFABHUIIC6RZ1irsBB7RYfR5gCep-yMxduOrBiOOcuLug2CmeC7ZXDSQXqCA3RQIMcC-5rfhUB9JkkHYfggWJKpvAyC1f3JZ-dIsPwVgGR8jUH4FcfgKkcBQJUn5dY_ByjkH6DMOa4DX4gDStVIisAYRYB9H_Xe5JKCJDzHkAok4tQWnfiCL-Ag4H3xAFENAaD-D8w0HAehgCQCYHmBGASEB4BoLvj9fgZopQsJALFMyOAAAc0CLTxBmH4HAsVOG1n4KbTi1AeLPwgSAAAerFGBOAACcaiuEdy1t3DhL9-CGIAKw4GkQAJnMegzR5s3boAkYY4xZiQAAPUYISh1oJFSNkfIxRyjVEgHWLteQTMP7VA-NQSAKRz6oEviLMCIA-4gFoL6LI4C35mloBaMRloS78ASfIWpQA',
                      __position: 0,
                      __code:
                        '<Link text="Go to this link" href={\'http://www.google.com.br\'} />',
                      __scope: { props: this ? this.props : o, Link: s.a }
                    },
                    r.a.createElement(s.a, {
                      text: 'Go to this link',
                      href: 'http://www.google.com.br'
                    })
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'h2', components: t, props: { id: 'properties' } },
                    'Properties'
                  ),
                  r.a.createElement(A.f, { of: s.a })
                )
              }
            }
          ]) && p(o.prototype, n),
          c && p(o, c),
          t
        )
      })()
      f.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'MDXContent'
      }
    }
  }
])
//# sourceMappingURL=components-atoms-link-index.d4192b6a58e078fdfa19.js.map

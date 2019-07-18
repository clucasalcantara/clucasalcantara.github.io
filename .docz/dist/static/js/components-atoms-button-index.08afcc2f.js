;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    './src/components/atoms/button/index.js': function(e, t, n) {
      'use strict'
      var o = n('./node_modules/react/index.js'),
        r = n.n(o),
        i = function(e) {
          var t = e.text,
            n = e.handleClick
          return r.a.createElement(
            'button',
            { type: 'button', className: 'ui primary button', onClick: n },
            t
          )
        }
      ;(t.a = i),
        (i.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Button',
          props: {
            text: { type: { name: 'string' }, required: !0, description: '' },
            handleClick: {
              type: { name: 'func' },
              required: !0,
              description: ''
            }
          }
        })
    },
    './src/components/atoms/button/index.mdx': function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function() {
          return f
        })
      var o = n('./node_modules/react/index.js'),
        r = n.n(o),
        i = n('./node_modules/@mdx-js/tag/dist/index.js'),
        c = n('./node_modules/docz/dist/index.m.js'),
        a = n('./src/components/atoms/button/index.js')
      function A(e) {
        return (A =
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
      function u(e, t) {
        if (null == e) return {}
        var n,
          o,
          r = (function(e, t) {
            if (null == e) return {}
            var n,
              o,
              r = {},
              i = Object.keys(e)
            for (o = 0; o < i.length; o++)
              (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n])
            return r
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (o = 0; o < i.length; o++)
            (n = i[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]))
        }
        return r
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n]
          ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
      }
      function p(e, t) {
        return !t || ('object' !== A(t) && 'function' !== typeof t)
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
      function m(e, t) {
        return (m =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var f = (function(e) {
        function t(e) {
          var n
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
            })(this, t),
            ((n = p(this, l(t).call(this, e))).layout = null),
            n
          )
        }
        var n, o, A
        return (
          (function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && m(e, t)
          })(t, r.a.Component),
          (n = t),
          (o = [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.components,
                  n = u(e, ['components'])
                return r.a.createElement(
                  i.MDXTag,
                  { name: 'wrapper', components: t },
                  r.a.createElement(
                    i.MDXTag,
                    {
                      name: 'h1',
                      components: t,
                      props: { id: 'button-component' }
                    },
                    'Button component'
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'h2', components: t, props: { id: 'basic-usage' } },
                    'Basic usage'
                  ),
                  r.a.createElement(
                    c.e,
                    {
                      __codesandbox:
                        'N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKYb3CCJzGNOV2k9OABHIQEnWofQ4EkaJIiwjwYOof0BXtTVzTdE0FXNdo7Q1dhgHYTQfHkciEIAARgIgRAGVA0K6aiA1QXRUWOU4AC9nAIRJsXYbg6PWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZxUgAWLT2AANi0nT1jAECADEfWgRIVP4ZxDkRR1MHYAAFIR-CWTifjgfTEWsmtbJoZwIFEy52AARmM3T5HBQTqGEgBBOYZPYSN6PIGwoHQcN2HkTkZLEHKYxkdhUSkmBuGAQ9xMk7F5G3WtgHy6AiuCAAyXrxkSeZKGaLrCuK7hJvlMBQkEntUHadgAH4Nm68NIzKq4xp61BkprKQZGrd8zFhWjMDAMIoCmDbysq_bMpXGtEyDKUcDszIUmvAh2trOtoJuFlaCwAg-BAewoFiXZj34aYMFgcHIYam7uAq-IMgIJ8EZ2bI32YrdVykF6CDej6vvaqQHqOsxvxAZDUM-DcaCwnCiDwgieNUbAAK0CgQP0BhiNoomWNNLV-MFh16NRGcUiWGbBJKkX2gHSgZgtST5jgfizCEqD2ey3LxmwAglj8OGYCx3ZStu6N9vwgHzA1-r-Ht2CYfIKB_DgAA5H1nZAUIIH7foFOSV3qBh6hLYas30HhiGdja1dgCBgg9p3cPUCpgT_tgnAVZmSwhvgbLgHWVOrmlgocFscUAEdA66RZ1lj-PIaueXyBruB68b7IkpS06HXOy69Yd6mlBAELtlcNJueoIDdFAgxwLLmt-FQP3-CufggWJKpvAyC1f3JJkQF0ix-FYDJ8gjpB2H4VScCf1T_PWfhynIfoZnm7eH5AdKNViKwBhFgH0p9jgwHJJQRIeY8gFEnFqC0e8QSHwEG_deIAohoD_vwTmGg4AYMviATA8wIyCQgPAP-a9fr8DNFKXBIA4rmRwAADmfhaeIMw_A4DikQ2s_B2KcXmrxM-O8QAAD04ovxwAATn4cQgu6ti6EPvvwKRABWHALCABMCj_70MtNaRhzC2EcK4TwvhIB1h7XkDTfe1QPjUEgCkeeqBF58zAiAMuIBaC-iyNvXeZpaAWkMZwuY_A7HyGiUAA',
                      __position: 0,
                      __code:
                        '<Button text="Click me" handleClick={() => alert(\'Clicked\')} />',
                      __scope: { props: this ? this.props : n, Button: a.a }
                    },
                    r.a.createElement(a.a, {
                      text: 'Click me',
                      handleClick: function() {
                        return alert('Clicked')
                      }
                    })
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'h2', components: t, props: { id: 'properties' } },
                    'Properties'
                  ),
                  r.a.createElement(c.f, { of: a.a })
                )
              }
            }
          ]) && s(n.prototype, o),
          A && s(n, A),
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
//# sourceMappingURL=components-atoms-button-index.d4192b6a58e078fdfa19.js.map

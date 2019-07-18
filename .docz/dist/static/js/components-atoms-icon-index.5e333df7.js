;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    './src/components/atoms/icon/index.js': function(e, n, o) {
      'use strict'
      var t = o('./node_modules/react/index.js'),
        r = o.n(t),
        i = o('./node_modules/react-icons/io/index.mjs'),
        c = o(
          './node_modules/@emotion/styled/dist/styled.browser.esm.js'
        ).a.div({
          padding: '.3rem',
          background: 'transparent',
          cursor: 'pointer'
        }),
        a = function(e) {
          var n = e.iconName,
            o = e.handleClick,
            t = i[n]
          return r.a.createElement(
            c,
            null,
            r.a.createElement(t, {
              onClick: function() {
                return o()
              }
            })
          )
        }
      ;(a.defaultProps = {
        handleClick: function() {
          return alert('Clicked')
        }
      }),
        (n.a = a),
        (a.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Icon',
          props: {
            handleClick: {
              defaultValue: { value: "() => alert('Clicked')", computed: !1 },
              type: { name: 'func' },
              required: !1,
              description: ''
            },
            iconName: {
              type: { name: 'string' },
              required: !0,
              description: ''
            }
          }
        })
    },
    './src/components/atoms/icon/index.mdx': function(e, n, o) {
      'use strict'
      o.r(n),
        o.d(n, 'default', function() {
          return m
        })
      var t = o('./node_modules/react/index.js'),
        r = o.n(t),
        i = o('./node_modules/@mdx-js/tag/dist/index.js'),
        c = o('./node_modules/docz/dist/index.m.js'),
        a = o('./src/components/atoms/icon/index.js')
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
      function s(e, n) {
        if (null == e) return {}
        var o,
          t,
          r = (function(e, n) {
            if (null == e) return {}
            var o,
              t,
              r = {},
              i = Object.keys(e)
            for (t = 0; t < i.length; t++)
              (o = i[t]), n.indexOf(o) >= 0 || (r[o] = e[o])
            return r
          })(e, n)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (t = 0; t < i.length; t++)
            (o = i[t]),
              n.indexOf(o) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, o) &&
                  (r[o] = e[o]))
        }
        return r
      }
      function u(e, n) {
        for (var o = 0; o < n.length; o++) {
          var t = n[o]
          ;(t.enumerable = t.enumerable || !1),
            (t.configurable = !0),
            'value' in t && (t.writable = !0),
            Object.defineProperty(e, t.key, t)
        }
      }
      function l(e, n) {
        return !n || ('object' !== A(n) && 'function' !== typeof n)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                )
              return e
            })(e)
          : n
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function d(e, n) {
        return (d =
          Object.setPrototypeOf ||
          function(e, n) {
            return (e.__proto__ = n), e
          })(e, n)
      }
      var m = (function(e) {
        function n(e) {
          var o
          return (
            (function(e, n) {
              if (!(e instanceof n))
                throw new TypeError('Cannot call a class as a function')
            })(this, n),
            ((o = l(this, p(n).call(this, e))).layout = null),
            o
          )
        }
        var o, t, A
        return (
          (function(e, n) {
            if ('function' !== typeof n && null !== n)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(e.prototype = Object.create(n && n.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              n && d(e, n)
          })(n, r.a.Component),
          (o = n),
          (t = [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  n = e.components,
                  o = s(e, ['components'])
                return r.a.createElement(
                  i.MDXTag,
                  { name: 'wrapper', components: n },
                  r.a.createElement(
                    i.MDXTag,
                    {
                      name: 'h1',
                      components: n,
                      props: { id: 'icon-component' }
                    },
                    'Icon component'
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'h2', components: n, props: { id: 'basic-usage' } },
                    'Basic usage'
                  ),
                  r.a.createElement(
                    c.e,
                    {
                      __codesandbox:
                        'N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKYGl0N0TXaT04AEchASdah9DgSRokiDDYmof0BXtTVzVguUFXNdo7Q1dhgHYTQfHkEj5QAARgIgRAGVAUK6CiA1QXRUWOU4AC9nAIRJsXYbhqPWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZ0UgAWdT2AANnUzT1jAECADEfWgRJFP4ZxDkRR1MHYAAFIR-CWNifjgHTEQsmsrJoZwICEy52AARgMrT5HBPjqAEgBBOZJPYSMaPIGwoHQcN2HkTlJLETKYxkdhUXEmBuGAQ8RLE7F5G3WtgBy6B8uCAAyLrxkSeZKGadq8oK7gxvlMBQj4ntUHadgAH4Ng68NI2Kq5hs61AEprKQZGrd8zFhKjMDAMIoCmVaSrKna0pXGtEyDKUcGszIUmvAgWtrOtoJZXDUAAOR9Gr-AaShQbgZwptQRJ-GmDBYHsKBYm2WrLu4Ur4gyAgn0R5HsjfBit1XKRHoIZ7XvelqpFu_azG_EBEOQz4NxoDCsKIHDdEkVRsAArQKBA_QGAIqjScYsilUoh0aNRGcUiWSa-MK8WB0oGYLTE-Y4B4kWHSMEI7FB1A_rsY1SLNKULRN7nKB1yDKsavMzeY1j2OoSQqtgdAeLMfipgAdUyOYMgyz3shwGQsvWHSuwKRScGTLobS0iwPElbYUiEKb0EUtF3AC1xw1fFOej6OBhUUoU0FoAQeKKxK_caGCpKyzhdEB48lj8eGYFxnZCuK9HpJrRuftQdc0KzKSjZNgBtP6O5gABdRKLC6Ag-nMaN7rrQPZjhT7a0YMeJ8zA5x6RnZUcH0ru_QBHL-2VbCcPqQ9-DgQWvfbazDHnBVZmJYfq8AMrAHWAvIGVxZYFBwLYcUABHUIEAuiLHWHfB-yMriK3IPFRKf8TpnQIF5NWdgpJgJrOg3uj8rhowxrAEUONH7405Lgl0WBCLHBgKdUI50m7UHpoFbYrg0h834doXQoEDDgXIRYfgqAgb8CuPwIExIqjeAyBaX85ImQgBLvwVgGR8jUEUewfgSkcDmKUj5dY_ByjkH6DMGaJj-ApUqgRWAMIsA-m0Zw8klBEh5jyAUScWoLQqJBOogQ1iaz8CiGgZxKgIwaDgNE2RIBMDzAjHxCA8ATEyNrPwC2ogkCmJANFEyOAAAcFiLTxBmH4HA0VUkFJACxNiM0uI6KUSAAAetFSxOAACczS0kAI1sAlJJT-B9IAKw4AqQAJhGaUopVt-IJJ6cmHAcyrG6NXPwNpbtOJh3QBs_pFihnLMKaE60CTylVJqXUhpTSQDrG2vIemqjqgfGoJAFIojUBAQkULaR_BaC-iyIo5RZpaAWlWfvfgHz5DIqAA',
                      __position: 0,
                      __code:
                        '<Icon iconName="IoIosSunny" handleClick={() => alert(\'Clicked\')} />',
                      __scope: { props: this ? this.props : o, Icon: a.a }
                    },
                    r.a.createElement(a.a, {
                      iconName: 'IoIosSunny',
                      handleClick: function() {
                        return alert('Clicked')
                      }
                    })
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'h2', components: n, props: { id: 'properties' } },
                    'Properties'
                  ),
                  r.a.createElement(c.f, { of: a.a })
                )
              }
            }
          ]) && u(o.prototype, t),
          A && u(o, A),
          n
        )
      })()
      m.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'MDXContent'
      }
    }
  }
])
//# sourceMappingURL=components-atoms-icon-index.d4192b6a58e078fdfa19.js.map

;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    './src/components/atoms/logo/index.js': function(e, o, t) {
      'use strict'
      t.d(o, 'a', function() {
        return a
      })
      var n = t('./node_modules/react/index.js'),
        r = t.n(n),
        i = t('./node_modules/@emotion/styled/dist/styled.browser.esm.js'),
        c = i.a.div(function(e) {
          return {
            padding: '.5rem',
            justifyContent: 'center',
            textTransform: 'uppercase',
            color: e.color || 'black'
          }
        }),
        u = i.a.div(function(e) {
          return {
            fontSize: '.8rem',
            fontWeight: 300,
            color: e.color || 'blue'
          }
        })
      function a(e) {
        var o = e.content,
          t = e.subtitle,
          n = e.color,
          i = e.subtitleColor
        return r.a.createElement(
          c,
          { color: n },
          r.a.createElement('div', { className: 'content' }, o),
          t && r.a.createElement(u, { color: i }, t)
        )
      }
      ;(a.defaultProps = {
        content: 'LOGO',
        subtitle: 'Sua logo aqui',
        color: 'black',
        subtitleColor: 'blue'
      }),
        (a.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Logo',
          props: {
            content: {
              defaultValue: { value: "'LOGO'", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            subtitle: {
              defaultValue: { value: "'Sua logo aqui'", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            color: {
              defaultValue: { value: "'black'", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            subtitleColor: {
              defaultValue: { value: "'blue'", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: ''
            }
          }
        })
    },
    './src/components/atoms/logo/index.mdx': function(e, o, t) {
      'use strict'
      t.r(o),
        t.d(o, 'default', function() {
          return g
        })
      var n = t('./node_modules/react/index.js'),
        r = t.n(n),
        i = t('./node_modules/@mdx-js/tag/dist/index.js'),
        c = t('./node_modules/docz/dist/index.m.js'),
        u = t('./src/components/atoms/logo/index.js')
      function a(e) {
        return (a =
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
      function l(e, o) {
        if (null == e) return {}
        var t,
          n,
          r = (function(e, o) {
            if (null == e) return {}
            var t,
              n,
              r = {},
              i = Object.keys(e)
            for (n = 0; n < i.length; n++)
              (t = i[n]), o.indexOf(t) >= 0 || (r[t] = e[t])
            return r
          })(e, o)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (n = 0; n < i.length; n++)
            (t = i[n]),
              o.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (r[t] = e[t]))
        }
        return r
      }
      function A(e, o) {
        for (var t = 0; t < o.length; t++) {
          var n = o[t]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
      }
      function s(e, o) {
        return !o || ('object' !== a(o) && 'function' !== typeof o)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                )
              return e
            })(e)
          : o
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function d(e, o) {
        return (d =
          Object.setPrototypeOf ||
          function(e, o) {
            return (e.__proto__ = o), e
          })(e, o)
      }
      var g = (function(e) {
        function o(e) {
          var t
          return (
            (function(e, o) {
              if (!(e instanceof o))
                throw new TypeError('Cannot call a class as a function')
            })(this, o),
            ((t = s(this, p(o).call(this, e))).layout = null),
            t
          )
        }
        var t, n, a
        return (
          (function(e, o) {
            if ('function' !== typeof o && null !== o)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(e.prototype = Object.create(o && o.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              o && d(e, o)
          })(o, r.a.Component),
          (t = o),
          (n = [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  o = e.components,
                  t = l(e, ['components'])
                return r.a.createElement(
                  i.MDXTag,
                  { name: 'wrapper', components: o },
                  r.a.createElement(
                    i.MDXTag,
                    {
                      name: 'h1',
                      components: o,
                      props: { id: 'logo-component' }
                    },
                    'Logo component'
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'h2', components: o, props: { id: 'basic-usage' } },
                    'Basic usage'
                  ),
                  r.a.createElement(
                    c.e,
                    {
                      __codesandbox:
                        'N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKYABlKBSEdjTldpPTgARyEBJ1qH0OBJGiSJsKgWDKH9AV7U1c03RNBVzXaO0NXYYB2E0Hx5AoxCAAEYCIEQBlQdCuhogNUF0VFjlOAAvZwCESbF2G4ej1iiARnlQK52gABnYZMZiwdp9xrGZOxYWdVIAFm09gADZtN09YwBAgAxH1oESVT-GcQ5EUdTB2AABSEfgli4n44AMxEbJrOyaGcCAxMudgAEYTL0-RwSE6gRIAQTmWT2EjBjyBsKB0HDdh5E5WSxFymMZHYVFpJgbhgEPCSpOxeRt1rYACugYrggAMj68ZEnmShmm6oqSu4Kb5TAUIhJ7VB2nYAB-DYevDSNyqucbetQFKaykGRq3fMxYTozAwDCKApk2iqqoOrKVxrRMgylHB7MyFJrwIDrazrGC4PYLdVykV6CHez7vo6qRHuOsxvxAFC0M-DcaGw3CiHwwjJFUbAAK0CgQP0BgSLosHWNNLUBNJh0_MoGZLGG-AKfaAd6YtKT5jganINq1q8wQ-UOK4hbJDq2B0AEsxhKmSwXlgHLxeyHAZEjPKiwIo4yruvL1gMrsClUnAAFYuhtPSLHUPIYjARJHD0GhVMRPQBHCixaCwAhLEyVA4DsgQiFU0I5gyOI4BgN2NeFbbKE19gAB94_lDwoElbYBLKk60t9qZnDeOWCAVuSlfQFW2DV_LY-FUryu4SrdYikDotio2AA4zcjyKCAAdRgCAUkIK5kzUtSLaj8tx4TpP2hTxkM85LOzodC6rulOapR49gAcodXdFAgglgZDwYkLmAlioTXD7eE_YEcOPteAdYugIPpzGjZ66wLhWL-FRqf4Edqq5Ew1XIKnOAcAAByPoGr8D3vocQXUiY0HkIdOMQD6JHxvt0AadY84eC_t0f-jVMHyxgHfYU7VgAkNPigyQeCCFiH2n9KQDD1jvn2mYbeOA2YMyZnYOSj8axwMdr5QcjMuY4FRDOFIY9qGwCuHTXhEipEFDHv_BRYi-GSLRKo9YciyFVwnoo8R8BtHSLMBw1AXCV6hGuoo_h8khFIIIKpKCuoADiupI76NUnnVw7ACKA1cAAR1CBASO6jk6px2N46-pDyETxnlAOeFj4ZKBAKFbYrg0j42oEBYRBhwKCIsPwVA0D-BXFgcWYkVRvAZAtL-ckTIQBj34KwDI-RqAVPYPwNSOA-lqQCusfg5RyD9BmAtbp_AMq1RIgrRpCtMDkkoIkPMeQCiTi1BaIENTQQCCGTWfgUQ0BTJUBGDQcADklJAEsugmAhIQHgN04ptZ-BmilKc-KFkcCt36RaeIMw_A4Hilc15IBhbcWoHxZplSQAAD14oDJwAATlBdcnhHM-GnIRcbHA3yABMaKengs4pC3iJdsWIv6SiolbytnWk-d835al_lQEBa4YF_B1j7XkAjXZ3gPjUEgCkXJqB8nOIYI_EAtBfRZAqbAs0tALTvMtLMGY_BeXyC1UAA',
                      __position: 0,
                      __code: '<Logo />',
                      __scope: { props: this ? this.props : t, Logo: u.a }
                    },
                    r.a.createElement(u.a, null)
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'h2', components: o, props: { id: 'properties' } },
                    'Properties'
                  ),
                  r.a.createElement(c.f, { of: u.a })
                )
              }
            }
          ]) && A(t.prototype, n),
          a && A(t, a),
          o
        )
      })()
      g.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'MDXContent'
      }
    }
  }
])
//# sourceMappingURL=components-atoms-logo-index.d4192b6a58e078fdfa19.js.map

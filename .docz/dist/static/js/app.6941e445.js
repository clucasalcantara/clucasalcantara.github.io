;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    './.docz/app/db.json': function(e) {
      e.exports = {
        config: {
          title: 'clucasalcantara playground',
          description: 'My personal website written in react',
          menu: [],
          ordering: 'descending',
          version: '0.1.0',
          repository: null,
          native: !1,
          codeSandbox: !0,
          themeConfig: {},
          src: './src'
        },
        entries: {
          'components/index.mdx': {
            name: 'Hi, there',
            route: '/',
            id: '8f6609a989594e49bce5582173f1be02',
            filepath: 'components/index.mdx',
            link: null,
            slug: 'components-index',
            order: 0,
            menu: null,
            headings: [{ depth: 1, slug: 'hello-world', value: 'Hello, world' }]
          },
          'components/atoms/button/index.mdx': {
            name: 'Button',
            menu: 'Atoms',
            id: '3fc6afe9914ceec82c9ecd9e3414519e',
            filepath: 'components/atoms/button/index.mdx',
            link: null,
            slug: 'components-atoms-button-index',
            route: '/components-atoms-button-index',
            order: 0,
            headings: [
              { depth: 1, slug: 'button-component', value: 'Button component' },
              { depth: 2, slug: 'basic-usage', value: 'Basic usage' },
              { depth: 2, slug: 'properties', value: 'Properties' }
            ]
          },
          'components/atoms/credits/index.mdx': {
            name: 'Credits',
            menu: 'Atoms',
            id: 'd2b64930afffff5348d62c68a0ebaaad',
            filepath: 'components/atoms/credits/index.mdx',
            link: null,
            slug: 'components-atoms-credits-index',
            route: '/components-atoms-credits-index',
            order: 0,
            headings: [
              {
                depth: 1,
                slug: 'credits-component',
                value: 'Credits component'
              },
              { depth: 2, slug: 'basic-usage', value: 'Basic usage' },
              { depth: 2, slug: 'properties', value: 'Properties' }
            ]
          },
          'components/atoms/icon/index.mdx': {
            name: 'Icon',
            menu: 'Atoms',
            id: '5a23637d01db3bd2f61f262f8e0f4185',
            filepath: 'components/atoms/icon/index.mdx',
            link: null,
            slug: 'components-atoms-icon-index',
            route: '/components-atoms-icon-index',
            order: 0,
            headings: [
              { depth: 1, slug: 'icon-component', value: 'Icon component' },
              { depth: 2, slug: 'basic-usage', value: 'Basic usage' },
              { depth: 2, slug: 'properties', value: 'Properties' }
            ]
          },
          'components/atoms/link/index.mdx': {
            name: 'Link',
            menu: 'Atoms',
            id: '4e87f505eea2393bd610229398879081',
            filepath: 'components/atoms/link/index.mdx',
            link: null,
            slug: 'components-atoms-link-index',
            route: '/components-atoms-link-index',
            order: 0,
            headings: [
              { depth: 1, slug: 'link-component', value: 'Link component' },
              { depth: 2, slug: 'basic-usage', value: 'Basic usage' },
              { depth: 2, slug: 'properties', value: 'Properties' }
            ]
          },
          'components/atoms/logo/index.mdx': {
            name: 'Logo',
            menu: 'Atoms',
            id: '42b3ddefd28c06629c7417e5f8b4c79e',
            filepath: 'components/atoms/logo/index.mdx',
            link: null,
            slug: 'components-atoms-logo-index',
            route: '/components-atoms-logo-index',
            order: 0,
            headings: [
              { depth: 1, slug: 'logo-component', value: 'Logo component' },
              { depth: 2, slug: 'basic-usage', value: 'Basic usage' },
              { depth: 2, slug: 'properties', value: 'Properties' }
            ]
          },
          'components/atoms/nav-item/index.mdx': {
            name: 'NavItem',
            menu: 'Atoms',
            id: '279bd388c7e8cda19493cc92062113a4',
            filepath: 'components/atoms/nav-item/index.mdx',
            link: null,
            slug: 'components-atoms-nav-item-index',
            route: '/components-atoms-nav-item-index',
            order: 0,
            headings: [
              {
                depth: 1,
                slug: 'navitem-component',
                value: 'NavItem component'
              },
              { depth: 2, slug: 'basic-usage', value: 'Basic usage' },
              { depth: 2, slug: 'properties', value: 'Properties' }
            ]
          },
          'components/molecules/header/index.mdx': {
            name: 'Header',
            menu: 'Molecules',
            id: 'f494cfe0afc2779378a98093a8cdbe6d',
            filepath: 'components/molecules/header/index.mdx',
            link: null,
            slug: 'components-molecules-header-index',
            route: '/components-molecules-header-index',
            order: 0,
            headings: [
              { depth: 1, slug: 'header-component', value: 'Header component' },
              { depth: 2, slug: 'basic-usage', value: 'Basic usage' },
              { depth: 2, slug: 'properties', value: 'Properties' }
            ]
          },
          'components/molecules/loadable/index.mdx': {
            name: 'Loadable',
            menu: 'Molecules',
            id: '0e7755884410524f5df8eb5b191c3605',
            filepath: 'components/molecules/loadable/index.mdx',
            link: null,
            slug: 'components-molecules-loadable-index',
            route: '/components-molecules-loadable-index',
            order: 0,
            headings: [
              {
                depth: 1,
                slug: 'loadable-component',
                value: 'Loadable component'
              },
              { depth: 2, slug: 'basic-usage', value: 'Basic usage' },
              { depth: 2, slug: 'properties', value: 'Properties' }
            ]
          }
        }
      }
    },
    './.docz/app/index.jsx': function(e, o, n) {
      'use strict'
      n.r(o)
      var t = n('./node_modules/react/index.js'),
        s = n.n(t),
        d = n('./node_modules/react-dom/index.js'),
        a = n.n(d),
        l = n('./.docz/app/root.jsx'),
        i = [],
        u = [],
        c = function() {
          return u.forEach(function(e) {
            return e && e()
          })
        },
        m = document.querySelector('#root')
      !(function() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.a
        i.forEach(function(e) {
          return e && e()
        }),
          a.a.render(s.a.createElement(e, null), m, c)
      })(l.a)
    },
    './.docz/app/root.jsx': function(e, o, n) {
      'use strict'
      ;(function(e) {
        var t = n('./node_modules/react/index.js'),
          s = n.n(t),
          d = n('./node_modules/react-hot-loader/index.js'),
          a = n('./node_modules/docz-theme-default/dist/index.m.js'),
          l = function() {
            return s.a.createElement(a.a, null)
          }
        ;(o.a = Object(d.hot)(e)(l)),
          (l.__docgenInfo = {
            description: '',
            methods: [],
            displayName: 'Root'
          })
      }.call(
        this,
        n('./node_modules/docz/node_modules/webpack/buildin/harmony-module.js')(
          e
        )
      ))
    },
    0: function(e, o, n) {
      n('./node_modules/react-dev-utils/webpackHotDevClient.js'),
        n('./node_modules/docz/node_modules/@babel/polyfill/lib/index.js'),
        (e.exports = n('./.docz/app/index.jsx'))
    }
  },
  [[0, 11, 0]]
])
//# sourceMappingURL=app.d4192b6a58e078fdfa19.js.map

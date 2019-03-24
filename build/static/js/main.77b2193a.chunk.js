;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    12(e, t, n) {
      e.exports = n(21)
    },
    21(e, t, n) {
      
      n.r(t)
      const r = {}
      n.r(r),
        n.d(r, 'register', function() {
          return O
        }),
        n.d(r, 'unregister', function() {
          return L
        })
      const a = n(0);

        
const o = n.n(a);

        
const i = n(7);

        
const l = n.n(i);

        
const c = n(24);

        
const s = n(10);

        
const u = n(3);

        
const d = u.a.footer({
          width: '100%',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'space-around',
          bottom: 0,
          position: 'fixed'
        });

        
const f = u.a.h4({ textTransform: 'uppercase' });

        
const m = function(e) {
          const t = e.title
          return o.a.createElement(
            d,
            null,
            o.a.createElement(f, null, t),
            o.a.createElement(
              'p',
              null,
              '\xa9 2019 Todos os direitos reservados.'
            )
          )
        };

        
const v = n(1);

        
const p = n.n(v);

        
const h = u.a.div(function(e) {
          return {
            padding: '1rem',
            justifyContent: 'center',
            textTransform: 'uppercase',
            color: e.color || 'black'
          }
        });

        
const g = u.a.div(function(e) {
          return {
            fontSize: '.8rem',
            fontWeight: 300,
            color: e.color || 'blue'
          }
        });

        
const b = function(e) {
          const t = e.content;

            
const n = e.subtitle;

            
const r = e.color;

            
const a = e.subtitleColor
          return o.a.createElement(
            h,
            { color: r },
            o.a.createElement('div', { className: 'content' }, t),
            n && o.a.createElement(g, { color: a }, n)
          )
        }
      h.propTypes = {
        content: p.a.string,
        subtitle: p.a.string,
        color: p.a.string,
        subtitleColor: p.a.string
      }
      const w = u.a.a({ textDecoration: 'none', color: 'black' });

        
const E = function(e) {
          const t = e.text;

            
const n = e.href
          return o.a.createElement(w, { href: n }, t)
        };

        
const x = u.a.li({ padding: '.5rem', listStyle: 'none' });

        
const y = function(e) {
          const t = e.text;

            
const n = e.path
          return o.a.createElement(
            x,
            null,
            o.a.createElement(E, { href: n, text: t })
          )
        };

        
const C = u.a.div({ padding: '.5rem' });

        
const k = u.a.ul({ display: 'flex', padding: '1rem' });

        
const j = function(e) {
          const t = e.navItems
          return o.a.createElement(
            C,
            null,
            o.a.createElement(
              k,
              null,
              t.map(function(e) {
                const t = e.text;

                  
const n = e.path
                return o.a.createElement(y, { key: n, text: t, path: n })
              })
            )
          )
        };

        
const W = u.a.div({
          textTransform: 'uppercase',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        });

        
const A = function(e) {
          const t = e.navItems;

            
const n = e.title;

            
const r = e.subtitle;

            
const a = e.theme.colors
          return o.a.createElement(
            W,
            null,
            o.a.createElement(b, {
              content: n,
              subtitle: r,
              color: a.main,
              subtitleColor: a.blue
            }),
            o.a.createElement(j, { navItems: t })
          )
        }
      ;(W.propTypes = {
        navItems: v.array,
        title: v.string,
        subtitle: v.string,
        theme: v.object
      }),
        (W.defaultProps = { navItems: [] })
      const I = function(e) {
        const t = e.children;

          
const n = e.loadingContent
        return o.a.createElement(a.Suspense, { fallback: n }, t)
      }
      I.defaultProps = {
        loadingContent: o.a.createElement('div', null, 'Loading...')
      }
      const P = u.a.div({ flex: 1, padding: '1rem', fontFamily: 'Quicksand' });

        
const S = function(e) {
          const t = e.children;

            
const n = e.theme;

            
const r = o.a.Children.map(t, function(e) {
              return e ? o.a.cloneElement(e, { theme: n }) : null
            })
          return o.a.createElement(P, null, r)
        };

        
const T = [
          {
            path: '/',
            exact: !0,
            component(e) {
              const t = e.baseContext;

                
const n = t.config;

                
const r = t.theme
              return o.a.createElement(
                S,
                { theme: r },
                o.a.createElement(A, {
                  title: n.title,
                  subtitle: n.subtitle,
                  navItems: n.nav
                }),
                o.a.createElement(m, { title: n.title })
              )
            }
          }
        ];

        
const D = Boolean(
          window.location.hostname === 'localhost' ||
            window.location.hostname === '[::1]' ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        )
      function O(e) {
        if ('serviceWorker' in navigator) {
          if (
            new URL('', window.location.href).origin !== window.location.origin
          )
            return
          window.addEventListener('load', function() {
            const t = ''.concat('', '/service-worker.js')
            D
              ? (!(function(e, t) {
                  fetch(e)
                    .then(function(n) {
                      const r = n.headers.get('content-type')
                      n.status === 404 ||
                      (r != null && r.indexOf('javascript') === -1)
                        ? navigator.serviceWorker.ready.then(function(e) {
                            e.unregister().then(function() {
                              window.location.reload()
                            })
                          })
                        : B(e, t)
                    })
                    .catch(function() {
                      console.log(
                        'No internet connection found. App is running in offline mode.'
                      )
                    })
                })(t, e),
                navigator.serviceWorker.ready.then(function() {
                  console.log(
                    'This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA'
                  )
                }))
              : B(t, e)
          })
        }
      }
      function B(e, t) {
        navigator.serviceWorker
          .register(e)
          .then(function(e) {
            e.onupdatefound = function() {
              const n = e.installing
              n != null &&
                (n.onstatechange = function() {
                  n.state === 'installed' &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          'New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA.'
                        ),
                        t && t.onUpdate && t.onUpdate(e))
                      : (console.log('Content is cached for offline use.'),
                        t && t.onSuccess && t.onSuccess(e)))
                })
            }
          })
          .catch(function(e) {
            console.error('Error during service worker registration:', e)
          })
      }
      function L() {
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister()
          })
      }
      let N;

        
const R = n(11);

        
const U = {
          config: {
            name: 'caioalcantara',
            title: 'caio alcantara',
            subtitle: 'Software Engineer',
            nav: [
              { text: 'Sobre mim', path: '/#' },
              { text: 'Projetos', path: '/#' },
              { text: 'Posts', path: '/#' },
              { text: 'Contato', path: '/#' }
            ]
          },
          theme: {
            fonts: { default: 'Quicksand' },
            colors: {
              main: '#243033',
              gray: '#3D4A4D',
              blue: '#00ACB4',
              white: '#DAE6E6'
            }
          }
        };

        
const J = Object(a.createContext)(Object(R.a)({}, U, N))
      l.a.render(
        o.a.createElement(
          c.a,
          null,
          Object(s.a)(T, {
            Provider: J.Provider,
            Consumer: J.Consumer,
            baseContext: J._currentValue
          })
        ),
        document.getElementById('root')
      ),
        r.unregister()
    }
  },
  [[12, 2, 1]]
])
// # sourceMappingURL=main.77b2193a.chunk.js.map

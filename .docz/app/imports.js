export const imports = {
  'src/components/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-index" */ 'src/components/index.mdx'),
  'src/components/atoms/extra-info/ExtraInfo.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-atoms-extra-info-extra-info" */ 'src/components/atoms/extra-info/ExtraInfo.mdx'),
  'src/components/atoms/rating/Rating.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-atoms-rating-rating" */ 'src/components/atoms/rating/Rating.mdx'),
  'src/components/atoms/title/Title.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-atoms-title-title" */ 'src/components/atoms/title/Title.mdx'),
  'src/components/molecules/header/Header.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-molecules-header-header" */ 'src/components/molecules/header/Header.mdx'),
  'src/components/molecules/hero/Hero.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-molecules-hero-hero" */ 'src/components/molecules/hero/Hero.mdx'),
  'src/components/molecules/loadable/Loadable.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-molecules-loadable-loadable" */ 'src/components/molecules/loadable/Loadable.mdx'),
  'src/components/molecules/search-bar/SearchBar.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-molecules-search-bar-search-bar" */ 'src/components/molecules/search-bar/SearchBar.mdx')
}

# 🏌 [1.9.0-9](https://github.com/ionic-team/stencil/compare/v1.8.3...v1.9.0-9) (2020-01-03)

With the `1.9.0` release, the default compiler is the same as `1.8.x`. However, to opt-in to test the improved compiler use the `--next` flag. Once the "next" compiler is stable we'll then make it the default in the `1.10.0` release. Currently the next compiler is passing all tests, but we'd like to get more real-world testing before making it the default.

Some of main features with the `--next` compiler include:

- Faster incremental builds
- Easily bundle and interact with [Web Workers](https://stenciljs.com/docs/web-workers)
- Custom Element Output Target (components without lazy loading)
- Internal compiler refactor in order to improve 3rd party tooling
- Import CSS files using traditional ESM imports
- Online REPL


### Bug Fixes

* **compiler:** add sw to next compiler ([afd2215](https://github.com/ionic-team/stencil/commit/afd22152022fc4a29a526ad57fc9acde083a56f1))
* **build:** skip d.ts cache file ([98b067b](https://github.com/ionic-team/stencil/commit/98b067b15ee2827fe9a933a79ac71c3c30442c77))
* **www:** respect allowInlineScripts ([1042a50](https://github.com/ionic-team/stencil/commit/1042a50ea7499020f2c273acb96fa4b49fa4238b))
* don't inline main script ([8c04fd1](https://github.com/ionic-team/stencil/commit/8c04fd1527c45c4027bb4198a5ae5c747dbfa19e))
* **compiler:** change props union type parsing ([#1779](https://github.com/ionic-team/stencil/issues/1779)) ([46b1090](https://github.com/ionic-team/stencil/commit/46b1090924da888f29c46d3041ebc927f6a2fc32))
* **dist:** allow globs in package.json files ([9777426](https://github.com/ionic-team/stencil/commit/9777426597bea6ed604c76b50ce26b950dca6990)), closes [#1792](https://github.com/ionic-team/stencil/issues/1792)
* **docs:** fix docs build ([d83e355](https://github.com/ionic-team/stencil/commit/d83e3555865b6889fab41c8dd0612ab8b013f09a)), closes [#2095](https://github.com/ionic-team/stencil/issues/2095)
* **safari:** update safari 10 to use es5/system builds ([ea20c28](https://github.com/ionic-team/stencil/commit/ea20c28cfb5a496d8059781b8fae58bb1f904317)), closes [#1900](https://github.com/ionic-team/stencil/issues/1900)
* **screenshot:** set correct width/height ([14e8ffc](https://github.com/ionic-team/stencil/commit/14e8ffc63a1cb936ead52fa2476fe432aa4273aa)), closes [#1209](https://github.com/ionic-team/stencil/issues/1209)
* **www:** fix prod import paths for www output ([e66c9ea](https://github.com/ionic-team/stencil/commit/e66c9eae4b8f43ed90214f09440e7d478995a9ff))
* **compiler:** dead @Watch() are warnings in dev mode ([0dd169a](https://github.com/ionic-team/stencil/commit/0dd169a020d671674d5f0663dfe18133c8b9e018))
* **compiler:** fix circular dependency with [@app-globals](https://github.com/app-globals) ([ce4a6c8](https://github.com/ionic-team/stencil/commit/ce4a6c860f926fc85d52ecf824ca0573c5466ffd))
* **compiler:** resolve const enums ([86c0afe](https://github.com/ionic-team/stencil/commit/86c0afe32195269bd8e2feb1e9983e8f9ee16c26))
* **crossOrigin:** fix crossOrigin error on edge ([7c45767](https://github.com/ionic-team/stencil/commit/7c45767321af89c54c2cc9433b49828c25fd12d8))
* **dev-server:** append dev server connector within <body> ([140fc7f](https://github.com/ionic-team/stencil/commit/140fc7f8edea8a03da608d27a10d3c19edf13658))
* **fs:** do not skip specs in ts.sys ([d753e38](https://github.com/ionic-team/stencil/commit/d753e38c9817a00dc4da5a7d81f6b6443d5973e9))
* **fs:** output targets in separate map ([e2b5318](https://github.com/ionic-team/stencil/commit/e2b5318f8c47dfefd38a7c873c13ef6c8b386b9d))
* **hydrate:** do not remove existing canonical links ([19da9ec](https://github.com/ionic-team/stencil/commit/19da9ec695c0ab89ec09b23144c8a1a3c8034f5d)), closes [#2097](https://github.com/ionic-team/stencil/issues/2097)
* **hydrate:** fix scoped/ie11/edge clientside slot hydrate ([a6e573c](https://github.com/ionic-team/stencil/commit/a6e573cad99488010bb847d88127e7b28fd18eb7)), closes [#2068](https://github.com/ionic-team/stencil/issues/2068)
* **ie11:** ensure document.body ready for es5 msg ([df669c8](https://github.com/ionic-team/stencil/commit/df669c8d434e1c0fd75f037efb842b9e1d7015f7))
* **next:** fix dev server hmr ([f1af876](https://github.com/ionic-team/stencil/commit/f1af876e5f297ce46891b63d7b63250fcc62a8c1))
* **next:** fix file watch callbacks ([80cc68d](https://github.com/ionic-team/stencil/commit/80cc68d7a1fcf0ec7490dc191417bab3f0a29d1a))
* **next:** fix ts readDirectory, use fetch cache ([18360ca](https://github.com/ionic-team/stencil/commit/18360caa8c04bed3a7ad2415239e50474a254c2a))
* **prerender:** fix max concurrency ([a24f9d1](https://github.com/ionic-team/stencil/commit/a24f9d1575ace81ec60e718cd3a48233906494ef))
* **runtime:** better error for unknown mode ([d0eeec0](https://github.com/ionic-team/stencil/commit/d0eeec0fd4979f50b3d21e0ab9e5b21a856c2a3d))
* **slot:** fix appendChild when using slot polyfill ([373fa6e](https://github.com/ionic-team/stencil/commit/373fa6e099a183fbf42ab46112396d9733f025e7)), closes [#1686](https://github.com/ionic-team/stencil/issues/1686)
* **worker:** check for web worker support ([09f8e18](https://github.com/ionic-team/stencil/commit/09f8e18e95e10001e1d73e94425b4093e5c3ad47))
* **worker:** ensure value undefined when error ([484dc6b](https://github.com/ionic-team/stencil/commit/484dc6b3a41c2bd65c7a6d60e7eaa19e8cf7a774))
* **worker:** improve error debuggin in dev mode ([d2b648d](https://github.com/ionic-team/stencil/commit/d2b648de5553007f10788d928ff58d9bf2e9681b))
* **mock-doc:** add CSSStyleSheet insertRule() to fix emotion-css SSR ([a13bd0a](https://github.com/ionic-team/stencil/commit/a13bd0a03b22b318b9a34615e922f17bb5ef3571))
* **worker:** dev error ([eeb8b3d](https://github.com/ionic-team/stencil/commit/eeb8b3d35347fb27863bc02142c6e0f156a12184))
* **compiler:** config.extras is always defined ([d5591d3](https://github.com/ionic-team/stencil/commit/d5591d370caaad5a788817b8bc26b06a74434c6d))
* **next:** don't minify css around + ([d38707d](https://github.com/ionic-team/stencil/commit/d38707d3d5e80de75090397278c245acbd3827cb))
* **next:** emit componentGraph data ([3d4eb4a](https://github.com/ionic-team/stencil/commit/3d4eb4af2dea4580da4f4b055eb557f8dd9940c3))
* **node:** semver break bundling ([58f9b4d](https://github.com/ionic-team/stencil/commit/58f9b4d17a378afb0d5bbf7d0507ac0a98df3e09)), closes [/github.com/npm/node-semver/blob/bb36c98d71d5760d730abba71c68bc324035dd36/index.js#L7-L21](https://github.com//github.com/npm/node-semver/blob/bb36c98d71d5760d730abba71c68bc324035dd36/index.js/issues/L7-L21)
* **runtime:** cloneNode fix opt-in ([6b4901d](https://github.com/ionic-team/stencil/commit/6b4901d6809f31b376197ecfec9615fa95563456)), closes [#1070](https://github.com/ionic-team/stencil/issues/1070) [#1948](https://github.com/ionic-team/stencil/issues/1948)
* **ssr:** check window ref ([6a30a32](https://github.com/ionic-team/stencil/commit/6a30a32fdc3f806f556c910daa81d5493f11befb))
* **vdom:** functional components can accept any children ([93081f5](https://github.com/ionic-team/stencil/commit/93081f5112a4216f1e67b37b4e1a65564abcb6fb)), closes [#2007](https://github.com/ionic-team/stencil/issues/2007) [#1969](https://github.com/ionic-team/stencil/issues/1969)
* **worker:** add dev error about non async exports ([e056a87](https://github.com/ionic-team/stencil/commit/e056a8788e3cb05b5928b95752ed7dfdaa194e13))
* **compiler:** add unused watch error ([f9c8078](https://github.com/ionic-team/stencil/commit/f9c80785f348f1d77fadad77cb0ad12200cc88d3))
* **compiler:** do not force disable incremental build ([f5a5daf](https://github.com/ionic-team/stencil/commit/f5a5dafc4fa984a9a6367b2ae33372fcb78ae77b))
* **compiler:** include dependency globals ([8de1667](https://github.com/ionic-team/stencil/commit/8de1667ece0fb3ac86ab9119ef24f1a7a4889c89))
* **compiler:** move worker file to the root ([71adb25](https://github.com/ionic-team/stencil/commit/71adb255f3800202b4282f4cb6d6c4aee481f9fb))
* **compiler:** unused variables becomes a warning in dev mode ([d55ade5](https://github.com/ionic-team/stencil/commit/d55ade5f6c42f291859695b59b34dc1b6b1cff74))
* **next:** validate tsconfig w/ ts parse config api ([10a6471](https://github.com/ionic-team/stencil/commit/10a6471367853b4b5872ef63ab4bc9ef34da5fcc))
* **runtime:** safari 10.0 does not implement the performance api [#2081](https://github.com/ionic-team/stencil/issues/2081) ([117e9a9](https://github.com/ionic-team/stencil/commit/117e9a9c0d560691eb9731c065fe5135e0eca7e3))
* **worker:** make them strongly typed and allow to pass callbacks ([89d5f40](https://github.com/ionic-team/stencil/commit/89d5f409ee106088d0bb3e8a1fe607210a8c534c))
* **worker:** minify worker in production ([3716040](https://github.com/ionic-team/stencil/commit/37160404c9a1d59fbcaeccef51a51478466463c6))
* **worker:** move main thread into a virtual module ([606fdbf](https://github.com/ionic-team/stencil/commit/606fdbf9931a6a2dd278c58b73d55ca95c441c92))
* **worker:** use event listeners and stencil prefix ([8b37fc5](https://github.com/ionic-team/stencil/commit/8b37fc51c8881438968e3d5711d10495d485b25b))
* **compiler:** don't inline scripts with crossorigin ([9cdcb28](https://github.com/ionic-team/stencil/commit/9cdcb28451a31a17074a7281798a84fdc384c103))
* **config:** add warning for stencil.config.ts in tsconfig ([b93b32b](https://github.com/ionic-team/stencil/commit/b93b32ba02d1ea6a5e04a5e07da063fea592c833))
* **next:** do not overide rootDir ([f1be974](https://github.com/ionic-team/stencil/commit/f1be974f5e4a8d8c075877a2f0443a420e06df02))
* **next:** fix JsonDocs dts ([93ff155](https://github.com/ionic-team/stencil/commit/93ff155f6c177875d78b35b228bc3262e9eb1d57))
* **next:** fix readPackageJson ([ae10174](https://github.com/ionic-team/stencil/commit/ae10174b552752e54466dc840e86127e7f38121e))
* **next:** prepend ext-modules.d.ts ref to internal index ([b2506fe](https://github.com/ionic-team/stencil/commit/b2506fe26b664201a5383f3e9898fb79d532e527))
* **next:** resolve remote internal dts urls ([2999885](https://github.com/ionic-team/stencil/commit/2999885a7888256b9512e5669535cfd00a563122))
* **next:** resolve remote url ts extensions ([5ae307d](https://github.com/ionic-team/stencil/commit/5ae307d4ba64bca15c1d966b8ab6ecb6e365f22b))
* **next:** warnings does not kill the process ([29ff45e](https://github.com/ionic-team/stencil/commit/29ff45e55c097219e56593849c04299a7fcb344e))
* **compiler:** fix prerendering in next compiler ([4669ad9](https://github.com/ionic-team/stencil/commit/4669ad934d1e41f532af30a51a2a293dd32ab7b9))
* **fs:** fix sys fs.readdirSync ([ec75495](https://github.com/ionic-team/stencil/commit/ec7549506a787e7599b22c7fbca82e47ded4242e))
* **mock-doc:** fix MockElement type ([d5a4243](https://github.com/ionic-team/stencil/commit/d5a4243a2973407cbb6deb3b90bd3071ce28fe7e))
* **next:** collection output target ([5fffda1](https://github.com/ionic-team/stencil/commit/5fffda1c990bc3464aae59cb4aa5e0ef0f677377))
* **next:** do not override target ([d1bd0e2](https://github.com/ionic-team/stencil/commit/d1bd0e2c95cc1ae9904fe63ed2016e254990abb6))
* **next:** typescript plugin runs first ([67e6565](https://github.com/ionic-team/stencil/commit/67e6565f7e19a5209c13e1f5e6a62a79e51ad688))
* **runtime:** cmpMeta is part of hostRef ([04f7dcd](https://github.com/ionic-team/stencil/commit/04f7dcd9937b1175b3f19983032debba249c1b3c))
* **www:** inline esm in place ([b99344f](https://github.com/ionic-team/stencil/commit/b99344fbcb975a9fef8d5995e7d1b5251da022cd))
* **mock-doc:** implement  getElementById() in document fragment ([#2032](https://github.com/ionic-team/stencil/issues/2032)) ([35021d8](https://github.com/ionic-team/stencil/commit/35021d818f0dd9eca9935f4737c25d5461525fe5)), closes [#2030](https://github.com/ionic-team/stencil/issues/2030)
* **event:** emit() returns the CustomElement ([#2017](https://github.com/ionic-team/stencil/issues/2017)) ([e675366](https://github.com/ionic-team/stencil/commit/e675366f59526b28bd4be0712f01a096ca8148e4)), closes [#1996](https://github.com/ionic-team/stencil/issues/1996)
* **polyfills:** update baseURI for base w/out href ([#1995](https://github.com/ionic-team/stencil/issues/1995)) ([8582c93](https://github.com/ionic-team/stencil/commit/8582c934b5aaccf3d7e8c14131f1af4eedcc07b8))
* **prerender:** prevent window timeout leaks ([b80feda](https://github.com/ionic-team/stencil/commit/b80feda7e8b57815f750cb9b2d608525b6f3b6a6))
* **testing:** fix single-process mode ([#2016](https://github.com/ionic-team/stencil/issues/2016)) ([72f0a05](https://github.com/ionic-team/stencil/commit/72f0a05f0a4403174afbbc52ae46820e6d53faa6))
* **next:** optimize dist-custom-elements bundle ([50b5a27](https://github.com/ionic-team/stencil/commit/50b5a27f84de84393f655a86e8f68015eec226cf))
* **next:** optimizes mode entries ([634e394](https://github.com/ionic-team/stencil/commit/634e39439a3ddcd93db8c15afd793ac95d338a7e))
* **next:** skip test files ([150d984](https://github.com/ionic-team/stencil/commit/150d98448dd1a50cd316048d775803f9889fa5be))
* **next:** www runs after lazy build ([96ae066](https://github.com/ionic-team/stencil/commit/96ae066de4c5eb6515c962aceeafc20063044b84))
* **compiler:** resolve dependencies package.json correctly ([0f029ae](https://github.com/ionic-team/stencil/commit/0f029ae5dd398af76eee795f505695fc73fb607c))
* **next:** ensure at least one output target ([751ada9](https://github.com/ionic-team/stencil/commit/751ada95a1dceaafe3e9596cff54e0733aad6c0f))
* **worker:** fix passing back worker error ([9304db7](https://github.com/ionic-team/stencil/commit/9304db74535e9eeb8fb62655c3537ac18f11bf40))


### Features

* **mock-doc:** add insertAdjacentHTML ([42921d2](https://github.com/ionic-team/stencil/commit/42921d2ede7ee9b2840ca851e8887682194f1ee8)), closes [#1980](https://github.com/ionic-team/stencil/issues/1980)
* **mock-doc:** get attributes by index ([d91b197](https://github.com/ionic-team/stencil/commit/d91b197f1ba57e15f336a1213fc29e4051e61906)), closes [#1211](https://github.com/ionic-team/stencil/issues/1211)
* **worker:** transfer any typedArray ([302ddb1](https://github.com/ionic-team/stencil/commit/302ddb1f3cb9ee2efd5430856eabe4672fb1a903))
* **e2e:** add togglesAttribute() and removeAttribute() to e2e elements ([5b28be8](https://github.com/ionic-team/stencil/commit/5b28be88c8418a84ef168f126c269931c1151a63)), closes [#1745](https://github.com/ionic-team/stencil/issues/1745)
* **mock-doc:** selector to handle child combinators ([#2037](https://github.com/ionic-team/stencil/issues/2037)) ([6fd43e7](https://github.com/ionic-team/stencil/commit/6fd43e75eb2828c188ef22c59504e3c211639cd5))
* **test:** Add two event detail jest matchers ([ebc518d](https://github.com/ionic-team/stencil/commit/ebc518dd258be44b9c5e74c440c5134086ab55f9)), closes [#2046](https://github.com/ionic-team/stencil/issues/2046)
* **delegatesFocus:** ability to set delegatesFocus on shadow cmps ([f45c919](https://github.com/ionic-team/stencil/commit/f45c919a9675827a5006702218982022b3e0ec0d)), closes [#1623](https://github.com/ionic-team/stencil/issues/1623)
* **build:** web workers esm ([67a7fc2](https://github.com/ionic-team/stencil/commit/67a7fc2ea969f6b33dd4662c912f5218f6729a48))
* **compiler:** add config flag for preventing script inlining ([#2077](https://github.com/ionic-team/stencil/issues/2077)) ([f85cf42](https://github.com/ionic-team/stencil/commit/f85cf423fd4f3d3521da6c89839f450f3c4756cc))
* **compiler:** add Build.isTesting ([eac90bd](https://github.com/ionic-team/stencil/commit/eac90bd151a993b2387aa0bf7583d3e696a0e98f))
* **compiler:** custom-elements-bundle ([228e382](https://github.com/ionic-team/stencil/commit/228e38201390327dbb4198cfb0e53d6218415068))
* **custom:** add copy tasks to custom outputTargets ([#2023](https://github.com/ionic-team/stencil/issues/2023)) ([65aeb8c](https://github.com/ionic-team/stencil/commit/65aeb8c4a818b200695946073b71f63bf4aa3634))
* **runtime:** experimental active render context ([#2040](https://github.com/ionic-team/stencil/issues/2040)) ([75ed488](https://github.com/ionic-team/stencil/commit/75ed488667020065eec908365a4595b8d2a32531))
* **bundler:** txt plugin ([b0efb11](https://github.com/ionic-team/stencil/commit/b0efb11e6d10fb501e0ef35cdff8951983ffcdc4))
* **compiler:** add Build.isServer ([56d94f3](https://github.com/ionic-team/stencil/commit/56d94f33db5917e402692cf1740e0b62047e4e63))



## 🚍 [1.8.3](https://github.com/ionic-team/stencil/compare/v1.8.2...v1.8.3) (2019-12-30)


### Bug Fixes

* **crossOrigin:** fix crossOrigin error on edge ([965b4af](https://github.com/ionic-team/stencil/commit/965b4af2c24ce9387ce585b27ff46ccf423dfbe5))
* **hydrate:** fix scoped/ie11/edge clientside slot hydrate ([d4314f4](https://github.com/ionic-team/stencil/commit/d4314f4d432830408a963b8996a4f6eee6285699))
* **ie11:** ensure document.body ready for es5 msg ([763343e](https://github.com/ionic-team/stencil/commit/763343e6dbf9afa90e7a91e8e80c6feef4244e30))
* **mock-doc:** add CSSStyleSheet insertRule() to fix emotion-css SSR ([3aa702c](https://github.com/ionic-team/stencil/commit/3aa702c523831cf5a4653ec41b8115c23cb88af2))


### Features

* **e2e:** add togglesAttribute() and removeAttribute() to e2e elements ([ca27197](https://github.com/ionic-team/stencil/commit/ca27197c5e817878ab3ddad7ab19451c5c7d51c7)), closes [#1745](https://github.com/ionic-team/stencil/issues/1745)



## 🐍 [1.8.2](https://github.com/ionic-team/stencil/compare/v1.8.1...v1.8.2) (2019-12-18)


### Features

* **delegatesFocus:** ability to set delegatesFocus on shadow cmps ([f45c919](https://github.com/ionic-team/stencil/commit/f45c919a9675827a5006702218982022b3e0ec0d)), closes [#1623](https://github.com/ionic-team/stencil/issues/1623)
* **custom:** add copy tasks to custom outputTargets ([#2023](https://github.com/ionic-team/stencil/issues/2023)) ([65aeb8c](https://github.com/ionic-team/stencil/commit/65aeb8c4a818b200695946073b71f63bf4aa3634))
* **runtime:** experimental active render context ([#2040](https://github.com/ionic-team/stencil/issues/2040)) ([75ed488](https://github.com/ionic-team/stencil/commit/75ed488667020065eec908365a4595b8d2a32531))


### Bug Fixes

* **runtime:** cloneNode fix opt-in ([6de57f7](https://github.com/ionic-team/stencil/commit/6de57f715205d309e3502b2dd0063ca822bb1b06)), closes [#1070](https://github.com/ionic-team/stencil/issues/1070) [#1948](https://github.com/ionic-team/stencil/issues/1948)
* **mock-doc:** fix MockElement type ([d5a4243](https://github.com/ionic-team/stencil/commit/d5a4243a2973407cbb6deb3b90bd3071ce28fe7e))
* **ssr:** check window ref ([755ff0d](https://github.com/ionic-team/stencil/commit/755ff0d95369f66a2f2ae68f8af48fefbd1f2d7a))
* **mock-doc:** implement  getElementById() in document fragment ([#2032](https://github.com/ionic-team/stencil/issues/2032)) ([35021d8](https://github.com/ionic-team/stencil/commit/35021d818f0dd9eca9935f4737c25d5461525fe5)), closes [#2030](https://github.com/ionic-team/stencil/issues/2030)
* **event:** emit() returns the CustomElement ([#2017](https://github.com/ionic-team/stencil/issues/2017)) ([e675366](https://github.com/ionic-team/stencil/commit/e675366f59526b28bd4be0712f01a096ca8148e4)), closes [#1996](https://github.com/ionic-team/stencil/issues/1996)
* **polyfills:** update baseURI for base w/out href ([#1995](https://github.com/ionic-team/stencil/issues/1995)) ([8582c93](https://github.com/ionic-team/stencil/commit/8582c934b5aaccf3d7e8c14131f1af4eedcc07b8))
* **prerender:** prevent window timeout leaks ([b80feda](https://github.com/ionic-team/stencil/commit/b80feda7e8b57815f750cb9b2d608525b6f3b6a6))
* **testing:** fix single-process mode ([#2016](https://github.com/ionic-team/stencil/issues/2016)) ([72f0a05](https://github.com/ionic-team/stencil/commit/72f0a05f0a4403174afbbc52ae46820e6d53faa6))



## 🔋 [1.8.1](https://github.com/ionic-team/stencil/compare/v1.8.0...v1.8.1) (2019-11-15)


### Bug Fixes

* **dev:** add <input> value order warning ([4124720](https://github.com/ionic-team/stencil/commit/4124720f388c4df4e5a0a4e5dabf360b3289688f))
* **es5:** workaround around es5 helpers name conflict ([#2013](https://github.com/ionic-team/stencil/issues/2013)) ([b5353bd](https://github.com/ionic-team/stencil/commit/b5353bd1b008ecfafe98cd6f0c2b5812b3cce515)), closes [#1916](https://github.com/ionic-team/stencil/issues/1916)



# 🚀 [1.8.0](https://github.com/ionic-team/stencil/compare/v1.7.5...v1.8.0) (2019-11-13)


### Bug Fixes

* **jsx:** add referrerPolicy for iframe interface ([#2003](https://github.com/ionic-team/stencil/issues/2003)) ([c2be55e](https://github.com/ionic-team/stencil/commit/c2be55ecd323709a6948142ec4e509e79b128166))
* **slot:** fix non-shadow list inside of a shadow DOM component ([#1197](https://github.com/ionic-team/stencil/issues/1197)) ([b8f22da](https://github.com/ionic-team/stencil/commit/b8f22da36b1ce13f0c61ea112852f29a1fd6a128)), closes [#897](https://github.com/ionic-team/stencil/issues/897)


### Features

* **typescript:** update to typescript 3.7.2 ([#1991](https://github.com/ionic-team/stencil/issues/1991)) ([2d86954](https://github.com/ionic-team/stencil/commit/2d869541586f811152b1631cc67f67de4d7953b0))



## 🚎 [1.7.5](https://github.com/ionic-team/stencil/compare/v1.7.4...v1.7.5) (2019-10-29)


### Bug Fixes

* **jest:** bump jest versions to fix types ([68f5a02](https://github.com/ionic-team/stencil/commit/68f5a0286d6d7036b689bb46d3cfb2dbab350027))
* **jest:** improve lazy require install output ([264f0a7](https://github.com/ionic-team/stencil/commit/264f0a77ba21cbadc325ecfcce5e794f8e657eef))


### Features

* **jest:** bump jest ([567a6b7](https://github.com/ionic-team/stencil/commit/567a6b7a59f527d9cff6dac0397e43aa7ca02ca5))
* **jest:** optionally jest transform esm files to cjs ([7adf62f](https://github.com/ionic-team/stencil/commit/7adf62f58a639aa38f2e9a69f36787b6d93bfebb))



## 🎠 [1.7.4](https://github.com/ionic-team/stencil/compare/v1.7.3...v1.7.4) (2019-10-23)


### Bug Fixes

* **types:** use var for components.d.ts ([7e166e1](https://github.com/ionic-team/stencil/commit/7e166e1e1c0ca1cd66f87e401b60980f377e4d3e))



## 🌼 [1.7.3](https://github.com/ionic-team/stencil/compare/v1.7.2...v1.7.3) (2019-10-18)


### Bug Fixes

* **types:** always copy stencil.core.d.ts when pkg json types exist ([7832148](https://github.com/ionic-team/stencil/commit/783214823e62fdca9977c550951a5b10b3b1397a))



## ☕️ [1.7.2](https://github.com/ionic-team/stencil/compare/v1.7.1...v1.7.2) (2019-10-15)


### Bug Fixes

* **compiler:** disable eslint for components.d.ts ([09ee00c](https://github.com/ionic-team/stencil/commit/09ee00c4214691fa10f5de7f1a16eeaf26180c40))
* **event:** add warns for events that start with "on" ([1fa6636](https://github.com/ionic-team/stencil/commit/1fa66365d289cb3b119c8fa7011e41fae5e7124c))
* **vdom:** add dev check for unexpected vnode ([#1950](https://github.com/ionic-team/stencil/issues/1950)) ([358e925](https://github.com/ionic-team/stencil/commit/358e92587a331799b195c1ef5b4ba5775014a63f))



## 🚐 [1.7.1](https://github.com/ionic-team/stencil/compare/v1.7.0...v1.7.1) (2019-10-11)


### Bug Fixes

* **compiler:** respect hashFileNames for rollup chunks ([59d7a55](https://github.com/ionic-team/stencil/commit/59d7a55a2f34df50da6d913e94542e60b7cf3af9))
* **compiler:** warn about properties that look like events ([25f60fe](https://github.com/ionic-team/stencil/commit/25f60fe5a63abb122c0872d0bdddf613f5d2af71))
* **hydrate:** fix hydrate platform ([19f1614](https://github.com/ionic-team/stencil/commit/19f16147a56d14e5707d0aea9a4ea93a5f5c3497)), closes [#1940](https://github.com/ionic-team/stencil/issues/1940)
* **vdom:** render <input list> as attribute ([73ea50e](https://github.com/ionic-team/stencil/commit/73ea50e8007224f7f8bde9df29126dec39d3a943))
* add dev mode debug log ([28b50df](https://github.com/ionic-team/stencil/commit/28b50df4667af0ec1c9d0c65ef9142fbe9670388))


### Features

* **mock-doc:** try adding Node to mock-doc ([#1947](https://github.com/ionic-team/stencil/issues/1947)) ([3b6177b](https://github.com/ionic-team/stencil/commit/3b6177bfce06478eb459bbfbe3fa6a25cd119288))



# 🍜 [1.7.0](https://github.com/ionic-team/stencil/compare/v1.6.1...v1.7.0) (2019-10-10)


### Bug Fixes

* **profile:** improve profiling ([fdaa035](https://github.com/ionic-team/stencil/commit/fdaa0350b1dbbfa4f6fee2722cafb074ab587468))
* remove error ([e0cfdf2](https://github.com/ionic-team/stencil/commit/e0cfdf25e030f88075d28a17aa7d13a6f38f79e5))
* **lifecycles:** defer connectedCallback processing until all components are registered ([#1930](https://github.com/ionic-team/stencil/issues/1930)) ([0f302eb](https://github.com/ionic-team/stencil/commit/0f302ebac23dceb2fcbb1b07a427354cf84c9fc8))
* **profile:** add st:app:start mark ([fd6b508](https://github.com/ionic-team/stencil/commit/fd6b508487f853141c6f7fc8f4a94e6968aec0cc))
* **render:** adds warning about mutations inside render() ([0aca665](https://github.com/ionic-team/stencil/commit/0aca665aec72d5e672f40e60293d5ba01d83a6a9))


### Features

* **dev:** add basic devtools API ([c5ebbfe](https://github.com/ionic-team/stencil/commit/c5ebbfe44eda087b068f5f1470503a7c2d4d01f1))
* **runtime:** add performance profiling ([f5817a0](https://github.com/ionic-team/stencil/commit/f5817a068610f90c2a4bed42732b68cef4cff143))



## ☀️ [1.6.1](https://github.com/ionic-team/stencil/compare/v1.6.0...v1.6.1) (2019-10-08)


### Bug Fixes

* **testing:** more consistent screenshots ([ad42326](https://github.com/ionic-team/stencil/commit/ad42326))



# 🚖 [1.6.0](https://github.com/ionic-team/stencil/compare/v1.5.4...v1.6.0) (2019-10-08)


### Bug Fixes

* **docs:** json docs match JsonDocs types ([eaee62c](https://github.com/ionic-team/stencil/commit/eaee62c))
* **loader:** better resourceUrl resolution ([f56eeb4](https://github.com/ionic-team/stencil/commit/f56eeb4))
* fix chunk URL determination in IE11 ([#1918](https://github.com/ionic-team/stencil/issues/1918)) ([0c933a4](https://github.com/ionic-team/stencil/commit/0c933a4))
* **lazy:** async methods resolve on instance load ([#1919](https://github.com/ionic-team/stencil/issues/1919)) ([f1c5fd5](https://github.com/ionic-team/stencil/commit/f1c5fd5))
* **vdom:** fix onAnimationStart/End ([#1907](https://github.com/ionic-team/stencil/issues/1907)) ([34c77bd](https://github.com/ionic-team/stencil/commit/34c77bd)), closes [#1906](https://github.com/ionic-team/stencil/issues/1906)
* **vdom:** fix vdom static analysis ([#1920](https://github.com/ionic-team/stencil/issues/1920)) ([eee6336](https://github.com/ionic-team/stencil/commit/eee6336)), closes [#1917](https://github.com/ionic-team/stencil/issues/1917)
* update lifecycles respect hierarchy  ([#1924](https://github.com/ionic-team/stencil/issues/1924)) ([29bdd8f](https://github.com/ionic-team/stencil/commit/29bdd8f))
* **compiler:** fix static analysis for functional and vdom text ([0901698](https://github.com/ionic-team/stencil/commit/0901698)), closes [#1903](https://github.com/ionic-team/stencil/issues/1903)
* **compiler:** warn about deprecated `attr` option ([22eb531](https://github.com/ionic-team/stencil/commit/22eb531))
* **lifecycles:** async rendering in dist-module ([515df03](https://github.com/ionic-team/stencil/commit/515df03))
* **mock-doc:** add html collections to document ([0bf3877](https://github.com/ionic-team/stencil/commit/0bf3877)), closes [#1925](https://github.com/ionic-team/stencil/issues/1925)
* **runtime:** add warning for non-mutable props ([f960a3d](https://github.com/ionic-team/stencil/commit/f960a3d)), closes [#1927](https://github.com/ionic-team/stencil/issues/1927)
* **types:** Build properties are readonly ([5f16d81](https://github.com/ionic-team/stencil/commit/5f16d81))


### Features

* **docs:** expose type as array of values ([#1913](https://github.com/ionic-team/stencil/issues/1913)) ([59b9a83](https://github.com/ionic-team/stencil/commit/59b9a83))
* **docs:** typed json docs ([#1922](https://github.com/ionic-team/stencil/issues/1922)) ([fb0272e](https://github.com/ionic-team/stencil/commit/fb0272e))
* **api:** disable attribute by passing null ([3ac02f3](https://github.com/ionic-team/stencil/commit/3ac02f3))
* **mock-doc:** add append() and ([a5b5dfa](https://github.com/ionic-team/stencil/commit/a5b5dfa))

### Performance Improvements

* **vdom:** class shape optimizations for v8 ([#1910](https://github.com/ionic-team/stencil/issues/1910)) ([0a0d21e](https://github.com/ionic-team/stencil/commit/0a0d21e))
* **compiler:** better treeshake vdom features ([96eec74](https://github.com/ionic-team/stencil/commit/96eec74))
* **vdom:** misc perf improvements ([ee33d3d](https://github.com/ionic-team/stencil/commit/ee33d3d))



## 😜 [1.5.4](https://github.com/ionic-team/stencil/compare/v1.5.3...v1.5.4) (2019-10-01)


### Bug Fixes

* karma  waiting ([5bc76a7](https://github.com/ionic-team/stencil/commit/5bc76a7))
* sys.node ([68408f6](https://github.com/ionic-team/stencil/commit/68408f6))
* **compiler:** only treat unused diagnostics as warnings ([add1337](https://github.com/ionic-team/stencil/commit/add1337))
* **vdom:** boolean properties in native elements ([ccce46e](https://github.com/ionic-team/stencil/commit/ccce46e)), closes [#1899](https://github.com/ionic-team/stencil/issues/1899)



## 🐊 [1.5.3](https://github.com/ionic-team/stencil/compare/v1.5.2...v1.5.3) (2019-09-27)


### Bug Fixes

* **ie11:** improved css vars polyfill ([5e4a0f9](https://github.com/ionic-team/stencil/commit/5e4a0f9))
* **polyfill:** guard against undefined nodes in getRootNode ([#1898](https://github.com/ionic-team/stencil/issues/1898)) ([94cf5b2](https://github.com/ionic-team/stencil/commit/94cf5b2))
* **safari10:** fix safari 10 support ([35d61a4](https://github.com/ionic-team/stencil/commit/35d61a4))



## ⛹ [1.5.2](https://github.com/ionic-team/stencil/compare/v1.5.1...v1.5.2) (2019-09-26)


### Bug Fixes

* **css-shim:** replaced innerHTML with textContent ([#1892](https://github.com/ionic-team/stencil/issues/1892)) ([613c797](https://github.com/ionic-team/stencil/commit/613c797))
* **ie:** add isConnected polyfill ([6fbbcab](https://github.com/ionic-team/stencil/commit/6fbbcab))
* **ie:** DOMTokenList polyfill ([09ea5de](https://github.com/ionic-team/stencil/commit/09ea5de))
* **ie:** fixed isConnected polyfill ([ef2df7c](https://github.com/ionic-team/stencil/commit/ef2df7c))



## 🐽 [1.5.1](https://github.com/ionic-team/stencil/compare/v1.5.0...v1.5.1) (2019-09-25)


### Bug Fixes

* emit index on browser build ([eb259a9](https://github.com/ionic-team/stencil/commit/eb259a9))
* emit pure JSX namespace ([#1886](https://github.com/ionic-team/stencil/issues/1886)) ([5ef9a47](https://github.com/ionic-team/stencil/commit/5ef9a47))
* **vdom:** svg's xlink attributes ([#1890](https://github.com/ionic-team/stencil/issues/1890)) ([3f436e2](https://github.com/ionic-team/stencil/commit/3f436e2))


### Performance Improvements

* unknown globals are side effect free ([370636a](https://github.com/ionic-team/stencil/commit/370636a))



# 🍬 [1.5.0](https://github.com/ionic-team/stencil/compare/v1.4.0...v1.5.0) (2019-09-24)


### Bug Fixes

* **compiler:** component constructors can not have arguments ([8df8bf9](https://github.com/ionic-team/stencil/commit/8df8bf9)), closes [#1855](https://github.com/ionic-team/stencil/issues/1855)
* **screenshot:** works over file protocol ([440fd9d](https://github.com/ionic-team/stencil/commit/440fd9d))
* **system:** fix leaking variables ([#1788](https://github.com/ionic-team/stencil/issues/1788)) ([d9881d3](https://github.com/ionic-team/stencil/commit/d9881d3))
* loader uses data-stencil-namespace ([21552c8](https://github.com/ionic-team/stencil/commit/21552c8))
* **css-shim:** skip 'Data URLs' when fixing relative urls ([#1861](https://github.com/ionic-team/stencil/issues/1861)) ([40d8e1e](https://github.com/ionic-team/stencil/commit/40d8e1e))
* **docs:** CSS variables typo ([513012e](https://github.com/ionic-team/stencil/commit/513012e))
* **docs:** Minify CSS and JS config swapped ([1953c12](https://github.com/ionic-team/stencil/commit/1953c12))
* **mock-doc:** <button> type defaults to "submit" ([a865439](https://github.com/ionic-team/stencil/commit/a865439))
* **vdom:** initial render of <input> properties ([#1858](https://github.com/ionic-team/stencil/issues/1858)) ([e0085cc](https://github.com/ionic-team/stencil/commit/e0085cc))


### Features

* add componentShouldUpdate ([#1876](https://github.com/ionic-team/stencil/issues/1876)) ([457203f](https://github.com/ionic-team/stencil/commit/457203f))
* relax puppeteer semver range ([f7e08d2](https://github.com/ionic-team/stencil/commit/f7e08d2))
* support mixed case events ([#1856](https://github.com/ionic-team/stencil/issues/1856)) ([972ce3f](https://github.com/ionic-team/stencil/commit/972ce3f))


### Performance Improvements

* **e2e:** enable GPU for osx and linux ([d34d0f8](https://github.com/ionic-team/stencil/commit/d34d0f8))



# 💥 [1.4.0](https://github.com/ionic-team/stencil/compare/v1.3.2...v1.4.0) (2019-09-09)


### Bug Fixes

* **docs:** emit vscode custom html data ([1008ee7](https://github.com/ionic-team/stencil/commit/1008ee7))

### Features

* **typescript:** update to typescript 3.6.2 ([9983da0](https://github.com/ionic-team/stencil/commit/9983da0))



## 🍔 [1.3.3](https://github.com/ionic-team/stencil/compare/v1.3.2...v1.3.3) (2019-09-06)


### Bug Fixes

* **docs:** print dependencies paths in unix format ([22d9c93](https://github.com/ionic-team/stencil/commit/22d9c93))
* **types:** fix AsyncIterableIterator type error ([6065bab](https://github.com/ionic-team/stencil/commit/6065bab)), closes [#1839](https://github.com/ionic-team/stencil/issues/1839)


### Features

* **mock-doc:** add MouseEvent ([#1830](https://github.com/ionic-team/stencil/issues/1830)) ([ad871b8](https://github.com/ionic-team/stencil/commit/ad871b8))
* **testing:** add getDiagnostics() and failOnConsole option ([645b5f9](https://github.com/ionic-team/stencil/commit/645b5f9))
* **testing:** add template rendering ([#1838](https://github.com/ionic-team/stencil/issues/1838)) ([ae74a27](https://github.com/ionic-team/stencil/commit/ae74a27))



## 🐎 [1.3.2](https://github.com/ionic-team/stencil/compare/v1.3.1...v1.3.2) (2019-08-26)


### Bug Fixes

* **testing:** properly wait until stencil load ([897b659](https://github.com/ionic-team/stencil/commit/897b659))


### Features

* **testing:** spyOnEvent returns async iterator ([c9d543a](https://github.com/ionic-team/stencil/commit/c9d543a))



## 🐦 [1.3.1](https://github.com/ionic-team/stencil/compare/v1.3.0...v1.3.1) (2019-08-23)


### Bug Fixes

* dont error about exported function in global ([ab65ba6](https://github.com/ionic-team/stencil/commit/ab65ba6))

# 🌎 [1.3.0](https://github.com/ionic-team/stencil/compare/v1.2.5...v1.3.0) (2019-08-20)


### Bug Fixes

* **compiler:** stencil core runtime is side effects free ([3a44def](https://github.com/ionic-team/stencil/commit/3a44def))
* **dist-module:** apply plugins to dist-module imports ([1392b0c](https://github.com/ionic-team/stencil/commit/1392b0c))
* **e2e:** improve error reporting ([c53d91e](https://github.com/ionic-team/stencil/commit/c53d91e))
* **global:** fix global script output ([9d9ee20](https://github.com/ionic-team/stencil/commit/9d9ee20))
* **global:** require global scripts to be wrapped w/ default export fn ([bdae144](https://github.com/ionic-team/stencil/commit/bdae144))
* **jest:** ensure correct argv types ([766ab26](https://github.com/ionic-team/stencil/commit/766ab26))
* **mock-doc:** property append document fragments ([84400b3](https://github.com/ionic-team/stencil/commit/84400b3))
* **testing:** do not skip output targets in testing ([691b8ad](https://github.com/ionic-team/stencil/commit/691b8ad))
* **testing:** improve serialization of console logs ([d4d11f0](https://github.com/ionic-team/stencil/commit/d4d11f0))
* **testing:** skip e2e by default ([110d5e4](https://github.com/ionic-team/stencil/commit/110d5e4))
* **testing:** skip script and style in text search ([9d55304](https://github.com/ionic-team/stencil/commit/9d55304))
* **testing:** spec source maps works in node debugger ([225f488](https://github.com/ionic-team/stencil/commit/225f488))


### Features

* **cli:** add component generator ([#1814](https://github.com/ionic-team/stencil/issues/1814)) ([9ab0637](https://github.com/ionic-team/stencil/commit/9ab0637))
* **compiler:** support paths in compiler options ([#1584](https://github.com/ionic-team/stencil/issues/1584)) ([66bb0cd](https://github.com/ionic-team/stencil/commit/66bb0cd))
* **log:** do not error for semantic ts diagnostics when in dev mode ([9e64ddc](https://github.com/ionic-team/stencil/commit/9e64ddc))



## 🏸 [1.2.5](https://github.com/ionic-team/stencil/compare/v1.2.4...v1.2.5) (2019-08-13)


### Bug Fixes

* **file:** make es5 work using the file protocol ([a5c01c6](https://github.com/ionic-team/stencil/commit/a5c01c6))
* **legacy:** remove NodeList forEach usage + polyfill ([5b2f000](https://github.com/ionic-team/stencil/commit/5b2f000))
* keep console.log in prod mode ([a145c74](https://github.com/ionic-team/stencil/commit/a145c74)), closes [#1799](https://github.com/ionic-team/stencil/issues/1799)
* puppeteer types ([237e38a](https://github.com/ionic-team/stencil/commit/237e38a))


### Features

* **dist-module:** generate single file component module ([2ce6982](https://github.com/ionic-team/stencil/commit/2ce6982))


### Performance Improvements

* better optimize esm build ([66571d0](https://github.com/ionic-team/stencil/commit/66571d0))
* **bundler:** don't leak build conditionals ([4bcd107](https://github.com/ionic-team/stencil/commit/4bcd107))
* **prerender:** serialize modulepreload links when using mode ([4102cd3](https://github.com/ionic-team/stencil/commit/4102cd3))
* **www:** create modulepreload for main entry-point ([134ac50](https://github.com/ionic-team/stencil/commit/134ac50))
* optimize isComplexType ([a13f45d](https://github.com/ionic-team/stencil/commit/a13f45d))



## 🐗 [1.2.4](https://github.com/ionic-team/stencil/compare/v1.2.1...v1.2.4) (2019-08-08)


### Bug Fixes

* don't emit undocumented warning when deprecated ([2ef43d1](https://github.com/ionic-team/stencil/commit/2ef43d1))
* fix tests ([d6eded2](https://github.com/ionic-team/stencil/commit/d6eded2))
* node types ([35ab597](https://github.com/ionic-team/stencil/commit/35ab597))
* **compiler:** crash when printing warning ([64607d1](https://github.com/ionic-team/stencil/commit/64607d1))
* **dev-server:** ssl support ([#1653](https://github.com/ionic-team/stencil/issues/1653)) ([e6cc6da](https://github.com/ionic-team/stencil/commit/e6cc6da))
* **runtime:** always add .hydrated to <html> ([#1767](https://github.com/ionic-team/stencil/issues/1767)) ([143e07e](https://github.com/ionic-team/stencil/commit/143e07e))
* **script:** accept query parameter ([1bf34b0](https://github.com/ionic-team/stencil/commit/1bf34b0)), closes [#1775](https://github.com/ionic-team/stencil/issues/1775)
* **vdom:** render falsy attributes properly ([368aee7](https://github.com/ionic-team/stencil/commit/368aee7)), closes [#1780](https://github.com/ionic-team/stencil/issues/1780)
* workaround v8 caching issue ([#1768](https://github.com/ionic-team/stencil/issues/1768)) ([c3d0910](https://github.com/ionic-team/stencil/commit/c3d0910)), closes [#1759](https://github.com/ionic-team/stencil/issues/1759)


### Features

* **build:** export component classes as const variable ([3a948af](https://github.com/ionic-team/stencil/commit/3a948af))
* emit warning when emitting event while disconnected ([053a7df](https://github.com/ionic-team/stencil/commit/053a7df))
* **compiler:** add component compiler metadata to results ([b354444](https://github.com/ionic-team/stencil/commit/b354444))
* **compiler:** add import paths to compile results ([adca6d0](https://github.com/ionic-team/stencil/commit/adca6d0))


### Performance Improvements

* **vdom:** avoid creating an array in isComplexType ([fbcd405](https://github.com/ionic-team/stencil/commit/fbcd405))
* async queue for hydrated client ([fa7d29f](https://github.com/ionic-team/stencil/commit/fa7d29f))



## 🍏 [1.2.3](https://github.com/ionic-team/stencil/compare/v1.2.2...v1.2.3) (2019-07-30)


### Bug Fixes

* workaround v8 caching issue ([#1768](https://github.com/ionic-team/stencil/issues/1768)) ([c3d0910](https://github.com/ionic-team/stencil/commit/c3d0910)), closes [#1759](https://github.com/ionic-team/stencil/issues/1759)



## 🎁 [1.2.2](https://github.com/ionic-team/stencil/compare/v1.2.1...v1.2.2) (2019-07-26)


### Bug Fixes

* **runtime:** always add .hydrated to <html> ([#1767](https://github.com/ionic-team/stencil/issues/1767)) ([143e07e](https://github.com/ionic-team/stencil/commit/143e07e))


### Features

* **compiler:** add component compiler metadata to results ([b354444](https://github.com/ionic-team/stencil/commit/b354444))
* **compiler:** add import paths to compile results ([adca6d0](https://github.com/ionic-team/stencil/commit/adca6d0))
* **dev-server:** ssl support ([#1653](https://github.com/ionic-team/stencil/issues/1653)) ([e6cc6da](https://github.com/ionic-team/stencil/commit/e6cc6da))



## 🍅 [1.2.1](https://github.com/ionic-team/stencil/compare/v1.2.0...v1.2.1) (2019-07-25)


### Bug Fixes

* **transform:** fix addEsmImports ([#1764](https://github.com/ionic-team/stencil/issues/1764)) ([bf64e0f](https://github.com/ionic-team/stencil/commit/bf64e0f)), closes [#1761](https://github.com/ionic-team/stencil/issues/1761)
* **vdom:** support multiple spaces and line breaks in class ([#1762](https://github.com/ionic-team/stencil/issues/1762)) ([fb85af1](https://github.com/ionic-team/stencil/commit/fb85af1)), closes [#1757](https://github.com/ionic-team/stencil/issues/1757)
* webpackIncludes matches legacy files ([#1763](https://github.com/ionic-team/stencil/issues/1763)) ([467a966](https://github.com/ionic-team/stencil/commit/467a966))



# 🚙 [1.2.0](https://github.com/ionic-team/stencil/compare/v1.1.9...v1.2.0) (2019-07-24)


### Bug Fixes

* **bundler:** properly bundle all used components ([eda46f6](https://github.com/ionic-team/stencil/commit/eda46f6))
* **hydrate:** patch document.baseURI for domino dom implementation ([31ee8ad](https://github.com/ionic-team/stencil/commit/31ee8ad))
* **runtime:** simplify classlist.add/remove for IE11 ([#1760](https://github.com/ionic-team/stencil/issues/1760)) ([f51cb8f](https://github.com/ionic-team/stencil/commit/f51cb8f)), closes [#1757](https://github.com/ionic-team/stencil/issues/1757)
* **vdom:** foreignObject rendering ([08bf9e3](https://github.com/ionic-team/stencil/commit/08bf9e3)), closes [#1733](https://github.com/ionic-team/stencil/issues/1733)
* **vdom:** skip empty classes ([7004a59](https://github.com/ionic-team/stencil/commit/7004a59))


### Features

* **build:** add excludeUnusedDependencies ([368b72f](https://github.com/ionic-team/stencil/commit/368b72f))
* **compile:** browser compile ([33b11a4](https://github.com/ionic-team/stencil/commit/33b11a4))


### Performance Improvements

* **build:** speed up www dev build ([88d37a1](https://github.com/ionic-team/stencil/commit/88d37a1))



## 🐕 [1.1.9](https://github.com/ionic-team/stencil/compare/v1.1.8...v1.1.9) (2019-07-22)


### Bug Fixes

* **vdom:** classes with consecutive spaces ([f25b9eb](https://github.com/ionic-team/stencil/commit/f25b9eb))



## 📍 [1.1.8](https://github.com/ionic-team/stencil/compare/v1.1.6...v1.1.8) (2019-07-22)


### Bug Fixes

* render jsdocs tags in component.d.ts ([3f90962](https://github.com/ionic-team/stencil/commit/3f90962))
* **mock-doc:** fully svg compliant ([#1739](https://github.com/ionic-team/stencil/issues/1739)) ([ff46cbc](https://github.com/ionic-team/stencil/commit/ff46cbc))
* **vdom:** check dom value before assign ([#1736](https://github.com/ionic-team/stencil/issues/1736)) ([5f2fc80](https://github.com/ionic-team/stencil/commit/5f2fc80)), closes [ionic-team/ionic#18768](https://github.com/ionic-team/ionic/issues/18768) [ionic-team/ionic#18757](https://github.com/ionic-team/ionic/issues/18757)
* **vdom:** use classList instead of className ([#1737](https://github.com/ionic-team/stencil/issues/1737)) ([667e668](https://github.com/ionic-team/stencil/commit/667e668))
* move promise polyfill ([#1720](https://github.com/ionic-team/stencil/issues/1720)) ([2e05e0d](https://github.com/ionic-team/stencil/commit/2e05e0d))
* **angular:** property assignment happens after append ([#1732](https://github.com/ionic-team/stencil/issues/1732)) ([4a3982d](https://github.com/ionic-team/stencil/commit/4a3982d))
* **copy:** emit copy www in appDir ([d61e6a8](https://github.com/ionic-team/stencil/commit/d61e6a8))


### Features

* **loader:** add CDN fallback loader ([#1746](https://github.com/ionic-team/stencil/issues/1746)) ([ad33c31](https://github.com/ionic-team/stencil/commit/ad33c31))
* **mock-doc:** add canvas ([#1716](https://github.com/ionic-team/stencil/issues/1716)) ([0459e22](https://github.com/ionic-team/stencil/commit/0459e22))
* expose CopyTask.keepDirStructure API ([4b8d71d](https://github.com/ionic-team/stencil/commit/4b8d71d))



## 👒 [1.1.7](https://github.com/ionic-team/stencil/compare/v1.1.6...v1.1.7) (2019-07-16)


### Bug Fixes

* **angular:** property assignment happens after append ([#1732](https://github.com/ionic-team/stencil/issues/1732)) ([4a3982d](https://github.com/ionic-team/stencil/commit/4a3982d))
* **copy:** emit copy www in appDir ([d61e6a8](https://github.com/ionic-team/stencil/commit/d61e6a8))


### Features

* **mock-doc:** add canvas ([#1716](https://github.com/ionic-team/stencil/issues/1716)) ([0459e22](https://github.com/ionic-team/stencil/commit/0459e22))
* expose CopyTask.keepDirStructure API ([4b8d71d](https://github.com/ionic-team/stencil/commit/4b8d71d))



## 🍪 [1.1.6](https://github.com/ionic-team/stencil/compare/v1.1.5...v1.1.6) (2019-07-09)


### Bug Fixes

* **polyfill:** ensure window context w/ fetch polyfill ([37c78f3](https://github.com/ionic-team/stencil/commit/37c78f3))


### Features

* **compiler:** warn about event name conflicts ([015ea32](https://github.com/ionic-team/stencil/commit/015ea32))
* **logger:** expose logger config for custom logging ([709454f](https://github.com/ionic-team/stencil/commit/709454f))



## 🍸 [1.1.5](https://github.com/ionic-team/stencil/compare/v1.1.4...v1.1.5) (2019-07-05)


### Bug Fixes

* **ie11:** strict mode bug ([bf27172](https://github.com/ionic-team/stencil/commit/bf27172)), closes [#1712](https://github.com/ionic-team/stencil/issues/1712)
* **runtime:** watch is enabled before connectedCallback ([45e99f6](https://github.com/ionic-team/stencil/commit/45e99f6))


### Performance Improvements

* expose api to bypass zone ([d5ccef5](https://github.com/ionic-team/stencil/commit/d5ccef5))
* **angular:** skip zone on method and prop set ([d1bde58](https://github.com/ionic-team/stencil/commit/d1bde58))
* **runtime:** optimize dom write scheduling ([8897c6f](https://github.com/ionic-team/stencil/commit/8897c6f))



## 🍗 [1.1.4](https://github.com/ionic-team/stencil/compare/v1.1.3...v1.1.4) (2019-07-03)


### Bug Fixes

* **copy:** if dest is specified copy task is not relative ([4292f74](https://github.com/ionic-team/stencil/commit/4292f74)), closes [#1697](https://github.com/ionic-team/stencil/issues/1697)
* **hydrate:** improve hydrate app builds ([3267f66](https://github.com/ionic-team/stencil/commit/3267f66))
* **runtime:** dispatch queue events before willLoad ([2d1a0aa](https://github.com/ionic-team/stencil/commit/2d1a0aa))
* **jsx:** add slot attribute to DOMAttributes ([3b2de4e](https://github.com/ionic-team/stencil/commit/3b2de4e)), closes [#1690](https://github.com/ionic-team/stencil/issues/1690)
* **mock-doc:** createElementNS follows spec better ([9f83b54](https://github.com/ionic-team/stencil/commit/9f83b54))
* **mock-doc:** use document.baseURI has base URL ([b05ae9c](https://github.com/ionic-team/stencil/commit/b05ae9c))
* **testing:** goto options are optional ([da73dda](https://github.com/ionic-team/stencil/commit/da73dda)), closes [#1689](https://github.com/ionic-team/stencil/issues/1689)


### Features

* **mock-doc:** add NodeList ([#1614](https://github.com/ionic-team/stencil/issues/1614)) ([ee3fdf9](https://github.com/ionic-team/stencil/commit/ee3fdf9))
* **testing:** add MockSVGElement ([#1694](https://github.com/ionic-team/stencil/issues/1694)) ([17d90c9](https://github.com/ionic-team/stencil/commit/17d90c9))



## 🎀 [1.1.3](https://github.com/ionic-team/stencil/compare/v1.1.2...v1.1.3) (2019-06-28)


### Bug Fixes

* **copy:** copy files on watch ([3ea354a](https://github.com/ionic-team/stencil/commit/3ea354a))
* **copy:** glob copy ([f39b376](https://github.com/ionic-team/stencil/commit/f39b376))
* **ie11:** remove unnecessary polyfills ([fb6606d](https://github.com/ionic-team/stencil/commit/fb6606d)), closes [#1668](https://github.com/ionic-team/stencil/issues/1668)
* **runtime:** prevent call Watch before willLoad ([91fb61d](https://github.com/ionic-team/stencil/commit/91fb61d))
* **runtime:** prevent forceUpdate before first render ([67b4ae8](https://github.com/ionic-team/stencil/commit/67b4ae8))
* **vdom:** relocation bug ([e953e22](https://github.com/ionic-team/stencil/commit/e953e22))
* back-compatibility with old stencil runtime ([10a5704](https://github.com/ionic-team/stencil/commit/10a5704))
* core-js only targeting ie11 ([07a5296](https://github.com/ionic-team/stencil/commit/07a5296))
* update ComponentInterface definition ([e5bae1b](https://github.com/ionic-team/stencil/commit/e5bae1b))


### Features

* generate empty entry point for loader ([144e966](https://github.com/ionic-team/stencil/commit/144e966))


### Performance Improvements

* only inline <1KB entry-point ([a2a8033](https://github.com/ionic-team/stencil/commit/a2a8033))
* use JSON.parse() when metadata is > 10KB ([ab0e9d6](https://github.com/ionic-team/stencil/commit/ab0e9d6))



## 🐏 [1.1.2](https://github.com/ionic-team/stencil/compare/v1.1.1...v1.1.2) (2019-06-25)


### Bug Fixes

* **testing:** ev is not defined ([c6bd82d](https://github.com/ionic-team/stencil/commit/c6bd82d))
* normalize default mode ([b15c6a5](https://github.com/ionic-team/stencil/commit/b15c6a5))
* **e2e:** consistent font rendering ([3b2cc94](https://github.com/ionic-team/stencil/commit/3b2cc94))
* **prerendering:** filter download links ([2f664f0](https://github.com/ionic-team/stencil/commit/2f664f0))
* **testing:** close browser context and better error reporting ([0a2fcf3](https://github.com/ionic-team/stencil/commit/0a2fcf3))
* **testing:** disable concurrency ([e12993b](https://github.com/ionic-team/stencil/commit/e12993b))


### Performance Improvements

* don't cap max workers ([82d8094](https://github.com/ionic-team/stencil/commit/82d8094))
* generate modulepreload for mode ([29d87c2](https://github.com/ionic-team/stencil/commit/29d87c2))



## 🚨 [1.1.1](https://github.com/ionic-team/stencil/compare/v1.1.0...v1.1.1) (2019-06-25)


### Bug Fixes

* **testing:** better error reporting ([8acf74e](https://github.com/ionic-team/stencil/commit/8acf74e))
* **testing:** respect user config ([70e711f](https://github.com/ionic-team/stencil/commit/70e711f))
* **testing:** Skip puppeteer install ([01f0a93](https://github.com/ionic-team/stencil/commit/01f0a93)), closes [#1529](https://github.com/ionic-team/stencil/issues/1529)



# 🍻 [1.1.0](https://github.com/ionic-team/stencil/compare/v1.0.7...v1.1.0) (2019-06-24)


### Bug Fixes

* **ie:** cascadian css in :roor and html ([28e99c3](https://github.com/ionic-team/stencil/commit/28e99c3))
* **ie:** global css variables ([56c5f68](https://github.com/ionic-team/stencil/commit/56c5f68))
* fix timeout for screenshot ([71ebdac](https://github.com/ionic-team/stencil/commit/71ebdac))
* **testing:** remove request listener after first load ([f569ac8](https://github.com/ionic-team/stencil/commit/f569ac8)), closes [#1567](https://github.com/ionic-team/stencil/issues/1567)
* disable hmr in testing mode ([8f33df8](https://github.com/ionic-team/stencil/commit/8f33df8))
* **compiler:** warning regex for .ts(x) imports ([#1583](https://github.com/ionic-team/stencil/issues/1583)) ([4f976dd](https://github.com/ionic-team/stencil/commit/4f976dd))
* **testing:** SpecPage is not exported ([#1657](https://github.com/ionic-team/stencil/issues/1657)) ([dd88c56](https://github.com/ionic-team/stencil/commit/dd88c56))
* fix small typo (necesary -> necessary) ([#1663](https://github.com/ionic-team/stencil/issues/1663)) ([75d89ec](https://github.com/ionic-team/stencil/commit/75d89ec))
* **tests:** let tests run unless build triggers error ([#1678](https://github.com/ionic-team/stencil/issues/1678)) ([ee28980](https://github.com/ionic-team/stencil/commit/ee28980))
* add runtime dev error for common <Host> issues ([2ee6db0](https://github.com/ionic-team/stencil/commit/2ee6db0))
* **compiler:** generate loader when es5 is disabled ([0b4d814](https://github.com/ionic-team/stencil/commit/0b4d814))
* emit loader if es5 is disabled ([0bbda39](https://github.com/ionic-team/stencil/commit/0bbda39))


### Features

* **e2e:** devtools flag and page.debugger() ([0b8fe24](https://github.com/ionic-team/stencil/commit/0b8fe24))
* **testing:** expose waitFor option ([62839d8](https://github.com/ionic-team/stencil/commit/62839d8))


### Performance Improvements

* **testing:** only wait for network0 during screenshot ([1d8ece5](https://github.com/ionic-team/stencil/commit/1d8ece5))
* **testing:** reduce memory usage by closing pages after each test ([66ad23d](https://github.com/ionic-team/stencil/commit/66ad23d))
* property read does not have side effects ([ac312b3](https://github.com/ionic-team/stencil/commit/ac312b3))


### Reverts

* **test:** timeoutBeforeScreenshot values ([a5f40c3](https://github.com/ionic-team/stencil/commit/a5f40c3))



## 🍵 [1.0.7](https://github.com/ionic-team/stencil/compare/v1.0.6...v1.0.7) (2019-06-19)


### Bug Fixes

* **styles:** add styles before links ([05d242d](https://github.com/ionic-team/stencil/commit/05d242d))



## 😋 [1.0.6](https://github.com/ionic-team/stencil/compare/v1.0.5...v1.0.6) (2019-06-17)


### Bug Fixes

* **collection:** generate dist/collection in dev mode ([3082c02](https://github.com/ionic-team/stencil/commit/3082c02))
* **runtime:** disable constructable stylesheets in document ([adedb82](https://github.com/ionic-team/stencil/commit/adedb82))



## 🐔 [1.0.5](https://github.com/ionic-team/stencil/compare/v1.0.4...v1.0.5) (2019-06-17)


### Bug Fixes

* install dev deps ([16588cb](https://github.com/ionic-team/stencil/commit/16588cb))
* **hydrate:** fix light-dom nodes relocated within shadow ([95cbc3b](https://github.com/ionic-team/stencil/commit/95cbc3b))
* **mock-doc:** case sensible attributes in element ([#1642](https://github.com/ionic-team/stencil/issues/1642)) ([e0c2ba5](https://github.com/ionic-team/stencil/commit/e0c2ba5))
* **sys:** update sys.browser ([51efaa5](https://github.com/ionic-team/stencil/commit/51efaa5))
* **testing:** fix e2e tests when without www output ([13f0c2f](https://github.com/ionic-team/stencil/commit/13f0c2f))
* **transform:** fix crash will undefined node ([8f2d82c](https://github.com/ionic-team/stencil/commit/8f2d82c))
* **validate:** don't validate in watch mode ([46f78ab](https://github.com/ionic-team/stencil/commit/46f78ab)), closes [#1647](https://github.com/ionic-team/stencil/issues/1647)
* empty.js resolver is not longer needed ([97c0ed0](https://github.com/ionic-team/stencil/commit/97c0ed0))
* **sys:** update sys.browser ([e835203](https://github.com/ionic-team/stencil/commit/e835203))
* **testing:** run e2e tests ([89102e3](https://github.com/ionic-team/stencil/commit/89102e3))
* add all public members from HTMLElement ([#1639](https://github.com/ionic-team/stencil/issues/1639)) ([d43f210](https://github.com/ionic-team/stencil/commit/d43f210))
* allow inputMode ([5c737d6](https://github.com/ionic-team/stencil/commit/5c737d6))
* update screenshot app ([4557148](https://github.com/ionic-team/stencil/commit/4557148))



## 🐯 [1.0.4](https://github.com/ionic-team/stencil/compare/v1.0.3...v1.0.4) (2019-06-14)


### Bug Fixes

* **bundler:** treat core as a normal chunk ([2453ba8](https://github.com/ionic-team/stencil/commit/2453ba8))
* ensure only components are exported ([0712e88](https://github.com/ionic-team/stencil/commit/0712e88))
* only emit index-org on prerendering ([5f75c03](https://github.com/ionic-team/stencil/commit/5f75c03))
* **mock-doc:** use correct element base class within cloneNode() ([0578dda](https://github.com/ionic-team/stencil/commit/0578dda))


### Features

* **sys:** init sys.browser for browser based compiler ([d058b44](https://github.com/ionic-team/stencil/commit/d058b44))



## 🍭 [1.0.3](https://github.com/ionic-team/stencil/compare/v1.0.2...v1.0.3) (2019-06-12)

If you are using any of the following plugins:

- `@stencil/sass`
- `@stencil/less`
- `@stencil/stylus`
- `@stencil/postcss`

Please, make sure you are using the latest version (1.0.x) of those plugins.


### Bug Fixes

* **bundle:** fix tree-shaking regression ([f9fe153](https://github.com/ionic-team/stencil/commit/f9fe153))
* **bundle:** only exclude system ([0581dec](https://github.com/ionic-team/stencil/commit/0581dec))
* **bundle:** plugin helper ([0db4650](https://github.com/ionic-team/stencil/commit/0db4650))
* **compiler:** always emit hashed filenames in prod ([282dd66](https://github.com/ionic-team/stencil/commit/282dd66))
* **config:** filter rollup plugins ([0163e58](https://github.com/ionic-team/stencil/commit/0163e58))
* **mock-doc:** title.text ([c92bf41](https://github.com/ionic-team/stencil/commit/c92bf41))
* **prerendering:** apply low priority css ([cd87b30](https://github.com/ionic-team/stencil/commit/cd87b30))
* **testing:** get page.root when using setContent() ([8544d1e](https://github.com/ionic-team/stencil/commit/8544d1e))


### Performance Improvements

* **build:** skip lazy build when html change ([c8a0ab6](https://github.com/ionic-team/stencil/commit/c8a0ab6))



## 🍯 [1.0.2](https://github.com/ionic-team/stencil/compare/v1.0.1...v1.0.2) (2019-06-08)


### Bug Fixes

* internal type ([1a6f696](https://github.com/ionic-team/stencil/commit/1a6f696))
* **compiler:** document CSS variables in the MD file even if 'docs-json' is not set ([#1599](https://github.com/ionic-team/stencil/issues/1599)) ([413dcf7](https://github.com/ionic-team/stencil/commit/413dcf7))
* **declarations:** avoid exposing typescript ([889943f](https://github.com/ionic-team/stencil/commit/889943f))
* **plugins:** filter rollup plugins ([071afa7](https://github.com/ionic-team/stencil/commit/071afa7))
* **svg:** add support for ref JSX ([e2f76ef](https://github.com/ionic-team/stencil/commit/e2f76ef)), closes [#1601](https://github.com/ionic-team/stencil/issues/1601)
* **test:** support for window.JSON ([c75e4d5](https://github.com/ionic-team/stencil/commit/c75e4d5))
* avoid const / let ([06986ab](https://github.com/ionic-team/stencil/commit/06986ab))
* export PluginTransformResults in internal ([140b164](https://github.com/ionic-team/stencil/commit/140b164))
* fixing unsafe usage of target="_blank" ([#1604](https://github.com/ionic-team/stencil/issues/1604)) ([9dbb88f](https://github.com/ionic-team/stencil/commit/9dbb88f))
* **sw:** do not provide navigateFallback by default ([e84cb11](https://github.com/ionic-team/stencil/commit/e84cb11))


### Features

* **mock-doc:** add Element ([#1602](https://github.com/ionic-team/stencil/issues/1602)) ([1eeb780](https://github.com/ionic-team/stencil/commit/1eeb780))



## ⛑ [1.0.1](https://github.com/ionic-team/stencil/compare/v1.0.0-beta.8...v1.0.1) (2019-06-06)


### Bug Fixes

* **build:** suppress worker EPIPE errors ([37e50e3](https://github.com/ionic-team/stencil/commit/37e50e3))
* **bundle:** handle browser: true correctly ([8b4597c](https://github.com/ionic-team/stencil/commit/8b4597c))
* **compiler:** full qualified exports ([ca60073](https://github.com/ionic-team/stencil/commit/ca60073)), closes [#1352](https://github.com/ionic-team/stencil/issues/1352)
* **dev-server:** avoid Promise in dev server client ([729cdf2](https://github.com/ionic-team/stencil/commit/729cdf2))
* **tests:** reset defaults ([de5f3d1](https://github.com/ionic-team/stencil/commit/de5f3d1))
* don't mock fetch() if provided ([09aa4ab](https://github.com/ionic-team/stencil/commit/09aa4ab))
* **e2e:** wait for idle network ([#1579](https://github.com/ionic-team/stencil/issues/1579)) ([f9a323f](https://github.com/ionic-team/stencil/commit/f9a323f))


### Features

* **test:** add mock for Node.contains() ([560d322](https://github.com/ionic-team/stencil/commit/560d322))
* add pluginHelper() ([b375e65](https://github.com/ionic-team/stencil/commit/b375e65))
* **config:** skip collectionsDir ([048118b](https://github.com/ionic-team/stencil/commit/048118b))
* **dev-server:** clickable line numbers open in editor ([ac13652](https://github.com/ionic-team/stencil/commit/ac13652))
* **dev-server:** minify dev server client ([5ed19ec](https://github.com/ionic-team/stencil/commit/5ed19ec))
* **mock-doc:** add KeyboardEvent ([#1581](https://github.com/ionic-team/stencil/issues/1581)) ([44393a9](https://github.com/ionic-team/stencil/commit/44393a9))


### Performance Improvements

* **prerendering:** use media query to prevent blocking ([a1c760a](https://github.com/ionic-team/stencil/commit/a1c760a))



# ☎️ [1.0.0](https://github.com/ionic-team/stencil/compare/v1.0.0-beta.8...v1.0.0) (2019-06-01)

Check out the [blog post](https://blog.ionicframework.com/announcing-stencil-one-beta/) to know everything coming in Stencil One!
Also, it might be interesting to take a quick look at the [breaking change files](https://github.com/ionic-team/stencil/blob/master/BREAKING_CHANGES.md), to know what changes you might need to apply to you components.

### Bug Fixes

* **build:** suppress worker EPIPE errors ([37e50e3](https://github.com/ionic-team/stencil/commit/37e50e3))
* **dev-server:** avoid Promise in dev server client ([729cdf2](https://github.com/ionic-team/stencil/commit/729cdf2))
* **e2e:** wait for idle network ([#1579](https://github.com/ionic-team/stencil/issues/1579)) ([f9a323f](https://github.com/ionic-team/stencil/commit/f9a323f))


### Features

* **config:** skip collectionsDir ([048118b](https://github.com/ionic-team/stencil/commit/048118b))
* **dev-server:** clickable line numbers open in editor ([ac13652](https://github.com/ionic-team/stencil/commit/ac13652))
* **dev-server:** minify dev server client ([5ed19ec](https://github.com/ionic-team/stencil/commit/5ed19ec))
* **mock-doc:** add KeyboardEvent ([#1581](https://github.com/ionic-team/stencil/issues/1581)) ([44393a9](https://github.com/ionic-team/stencil/commit/44393a9))



# 🌻 [1.0.0-beta.8](https://github.com/ionic-team/stencil/compare/v1.0.0-beta.7...v1.0.0-beta.8) (2019-05-29)


### Bug Fixes

* **bundler:** commonjs before user's plugins ([3adfaad](https://github.com/ionic-team/stencil/commit/3adfaad))
* **ie:** avoid top level Promise ([913b8fc](https://github.com/ionic-team/stencil/commit/913b8fc))
* **ie:** baseURI is not available ([ab8e304](https://github.com/ionic-team/stencil/commit/ab8e304))
* **ie:** fix async test ([e0ed00c](https://github.com/ionic-team/stencil/commit/e0ed00c))
* **ie:** heavy optimizations break IE11 ([103a9ba](https://github.com/ionic-team/stencil/commit/103a9ba))
* **ie:** polyfill Element.classList ([d7f6646](https://github.com/ionic-team/stencil/commit/d7f6646))
* **ie:** use core-js polyfills ([5afaa7e](https://github.com/ionic-team/stencil/commit/5afaa7e))
* **karma:** longer timeout for IE11 :( ([ae6a21c](https://github.com/ionic-team/stencil/commit/ae6a21c))
* **karma:** reduce logging ([f878282](https://github.com/ionic-team/stencil/commit/f878282))
* **legacy:** use in to check for classList ([bc5bbdb](https://github.com/ionic-team/stencil/commit/bc5bbdb))
* **runtime:** grab location from window ([26fd3cf](https://github.com/ionic-team/stencil/commit/26fd3cf))
* **tests:** increase timeout ([d8bec5a](https://github.com/ionic-team/stencil/commit/d8bec5a))
* **types:** remove ElementTagNameMap ([a5b199d](https://github.com/ionic-team/stencil/commit/a5b199d))
* add polyfill for composedPath() ([381ded9](https://github.com/ionic-team/stencil/commit/381ded9))



# ⛺️ [1.0.0-beta.7](https://github.com/ionic-team/stencil/compare/v1.0.0-beta.6...v1.0.0-beta.7) (2019-05-29)


### Bug Fixes

* **vdom:** don't render booleans ([8106936](https://github.com/ionic-team/stencil/commit/8106936))



# 👻 [1.0.0-beta.6](https://github.com/ionic-team/stencil/compare/v1.0.0-beta.4...v1.0.0-beta.6) (2019-05-29)


### Bug Fixes

* **angular:** ChangeDetectionStrategy.OnPush to generated angular bindings ([#1575](https://github.com/ionic-team/stencil/issues/1575)) ([0830959](https://github.com/ionic-team/stencil/commit/0830959))
* **build:** fix validate package json for prod builds ([f27dd6b](https://github.com/ionic-team/stencil/commit/f27dd6b))
* **build:** vdom/svg build conditionals also from imported modules ([f0a9dfc](https://github.com/ionic-team/stencil/commit/f0a9dfc))
* **bundle:** prioritize user plugins ([#1564](https://github.com/ionic-team/stencil/issues/1564)) ([69980f1](https://github.com/ionic-team/stencil/commit/69980f1))
* **compiler:** conflict between namespace and components ([d58bea6](https://github.com/ionic-team/stencil/commit/d58bea6))
* **compiler:** fix static analysis of dependencies ([c22a0a4](https://github.com/ionic-team/stencil/commit/c22a0a4))
* **html:** avoid duplicated modulepreload ([d68a478](https://github.com/ionic-team/stencil/commit/d68a478))
* skip initHtml when not serving ([ecafff2](https://github.com/ionic-team/stencil/commit/ecafff2))
* **system:** use same scheme ([345fcc7](https://github.com/ionic-team/stencil/commit/345fcc7))
* **types:** avoid in-memory fs for file existance check ([208c393](https://github.com/ionic-team/stencil/commit/208c393))
* **types:** normalize stencil.core import path ([30204ee](https://github.com/ionic-team/stencil/commit/30204ee))
* **types:** ref returns the correct interface ([f32598b](https://github.com/ionic-team/stencil/commit/f32598b))
* generate legacy loader for CDN ([9dde96a](https://github.com/ionic-team/stencil/commit/9dde96a))


### Features

* load images with imports ([#1565](https://github.com/ionic-team/stencil/issues/1565)) ([ee28dc0](https://github.com/ionic-team/stencil/commit/ee28dc0))
* **build:** add manifest.json validation ([570d741](https://github.com/ionic-team/stencil/commit/570d741))
* **compiler:** warn about typescript imports ([#1576](https://github.com/ionic-team/stencil/issues/1576)) ([d9881f6](https://github.com/ionic-team/stencil/commit/d9881f6))
* **jest:** add snapshot serializer ([#1570](https://github.com/ionic-team/stencil/issues/1570)) ([4e2eba0](https://github.com/ionic-team/stencil/commit/4e2eba0))


### Performance Improvements

* improve runtime for native build ([#1549](https://github.com/ionic-team/stencil/issues/1549)) ([8c5ae51](https://github.com/ionic-team/stencil/commit/8c5ae51))



# 🍷 [1.0.0-beta.5](https://github.com/ionic-team/stencil/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2019-05-22)


### Bug Fixes

* **system:** use same scheme ([345fcc7](https://github.com/ionic-team/stencil/commit/345fcc7))
* generate legacy loader for CDN ([9dde96a](https://github.com/ionic-team/stencil/commit/9dde96a))



# 🎡 [1.0.0-beta.4](https://github.com/ionic-team/stencil/compare/v1.0.0-beta.2...v1.0.0-beta.4) (2019-05-22)


### Bug Fixes

* **build:** skip initIndexHtml if there is not devServer ([4841b6e](https://github.com/ionic-team/stencil/commit/4841b6e))
* **config:** revert esmLoaderPath change ([#1561](https://github.com/ionic-team/stencil/issues/1561)) ([99add67](https://github.com/ionic-team/stencil/commit/99add67))
* **dev-server:** fix reloading styles after external script changes ([6003871](https://github.com/ionic-team/stencil/commit/6003871))
* **dev-server:** fix updating inline styles hmr ([896022d](https://github.com/ionic-team/stencil/commit/896022d))
* **hmr:** call all callbacks in build event subscribers ([#1552](https://github.com/ionic-team/stencil/issues/1552)) ([d5cfea5](https://github.com/ionic-team/stencil/commit/d5cfea5))
* **hydrate:** fix hydrating style elements ([0007acb](https://github.com/ionic-team/stencil/commit/0007acb))
* **hydrate:** pass nodeResolve and commonjs config ([#1556](https://github.com/ionic-team/stencil/issues/1556)) ([ddc200e](https://github.com/ionic-team/stencil/commit/ddc200e)), closes [#1554](https://github.com/ionic-team/stencil/issues/1554)
* **lifecycle:** tag styles were not being generated for components without styles ([#1553](https://github.com/ionic-team/stencil/issues/1553)) ([279e33b](https://github.com/ionic-team/stencil/commit/279e33b))
* **loader:** load from external domain ([3a9e643](https://github.com/ionic-team/stencil/commit/3a9e643))
* **runtime:** fix getAssetPath() for external domain ([102d09b](https://github.com/ionic-team/stencil/commit/102d09b))
* **test:** esmLoader tests ([9fe054c](https://github.com/ionic-team/stencil/commit/9fe054c))
* **types:** move LocalJSX to declarations/jsx.ts ([39cc99b](https://github.com/ionic-team/stencil/commit/39cc99b))


### Features

* **dev-server:** HMR progress bar ([314b841](https://github.com/ionic-team/stencil/commit/314b841))
* **dev-server:** improve dev-server status/progress ([4960fbe](https://github.com/ionic-team/stencil/commit/4960fbe))



# 😃 [1.0.0-beta.3](https://github.com/ionic-team/stencil/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2019-05-21)


### Bug Fixes

* **build:** skip initIndexHtml if there is not devServer ([4841b6e](https://github.com/ionic-team/stencil/commit/4841b6e))
* **dev-server:** fix updating inline styles hmr ([896022d](https://github.com/ionic-team/stencil/commit/896022d))
* **hmr:** call all callbacks in build event subscribers ([#1552](https://github.com/ionic-team/stencil/issues/1552)) ([d5cfea5](https://github.com/ionic-team/stencil/commit/d5cfea5))
* **hydrate:** fix hydrating style elements ([0007acb](https://github.com/ionic-team/stencil/commit/0007acb))
* **hydrate:** pass nodeResolve and commonjs config ([#1556](https://github.com/ionic-team/stencil/issues/1556)) ([ddc200e](https://github.com/ionic-team/stencil/commit/ddc200e)), closes [#1554](https://github.com/ionic-team/stencil/issues/1554)
* **lifecycle:** tag styles were not being generated for components without styles ([#1553](https://github.com/ionic-team/stencil/issues/1553)) ([279e33b](https://github.com/ionic-team/stencil/commit/279e33b))
* **loader:** load from external domain ([3a9e643](https://github.com/ionic-team/stencil/commit/3a9e643))
* **test:** esmLoader tests ([9fe054c](https://github.com/ionic-team/stencil/commit/9fe054c))
* **types:** move LocalJSX to declarations/jsx.ts ([39cc99b](https://github.com/ionic-team/stencil/commit/39cc99b))


### Features

* **dev-server:** HMR progress bar ([314b841](https://github.com/ionic-team/stencil/commit/314b841))
* **dev-server:** improve dev-server status/progress ([4960fbe](https://github.com/ionic-team/stencil/commit/4960fbe))



# 🐉 [1.0.0-beta.2](https://github.com/ionic-team/stencil/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2019-05-20)

Check out the [blog post](https://blog.ionicframework.com/announcing-stencil-one-beta/) to know everything coming in Stencil One!
Also, it might be interesting to take a quick look at the [breaking change files](https://github.com/ionic-team/stencil/blob/master/BREAKING_CHANGES.md), to know what changes you might need to apply to you components.


### Bug Fixes

* **bundle:** use data-namespace to match the correct collection ([c01c049](https://github.com/ionic-team/stencil/commit/c01c049))
* **copy:**  improve error msg with effective config attributes name ([b574b86](https://github.com/ionic-team/stencil/commit/b574b86))
* **dev-server:** fix handling css parse errors ([06333d7](https://github.com/ionic-team/stencil/commit/06333d7))
* **dev-server:** progress bar uses transform ([d52a39b](https://github.com/ionic-team/stencil/commit/d52a39b))
* **docs:** use buildDocs instead of devMode ([e68f56c](https://github.com/ionic-team/stencil/commit/e68f56c))
* **hydrate:** shadow-dom needs shim ([d253d9b](https://github.com/ionic-team/stencil/commit/d253d9b))
* **lifecycle:** using css-in-js with no styles causes FOUC ([#1550](https://github.com/ionic-team/stencil/issues/1550)) ([e7cf323](https://github.com/ionic-team/stencil/commit/e7cf323))
* **test:** add hydrated class to tests ([93023df](https://github.com/ionic-team/stencil/commit/93023df))
* **test:** Make jest-preset to use setupFilesAfterEnv ([#1545](https://github.com/ionic-team/stencil/issues/1545)) ([9f7041a](https://github.com/ionic-team/stencil/commit/9f7041a))
* **testing:** do not emit annotations by default ([929e563](https://github.com/ionic-team/stencil/commit/929e563))
* **types:** export JSX in stencil.core ([3decbdf](https://github.com/ionic-team/stencil/commit/3decbdf))


### Features

* expose custom-docs apis ([bd20c11](https://github.com/ionic-team/stencil/commit/bd20c11))
* **compiler:**  watch  *.html files ([#1531](https://github.com/ionic-team/stencil/issues/1531)) ([a032c0c](https://github.com/ionic-team/stencil/commit/a032c0c))
* **dev-server:** initializing proress bar ([05a8030](https://github.com/ionic-team/stencil/commit/05a8030))
* **jsx:** add close event to Dialog ([#1348](https://github.com/ionic-team/stencil/issues/1348)) ([f722975](https://github.com/ionic-team/stencil/commit/f722975))
* **test:** add supportsShadowDom ([207e837](https://github.com/ionic-team/stencil/commit/207e837))
* **test:** add toEqualLightHtml() ([e4391f2](https://github.com/ionic-team/stencil/commit/e4391f2))
* **types:** add media event-handler properties ([#1376](https://github.com/ionic-team/stencil/issues/1376)) ([5ab62b8](https://github.com/ionic-team/stencil/commit/5ab62b8))
* expose PluginCtx and PrintLine ([db5fbb5](https://github.com/ionic-team/stencil/commit/db5fbb5))



# 💛 [1.0.0-beta.1](https://github.com/ionic-team/stencil/compare/v1.0.0-alpha.35...v1.0.0-beta.1) (2019-05-17)

Check out the [blog post](https://blog.ionicframework.com/announcing-stencil-one-beta/) to know everything coming in Stencil One!
Also, it might be interesting to take a quick look at the [breaking change files](https://github.com/ionic-team/stencil/blob/master/BREAKING_CHANGES.md), to know what changes you might need to apply to you components.

### Bug Fixes

* it's not Console, but console ([d50a242](https://github.com/ionic-team/stencil/commit/d50a242))
* **context:** resolve publicPath ([#1536](https://github.com/ionic-team/stencil/issues/1536)) ([15bf6e5](https://github.com/ionic-team/stencil/commit/15bf6e5))
* **context:** return values for isPrerender and isClient ([#1537](https://github.com/ionic-team/stencil/issues/1537)) ([0eba453](https://github.com/ionic-team/stencil/commit/0eba453))
* **dev-server:** fix error logging when build aborted ([69ef3b5](https://github.com/ionic-team/stencil/commit/69ef3b5))
* **dev-server:** fix initial load w/ errors ([4b86575](https://github.com/ionic-team/stencil/commit/4b86575))
* **dev-server:** fix reloading same error on start ([a987928](https://github.com/ionic-team/stencil/commit/a987928))
* **dev-server:** fix updating favicon ([6ec2cf9](https://github.com/ionic-team/stencil/commit/6ec2cf9))
* **hydrate:** resourcesUrl is an actual URL ([3cf39fd](https://github.com/ionic-team/stencil/commit/3cf39fd))
* **minify:** drop console.log / debug in prod mode ([e676e40](https://github.com/ionic-team/stencil/commit/e676e40))
* **runtime:** old versions of stencil reset ['s-rc'] ([4a88565](https://github.com/ionic-team/stencil/commit/4a88565))
* **types:** only fix imports, not mod augmentations ([4b1bdbd](https://github.com/ionic-team/stencil/commit/4b1bdbd))


### Features

* **config:** config.rollupConfig ([6d738e0](https://github.com/ionic-team/stencil/commit/6d738e0))
* **mock-doc:** add dataset to element ([509697e](https://github.com/ionic-team/stencil/commit/509697e))


### Performance Improvements

* **www:** hash app.esm.js ([b9325de](https://github.com/ionic-team/stencil/commit/b9325de)), closes [#1522](https://github.com/ionic-team/stencil/issues/1522)

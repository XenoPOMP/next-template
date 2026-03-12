<img src="https://github.com/XenoPOMP/next-template/assets/101574433/4f668b51-381f-4f1f-8803-f0b6370fd1b5" width="160" align="left" />

### Next.js Template

<p>
<img alt="CI Status" src="https://img.shields.io/github/actions/workflow/status/XenoPOMP/next-template/ci.yml?logo=github&logoColor=%23fff&label=CI&style=flat-square" />

Next is modern React-based framework that provides major features, like SSR, Turbopack, SEO-friendly.

<br/>

## 🏛️ Use this template
```sh
yarn create next-app -e https://github.com/XenoPOMP/next-template .
```

## 🌌 Environment

- ⛓️‍💥 `Node.js` ^20 || >=22 _(installed [via nvm](https://github.com/nvm-sh/nvm))_
- 😼 `Yarn` v1 _as a package manager_

## ⭐️ Features

- 🐳 Docker support
- 🖼️ SEO optimization + Open Graph images
- 📱 PWA support with [`@serwist/next`](https://serwist.pages.dev/docs/next)
- 🧪 Unit testing with Vitest and E2E with Cypress
- 🌓 Multiple themes support with [`next-themes`](https://github.com/pacocoursey/next-themes) integrated with TailwindCSS
- 📚 Storybook for visual testing
- 🐻 Zustand as state manager
- 🐶 Husky hooks
- 🌿 `.github` folder with ready-to-use **actions** and **dependabot**

## 🌐 Internationalization

This projects uses Paraglide.js for managing locales. All locale files can be located in ``./messages``.

You can explore tools for managing locales [here](https://inlang.com/c/tools).

I personally use [i18n-editor](https://github.com/PlusA2M/i18n-editor), the native macOS app.

For using with SSG, you need to do [some extra additions](https://inlang.com/m/gerre34r/library-inlang-paraglideJs/next-js#next-js-ssg-example).
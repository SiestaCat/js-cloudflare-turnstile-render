# js-cloudflare-turnstile-render <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Get the byte length of an ArrayBuffer, even in engines without a `.byteLength` method.

## Example

```js
const CloudflareTurnstile = require('js-cloudflare-turnstile-render');

const turnstile = new CloudflareTurnstile('SITEKEY, '#cloudflare-turnstile-show', (token) => {console.log(token)}).load();
```

## Tests
Simply clone the repo, `npm install`

[package-url]: https://npmjs.org/package/js-cloudflare-turnstile-render
[npm-version-svg]: https://versionbadg.es/SiestaCat/js-cloudflare-turnstile-render.svg
[npm-badge-png]: https://nodei.co/npm/js-cloudflare-turnstile-render.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/js-cloudflare-turnstile-render.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/js-cloudflare-turnstile-render.svg
[downloads-url]: https://npm-stat.com/charts.html?package=js-cloudflare-turnstile-render
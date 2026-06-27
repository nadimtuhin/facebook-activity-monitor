# Facebook Activity Monitor

A Chrome extension boilerplate with webpack, Babel, React, and hot reload.

## Installation

```bash
npm install
```

## Development

1. Run `npm start` (or `npm run dev`) to start webpack-dev-server.
2. Open `chrome://extensions/` in Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked extension** and select `REPOSITORY_DIRECTORY/build`.
5. Inspect the background page via the link shown in the extension card.
6. Navigate to any page and open DevTools to see content script messages.
7. Click the extension icon to open the popup, or right-click and select **Inspect Popup**.

Edit files in `src/` — the build supports hot/full reload.

## Build

```bash
npm run build
```

Compiles scripts, styles, and assets into `release/build/`, and packages the extension as `release/build.crx` with certificate `release/build.pem`.

## Troubleshooting

**Scripts from webpack aren't loading** — likely a dev SSL certificate issue. Open a bundled script directly (e.g. `https://localhost:3001/background/index.js`) in a new tab, accept the certificate, then reload the extension.

## License

[MIT](http://www.opensource.org/licenses/MIT)

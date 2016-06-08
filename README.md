# Facebook Activity Monitor

## Installation

1. `npm install`
2. Thats all :)

## Usage

- Whole repository (package) is simple example extension.
- Check `src/manifest.json` for basic usage of background script, content script, action popup and chrome url overrides.
- All scripts and/or html pages from manifest.json are piped through preprocessor and prepared for using all features.
- When your extension does exactly what you want, you can run `gulp -p` for creating production `.crx` build.
- All your codebase belongs only to `src/` directory
- In your scripts you can use **npm packages, babel, react (jsx), styles (with preprocessors) and any modern javascript feature** you know.

## How to run development environment

You should do this before editing any code to see how it works.

1. run `npm start` (or `npm run dev`) which will start webpack-dev-server
2. in Chrome open `chrome://extensions/`
3. check `Developer mode`
4. click on `Load unpacked extension`
5. add REPOSITORY_DIRECTORY/build
6. Now you can check background script via link in extension `Inspect views: background page` and you will see some messages in console
7. Navigate to any http or **https** page and open development tools and console. You can see messages from content scripts.
8. Find extension icon (puzzle image) right from adress bar.
  1. Click with left mouse button to show html content
  2. Click with right mouse button and select `Inspect Popup`. Then in console you can see some messages
9. You can edit your codebase with almost 100% hot/full reload support.

## How to build extension

1. run `npm run build`
2. It will compile scripts, styles and other assets into release/build/
3. It will make chrome extension into release/build.crx with certificate release/build.pem

## Troubleshoting

1. Everything looks fine, but scripts from webpack arent loading.
  - Probably problem with development ssl certificates. Open any script (i.e. https://localhost:3001/background/index.js) in separate tab and allow chrome to load it anyway. Then reload extension.

## Licence

Facebook Activity Monitor Chrome Extension is released under the [MIT License](http://www.opensource.org/licenses/MIT).

# Extension

Warning: This is not very well written or setup as it was just thrown together as a POC

## Getting started

1. Install node >=20, might work with 18 but haven't tested that

2. Install npm

3. Open terminal and navigate to the directory where you want to store the repository. Once this is done you can then clone the Git repository there.

4. Run `npm i` to install all the needed dependencies

## Developing

Open the project using VSCode or similar editor. Then in the terminal the following commands can be run:

`npm run dev` will allow for development with hot-reloading

`npm run build` will build a production build of the project

Both of these will output files in `./dist` which is what Chrome will use for the code for the extension.

The main entry point to the React app can be found at: `./src/App.tsx` so that might be a good point to start with.

## Adding to Chrome

1. Open Google Chrome and navigate to `chrome://extensions/`

2. In the Extensions page, make sure that the Developer mode is turned on by toggling the switch in the top right corner

3. Click on the "Load unpacked" button in the top left corner of the Extensions page

4. In the file browser that appears, navigate to and select the `dist` folder that is produced when dev or build is run and is where the Chrome extension files are located

5. Click "Open" to load the extension and you should be good to go.

## Testing

No real test have been added but an example has been added at `./src/example.spec.ts`. To run tests, in the console run:

```
npm run test
```

This will run any file in the repo that contains `.spec.` or `.test.` in the file name.

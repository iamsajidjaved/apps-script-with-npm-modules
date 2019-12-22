# Using ES6 & Node Modules in Google Apps Script (example project)

This is an example project where we use ES6 features in [Google Apps Script](https://en.wikipedia.org/wiki/Google_Apps_Script)

This project uses webpack and babel to bundle ES6 code and then use the [clasp command line tool](https://github.com/google/clasp) to upload the project to your Google Account.

See the [full article here](http://blog.gsmart.in/es6-and-npm-modules-in-google-apps-script/)

## Usage

Install clasp command line tool 

```bash
npm install @google/clasp -g
```

Then login to your Google account

```bash
clasp login
```

Open terminal and clone this project.

You have to create an Apps Script project to run this code.

```bash
clasp create --type standalone --title "Apps Script with Webpack and babel"
```

Now build the project and upload to your newly created Apps Script project

```bash
npm install
npm run deploy
```


## Approach

Google Apps Script expects to have some global functions in your code. For a standalone web app project, it is the doGet()
function. doGet() function renders the standalone web app's main page. You can see this function in server/api.js

In server/lib.js, we have the advanced ES6 code. we use babel and webpack to cross compile lib.js and place it in the distribution. (see the webpack configutaion file) 
We upload only the compiled bundle and api.js (api.js is uploaded unmodified)

## Next steps

See [AppsCurry Step 2](https://github.com/gsmart-in/AppsCurryStep2) where we add npm modules (momentjs and lodash) to the project. 

See the [complete article series here](http://blog.gsmart.in/es6-and-npm-modules-in-google-apps-script/).

#### Disclaimers
The author does not represent nor associated with Google in any way. This is project is only for learning purposes.

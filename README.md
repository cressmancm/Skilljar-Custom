# Skilljar Custom Components

This is a Node.js project for building custom components for use in the Skilljar Course Platform.

## Overview
The goal of this project is to be forked and edited for each new partner that is customizing their training experience. Here is the example folder structure:

```
/src
	/components
		/example-component
			/example-component.css
			/example-component.html
			/example-component.js
			/example-component.scss
	/images
	/sass
	/vendor/js
/dist
	/images/
	/markup.html
	/script.js
	/style.css
/Gruntfile.js
```

### /src/components
The Components folder is the bulk of this project. Each component has up to 4 files: SCSS, HTML, JS, and CSS. 

  *  The SCSS file is where all the styles for an individual component reside. You can also put any page specific styles that are related to the component. This file is automatically compiled by Grunt into CSS as well as compiled and joined with all the other component SCSS files in `/dist/style.css`.
  *  The HTML file holds all the markup for the component. This file is automatically joined with all the other componentns markup in `/dist/markup.html` to make it easy to copy/paste into your training sites theme.
  *  The JS file is all the javascript needed to run your component. This file is automatically joined with all the other componentns markup in `/dist/script.js` to make it easy to copy/paste into your training sites theme.
  *  The CSS file is automatically compiled by Grunt and should not be edited manually. To make changes to the CSS, edit the components SCSS file and compile with Grunt.

It is assumed you are adding the HTML via your Theme's Global Code Snippet. This means you will copy/paste the HTML manually when changes are made. The HTML added via the Global Code Snippet will be added to the HTML document right before the closing </body> tag. You will then need to position the HTML via Javascript. Look at the example files provided to see how this works. If you only need HTML on your Course Catalog, you can instead copy/paste that HTML to your Domain's Catalog Header HTML Snippet in the [domain's Catalog Settings](https://dashboard.skilljar.com/publishing/).

### /src/images
Place any images you need in this folder. You'll want to make sure this folder is publically accessible or you'll need to host these images elsewhere (like [S3](https://aws.amazon.com/s3/)). The images in this folder will be optimized via [imagemin](https://github.com/imagemin/imagemin) and copied to the `/dist/images` folder for distribution.

### /src/sass
There are a few helper files in the sass folder for building the CSS, as well any non-component, general styles. If you have some CSS that is not specific to a single component, add it to `/sass/style.scss`. 

### /src/vendor/js
If your training site needs additional Javascript libraries include them here.
  
### /dist
The Dist folder, short for Distribution, is all your compiled HTML, CSS, and Javascript from the various components and any vendor specific Javascript. You can either copy/paste the compiled CSS and JS into your [Global head snippet in your Theme](https://dashboard.skilljar.com/themes/), or you can reference them in a `<link>` or `<script>` tags.

### /Gruntfile.js
The Gruntfile establishes all the tasks that should be run in order to compile the code. When adding or removing components you will need to update the Gruntfile appropriately. You can learn more about the [Gruntfile on the Grunt JS website](https://gruntjs.com/getting-started#the-gruntfile).

## Setup
1. Install [npm](https://docs.npmjs.com/getting-started/what-is-npm)
2. Run `npm install` from the project folder


## Making Changes
This project uses [Grunt](https://gruntjs.com/) to automatically compile the SASS, JavaScript, and HTML into production ready files. To compile the files, start a watch script that monitors for changes, and a LiveReload server to reload any connected development browsers, run `grunt` in the command line in the root of the project folder. 

While grunt is running, any changes made to the code will automatically trigger Grunt to recompile the HTML, JS, and CSS. 

## Publishing
There are two ways to make your new code live.

First, after compiling the assets, you can simply commit your changed files to Github and host those files:

  1. Make any changes to the source files
  2. Commit and push your changes to Github
  3. View the raw file in Github. For example, a compiled version of script.js: [https://raw.githubusercontent.com/cressmancm/Skilljar-Custom/master/dist/script.js](https://raw.githubusercontent.com/cressmancm/Skilljar-Custom/master/dist/script.js)
  4. Add the Javascript via a `<script>` tag to your Theme > Global Head Snippet: `<script src="https://raw.githubusercontent.com/cressmancm/Skilljar-Custom/master/dist/script.js"></script>`
  5. Add the CSS via a `<link>` tag to your Theme's Global Head Snippet: `<link rel="stylesheet" href="https://raw.githubusercontent.com/cressmancm/Skilljar-Custom/master/dist/style.css">`
  6. Copy/Paste the contents of `/dist/markup.html` to your Theme's Global Code Snippet.
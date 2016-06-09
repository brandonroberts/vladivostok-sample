System.config({
  //map tells the System loader where to look for things
  map: {
    app: 'dist/src',
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',
  },
  //packages defines our app package
  packages: {
    app: {
      main: './main.js',
      defaultExtension: 'js'
    },
    '@angular/core': {
      main: 'core.umd.js',
      defaultExtension: 'js'
    },
    '@angular/common': {
      main: 'common.umd.js',
      defaultExtension: 'js'
    },
    '@angular/compiler': {
      main: 'compiler.umd.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser': {
      main: 'platform-browser.umd.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser-dynamic': {
      main: 'platform-browser-dynamic.umd.js',
      defaultExtension: 'js'
    },
    '@angular/http': {
      main: 'http.umd.js',
      defaultExtension: 'js'
    },
    '@angular/router': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    'rxjs': {
      main: 'index.js',
      defaultExtension: 'js'
    }
  }
});

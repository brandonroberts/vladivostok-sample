System.config({
  //map tells the System loader where to look for things
  map: {
    app: 'dist/src',
    '@angular/core': 'node_modules/@angular/core',
    '@angular/common': 'node_modules/@angular/common',
    '@angular/compiler': 'node_modules/@angular/compiler',
    '@angular/platform-browser': 'node_modules/@angular/platform-browser',
    'rxjs': 'node_modules/rxjs',
    '@angular/router': 'node_modules/@angular/router/build/src'
  },
  //packages defines our app package
  packages: {
    app: {
      main: './main.js',
      defaultExtension: 'js'
    },
    '@angular/core': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/common': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/compiler': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/http': {
      main: 'index.js',
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

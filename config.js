System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  //map tells the System loader where to look for things
  map: {
    app: './src',
    '@angular/core': 'http://npmcdn.com/@angular/core@2.0.0-rc.1',
    '@angular/common': 'http://npmcdn.com/@angular/common@2.0.0-rc.1',
    '@angular/compiler': 'http://npmcdn.com/@angular/compiler@2.0.0-rc.1',
    '@angular/platform-browser': 'http://npmcdn.com/@angular/platform-browser@2.0.0-rc.1',
    '@angular/platform-browser-dynamic': 'http://npmcdn.com/@angular/platform-browser-dynamic@2.0.0-rc.1',
    'rxjs': 'https://npmcdn.com/rxjs@5.0.0-beta.6',
    '@angular/router': './router'
  },
  //packages defines our app package
  packages: {
    app: {
      main: './main.ts',
      defaultExtension: 'ts'
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
    }
  }
});

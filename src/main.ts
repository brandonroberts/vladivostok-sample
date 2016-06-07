//main entry point
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';

bootstrap(AppComponent)
.catch(err => console.error(err));

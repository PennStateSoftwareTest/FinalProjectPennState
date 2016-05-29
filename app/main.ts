/**
 * Created by jnevins on 5/19/16.
 */
import {bootstrap}    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [
    HTTP_PROVIDERS
]);
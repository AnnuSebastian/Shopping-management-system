//starting point of the app

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule) //starting module press F12 to go the module
  .catch(err => console.error(err));

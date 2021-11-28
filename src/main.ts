import { enableProdMode, MissingTranslationStrategy, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// use the require method provided by webpack
declare const require;
// we use the webpack raw-loader to return the content as a string
const translations = require(`raw-loader!./src/translation/translate.xlf`);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import "@angular/compiler";
import "zone.js";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.component';

platformBrowserDynamic().bootstrapModule(AppModule);
// bootstrapApplication(AppComponent);
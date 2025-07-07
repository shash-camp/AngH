import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

// ✅ Import this:
import { ReactiveFormsModule } from '@angular/forms';

export const appConfig = {
  providers: [
    provideRouter(routes),
    // ✅ Register ReactiveFormsModule globally
    importProvidersFrom(ReactiveFormsModule)
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));

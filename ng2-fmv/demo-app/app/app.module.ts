import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppTranslationModule } from './app.translation.module';
import { Ng2MDFValidationMessagesModule } from '../../ng2-cli-vm';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppTranslationModule,
    Ng2MDFValidationMessagesModule.globalConfig({
      class: 'has-error',
      defaultErrorMessages: {
        required: 'hello',
        email: 'Invalid email!',
        minLength: 'Minimum length is {0}!',
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ValidationMessageComponent } from './messages.component';
import { ValidationMessagesConfiguration } from './config';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './demo-app/assets/i18n/US/', '.json');
}

const translationOptions = {
  loader: {
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [Http]
  }
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(translationOptions)
  ],
  declarations: [
    ValidationMessageComponent
  ],
  exports: [
    ValidationMessageComponent
  ]
})
export class Ng2MDFValidationMessagesModule {
  /**
   * Configure global values for the module.
   * @param configObject Object with custom global configurations. E.g. { defaultErrorMessages: { required: 'Default Custom Required Message' }}
   */
  static globalConfig(configObject: any): ModuleWithProviders {
    return {
      ngModule: Ng2MDFValidationMessagesModule,
      providers: [
        {
          provide: ValidationMessagesConfiguration,
          useValue: configObject
        }
      ]
    };
  }
}

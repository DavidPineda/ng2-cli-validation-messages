import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { ValidationExtensions } from '../../ng2-cli-vm';

@Component({
  selector: 'demo-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo-app works!';
  editorForm: FormGroup;
  firstName: FormControl;
  genderId: FormControl;
  public genders: Array<any> = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstName = this.formBuilder.control('', [
      ValidationExtensions.required(),
      ValidationExtensions.minLength(3)
    ]);
    this.genderId = this.formBuilder.control('', ValidationExtensions.selectValue());
    this.editorForm = this.formBuilder.group({
      firstName: this.firstName,
    });
    let select = { id: -1, text: 'seleccione' };
    let female = { id: 1, text: 'forms.labels.female' };
    let male = { id: 2, text: 'forms.labels.male' };
    this.genders.push(select);
    this.genders.push(female);
    this.genders.push(male);
    this.genderId.setValue(-1);
  }
}

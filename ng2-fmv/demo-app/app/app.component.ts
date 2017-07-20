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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstName = this.formBuilder.control('', [
      ValidationExtensions.required(),
      ValidationExtensions.minLength(3)
    ]);
    this.editorForm = this.formBuilder.group({
      firstName: this.firstName,
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-health-service',
  templateUrl: './edit-health-service.component.html',
  styleUrls: ['./edit-health-service.component.scss']
})
export class EditHealthServiceComponent implements OnInit {

  public editHealthServiceForm: FormGroup;

  get name() {
    return this.editHealthServiceForm.controls['name'];
  }

  constructor(private _formBuilder : FormBuilder) {
    this.editHealthServiceForm = _formBuilder.group({
      'name' : ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  formSubmit() {
    
  }

}

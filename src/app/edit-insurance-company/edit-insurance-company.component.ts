import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-insurance-company',
  templateUrl: './edit-insurance-company.component.html',
  styleUrls: ['./edit-insurance-company.component.scss']
})
export class EditInsuranceCompanyComponent implements OnInit {

  public editInsuranceCompanyForm: FormGroup;

  get name() {
    return this.editInsuranceCompanyForm.controls['name'];
  }

  constructor(private _formBuilder : FormBuilder) {
    this.editInsuranceCompanyForm = _formBuilder.group({
      'name' : ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  formSubmit() {
    
  }

}

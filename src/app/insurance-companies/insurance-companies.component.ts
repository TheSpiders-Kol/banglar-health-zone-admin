import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance-companies',
  templateUrl: './insurance-companies.component.html',
  styleUrls: ['./insurance-companies.component.scss']
})
export class InsuranceCompaniesComponent implements OnInit {

  public addInsuranceCompanyForm: FormGroup;

  get name() {
    return this.addInsuranceCompanyForm.controls['name'];
  }

  constructor(private _formBuilder : FormBuilder, private _router: Router) {
    this.addInsuranceCompanyForm = _formBuilder.group({
      'name' : ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  formSubmit() {
    
  }

  addInsuranceCompany(){
    this._router.navigate(['editInsuranceCompany'])
  }

}

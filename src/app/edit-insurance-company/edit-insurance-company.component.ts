import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { InsuranceCompanyService } from '../services/insurance-company.service';
import { Snackbar } from '../snackbar/snackbar.component';
import { InsuranceCompany } from '../_models/insurance-company';

@Component({
  selector: 'app-edit-insurance-company',
  templateUrl: './edit-insurance-company.component.html',
  styleUrls: ['./edit-insurance-company.component.scss']
})
export class EditInsuranceCompanyComponent implements OnInit {

  public editInsuranceCompanyForm: FormGroup;
  public insuranceCompanyDetails : InsuranceCompany = new InsuranceCompany();


  constructor(private _formBuilder : FormBuilder,
    private _dataService : DataService,
    private _insuranceService : InsuranceCompanyService,
    private _snackAlert : Snackbar,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.editInsuranceCompanyForm = _formBuilder.group({
      'name' : ['']
    });
  }

  ngOnInit(): void {
    this.insuranceCompanyDetails.$company = atob(this._route.snapshot.queryParamMap.get('username') || '');
    this.insuranceCompanyDetails.$id = parseInt(this._route.snapshot.queryParamMap.get('id' || ''));
    this.editInsuranceCompanyForm.controls['name'].setValue(this.insuranceCompanyDetails.$company);
  }

  formSubmit() {
    this.insuranceCompanyDetails.$company = this.editInsuranceCompanyForm.controls['name'].value;
    this._insuranceService.updateInsuranceCompany(this.insuranceCompanyDetails.$id.toString(),this.insuranceCompanyDetails.$company)
      .subscribe(
        data => {
          this._snackAlert.alert(data);
          this._router.navigate(['/insuranceCompanies']);
        }
      )
  }

}

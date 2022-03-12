import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { JsonConvert } from 'json2typescript';
import { DataService } from '../services/data.service';
import { HealthServiceService } from '../services/health-service.service';
import { InsuranceCompanyService } from '../services/insurance-company.service';
import { Snackbar } from '../snackbar/snackbar.component';
import { HealthServices } from '../_models/health-services';
import { InsuranceCompany } from '../_models/insurance-company';


@Component({
  selector: 'app-insurance-companies',
  templateUrl: './insurance-companies.component.html',
  styleUrls: ['./insurance-companies.component.scss']
})
export class InsuranceCompaniesComponent implements OnInit {


  public addInsuranceForm: FormGroup;
  public editNameForm: FormGroup;
  public InsuranceCompanyList: InsuranceCompany[];
  public listFetched: Boolean = false;

  get name() {
    return this.addInsuranceForm.controls['name'];
  }

  public get editedName() {
    return (this.editNameForm.controls['editedName']) as FormArray;
  }

  constructor(private _formBuilder : FormBuilder,
    private _router: Router,
    private _insuranceCompany: InsuranceCompanyService,
    private _dataService: DataService,
    private _snackBar: Snackbar) {
    this.addInsuranceForm = _formBuilder.group({
      'name' : ['', [Validators.required]]
    });
    this.editNameForm = _formBuilder.group({
      'editedName' : ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.fetchList()
  }

  fetchList(){
    this._insuranceCompany.listInsuranceCompanies()
    .subscribe(
      data => {
        let jsonConvert: JsonConvert = new JsonConvert();
        this.InsuranceCompanyList = jsonConvert.deserializeArray<InsuranceCompany>(data['insurance'], InsuranceCompany);
        this.listFetched = true;
      }
    )
  }

  addCompany(){
    this.listFetched = false;
    this._insuranceCompany.addInsuranceCompany(this.addInsuranceForm.controls['name'].value)
    .subscribe(
      data => {
        this.addInsuranceForm.controls['name'].setValue('');
        this._snackBar.alert(data.message);
        this.fetchList();
      }
    )
  }

  goToEditInsuranceComapny(i : number){
    this._router.navigate(['/editInsuranceCompany'], {
      queryParams: {
        id: this.InsuranceCompanyList[i].$id,
        username: btoa(this.InsuranceCompanyList[i].$company)
      }
    });
  }
}

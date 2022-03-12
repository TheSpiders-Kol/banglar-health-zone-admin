import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { HospitalService } from '../services/hospital.service';
import { Snackbar } from '../snackbar/snackbar.component';
import { Hospital } from '../_models/hospital';
import { HealthServiceService } from '../services/health-service.service';
import { JsonConvert } from 'json2typescript';
import { HealthServices } from '../_models/health-services';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgModule } from "@angular/core";
import { InsuranceCompanyService } from '../services/insurance-company.service';
import { InsuranceCompany } from '../_models/insurance-company';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.scss']
})
export class AddHospitalComponent implements OnInit {

  public addHospitalForm: FormGroup;
  public formSubmitted: boolean = false;
  public healthServices: HealthServices[];
  public insuranceList: InsuranceCompany[];
  public fetchedHealthList : Boolean= false;
  public fetchedInsurance : Boolean= false;
  public hsSelectedItems = [];
  public insSelectedItems = [];
  public hsDropdownSettings: IDropdownSettings;
  // hs for health Service


  get name() {
    return this.addHospitalForm.controls['name'];
  }

  get contactNumber() {
    return this.addHospitalForm.controls['contactNumber'];
  }

  get registeredEmail() {
    return this.addHospitalForm.controls['registeredEmail'];
  }

  get address() {
    return this.addHospitalForm.controls['address'];
  }

  get pin() {
    return this.addHospitalForm.controls['pin'];
  }

  get district() {
    return this.addHospitalForm.controls['district'];
  }

  get noOfHouseDoctors() {
    return this.addHospitalForm.controls['noOfHouseDoctors'];
  }

  get noOfVisitingConsultant() {
    return this.addHospitalForm.controls['noOfVisitingConsultant'];
  }

  get sanctionedBedStrength() {
    return this.addHospitalForm.controls['sanctionedBedStrength'];
  }

  constructor(private _formBuilder : FormBuilder,
              private _hospitalService :HospitalService,
              private _snackbar : Snackbar,
              private _healthService: HealthServiceService,
              private _insuranceService: InsuranceCompanyService) {
    this.addHospitalForm = _formBuilder.group({
      'name' : ['', [Validators.required]],
      'contactNumber' : ['', [Validators.required]],
      'registeredEmail' : ['', [Validators.required]],
      'address' : ['', [Validators.required]],
      'pin' : ['',[Validators.required]],
      'district': ['', [Validators.required]],
      'noOfHouseDoctors': ['', [Validators.required]],
      'noOfVisitingConsultant': ['', [Validators.required]],
      'sanctionedBedStrength': ['', [Validators.required]],
      'services': this._formBuilder.array([]),
      'supportedInsurance': this._formBuilder.array([]),
      'active': [false],
      'coronaHospital': [false],
      'typeOfHospital' : ['', [Validators.required]],
      'getItems' : [[]]
    });
  }

  ngOnInit(): void {
    this._healthService.listHealthServices()
    .subscribe(
      data => {
        let jsonConvert: JsonConvert = new JsonConvert();
        this.healthServices = jsonConvert.deserializeArray<HealthServices>(data['healthServices'], HealthServices);
        this.fetchedHealthList = true;
      }
    );
    this._insuranceService.listInsuranceCompanies()
    .subscribe(
      data =>{
        let jsonConvert: JsonConvert = new JsonConvert();
        this.insuranceList = jsonConvert.deserializeArray<InsuranceCompany>(data['insurance'], InsuranceCompany);
        this.fetchedInsurance = true;
      }
    )
  }

  initAddHospital() {
    this.formSubmitted = true;
    let x = this.populateForSave();
    this._hospitalService.addHospital(x)
      .subscribe(
        data =>{
          this._snackbar.alert('Hospital Added Successfully!!');

        }
      );
  }

  public populateForSave(){
    let x = new Hospital();
    x.$active = true;
    x.$address = this.addHospitalForm.controls['address'].value + ', Pin - ' +this.addHospitalForm.controls['pin'].value;
    x.$contactNumber = this.addHospitalForm.controls['contactNumber'].value;
    x.$coronaHospital = this.addHospitalForm.controls['coronaHospital'].value;
    x.$districtCode = this.addHospitalForm.controls['district'].value;
    x.$name = this.addHospitalForm.controls['name'].value;
    x.$noOfHouseDoctors = this.addHospitalForm.controls['noOfHouseDoctors'].value;
    x.$noOfVisitingConsultant = this.addHospitalForm.controls['noOfVisitingConsultant'].value;
    x.$registeredEmail = this.addHospitalForm.controls['registeredEmail'].value;
    x.$sanctionedBedStrength = this.addHospitalForm.controls['sanctionedBedStrength'].value;
    x.$type = this.addHospitalForm.controls['typeOfHospital'].value;
    x.$services = [];
    x.$services = this.hsSelectedItems;
    x.$supportedInsurance = this.insSelectedItems;
    return x;
  }

  onClear() {
    this.formSubmitted = false;
    this.addHospitalForm.reset();
  }

selectedHl(id:number,name:string,e:Event){
  if((e.target as HTMLInputElement).checked){
    this.hsSelectedItems.push({id,name});
  }
  else{
    this.hsSelectedItems.forEach((element,index)=> {
      if(element.name == name) this.hsSelectedItems.splice(index,1);
    })
  };
  console.log(this.hsSelectedItems)
}

public selectedInsurance(id:number,company:string,e:Event){
  if((e.target as HTMLInputElement).checked){
    this.insSelectedItems.push({id,company});
  }
  else{
    this.insSelectedItems.forEach((element,index)=> {
      if(element.company == company) this.insSelectedItems.splice(index,1);
    })
  };
  console.log(this.insSelectedItems)
}



}

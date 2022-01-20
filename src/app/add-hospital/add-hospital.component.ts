import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.scss']
})
export class AddHospitalComponent implements OnInit {

  public addHospitalForm: FormGroup;
  public formSubmitted: boolean = false;

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

  get district() {
    return this.addHospitalForm.controls['district'];
  }

  get districtCode() {
    return this.addHospitalForm.controls['districtCode'];
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

  get services() {
    return this.addHospitalForm.controls['services'] as FormArray;
  }

  addMoreServices() {
    this.services.push(this._formBuilder.control(''));
  }

  get supportedInsurance() {
    return this.addHospitalForm.controls['supportedInsurance'] as FormArray;
  }

  addSupportedInsurance() {
    this.supportedInsurance.push(this._formBuilder.control(''));
  }

  constructor(private _formBuilder : FormBuilder) {
    this.addHospitalForm = _formBuilder.group({
      'name' : ['', [Validators.required]],
      'contactNumber' : ['', [Validators.required]],
      'registeredEmail' : ['', [Validators.required]],
      'address' : ['', [Validators.required]],
      'district': ['', [Validators.required]],
      'districtCode': ['', [Validators.required]],
      'noOfHouseDoctors': ['', [Validators.required]],
      'noOfVisitingConsultant': ['', [Validators.required]],
      'sanctionedBedStrength': ['', [Validators.required]],
      'services': this._formBuilder.array([]),
      'supportedInsurance': this._formBuilder.array([]),
      'active': [false],
      'coronaHospital': [false]
    });
  }

  ngOnInit(): void {
  }

  formSubmit() {
    this.formSubmitted = true;
  }

  onClear() {
    this.formSubmitted = false;
    this.addHospitalForm.reset();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-hospital',
  templateUrl: './edit-hospital.component.html',
  styleUrls: ['./edit-hospital.component.scss']
})
export class EditHospitalComponent implements OnInit {

  public editHospitalForm: FormGroup;
  public formSubmitted: boolean = false;

  get name() {
    return this.editHospitalForm.controls['name'];
  }

  get contactNumber() {
    return this.editHospitalForm.controls['contactNumber'];
  }

  get registeredEmail() {
    return this.editHospitalForm.controls['registeredEmail'];
  }

  get address() {
    return this.editHospitalForm.controls['address'];
  }

  get district() {
    return this.editHospitalForm.controls['district'];
  }

  get districtCode() {
    return this.editHospitalForm.controls['districtCode'];
  }

  get noOfHouseDoctors() {
    return this.editHospitalForm.controls['noOfHouseDoctors'];
  }

  get noOfVisitingConsultant() {
    return this.editHospitalForm.controls['noOfVisitingConsultant'];
  }

  get sanctionedBedStrength() {
    return this.editHospitalForm.controls['sanctionedBedStrength'];
  }

  get services() {
    return this.editHospitalForm.controls['services'] as FormArray;
  }

  addMoreServices() {
    this.services.push(this._formBuilder.control(''));
  }

  get supportedInsurance() {
    return this.editHospitalForm.controls['supportedInsurance'] as FormArray;
  }

  addSupportedInsurance() {
    this.supportedInsurance.push(this._formBuilder.control(''));
  }

  constructor(private _formBuilder : FormBuilder) {
    this.editHospitalForm = _formBuilder.group({
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

}

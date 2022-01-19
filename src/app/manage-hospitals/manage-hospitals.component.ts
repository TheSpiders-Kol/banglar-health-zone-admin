import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-hospitals',
  templateUrl: './manage-hospitals.component.html',
  styleUrls: ['./manage-hospitals.component.scss']
})
export class ManageHospitalsComponent implements OnInit {

  public searchHospitalForm: FormGroup;

  get name() {
    return this.searchHospitalForm.controls['name'];
  }

  get district() {
    return this.searchHospitalForm.controls['district'];
  }

  constructor(private _formBuilder : FormBuilder) {
    this.searchHospitalForm = _formBuilder.group({
      'name' : ['', [Validators.required]],
      'district': ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  formSubmit() {
    
  }

  onClear() {

  }

  goToEditHospital(){};

}

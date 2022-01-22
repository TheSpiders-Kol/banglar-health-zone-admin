import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-hospital',
  templateUrl: './manage-hospital.component.html',
  styleUrls: ['./manage-hospital.component.scss']
})
export class ManageHospitalComponent implements OnInit {

  public searchHospitalForm: FormGroup;

  get name() {
    return this.searchHospitalForm.controls['name'];
  }

  get district() {
    return this.searchHospitalForm.controls['district'];
  }

  constructor(private _formBuilder : FormBuilder, private _router: Router) {
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

  editHospital(){
    this._router.navigate(['editHospital'])
  }

}

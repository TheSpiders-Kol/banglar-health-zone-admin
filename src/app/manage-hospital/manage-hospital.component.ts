import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JsonConvert } from 'json2typescript';
import { HospitalService } from '../services/hospital.service';
import { Snackbar } from '../snackbar/snackbar.component';
import { Hospital } from '../_models/hospital';

@Component({
  selector: 'app-manage-hospital',
  templateUrl: './manage-hospital.component.html',
  styleUrls: ['./manage-hospital.component.scss']
})
export class ManageHospitalComponent implements OnInit {
  public hospitalList : Hospital[];
  public searchHospitalForm: FormGroup;
  public listGenerated :Boolean =false;

  get name() {
    return this.searchHospitalForm.controls['name'];
  }

  get district() {
    return this.searchHospitalForm.controls['district'];
  }

  constructor(private _formBuilder : FormBuilder,
    private _router: Router,
    private _hospitalService: HospitalService,
    private _snackbar: Snackbar) {
    this.searchHospitalForm = _formBuilder.group({
      'district' : ['', [Validators.required]],
      'corona': ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

 public getHospitalList() {
  this.listGenerated = false;
    this._hospitalService.listHospitals(this.searchHospitalForm.controls['district'].value,this.searchHospitalForm.controls['corona'].value)
    .subscribe(
      data =>{
        this.listGenerated = true;
        let jsonConvert: JsonConvert = new JsonConvert();
          this._snackbar.alert("Successful!!");
          this.hospitalList = jsonConvert.deserializeArray<Hospital>(data['hospitals'], Hospital);
      }
    )
  }

  onClear() {

  }

  editHospital(){
    this._router.navigate(['editHospital'])
  }


}

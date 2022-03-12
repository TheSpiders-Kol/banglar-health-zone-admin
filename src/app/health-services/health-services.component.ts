import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { JsonConvert } from 'json2typescript';
import { DataService } from '../services/data.service';
import { HealthServiceService } from '../services/health-service.service';
import { Snackbar } from '../snackbar/snackbar.component';
import { HealthServices } from '../_models/health-services';

@Component({
  selector: 'app-health-services',
  templateUrl: './health-services.component.html',
  styleUrls: ['./health-services.component.scss']
})
export class HealthServicesComponent implements OnInit {

  public addHealthServiceForm: FormGroup;
  public editNameForm: FormGroup;
  public healthServicesList: HealthServices[];
  public listFetched: Boolean = false;

  get name() {
    return this.addHealthServiceForm.controls['name'];
  }

  public get editedName() {
    return (this.editNameForm.controls['editedName']) as FormArray;
  }

  constructor(private _formBuilder : FormBuilder,
    private _router: Router,
    private _healthService: HealthServiceService,
    private _dataService: DataService,
    private _snackBar: Snackbar) {
    this.addHealthServiceForm = _formBuilder.group({
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
    this._healthService.listHealthServices()
    .subscribe(
      data => {
        let jsonConvert: JsonConvert = new JsonConvert();
        this.healthServicesList = jsonConvert.deserializeArray<HealthServices>(data['healthServices'], HealthServices);
        this.listFetched = true;
      }
    )
  }

  addHealthService(){
    this.listFetched = false;
    this._healthService.addHealthServices(this.addHealthServiceForm.controls['name'].value)
    .subscribe(
      data => {
        this.addHealthServiceForm.controls['name'].setValue('');
        this._snackBar.alert(data.message);
        this.fetchList();
      }
    )
  }

  goToEditHealthService(i : number){
    this._router.navigate(['/editHealthService'], {
      queryParams: {
        id: this.healthServicesList[i].$id,
        username: btoa(this.healthServicesList[i].$name)
      }
    });
  }
}

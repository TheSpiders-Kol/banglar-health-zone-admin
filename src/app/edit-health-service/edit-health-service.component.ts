import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { HealthServiceService } from '../services/health-service.service';
import { Snackbar } from '../snackbar/snackbar.component';
import { HealthServices } from '../_models/health-services';

@Component({
  selector: 'app-edit-health-service',
  templateUrl: './edit-health-service.component.html',
  styleUrls: ['./edit-health-service.component.scss']
})
export class EditHealthServiceComponent implements OnInit {

  public editHealthServiceForm: FormGroup;
  public healthServiceDetails : HealthServices = new HealthServices();


  constructor(private _formBuilder : FormBuilder,
    private _dataService : DataService,
    private _healthService : HealthServiceService,
    private _snackAlert : Snackbar,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.editHealthServiceForm = _formBuilder.group({
      'name' : ['']
    });
  }

  ngOnInit(): void {
    this.healthServiceDetails.$name = atob(this._route.snapshot.queryParamMap.get('username') || '');
    this.healthServiceDetails.$id = parseInt(this._route.snapshot.queryParamMap.get('id' || ''));
    this.editHealthServiceForm.controls['name'].setValue(this.healthServiceDetails.$name);
  }

  formSubmit() {
    this.healthServiceDetails.$name = this.editHealthServiceForm.controls['name'].value;
    this._healthService.updateName(this.healthServiceDetails.$id.toString(), this.healthServiceDetails.$name)
      .subscribe(
        data => {
          this._snackAlert.alert(data['message']);
          this._router.navigate(['/healthServices']);
        }
      )
  }

}

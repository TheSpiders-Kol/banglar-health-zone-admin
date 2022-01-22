import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health-services',
  templateUrl: './health-services.component.html',
  styleUrls: ['./health-services.component.scss']
})
export class HealthServicesComponent implements OnInit {

  public addHealthServiceForm: FormGroup;

  get name() {
    return this.addHealthServiceForm.controls['name'];
  }

  constructor(private _formBuilder : FormBuilder, private _router: Router) {
    this.addHealthServiceForm = _formBuilder.group({
      'name' : ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  formSubmit() {
    
  }

  addHealthService(){
    this._router.navigate(['editHealthService'])
  }

}

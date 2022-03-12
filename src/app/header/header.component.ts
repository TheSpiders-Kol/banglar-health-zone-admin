import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { Snackbar } from '../snackbar/snackbar.component';
import { AppConstants } from '../_constants/app.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn: boolean = false;

  constructor(private _dataService: DataService,
    private _authservice: AuthService,
    private _snackbar : Snackbar,
    private _router : Router) { }

  ngOnInit(): void {


    this._dataService.isLoggedIn$
      .subscribe(
        data => {
          this.isLoggedIn = data;
        }
      );
  }

  logout() {
		this.isLoggedIn=false;
		this._authservice.logout();
		this._router.navigate(['']);
	}

}

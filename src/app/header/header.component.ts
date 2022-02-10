import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public loggedInInfo: boolean = false;

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this._authService.isLoggedIn$
      .subscribe(
        data => {
          this.loggedInInfo = data;
        }
      );
  }

}

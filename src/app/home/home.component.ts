import { Component, OnInit } from '@angular/core';
import { TokenRefreshService } from '../services/token-refresh.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _tokenRefreshService : TokenRefreshService) { }

  ngOnInit(): void {
    console.log(this._tokenRefreshService.test)
  }

}

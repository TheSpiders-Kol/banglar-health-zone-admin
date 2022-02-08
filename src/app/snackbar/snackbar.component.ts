import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class Snackbar implements OnInit {

  constructor() { }

  ngOnInit() {}

  public alert(message: string) : void {
		var x = document.getElementById("snackbar");
		x.innerHTML = message;
		x.className = "show";
		setTimeout(function(){
       x.className = x.className.replace("show", "");
      }, 5000);
	}
}
